const LS_KEY = "toeic_reading_vocab_progress_v1";
let currentPart = "part5";
let currentSet = "all";
let currentMode = "list";
let flashIndex = 0;
let quizWords = [];
let quizIndex = 0;
let quizCorrect = 0;
let answered = false;

// Dictation variables
let dictationWords = [];
let dictationIndex = 0;
let dictationCorrect = 0;
let dictationAnswered = false;
let dictationShowHint = false;

// New study modes variables
let abcdMode = "en-vi";
let abcdWords = [];
let abcdIndex = 0;
let abcdCorrect = 0;
let abcdWrong = 0;
let abcdAnswered = false;

let writeWords = [];
let writeIndex = 0;
let writeCorrect = 0;
let writeWrong = 0;
let writeAnswered = false;

let typeWords = [];
let typeIndex = 0;
let typeCorrect = 0;
let typeWrong = 0;
let typeAnswered = false;

function progress() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
  catch { return {}; }
}

function saveProgress(data) {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

function markLearned(word) {
  const p = progress();
  p[word] = true;
  saveProgress(p);
  render();
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.86;
  speechSynthesis.speak(u);
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function partData() {
  return TOEIC_READING_VOCAB.find(p => p.id === currentPart) || TOEIC_READING_VOCAB[0];
}

function wordsForPart(part) {
  return part.sets.flatMap(s => s.words);
}

function wordsForCurrentSet() {
  const part = partData();
  const sets = currentSet === "all" ? part.sets : part.sets.filter(s => s.name === currentSet);
  return sets.flatMap(s => s.words.map(w => ({ ...w, setName: s.name, part: part.part })));
}

function escapeAttr(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function renderNav() {
  const p = progress();
  document.getElementById("partNav").innerHTML = TOEIC_READING_VOCAB.map(part => {
    const words = wordsForPart(part);
    const done = words.filter(w => p[w.word]).length;
    return `<button class="${part.id === currentPart ? "active" : ""}" onclick="selectPart('${part.id}')">
      <strong style="${part.id === 'part5' ? 'color:#ef4444' : part.id === 'part6' ? 'color:#ec4899' : 'color:#3b82f6'}">${part.part}: ${part.title}</strong>
      <span>${done}/${words.length} từ đã học</span>
    </button>`;
  }).join("");
}

function renderHeader() {
  const part = partData();
  const words = wordsForCurrentSet();
  const p = progress();
  document.getElementById("partLabel").textContent = part.part;
  document.getElementById("partTitle").textContent = part.title;
  document.getElementById("partFocus").textContent = part.focus;
  document.getElementById("wordCount").textContent = `${words.length} từ trong nhóm`;
  document.getElementById("learnedCount").textContent = `${words.filter(w => p[w.word]).length} đã đánh dấu`;
}

function renderSets() {
  const part = partData();
  const setGrid = document.getElementById("setGrid");
  if (currentMode === "grammar") {
    setGrid.style.display = "none";
    return;
  }
  setGrid.style.display = "grid";
  const buttons = [
    `<button class="set-btn ${currentSet === "all" ? "active" : ""}" onclick="selectSet('all')"><strong>Tất cả</strong><span>${wordsForPart(part).length} từ</span></button>`,
    ...part.sets.map(set => `<button class="set-btn ${currentSet === set.name ? "active" : ""}" onclick="selectSet('${escapeAttr(set.name)}')"><strong>${set.name}</strong><span>${set.words.length} từ</span></button>`)
  ];
  setGrid.innerHTML = buttons.join("");
}

function renderModes() {
  document.querySelectorAll(".mode-tabs button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === currentMode);
    btn.onclick = () => {
      currentMode = btn.dataset.mode;
      flashIndex = 0;
      startQuiz();
      startDictation();
      startABCD();
      startWrite("enToVi");
      startWrite("viToEn");
      startTypeQuiz();
      render();
    };
  });
}

function renderContent() {
  if (currentMode === "flash") return renderFlash();
  if (currentMode === "quiz") return renderQuiz();
  if (currentMode === "abcd") return renderABCD();
  if (currentMode === "enToVi") return renderWrite("enToVi");
  if (currentMode === "viToEn") return renderWrite("viToEn");
  if (currentMode === "typeQuiz") return renderTypeQuiz();
  if (currentMode === "grammar") return renderGrammar();
  if (currentMode === "dictation") return renderDictation();
  renderList();
}

function renderGrammar() {
  const part = partData();
  const g = part.grammar;
  if (!g) {
    document.getElementById("modeContent").innerHTML = `
      <div class="empty-state" style="padding: 24px; text-align: center;">
        <div class="icon" style="font-size:32px;">📝</div>
        <p style="font-size:14px; margin-top:8px;">Hiện tại chưa có dữ liệu ngữ pháp cho phần này.</p>
      </div>
    `;
    return;
  }

  const structuresHtml = g.structures.map(s => `
    <div class="grammar-card">
      <div class="grammar-card-title">${s.title}</div>
      <div class="grammar-formula">${s.formula}</div>
      <div class="grammar-explanation">${s.explanation}</div>
      <div class="grammar-example"><b>Ví dụ:</b> ${s.example}</div>
    </div>
  `).join("");

  const trapsHtml = g.traps.map(t => `
    <div class="trap-card">
      <div class="trap-header">
        <span>⚠️</span> ${t.name}
      </div>
      <div class="trap-desc">${t.description}</div>
      <div class="trap-example"><b>Ví dụ bẫy:</b> ${t.example}</div>
      <div class="trap-tip"><b>💡 Cách tránh:</b> ${t.tip}</div>
    </div>
  `).join("");

  const tipsHtml = g.tips.map(tip => `
    <li>${tip}</li>
  `).join("");

  document.getElementById("modeContent").innerHTML = `
    <div class="grammar-container">
      <div class="grammar-overview-card">
        <h3><span>🎯</span> Hướng dẫn làm bài</h3>
        <p>${g.overview}</p>
      </div>

      <div class="grammar-section-title">📘 Cấu trúc ngữ pháp trọng tâm</div>
      <div class="grammar-grid">
        ${structuresHtml}
      </div>

      <div class="grammar-section-title">🚨 Các bẫy thường gặp (Traps)</div>
      <div class="traps-container">
        ${trapsHtml}
      </div>

      <div class="tips-list">
        <h3><span>💡</span> Mẹo làm bài nhanh hiệu quả</h3>
        <ul>
          ${tipsHtml}
        </ul>
      </div>
    </div>
  `;
}

function renderList() {
  const p = progress();
  const words = wordsForCurrentSet();
  document.getElementById("modeContent").innerHTML = `<div class="vocab-grid">${words.map(w => `
    <article class="vocab-card">
      <div class="vocab-word">
        <span>${w.word}${w.ipa ? ` <span class="vocab-ipa">${w.ipa}</span>` : ''}</span>
        <button class="speak-btn" onclick="speak('${escapeAttr(w.word)}')" title="Nghe phát âm">🔊</button>
      </div>
      <div class="vocab-meta">${w.type} · ${w.setName}</div>
      <div class="vocab-meaning">${w.meaning}</div>
      <div class="vocab-example">${w.example}</div>
      <div class="listening-actions" style="justify-content:flex-start">
        <button class="btn btn-sm ${p[w.word] ? "btn-success" : "btn-secondary"}" onclick="markLearned('${escapeAttr(w.word)}')">${p[w.word] ? "Đã học" : "Đánh dấu đã học"}</button>
        <button class="btn btn-warning btn-sm" onclick="addDifficult('${escapeAttr(w.word)}')">Từ khó</button>
      </div>
    </article>`).join("")}</div>`;
}

function renderFlash() {
  const words = wordsForCurrentSet();
  if (!words.length) return;
  const w = words[flashIndex % words.length];
  document.getElementById("modeContent").innerHTML = `
    <div class="progress"><div class="progress-bar" style="width:${(flashIndex + 1) / words.length * 100}%"></div></div>
    <div class="study-card">
      <div>
        <div class="study-word">${w.word}${w.ipa ? ` <span class="vocab-ipa" style="font-size: 20px;">${w.ipa}</span>` : ''}</div>
        <button class="speak-btn" onclick="speak('${escapeAttr(w.word)}')" title="Nghe phát âm">🔊</button>
        <div class="study-meaning" id="flashMeaning" style="display:none">${w.meaning}</div>
        <div class="study-example" id="flashExample" style="display:none">${w.example}</div>
      </div>
    </div>
    <div class="listening-actions">
      <button class="btn btn-success" onclick="showFlashAnswer()">Hiện nghĩa</button>
      <button class="btn btn-primary" onclick="nextFlash()">Từ tiếp theo</button>
      <button class="btn btn-secondary" onclick="prevFlash()">Từ trước</button>
      <button class="btn btn-warning" onclick="addDifficult('${escapeAttr(w.word)}')">Từ khó</button>
    </div>`;
}

function showFlashAnswer() {
  document.getElementById("flashMeaning").style.display = "block";
  document.getElementById("flashExample").style.display = "block";
}

function nextFlash() {
  const words = wordsForCurrentSet();
  flashIndex = (flashIndex + 1) % words.length;
  renderFlash();
}

function prevFlash() {
  const words = wordsForCurrentSet();
  flashIndex = (flashIndex - 1 + words.length) % words.length;
  renderFlash();
}

function startQuiz() {
  quizWords = shuffle(wordsForCurrentSet());
  quizIndex = 0;
  quizCorrect = 0;
  answered = false;
}

function renderQuiz() {
  if (!quizWords.length) startQuiz();
  if (quizIndex >= quizWords.length) {
    const pct = Math.round(quizCorrect / quizWords.length * 100);
    document.getElementById("modeContent").innerHTML = `<div class="quiz-summary">
      <div class="quiz-summary-score">${pct}%</div>
      <div class="quiz-summary-label">Đúng ${quizCorrect}/${quizWords.length}</div>
      <button class="btn btn-primary" onclick="startQuiz();renderQuiz()">Làm lại</button>
    </div>`;
    return;
  }
  const w = quizWords[quizIndex];
  const options = shuffle([w.meaning, ...shuffle(wordsForCurrentSet().filter(x => x.word !== w.word)).slice(0, 3).map(x => x.meaning)]);
  document.getElementById("modeContent").innerHTML = `
    <div class="progress"><div class="progress-bar" style="width:${quizIndex / quizWords.length * 100}%"></div></div>
    <div class="study-card">
      <div>
        <div class="text-muted">Câu ${quizIndex + 1}/${quizWords.length} · Chọn nghĩa đúng</div>
        <div class="study-word">${w.word}</div>
        <button class="speak-btn" onclick="speak('${escapeAttr(w.word)}')">🔊</button>
        <div class="quiz-options">${options.map(opt => `<button onclick="answerQuiz(this,'${escapeAttr(opt)}','${escapeAttr(w.meaning)}')">${opt}</button>`).join("")}</div>
      </div>
    </div>
    <div class="listening-actions"><span class="score-pill">Đúng ${quizCorrect}</span></div>`;
}

function answerQuiz(btn, selected, correct) {
  if (answered) return;
  answered = true;
  const ok = selected === correct;
  if (ok) quizCorrect++;
  btn.classList.add(ok ? "correct" : "wrong");
  document.querySelectorAll(".quiz-options button").forEach(b => {
    if (b.textContent === correct) b.classList.add("correct");
    b.disabled = true;
  });
  setTimeout(() => {
    quizIndex++;
    answered = false;
    renderQuiz();
  }, 1100);
}

function addDifficult(word) {
  const w = wordsForCurrentSet().find(item => item.word === word);
  if (w && typeof Storage !== "undefined") {
    Storage.addDifficultWord(w, `${w.part} - ${w.setName}`, 'part');
    alert(`Đã thêm "${word}" vào kho từ khó.`);
  }
}

function startDictation() {
  dictationWords = shuffle(wordsForCurrentSet());
  dictationIndex = 0;
  dictationCorrect = 0;
  dictationAnswered = false;
  dictationShowHint = false;
}

function renderDictation() {
  if (!dictationWords.length) startDictation();
  const container = document.getElementById("modeContent");

  if (dictationIndex >= dictationWords.length) {
    const pct = Math.round((dictationCorrect / dictationWords.length) * 100) || 0;
    let rankMessage = "Cần cố gắng hơn!";
    if (pct >= 85) rankMessage = "Xuất sắc! Tai nghe của bạn cực kỳ nhạy.";
    else if (pct >= 60) rankMessage = "Khá tốt! Hãy luyện tập thêm để hoàn hảo.";

    container.innerHTML = `
      <div class="quiz-summary" style="text-align: center; padding: 30px;">
        <div style="font-size:48px; margin-bottom:12px;">🏆</div>
        <div class="quiz-summary-score">${pct}%</div>
        <div class="quiz-summary-label">Đúng ${dictationCorrect}/${dictationWords.length} từ</div>
        <p style="color:var(--text-secondary); margin-bottom:20px;">${rankMessage}</p>
        <button class="btn btn-primary" onclick="startDictation(); renderDictation();">Làm lại</button>
      </div>
    `;
    return;
  }

  const w = dictationWords[dictationIndex];
  const charLength = w.word.length;

  container.innerHTML = `
    <div class="dictation-container">
      <div class="progress">
        <div class="progress-bar" style="width: ${(dictationIndex / dictationWords.length) * 100}%"></div>
      </div>
      
      <div class="dictation-card">
        <div class="text-muted" style="font-size:13px; font-weight:700;">
          Câu ${dictationIndex + 1}/${dictationWords.length} · Nghe và gõ lại từ vựng
        </div>
        
        <button class="dictation-speaker-btn" onclick="speak('${escapeAttr(w.word)}')" title="Bấm để nghe">🔊</button>
        
        <div class="dictation-input-container">
          <input type="text" id="dictInput" class="dictation-input" placeholder="Gõ từ nghe được tại đây..." autocomplete="off" onkeydown="if(event.key==='Enter') checkDictation()"/>
          <div class="dictation-char-length">Độ dài: ${charLength} ký tự</div>
        </div>

        <div id="dictFb" class="dictation-feedback"></div>

        <div id="dictHintBox" class="dictation-hint-box ${dictationShowHint ? "show" : ""}">
          <div class="dictation-hint-title">💡 GỢI Ý HỌC TẬP</div>
          <div class="dictation-hint-text">
            <strong>Nghĩa:</strong> ${w.meaning}<br/>
            ${w.ipa ? `<strong>Phát âm (IPA):</strong> <span style="color:var(--accent-hover);">${w.ipa}</span><br/>` : ''}
            <strong>Từ loại:</strong> ${w.type}
          </div>
        </div>

        <div class="listening-actions" style="margin-top: 8px; width: 100%; justify-content: center;">
          <button class="btn btn-primary" id="dictCheckBtn" onclick="checkDictation()">Kiểm tra</button>
          <button class="btn btn-warning" onclick="toggleDictationHint()">Gợi ý</button>
          <button class="btn btn-secondary" onclick="skipDictation()">Bỏ qua</button>
        </div>
      </div>
    </div>
  `;

  // Focus on input box
  setTimeout(() => {
    const input = document.getElementById("dictInput");
    if (input) input.focus();
  }, 100);

  // Automatically speak the word when showing
  if (!dictationAnswered) {
    setTimeout(() => {
      speak(w.word);
    }, 200);
  }
}

function toggleDictationHint() {
  dictationShowHint = !dictationShowHint;
  const hintBox = document.getElementById("dictHintBox");
  if (hintBox) {
    hintBox.classList.toggle("show", dictationShowHint);
  }
}

function checkDictation() {
  if (dictationAnswered) return;
  
  const w = dictationWords[dictationIndex];
  const input = document.getElementById("dictInput");
  const fb = document.getElementById("dictFb");
  if (!input) return;

  const userVal = input.value.trim().toLowerCase();
  const correctVal = w.word.toLowerCase();
  
  dictationAnswered = true;
  
  const checkBtn = document.getElementById("dictCheckBtn");
  if (checkBtn) checkBtn.disabled = true;

  if (userVal === correctVal) {
    dictationCorrect++;
    input.classList.add("correct");
    fb.className = "dictation-feedback correct";
    fb.innerHTML = `🎉 Chính xác! <b>${w.word}</b> ${w.ipa || ''}`;
    const p = progress();
    p[w.word] = true;
    saveProgress(p);
  } else {
    input.classList.add("wrong");
    fb.className = "dictation-feedback wrong";
    fb.innerHTML = `❌ Chưa đúng! Đáp án: <b>${w.word}</b> ${w.ipa || ''}`;
  }

  speak(w.word);

  setTimeout(() => {
    dictationIndex++;
    dictationAnswered = false;
    dictationShowHint = false;
    renderDictation();
  }, 1800);
}

function skipDictation() {
  if (dictationAnswered) return;
  dictationAnswered = true;
  
  const w = dictationWords[dictationIndex];
  const input = document.getElementById("dictInput");
  const fb = document.getElementById("dictFb");
  if (input) input.classList.add("wrong");
  if (fb) {
    fb.className = "dictation-feedback wrong";
    fb.innerHTML = `⏭️ Đã bỏ qua. Đáp án đúng: <b>${w.word}</b> ${w.ipa || ''}`;
  }

  speak(w.word);

  setTimeout(() => {
    dictationIndex++;
    dictationAnswered = false;
    dictationShowHint = false;
    renderDictation();
  }, 1800);
}

function startABCD() {
  const words = wordsForCurrentSet();
  abcdWords = shuffle(words).map(w => {
    const isEnVi = abcdMode === "en-vi";
    const prompt = isEnVi ? w.word : w.meaning;
    const answer = isEnVi ? w.meaning : w.word;
    const options = shuffle([
      answer,
      ...shuffle(words.filter(x => x.word !== w.word)).slice(0, 3).map(x => isEnVi ? x.meaning : x.word)
    ]);
    return { ...w, prompt, answer, options };
  });
  abcdIndex = 0;
  abcdCorrect = 0;
  abcdWrong = 0;
  abcdAnswered = false;
}

function renderABCD() {
  if (!abcdWords.length) startABCD();
  const container = document.getElementById("modeContent");
  const total = abcdWords.length;

  if (abcdIndex >= total) {
    const pct = Math.round((abcdCorrect / total) * 100) || 0;
    container.innerHTML = `
      <div class="quiz-summary" style="text-align:center; padding:30px;">
        <div style="font-size:48px; margin-bottom:12px;">🏆</div>
        <div class="quiz-summary-score">${pct}%</div>
        <div class="quiz-summary-label">Đúng ${abcdCorrect}/${total} câu</div>
        <button class="btn btn-primary" style="margin-top:16px;" onclick="startABCD(); renderABCD();">Làm lại</button>
      </div>
    `;
    return;
  }

  const w = abcdWords[abcdIndex];
  const isEnVi = abcdMode === "en-vi";

  container.innerHTML = `
    <div class="dictation-container">
      <div class="progress">
        <div class="progress-bar" style="width: ${(abcdIndex / total) * 100}%"></div>
      </div>
      <div style="display:flex; justify-content:center; gap:20px; margin-bottom:15px;">
        <label style="cursor:pointer; font-weight:800;"><input type="radio" name="abcdModeToggle" value="en-vi" ${isEnVi ? "checked" : ""} onchange="toggleABCDMode('en-vi')"/> Anh → Việt</label>
        <label style="cursor:pointer; font-weight:800;"><input type="radio" name="abcdModeToggle" value="vi-en" ${!isEnVi ? "checked" : ""} onchange="toggleABCDMode('vi-en')"/> Việt → Anh</label>
      </div>
      <div class="study-card" style="text-align:center; display:block; padding: 24px;">
        <div class="text-muted" style="font-size:13px; margin-bottom:8px;">
          Câu ${abcdIndex + 1}/${total} · Chọn đáp án chính xác
        </div>
        <div class="study-word" style="font-size:32px; font-weight: 800;">${w.prompt}</div>
        ${isEnVi ? `<button class="speak-btn" onclick="speak('${escapeAttr(w.word)}')" style="display:inline-block; margin-top:8px;">🔊 Nghe</button>` : ''}
        <div class="quiz-options" style="margin-top:20px;">
          ${w.options.map((opt, idx) => `
            <button class="abcd-option-btn" id="abcdOpt${idx}" onclick="checkABCDAnswer(this, '${escapeAttr(opt)}', '${escapeAttr(w.answer)}', ${idx})">${opt}</button>
          `).join("")}
        </div>
        <div id="abcdFb" class="dictation-feedback" style="margin-top:15px;"></div>
      </div>
      <div class="listening-actions" style="margin-top:10px;"><span class="score-pill">Đúng ${abcdCorrect} · Sai ${abcdWrong}</span></div>
    </div>
  `;

  if (isEnVi && !abcdAnswered) {
    speak(w.word);
  }
}

function toggleABCDMode(mode) {
  abcdMode = mode;
  startABCD();
  renderABCD();
}

function checkABCDAnswer(btn, selected, correct, idx) {
  if (abcdAnswered) return;
  abcdAnswered = true;

  const w = abcdWords[abcdIndex];
  const ok = selected === correct;
  const fb = document.getElementById("abcdFb");
  
  if (ok) {
    abcdCorrect++;
    btn.classList.add("correct");
    fb.className = "dictation-feedback correct";
    fb.innerHTML = `🎉 Chính xác! <b>${w.word}</b> ${w.ipa ? w.ipa : ''} - ${w.meaning}`;
  } else {
    abcdWrong++;
    btn.classList.add("wrong");
    fb.className = "dictation-feedback wrong";
    fb.innerHTML = `❌ Sai rồi! Đáp án đúng: <b>${w.answer}</b>`;
    for (let i = 0; i < 4; i++) {
      const optBtn = document.getElementById(`abcdOpt${i}`);
      if (optBtn && optBtn.textContent === correct) {
        optBtn.classList.add("correct");
      }
    }
    if (typeof Storage !== "undefined") {
      Storage.addDifficultWord(w, `${w.part} - ${w.setName}`, 'part');
    }
  }

  speak(w.word);

  setTimeout(() => {
    abcdIndex++;
    abcdAnswered = false;
    renderABCD();
  }, 1600);
}

function startWrite(mode) {
  writeWords = shuffle(wordsForCurrentSet());
  writeIndex = 0;
  writeCorrect = 0;
  writeWrong = 0;
  writeAnswered = false;
}

function renderWrite(mode) {
  if (!writeWords.length) startWrite(mode);
  const container = document.getElementById("modeContent");
  const total = writeWords.length;

  if (writeIndex >= total) {
    const pct = Math.round((writeCorrect / total) * 100) || 0;
    container.innerHTML = `
      <div class="quiz-summary" style="text-align:center; padding:30px;">
        <div style="font-size:48px; margin-bottom:12px;">🏆</div>
        <div class="quiz-summary-score">${pct}%</div>
        <div class="quiz-summary-label">Đúng ${writeCorrect}/${total} câu</div>
        <button class="btn btn-primary" style="margin-top:16px;" onclick="startWrite('${mode}'); renderWrite('${mode}');">Làm lại</button>
      </div>
    `;
    return;
  }

  const w = writeWords[writeIndex];
  const isEnVi = mode === "enToVi";
  const prompt = isEnVi ? w.word : w.meaning;

  container.innerHTML = `
    <div class="dictation-container">
      <div class="progress">
        <div class="progress-bar" style="width: ${(writeIndex / total) * 100}%"></div>
      </div>
      <div class="dictation-card">
        <div class="text-muted" style="font-size:13px; font-weight:700;">
          Câu ${writeIndex + 1}/${total} · ${isEnVi ? "Nhập nghĩa tiếng Việt" : "Nhập từ tiếng Anh"}
        </div>
        <div class="study-word" style="font-size:32px; font-weight:900;">${prompt}</div>
        ${isEnVi ? `<button class="speak-btn" onclick="speak('${escapeAttr(w.word)}')">🔊 Phát âm</button>` : ''}
        <div class="dictation-input-container" style="margin-top:15px;">
          <input type="text" id="writeInput" class="dictation-input" placeholder="${isEnVi ? "Nghĩa của từ này là gì?" : "Viết từ tiếng Anh tương ứng..."}" autocomplete="off" onkeydown="if(event.key==='Enter') checkWriteAnswer('${mode}')"/>
        </div>
        <div id="writeFb" class="dictation-feedback" style="margin-top:15px;"></div>
        <div class="listening-actions" style="margin-top: 8px; width:100%; justify-content:center;">
          <button class="btn btn-primary" id="writeCheckBtn" onclick="checkWriteAnswer('${mode}')">Kiểm tra</button>
          <button class="btn btn-secondary" onclick="skipWriteAnswer('${mode}')">Bỏ qua</button>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const input = document.getElementById("writeInput");
    if (input) input.focus();
  }, 100);

  if (isEnVi && !writeAnswered) {
    speak(w.word);
  }
}

function checkWriteAnswer(mode) {
  if (writeAnswered) return;
  const w = writeWords[writeIndex];
  const input = document.getElementById("writeInput");
  const fb = document.getElementById("writeFb");
  if (!input || !fb) return;

  const isEnVi = mode === "enToVi";
  const userVal = input.value.trim().toLowerCase();
  
  writeAnswered = true;
  const checkBtn = document.getElementById("writeCheckBtn");
  if (checkBtn) checkBtn.disabled = true;

  let isCorrect = false;
  if (isEnVi) {
    isCorrect = (w.viAnswers || []).some(ans => userVal.includes(ans.toLowerCase()) || ans.toLowerCase().includes(userVal)) || userVal === w.meaning.toLowerCase();
  } else {
    isCorrect = userVal === w.word.toLowerCase();
  }

  if (isCorrect) {
    writeCorrect++;
    input.classList.add("correct");
    fb.className = "dictation-feedback correct";
    fb.innerHTML = `🎉 Chính xác! <b>${w.word}</b> ${w.ipa ? w.ipa : ''} - ${w.meaning}`;
    const p = progress();
    p[w.word] = true;
    saveProgress(p);
  } else {
    writeWrong++;
    input.classList.add("wrong");
    fb.className = "dictation-feedback wrong";
    fb.innerHTML = `❌ Sai rồi! Đáp án đúng: <b>${isEnVi ? w.meaning : w.word}</b>`;
    if (typeof Storage !== "undefined") {
      Storage.addDifficultWord(w, `${w.part} - ${w.setName}`, 'part');
    }
  }

  speak(w.word);

  setTimeout(() => {
    writeIndex++;
    writeAnswered = false;
    renderWrite(mode);
  }, 1600);
}

function skipWriteAnswer(mode) {
  if (writeAnswered) return;
  writeAnswered = true;
  const w = writeWords[writeIndex];
  const input = document.getElementById("writeInput");
  const fb = document.getElementById("writeFb");
  
  if (input) input.classList.add("wrong");
  if (fb) {
    fb.className = "dictation-feedback wrong";
    fb.innerHTML = `⏭️ Đã bỏ qua. Đáp án đúng: <b>${mode === "enToVi" ? w.meaning : w.word}</b>`;
  }
  writeWrong++;

  speak(w.word);

  setTimeout(() => {
    writeIndex++;
    writeAnswered = false;
    renderWrite(mode);
  }, 1600);
}

function startTypeQuiz() {
  typeWords = shuffle(wordsForCurrentSet());
  typeIndex = 0;
  typeCorrect = 0;
  typeWrong = 0;
  typeAnswered = false;
}

function renderTypeQuiz() {
  if (!typeWords.length) startTypeQuiz();
  const container = document.getElementById("modeContent");
  const total = typeWords.length;

  if (typeIndex >= total) {
    const pct = Math.round((typeCorrect / total) * 100) || 0;
    container.innerHTML = `
      <div class="quiz-summary" style="text-align:center; padding:30px;">
        <div style="font-size:48px; margin-bottom:12px;">🏆</div>
        <div class="quiz-summary-score">${pct}%</div>
        <div class="quiz-summary-label">Đúng ${typeCorrect}/${total} câu</div>
        <button class="btn btn-primary" style="margin-top:16px;" onclick="startTypeQuiz(); renderTypeQuiz();">Làm lại</button>
      </div>
    `;
    return;
  }

  const w = typeWords[typeIndex];
  const typeMap = {
    "noun": "Noun (Danh từ)",
    "verb": "Verb (Động từ)",
    "adjective": "Adjective (Tính từ)",
    "adverb": "Adverb (Trạng từ)",
    "phrase": "Phrase (Cụm từ)",
    "preposition": "Preposition (Giới từ)",
    "question word": "Question Word (Từ để hỏi)"
  };

  const cleanType = String(w.type).split("/")[0].trim().toLowerCase();
  
  const options = [cleanType];
  const allPossibleTypes = ["noun", "verb", "adjective", "adverb", "phrase", "preposition"];
  shuffle(allPossibleTypes).forEach(t => {
    if (options.length < 4 && !options.includes(t)) options.push(t);
  });
  const finalOptions = shuffle(options);

  container.innerHTML = `
    <div class="dictation-container">
      <div class="progress">
        <div class="progress-bar" style="width: ${(typeIndex / total) * 100}%"></div>
      </div>
      <div class="study-card" style="text-align:center; display:block; padding: 24px;">
        <div class="text-muted" style="font-size:13px; margin-bottom:8px;">
          Câu ${typeIndex + 1}/${total} · Xác định từ loại của từ sau
        </div>
        <div class="study-word" style="font-size:36px; font-weight:900;">${w.word}</div>
        <div style="font-size:16px; color:var(--text-secondary); margin-top:5px; margin-bottom:15px;">Nghĩa: ${w.meaning}</div>
        <button class="speak-btn" onclick="speak('${escapeAttr(w.word)}')">🔊 Nghe</button>
        <div class="quiz-options" style="margin-top:20px;">
          ${finalOptions.map((opt, idx) => `
            <button class="abcd-option-btn" id="typeOpt${idx}" onclick="checkTypeAnswer(this, '${escapeAttr(opt)}', '${escapeAttr(cleanType)}', ${idx})">${typeMap[opt] || opt}</button>
          `).join("")}
        </div>
        <div id="typeFb" class="dictation-feedback" style="margin-top:15px;"></div>
      </div>
      <div class="listening-actions" style="margin-top:10px;"><span class="score-pill">Đúng ${typeCorrect} · Sai ${typeWrong}</span></div>
    </div>
  `;

  if (!typeAnswered) {
    speak(w.word);
  }
}

function checkTypeAnswer(btn, selected, correct, idx) {
  if (typeAnswered) return;
  typeAnswered = true;

  const w = typeWords[typeIndex];
  const ok = selected === correct;
  const fb = document.getElementById("typeFb");

  if (ok) {
    typeCorrect++;
    btn.classList.add("correct");
    fb.className = "dictation-feedback correct";
    fb.innerHTML = `🎉 Chính xác! <b>${w.word}</b> là <b>${w.type}</b>.`;
  } else {
    typeWrong++;
    btn.classList.add("wrong");
    fb.className = "dictation-feedback wrong";
    fb.innerHTML = `❌ Sai rồi! Từ loại đúng của <b>${w.word}</b> là <b>${w.type}</b>.`;
    for (let i = 0; i < 4; i++) {
      const optBtn = document.getElementById(`typeOpt${i}`);
      if (optBtn && optBtn.textContent.toLowerCase().includes(correct)) {
        optBtn.classList.add("correct");
      }
    }
  }

  speak(w.word);

  setTimeout(() => {
    typeIndex++;
    typeAnswered = false;
    renderTypeQuiz();
  }, 1600);
}

function selectPart(id) {
  currentPart = id;
  currentSet = "all";
  flashIndex = 0;
  startQuiz();
  startDictation();
  startABCD();
  startWrite("enToVi");
  startWrite("viToEn");
  startTypeQuiz();
  render();
}

function selectSet(name) {
  currentSet = name;
  flashIndex = 0;
  startQuiz();
  startDictation();
  startABCD();
  startWrite("enToVi");
  startWrite("viToEn");
  startTypeQuiz();
  render();
}

function render() {
  renderNav();
  renderHeader();
  renderSets();
  renderModes();
  renderContent();
}

startQuiz();
startDictation();
startABCD();
startWrite("enToVi");
startWrite("viToEn");
startTypeQuiz();
render();
