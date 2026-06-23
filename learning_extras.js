/* Dữ liệu bổ sung cho các tab học mới. Không thay đổi dữ liệu và logic học cũ. */
const COLLOCATION_DATA = [
  { word: "make", phrase: "make a decision", meaning: "đưa ra quyết định", example: "We need to make a decision today.", exampleVi: "Chúng ta cần đưa ra quyết định hôm nay." },
  { word: "meet", phrase: "meet a deadline", meaning: "kịp thời hạn", example: "The team worked late to meet the deadline.", exampleVi: "Nhóm làm việc muộn để kịp thời hạn." },
  { word: "provide", phrase: "provide support", meaning: "cung cấp sự hỗ trợ", example: "Our staff provides support to customers.", exampleVi: "Nhân viên của chúng tôi hỗ trợ khách hàng." },
  { word: "take", phrase: "take responsibility", meaning: "chịu trách nhiệm", example: "A manager must take responsibility for the result.", exampleVi: "Người quản lý phải chịu trách nhiệm về kết quả." },
  { word: "pay", phrase: "pay attention", meaning: "chú ý", example: "Please pay attention to the instructions.", exampleVi: "Vui lòng chú ý đến hướng dẫn." },
  { word: "reach", phrase: "reach an agreement", meaning: "đạt được thỏa thuận", example: "The two companies reached an agreement.", exampleVi: "Hai công ty đã đạt được thỏa thuận." },
  { word: "submit", phrase: "submit a report", meaning: "nộp báo cáo", example: "Please submit the report by Friday.", exampleVi: "Vui lòng nộp báo cáo trước thứ Sáu." },
  { word: "attend", phrase: "attend a meeting", meaning: "tham dự cuộc họp", example: "All employees must attend the meeting.", exampleVi: "Tất cả nhân viên phải tham dự cuộc họp." },
  { word: "make", phrase: "make a payment", meaning: "thực hiện thanh toán", example: "You can make a payment online.", exampleVi: "Bạn có thể thanh toán trực tuyến." },
  { word: "place", phrase: "place an order", meaning: "đặt hàng", example: "The customer placed an order yesterday.", exampleVi: "Khách hàng đã đặt hàng hôm qua." },
  { word: "increase", phrase: "increase sales", meaning: "tăng doanh số", example: "The campaign helped increase sales.", exampleVi: "Chiến dịch đã giúp tăng doanh số." },
  { word: "reduce", phrase: "reduce costs", meaning: "giảm chi phí", example: "The company is trying to reduce costs.", exampleVi: "Công ty đang cố gắng giảm chi phí." },
  { word: "solve", phrase: "solve a problem", meaning: "giải quyết vấn đề", example: "We need to solve this problem quickly.", exampleVi: "Chúng ta cần giải quyết vấn đề này nhanh chóng." },
  { word: "keep", phrase: "keep a record", meaning: "lưu hồ sơ", example: "Keep a record of every transaction.", exampleVi: "Hãy lưu hồ sơ của mọi giao dịch." },
  { word: "give", phrase: "give feedback", meaning: "đưa ra phản hồi", example: "The manager gave useful feedback.", exampleVi: "Người quản lý đã đưa ra phản hồi hữu ích." }
];

