/* ================================================
   STORAGE.JS - LocalStorage Management
   Quản lý lưu trữ dữ liệu học tập
   ================================================ */

const Storage = {
  // Keys
  KEYS: {
    DIFFICULT_WORDS: 'eng_difficult_words',
    DIFFICULT_WORDS_TOPIC: 'eng_difficult_words_topic',
    DIFFICULT_WORDS_PART: 'eng_difficult_words_part',
    DAY_PROGRESS: 'eng_day_progress_',
    REVIEW_STATUS: 'eng_review_status_',
    DIFFICULT_REVIEW: 'eng_diff_review_',
    QUIZ_RESULTS: 'eng_quiz_results_',
    STREAK: 'eng_streak',
    LAST_STUDY_DATE: 'eng_last_study',
    CHECKLIST: 'eng_checklist_',
    SETTINGS: 'eng_settings'
    ,WORD_MASTERY: 'eng_word_mastery'
  },

  // ============================================
  // DIFFICULT WORDS (Kho từ khó thuộc)
  // ============================================
  getDifficultKey(scope = 'day') {
    if (scope === 'topic') return this.KEYS.DIFFICULT_WORDS_TOPIC;
    if (scope === 'part') return this.KEYS.DIFFICULT_WORDS_PART;
    return this.KEYS.DIFFICULT_WORDS;
  },

  normalizeDifficultScope(scope) {
    return ['day', 'topic', 'part'].includes(scope) ? scope : 'day';
  },

  inferDifficultScope(source) {
    if (typeof source === 'number') return 'day';
    const value = String(source || '').trim();
    if (!value || /^\d+$/.test(value)) return 'day';
    if (/^part\b/i.test(value) || /\bpart\s*\d\b/i.test(value)) return 'part';
    return 'topic';
  },

  migrateDifficultWordsByScope() {
    if (localStorage.getItem('eng_difficult_scope_migrated_v2') === '1') return;
    let legacy = [];
    try { legacy = JSON.parse(localStorage.getItem(this.KEYS.DIFFICULT_WORDS)) || []; }
    catch { legacy = []; }

    const buckets = { day: [], topic: [], part: [] };
    legacy.forEach(item => {
      const source = item.source || item.day;
      const scope = this.inferDifficultScope(source);
      buckets[scope].push({ ...item, source, sourceScope: scope });
    });

    ['day', 'topic', 'part'].forEach(scope => {
      const key = this.getDifficultKey(scope);
      let existing = [];
      if (scope !== 'day') {
        try { existing = JSON.parse(localStorage.getItem(key)) || []; }
        catch { existing = []; }
      }
      const map = {};
      existing.concat(buckets[scope]).forEach(item => {
        const wordKey = String(item.word || '').toLowerCase();
        if (wordKey) map[wordKey] = item;
      });
      localStorage.setItem(key, JSON.stringify(Object.values(map)));
    });

    localStorage.setItem('eng_difficult_scope_migrated_v2', '1');
  },

  getDifficultWords(scope = 'day') {
    scope = this.normalizeDifficultScope(scope);
    this.migrateDifficultWordsByScope();
    try {
      return JSON.parse(localStorage.getItem(this.getDifficultKey(scope))) || [];
    } catch { return []; }
  },

  saveDifficultWords(words, scope = 'day') {
    localStorage.setItem(this.getDifficultKey(this.normalizeDifficultScope(scope)), JSON.stringify(words));
  },

  addDifficultWord(wordObj, day, scope) {
    scope = this.normalizeDifficultScope(scope || this.inferDifficultScope(day));
    const words = this.getDifficultWords(scope);
    const exists = words.find(w => w.word === wordObj.word);
    if (!exists) {
      words.push({
        word: wordObj.word,
        meaning: wordObj.meaning,
        type: wordObj.type,
        example: wordObj.example,
        viAnswers: wordObj.viAnswers,
        usage: wordObj.usage,
        ipa: wordObj.ipa,
        day: day,
        source: day,
        sourceScope: scope,
        addedAt: new Date().toISOString(),
        reviewCount: 0,
        correctCount: 0,
        box: 1, // SRS Box (1-5)
        nextReview: new Date().toISOString() // Due immediately when added
      });
      this.saveDifficultWords(words, scope);
    } else {
      // If it already exists, reset box and make it due immediately
      exists.box = 1;
      exists.nextReview = new Date().toISOString();
      exists.source = day;
      exists.sourceScope = scope;
      this.saveDifficultWords(words, scope);
    }
    return words;
  },

  removeDifficultWord(word, scope = 'day') {
    let words = this.getDifficultWords(scope);
    words = words.filter(w => w.word !== word);
    this.saveDifficultWords(words, scope);
    return words;
  },

  isDifficultWord(word, scope = 'day') {
    return this.getDifficultWords(scope).some(w => w.word === word);
  },

  getWordMasteryMap() {
    try { return JSON.parse(localStorage.getItem(this.KEYS.WORD_MASTERY)) || {}; }
    catch { return {}; }
  },

  getWordMastery(word) {
    const item = this.getWordMasteryMap()[String(word).toLowerCase()];
    if (!item) return { status: 'new', correct: 0, wrong: 0, nextReview: null };
    if (item.nextReview && new Date(item.nextReview) <= new Date() && item.status !== 'mastered') {
      return { ...item, status: 'due' };
    }
    return item;
  },

  recordWordAttempt(wordObj, isCorrect) {
    const map = this.getWordMasteryMap();
    const key = String(wordObj.word).toLowerCase();
    const item = map[key] || { status: 'learning', correct: 0, wrong: 0, nextReview: null };
    if (isCorrect) item.correct += 1;
    else item.wrong += 1;

    if (item.wrong >= 2 && item.correct < item.wrong + 2) item.status = 'struggling';
    else if (item.correct >= 4 && item.correct >= item.wrong * 2 + 2) item.status = 'mastered';
    else item.status = 'learning';

    const delay = item.status === 'mastered' ? 7 * 86400000 : isCorrect ? 86400000 : 0;
    item.nextReview = new Date(Date.now() + delay).toISOString();
    map[key] = item;
    localStorage.setItem(this.KEYS.WORD_MASTERY, JSON.stringify(map));
    return item;
  },

  updateDifficultWordStats(word, isCorrect, scope = 'day') {
    const words = this.getDifficultWords(scope);
    const w = words.find(x => x.word === word);
    if (w) {
      w.reviewCount = (w.reviewCount || 0) + 1;
      if (!w.box) w.box = 1;

      if (isCorrect) {
        w.correctCount = (w.correctCount || 0) + 1;
        w.box += 1;

        if (w.box > 5) {
          // Graduated! Remove from difficult list
          this.removeDifficultWord(word, scope);
          return true; // graduated
        }

        // Set next review interval based on new box
        const now = new Date();
        let intervalMs = 0;
        switch (w.box) {
          case 2:
            intervalMs = 24 * 60 * 60 * 1000; // 1 day
            break;
          case 3:
            intervalMs = 3 * 24 * 60 * 60 * 1000; // 3 days
            break;
          case 4:
            intervalMs = 7 * 24 * 60 * 60 * 1000; // 7 days
            break;
          case 5:
            intervalMs = 14 * 24 * 60 * 60 * 1000; // 14 days
            break;
          default:
            intervalMs = 12 * 60 * 60 * 1000; // 12 hours
        }
        w.nextReview = new Date(now.getTime() + intervalMs).toISOString();
      } else {
        // Demote back to Box 1 and make due immediately
        w.box = 1;
        w.nextReview = new Date().toISOString();
      }
      this.saveDifficultWords(words, scope);
    }
    return false; // not graduated
  },

  // ============================================
  // MASTERED WORDS (Từ đã thuộc)
  // ============================================
  getMasteredWords() {
    try {
      return JSON.parse(localStorage.getItem('eng_mastered_words')) || [];
    } catch { return []; }
  },

  isMasteredWord(word) {
    return this.getMasteredWords().includes(String(word).toLowerCase());
  },

  addMasteredWord(word) {
    const mastered = this.getMasteredWords();
    const w = String(word).toLowerCase();
    if (!mastered.includes(w)) {
      mastered.push(w);
      localStorage.setItem('eng_mastered_words', JSON.stringify(mastered));
    }
  },

  removeMasteredWord(word) {
    const mastered = this.getMasteredWords();
    const w = String(word).toLowerCase();
    const filtered = mastered.filter(x => x !== w);
    localStorage.setItem('eng_mastered_words', JSON.stringify(filtered));
  },

  // ============================================
  // LEARNING TRACK MANAGEMENT
  // ============================================
  getLearningTrack() {
    try {
      const settings = JSON.parse(localStorage.getItem(this.KEYS.SETTINGS)) || {};
      return settings.learningTrack || 'combo';
    } catch { return 'combo'; }
  },

  setLearningTrack(track) {
    try {
      const settings = JSON.parse(localStorage.getItem(this.KEYS.SETTINGS)) || {};
      settings.learningTrack = track;
      localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
    } catch {}
  },

  // ============================================
  // DAY PROGRESS
  // ============================================
  getDayProgress(day) {
    const track = this.getLearningTrack();
    const suffix = track === 'combo' ? '' : track + '_';
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.DAY_PROGRESS + suffix + day)) || {
        completed: false,
        startedAt: null,
        completedAt: null,
        tabsVisited: [],
        wordsLearned: 0
      };
    } catch { return { completed: false, startedAt: null, completedAt: null, tabsVisited: [], wordsLearned: 0 }; }
  },

  setDayStarted(day) {
    const track = this.getLearningTrack();
    const suffix = track === 'combo' ? '' : track + '_';
    const progress = this.getDayProgress(day);
    if (!progress.startedAt) {
      progress.startedAt = new Date().toISOString();
      localStorage.setItem(this.KEYS.DAY_PROGRESS + suffix + day, JSON.stringify(progress));
    }
  },

  setDayCompleted(day) {
    const track = this.getLearningTrack();
    const suffix = track === 'combo' ? '' : track + '_';
    const progress = this.getDayProgress(day);
    progress.completed = true;
    progress.completedAt = new Date().toISOString();
    localStorage.setItem(this.KEYS.DAY_PROGRESS + suffix + day, JSON.stringify(progress));
    this.updateStreak();
  },

  addTabVisited(day, tabName) {
    const track = this.getLearningTrack();
    const suffix = track === 'combo' ? '' : track + '_';
    const progress = this.getDayProgress(day);
    if (!progress.tabsVisited.includes(tabName)) {
      progress.tabsVisited.push(tabName);
      localStorage.setItem(this.KEYS.DAY_PROGRESS + suffix + day, JSON.stringify(progress));
    }
  },

  isDayCompleted(day) {
    return this.getDayProgress(day).completed;
  },

  isDayStarted(day) {
    return this.getDayProgress(day).startedAt !== null;
  },

  // ============================================
  // REVIEW STATUS (Ôn tập bắt buộc)
  // ============================================
  getReviewStatus(day) {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.REVIEW_STATUS + day)) || {
        difficultReviewDone: false,
        previousDayReviewDone: false
      };
    } catch { return { difficultReviewDone: false, previousDayReviewDone: false }; }
  },

  setDifficultReviewDone(day) {
    const status = this.getReviewStatus(day);
    status.difficultReviewDone = true;
    localStorage.setItem(this.KEYS.REVIEW_STATUS + day, JSON.stringify(status));
  },

  setPreviousDayReviewDone(day) {
    const status = this.getReviewStatus(day);
    status.previousDayReviewDone = true;
    localStorage.setItem(this.KEYS.REVIEW_STATUS + day, JSON.stringify(status));
  },

  isGatePassed(day) {
    const status = this.getReviewStatus(day);
    const dueWords = this.getDifficultWords().filter(w => !w.nextReview || new Date(w.nextReview) <= new Date());
    // Gate 1: difficult words review (only if there are due difficult words)
    const gate1 = dueWords.length === 0 || status.difficultReviewDone;
    // Gate 2: previous day review (only if day > 1 and previous day has been started)
    const gate2 = day <= 1 || status.previousDayReviewDone || !this.isDayStarted(day - 1);
    return gate1 && gate2;
  },

  needsDifficultReview(day) {
    if (this.getLearningTrack() === 'grammar') return false;
    const status = this.getReviewStatus(day);
    const dueWords = this.getDifficultWords().filter(w => !w.nextReview || new Date(w.nextReview) <= new Date());
    return dueWords.length > 0 && !status.difficultReviewDone;
  },

  needsPreviousDayReview(day) {
    if (this.getLearningTrack() === 'grammar') return false;
    if (day <= 1) return false;
    const status = this.getReviewStatus(day);
    if (status.previousDayReviewDone) return false;
    // Only require review if previous day was actually started
    return this.isDayStarted(day - 1);
  },

  // ============================================
  // QUIZ RESULTS
  // ============================================
  saveQuizResult(day, quizType, score, total) {
    const key = this.KEYS.QUIZ_RESULTS + day;
    let results;
    try { results = JSON.parse(localStorage.getItem(key)) || {}; }
    catch { results = {}; }
    results[quizType] = {
      score, total,
      percentage: Math.round((score / total) * 100),
      date: new Date().toISOString()
    };
    localStorage.setItem(key, JSON.stringify(results));
  },

  getQuizResults(day) {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.QUIZ_RESULTS + day)) || {};
    } catch { return {}; }
  },

  // ============================================
  // CHECKLIST
  // ============================================
  getChecklist(day) {
    const track = this.getLearningTrack();
    const suffix = track === 'combo' ? '' : track + '_';
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.CHECKLIST + suffix + day)) || {};
    } catch { return {}; }
  },

  toggleChecklistItem(day, itemId) {
    const track = this.getLearningTrack();
    const suffix = track === 'combo' ? '' : track + '_';
    const checklist = this.getChecklist(day);
    checklist[itemId] = !checklist[itemId];
    localStorage.setItem(this.KEYS.CHECKLIST + suffix + day, JSON.stringify(checklist));
    return checklist;
  },

  // ============================================
  // STREAK
  // ============================================
  getStreakData() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.STREAK)) || {
        current: 0,
        best: 0,
        lastDate: null
      };
    } catch { return { current: 0, best: 0, lastDate: null }; }
  },

  updateStreak() {
    const data = this.getStreakData();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (data.lastDate === today) return data; // Already counted today

    if (data.lastDate === yesterday) {
      data.current += 1;
    } else if (data.lastDate !== today) {
      data.current = 1;
    }

    if (data.current > data.best) {
      data.best = data.current;
    }

    data.lastDate = today;
    localStorage.setItem(this.KEYS.STREAK, JSON.stringify(data));
    return data;
  },

  // ============================================
  // STATS
  // ============================================
  getStats() {
    const difficultWords = this.getDifficultWords();
    const streak = this.getStreakData();
    let totalWordsLearned = 0;
    let daysCompleted = 0;
    let daysStarted = 0;

    for (let i = 1; i <= 60; i++) {
      const progress = this.getDayProgress(i);
      if (progress.completed) daysCompleted++;
      if (progress.startedAt) daysStarted++;
    }

    // Count words from completed days
    if (typeof DAYS_DATA !== 'undefined') {
      for (let i = 0; i < DAYS_DATA.length; i++) {
        const day = DAYS_DATA[i];
        if (this.isDayCompleted(day.day)) {
          totalWordsLearned += (day.words || []).length;
        }
      }
    }

    return {
      totalWordsLearned,
      difficultWordsCount: difficultWords.length,
      daysCompleted,
      daysStarted,
      currentStreak: streak.current,
      bestStreak: streak.best,
      progressPercent: Math.round((daysCompleted / 60) * 100)
    };
  },

  // Get the current day the user should be on
  getCurrentDay() {
    for (let i = 1; i <= 60; i++) {
      if (!this.isDayCompleted(i)) return i;
    }
    return 60;
  },

  // Check if a day is accessible
  isDayAccessible(day) {
    if (day === 1) return true;
    // A day is accessible if the previous day is completed OR started
    return this.isDayCompleted(day - 1) || this.isDayStarted(day - 1);
  },

  // ============================================
  // PREVIOUS DAY WORDS (for review)
  // ============================================
  getPreviousDayWords(currentDay) {
    if (typeof DAYS_DATA === 'undefined') return [];
    // Get words from the most recent previous day that has words
    for (let i = currentDay - 1; i >= 1; i--) {
      const dayData = DAYS_DATA.find(d => d.day === i);
      if (dayData && dayData.words && dayData.words.length > 0) {
        return dayData.words;
      }
    }
    return [];
  },

  // ============================================
  // RESET (for testing)
  // ============================================
  resetAll() {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('eng_')) {
        localStorage.removeItem(key);
      }
    });
  }
};
