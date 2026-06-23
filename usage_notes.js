/* Hướng dẫn phân biệt các từ gần nghĩa trong phần học theo chủ đề. */
const WORD_USAGE_NOTES = {
  work: "Dùng chung cho việc làm hoặc hành động làm việc. Không dùng “a work” để nói một công việc cụ thể; khi đó dùng “a job”.",
  job: "Dùng cho một công việc hoặc vị trí cụ thể, thường là việc được trả lương.",
  task: "Dùng cho một nhiệm vụ cụ thể cần hoàn thành, thường là một phần của công việc lớn hơn.",
  manage: "Dùng khi quản lý người, thời gian hoặc công việc; cũng có nghĩa là xoay xở làm được việc khó.",
  organize: "Dùng khi tổ chức sự kiện hoặc sắp xếp mọi thứ thành hệ thống.",
  arrange: "Dùng khi bố trí đồ vật hoặc thu xếp một cuộc hẹn/kế hoạch cụ thể.",
  plan: "Dùng khi quyết định trước sẽ làm gì; nhấn mạnh ý định và các bước dự kiến.",
  schedule: "Dùng khi ấn định thời gian cụ thể cho một hoạt động hoặc nói về lịch đã có.",
  attend: "Dùng khi có mặt tại sự kiện, lớp học hoặc cuộc họp. Theo sau trực tiếp bởi danh từ.",
  participate: "Dùng khi chủ động tham gia hoạt động. Thường dùng “participate in + hoạt động”.",
  assist: "Trang trọng hơn “help”, thường dùng trong công việc: assist somebody with/in something.",
  support: "Dùng khi hỗ trợ lâu dài, cung cấp nguồn lực hoặc ủng hộ một người/ý kiến.",
  customer: "Người mua hàng hoặc dịch vụ, thường là một giao dịch bán hàng.",
  client: "Khách hàng nhận dịch vụ chuyên môn hoặc có quan hệ hợp tác lâu dài.",
  say: "Nhấn mạnh lời được nói ra: say something hoặc say something to somebody.",
  tell: "Nhấn mạnh người nhận thông tin: tell somebody something.",
  speak: "Dùng cho khả năng nói ngôn ngữ hoặc cách nói trang trọng.",
  talk: "Dùng cho cuộc trò chuyện, trao đổi qua lại: talk to/with somebody.",
  look: "Hành động chủ động nhìn: look at something.",
  see: "Nhìn thấy tự nhiên bằng mắt hoặc gặp ai đó; không nhất thiết chủ động.",
  watch: "Nhìn chăm chú một việc đang diễn ra trong một khoảng thời gian.",
  borrow: "Mượn từ người khác: borrow something from somebody.",
  lend: "Cho người khác mượn: lend something to somebody.",
  make: "Thường dùng khi tạo ra một thứ: make a plan, make a decision.",
  do: "Thường dùng với công việc, nhiệm vụ hoặc hoạt động: do homework, do a task.",
  house: "Chỉ căn nhà như một công trình.",
  home: "Chỉ nơi mình sống và có cảm giác thuộc về; dùng “go home”, không dùng “go to home”.",
  hear: "Nghe thấy âm thanh tự nhiên, không chủ ý.",
  listen: "Chủ động chú ý nghe; dùng “listen to + người/vật/âm thanh”."
};

function getWordUsageNote(word) {
  const key = String(word || '').toLowerCase();
  const group = WORD_USAGE_GROUPS.find(item => item.words.includes(key));
  return [WORD_USAGE_NOTES[key], group && group.note].filter((note, index, notes) => note && notes.indexOf(note) === index).join(" ");
}