const CONTEXT_QUIZ_DATA = [
  { words:["job","work","task"], sentence:"I have one important ___ to finish before lunch.", answer:"task", meaning:"Tôi có một nhiệm vụ quan trọng cần hoàn thành trước bữa trưa.", explanation:"Task là một nhiệm vụ cụ thể; job là công việc/vị trí, work là công việc nói chung." },
  { words:["job","work","task"], sentence:"She is looking for a new ___.", answer:"job", meaning:"Cô ấy đang tìm một công việc mới.", explanation:"Job là một công việc hoặc vị trí cụ thể và có thể dùng với a/an." },
  { words:["job","work","task"], sentence:"I have too much ___ to do today.", answer:"work", meaning:"Hôm nay tôi có quá nhiều việc phải làm.", explanation:"Work là danh từ không đếm được khi nói về khối lượng công việc nói chung." },
  { words:["attend","participate","join"], sentence:"More than 200 people will ___ the conference.", answer:"attend", meaning:"Hơn 200 người sẽ tham dự hội nghị.", explanation:"Attend + sự kiện nghĩa là có mặt; không cần giới từ." },
  { words:["attend","participate","join"], sentence:"Everyone can ___ in the discussion.", answer:"participate", meaning:"Mọi người đều có thể tham gia thảo luận.", explanation:"Participate đi với in khi chủ động tham gia một hoạt động." },
  { words:["say","tell","speak"], sentence:"Please ___ me the truth.", answer:"tell", meaning:"Hãy nói cho tôi sự thật.", explanation:"Tell cần người nhận ngay sau động từ: tell somebody something." },
  { words:["say","tell","speak"], sentence:"She can ___ English very well.", answer:"speak", meaning:"Cô ấy có thể nói tiếng Anh rất tốt.", explanation:"Speak dùng khi nói về khả năng sử dụng một ngôn ngữ." },
  { words:["buy","purchase","pay"], sentence:"Customers can ___ tickets online.", answer:"purchase", meaning:"Khách hàng có thể mua vé trực tuyến.", explanation:"Purchase trang trọng, phù hợp ngữ cảnh kinh doanh; buy cũng đúng trong giao tiếp thông thường." },
  { words:["provide","supply","offer"], sentence:"The hotel will ___ free breakfast to all guests.", answer:"offer", meaning:"Khách sạn sẽ cung cấp bữa sáng miễn phí cho mọi khách.", explanation:"Offer nhấn mạnh một quyền lợi được đưa ra để khách nhận hoặc lựa chọn." },
  { words:["provide","supply","offer"], sentence:"This factory ___ parts to several car companies.", answer:"supplies", answers:["supply","supplies"], meaning:"Nhà máy này cung cấp linh kiện đều đặn cho nhiều công ty ô tô.", explanation:"Supply nhấn mạnh nguồn hàng hoặc số lượng được cung cấp đều đặn." },
  { words:["must","should","might"], sentence:"Employees ___ wear an ID badge at all times.", answer:"must", meaning:"Nhân viên bắt buộc phải luôn đeo thẻ nhận dạng.", explanation:"Must diễn tả yêu cầu bắt buộc mạnh." },
  { words:["must","should","might"], sentence:"You ___ check the figures again; there may be an error.", answer:"should", meaning:"Bạn nên kiểm tra lại các số liệu; có thể có lỗi.", explanation:"Should dùng để đưa ra lời khuyên." },
  { words:["in","on","at"], sentence:"The meeting starts ___ 9 a.m.", answer:"at", meaning:"Cuộc họp bắt đầu lúc 9 giờ sáng.", explanation:"At dùng với giờ cụ thể." },
  { words:["in","on","at"], sentence:"The report is due ___ Monday.", answer:"on", meaning:"Báo cáo đến hạn vào thứ Hai.", explanation:"On dùng với ngày và thứ." },
  { words:["since","for","during"], sentence:"She has worked here ___ three years.", answer:"for", meaning:"Cô ấy đã làm việc ở đây được ba năm.", explanation:"For đi với một khoảng thời gian." },
  { words:["since","for","during"], sentence:"She has worked here ___ 2023.", answer:"since", meaning:"Cô ấy đã làm việc ở đây từ năm 2023.", explanation:"Since đi với mốc thời gian bắt đầu." },
  { words:["between","among","beside"], sentence:"The manager stood ___ the two employees.", answer:"between", meaning:"Người quản lý đứng giữa hai nhân viên.", explanation:"Between dùng giữa hai người/vật hoặc các đối tượng tách biệt rõ." },
  { words:["few","a few","little"], sentence:"We still have ___ minutes before the meeting.", answer:"a few", meaning:"Chúng ta vẫn còn vài phút trước cuộc họp.", explanation:"A few dùng với danh từ đếm được và mang nghĩa có một ít." }
];

const EXAMPLE_TRANSLATIONS = {
  "I work from 8 to 5.": "Tôi làm việc từ 8 giờ đến 5 giờ.",
  "He manages his time the best.": "Anh ấy quản lý thời gian của mình rất tốt.",
  "They organize events every year.": "Họ tổ chức các sự kiện mỗi năm.",
  "She is preparing for the presentation.": "Cô ấy đang chuẩn bị cho bài thuyết trình.",
  "She is arranging flowers on the table.": "Cô ấy đang sắp xếp hoa trên bàn.",
  "Will you attend the conference?": "Bạn sẽ tham dự hội nghị chứ?",
  "Everyone can participate.": "Mọi người đều có thể tham gia.",
  "She will assist you with the report.": "Cô ấy sẽ hỗ trợ bạn làm báo cáo.",
  "We need a good plan.": "Chúng ta cần một kế hoạch tốt.",
  "The delivery schedule is fixed.": "Lịch giao hàng đã được ấn định."
};

function getExampleTranslation(word) {
  return word.exampleVi || EXAMPLE_TRANSLATIONS[word.example] || `Câu ví dụ dùng “${word.word}” với nghĩa “${word.meaning}”.`;
}

function getExampleExplanation(word) {
  const usage = typeof getWordUsageNote === "function" ? getWordUsageNote(word.word) : "";
  return usage || `Trong câu này, “${word.word}” là ${word.type} và mang nghĩa “${word.meaning}”.`;
}

function getCollocationsForWords(words) {
  const available = new Set(words.map(item => String(item.word).toLowerCase()));
  const matched = COLLOCATION_DATA.filter(item => available.has(item.word));
  const extra = COLLOCATION_DATA.filter(item => !matched.includes(item));
  return [...matched, ...extra].slice(0, Math.max(8, matched.length));
}

function getContextQuestionsForWords(words) {
  const available = new Set(words.map(item => String(item.word).toLowerCase()));
  const matched = CONTEXT_QUIZ_DATA.filter(item => item.words.some(word => available.has(word)));
  return matched.length ? matched : CONTEXT_QUIZ_DATA;
}
