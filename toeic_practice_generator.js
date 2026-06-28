const TOEICPracticeGenerator = {
  // Simple seed-based random generator to ensure reproducibility per day
  seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  },

  shuffle(array, seed) {
    const arr = [...array];
    let s = seed;
    for (let i = arr.length - 1; i > 0; i--) {
      s = (s * 1664525 + 1013904223) >>> 0;
      const j = s % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // Generates 12 questions (5 for Part 5, 4 for Part 6, 3 for Part 7) for a given day
  generate(day, dayWords, topicEn, topicVi) {
    const rand = (offset) => this.seededRandom(day * 100 + offset);
    const selectRandom = (arr, offset) => arr[Math.floor(rand(offset) * arr.length)];

    // Ensure we have at least some words to work with
    const words = dayWords && dayWords.length > 0 ? dayWords : [
      { word: 'schedule', meaning: 'lịch trình', type: 'noun', example: 'We have a tight schedule.' },
      { word: 'postpone', meaning: 'trì hoãn', type: 'verb', example: 'The meeting was postponed.' },
      { word: 'attend', meaning: 'tham dự', type: 'verb', example: 'All staff must attend.' },
      { word: 'agenda', meaning: 'chương trình nghị sự', type: 'noun', example: 'Check the meeting agenda.' }
    ];

    const w1 = words[0];
    const w2 = words[1] || words[0];
    const w3 = words[2] || words[0];
    const w4 = words[3] || words[0];
    const w5 = words[Math.min(4, words.length - 1)];

    // ----------------------------------------------------
    // PART 5 QUESTIONS GENERATION
    // ----------------------------------------------------
    const part5 = [
      // Question 1: Word Form of Word 1
      {
        part: 5,
        q: `Because of a conflict in the ________, the manager decided to reschedule the team conference.`,
        opts: [w1.word, w1.word + 's', w1.word + 'ing', w1.word + 'ed'],
        ans: 0,
        exp: `Sau mạo từ "the" và cụm giới từ "in the" cần một danh từ số ít đóng vai trò làm tân ngữ của giới từ. Từ "${w1.word}" (${w1.meaning}) ở dạng nguyên thể danh từ là phù hợp nhất.`,
        translation: `Bởi vì có sự trùng lặp trong ${w1.meaning}, người quản lý đã quyết định thay đổi lịch họp nhóm.`
      },
      // Question 2: Vocab context of Word 2
      {
        part: 5,
        q: `The executive board voted to ________ the decision until they receive the final marketing feedback.`,
        opts: [w2.word, 'cancel', 'announce', 'improve'],
        ans: 0,
        exp: `Dựa vào ngữ cảnh "until they receive the final marketing feedback" (cho đến khi nhận được phản hồi tiếp thị cuối cùng), hành động phù hợp nhất là tạm thời trì hoãn hoặc giữ nguyên. Từ "${w2.word}" (${w2.meaning}) là đáp án chính xác nhất.`,
        translation: `Ban điều hành đã bỏ phiếu quyết định ${w2.meaning} quyết định cho đến khi họ nhận được phản hồi tiếp thị cuối cùng.`
      },
      // Question 3: Grammar preposition
      {
        part: 5,
        q: `All department supervisors are required to submit their annual budgets ________ the end of the fiscal year.`,
        opts: ['before', 'between', 'during', 'under'],
        ans: 0,
        exp: `Cấu trúc chỉ thời hạn: "before the end of..." (trước thời điểm kết thúc). Các giới từ khác không phù hợp về ý nghĩa thời hạn nộp báo cáo ngân sách.`,
        translation: `Tất cả giám sát viên phòng ban được yêu cầu nộp ngân sách năm trước khi năm tài chính kết thúc.`
      },
      // Question 4: Word Form of Word 3 (Gerund / Infinitive / Adj)
      {
        part: 5,
        q: `The committee is looking forward to ________ the proposals submitted by the consulting firms.`,
        opts: ['reviewing', 'review', 'reviewed', 'reviews'],
        ans: 0,
        exp: `Cấu trúc cố định: "look forward to + V-ing" (mong đợi làm việc gì đó). Do đó động từ "review" phải chia ở dạng V-ing là "reviewing".`,
        translation: `Ủy ban rất mong chờ được xem xét các đề xuất được nộp bởi các công ty tư vấn.`
      },
      // Question 5: Vocab context of Word 4
      {
        part: 5,
        q: `The guest speaker highlighted the main items on the ________ for today's seminar.`,
        opts: [w4.word, 'location', 'budget', 'salary'],
        ans: 0,
        exp: `Cụm từ "items on the..." thường đi với "agenda" hoặc "schedule" khi nói về nội dung hội thảo. Từ "${w4.word}" (${w4.meaning}) hoàn toàn phù hợp với ngữ cảnh hội thảo (seminar).`,
        translation: `Diễn giả khách mời đã nhấn mạnh các nội dung chính trong ${w4.meaning} của buổi hội thảo ngày hôm nay.`
      }
    ];

    // Shuffle options for Part 5 to ensure randomness
    part5.forEach((q, idx) => {
      const originalOpts = [...q.opts];
      const correctText = originalOpts[q.ans];
      const shuffled = this.shuffle(originalOpts, day * 13 + idx * 7);
      q.opts = shuffled;
      q.ans = shuffled.indexOf(correctText);
    });

    // ----------------------------------------------------
    // PART 6 QUESTIONS GENERATION (1 Cloze Passage with 4 questions)
    // ----------------------------------------------------
    const part6Passage = `Subject: Important Update Regarding Our ${topicVi} System

To All Personnel,

We are writing to announce that our weekly ${topicVi} processes will be updated starting next Monday. As part of this transition, the management has decided to ________ (1) a new software system.

This software will allow us to track all related records more efficiently. Please make sure that you attend the training session ________ (2) Thursday. It is vital that everyone learns how to navigate the new interface before the system goes live.

We understand that adjustments can be difficult. However, we are confident that this change will greatly ________ (3) our workflow. ________ (4).

Sincerely,
Management Board`;

    const part6Questions = [
      {
        part: 6,
        q: "Question 1:",
        opts: ['implement', 'implementation', 'implemented', 'implements'],
        ans: 0,
        exp: "Sau cấu trúc 'decided to' cần một động từ nguyên mẫu (infinitive). Từ 'implement' (triển khai) ở dạng nguyên mẫu là đáp án chính xác.",
        translation: "Chúng tôi viết thông báo này để thông tin rằng quy trình quản lý sẽ được cập nhật... ban quản lý đã quyết định triển khai một hệ thống phần mềm mới."
      },
      {
        part: 6,
        q: "Question 2:",
        opts: ['on', 'at', 'in', 'for'],
        ans: 0,
        exp: "Giới từ chỉ thứ trong tuần (Thursday) luôn là 'on'.",
        translation: "Vui lòng đảm bảo rằng bạn tham dự buổi đào tạo vào thứ Năm."
      },
      {
        part: 6,
        q: "Question 3:",
        opts: [w3.word, 'damage', 'complicate', 'prevent'],
        ans: 0,
        exp: `Dựa vào mạch văn tích cực "more efficiently" và "confident that this change will...", động từ mang ý nghĩa tích cực nâng cao/hỗ trợ là phù hợp nhất. Từ "${w3.word}" (${w3.meaning}) là lựa chọn tối ưu.`,
        translation: "Tuy nhiên, chúng tôi tự tin rằng sự thay đổi này sẽ giúp cải tiến/hỗ trợ rất nhiều cho quy trình làm việc của chúng ta."
      },
      {
        part: 6,
        q: "Question 4:",
        opts: [
          'Thank you for your patience and cooperation during this transition.',
          'Please apply for a vacation as soon as possible.',
          'The building will be closed permanently after renovations.',
          'All previous data was lost due to a system crash.'
        ],
        ans: 0,
        exp: "Câu chào cảm ơn sự thông cảm và hợp tác của nhân viên là phù hợp nhất để kết thúc một email thông báo nội bộ về sự thay đổi quy trình.",
        translation: "Cảm ơn sự kiên nhẫn và hợp tác của các bạn trong quá trình chuyển đổi này."
      }
    ];

    // Shuffle options for Part 6
    part6Questions.forEach((q, idx) => {
      const originalOpts = [...q.opts];
      const correctText = originalOpts[q.ans];
      const shuffled = this.shuffle(originalOpts, day * 17 + idx * 3);
      q.opts = shuffled;
      q.ans = shuffled.indexOf(correctText);
    });

    // ----------------------------------------------------
    // PART 7 QUESTIONS GENERATION (1 Passage with 3 Reading Comprehension Questions)
    // ----------------------------------------------------
    const part7Passage = `🍀 GREENFIELD ENTERPRISES - SPECIAL ANNOUNCEMENT 🍀

Dear Customers,

Due to rising operating costs, Greenfield Enterprises will adjust the pricing structure for our core ${topicVi} services. Effective from August 1, all standard service packages will increase by approximately 5%.

We have avoided changing our prices for over three years. However, this adjustment is necessary to maintain the premium quality of service that you expect from us. We will continue to invest in upgrading our technology and training our consultants to deliver the best results.

If you have any questions or want to review your current contract, please contact our customer support representative, Ms. Amanda Ross, at support@greenfield.com.

Thank you for your continued loyalty and trust in Greenfield Enterprises.`;

    const part7Questions = [
      {
        part: 7,
        q: "What is the main purpose of this announcement?",
        opts: [
          'To inform customers about a price adjustment',
          'To introduce a new customer service manager',
          'To advertise a new line of services',
          'To apologize for a delay in product delivery'
        ],
        ans: 0,
        exp: "Thông báo ghi rõ: 'Greenfield Enterprises will adjust the pricing structure...' (Greenfield Enterprises sẽ điều chỉnh cấu trúc giá cả...) -> Mục đích là thông báo tăng giá dịch vụ.",
        translation: "Mục đích chính của thông báo này là gì? -> Để thông báo cho khách hàng về việc điều chỉnh giá."
      },
      {
        part: 7,
        q: "When will the change take effect?",
        opts: [
          'August 1',
          'July 1',
          'Immediately',
          'September 15'
        ],
        ans: 0,
        exp: "Bài đọc nêu rõ: 'Effective from August 1, all standard service packages...' (Có hiệu lực từ ngày 1 tháng 8...).",
        translation: "Khi nào sự thay đổi này có hiệu lực? -> Ngày 1 tháng 8."
      },
      {
        part: 7,
        q: "Who should customers contact if they have questions?",
        opts: [
          'Ms. Amanda Ross',
          'The Director of Marketing',
          'The Finance Committee',
          'Greenfield Support Center'
        ],
        ans: 0,
        exp: "Đoạn văn viết: 'please contact our customer support representative, Ms. Amanda Ross, at...' (vui lòng liên hệ đại diện hỗ trợ khách hàng, Cô Amanda Ross...).",
        translation: "Khách hàng nên liên hệ với ai nếu họ có thắc mắc? -> Cô Amanda Ross."
      }
    ];

    // Shuffle options for Part 7
    part7Questions.forEach((q, idx) => {
      const originalOpts = [...q.opts];
      const correctText = originalOpts[q.ans];
      const shuffled = this.shuffle(originalOpts, day * 23 + idx * 5);
      q.opts = shuffled;
      q.ans = shuffled.indexOf(correctText);
    });

    // Combine all questions into a single flat list of 12 questions
    const result = [];
    
    // Add Part 5
    part5.forEach((q, i) => {
      result.push({
        id: `p5-q${i+1}`,
        part: 5,
        partLabel: 'Part 5: Complete Sentences (Điền câu)',
        question: q.q,
        options: q.opts,
        answerIdx: q.ans,
        explanation: q.exp,
        translation: q.translation,
        passage: ''
      });
    });

    // Add Part 6
    part6Questions.forEach((q, i) => {
      result.push({
        id: `p6-q${i+1}`,
        part: 6,
        partLabel: 'Part 6: Text Completion (Điền đoạn văn)',
        question: `${q.q} Chọn từ điền vào vị trí tương ứng trong văn bản dưới đây:`,
        options: q.opts,
        answerIdx: q.ans,
        explanation: q.exp,
        translation: q.translation,
        passage: part6Passage
      });
    });

    // Add Part 7
    part7Questions.forEach((q, i) => {
      result.push({
        id: `p7-q${i+1}`,
        part: 7,
        partLabel: 'Part 7: Reading Comprehension (Đọc hiểu văn bản)',
        question: q.q,
        options: q.opts,
        answerIdx: q.ans,
        explanation: q.exp,
        translation: q.translation,
        passage: part7Passage
      });
    });

    return result;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TOEICPracticeGenerator;
} else {
  window.TOEICPracticeGenerator = TOEICPracticeGenerator;
}
