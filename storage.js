/* ================================================
   STORAGE.JS - LocalStorage Management
   Quản lý lưu trữ dữ liệu học tập
   ================================================ */

const Storage = {
  // Keys
  KEYS: {
    DIFFICULT_WORDS: 'eng_difficult_words',
    DAY_PROGRESS: 'eng_day_progress_',
    REVIEW_STATUS: 'eng_review_status_',
    DIFFICULT_REVIEW: 'eng_diff_review_',
    QUIZ_RESULTS: 'eng_quiz_results_',
    STREAK: 'eng_streak',
    LAST_STUDY_DATE: 'eng_last_study',
    CHECKLIST: 'eng_checklist_',
    SETTINGS: 'eng_settings'
  },

  // ============================================
  // DIFFICULT WORDS (Kho từ khó thuộc)
  // ============================================
  getDifficultWords() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.DIFFICULT_WORDS)) || [];
    } catch { return []; }
  },

  addDifficultWord(wordObj, day) {
    const words = this.getDifficultWords();
    const exists = words.find(w => w.word === wordObj.word);
    if (!exists) {
      words.push({
        word: wordObj.word,
        meaning: wordObj.meaning,
        type: wordObj.type,
        example: wordObj.example,
        viAnswers: wordObj.viAnswers,
        day: day,
        addedAt: new Date().toISOString(),
        reviewCount: 0,
        correctCount: 0
      });
      localStorage.setItem(this.KEYS.DIFFICULT_WORDS, JSON.stringify(words));
    }
    return words;
  },

  removeDifficultWord(word) {
    let words = this.getDifficultWords();
    words = words.filter(w => w.word !== word);
    localStorage.setItem(this.KEYS.DIFFICULT_WORDS, JSON.stringify(words));
    return words;
  },

  isDifficultWord(word) {
    return this.getDifficultWords().some(w => w.word === word);
  },

  updateDifficultWordStats(word, isCorrect) {
    const words = this.getDifficultWords();
    const w = words.find(x => x.word === word);
    if (w) {
      w.reviewCount = (w.reviewCount || 0) + 1;
      if (isCorrect) w.correctCount = (w.correctCount || 0) + 1;
      // Auto-remove if answered correctly 3 times in a row
      if (w.correctCount >= 3) {
        this.removeDifficultWord(word);
        return true; // removed
      }
      localStorage.setItem(this.KEYS.DIFFICULT_WORDS, JSON.stringify(words));
    }
    return false;
  },

  // ============================================
  // DAY PROGRESS
  // ============================================
  getDayProgress(day) {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.DAY_PROGRESS + day)) || {
        completed: false,
        startedAt: null,
        completedAt: null,
        tabsVisited: [],
        wordsLearned: 0
      };
    } catch { return { completed: false, startedAt: null, completedAt: null, tabsVisited: [], wordsLearned: 0 }; }
  },

  setDayStarted(day) {
    const progress = this.getDayProgress(day);
    if (!progress.startedAt) {
      progress.startedAt = new Date().toISOString();
      localStorage.setItem(this.KEYS.DAY_PROGRESS + day, JSON.stringify(progress));
    }
  },

  setDayCompleted(day) {
    const progress = this.getDayProgress(day);
    progress.completed = true;
    progress.completedAt = new Date().toISOString();
    localStorage.setItem(this.KEYS.DAY_PROGRESS + day, JSON.stringify(progress));
    this.updateStreak();
  },

  addTabVisited(day, tabName) {
    const progress = this.getDayProgress(day);
    if (!progress.tabsVisited.includes(tabName)) {
      progress.tabsVisited.push(tabName);
      localStorage.setItem(this.KEYS.DAY_PROGRESS + day, JSON.stringify(progress));
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
    const difficultWords = this.getDifficultWords();
    // Gate 1: difficult words review (only if there are difficult words)
    const gate1 = difficultWords.length === 0 || status.difficultReviewDone;
    // Gate 2: previous day review (only if day > 1 and previous day has been started)
    const gate2 = day <= 1 || status.previousDayReviewDone || !this.isDayStarted(day - 1);
    return gate1 && gate2;
  },

  needsDifficultReview(day) {
    const status = this.getReviewStatus(day);
    const difficultWords = this.getDifficultWords();
    return difficultWords.length > 0 && !status.difficultReviewDone;
  },

  needsPreviousDayReview(day) {
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
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.CHECKLIST + day)) || {};
    } catch { return {}; }
  },

  toggleChecklistItem(day, itemId) {
    const checklist = this.getChecklist(day);
    checklist[itemId] = !checklist[itemId];
    localStorage.setItem(this.KEYS.CHECKLIST + day, JSON.stringify(checklist));
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