/* Các nhóm dễ nhầm. Ghi chú được hiện ngay trên từng từ thuộc nhóm. */
const WORD_USAGE_GROUPS = [
  {
    words: ["buy", "purchase"],
    note: "Buy dùng phổ biến trong giao tiếp; purchase trang trọng hơn, thường gặp trong kinh doanh, hóa đơn và hợp đồng."
  },
  {
    words: ["provide", "supply", "offer"],
    note: "Provide là cung cấp thứ cần thiết; supply nhấn mạnh cung cấp số lượng/nguồn hàng đều đặn; offer là đưa ra để người khác lựa chọn hoặc nhận."
  },
  {
    words: ["answer", "respond"],
    note: "Answer dùng trực tiếp với câu hỏi/cuộc gọi: answer a question; respond trang trọng hơn và thường đi với to: respond to an email."
  },
  {
    words: ["inform", "notify", "announce"],
    note: "Inform là cho một người biết thông tin; notify là thông báo chính thức cho người liên quan; announce là công bố rộng rãi."
  },
  {
    words: ["recommend", "suggest"],
    note: "Recommend nhấn mạnh điều tốt hoặc phù hợp; suggest là đưa ra một ý tưởng. Cả hai dùng V-ing, không dùng recommend/suggest somebody to do."
  },
  {
    words: ["complete", "finish"],
    note: "Finish thông dụng cho việc kết thúc hoạt động; complete nhấn mạnh hoàn tất đầy đủ mọi phần và trang trọng hơn."
  },
  {
    words: ["improve", "enhance", "upgrade", "develop"],
    note: "Improve là làm tốt hơn nói chung; enhance là nâng cao chất lượng/giá trị; upgrade là nâng lên phiên bản hoặc cấp cao hơn; develop là phát triển dần theo thời gian."
  },
  {
    words: ["increase", "grow", "expand"],
    note: "Increase là tăng số lượng/mức độ; grow là lớn lên hoặc tăng tự nhiên; expand là mở rộng quy mô, phạm vi hoặc thị trường."
  },
  {
    words: ["achieve", "reach", "succeed"],
    note: "Achieve + mục tiêu/thành tựu; reach + mốc hoặc mức; succeed thường đứng một mình hoặc dùng succeed in + V-ing."
  },
  {
    words: ["can", "could", "be able to"],
    note: "Can nói khả năng hiện tại; could nói khả năng quá khứ hoặc lời đề nghị lịch sự; be able to dùng được ở nhiều thì và nhấn mạnh đã xoay xở làm được."
  },
  {
    words: ["may", "might", "could"],
    note: "Đều có thể diễn tả khả năng. May thường có khả năng cao hơn một chút; might ít chắc chắn hơn; could nêu một khả năng có thể xảy ra."
  },
  {
    words: ["must", "have to", "need to", "should", "ought to"],
    note: "Must là bắt buộc mạnh từ người nói; have to do quy định/hoàn cảnh; need to là cần thiết; should và ought to là lời khuyên."
  },
  {
    words: ["will", "would", "shall"],
    note: "Will dùng cho tương lai/quyết định; would dùng cho giả định hoặc lời nói lịch sự; shall chủ yếu dùng với I/we để đề nghị hoặc trong văn bản trang trọng."
  },
  {
    words: ["appear", "seem", "look"],
    note: "Seem là có vẻ dựa trên nhận định chung; appear trang trọng hơn; look là có vẻ dựa chủ yếu vào vẻ ngoài."
  },
  {
    words: ["remain", "stay", "keep"],
    note: "Remain trang trọng, nghĩa là vẫn ở trạng thái đó; stay thông dụng cho tiếp tục ở nơi/trạng thái; keep nhấn mạnh duy trì liên tục."
  },
  {
    words: ["become", "get", "grow", "turn"],
    note: "Become trung tính và dùng rộng; get thông dụng cho thay đổi trạng thái; grow là thay đổi từ từ; turn thường là đổi rõ rệt, đặc biệt màu sắc/trạng thái."
  },
  {
    words: ["like", "love", "prefer"],
    note: "Like là thích; love là rất thích/yêu; prefer là thích A hơn B và thường dùng prefer A to B."
  },
  {
    words: ["want", "need", "wish", "hope"],
    note: "Want là muốn; need là cần; hope dùng cho điều có khả năng xảy ra; wish thường cho điều khó xảy ra, trái thực tế hoặc sự tiếc nuối."
  },
  {
    words: ["know", "understand", "realize", "recognize"],
    note: "Know là biết thông tin; understand là hiểu; realize là chợt nhận ra sự thật; recognize là nhận ra người/vật đã từng biết."
  },
  {
    words: ["contain", "include", "consist of"],
    note: "Contain là chứa bên trong; include là bao gồm một phần trong danh sách; consist of liệt kê toàn bộ các thành phần cấu tạo."
  },
  {
    words: ["another", "other", "others", "the other", "the others"],
    note: "Another + danh từ số ít = một cái khác; other + danh từ; others đứng một mình; the other = cái còn lại trong hai; the others = những cái còn lại đã xác định."
  },
  {
    words: ["few", "a few", "little", "a little"],
    note: "Few/a few dùng với danh từ đếm được; little/a little dùng với không đếm được. Không có “a” mang nghĩa hầu như không; có “a” mang nghĩa có một ít."
  },
  {
    words: ["many", "much", "a lot of", "plenty of"],
    note: "Many + danh từ đếm được; much + không đếm được; a lot of dùng cho cả hai và tự nhiên hơn trong câu khẳng định; plenty of nghĩa là nhiều hơn mức cần."
  },
  {
    words: ["some", "any"],
    note: "Some thường dùng trong câu khẳng định và lời mời/đề nghị; any thường dùng trong câu hỏi, phủ định hoặc nghĩa 'bất kỳ'."
  },
  {
    words: ["each", "every"],
    note: "Each nhấn mạnh từng cá thể riêng; every nhìn toàn bộ nhóm. Cả hai đi với danh từ số ít và động từ số ít."
  },
  {
    words: ["either", "neither", "both"],
    note: "Either = một trong hai; neither = không cái nào trong hai; both = cả hai."
  },
  {
    words: ["very", "really", "quite", "rather", "fairly", "pretty"],
    note: "Very/really nhấn mạnh mạnh; quite tùy ngữ cảnh là khá hoặc hoàn toàn; rather thường hàm ý bất ngờ/không mong đợi; fairly và pretty là khá, thân mật hơn."
  },
  {
    words: ["almost", "nearly", "hardly", "barely", "scarcely"],
    note: "Almost/nearly = gần đạt tới; hardly/barely/scarcely = hầu như không, mang nghĩa phủ định."
  },
  {
    words: ["too", "enough"],
    note: "Too + tính từ/trạng từ = quá mức cần thiết; adjective/adverb + enough hoặc enough + noun = đủ."
  },
  {
    words: ["usually", "normally", "generally", "often", "frequently"],
    note: "Usually/ normally = thường là thói quen; generally = nhìn chung; often/frequently = xảy ra nhiều lần, frequently trang trọng hơn."
  },
  {
    words: ["sometimes", "occasionally", "seldom", "rarely"],
    note: "Sometimes = đôi khi; occasionally = thỉnh thoảng, ít hơn; seldom/rarely = hiếm khi và mang nghĩa gần phủ định."
  },
  {
    words: ["currently", "presently", "now"],
    note: "Now là ngay bây giờ; currently là hiện tại trong giai đoạn này; presently có thể nghĩa hiện tại hoặc sắp tới tùy ngữ cảnh."
  },
  {
    words: ["recently", "lately"],
    note: "Cả hai là gần đây. Recently dùng được với sự kiện đơn lẻ; lately thường nói tình trạng lặp lại/kéo dài và hay đi với hiện tại hoàn thành."
  },
  {
    words: ["already", "yet", "still"],
    note: "Already = đã rồi, thường trong câu khẳng định; yet = chưa/đã chưa, thường cuối câu hỏi hoặc phủ định; still = vẫn còn tiếp diễn."
  },
  {
    words: ["finally", "eventually"],
    note: "Finally là cuối cùng trong một chuỗi hoặc khi kết thúc; eventually là cuối cùng sau một thời gian dài hoặc nhiều khó khăn."
  },
  {
    words: ["in", "on", "at"],
    note: "Thời gian: at + giờ, on + ngày, in + tháng/năm/khoảng dài. Nơi chốn: at + điểm, on + bề mặt, in + không gian/khu vực."
  },
  {
    words: ["by", "until / till"],
    note: "By là không muộn hơn một thời điểm (hạn chót); until/till là hành động kéo dài liên tục đến thời điểm đó."
  },
  {
    words: ["since", "for"],
    note: "Since + mốc bắt đầu; for + khoảng thời gian. Thường dùng với thì hoàn thành."
  },
  {
    words: ["during", "while"],
    note: "During + danh từ/cụm danh từ; while + mệnh đề có chủ ngữ và động từ."
  },
  {
    words: ["above", "over", "under", "below"],
    note: "Above/below chỉ vị trí cao/thấp hơn, không nhất thiết thẳng hàng; over/under thường chỉ ngay phía trên/dưới và có thể hàm ý che phủ."
  },
  {
    words: ["between", "among"],
    note: "Between thường dùng giữa hai hoặc các đối tượng tách biệt rõ; among dùng trong một nhóm từ ba đối tượng trở lên."
  },
  {
    words: ["beside", "next to", "near", "by"],
    note: "Beside/next to = ngay bên cạnh; near = ở gần nhưng không nhất thiết sát; by có thể nghĩa bên cạnh trong cách nói ngắn."
  },
  {
    words: ["across", "through", "along"],
    note: "Across = từ bên này sang bên kia bề mặt; through = đi xuyên bên trong; along = di chuyển dọc theo."
  },
  {
    words: ["into", "in", "onto", "on"],
    note: "Into/onto diễn tả chuyển động vào trong/lên trên; in/on diễn tả vị trí đã ở trong/trên."
  },
  {
    words: ["because of", "due to", "owing to"],
    note: "Đều theo sau bởi danh từ. Because of dùng phổ biến; due to thường theo sau to be và trang trọng; owing to trang trọng, hay dùng trong văn viết."
  },
  {
    words: ["however", "nevertheless", "in contrast"],
    note: "However nêu sự đối lập chung; nevertheless = mặc dù vậy, nhấn mạnh kết quả vẫn xảy ra; in contrast dùng để đặt hai đối tượng cạnh nhau để so sánh."
  },
  {
    words: ["therefore", "consequently", "as a result"],
    note: "Đều chỉ kết quả. Therefore thiên về suy luận logic; consequently trang trọng; as a result rõ quan hệ nguyên nhân-kết quả và dùng tự nhiên trong nhiều ngữ cảnh."
  },
  {
    words: ["moreover", "furthermore", "in addition"],
    note: "Đều thêm ý. Moreover/furthermore trang trọng và nhấn mạnh luận điểm; in addition trung tính, dùng rộng hơn."
  }
];
