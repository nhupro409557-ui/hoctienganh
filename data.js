const DAYS_DATA_PART1 = [
  // ===== DAY 1: Company/Office =====
  {
    day: 1,
    topic: "Công ty / Văn phòng",
    topicEn: "Company / Office",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Câu đơn (S + V, S + V + O)",
      explanation: "Câu đơn là loại câu cơ bản nhất trong tiếng Anh. Câu đơn gồm một chủ ngữ (Subject) và một động từ (Verb), có thể có tân ngữ (Object).\n\n1. S + V: Chủ ngữ + Động từ (không cần tân ngữ)\nVí dụ: She works. (Cô ấy làm việc.)\n\n2. S + V + O: Chủ ngữ + Động từ + Tân ngữ\nVí dụ: He reads a report. (Anh ấy đọc một báo cáo.)\n\nLưu ý: Chủ ngữ là người/vật thực hiện hành động. Tân ngữ là người/vật chịu tác động của hành động.",
      structure: "S + V | S + V + O",
      examples: [
        "She works. (Cô ấy làm việc.)",
        "He sends an email. (Anh ấy gửi một email.)",
        "The manager checks the report. (Quản lý kiểm tra báo cáo.)",
        "We attend meetings. (Chúng tôi tham dự cuộc họp.)"
      ],
exceptions: [
        "Một số động từ là <b>nội động từ (intransitive verbs)</b> như <i>arrive, occur, rise, work, sleep, sit, stand</i>... không bao giờ đi kèm tân ngữ trực tiếp và không dùng ở bị động.",
        "Một số động từ là <b>ngoại động từ (transitive verbs)</b> như <i>need, want, buy, send, explain</i>... bắt buộc phải có tân ngữ đi sau, không thể đứng một mình."
      ],
      notes: [
        "Chủ ngữ (S) có thể là danh từ, cụm danh từ hoặc đại từ (I, you, he, she...).",
        "Phải đảm bảo sự hòa hợp giữa chủ ngữ và động từ (Chủ ngữ số ít đi với động từ chia số ít, chủ ngữ số nhiều đi với động từ chia số nhiều)."
      ],
            tips: "Mẹo: Luôn bắt đầu câu bằng chủ ngữ (ai/cái gì), rồi đến hành động (làm gì), cuối cùng là đối tượng (cái gì/ai)."
    },
    words: [
      {word:'company', ipa:'/ˈkəmpəˌni/', meaning:'công ty', type:'noun', example:'I work for a big company.', viAnswers:['công ty']},
      {word:'office', ipa:'/ˈɔfɪs/', meaning:'văn phòng', type:'noun', example:'The office is on the second floor.', viAnswers:['văn phòng']},
      {word:'employee', ipa:'/ɛmˈpɫɔɪi/, /ɪmˈpɫɔɪi/', meaning:'nhân viên', type:'noun', example:'She is a new employee.', viAnswers:['nhân viên']},
      {word:'manager', ipa:'/ˈmænədʒɝ/, /ˈmænɪdʒɝ/', meaning:'quản lý, giám đốc', type:'noun', example:'The manager has a meeting today.', viAnswers:['quản lý','giám đốc','người quản lý']},
      {word:'staff', ipa:'/ˈstæf/', meaning:'nhân viên, đội ngũ', type:'noun', example:'The staff works very hard.', viAnswers:['nhân viên','đội ngũ','đội ngũ nhân viên']},
      {word:'meeting', ipa:'/ˈmitɪŋ/', meaning:'cuộc họp', type:'noun', example:'We have a meeting at 10 a.m.', viAnswers:['cuộc họp','buổi họp']},
      {word:'report', ipa:'/ɹiˈpɔɹt/, /ɹɪˈpɔɹt/', meaning:'báo cáo', type:'noun', example:'Please read this report.', viAnswers:['báo cáo','bản báo cáo']},
      {word:'document', ipa:'/ˈdɑkjəmɛnt/, /ˈdɑkjumɛnt/', meaning:'tài liệu', type:'noun', example:'I need this document today.', viAnswers:['tài liệu','văn bản']},
      {word:'schedule', ipa:'/ˈskɛdʒuɫ/, /ˈskɛdʒʊɫ/', meaning:'lịch trình, thời khóa biểu', type:'noun', example:'Check the schedule before the meeting.', viAnswers:['lịch trình','thời khóa biểu','lịch','lịch làm việc']},
      {word:'department', ipa:'/dɪˈpɑɹtmənt/', meaning:'phòng ban, bộ phận', type:'noun', example:'He works in the sales department.', viAnswers:['phòng ban','bộ phận','phòng']},
      {word:'customer', ipa:'/ˈkəstəmɝ/', meaning:'khách hàng', type:'noun', example:'The customer wants a refund.', viAnswers:['khách hàng','người mua']},
      {word:'client', ipa:'/ˈkɫaɪənt/', meaning:'khách hàng, thân chủ', type:'noun', example:'We meet the client tomorrow.', viAnswers:['khách hàng','thân chủ']},
      {word:'project', ipa:'/ˈpɹɑdʒɛkt/, /pɹəˈdʒɛkt/', meaning:'dự án', type:'noun', example:'This project is very important.', viAnswers:['dự án']},
      {word:'task', ipa:'/ˈtæsk/', meaning:'nhiệm vụ, công việc', type:'noun', example:'I have many tasks today.', viAnswers:['nhiệm vụ','công việc','tác vụ']},
      {word:'deadline', ipa:'/ˈdɛdˌɫaɪn/', meaning:'hạn chót, thời hạn', type:'noun', example:'The deadline is next Friday.', viAnswers:['hạn chót','thời hạn','hạn cuối']},
      {word:'email', ipa:'/iˈmeɪɫ/', meaning:'thư điện tử, email', type:'noun', example:'I send an email every morning.', viAnswers:['thư điện tử','email']},
      {word:'message', ipa:'/ˈmɛsədʒ/, /ˈmɛsɪdʒ/', meaning:'tin nhắn, lời nhắn', type:'noun', example:'He left a message for you.', viAnswers:['tin nhắn','lời nhắn','thông điệp']},
      {word:'call', ipa:'/ˈkɔɫ/', meaning:'cuộc gọi', type:'noun / verb', example:'I will make a call now.', viAnswers:['cuộc gọi','gọi điện']},
      {word:'position', ipa:'/pəˈzɪʃən/', meaning:'vị trí, chức vụ', type:'noun', example:'She applied for a new position.', viAnswers:['vị trí','chức vụ']},
      {word:'job', ipa:'/ˈdʒɑb/, /ˈdʒoʊb/', meaning:'công việc, nghề', type:'noun', example:'He loves his job.', viAnswers:['công việc','nghề','việc làm']},
      {word:'work', ipa:'/ˈwɝk/', meaning:'công việc, làm việc', type:'noun / verb', example:'I work from 8 to 5.', viAnswers:['công việc','làm việc','việc']},
      {word:'team', ipa:'/ˈtim/', meaning:'đội, nhóm', type:'noun', example:'Our team has five members.', viAnswers:['đội','nhóm','đội nhóm']},
      {word:'plan', ipa:'/ˈpɫæn/', meaning:'kế hoạch', type:'noun / verb', example:'We need a good plan.', viAnswers:['kế hoạch','dự định']},
      {word:'problem', ipa:'/ˈpɹɑbɫəm/', meaning:'vấn đề', type:'noun', example:'There is a problem with the computer.', viAnswers:['vấn đề','sự cố']},
      {word:'solution', ipa:'/səˈɫuʃən/', meaning:'giải pháp', type:'noun', example:'We found a solution.', viAnswers:['giải pháp','cách giải quyết']}
    ]
  },

  // ===== DAY 2: Time =====
  {
    day: 2,
    topic: "Thời gian",
    topicEn: "Time",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Hiện tại đơn (Present Simple)",
      explanation: "Thì hiện tại đơn dùng để diễn tả:\n1. Thói quen hàng ngày: I go to work every day.\n2. Sự thật hiển nhiên: The sun rises in the east.\n3. Lịch trình cố định: The train leaves at 7 a.m.\n\nQuy tắc thêm -s/-es cho động từ khi đi với chủ ngữ số ít (He, She, It, Danh từ số ít):\n- 1. Thêm -es khi động từ kết thúc bằng: -o, -s, -z, -ch, -sh, -x (mẹo nhớ: Oanh Sông Zui Chưa Sợ Xanh). Ví dụ: go -> goes, watch -> watches, miss -> misses, fix -> fixes.\n- 2. Động từ kết thúc bằng phụ âm + y: Đổi y thành i rồi thêm -es. Ví dụ: study -> studies, fly -> flies. (Lưu ý: Nếu trước y là nguyên âm a, e, i, o, u thì chỉ thêm s: play -> plays, buy -> buys).\n- 3. Động từ đặc biệt: have -> has. Động từ be -> am/is/are.\n- 4. Các trường hợp còn lại: Chỉ thêm -s. Ví dụ: work -> works, read -> reads.",
      structure: "S + V(s/es) | S + do/does + not + V | Do/Does + S + V?",
      examples: [
        "He goes to the office at 8 AM. (Anh ấy đến văn phòng lúc 8 giờ sáng.)",
        "She studies English every night. (Cô ấy học tiếng Anh mỗi tối.)",
        "The company has 50 employees. (Công ty có 50 nhân viên.)",
        "They do not work on Sundays. (Họ không làm việc vào ngày Chủ nhật.)"
      ],
exceptions: [
        "Quy tắc thêm -s/-es: Động từ tận cùng bằng phụ âm + <b>y</b> thì đổi <b>y</b> thành <b>i</b> rồi thêm <b>-es</b> (ví dụ: <i>study -> studies</i>). Nhưng nếu trước <b>y</b> là nguyên âm (a, e, i, o, u) thì giữ nguyên và chỉ thêm <b>s</b> (ví dụ: <i>play -> plays</i>).",
        "Động từ đặc biệt: <i>have -> has</i> (ngôi thứ 3 số ít), không phải <i>haves</i>."
      ],
      notes: [
        "Tránh nhầm lẫn trạng từ tần suất: <i>always, usually, often, never</i>... luôn đứng <b>trước</b> động từ thường nhưng đứng <b>sau</b> động từ <i>to be</i>.",
        "Lưu ý chia động từ với danh từ tập hợp (family, staff, committee) thường chia số ít trong TOEIC."
      ],
            tips: "Mẹo: Luôn xác định chủ ngữ trước khi chia động từ. Ngôi thứ 3 số ít bắt buộc phải chia động từ theo quy tắc thêm -s/-es trên."
    },
    words: [
      {word:'today', ipa:'/təˈdeɪ/, /tuˈdeɪ/', meaning:'hôm nay', type:'noun / adverb', example:'Today is Monday.', viAnswers:['hôm nay','ngày hôm nay']},
      {word:'tomorrow', ipa:'/təˈmɑˌɹoʊ/, /tuˈmɑˌɹoʊ/', meaning:'ngày mai', type:'noun / adverb', example:'I will come back tomorrow.', viAnswers:['ngày mai']},
      {word:'yesterday', ipa:'/ˈjɛstɝˌdeɪ/, /ˈjɛstɝdi/', meaning:'hôm qua', type:'noun / adverb', example:'Yesterday was a busy day.', viAnswers:['hôm qua','ngày hôm qua']},
      {word:'morning', ipa:'/ˈmɔɹnɪŋ/', meaning:'buổi sáng', type:'noun', example:'I exercise every morning.', viAnswers:['buổi sáng','sáng']},
      {word:'afternoon', ipa:'/ˌæftɝˈnun/', meaning:'buổi chiều', type:'noun', example:'The meeting is in the afternoon.', viAnswers:['buổi chiều','chiều']},
      {word:'evening', ipa:'/ˈivnɪŋ/', meaning:'buổi tối', type:'noun', example:'I read books in the evening.', viAnswers:['buổi tối','tối']},
      {word:'week', ipa:'/ˈwik/', meaning:'tuần', type:'noun', example:'I work five days a week.', viAnswers:['tuần','tuần lễ']},
      {word:'month', ipa:'/ˈmənθ/', meaning:'tháng', type:'noun', example:'This month is very busy.', viAnswers:['tháng']},
      {word:'year', ipa:'/ˈjɪɹ/', meaning:'năm', type:'noun', example:'There are twelve months in a year.', viAnswers:['năm']},
      {word:'Monday', ipa:'/ˈmənˌdeɪ/, /ˈməndi/', meaning:'thứ Hai', type:'noun', example:'The meeting is on Monday.', viAnswers:['thứ hai','thứ Hai']},
      {word:'Tuesday', ipa:'/ˈtjuzˌdeɪ/, /ˈtuzˌdeɪ/, /ˈtuzdi/', meaning:'thứ Ba', type:'noun', example:'I have class on Tuesday.', viAnswers:['thứ ba','thứ Ba']},
      {word:'weekend', ipa:'/ˈwiˌkɛnd/, /ˈwiˌkɪnd/', meaning:'cuối tuần', type:'noun', example:'I relax on the weekend.', viAnswers:['cuối tuần']},
      {word:'date', ipa:'/ˈdeɪt/', meaning:'ngày tháng, hẹn hò', type:'noun', example:'What is the date today?', viAnswers:['ngày tháng','ngày','hẹn hò']},
      {word:'time', ipa:'/ˈtaɪm/', meaning:'thời gian, giờ', type:'noun', example:'What time is it?', viAnswers:['thời gian','giờ','lần']},
      {word:'early', ipa:'/ˈɝɫi/', meaning:'sớm', type:'adjective / adverb', example:'She comes early every day.', viAnswers:['sớm']},
      {word:'late', ipa:'/ˈɫeɪt/', meaning:'muộn, trễ', type:'adjective / adverb', example:'He is always late.', viAnswers:['muộn','trễ']},
      {word:'soon', ipa:'/ˈsun/', meaning:'sớm, ngay', type:'adverb', example:'The bus will come soon.', viAnswers:['sớm','ngay','không lâu nữa']},
      {word:'now', ipa:'/ˈnaʊ/', meaning:'bây giờ, ngay bây giờ', type:'adverb', example:'I am busy now.', viAnswers:['bây giờ','ngay bây giờ','hiện tại']},
      {word:'then', ipa:'/ˈðɛn/', meaning:'sau đó, lúc đó', type:'adverb', example:'We had lunch, then we went back to work.', viAnswers:['sau đó','lúc đó','khi đó']},
      {word:'before', ipa:'/ˌbiˈfɔɹ/, /bɪˈfɔɹ/', meaning:'trước, trước khi', type:'preposition / adverb', example:'I eat breakfast before work.', viAnswers:['trước','trước khi']},
      {word:'after', ipa:'/ˈæftɝ/', meaning:'sau, sau khi', type:'preposition / adverb', example:'I go home after work.', viAnswers:['sau','sau khi']},
      {word:'during', ipa:'/ˈdɝɪŋ/, /ˈdjʊɹɪŋ/, /ˈdʊɹɪŋ/', meaning:'trong suốt, trong khi', type:'preposition', example:'Do not talk during the meeting.', viAnswers:['trong suốt','trong khi','trong lúc']},
      {word:'until', ipa:'/ənˈtɪɫ/', meaning:'cho đến khi', type:'preposition', example:'I work until 6 p.m.', viAnswers:['cho đến khi','cho đến','đến khi']},
      {word:'since', ipa:'/ˈsɪns/', meaning:'kể từ, từ khi', type:'preposition', example:'I have worked here since 2020.', viAnswers:['kể từ','từ khi','từ']},
      {word:'daily', ipa:'/ˈdeɪɫi/', meaning:'hàng ngày', type:'adjective / adverb', example:'I check email daily.', viAnswers:['hàng ngày','mỗi ngày']}
    ]
  },

  // ===== DAY 3: Work Actions =====
  {
    day: 3,
    topic: "Hành động công việc",
    topicEn: "Work Actions",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Phủ định hiện tại đơn",
      explanation: "Để tạo câu phủ định trong thì hiện tại đơn, ta thêm 'do not' (don't) hoặc 'does not' (doesn't) trước động từ nguyên thể.\n\nCấu trúc:\n- I/You/We/They + do not (don't) + V nguyên thể\n- He/She/It + does not (doesn't) + V nguyên thể\n\nLưu ý quan trọng: Khi dùng 'does not', động từ phải ở dạng nguyên thể (KHÔNG thêm s/es).\n❌ She doesn't sends → ✅ She doesn't send\n❌ He doesn't works → ✅ He doesn't work",
      structure: "S + do/does + not + V (nguyên thể)",
      examples: [
        "I do not send emails on Sunday. (Tôi không gửi email vào Chủ nhật.)",
        "She doesn't check the report every day. (Cô ấy không kiểm tra báo cáo mỗi ngày.)",
        "We don't start work at 7 a.m. (Chúng tôi không bắt đầu làm việc lúc 7 giờ sáng.)",
        "He doesn't prepare the document. (Anh ấy không chuẩn bị tài liệu.)"
      ],
exceptions: [
        "Động từ <i>to be</i> không mượn trợ động từ <i>do/does</i> khi phủ định, chỉ cần thêm <i>not</i> trực tiếp sau be: <i>am not, is not (isn't), are not (aren't)</i>.",
        "Động từ khuyết thiếu (modal verbs) như <i>can, must, should, will</i>... cũng thêm <i>not</i> trực tiếp: <i>cannot/can't, must not, should not/shouldn't</i>."
      ],
      notes: [
        "<b>Bẫy TOEIC kinh điển:</b> Khi đã có trợ động từ phủ định (don't / doesn't), động từ chính bắt buộc phải ở dạng <b>nguyên mẫu không chia</b>. Ví dụ: <i>He doesn't works</i> ❌ -> <i>He doesn't work</i> ✅."
      ],
            tips: "Mẹo: Nhớ quy tắc 'doesn't + V nguyên thể'. Khi thấy 'doesn't', động từ phía sau luôn ở dạng nguyên thể, không thêm s/es."
    },
    words: [
      {word:'send', ipa:'/ˈsɛnd/', meaning:'gửi', type:'verb', example:'Please send the email now.', viAnswers:['gửi']},
      {word:'receive', ipa:'/ɹəˈsiv/, /ɹiˈsiv/, /ɹɪˈsiv/', meaning:'nhận', type:'verb', example:'I receive many emails every day.', viAnswers:['nhận','nhận được']},
      {word:'check', ipa:'/ˈtʃɛk/', meaning:'kiểm tra', type:'verb', example:'Please check the document.', viAnswers:['kiểm tra','xem xét']},
      {word:'open', ipa:'/ˈoʊpən/', meaning:'mở', type:'verb', example:'Open the file on your computer.', viAnswers:['mở']},
      {word:'close', ipa:'/ˈkɫoʊs/, /ˈkɫoʊz/', meaning:'đóng, kết thúc', type:'verb', example:'Please close the door.', viAnswers:['đóng','đóng lại','kết thúc']},
      {word:'prepare', ipa:'/pɹiˈpɛɹ/', meaning:'chuẩn bị', type:'verb', example:'I prepare the report every Monday.', viAnswers:['chuẩn bị']},
      {word:'finish', ipa:'/ˈfɪnɪʃ/', meaning:'hoàn thành, kết thúc', type:'verb', example:'I finish work at 5 p.m.', viAnswers:['hoàn thành','kết thúc','hoàn tất']},
      {word:'start', ipa:'/ˈstɑɹt/', meaning:'bắt đầu', type:'verb', example:'We start work at 8 a.m.', viAnswers:['bắt đầu']},
      {word:'attend', ipa:'/əˈtɛnd/', meaning:'tham dự', type:'verb', example:'I attend the meeting every week.', viAnswers:['tham dự','tham gia','dự']},
      {word:'join', ipa:'/ˈdʒɔɪn/', meaning:'tham gia', type:'verb', example:'Do you want to join our team?', viAnswers:['tham gia','gia nhập']},
      {word:'discuss', ipa:'/dɪˈskəs/', meaning:'thảo luận', type:'verb', example:'We discuss the plan together.', viAnswers:['thảo luận','bàn luận','bàn bạc']},
      {word:'explain', ipa:'/ɪksˈpɫeɪn/', meaning:'giải thích', type:'verb', example:'Can you explain this problem?', viAnswers:['giải thích']},
      {word:'update', ipa:'/ˈəpˌdeɪt/, /əpˈdeɪt/', meaning:'cập nhật', type:'verb', example:'Please update the schedule.', viAnswers:['cập nhật']},
      {word:'fix', ipa:'/ˈfɪks/', meaning:'sửa chữa', type:'verb', example:'He fixes the computer quickly.', viAnswers:['sửa chữa','sửa']},
      {word:'create', ipa:'/kɹiˈeɪt/', meaning:'tạo, tạo ra', type:'verb', example:'She creates a new document.', viAnswers:['tạo','tạo ra','sáng tạo']},
      {word:'design', ipa:'/dɪˈzaɪn/', meaning:'thiết kế', type:'verb / noun', example:'He designs the new website.', viAnswers:['thiết kế']},
      {word:'develop', ipa:'/dɪˈvɛɫəp/', meaning:'phát triển', type:'verb', example:'We develop new products every year.', viAnswers:['phát triển']},
      {word:'review', ipa:'/ˌɹivˈju/', meaning:'xem lại, đánh giá', type:'verb / noun', example:'Please review this report before the meeting.', viAnswers:['xem lại','đánh giá','ôn tập']},
      {word:'test', ipa:'/ˈtɛst/', meaning:'kiểm tra, thử nghiệm', type:'verb / noun', example:'We test the software every week.', viAnswers:['kiểm tra','thử nghiệm','thử']},
      {word:'improve', ipa:'/ˌɪmˈpɹuv/', meaning:'cải thiện', type:'verb', example:'We need to improve our service.', viAnswers:['cải thiện','cải tiến','nâng cao']},
      {word:'change', ipa:'/ˈtʃeɪndʒ/', meaning:'thay đổi', type:'verb / noun', example:'We change the plan today.', viAnswers:['thay đổi','đổi']},
      {word:'confirm', ipa:'/kənˈfɝm/', meaning:'xác nhận', type:'verb', example:'Please confirm the meeting time.', viAnswers:['xác nhận']},
      {word:'provide', ipa:'/pɹəˈvaɪd/', meaning:'cung cấp', type:'verb', example:'We provide good service.', viAnswers:['cung cấp']},
      {word:'choose', ipa:'/ˈtʃuz/', meaning:'chọn, lựa chọn', type:'verb', example:'Please choose one option.', viAnswers:['chọn','lựa chọn']},
      {word:'require', ipa:'/ˌɹiˈkwaɪɝ/, /ɹiˈkwaɪɹ/, /ɹɪˈkwaɪɝ/', meaning:'yêu cầu, đòi hỏi', type:'verb', example:'This job requires experience.', viAnswers:['yêu cầu','đòi hỏi','cần']}
    ]
  },

  // ===== DAY 4: Places =====
  {
    day: 4,
    topic: "Địa điểm",
    topicEn: "Places",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Câu hỏi hiện tại đơn",
      explanation: "Để đặt câu hỏi Yes/No trong thì hiện tại đơn, ta đặt 'Do' hoặc 'Does' trước chủ ngữ.\n\nCấu trúc:\n- Do + I/you/we/they + V nguyên thể?\n- Does + he/she/it + V nguyên thể?\n\nTrả lời:\n- Yes, I do. / No, I don't.\n- Yes, she does. / No, she doesn't.\n\nCâu hỏi Wh-:\n- Wh- + do/does + S + V?\n- Where do you work? (Bạn làm việc ở đâu?)\n- What does she do? (Cô ấy làm gì?)",
      structure: "Do/Does + S + V? | Wh- + do/does + S + V?",
      examples: [
        "Do you work in this building? (Bạn làm việc trong tòa nhà này không?)",
        "Does she go to the office every day? (Cô ấy đến văn phòng mỗi ngày không?)",
        "Where do they park their cars? (Họ đỗ xe ở đâu?)",
        "Does he live near the station? (Anh ấy sống gần nhà ga không?)"
      ],
exceptions: [
        "Khi hỏi cho chủ ngữ (Subject Question) với các từ hỏi <i>Who / What</i> đóng vai trò chủ ngữ, ta không mượn trợ động từ <i>do/does</i> mà chia động từ trực tiếp. Ví dụ: <i>Who works in this office?</i> (Ai làm việc ở văn phòng này?)"
      ],
      notes: [
        "Trong câu hỏi có từ để hỏi (Wh-), cấu trúc chuẩn là: <code>Wh- + do/does + S + V(nguyên mẫu)?</code>. Nhớ trả động từ chính về nguyên mẫu."
      ],
            tips: "Mẹo: Nhớ 'Do' đi với I/you/we/they và 'Does' đi với he/she/it. Sau 'Does', động từ luôn ở nguyên thể."
    },
    words: [
      {word:'room', ipa:'/ˈɹum/', meaning:'phòng', type:'noun', example:'The meeting room is on the third floor.', viAnswers:['phòng','căn phòng']},
      {word:'building', ipa:'/ˈbɪɫdɪŋ/', meaning:'tòa nhà', type:'noun', example:'Our office is in a tall building.', viAnswers:['tòa nhà','toà nhà']},
      {word:'floor', ipa:'/ˈfɫɔɹ/', meaning:'tầng, sàn nhà', type:'noun', example:'My office is on the fifth floor.', viAnswers:['tầng','sàn nhà','tầng lầu']},
      {word:'desk', ipa:'/ˈdɛsk/', meaning:'bàn làm việc', type:'noun', example:'There is a computer on my desk.', viAnswers:['bàn làm việc','bàn','bàn viết']},
      {word:'table', ipa:'/ˈteɪbəɫ/', meaning:'bàn', type:'noun', example:'Please put the documents on the table.', viAnswers:['bàn','cái bàn']},
      {word:'chair', ipa:'/ˈtʃɛɹ/', meaning:'ghế', type:'noun', example:'Please sit on the chair.', viAnswers:['ghế','cái ghế']},
      {word:'station', ipa:'/ˈsteɪʃən/', meaning:'nhà ga, trạm', type:'noun', example:'The train station is nearby.', viAnswers:['nhà ga','trạm','ga']},
      {word:'airport', ipa:'/ˈɛɹˌpɔɹt/', meaning:'sân bay', type:'noun', example:'The airport is far from here.', viAnswers:['sân bay']},
      {word:'hotel', ipa:'/hoʊˈtɛɫ/', meaning:'khách sạn', type:'noun', example:'We stay at a nice hotel.', viAnswers:['khách sạn']},
      {word:'restaurant', ipa:'/ˈɹɛsˌtɹɑnt/, /ˈɹɛstɝˌɑnt/', meaning:'nhà hàng', type:'noun', example:'Let us eat at the restaurant.', viAnswers:['nhà hàng','quán ăn']},
      {word:'store', ipa:'/ˈstɔɹ/', meaning:'cửa hàng', type:'noun', example:'The store closes at 9 p.m.', viAnswers:['cửa hàng','tiệm']},
      {word:'bank', ipa:'/ˈbæŋk/', meaning:'ngân hàng', type:'noun', example:'I go to the bank every Friday.', viAnswers:['ngân hàng']},
      {word:'school', ipa:'/ˈskuɫ/', meaning:'trường học', type:'noun', example:'The school is near my house.', viAnswers:['trường học','trường']},
      {word:'university', ipa:'/ˌjunəˈvɝsəti/', meaning:'đại học, trường đại học', type:'noun', example:'She studies at a big university.', viAnswers:['đại học','trường đại học']},
      {word:'hospital', ipa:'/ˈhɑˌspɪtəɫ/', meaning:'bệnh viện', type:'noun', example:'The hospital is open 24 hours.', viAnswers:['bệnh viện']},
      {word:'factory', ipa:'/ˈfæktɝi/', meaning:'nhà máy, xưởng', type:'noun', example:'The factory produces cars.', viAnswers:['nhà máy','xưởng','công xưởng']},
      {word:'warehouse', ipa:'/ˈwɛɹˌhaʊs/', meaning:'nhà kho', type:'noun', example:'The products are in the warehouse.', viAnswers:['nhà kho','kho hàng','kho']},
      {word:'entrance', ipa:'/ˈɛntɹəns/', meaning:'lối vào', type:'noun', example:'The entrance is on the left.', viAnswers:['lối vào','cửa vào','cổng vào']},
      {word:'exit', ipa:'/ˈɛɡzɪt/, /ˈɛksət/', meaning:'lối ra', type:'noun', example:'The exit is at the back of the building.', viAnswers:['lối ra','cửa ra','cổng ra']},
      {word:'street', ipa:'/ˈstɹit/', meaning:'đường phố, con đường', type:'noun', example:'The store is on Main Street.', viAnswers:['đường phố','con đường','đường','phố']},
      {word:'city', ipa:'/ˈsɪti/', meaning:'thành phố', type:'noun', example:'I live in a big city.', viAnswers:['thành phố']},
      {word:'area', ipa:'/ˈɛɹiə/', meaning:'khu vực', type:'noun', example:'This area is very quiet.', viAnswers:['khu vực','vùng','khu']},
      {word:'place', ipa:'/ˈpɫeɪs/', meaning:'nơi, địa điểm', type:'noun', example:'This is a nice place to work.', viAnswers:['nơi','địa điểm','chỗ']},
      {word:'location', ipa:'/ɫoʊˈkeɪʃən/', meaning:'vị trí, địa điểm', type:'noun', example:'The location of the office is good.', viAnswers:['vị trí','địa điểm']},
      {word:'parking', ipa:'/ˈpɑɹkɪŋ/', meaning:'bãi đỗ xe, đỗ xe', type:'noun', example:'The parking lot is behind the building.', viAnswers:['bãi đỗ xe','đỗ xe','bãi đậu xe','chỗ đậu xe']}
    ]
  },

  // ===== DAY 5: Shopping/Commerce =====
  {
    day: 5,
    topic: "Mua sắm / Thương mại",
    topicEn: "Shopping / Commerce",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Danh từ số ít / số nhiều (Singular & Plural Nouns)",
      explanation: "Danh từ số ít chỉ 1 đối tượng, danh từ số nhiều chỉ từ 2 đối tượng trở lên.\n\nQuy tắc biến đổi Danh từ số ít sang số nhiều:\n- 1. Hầu hết danh từ: Thêm -s. Ví dụ: employee -> employees, document -> documents.\n- 2. Danh từ kết thúc bằng -s, -ss, -sh, -ch, -x, -z, -o: Thêm -es. Ví dụ: bus -> buses, box -> boxes, watch -> watches, tomato -> tomatoes. (Ngoại lệ: photo -> photos, piano -> pianos).\n- 3. Danh từ kết thúc bằng phụ âm + y: Đổi y thành i rồi thêm -es. Ví dụ: company -> companies, baby -> babies. (Nếu trước y là nguyên âm: chỉ thêm s: day -> days).\n- 4. Danh từ kết thúc bằng -f hoặc -fe: Đổi thành -ves. Ví dụ: half -> halves, life -> lives, knife -> knives.\n\nDanh từ bất quy tắc đặc biệt (Cực kỳ phổ biến trong TOEIC):\n- man -> men (đàn ông), woman -> women (phụ nữ), child -> children (trẻ em), person -> people (người).\n- foot -> feet (bàn chân), tooth -> teeth (răng), mouse -> mice (con chuột).\n- Không đổi dạng: sheep -> sheep (con cừu), fish -> fish (con cá), deer -> deer (con nai).\n- Danh từ luôn ở dạng số nhiều: police (cảnh sát), pants (quần dài), scissors (kéo), glasses (kính).",
      structure: "N (số ít) + s/es -> N (số nhiều)",
      examples: [
        "Many employees attend the meeting. (Nhiều nhân viên tham dự cuộc họp.)",
        "Two companies signed the contract. (Hai công ty đã ký hợp đồng.)",
        "There are five children in the room. (Có 5 đứa trẻ trong phòng.)",
        "The police are investigating the case. (Cảnh sát đang điều tra vụ án.)"
      ],
exceptions: [
        "Ngoại lệ thêm -es với từ tận cùng bằng -o: Các từ mượn hoặc viết tắt như <i>photo -> photos, piano -> pianos, video -> videos, radio -> radios</i> chỉ thêm <b>-s</b> chứ không thêm -es.",
        "Ngoại lệ tận cùng bằng -f/-fe: Một số từ như <i>roof -> roofs, belief -> beliefs, chief -> chiefs, cliff -> cliffs</i> chỉ thêm <b>-s</b> chứ không đổi thành -ves.",
        "Danh từ bất quy tắc chỉ người/vật cực kỳ phổ biến trong TOEIC: <i>person -> people, child -> children, foot -> feet, tooth -> teeth, woman -> women, man -> men</i>.",
        "Danh từ không đổi dạng ở số nhiều: <i>sheep, fish, deer, aircraft, series, species</i>."
      ],
      notes: [
        "Một số danh từ kết thúc bằng <b>-s</b> nhưng là danh từ không đếm được/số ít: <i>news (tin tức), physics (vật lý), economics (kinh tế học)</i>.",
        "Danh từ tập hợp luôn ở dạng số nhiều và đi với động từ số nhiều: <i>police, cattle</i>. Các đồ vật gồm hai phần đi liền cũng luôn ở số nhiều: <i>pants (quần), scissors (kéo), glasses (kính)</i>."
      ],
            tips: "Mẹo: Chú ý các danh từ bất quy tắc chỉ người như children, people, women, men luôn đi với động từ chia ở số nhiều."
    },
    words: [
      {word:'buy', ipa:'/ˈbaɪ/', meaning:'mua', type:'verb', example:'I buy office supplies every month.', viAnswers:['mua']},
      {word:'sell', ipa:'/ˈsɛɫ/', meaning:'bán', type:'verb', example:'We sell computers and phones.', viAnswers:['bán']},
      {word:'price', ipa:'/ˈpɹaɪs/', meaning:'giá, giá cả', type:'noun', example:'The price is too high.', viAnswers:['giá','giá cả','giá tiền']},
      {word:'cost', ipa:'/ˈkɑst/, /ˈkɔst/', meaning:'chi phí, tốn', type:'noun / verb', example:'How much does it cost?', viAnswers:['chi phí','tốn','giá']},
      {word:'order', ipa:'/ˈɔɹdɝ/', meaning:'đặt hàng, đơn hàng', type:'verb / noun', example:'I want to order ten items.', viAnswers:['đặt hàng','đơn hàng','gọi món']},
      {word:'product', ipa:'/ˈpɹɑdəkt/', meaning:'sản phẩm', type:'noun', example:'This product is very popular.', viAnswers:['sản phẩm']},
      {word:'item', ipa:'/ˈaɪtəm/', meaning:'mặt hàng, món đồ', type:'noun', example:'How many items do you need?', viAnswers:['mặt hàng','món đồ','vật phẩm','mục']},
      {word:'invoice', ipa:'/ˈɪnvɔɪs/', meaning:'hóa đơn', type:'noun', example:'Please send the invoice by email.', viAnswers:['hóa đơn','hoá đơn']},
      {word:'payment', ipa:'/ˈpeɪmənt/', meaning:'thanh toán, khoản trả', type:'noun', example:'The payment is due next week.', viAnswers:['thanh toán','khoản thanh toán','khoản trả']},
      {word:'cash', ipa:'/ˈkæʃ/', meaning:'tiền mặt', type:'noun', example:'Do you pay by cash or card?', viAnswers:['tiền mặt']},
      {word:'card', ipa:'/ˈkɑɹd/', meaning:'thẻ', type:'noun', example:'I pay by credit card.', viAnswers:['thẻ','thẻ tín dụng']},
      {word:'discount', ipa:'/ˈdɪskaʊnt/, /dɪˈskaʊnt/', meaning:'giảm giá, chiết khấu', type:'noun', example:'There is a 20% discount today.', viAnswers:['giảm giá','chiết khấu']},
      {word:'sale', ipa:'/ˈseɪɫ/', meaning:'giảm giá, bán hàng', type:'noun', example:'The store has a big sale this week.', viAnswers:['giảm giá','bán hàng','đợt giảm giá']},
      {word:'delivery', ipa:'/dɪˈɫɪvɝi/', meaning:'giao hàng', type:'noun', example:'The delivery arrives tomorrow.', viAnswers:['giao hàng','sự giao hàng','vận chuyển']},
      {word:'shipping', ipa:'/ˈʃɪpɪŋ/', meaning:'vận chuyển', type:'noun', example:'Shipping is free for big orders.', viAnswers:['vận chuyển','giao hàng','phí vận chuyển']},
      {word:'package', ipa:'/ˈpækədʒ/, /ˈpækɪdʒ/', meaning:'gói hàng, bưu kiện', type:'noun', example:'Your package is ready.', viAnswers:['gói hàng','bưu kiện','kiện hàng']},
      {word:'receipt', ipa:'/ɹiˈsit/, /ɹɪˈsit/', meaning:'biên lai, hóa đơn', type:'noun', example:'Please keep your receipt.', viAnswers:['biên lai','hóa đơn','biên nhận']},
      {word:'service', ipa:'/ˈsɝvəs/, /ˈsɝvɪs/', meaning:'dịch vụ', type:'noun', example:'The service here is excellent.', viAnswers:['dịch vụ']},
      {word:'market', ipa:'/ˈmɑɹkət/, /ˈmɑɹkɪt/', meaning:'thị trường, chợ', type:'noun', example:'The market is very competitive.', viAnswers:['thị trường','chợ']},
      {word:'supplier', ipa:'/səˈpɫaɪɝ/', meaning:'nhà cung cấp', type:'noun', example:'We need a new supplier.', viAnswers:['nhà cung cấp','nhà cung ứng']},
      {word:'stock', ipa:'/ˈstɑk/', meaning:'hàng tồn kho, kho hàng', type:'noun', example:'This item is out of stock.', viAnswers:['hàng tồn kho','kho hàng','tồn kho']},
      {word:'available', ipa:'/əˈveɪɫəbəɫ/', meaning:'có sẵn, có thể sử dụng', type:'adjective', example:'This product is available now.', viAnswers:['có sẵn','có thể sử dụng','sẵn có','sẵn sàng']},
      {word:'expensive', ipa:'/ɪkˈspɛnsɪv/', meaning:'đắt, đắt đỏ', type:'adjective', example:'This phone is very expensive.', viAnswers:['đắt','đắt đỏ','mắc']},
      {word:'cheap', ipa:'/ˈtʃip/', meaning:'rẻ', type:'adjective', example:'This item is cheap but good.', viAnswers:['rẻ','rẻ tiền','giá rẻ']},
      {word:'refund', ipa:'/ˈɹiˌfənd/, /ɹɪˈfənd/', meaning:'hoàn tiền, trả lại tiền', type:'noun / verb', example:'Can I get a refund?', viAnswers:['hoàn tiền','trả lại tiền','hoàn lại tiền']}
    ]
  },

  // ===== DAY 6: Basic Adjectives =====
  {
    day: 6,
    topic: "Tính từ cơ bản",
    topicEn: "Basic Adjectives",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Tính từ (Adjectives)",
      explanation: "Tính từ dùng để mô tả tính chất, đặc điểm của người hoặc vật.\n\nVị trí của Tính từ trong câu (Cực kỳ quan trọng trong đề thi TOEIC Part 5):\n- 1. Trước Danh từ: Để bổ nghĩa cho danh từ đó. Ví dụ: a new project, a reliable manager. Cấu trúc: Mạo từ + Adj + N.\n- 2. Sau Động từ liên kết (Linking Verbs): be (am/is/are/was/were), become, get, look, seem, feel, taste... Ví dụ: The task is difficult, He looks professional.\n- 3. Trong cấu trúc bổ ngữ cho tân ngữ:\n  + keep + O + Adj (giữ cho ai/cái gì thế nào). Ví dụ: Keep the document confidential.\n  + make + O + Adj (làm cho ai/cái gì thế nào). Ví dụ: The news made him happy.\n  + find + O + Adj (thấy ai/cái gì thế nào). Ví dụ: I find this book interesting.\n\nQuy tắc trật tự tính từ (OSASCOMP) khi có nhiều tính từ đứng trước danh từ:\nOpinion (Ý kiến) -> Size (Kích cỡ) -> Age (Mới cũ) -> Shape (Hình dáng) -> Color (Màu sắc) -> Origin (Nguồn gốc) -> Material (Chất liệu) -> Purpose (Mục đích) + Danh từ.\nVí dụ: a beautiful (Opinion) small (Size) new (Age) black (Color) leather (Material) bag (N).",
      structure: "Adj + N | Linking Verb + Adj | keep/make/find + O + Adj",
      examples: [
        "She is an efficient employee. (Cô ấy là một nhân viên hiệu quả.)",
        "The customer was satisfied with the service. (Khách hàng đã hài lòng với dịch vụ.)",
        "Please keep the window open. (Vui lòng giữ cửa sổ mở.)",
        "We found the exam difficult. (Chúng tôi thấy kỳ thi này khó.)"
      ],
exceptions: [
        "Bẫy phân biệt tính từ đuôi <b>-ed</b> và <b>-ing</b>: Đuôi <b>-ing</b> mô tả tính chất, đặc điểm của đối tượng (chủ động). Đuôi <b>-ed</b> mô tả cảm xúc, trạng thái của con người khi bị tác động (bị động). Ví dụ: <i>an interesting book</i> (cuốn sách hay) vs. <i>I am interested in the book</i> (tôi thích cuốn sách đó).",
        "Một số từ tận cùng đuôi <b>-ly</b> nhưng lại là TÍNH TỪ chứ không phải trạng từ: <i>friendly (thân thiện), lovely (đáng yêu), costly (đắt đỏ), timely (kịp thời), daily/weekly/monthly</i>."
      ],
      notes: [
        "Vị trí tính từ: Đứng <b>trước danh từ</b> để bổ nghĩa (<i>Adj + N</i>) hoặc đứng <b>sau động từ liên kết (linking verbs)</b> như <i>be, seem, look, feel, become, get, taste, smell, sound</i>."
      ],
            tips: "Mẹo: Trong câu trắc nghiệm TOEIC, nếu phía sau khoảng trống là danh từ, hãy ưu tiên chọn tính từ để bổ nghĩa. Nếu phía trước là động từ to be, hãy chọn tính từ."
    },
    words: [
      {word:'new', ipa:'/ˈnju/, /ˈnu/', meaning:'mới', type:'adjective', example:'She has a new computer.', viAnswers:['mới']},
      {word:'old', ipa:'/ˈoʊɫd/', meaning:'cũ, già', type:'adjective', example:'This is an old building.', viAnswers:['cũ','già']},
      {word:'good', ipa:'/ˈɡʊd/, /ɡɪd/', meaning:'tốt, giỏi', type:'adjective', example:'He is a good manager.', viAnswers:['tốt','giỏi','hay']},
      {word:'bad', ipa:'/ˈbæd/', meaning:'xấu, tệ, kém', type:'adjective', example:'The weather is bad today.', viAnswers:['xấu','tệ','kém','dở']},
      {word:'large', ipa:'/ˈɫɑɹdʒ/', meaning:'lớn, rộng', type:'adjective', example:'We need a large room for the meeting.', viAnswers:['lớn','rộng','to']},
      {word:'small', ipa:'/ˈsmɔɫ/', meaning:'nhỏ, bé', type:'adjective', example:'The office is too small.', viAnswers:['nhỏ','bé','nhỏ bé']},
      {word:'high', ipa:'/ˈhaɪ/', meaning:'cao', type:'adjective', example:'The price is very high.', viAnswers:['cao']},
      {word:'low', ipa:'/ˈɫoʊ/', meaning:'thấp', type:'adjective', example:'We offer low prices.', viAnswers:['thấp']},
      {word:'fast', ipa:'/ˈfæst/', meaning:'nhanh', type:'adjective / adverb', example:'The internet is very fast here.', viAnswers:['nhanh']},
      {word:'slow', ipa:'/ˈsɫoʊ/', meaning:'chậm', type:'adjective / adverb', example:'The computer is too slow.', viAnswers:['chậm']},
      {word:'easy', ipa:'/ˈizi/', meaning:'dễ, dễ dàng', type:'adjective', example:'This task is easy.', viAnswers:['dễ','dễ dàng']},
      {word:'difficult', ipa:'/ˈdɪfəkəɫt/', meaning:'khó, khó khăn', type:'adjective', example:'The exam is very difficult.', viAnswers:['khó','khó khăn']},
      {word:'important', ipa:'/ˌɪmˈpɔɹtənt/', meaning:'quan trọng', type:'adjective', example:'This meeting is very important.', viAnswers:['quan trọng']},
      {word:'necessary', ipa:'/ˈnɛsəˌsɛɹi/', meaning:'cần thiết', type:'adjective', example:'A passport is necessary for travel.', viAnswers:['cần thiết']},
      {word:'available', ipa:'/əˈveɪɫəbəɫ/', meaning:'có sẵn, rảnh', type:'adjective', example:'Are you available tomorrow?', viAnswers:['có sẵn','rảnh','sẵn có','sẵn sàng']},
      {word:'busy', ipa:'/ˈbɪzi/', meaning:'bận, bận rộn', type:'adjective', example:'I am very busy this week.', viAnswers:['bận','bận rộn']},
      {word:'free', ipa:'/ˈfɹi/', meaning:'miễn phí, rảnh, tự do', type:'adjective', example:'The parking is free.', viAnswers:['miễn phí','rảnh','tự do']},
      {word:'ready', ipa:'/ˈɹɛdi/', meaning:'sẵn sàng', type:'adjective', example:'The report is ready.', viAnswers:['sẵn sàng']},
      {word:'late', ipa:'/ˈɫeɪt/', meaning:'muộn, trễ', type:'adjective', example:'He is always late for meetings.', viAnswers:['muộn','trễ']},
      {word:'early', ipa:'/ˈɝɫi/', meaning:'sớm', type:'adjective', example:'She is always early.', viAnswers:['sớm']},
      {word:'full', ipa:'/ˈfʊɫ/', meaning:'đầy', type:'adjective', example:'The parking lot is full.', viAnswers:['đầy','đầy đủ']},
      {word:'empty', ipa:'/ˈɛmpti/, /ˈɛmti/', meaning:'trống, rỗng', type:'adjective', example:'The room is empty.', viAnswers:['trống','rỗng','trống rỗng']},
      {word:'possible', ipa:'/ˈpɑsəbəɫ/', meaning:'có thể, khả thi', type:'adjective', example:'Is it possible to change the date?', viAnswers:['có thể','khả thi']},
      {word:'different', ipa:'/ˈdɪfɝənt/, /ˈdɪfɹənt/', meaning:'khác, khác nhau', type:'adjective', example:'We have different opinions.', viAnswers:['khác','khác nhau','khác biệt']},
      {word:'same', ipa:'/ˈseɪm/', meaning:'giống nhau, cùng', type:'adjective', example:'We work in the same office.', viAnswers:['giống nhau','cùng','giống','y hệt']}
    ]
  },

  // ===== DAY 7: REVIEW days 1-6 =====
  {
    day: 7,
    topic: "Ôn tập ngày 1-6",
    topicEn: "Review Day 1-6",
    phase: 1,
    isReview: true,
    reviewDays: [1, 2, 3, 4, 5, 6],
    grammar: {
      title: "Ôn tập ngữ pháp",
      explanation: "Ôn lại tất cả ngữ pháp đã học từ ngày 1 đến ngày 6:\n\n1. Ngày 1: Câu đơn (S + V, S + V + O)\n2. Ngày 2: Hiện tại đơn (Present Simple) - khẳng định\n3. Ngày 3: Hiện tại đơn - phủ định (don't / doesn't + V)\n4. Ngày 4: Hiện tại đơn - câu hỏi (Do/Does + S + V?)\n5. Ngày 5: Danh từ số ít / số nhiều (-s, -es, -ies)\n6. Ngày 6: Tính từ (trước danh từ / sau to be)\n\nHãy ôn lại từng phần, làm bài tập và ghi lại những lỗi sai thường gặp.",
      structure: "",
      examples: [],
      tips: "Làm bài tập, chữa lỗi, ghi lại lỗi sai. Ôn lại 150 từ vựng đã học (25 từ x 6 ngày)."
    },
    words: []
  },

  // ===== DAY 8: Transportation =====
  {
    day: 8,
    topic: "Giao thông / Di chuyển",
    topicEn: "Transportation",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Hiện tại tiếp diễn (Present Continuous)",
      explanation: "Thì hiện tại tiếp diễn diễn tả hành động đang xảy ra tại thời điểm nói hoặc xung quanh thời điểm nói.\n\nQuy tắc thêm đuôi -ing vào động từ thường:\n- 1. Động từ kết thúc bằng e câm: Bỏ e rồi thêm -ing. Ví dụ: write -> writing, take -> taking.\n- 2. Động từ 1 âm tiết kết thúc bằng một Nguyên âm ở giữa hai Phụ âm (CVC): Gấp đôi phụ âm cuối rồi thêm -ing. Ví dụ: run -> running, sit -> sitting, stop -> stopping.\n- 3. Động từ 2 âm tiết có trọng âm rơi vào âm tiết thứ hai: Gấp đôi phụ âm cuối. Ví dụ: begin -> beginning, commit -> committing. (Nếu trọng âm rơi vào âm thứ nhất thì không gấp đôi: visit -> visiting, open -> opening).\n- 4. Động từ kết thúc bằng ie: Đổi ie thành y rồi thêm -ing. Ví dụ: lie -> lying, die -> dying.\n\nLưu ý đặc biệt (Rất hay bẫy trong TOEIC):\nCác động từ chỉ trạng thái, nhận thức, cảm xúc (Stative Verbs) KHÔNG chia ở thì tiếp diễn: want, like, love, hate, know, remember, forget, believe, understand, seem, belong, own...\nVí dụ: Không nói \"I am knowing\" mà phải nói \"I know\".",
      structure: "S + am/is/are + V-ing | S + am/is/are + not + V-ing | Am/Is/Are + S + V-ing?",
      examples: [
        "The team is writing the project report now. (Cả đội đang viết báo cáo dự án bây giờ.)",
        "They are planning a new marketing strategy. (Họ đang lên kế hoạch cho chiến lược tiếp thị mới.)",
        "She wants to meet the manager. (Cô ấy muốn gặp quản lý. - Sử dụng động từ trạng thái)"
      ],
exceptions: [
        "<b>Động từ trạng thái (Stative Verbs)</b> không chia ở dạng tiếp diễn: <i>want, like, love, hate, know, believe, understand, remember, forget, need, seem, taste, smell, belong, own, have (nghĩa sở hữu)</i>. Ví dụ: viết <i>I am owning a car</i> ❌ -> <i>I own a car</i> ✅."
      ],
      notes: [
        "Thì này còn được dùng để diễn tả một kế hoạch/dự định chắc chắn sẽ xảy ra trong tương lai gần (đã lên lịch cụ thể).",
        "Dấu hiệu nhận biết: <i>now, right now, at the moment, at present, Look!, Listen!</i>."
      ],
            tips: "Mẹo: Cần chú ý các trạng từ chỉ thời gian như now, right now, at the moment, currently hoặc các từ gây chú ý như Look!, Listen! để chia thì hiện tại tiếp diễn."
    },
    words: [
      {word:'go', ipa:'/ˈɡoʊ/', meaning:'đi', type:'verb', example:'I go to work by bus.', viAnswers:['đi']},
      {word:'come', ipa:'/ˈkəm/', meaning:'đến, tới', type:'verb', example:'Please come to the office.', viAnswers:['đến','tới']},
      {word:'arrive', ipa:'/ɝˈaɪv/', meaning:'đến nơi', type:'verb', example:'The train arrives at 9 a.m.', viAnswers:['đến nơi','đến','tới nơi']},
      {word:'leave', ipa:'/ˈɫiv/', meaning:'rời đi, rời khỏi', type:'verb', example:'I leave home at 7 a.m.', viAnswers:['rời đi','rời khỏi','rời']},
      {word:'travel', ipa:'/ˈtɹævəɫ/', meaning:'du lịch, đi lại', type:'verb / noun', example:'I travel by plane for work.', viAnswers:['du lịch','đi lại','di chuyển']},
      {word:'drive', ipa:'/ˈdɹaɪv/', meaning:'lái xe', type:'verb', example:'He drives to work every day.', viAnswers:['lái xe']},
      {word:'walk', ipa:'/ˈwɑk/, /ˈwɔk/', meaning:'đi bộ', type:'verb', example:'I walk to the station.', viAnswers:['đi bộ']},
      {word:'ride', ipa:'/ˈɹaɪd/', meaning:'đi (xe), cưỡi', type:'verb / noun', example:'She rides a bicycle to school.', viAnswers:['đi xe','cưỡi','đi']},
      {word:'take', ipa:'/ˈteɪk/', meaning:'đi (phương tiện), lấy', type:'verb', example:'I take the bus every morning.', viAnswers:['đi','lấy','mất']},
      {word:'train', ipa:'/ˈtɹeɪn/', meaning:'tàu hỏa', type:'noun', example:'The train is very fast.', viAnswers:['tàu hỏa','tàu','xe lửa']},
      {word:'bus', ipa:'/ˈbəs/', meaning:'xe buýt', type:'noun', example:'The bus comes every 15 minutes.', viAnswers:['xe buýt','xe bus']},
      {word:'taxi', ipa:'/ˈtæksi/', meaning:'xe taxi', type:'noun', example:'I take a taxi to the airport.', viAnswers:['xe taxi','taxi','tắc xi']},
      {word:'car', ipa:'/ˈkɑɹ/', meaning:'xe hơi, ô tô', type:'noun', example:'He has a new car.', viAnswers:['xe hơi','ô tô','xe']},
      {word:'flight', ipa:'/ˈfɫaɪt/', meaning:'chuyến bay', type:'noun', example:'My flight is at 3 p.m.', viAnswers:['chuyến bay']},
      {word:'ticket', ipa:'/ˈtɪkət/, /ˈtɪkɪt/', meaning:'vé', type:'noun', example:'I buy a ticket online.', viAnswers:['vé']},
      {word:'road', ipa:'/ˈɹoʊd/', meaning:'con đường', type:'noun', example:'The road is very busy.', viAnswers:['con đường','đường']},
      {word:'traffic', ipa:'/ˈtɹæfɪk/', meaning:'giao thông', type:'noun', example:'The traffic is heavy this morning.', viAnswers:['giao thông']},
      {word:'delay', ipa:'/dɪˈɫeɪ/', meaning:'sự chậm trễ, trì hoãn', type:'noun / verb', example:'There is a delay at the airport.', viAnswers:['sự chậm trễ','trì hoãn','hoãn','chậm trễ']},
      {word:'trip', ipa:'/ˈtɹɪp/', meaning:'chuyến đi', type:'noun', example:'I have a business trip next week.', viAnswers:['chuyến đi','chuyến']},
      {word:'visit', ipa:'/ˈvɪzɪt/', meaning:'thăm, ghé thăm', type:'verb / noun', example:'I visit the client every month.', viAnswers:['thăm','ghé thăm','viếng thăm','tham quan']},
      {word:'return', ipa:'/ɹiˈtɝn/, /ɹɪˈtɝn/', meaning:'trở về, trả lại', type:'verb', example:'I return home at 6 p.m.', viAnswers:['trở về','trả lại','quay về']},
      {word:'depart', ipa:'/dɪˈpɑɹt/', meaning:'khởi hành', type:'verb', example:'The bus departs at 8 a.m.', viAnswers:['khởi hành','rời đi']},
      {word:'destination', ipa:'/ˌdɛstəˈneɪʃən/, /ˌdɛstɪˈneɪʃən/', meaning:'điểm đến', type:'noun', example:'What is your destination?', viAnswers:['điểm đến','đích đến','nơi đến']},
      {word:'passenger', ipa:'/ˈpæsəndʒɝ/', meaning:'hành khách', type:'noun', example:'There are many passengers on the train.', viAnswers:['hành khách','khách']},
      {word:'schedule', ipa:'/ˈskɛdʒuɫ/, /ˈskɛdʒʊɫ/', meaning:'lịch trình', type:'noun', example:'Check the bus schedule online.', viAnswers:['lịch trình','thời khóa biểu','lịch']}
    ]
  },

  // ===== DAY 9: People/Positions =====
  {
    day: 9,
    topic: "Con người / Chức vụ",
    topicEn: "People / Positions",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Quá khứ đơn (Past Simple)",
      explanation: "Thì quá khứ đơn diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.\n\nQuy tắc thêm đuôi -ed cho động từ có quy tắc:\n- 1. Động từ kết thúc bằng e: Chỉ cần thêm d. Ví dụ: live -> lived, agree -> agreed.\n- 2. Động từ kết thúc bằng phụ âm + y: Đổi y thành i rồi thêm -ed. Ví dụ: study -> studied, reply -> replied. (Nếu trước y là nguyên âm: chỉ thêm -ed: play -> played).\n- 3. Động từ 1 âm tiết kết thúc bằng một Nguyên âm ở giữa hai Phụ âm: Gấp đôi phụ âm cuối rồi thêm -ed. Ví dụ: stop -> stopped, plan -> planned.\n\nQuy tắc phát âm đuôi -ed:\n- 1. Phát âm là /id/: Khi động từ tận cùng bằng âm /t/ hoặc /d/. Ví dụ: wanted, needed, started.\n- 2. Phát âm là /t/: Khi động từ tận cùng bằng phụ âm vô thanh /p, k, f, s, sh, ch/. Ví dụ: looked, stopped, washed, watched, missed.\n- 3. Phát âm là /d/: Các trường hợp tận cùng bằng âm hữu thanh còn lại. Ví dụ: played, lived, studied.\n\nĐộng từ bất quy tắc cốt lõi trong TOEIC:\ngo -> went, buy -> bought, make -> made, take -> took, give -> gave, send -> sent, write -> wrote, build -> built, see -> saw, find -> found, meet -> met.",
      structure: "S + V-ed / V2 | S + did + not + V | Did + S + V?",
      examples: [
        "The company built a new factory last year. (Công ty đã xây dựng một nhà máy mới vào năm ngoái.)",
        "He met the client yesterday morning. (Anh ấy đã gặp khách hàng sáng hôm qua.)",
        "We decided to postpone the meeting. (Chúng tôi đã quyết định hoãn cuộc họp.)",
        "She did not receive the document. (Cô ấy đã không nhận được tài liệu.)"
      ],
exceptions: [
        "Nhân đôi phụ âm cuối trước khi thêm <b>-ed</b>: Với động từ 1 âm tiết kết thúc dạng Phụ âm - Nguyên âm - Phụ âm (CVC), ta nhân đôi phụ âm cuối (ví dụ: <i>stop -> stopped</i>, <i>plan -> planned</i>). Nếu động từ 2 âm tiết, chỉ nhân đôi khi trọng âm rơi vào âm tiết thứ 2 (ví dụ: <i>prefer -> preferred</i>, nhưng <i>visit -> visited</i>).",
        "Động từ kết thúc bằng phụ âm + <b>y</b>: đổi <b>y</b> thành <b>i</b> rồi thêm <b>-ed</b> (ví dụ: <i>study -> studied</i>)."
      ],
      notes: [
        "Diễn tả hành động đã xảy ra và <b>chấm dứt hoàn toàn</b> trong quá khứ, xác định rõ thời gian.",
        "Dấu hiệu nhận biết: <i>yesterday, ago, last week/month/year, in + năm quá khứ (in 2020)</i>."
      ],
            tips: "Mẹo: Tìm các trạng từ chỉ thời gian trong quá khứ như yesterday, ago, last (last week/month), in + năm quá khứ để chia thì quá khứ đơn."
    },
    words: [
      {word:'director', ipa:'/daɪˈɹɛktɝ/, /dɝˈɛktɝ/, /diˈɹɛktɝ/, /dɪˈɹɛktɝ/', meaning:'giám đốc', type:'noun', example:'The director makes important decisions.', viAnswers:['giám đốc']},
      {word:'assistant', ipa:'/əˈsɪstənt/', meaning:'trợ lý', type:'noun', example:'The assistant helps the manager.', viAnswers:['trợ lý','phụ tá']},
      {word:'supervisor', ipa:'/ˈsupɝˌvaɪzɝ/', meaning:'giám sát viên, người giám sát', type:'noun', example:'The supervisor checks our work.', viAnswers:['giám sát viên','người giám sát','quản đốc']},
      {word:'worker', ipa:'/ˈwɝkɝ/', meaning:'công nhân, người lao động', type:'noun', example:'The workers start at 7 a.m.', viAnswers:['công nhân','người lao động','nhân công']},
      {word:'engineer', ipa:'/ˈɛndʒəˈnɪɹ/', meaning:'kỹ sư', type:'noun', example:'She is a software engineer.', viAnswers:['kỹ sư']},
      {word:'developer', ipa:'/dɪˈvɛɫəpɝ/', meaning:'nhà phát triển, lập trình viên', type:'noun', example:'The developer builds websites.', viAnswers:['nhà phát triển','lập trình viên']},
      {word:'designer', ipa:'/dɪˈzaɪnɝ/', meaning:'nhà thiết kế', type:'noun', example:'The designer creates beautiful logos.', viAnswers:['nhà thiết kế']},
      {word:'accountant', ipa:'/əˈkaʊntənt/', meaning:'kế toán', type:'noun', example:'The accountant manages the budget.', viAnswers:['kế toán','nhân viên kế toán']},
      {word:'receptionist', ipa:'/ɹiˈsɛpʃənɪst/, /ɹɪˈsɛpʃənɪst/', meaning:'lễ tân', type:'noun', example:'The receptionist answers the phone.', viAnswers:['lễ tân','nhân viên lễ tân']},
      {word:'secretary', ipa:'/ˈsɛkɹəˌtɛɹi/', meaning:'thư ký', type:'noun', example:'The secretary schedules meetings.', viAnswers:['thư ký']},
      {word:'teacher', ipa:'/ˈtitʃɝ/', meaning:'giáo viên', type:'noun', example:'The teacher explains the lesson.', viAnswers:['giáo viên','thầy giáo','cô giáo']},
      {word:'student', ipa:'/ˈstudənt/', meaning:'học sinh, sinh viên', type:'noun', example:'The student studies hard for the exam.', viAnswers:['học sinh','sinh viên']},
      {word:'applicant', ipa:'/ˈæpɫɪkənt/', meaning:'người nộp đơn, ứng viên', type:'noun', example:'The applicant has good experience.', viAnswers:['người nộp đơn','ứng viên','người xin việc']},
      {word:'candidate', ipa:'/ˈkændədeɪt/, /ˈkænədɪt/', meaning:'ứng viên, ứng cử viên', type:'noun', example:'There are five candidates for this position.', viAnswers:['ứng viên','ứng cử viên']},
      {word:'guest', ipa:'/ˈɡɛst/', meaning:'khách, khách mời', type:'noun', example:'We have special guests today.', viAnswers:['khách','khách mời']},
      {word:'visitor', ipa:'/ˈvɪzɪtɝ/', meaning:'khách tham quan, người đến thăm', type:'noun', example:'Visitors must sign in at the front desk.', viAnswers:['khách tham quan','người đến thăm','du khách','khách']},
      {word:'member', ipa:'/ˈmɛmbɝ/', meaning:'thành viên', type:'noun', example:'She is a member of our team.', viAnswers:['thành viên']},
      {word:'leader', ipa:'/ˈɫidɝ/', meaning:'người lãnh đạo, trưởng nhóm', type:'noun', example:'The leader guides the team.', viAnswers:['người lãnh đạo','trưởng nhóm','lãnh đạo']},
      {word:'partner', ipa:'/ˈpɑɹtnɝ/', meaning:'đối tác, cộng sự', type:'noun', example:'He is our business partner.', viAnswers:['đối tác','cộng sự','bạn đồng hành']},
      {word:'colleague', ipa:'/ˈkɑɫiɡ/', meaning:'đồng nghiệp', type:'noun', example:'My colleague sits next to me.', viAnswers:['đồng nghiệp']},
      {word:'owner', ipa:'/ˈoʊnɝ/', meaning:'chủ sở hữu, chủ', type:'noun', example:'The owner opened this store in 2010.', viAnswers:['chủ sở hữu','chủ']},
      {word:'employer', ipa:'/ɛmˈpɫɔɪɝ/, /ɪmˈpɫɔɪɝ/', meaning:'người sử dụng lao động, chủ', type:'noun', example:'The employer provides health insurance.', viAnswers:['người sử dụng lao động','chủ','nhà tuyển dụng']},
      {word:'volunteer', ipa:'/ˌvɑɫənˈtɪɹ/', meaning:'tình nguyện viên', type:'noun', example:'Volunteers help at the event.', viAnswers:['tình nguyện viên','người tình nguyện']},
      {word:'representative', ipa:'/ˌɹɛpɹəˈzɛnətɪv/, /ˌɹɛpɹəˈzɛntətɪv/, /ˌɹɛpɹɪˈzɛnətɪv/, /ˌɹɛpɹɪˈzɛntətɪv/', meaning:'đại diện, người đại diện', type:'noun', example:'She is the company representative.', viAnswers:['đại diện','người đại diện']},
      {word:'consultant', ipa:'/kənˈsəɫtənt/', meaning:'tư vấn viên, cố vấn', type:'noun', example:'The consultant gives expert advice.', viAnswers:['tư vấn viên','cố vấn','chuyên gia tư vấn']}
    ]
  },

  // ===== DAY 10: Email/Documents =====
  {
    day: 10,
    topic: "Email / Tài liệu",
    topicEn: "Email / Documents",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Quá khứ đơn phủ định / câu hỏi",
      explanation: "Phủ định quá khứ đơn: dùng 'did not' (didn't) + V nguyên thể\nCâu hỏi quá khứ đơn: dùng 'Did' + S + V nguyên thể?\n\nLưu ý quan trọng: Khi dùng 'did/didn't', động từ PHẢI ở nguyên thể.\n❌ She didn't signed → ✅ She didn't sign\n❌ Did he sent? → ✅ Did he send?\n\nCâu hỏi Wh- quá khứ đơn:\n- What did you do yesterday? (Bạn đã làm gì hôm qua?)\n- Where did she go? (Cô ấy đã đi đâu?)\n- When did they sign the contract? (Họ đã ký hợp đồng khi nào?)\n\nĐộng từ 'to be' trong quá khứ: was/were\n- I/He/She/It + was\n- We/You/They + were\n- Phủ định: was not (wasn't) / were not (weren't)\n- Câu hỏi: Was/Were + S?",
      structure: "S + didn't + V (nguyên thể) | Did + S + V (nguyên thể)?",
      examples: [
        "I didn't sign the document. (Tôi đã không ký tài liệu.)",
        "Did you submit the form? (Bạn đã nộp biểu mẫu chưa?)",
        "She didn't print the file. (Cô ấy đã không in tập tin.)",
        "When did he send the email? (Anh ấy đã gửi email khi nào?)"
      ],
exceptions: [
        "Động từ <i>to be</i> ở quá khứ (<i>was / were</i>) không dùng trợ động từ <i>did</i>. Khi phủ định chỉ cần thêm <i>not</i> (<i>wasn't / weren't</i>), khi hỏi chỉ cần đảo lên trước chủ ngữ."
      ],
      notes: [
        "<b>Lỗi thường gặp:</b> Khi đã dùng trợ động từ phủ định (didn't) hoặc trợ động từ nghi vấn (Did), động từ chính bắt buộc phải trả về <b>nguyên mẫu không chia (V1)</b>. Ví dụ: <i>Did you went?</i> ❌ -> <i>Did you go?</i> ✅."
      ],
            tips: "Mẹo: Nhớ quy tắc vàng: 'did/didn't' + V nguyên thể. Khi thấy 'did', động từ sau nó LUÔN ở nguyên thể."
    },
    words: [
      {word:'file', ipa:'/ˈfaɪɫ/', meaning:'tập tin, hồ sơ', type:'noun', example:'Please open this file.', viAnswers:['tập tin','hồ sơ','tệp']},
      {word:'form', ipa:'/ˈfɔɹm/', meaning:'biểu mẫu, đơn', type:'noun', example:'Fill out this form, please.', viAnswers:['biểu mẫu','đơn','mẫu đơn']},
      {word:'letter', ipa:'/ˈɫɛtɝ/', meaning:'thư, lá thư', type:'noun', example:'I received a letter from the bank.', viAnswers:['thư','lá thư','bức thư']},
      {word:'notice', ipa:'/ˈnoʊtəs/, /ˈnoʊtɪs/', meaning:'thông báo', type:'noun', example:'There is a notice on the board.', viAnswers:['thông báo']},
      {word:'information', ipa:'/ˌɪnfɝˈmeɪʃən/, /ɪnˈfɔɹˈmeɪʃən/', meaning:'thông tin', type:'noun', example:'I need more information.', viAnswers:['thông tin']},
      {word:'detail', ipa:'/ˈditeɪɫ/, /dɪˈteɪɫ/', meaning:'chi tiết', type:'noun', example:'Please check the details carefully.', viAnswers:['chi tiết']},
      {word:'instruction', ipa:'/ˌɪnˈstɹəkʃən/', meaning:'hướng dẫn, chỉ dẫn', type:'noun', example:'Read the instructions before you start.', viAnswers:['hướng dẫn','chỉ dẫn']},
      {word:'request', ipa:'/ɹiˈkwɛst/, /ɹɪˈkwɛst/', meaning:'yêu cầu, đề nghị', type:'noun / verb', example:'I sent a request to the IT department.', viAnswers:['yêu cầu','đề nghị']},
      {word:'application', ipa:'/ˌæpɫəˈkeɪʃən/', meaning:'đơn xin, ứng dụng', type:'noun', example:'She submitted her application.', viAnswers:['đơn xin','ứng dụng','đơn ứng tuyển']},
      {word:'contract', ipa:'/ˈkɑnˌtɹækt/, /kənˈtɹækt/', meaning:'hợp đồng', type:'noun', example:'Please sign the contract.', viAnswers:['hợp đồng']},
      {word:'agreement', ipa:'/əˈɡɹimənt/', meaning:'thỏa thuận, hợp đồng', type:'noun', example:'Both sides reached an agreement.', viAnswers:['thỏa thuận','hợp đồng','sự đồng ý']},
      {word:'copy', ipa:'/ˈkɑpi/', meaning:'bản sao, sao chép', type:'noun / verb', example:'Please make a copy of this document.', viAnswers:['bản sao','sao chép']},
      {word:'attachment', ipa:'/əˈtætʃmənt/', meaning:'tệp đính kèm', type:'noun', example:'Please check the attachment in the email.', viAnswers:['tệp đính kèm','đính kèm','file đính kèm']},
      {word:'page', ipa:'/ˈpeɪdʒ/', meaning:'trang', type:'noun', example:'This document has ten pages.', viAnswers:['trang']},
      {word:'list', ipa:'/ˈɫɪst/', meaning:'danh sách', type:'noun', example:'I made a list of items we need.', viAnswers:['danh sách']},
      {word:'chart', ipa:'/ˈtʃɑɹt/', meaning:'biểu đồ', type:'noun', example:'The chart shows sales data.', viAnswers:['biểu đồ','bảng biểu']},
      {word:'record', ipa:'/ˈɹɛkɝd/, /ɹəˈkɔɹd/, /ɹɪˈkɔɹd/', meaning:'hồ sơ, ghi lại, bản ghi', type:'noun / verb', example:'We keep a record of all meetings.', viAnswers:['hồ sơ','ghi lại','bản ghi','kỷ lục']},
      {word:'data', ipa:'/ˈdætə/, /ˈdeɪtə/', meaning:'dữ liệu', type:'noun', example:'The data is stored on the server.', viAnswers:['dữ liệu','số liệu']},
      {word:'system', ipa:'/ˈsɪstəm/', meaning:'hệ thống', type:'noun', example:'The computer system is updated.', viAnswers:['hệ thống']},
      {word:'account', ipa:'/əˈkaʊnt/', meaning:'tài khoản', type:'noun', example:'Please create an account.', viAnswers:['tài khoản']},
      {word:'password', ipa:'/ˈpæsˌwɝd/', meaning:'mật khẩu', type:'noun', example:'Do not share your password.', viAnswers:['mật khẩu','mật mã']},
      {word:'software', ipa:'/ˈsɔfˌwɛɹ/, /ˈsɔftˌwɛɹ/', meaning:'phần mềm', type:'noun', example:'We use new software for work.', viAnswers:['phần mềm']},
      {word:'print', ipa:'/ˈpɹɪnt/', meaning:'in, in ấn', type:'verb', example:'Please print this document.', viAnswers:['in','in ấn']},
      {word:'sign', ipa:'/ˈsaɪn/', meaning:'ký, ký tên', type:'verb', example:'Please sign your name here.', viAnswers:['ký','ký tên']},
      {word:'submit', ipa:'/səbˈmɪt/', meaning:'nộp, gửi', type:'verb', example:'Submit the form before Friday.', viAnswers:['nộp','gửi','nộp bài']}
    ]
  },

  // ===== DAY 11: Common Adverbs =====
  {
    day: 11,
    topic: "Trạng từ thông dụng",
    topicEn: "Common Adverbs",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Trạng từ (Adverbs)",
      explanation: "Trạng từ dùng để bổ nghĩa cho Động từ thường, Tính từ, hoặc một Trạng từ khác.\n\nCách thành lập trạng từ chỉ thể cách phổ biến: Tính từ + -ly.\n- Ví dụ: quick -> quickly, careful -> carefully, professional -> professionally.\n\nCác trường hợp đặc biệt khi thêm đuôi -ly:\n- 1. Tính từ kết thúc bằng y: Đổi y thành i rồi thêm -ly. Ví dụ: happy -> happily, easy -> easily.\n- 2. Tính từ kết thúc bằng le: Bỏ e thêm y. Ví dụ: simple -> simply.\n- 3. Tính từ kết thúc bằng ic: Thêm -ally. Ví dụ: automatic -> automatically.\n\nTrạng từ bất quy tắc (Cực kỳ hay thi trong TOEIC):\n- 1. good -> well.\n- 2. Tính từ và trạng từ giống hệt nhau (không thêm -ly): fast, hard (chăm chỉ/khó khăn), late (muộn), early (sớm). Ví dụ: He works hard; This is a hard job.\n- 3. Cảnh giác bẫy từ vựng:\n  + hard (chăm chỉ/vất vả) khác biệt với hardly (hầu như không).\n  + late (muộn) khác biệt với lately (gần đây - dùng trong Hiện tại hoàn thành).\n  + Tính từ đuôi -ly dễ nhầm là trạng từ: friendly (thân thiện), lovely (đáng yêu), costly (đắt đỏ), timely (kịp thời), orderly (ngăn nắp).",
      structure: "Tính từ + ly -> Trạng từ | S + Adv + V | S + V + O + Adv | Adv + Adj",
      examples: [
        "She speaks English very fluently. (Cô ấy nói tiếng Anh rất trôi chảy.)",
        "The manager highly recommended the book. (Quản lý đánh giá rất cao cuốn sách.)",
        "The prices are extremely high. (Giá cả cực kỳ cao. - Trạng từ bổ nghĩa cho tính từ)",
        "Please submit the report in a timely manner. (timely là tính từ, dùng cụm \"in a timely manner\" để làm trạng từ)"
      ],
exceptions: [
        "Các trạng từ bất quy tắc đặc biệt (không tận cùng bằng -ly): <i>good (Adj) -> well (Adv)</i>, <i>fast (Adj) -> fast (Adv)</i> (không có fastly), <i>hard (Adj) -> hard (Adv)</i> (chăm chỉ), <i>late (Adj) -> late (Adv)</i> (trễ), <i>early (Adj) -> early (Adv)</i> (sớm).",
        "Phân biệt cặp trạng từ dễ gây nhầm lẫn: <i>hard</i> (chăm chỉ) vs. <i>hardly</i> (hầu như không); <i>late</i> (trễ) vs. <i>lately</i> (gần đây - dùng ở Hiện tại hoàn thành); <i>high</i> (cao) vs. <i>highly</i> (rất, cực kỳ - highly recommended)."
      ],
      notes: [
        "Trạng từ có thể bổ nghĩa cho động từ, tính từ hoặc trạng từ khác, nhưng <b>không bao giờ</b> bổ nghĩa cho danh từ.",
        "Vị trí trạng từ rất linh hoạt: có thể đứng đầu câu, cuối câu, trước động từ thường, sau be, hoặc giữa trợ động từ và động từ chính."
      ],
            tips: "Mẹo: Trạng từ đứng được nhiều vị trí, nhưng KHÔNG bao giờ đứng giữa Động từ và Tân ngữ trực tiếp của nó. Ví dụ: Không nói \"He reads quickly the book\" mà nói \"He reads the book quickly\"."
    },
    words: [
      {word:'always', ipa:'/ˈɔɫˌweɪz/, /ˈɔɫwiz/', meaning:'luôn luôn', type:'adverb', example:'She always comes on time.', viAnswers:['luôn luôn','luôn']},
      {word:'usually', ipa:'/ˈjuʒəɫi/, /ˈjuʒəwəɫi/', meaning:'thường, thường xuyên', type:'adverb', example:'I usually eat lunch at noon.', viAnswers:['thường','thường xuyên']},
      {word:'often', ipa:'/ˈɔfən/, /ˈɔftən/', meaning:'thường, hay', type:'adverb', example:'He often works late.', viAnswers:['thường','hay','thường xuyên']},
      {word:'sometimes', ipa:'/ˈsəmˌtaɪmz/, /səmˈtaɪmz/', meaning:'thỉnh thoảng, đôi khi', type:'adverb', example:'I sometimes work from home.', viAnswers:['thỉnh thoảng','đôi khi']},
      {word:'rarely', ipa:'/ˈɹɛɹɫi/', meaning:'hiếm khi', type:'adverb', example:'She rarely takes a day off.', viAnswers:['hiếm khi','ít khi']},
      {word:'never', ipa:'/ˈnɛvɝ/', meaning:'không bao giờ', type:'adverb', example:'He never misses a meeting.', viAnswers:['không bao giờ']},
      {word:'very', ipa:'/ˈvɛɹi/', meaning:'rất', type:'adverb', example:'The report is very important.', viAnswers:['rất']},
      {word:'too', ipa:'/ˈtu/', meaning:'quá, cũng', type:'adverb', example:'This room is too small.', viAnswers:['quá','cũng']},
      {word:'quite', ipa:'/ˈkwaɪt/', meaning:'khá, khá là', type:'adverb', example:'The test was quite difficult.', viAnswers:['khá','khá là','tương đối']},
      {word:'really', ipa:'/ˈɹiɫi/, /ˈɹɪɫi/', meaning:'thực sự', type:'adverb', example:'I really like this job.', viAnswers:['thực sự','thật sự']},
      {word:'carefully', ipa:'/ˈkɛɹfəɫi/', meaning:'cẩn thận', type:'adverb', example:'Please read the instructions carefully.', viAnswers:['cẩn thận','một cách cẩn thận']},
      {word:'quickly', ipa:'/ˈkwɪkɫi/', meaning:'nhanh chóng', type:'adverb', example:'She finished the task quickly.', viAnswers:['nhanh chóng','nhanh','một cách nhanh chóng']},
      {word:'slowly', ipa:'/ˈsɫoʊɫi/', meaning:'chậm, từ từ', type:'adverb', example:'Please speak slowly.', viAnswers:['chậm','từ từ','chậm rãi']},
      {word:'recently', ipa:'/ˈɹisənɫi/, /ˈɹisəntɫi/', meaning:'gần đây', type:'adverb', example:'I recently moved to a new office.', viAnswers:['gần đây','mới đây']},
      {word:'already', ipa:'/ɔˈɹɛdi/, /ɔɫˈɹɛdi/', meaning:'đã, rồi', type:'adverb', example:'I have already finished the report.', viAnswers:['đã','rồi']},
      {word:'still', ipa:'/ˈstɪɫ/', meaning:'vẫn, vẫn còn', type:'adverb', example:'He is still working.', viAnswers:['vẫn','vẫn còn']},
      {word:'just', ipa:'/ˈdʒəst/, /dʒɪst/', meaning:'vừa mới, chỉ', type:'adverb', example:'I just received your email.', viAnswers:['vừa mới','chỉ','vừa']},
      {word:'again', ipa:'/əˈɡeɪn/, /əˈɡɛn/', meaning:'lại, một lần nữa', type:'adverb', example:'Please try again.', viAnswers:['lại','một lần nữa','lần nữa']},
      {word:'together', ipa:'/təˈɡɛðɝ/', meaning:'cùng nhau', type:'adverb', example:'Let us work together.', viAnswers:['cùng nhau']},
      {word:'alone', ipa:'/əˈɫoʊn/', meaning:'một mình', type:'adverb / adjective', example:'She works alone in the office.', viAnswers:['một mình']},
      {word:'here', ipa:'/ˈhiɹ/', meaning:'ở đây', type:'adverb', example:'The meeting is here.', viAnswers:['ở đây','đây']},
      {word:'there', ipa:'/ˈðɛɹ/', meaning:'ở đó, ở kia', type:'adverb', example:'The parking lot is over there.', viAnswers:['ở đó','ở kia','đó']},
      {word:'inside', ipa:'/ˈɪnˌsaɪd/, /ˌɪnˈsaɪd/', meaning:'bên trong', type:'adverb / preposition', example:'Please wait inside the building.', viAnswers:['bên trong','phía trong','ở trong']},
      {word:'outside', ipa:'/ˈaʊtˈsaɪd/', meaning:'bên ngoài', type:'adverb / preposition', example:'The parking is outside.', viAnswers:['bên ngoài','phía ngoài','ở ngoài']},
      {word:'nearby', ipa:'/ˈnɪɹˈbaɪ/', meaning:'gần đây, ở gần', type:'adverb / adjective', example:'There is a restaurant nearby.', viAnswers:['gần đây','ở gần','gần']}
    ]
  },

  // ===== DAY 12: Meetings/Appointments =====
  {
    day: 12,
    topic: "Cuộc họp / Lịch hẹn",
    topicEn: "Meetings / Appointments",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Tương lai gần (be going to)",
      explanation: "Cấu trúc 'be going to' dùng để diễn tả:\n1. Dự định, kế hoạch đã quyết định trước: I am going to attend the conference.\n2. Dự đoán dựa trên bằng chứng hiện tại: Look at those clouds. It is going to rain.\n\nCấu trúc:\n- Khẳng định: S + am/is/are + going to + V\n- Phủ định: S + am/is/are + not + going to + V\n- Câu hỏi: Am/Is/Are + S + going to + V?\n\nSo sánh 'will' và 'be going to':\n- 'will': quyết định tại thời điểm nói (I'll help you.)\n- 'be going to': kế hoạch đã quyết định trước (I'm going to attend the meeting tomorrow.)\n\nDấu hiệu: tomorrow, next week, this afternoon, tonight",
      structure: "S + am/is/are + going to + V",
      examples: [
        "I am going to attend the conference next week. (Tôi sẽ tham dự hội nghị tuần tới.)",
        "She is going to prepare the presentation. (Cô ấy sẽ chuẩn bị bài thuyết trình.)",
        "We are not going to cancel the meeting. (Chúng tôi sẽ không hủy cuộc họp.)",
        "Are you going to register for the seminar? (Bạn sẽ đăng ký hội thảo không?)"
      ],
exceptions: [
        "Không sử dụng động từ <i>go</i> hoặc <i>come</i> ở dạng nguyên mẫu sau <i>be going to</i>. Thay vì viết <i>I am going to go to Hanoi</i>, ta viết gọn thành <i>I am going to Hanoi</i>."
      ],
      notes: [
        "Phân biệt <i>will</i> và <i>be going to</i>: <i>will</i> dùng cho quyết định bộc phát tại thời điểm nói hoặc dự đoán cảm tính; <i>be going to</i> dùng cho kế hoạch sẵn có hoặc dự đoán có căn cứ thực tế rõ ràng ở hiện tại."
      ],
            tips: "Mẹo: 'be going to' = dự định đã lên kế hoạch. Trong TOEIC, thường gặp trong email thông báo kế hoạch hoặc lịch hẹn."
    },
    words: [
      {word:'appointment', ipa:'/əˈpɔɪntmənt/', meaning:'cuộc hẹn', type:'noun', example:'I have an appointment at 2 p.m.', viAnswers:['cuộc hẹn','lịch hẹn']},
      {word:'conference', ipa:'/ˈkɑnfɝəns/, /ˈkɑnfɹəns/', meaning:'hội nghị', type:'noun', example:'The conference is next month.', viAnswers:['hội nghị']},
      {word:'interview', ipa:'/ˈɪntɝvˌju/', meaning:'phỏng vấn, cuộc phỏng vấn', type:'noun / verb', example:'She has a job interview tomorrow.', viAnswers:['phỏng vấn','cuộc phỏng vấn']},
      {word:'agenda', ipa:'/əˈdʒɛndə/', meaning:'chương trình nghị sự', type:'noun', example:'What is on the agenda today?', viAnswers:['chương trình nghị sự','lịch trình','nghị trình']},
      {word:'presentation', ipa:'/ˌpɹɛzənˈteɪʃən/', meaning:'bài thuyết trình', type:'noun', example:'He gave a good presentation.', viAnswers:['bài thuyết trình','thuyết trình','bài trình bày']},
      {word:'discussion', ipa:'/dɪˈskəʃən/', meaning:'cuộc thảo luận', type:'noun', example:'We had a long discussion.', viAnswers:['cuộc thảo luận','thảo luận','buổi thảo luận']},
      {word:'speaker', ipa:'/ˈspikɝ/', meaning:'diễn giả, người nói', type:'noun', example:'The speaker is very interesting.', viAnswers:['diễn giả','người nói','người phát biểu']},
      {word:'participant', ipa:'/pɑɹˈtɪsəpənt/', meaning:'người tham gia', type:'noun', example:'There are 50 participants.', viAnswers:['người tham gia','thành viên tham gia']},
      {word:'topic', ipa:'/ˈtɑpɪk/', meaning:'chủ đề', type:'noun', example:'What is the topic of the meeting?', viAnswers:['chủ đề','đề tài']},
      {word:'reservation', ipa:'/ˌɹɛzɝˈveɪʃən/', meaning:'đặt chỗ, đặt phòng', type:'noun', example:'I made a reservation for the meeting room.', viAnswers:['đặt chỗ','đặt phòng','sự đặt trước']},
      {word:'invitation', ipa:'/ˌɪnvɪˈteɪʃən/', meaning:'lời mời, thư mời', type:'noun', example:'I received an invitation to the event.', viAnswers:['lời mời','thư mời','giấy mời']},
      {word:'cancel', ipa:'/ˈkænsəɫ/', meaning:'hủy, hủy bỏ', type:'verb', example:'We need to cancel the meeting.', viAnswers:['hủy','hủy bỏ']},
      {word:'postpone', ipa:'/poʊˈspoʊn/, /poʊstˈpoʊn/', meaning:'hoãn, trì hoãn', type:'verb', example:'The meeting was postponed to next week.', viAnswers:['hoãn','trì hoãn','hoãn lại']},
      {word:'arrange', ipa:'/ɝˈeɪndʒ/', meaning:'sắp xếp, thu xếp', type:'verb', example:'She arranged the meeting for Monday.', viAnswers:['sắp xếp','thu xếp','bố trí']},
      {word:'organize', ipa:'/ˈɔɹɡəˌnaɪz/', meaning:'tổ chức, sắp xếp', type:'verb', example:'We organize events every year.', viAnswers:['tổ chức','sắp xếp']},
      {word:'remind', ipa:'/ɹiˈmaɪnd/', meaning:'nhắc nhở', type:'verb', example:'Please remind me about the meeting.', viAnswers:['nhắc nhở','nhắc']},
      {word:'attend', ipa:'/əˈtɛnd/', meaning:'tham dự', type:'verb', example:'Will you attend the conference?', viAnswers:['tham dự','tham gia','dự']},
      {word:'prepare', ipa:'/pɹiˈpɛɹ/', meaning:'chuẩn bị', type:'verb', example:'She is preparing for the presentation.', viAnswers:['chuẩn bị']},
      {word:'register', ipa:'/ˈɹɛdʒɪstɝ/', meaning:'đăng ký', type:'verb', example:'Please register for the workshop online.', viAnswers:['đăng ký']},
      {word:'announce', ipa:'/əˈnaʊns/', meaning:'thông báo, công bố', type:'verb', example:'The director announced the new plan.', viAnswers:['thông báo','công bố']},
      {word:'session', ipa:'/ˈsɛʃən/', meaning:'phiên, buổi', type:'noun', example:'The morning session starts at 9 a.m.', viAnswers:['phiên','buổi']},
      {word:'workshop', ipa:'/ˈwɝkˌʃɑp/', meaning:'hội thảo thực hành', type:'noun', example:'I joined a writing workshop.', viAnswers:['hội thảo thực hành','hội thảo','lớp thực hành']},
      {word:'seminar', ipa:'/ˈsɛməˌnɑɹ/', meaning:'hội thảo chuyên đề', type:'noun', example:'The seminar is about marketing.', viAnswers:['hội thảo','hội thảo chuyên đề']},
      {word:'feedback', ipa:'/ˈfidˌbæk/', meaning:'phản hồi, góp ý', type:'noun', example:'We need your feedback on the project.', viAnswers:['phản hồi','góp ý','ý kiến phản hồi']},
      {word:'audience', ipa:'/ˈɑdiəns/, /ˈɔdiəns/', meaning:'khán giả, người nghe', type:'noun', example:'The audience listened carefully.', viAnswers:['khán giả','người nghe','thính giả']}
    ]
  },

  // ===== DAY 13: Plans/Decisions =====
  {
    day: 13,
    topic: "Kế hoạch / Quyết định",
    topicEn: "Plans / Decisions",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Động từ khuyết thiếu (Modal Verbs: can, must, should, will, may)",
      explanation: "Động từ khuyết thiếu (modal verbs) luôn đi với động từ nguyên thể, không chia theo ngôi.\n\n1. CAN: có thể, biết (khả năng)\n   She can speak English. (Cô ấy biết nói tiếng Anh.)\n   Phủ định: cannot / can't\n\n2. MUST: phải (bắt buộc)\n   You must finish the report today. (Bạn phải hoàn thành báo cáo hôm nay.)\n   Phủ định: must not / mustn't (cấm)\n\n3. SHOULD: nên (lời khuyên)\n   You should study harder. (Bạn nên học chăm hơn.)\n   Phủ định: should not / shouldn't\n\n4. WILL: sẽ (tương lai, quyết định)\n   I will help you. (Tôi sẽ giúp bạn.)\n   Phủ định: will not / won't\n\n5. MAY: có thể (sự cho phép, khả năng)\n   You may leave early today. (Bạn có thể về sớm hôm nay.)\n   Phủ định: may not",
      structure: "S + modal verb + V (nguyên thể)",
      examples: [
        "I can finish this task today. (Tôi có thể hoàn thành việc này hôm nay.)",
        "You must attend the meeting. (Bạn phải tham dự cuộc họp.)",
        "She should check the document again. (Cô ấy nên kiểm tra tài liệu lại.)",
        "We will start the project next month. (Chúng tôi sẽ bắt đầu dự án tháng tới.)",
        "It may rain tomorrow. (Trời có thể mưa ngày mai.)"
      ],
exceptions: [
        "Không chia thêm <b>-s/-es</b> ở ngôi thứ 3 số ít: <i>She can speak English</i>, không dùng <i>She cans</i> ❌.",
        "Sau động từ khuyết thiếu luôn là động từ nguyên mẫu không có <i>to</i> (V-bare). Ngoại lệ duy nhất là cụm từ tương đương: <i>ought to, have to</i>."
      ],
      notes: [
        "Phân biệt phủ định: <i>must not (mustn't)</i> mang nghĩa cấm đoán, còn <i>don't have to</i> mang nghĩa không cần thiết phải làm.",
        "Động từ khuyết thiếu không có dạng V-ing hay V-ed."
      ],
            tips: "Mẹo: Modal verb + V nguyên thể. Không bao giờ thêm -s, -ed, -ing sau modal verb. ❌ She can speaks → ✅ She can speak"
    },
    words: [
      {word:'will', ipa:'/ˈwɪɫ/, /wəɫ/', meaning:'sẽ', type:'modal verb', example:'I will finish the work tomorrow.', viAnswers:['sẽ']},
      {word:'may', ipa:'/ˈmeɪ/', meaning:'có thể, có lẽ', type:'modal verb', example:'It may rain this afternoon.', viAnswers:['có thể','có lẽ']},
      {word:'can', ipa:'/ˈkæn/, /kən/', meaning:'có thể, biết', type:'modal verb', example:'She can speak three languages.', viAnswers:['có thể','biết']},
      {word:'must', ipa:'/ˈməst/', meaning:'phải', type:'modal verb', example:'You must submit the report today.', viAnswers:['phải']},
      {word:'should', ipa:'/ˈʃʊd/', meaning:'nên', type:'modal verb', example:'You should study every day.', viAnswers:['nên']},
      {word:'need', ipa:'/ˈnid/', meaning:'cần', type:'verb', example:'I need your help.', viAnswers:['cần']},
      {word:'want', ipa:'/ˈwɑnt/, /ˈwɔnt/', meaning:'muốn', type:'verb', example:'I want to learn English.', viAnswers:['muốn']},
      {word:'hope', ipa:'/ˈhoʊp/', meaning:'hy vọng', type:'verb', example:'I hope to pass the exam.', viAnswers:['hy vọng','mong']},
      {word:'expect', ipa:'/ɪkˈspɛkt/', meaning:'mong đợi, kỳ vọng', type:'verb', example:'We expect good results.', viAnswers:['mong đợi','kỳ vọng','trông đợi']},
      {word:'decide', ipa:'/ˌdɪˈsaɪd/', meaning:'quyết định', type:'verb', example:'She decided to change jobs.', viAnswers:['quyết định']},
      {word:'promise', ipa:'/ˈpɹɑməs/', meaning:'hứa', type:'verb / noun', example:'I promise to finish on time.', viAnswers:['hứa','lời hứa']},
      {word:'offer', ipa:'/ˈɔfɝ/', meaning:'đề nghị, mời', type:'verb / noun', example:'He offered to help us.', viAnswers:['đề nghị','mời','cung cấp']},
      {word:'ask', ipa:'/ˈæsk/', meaning:'hỏi, yêu cầu', type:'verb', example:'Can I ask a question?', viAnswers:['hỏi','yêu cầu']},
      {word:'answer', ipa:'/ˈænsɝ/', meaning:'trả lời, câu trả lời', type:'verb / noun', example:'Please answer my question.', viAnswers:['trả lời','câu trả lời','đáp']},
      {word:'help', ipa:'/ˈhɛɫp/', meaning:'giúp đỡ, sự giúp đỡ', type:'verb / noun', example:'Can you help me?', viAnswers:['giúp đỡ','giúp','sự giúp đỡ']},
      {word:'support', ipa:'/səˈpɔɹt/', meaning:'hỗ trợ, ủng hộ', type:'verb / noun', example:'The team supports each other.', viAnswers:['hỗ trợ','ủng hộ']},
      {word:'solve', ipa:'/ˈsɑɫv/', meaning:'giải quyết', type:'verb', example:'We need to solve this problem.', viAnswers:['giải quyết']},
      {word:'continue', ipa:'/kənˈtɪnju/', meaning:'tiếp tục', type:'verb', example:'Please continue with the meeting.', viAnswers:['tiếp tục']},
      {word:'stop', ipa:'/ˈstɑp/', meaning:'dừng, ngừng', type:'verb', example:'Stop talking, please.', viAnswers:['dừng','ngừng','dừng lại']},
      {word:'try', ipa:'/ˈtɹaɪ/', meaning:'cố gắng, thử', type:'verb', example:'Try to finish before 5 p.m.', viAnswers:['cố gắng','thử']},
      {word:'learn', ipa:'/ˈɫɝn/', meaning:'học, học hỏi', type:'verb', example:'I want to learn new skills.', viAnswers:['học','học hỏi']},
      {word:'pass', ipa:'/ˈpæs/', meaning:'vượt qua, đậu', type:'verb', example:'She passed the exam.', viAnswers:['vượt qua','đậu','đỗ','qua']},
      {word:'fail', ipa:'/ˈfeɪɫ/', meaning:'thất bại, trượt', type:'verb', example:'He failed the driving test.', viAnswers:['thất bại','trượt','rớt']},
      {word:'graduate', ipa:'/ˈɡɹædʒəˌweɪt/, /ˈɡɹædʒəwət/, /ˈɡɹædʒuˌeɪt/, /ˈɡɹædʒuwət/', meaning:'tốt nghiệp', type:'verb', example:'She graduated from university last year.', viAnswers:['tốt nghiệp']},
      {word:'achieve', ipa:'/əˈtʃiv/', meaning:'đạt được', type:'verb', example:'We achieved our goal.', viAnswers:['đạt được','đạt']}
    ]
  },

  // ===== DAY 14: REVIEW days 8-13 =====
  {
    day: 14,
    topic: "Ôn tập ngày 8-13",
    topicEn: "Review Day 8-13",
    phase: 1,
    isReview: true,
    reviewDays: [8, 9, 10, 11, 12, 13],
    grammar: {
      title: "Ôn tập ngữ pháp",
      explanation: "Ôn lại tất cả ngữ pháp đã học từ ngày 8 đến ngày 13:\n\n1. Ngày 8: Hiện tại tiếp diễn (S + am/is/are + V-ing)\n2. Ngày 9: Quá khứ đơn - khẳng định (V-ed / V2 bất quy tắc)\n3. Ngày 10: Quá khứ đơn - phủ định (didn't + V) và câu hỏi (Did + S + V?)\n4. Ngày 11: Vị trí trạng từ trong câu\n5. Ngày 12: Tương lai gần (be going to + V)\n6. Ngày 13: Động từ khuyết thiếu (can, must, should, will, may)\n\nSo sánh các thì đã học:\n- Hiện tại đơn: thói quen, sự thật → I work every day.\n- Hiện tại tiếp diễn: đang xảy ra → I am working now.\n- Quá khứ đơn: đã xảy ra → I worked yesterday.\n- Tương lai (be going to): dự định → I am going to work tomorrow.\n\nHãy ôn lại từng phần, làm bài tập và ghi lại những lỗi sai thường gặp.",
      structure: "",
      examples: [],
      tips: "Làm bài tập, chữa lỗi, ghi lại lỗi sai. Ôn lại 150 từ vựng đã học từ ngày 8-13 (25 từ x 6 ngày)."
    },
    words: []
  },

  // ===== DAY 15: TOEIC Part 1 Descriptions =====
  {
    day: 15,
    topic: "Mô tả hành động (TOEIC Part 1)",
    topicEn: "TOEIC Part 1 Descriptions",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Giới từ nơi chốn (in, on, at, under, next to, between)",
      explanation: "Giới từ nơi chốn dùng để chỉ vị trí của người hoặc vật.\n\n1. IN: bên trong (không gian kín)\n   - in the room (trong phòng)\n   - in the box (trong hộp)\n   - in the building (trong tòa nhà)\n\n2. ON: trên bề mặt\n   - on the table (trên bàn)\n   - on the wall (trên tường)\n   - on the floor (trên sàn)\n\n3. AT: tại một điểm cụ thể\n   - at the entrance (tại lối vào)\n   - at the desk (tại bàn làm việc)\n   - at the station (tại nhà ga)\n\n4. UNDER: bên dưới\n   - under the table (dưới bàn)\n\n5. NEXT TO / BESIDE: bên cạnh\n   - next to the door (bên cạnh cửa)\n\n6. BETWEEN: ở giữa (hai vật)\n   - between two chairs (giữa hai ghế)\n\nTrong TOEIC Part 1, bạn sẽ nghe mô tả vị trí người/vật trong ảnh.",
      structure: "S + be + giới từ + N (vị trí)",
      examples: [
        "The man is standing at the entrance. (Người đàn ông đang đứng tại lối vào.)",
        "The books are on the shelf. (Những cuốn sách ở trên kệ.)",
        "She is sitting next to her colleague. (Cô ấy đang ngồi bên cạnh đồng nghiệp.)",
        "The car is between two trucks. (Chiếc xe ở giữa hai xe tải.)"
      ],
exceptions: [
        "Dùng <i>in</i> với các phương tiện nhỏ, cá nhân: <i>in a car, in a taxi</i>. Dùng <i>on</i> với các phương tiện giao thông công cộng lớn (có thể đứng lên đi lại được): <i>on a bus, on a train, on a plane, on a ship</i>."
      ],
      notes: [
        "Quy tắc chung về độ lớn không gian: <b>at</b> (điểm cụ thể) -> <b>on</b> (bề mặt, đường phố) -> <b>in</b> (không gian khép kín, thành phố, quốc gia)."
      ],
            tips: "Mẹo cho TOEIC Part 1: Khi nghe mô tả ảnh, chú ý giới từ vì nó giúp xác định vị trí chính xác. Luyện tập mô tả đồ vật quanh bạn bằng giới từ."
    },
    words: [
      {word:'stand', ipa:'/ˈstænd/', meaning:'đứng', type:'verb', example:'A man is standing near the door.', viAnswers:['đứng']},
      {word:'sit', ipa:'/ˈsɪt/', meaning:'ngồi', type:'verb', example:'She is sitting on a chair.', viAnswers:['ngồi']},
      {word:'hold', ipa:'/ˈhoʊɫd/', meaning:'cầm, giữ', type:'verb', example:'He is holding a cup of coffee.', viAnswers:['cầm','giữ','nắm']},
      {word:'carry', ipa:'/ˈkæɹi/, /ˈkɛɹi/', meaning:'mang, xách', type:'verb', example:'She is carrying a box.', viAnswers:['mang','xách','vác','bê']},
      {word:'wear', ipa:'/ˈwɛɹ/', meaning:'mặc, đeo', type:'verb', example:'He is wearing a suit.', viAnswers:['mặc','đeo','mang']},
      {word:'point', ipa:'/ˈpɔɪnt/', meaning:'chỉ, trỏ', type:'verb', example:'She is pointing at the screen.', viAnswers:['chỉ','trỏ']},
      {word:'lean', ipa:'/ˈɫin/', meaning:'tựa, nghiêng', type:'verb', example:'He is leaning against the wall.', viAnswers:['tựa','nghiêng','dựa']},
      {word:'pour', ipa:'/ˈpɔɹ/', meaning:'rót, đổ', type:'verb', example:'She is pouring water into a glass.', viAnswers:['rót','đổ']},
      {word:'hang', ipa:'/ˈhæŋ/', meaning:'treo', type:'verb', example:'A picture is hanging on the wall.', viAnswers:['treo']},
      {word:'stack', ipa:'/ˈstæk/', meaning:'xếp chồng', type:'verb', example:'The boxes are stacked in the corner.', viAnswers:['xếp chồng','chồng','chất đống']},
      {word:'load', ipa:'/ˈɫoʊd/', meaning:'chất hàng, tải', type:'verb', example:'They are loading boxes onto the truck.', viAnswers:['chất hàng','tải','bốc hàng']},
      {word:'unload', ipa:'/ənˈɫoʊd/', meaning:'dỡ hàng', type:'verb', example:'Workers are unloading the truck.', viAnswers:['dỡ hàng','bốc dỡ']},
      {word:'display', ipa:'/dɪsˈpɫeɪ/', meaning:'trưng bày', type:'verb / noun', example:'Products are displayed in the window.', viAnswers:['trưng bày','trình bày','hiển thị']},
      {word:'arrange', ipa:'/ɝˈeɪndʒ/', meaning:'sắp xếp', type:'verb', example:'She is arranging flowers on the table.', viAnswers:['sắp xếp','bố trí']},
      {word:'repair', ipa:'/ɹɪˈpɛɹ/', meaning:'sửa chữa', type:'verb', example:'A man is repairing the machine.', viAnswers:['sửa chữa','sửa']},
      {word:'examine', ipa:'/ɪɡˈzæmɪn/', meaning:'kiểm tra, xem xét', type:'verb', example:'The doctor is examining the patient.', viAnswers:['kiểm tra','xem xét','khám']},
      {word:'measure', ipa:'/ˈmɛʒɝ/', meaning:'đo, đo lường', type:'verb', example:'He is measuring the length of the table.', viAnswers:['đo','đo lường']},
      {word:'cross', ipa:'/ˈkɹɔs/', meaning:'băng qua', type:'verb', example:'People are crossing the street.', viAnswers:['băng qua','đi qua','qua']},
      {word:'climb', ipa:'/ˈkɫaɪm/', meaning:'leo, trèo', type:'verb', example:'He is climbing the stairs.', viAnswers:['leo','trèo']},
      {word:'face', ipa:'/ˈfeɪs/', meaning:'đối diện, hướng về', type:'verb', example:'She is facing the window.', viAnswers:['đối diện','hướng về','quay mặt về']},
      {word:'reach', ipa:'/ˈɹitʃ/', meaning:'với tay, đạt tới', type:'verb', example:'He is reaching for a book on the shelf.', viAnswers:['với tay','đạt tới','vươn tới']},
      {word:'gather', ipa:'/ˈɡæðɝ/', meaning:'tụ họp, thu thập', type:'verb', example:'People are gathering in the hall.', viAnswers:['tụ họp','thu thập','tập trung']},
      {word:'sweep', ipa:'/ˈswip/', meaning:'quét', type:'verb', example:'A man is sweeping the floor.', viAnswers:['quét']},
      {word:'plant', ipa:'/ˈpɫænt/', meaning:'trồng, cây', type:'verb / noun', example:'She is planting flowers in the garden.', viAnswers:['trồng','cây']},
      {word:'fold', ipa:'/ˈfoʊɫd/', meaning:'gấp, gập', type:'verb', example:'She is folding the towels.', viAnswers:['gấp','gập','xếp']}
    ]
  },

  // ===== DAY 16: TOEIC Part 2 Questions =====
  {
    day: 16,
    topic: "Từ hỏi (TOEIC Part 2)",
    topicEn: "TOEIC Part 2 Questions",
    phase: 1,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Câu hỏi Wh- (Where, When, Why, How, Who, What, Which)",
      explanation: "Câu hỏi Wh- dùng để hỏi thông tin cụ thể, không thể trả lời Yes/No.\n\n1. WHO: Ai? → hỏi về người\n   Who is your manager? (Ai là quản lý của bạn?)\n\n2. WHAT: Gì? Cái gì? → hỏi về vật, hành động\n   What do you do? (Bạn làm gì?)\n\n3. WHERE: Ở đâu? → hỏi về nơi chốn\n   Where is the meeting room? (Phòng họp ở đâu?)\n\n4. WHEN: Khi nào? → hỏi về thời gian\n   When does the meeting start? (Cuộc họp bắt đầu khi nào?)\n\n5. WHY: Tại sao? → hỏi lý do\n   Why are you late? (Tại sao bạn trễ?)\n   Trả lời: Because... (Vì...)\n\n6. HOW: Như thế nào? Bằng cách nào? → hỏi cách thức\n   How do you go to work? (Bạn đi làm bằng cách nào?)\n   How much / How many: bao nhiêu?\n\n7. WHICH: Cái nào? → hỏi về sự lựa chọn\n   Which color do you like? (Bạn thích màu nào?)\n\nTrong TOEIC Part 2: Nghe câu hỏi Wh-, chọn câu trả lời phù hợp.",
      structure: "Wh- + do/does/did/be/modal + S + V?",
      examples: [
        "Who called this morning? (Ai đã gọi sáng nay?)",
        "What time does the store close? (Cửa hàng đóng cửa lúc mấy giờ?)",
        "Where can I find the meeting room? (Tôi có thể tìm phòng họp ở đâu?)",
        "Why was the meeting cancelled? (Tại sao cuộc họp bị hủy?)",
        "How many people attended? (Bao nhiêu người đã tham dự?)"
      ],
exceptions: [
        "Khi Wh- đóng vai trò là chủ ngữ của câu, ta không mượn trợ động từ <i>do/does/did</i> mà chia động từ trực tiếp theo thì. Ví dụ: <i>What happened?</i> (Chuyện gì đã xảy ra?), không dùng <i>What did happen?</i>."
      ],
      notes: [
        "Chú ý cách dùng từ hỏi phức hợp với <b>How</b>: <i>How long</i> (bao lâu), <i>How far</i> (bao xa), <i>How often</i> (tần suất), <i>How many</i> (bao nhiêu + danh từ số nhiều), <i>How much</i> (bao nhiêu + danh từ không đếm được / hỏi giá tiền)."
      ],
            tips: "Mẹo cho TOEIC Part 2: Nghe kỹ từ đầu tiên của câu hỏi (Who, What, Where...) vì nó quyết định loại thông tin cần trả lời. Who → người, Where → nơi chốn, When → thời gian."
    },
    words: [
      {word:'who', ipa:'/ˈhu/', meaning:'ai', type:'pronoun', example:'Who is in charge of this project?', viAnswers:['ai']},
      {word:'what', ipa:'/ˈhwət/, /ˈwət/', meaning:'gì, cái gì', type:'pronoun', example:'What is your job title?', viAnswers:['gì','cái gì']},
      {word:'when', ipa:'/ˈhwɛn/, /ˈhwɪn/, /ˈwɛn/, /ˈwɪn/', meaning:'khi nào', type:'adverb', example:'When does the meeting start?', viAnswers:['khi nào','bao giờ']},
      {word:'where', ipa:'/ˈhwɛɹ/, /ˈwɛɹ/', meaning:'ở đâu', type:'adverb', example:'Where is the nearest bank?', viAnswers:['ở đâu','đâu']},
      {word:'why', ipa:'/ˈhwaɪ/, /ˈwaɪ/', meaning:'tại sao', type:'adverb', example:'Why are you late?', viAnswers:['tại sao','vì sao']},
      {word:'how', ipa:'/ˈhaʊ/', meaning:'như thế nào, bằng cách nào', type:'adverb', example:'How do you go to work?', viAnswers:['như thế nào','bằng cách nào','thế nào']},
      {word:'which', ipa:'/ˈhwɪtʃ/, /ˈwɪtʃ/', meaning:'cái nào, mà', type:'pronoun / adjective', example:'Which option do you prefer?', viAnswers:['cái nào','mà','nào']},
      {word:'whose', ipa:'/ˈhuz/', meaning:'của ai', type:'pronoun', example:'Whose bag is this?', viAnswers:['của ai']},
      {word:'whom', ipa:'/ˈhum/', meaning:'ai (tân ngữ)', type:'pronoun', example:'To whom did you send the email?', viAnswers:['ai']},
      {word:'whether', ipa:'/ˈhwɛðɝ/, /ˈwɛðɝ/', meaning:'liệu, có...không', type:'conjunction', example:'I do not know whether he will come.', viAnswers:['liệu','có...không','liệu có']},
      {word:'either', ipa:'/ˈaɪðɝ/, /ˈiðɝ/', meaning:'hoặc, một trong hai', type:'pronoun / adverb', example:'You can choose either option.', viAnswers:['hoặc','một trong hai','cũng']},
      {word:'neither', ipa:'/ˈnaɪðɝ/, /ˈniðɝ/', meaning:'không...cũng không', type:'pronoun / adverb', example:'Neither answer is correct.', viAnswers:['không...cũng không','không cái nào']},
      {word:'both', ipa:'/ˈboʊθ/', meaning:'cả hai', type:'pronoun', example:'Both options are good.', viAnswers:['cả hai']},
      {word:'each', ipa:'/ˈitʃ/', meaning:'mỗi', type:'pronoun / adjective', example:'Each employee has an ID card.', viAnswers:['mỗi','mỗi một']},
      {word:'every', ipa:'/ˈɛvɝi/, /ˈɛvɹi/', meaning:'mọi, mỗi', type:'adjective', example:'Every student must take the exam.', viAnswers:['mọi','mỗi']},
      {word:'another', ipa:'/əˈnəðɝ/', meaning:'một cái khác, khác', type:'pronoun / adjective', example:'Can I have another copy?', viAnswers:['một cái khác','khác','cái khác']},
      {word:'other', ipa:'/ˈəðɝ/', meaning:'khác, cái khác', type:'adjective / pronoun', example:'The other room is bigger.', viAnswers:['khác','cái khác','khác nữa']},
      {word:'such', ipa:'/ˈsətʃ/', meaning:'như vậy, như thế', type:'adjective', example:'Such problems are common.', viAnswers:['như vậy','như thế']},
      {word:'certain', ipa:'/ˈsɝtən/', meaning:'chắc chắn, nhất định', type:'adjective', example:'I am certain about this answer.', viAnswers:['chắc chắn','nhất định']},
      {word:'several', ipa:'/ˈsɛvɝəɫ/, /ˈsɛvɹəɫ/', meaning:'một vài, nhiều', type:'adjective', example:'Several employees are absent today.', viAnswers:['một vài','nhiều','vài']},
      {word:'few', ipa:'/ˈfju/', meaning:'ít, vài', type:'adjective', example:'There are few chairs in the room.', viAnswers:['ít','vài','một vài']},
      {word:'many', ipa:'/ˈmɛni/', meaning:'nhiều', type:'adjective', example:'Many people attended the meeting.', viAnswers:['nhiều']},
      {word:'much', ipa:'/ˈmətʃ/', meaning:'nhiều (không đếm được)', type:'adjective', example:'How much time do we have?', viAnswers:['nhiều']},
      {word:'most', ipa:'/ˈmoʊs/, /ˈmoʊst/', meaning:'hầu hết, nhất', type:'adjective / adverb', example:'Most employees work from 9 to 5.', viAnswers:['hầu hết','nhất','phần lớn']},
      {word:'enough', ipa:'/iˈnəf/, /ɪˈnəf/', meaning:'đủ', type:'adjective / adverb', example:'We have enough time.', viAnswers:['đủ']}
    ]
  },

  // ===== DAY 17: REVIEW all Phase 1 =====
  {
    day: 17,
    topic: "Ôn tập toàn bộ Giai đoạn 1",
    topicEn: "Review All Phase 1",
    phase: 1,
    isReview: true,
    reviewDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    grammar: {
      title: "Ôn tập toàn bộ ngữ pháp Giai đoạn 1",
      explanation: "Ôn lại tất cả ngữ pháp đã học trong Giai đoạn 1 (ngày 1-16):\n\n📌 CÂU CƠ BẢN:\n1. Câu đơn: S + V / S + V + O\n\n📌 CÁC THÌ:\n2. Hiện tại đơn: S + V(s/es) — thói quen, sự thật\n3. Phủ định hiện tại đơn: S + don't/doesn't + V\n4. Câu hỏi hiện tại đơn: Do/Does + S + V?\n5. Hiện tại tiếp diễn: S + am/is/are + V-ing — đang xảy ra\n6. Quá khứ đơn: S + V-ed / V2 — đã xảy ra\n7. Quá khứ đơn phủ định/câu hỏi: S + didn't + V / Did + S + V?\n8. Tương lai gần: S + am/is/are + going to + V — dự định\n\n📌 TỪ LOẠI & VỊ TRÍ:\n9. Danh từ số ít/số nhiều: -s, -es, -ies\n10. Tính từ: trước danh từ hoặc sau to be\n11. Vị trí trạng từ trong câu\n\n📌 KHÁC:\n12. Động từ khuyết thiếu: can, must, should, will, may\n13. Giới từ nơi chốn: in, on, at, under, next to, between\n14. Câu hỏi Wh-: Who, What, Where, When, Why, How, Which",
      structure: "",
      examples: [],
      tips: "Đây là bài ôn tổng quan. Hãy:\n1. Ôn lại toàn bộ 300 từ vựng đã học (25 từ x 12 ngày học)\n2. Làm bài tập ngữ pháp từng chủ đề\n3. Ghi lại các lỗi sai thường gặp\n4. Thực hành đặt câu với từ vựng và ngữ pháp đã học"
    },
    words: []
  },

  // ===== DAY 18: Health/Body + Tenses review =====
  {
    day: 18,
    topic: "Sức khỏe / Cơ thể",
    topicEn: "Health / Body",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Ôn tập các thì + Từ vựng sức khỏe",
      explanation: "Ôn tập cách sử dụng các thì đã học với chủ đề sức khỏe:\n\n1. Hiện tại đơn — thói quen sức khỏe:\n   I exercise every morning. (Tôi tập thể dục mỗi sáng.)\n   She takes medicine daily. (Cô ấy uống thuốc hàng ngày.)\n\n2. Hiện tại tiếp diễn — tình trạng hiện tại:\n   He is resting at home. (Anh ấy đang nghỉ ngơi ở nhà.)\n   The doctor is examining the patient. (Bác sĩ đang khám bệnh nhân.)\n\n3. Quá khứ đơn — sự kiện sức khỏe trong quá khứ:\n   I went to the hospital yesterday. (Tôi đã đi bệnh viện hôm qua.)\n   She felt sick last week. (Cô ấy bị ốm tuần trước.)\n\n4. Tương lai (be going to) — kế hoạch sức khỏe:\n   I am going to see the doctor tomorrow. (Tôi sẽ đi khám bác sĩ ngày mai.)\n\nLưu ý: Thì hiện tại đơn thường dùng cho thói quen sức khỏe; quá khứ đơn cho mô tả triệu chứng đã xảy ra.",
      structure: "Ôn tập: S + V(s/es) | S + am/is/are + V-ing | S + V-ed/V2 | S + be going to + V",
      examples: [
        "I exercise every day. (Tôi tập thể dục mỗi ngày.) — Hiện tại đơn",
        "She is sleeping now because she is sick. (Cô ấy đang ngủ vì cô ấy bị ốm.) — Hiện tại tiếp diễn",
        "He went to the doctor last Friday. (Anh ấy đã đi khám bác sĩ thứ Sáu tuần trước.) — Quá khứ đơn",
        "I am going to start a new diet next week. (Tôi sẽ bắt đầu chế độ ăn mới tuần tới.) — Tương lai gần"
      ],
      tips: "Mẹo: Khi nói về sức khỏe, dùng hiện tại đơn cho thói quen (I exercise daily), quá khứ đơn cho triệu chứng đã xảy ra (I had a headache), và tương lai cho kế hoạch khám bệnh (I'm going to see the doctor)."
    },
    words: [
      {word:'health', ipa:'/ˈhɛɫθ/', meaning:'sức khỏe', type:'noun', example:'Good health is very important.', viAnswers:['sức khỏe']},
      {word:'body', ipa:'/ˈbɑdi/', meaning:'cơ thể, thân thể', type:'noun', example:'Exercise is good for your body.', viAnswers:['cơ thể','thân thể']},
      {word:'head', ipa:'/ˈhɛd/', meaning:'đầu', type:'noun', example:'I have a headache. My head hurts.', viAnswers:['đầu','cái đầu']},
      {word:'hand', ipa:'/ˈhænd/', meaning:'bàn tay, tay', type:'noun', example:'Please wash your hands.', viAnswers:['bàn tay','tay']},
      {word:'eye', ipa:'/ˈaɪ/', meaning:'mắt', type:'noun', example:'My eyes are tired from the screen.', viAnswers:['mắt']},
      {word:'doctor', ipa:'/ˈdɑktɝ/, /ˈdɔktɝ/', meaning:'bác sĩ', type:'noun', example:'I went to the doctor yesterday.', viAnswers:['bác sĩ']},
      {word:'nurse', ipa:'/ˈnɝs/', meaning:'y tá', type:'noun', example:'The nurse checks the patient.', viAnswers:['y tá']},
      {word:'medicine', ipa:'/ˈmɛdəsən/', meaning:'thuốc', type:'noun', example:'Take this medicine three times a day.', viAnswers:['thuốc']},
      {word:'hospital', ipa:'/ˈhɑˌspɪtəɫ/', meaning:'bệnh viện', type:'noun', example:'She works at the hospital.', viAnswers:['bệnh viện']},
      {word:'sick', ipa:'/ˈsɪk/', meaning:'ốm, bệnh', type:'adjective', example:'He is sick today and cannot come to work.', viAnswers:['ốm','bệnh','bị bệnh','bị ốm']},
      {word:'pain', ipa:'/ˈpeɪn/', meaning:'đau, sự đau đớn', type:'noun', example:'I feel pain in my back.', viAnswers:['đau','sự đau đớn','cơn đau']},
      {word:'exercise', ipa:'/ˈɛksɝˌsaɪz/', meaning:'tập thể dục, bài tập', type:'noun / verb', example:'I exercise every morning.', viAnswers:['tập thể dục','bài tập','luyện tập']},
      {word:'weight', ipa:'/ˈweɪt/', meaning:'cân nặng, trọng lượng', type:'noun', example:'She wants to lose weight.', viAnswers:['cân nặng','trọng lượng']},
      {word:'heart', ipa:'/ˈhɑɹt/', meaning:'tim, trái tim', type:'noun', example:'Exercise is good for the heart.', viAnswers:['tim','trái tim']},
      {word:'blood', ipa:'/ˈbɫəd/', meaning:'máu', type:'noun', example:'The doctor checked her blood pressure.', viAnswers:['máu']},
      {word:'temperature', ipa:'/ˈtɛmpɝətʃɝ/, /ˈtɛmpɹətʃɝ/', meaning:'nhiệt độ', type:'noun', example:'The nurse takes the patient temperature.', viAnswers:['nhiệt độ']},
      {word:'diet', ipa:'/ˈdaɪət/', meaning:'chế độ ăn', type:'noun', example:'A healthy diet is important.', viAnswers:['chế độ ăn','chế độ ăn uống']},
      {word:'sleep', ipa:'/ˈsɫip/', meaning:'ngủ, giấc ngủ', type:'verb / noun', example:'I sleep eight hours every night.', viAnswers:['ngủ','giấc ngủ']},
      {word:'rest', ipa:'/ˈɹɛst/', meaning:'nghỉ ngơi', type:'verb / noun', example:'You need to rest when you are sick.', viAnswers:['nghỉ ngơi','nghỉ']},
      {word:'recover', ipa:'/ɹɪˈkəvɝ/', meaning:'hồi phục, bình phục', type:'verb', example:'She is recovering from surgery.', viAnswers:['hồi phục','bình phục','phục hồi']},
      {word:'breathe', ipa:'/ˈbɹið/', meaning:'thở', type:'verb', example:'Breathe slowly and deeply.', viAnswers:['thở','hít thở']},
      {word:'examine', ipa:'/ɪɡˈzæmɪn/', meaning:'khám, kiểm tra', type:'verb', example:'The doctor examined the patient.', viAnswers:['khám','kiểm tra','xem xét']},
      {word:'treat', ipa:'/ˈtɹit/', meaning:'điều trị, chữa trị', type:'verb', example:'The doctor treated her illness.', viAnswers:['điều trị','chữa trị','chữa']},
      {word:'prevent', ipa:'/pɹiˈvɛnt/, /pɹɪˈvɛnt/', meaning:'ngăn ngừa, phòng ngừa', type:'verb', example:'Washing hands helps prevent illness.', viAnswers:['ngăn ngừa','phòng ngừa','ngăn chặn']},
      {word:'symptom', ipa:'/ˈsɪmptəm/', meaning:'triệu chứng', type:'noun', example:'What are your symptoms?', viAnswers:['triệu chứng']}
    ]
  },

  // ===== DAY 19: Education + Tenses =====
  {
    day: 19,
    topic: "Giáo dục",
    topicEn: "Education",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Ôn tập các thì + Từ vựng giáo dục",
      explanation: "Tiếp tục ôn tập các thì đã học, áp dụng vào chủ đề giáo dục:\n\n1. Hiện tại đơn — lịch học, thói quen:\n   I study English every day. (Tôi học tiếng Anh mỗi ngày.)\n   Classes start at 8 a.m. (Các lớp bắt đầu lúc 8 giờ sáng.)\n\n2. Hiện tại tiếp diễn — đang học:\n   She is studying for the exam. (Cô ấy đang học cho kỳ thi.)\n   They are taking a course. (Họ đang tham gia một khóa học.)\n\n3. Quá khứ đơn — kinh nghiệm học tập:\n   I graduated from university in 2020. (Tôi tốt nghiệp đại học năm 2020.)\n   She studied abroad last year. (Cô ấy du học năm ngoái.)\n\n4. Tương lai (be going to) — kế hoạch học tập:\n   I am going to enroll in a new course. (Tôi sẽ đăng ký một khóa học mới.)\n\nThì hiện tại hoàn thành (giới thiệu sơ lược):\n   S + have/has + V3 (past participle)\n   I have studied English for 5 years. (Tôi đã học tiếng Anh được 5 năm.)\n   Dùng 'for' (khoảng thời gian) và 'since' (thời điểm bắt đầu).",
      structure: "Ôn: S + V(s/es) | S + am/is/are + V-ing | S + V-ed/V2 | S + be going to + V\nMới: S + have/has + V3",
      examples: [
        "He studies at the library every evening. (Anh ấy học ở thư viện mỗi tối.) — Hiện tại đơn",
        "She is preparing for the exam right now. (Cô ấy đang chuẩn bị cho kỳ thi.) — Hiện tại tiếp diễn",
        "They enrolled in the course last month. (Họ đã đăng ký khóa học tháng trước.) — Quá khứ đơn",
        "I have studied English since 2019. (Tôi đã học tiếng Anh từ năm 2019.) — Hiện tại hoàn thành"
      ],
      tips: "Mẹo: Phân biệt 'study' (tự học) và 'learn' (học được kiến thức). I study every night. (Tôi học mỗi tối.) I learned a lot from this course. (Tôi đã học được nhiều từ khóa này.)"
    },
    words: [
      {word:'school', ipa:'/ˈskuɫ/', meaning:'trường học', type:'noun', example:'My school is near my house.', viAnswers:['trường học','trường']},
      {word:'class', ipa:'/ˈkɫæs/', meaning:'lớp học, lớp', type:'noun', example:'English class starts at 9 a.m.', viAnswers:['lớp học','lớp']},
      {word:'course', ipa:'/ˈkɔɹs/', meaning:'khóa học', type:'noun', example:'I am taking an English course.', viAnswers:['khóa học']},
      {word:'degree', ipa:'/dɪˈɡɹi/', meaning:'bằng cấp', type:'noun', example:'She has a degree in business.', viAnswers:['bằng cấp','bằng']},
      {word:'grade', ipa:'/ˈɡɹeɪd/', meaning:'điểm, lớp (cấp)', type:'noun', example:'He got a good grade on the test.', viAnswers:['điểm','lớp','cấp']},
      {word:'exam', ipa:'/ɪɡˈzæm/', meaning:'kỳ thi, bài thi', type:'noun', example:'The final exam is next week.', viAnswers:['kỳ thi','bài thi','bài kiểm tra']},
      {word:'score', ipa:'/ˈskɔɹ/', meaning:'điểm số', type:'noun / verb', example:'She scored 800 on the TOEIC test.', viAnswers:['điểm số','điểm','ghi điểm']},
      {word:'study', ipa:'/ˈstədi/', meaning:'học, nghiên cứu', type:'verb', example:'I study English every day.', viAnswers:['học','nghiên cứu']},
      {word:'teach', ipa:'/ˈtitʃ/', meaning:'dạy, giảng dạy', type:'verb', example:'She teaches math at the university.', viAnswers:['dạy','giảng dạy']},
      {word:'learn', ipa:'/ˈɫɝn/', meaning:'học, học hỏi', type:'verb', example:'I want to learn a new language.', viAnswers:['học','học hỏi']},
      {word:'lecture', ipa:'/ˈɫɛktʃɝ/', meaning:'bài giảng', type:'noun', example:'The lecture was very interesting.', viAnswers:['bài giảng','bài thuyết trình']},
      {word:'assignment', ipa:'/əˈsaɪnmənt/', meaning:'bài tập', type:'noun', example:'The assignment is due on Friday.', viAnswers:['bài tập','nhiệm vụ']},
      {word:'research', ipa:'/ˈɹisɝtʃ/, /ɹiˈsɝtʃ/', meaning:'nghiên cứu', type:'noun / verb', example:'She does research on climate change.', viAnswers:['nghiên cứu']},
      {word:'library', ipa:'/ˈɫaɪbɹɛˌɹi/', meaning:'thư viện', type:'noun', example:'I study at the library.', viAnswers:['thư viện']},
      {word:'textbook', ipa:'/ˈtɛkstˌbʊk/', meaning:'sách giáo khoa', type:'noun', example:'Open your textbook to page 50.', viAnswers:['sách giáo khoa']},
      {word:'knowledge', ipa:'/ˈnɑɫədʒ/, /ˈnɑɫɪdʒ/', meaning:'kiến thức', type:'noun', example:'Knowledge is power.', viAnswers:['kiến thức','tri thức']},
      {word:'skill', ipa:'/ˈskɪɫ/', meaning:'kỹ năng', type:'noun', example:'Communication is an important skill.', viAnswers:['kỹ năng']},
      {word:'practice', ipa:'/ˈpɹæktəs/, /ˈpɹæktɪs/', meaning:'thực hành, luyện tập', type:'noun / verb', example:'Practice makes perfect.', viAnswers:['thực hành','luyện tập']},
      {word:'certificate', ipa:'/sɝˈtɪfɪkət/', meaning:'chứng chỉ, giấy chứng nhận', type:'noun', example:'She received a certificate after the course.', viAnswers:['chứng chỉ','giấy chứng nhận']},
      {word:'scholarship', ipa:'/ˈskɑɫɝˌʃɪp/', meaning:'học bổng', type:'noun', example:'He won a scholarship to study abroad.', viAnswers:['học bổng']},
      {word:'enroll', ipa:'/ɛnˈɹoʊɫ/, /ɪnˈɹoʊɫ/', meaning:'đăng ký (nhập học)', type:'verb', example:'I enrolled in a new course.', viAnswers:['đăng ký','đăng ký nhập học','ghi danh']},
      {word:'graduate', ipa:'/ˈɡɹædʒəˌweɪt/, /ˈɡɹædʒəwət/, /ˈɡɹædʒuˌeɪt/, /ˈɡɹædʒuwət/', meaning:'tốt nghiệp', type:'verb', example:'She graduated from university in 2022.', viAnswers:['tốt nghiệp']},
      {word:'tutor', ipa:'/ˈtutɝ/', meaning:'gia sư', type:'noun', example:'My tutor helps me with math.', viAnswers:['gia sư']},
      {word:'lesson', ipa:'/ˈɫɛsən/', meaning:'bài học', type:'noun', example:'Today lesson is about grammar.', viAnswers:['bài học']},
      {word:'curriculum', ipa:'/kɝˈɪkjəɫəm/', meaning:'chương trình học', type:'noun', example:'The school updated its curriculum.', viAnswers:['chương trình học','chương trình giảng dạy','giáo trình']}
    ]
  },

  // ===== DAY 20: Technology + Tenses =====
  {
    day: 20,
    topic: "Công nghệ",
    topicEn: "Technology",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Ôn tập các thì + Từ vựng công nghệ",
      explanation: "Tiếp tục ôn tập các thì, áp dụng vào chủ đề công nghệ:\n\n1. Hiện tại đơn — thói quen sử dụng công nghệ:\n   I use a computer every day. (Tôi dùng máy tính mỗi ngày.)\n   The software updates automatically. (Phần mềm tự động cập nhật.)\n\n2. Hiện tại tiếp diễn — hành động công nghệ đang xảy ra:\n   The system is downloading an update. (Hệ thống đang tải bản cập nhật.)\n   He is fixing the network error. (Anh ấy đang sửa lỗi mạng.)\n\n3. Quá khứ đơn — sự kiện công nghệ trong quá khứ:\n   I installed the software yesterday. (Tôi đã cài phần mềm hôm qua.)\n   The server crashed last night. (Máy chủ đã sập tối qua.)\n\n4. Tương lai (be going to / will) — kế hoạch công nghệ:\n   We are going to upgrade the system. (Chúng tôi sẽ nâng cấp hệ thống.)\n   The company will buy new computers. (Công ty sẽ mua máy tính mới.)\n\nBị động (giới thiệu sơ lược):\n   S + be + V3 (past participle)\n   The software is updated regularly. (Phần mềm được cập nhật thường xuyên.)\n   The file was saved. (Tệp tin đã được lưu.)",
      structure: "Ôn: S + V | S + be + V-ing | S + V-ed/V2 | S + be going to + V\nMới: S + be + V3 (bị động)",
      examples: [
        "I check my email every morning. (Tôi kiểm tra email mỗi sáng.) — Hiện tại đơn",
        "The programmer is fixing the bug. (Lập trình viên đang sửa lỗi.) — Hiện tại tiếp diễn",
        "We installed new software last week. (Chúng tôi đã cài phần mềm mới tuần trước.) — Quá khứ đơn",
        "The data is backed up every night. (Dữ liệu được sao lưu mỗi đêm.) — Bị động"
      ],
      tips: "Mẹo: Từ vựng công nghệ rất phổ biến trong TOEIC. Nhiều từ như 'update', 'install', 'connect' vừa là động từ vừa là danh từ. Chú ý ngữ cảnh để xác định từ loại."
    },
    words: [
      {word:'computer', ipa:'/kəmˈpjutɝ/', meaning:'máy tính', type:'noun', example:'I use a computer at work.', viAnswers:['máy tính']},
      {word:'phone', ipa:'/ˈfoʊn/', meaning:'điện thoại', type:'noun', example:'My phone is on the desk.', viAnswers:['điện thoại']},
      {word:'screen', ipa:'/ˈskɹin/', meaning:'màn hình', type:'noun', example:'The screen is too bright.', viAnswers:['màn hình']},
      {word:'keyboard', ipa:'/ˈkiˌbɔɹd/', meaning:'bàn phím', type:'noun', example:'I need a new keyboard.', viAnswers:['bàn phím']},
      {word:'mouse', ipa:'/ˈmaʊs/', meaning:'chuột máy tính', type:'noun', example:'Click the mouse to open the file.', viAnswers:['chuột máy tính','chuột','con chuột']},
      {word:'internet', ipa:'/ˈɪntɝˌnɛt/', meaning:'mạng internet', type:'noun', example:'The internet is very fast here.', viAnswers:['mạng internet','internet']},
      {word:'website', ipa:'/ˈwɛbˌsaɪt/', meaning:'trang web', type:'noun', example:'Visit our website for more information.', viAnswers:['trang web','website']},
      {word:'download', ipa:'/ˈdaʊnˌɫoʊd/', meaning:'tải xuống', type:'verb / noun', example:'Please download this file.', viAnswers:['tải xuống','tải về','tải']},
      {word:'upload', ipa:'/ˈəˌpɫoʊd/', meaning:'tải lên', type:'verb / noun', example:'Upload the document to the system.', viAnswers:['tải lên']},
      {word:'install', ipa:'/ˌɪnˈstɔɫ/', meaning:'cài đặt', type:'verb', example:'I need to install new software.', viAnswers:['cài đặt']},
      {word:'program', ipa:'/ˈpɹoʊˌɡɹæm/', meaning:'chương trình', type:'noun', example:'This program helps you learn English.', viAnswers:['chương trình','phần mềm']},
      {word:'software', ipa:'/ˈsɔfˌwɛɹ/, /ˈsɔftˌwɛɹ/', meaning:'phần mềm', type:'noun', example:'We use accounting software.', viAnswers:['phần mềm']},
      {word:'hardware', ipa:'/ˈhɑɹdˌwɛɹ/', meaning:'phần cứng', type:'noun', example:'The hardware needs to be replaced.', viAnswers:['phần cứng']},
      {word:'device', ipa:'/dɪˈvaɪs/', meaning:'thiết bị', type:'noun', example:'This device connects to the internet.', viAnswers:['thiết bị']},
      {word:'digital', ipa:'/ˈdɪdʒətəɫ/, /ˈdɪdʒɪtəɫ/', meaning:'kỹ thuật số, số', type:'adjective', example:'We live in a digital world.', viAnswers:['kỹ thuật số','số','điện tử']},
      {word:'online', ipa:'/ˈɔnˌɫaɪn/', meaning:'trực tuyến', type:'adjective / adverb', example:'I study English online.', viAnswers:['trực tuyến','online']},
      {word:'connect', ipa:'/kəˈnɛkt/', meaning:'kết nối', type:'verb', example:'Please connect to the Wi-Fi.', viAnswers:['kết nối']},
      {word:'network', ipa:'/ˈnɛtˌwɝk/', meaning:'mạng', type:'noun', example:'The network is down today.', viAnswers:['mạng','mạng lưới']},
      {word:'server', ipa:'/ˈsɝvɝ/', meaning:'máy chủ', type:'noun', example:'The server stores all the data.', viAnswers:['máy chủ']},
      {word:'database', ipa:'/ˈdætəˌbeɪs/, /ˈdeɪtəˌbeɪs/', meaning:'cơ sở dữ liệu', type:'noun', example:'All customer data is in the database.', viAnswers:['cơ sở dữ liệu']},
      {word:'update', ipa:'/ˈəpˌdeɪt/, /əpˈdeɪt/', meaning:'cập nhật', type:'verb / noun', example:'Please update the software.', viAnswers:['cập nhật']},
      {word:'backup', ipa:'/ˈbæˌkəp/', meaning:'sao lưu, bản sao lưu', type:'noun / verb', example:'Always backup your files.', viAnswers:['sao lưu','bản sao lưu']},
      {word:'error', ipa:'/ˈɛɹɝ/', meaning:'lỗi', type:'noun', example:'There is an error in the system.', viAnswers:['lỗi']},
      {word:'fix', ipa:'/ˈfɪks/', meaning:'sửa, sửa lỗi', type:'verb', example:'The technician will fix the error.', viAnswers:['sửa','sửa lỗi','sửa chữa']},
      {word:'reboot', ipa:'/ɹiˈbut/', meaning:'khởi động lại', type:'verb', example:'Try to reboot the computer.', viAnswers:['khởi động lại','khởi động lại máy']}
    ]
  }
];


const DAYS_DATA_PART2 = [
  // ===== DAY 21: Finance + Nhận diện từ loại =====
  {
    day: 21,
    topic: "Tài chính",
    topicEn: "Finance",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Nhận diện Từ loại qua Hậu tố (Suffixes)",
      explanation: "Trong đề thi TOEIC Part 5, các câu hỏi về từ loại chiếm số lượng lớn. Việc nhớ đuôi từ loại giúp bạn chọn ngay đáp án đúng trong 3 giây.\n\n1. Hậu tố của Danh từ (Noun Suffixes):\n- Chỉ vật/sự việc/trạng thái: -tion/-sion (decision), -ment (agreement), -ness (business), -ity (priority), -ance/-ence (performance), -ship (partnership), -ing (training).\n- Chỉ người: -er/-or (manager, visitor), -ist (specialist), -ee (employee - người nhận hành động), -ant (assistant, applicant).\n\n2. Hậu tố của Tính từ (Adjective Suffixes):\n- -ful (helpful), -less (useless), -able/-ible (reliable, flexible), -ive (creative), -ous (famous), -al (professional), -ic (specific), -y (busy).\n\n3. Hậu tố của Động từ (Verb Suffixes):\n- -ize/-ise (organize), -ate (create), -ify (simplify), -en (shorten).\n\n4. Hậu tố của Trạng từ (Adverb Suffixes):\n- Hầu hết trạng từ kết thúc bằng đuôi -ly (Tính từ + ly).",
      structure: "Word + Suffix = Part of Speech",
      examples: [
        "develop (V) -> development (N) -> developing/developed (Adj)",
        "rely (V) -> reliability (N) -> reliable (Adj) -> reliably (Adv)",
        "beauty (N) -> beautify (V) -> beautiful (Adj) -> beautifully (Adv)"
      ],
exceptions: [
        "<b>BẪY CỰC LỚN TRONG TOEIC:</b> Một số từ kết thúc bằng đuôi <b>-al</b> nhưng lại là DANH TỪ chứ không phải tính từ: <i>proposal (đề xuất), approval (phê duyệt), arrival (sự đến nơi), renewal (sự gia hạn), disposal (sự vứt bỏ), referral (thư giới thiệu)</i>.",
        "Một số từ kết thúc bằng đuôi <b>-ive</b> nhưng lại là DANH TỪ: <i>representative (người đại diện), initiative (sáng kiến), alternative (sự thay thế), objective (mục tiêu)</i>.",
        "Một số từ có đuôi <b>-ly</b> vừa là tính từ vừa là trạng từ: <i>daily, weekly, monthly, yearly, early</i>."
      ],
      notes: [
        "Mẹo tìm tính từ nhanh trong 4 đáp án: Hãy tìm trạng từ kết thúc bằng đuôi <b>-ly</b>, sau đó bỏ đuôi <b>-ly</b> đi ta sẽ thu được tính từ tương ứng."
      ],
            tips: "Mẹo: Nếu phân vân giữa các đáp án, hãy tìm trạng từ đuôi -ly trước. Bỏ đuôi -ly đi bạn sẽ thu được Tính từ. Từ đó loại trừ và suy ra đáp án đúng."
    },
    words: [
      {word:'money', ipa:'/ˈməni/', meaning:'tiền', type:'noun', example:'I need more money.', viAnswers:['tiền','tiền bạc']},
      {word:'income', ipa:'/ˈɪnˌkəm/', meaning:'thu nhập', type:'noun', example:'His income is high.', viAnswers:['thu nhập']},
      {word:'expense', ipa:'/ɪkˈspɛns/', meaning:'chi phí', type:'noun', example:'The expense is too high.', viAnswers:['chi phí','phí tổn']},
      {word:'budget', ipa:'/ˈbədʒɪt/', meaning:'ngân sách', type:'noun', example:'We have a small budget.', viAnswers:['ngân sách']},
      {word:'profit', ipa:'/ˈpɹɑfət/, /ˈpɹɑfɪt/', meaning:'lợi nhuận', type:'noun', example:'The company made a big profit.', viAnswers:['lợi nhuận','lãi']},
      {word:'loss', ipa:'/ˈɫɔs/', meaning:'thua lỗ', type:'noun', example:'The company had a loss this year.', viAnswers:['thua lỗ','lỗ','sự mất mát']},
      {word:'invest', ipa:'/ˌɪnˈvɛst/', meaning:'đầu tư', type:'verb', example:'He wants to invest in stocks.', viAnswers:['đầu tư']},
      {word:'save', ipa:'/ˈseɪv/', meaning:'tiết kiệm', type:'verb', example:'She saves money every month.', viAnswers:['tiết kiệm','để dành']},
      {word:'spend', ipa:'/ˈspɛnd/', meaning:'tiêu xài', type:'verb', example:'Do not spend too much money.', viAnswers:['tiêu xài','tiêu','chi tiêu']},
      {word:'loan', ipa:'/ˈɫoʊn/', meaning:'khoản vay', type:'noun', example:'He got a loan from the bank.', viAnswers:['khoản vay','tiền vay']},
      {word:'debt', ipa:'/ˈdɛt/', meaning:'nợ', type:'noun', example:'She has a lot of debt.', viAnswers:['nợ','món nợ']},
      {word:'interest', ipa:'/ˈɪntɝəst/, /ˈɪntɝɪst/, /ˈɪntɹəst/, /ˈɪntɹɪst/', meaning:'lãi suất', type:'noun', example:'The interest rate is 5%.', viAnswers:['lãi suất','tiền lãi']},
      {word:'tax', ipa:'/ˈtæks/', meaning:'thuế', type:'noun', example:'Everyone must pay tax.', viAnswers:['thuế']},
      {word:'salary', ipa:'/ˈsæɫɝi/', meaning:'lương', type:'noun', example:'Her salary is paid monthly.', viAnswers:['lương','tiền lương']},
      {word:'wage', ipa:'/ˈweɪdʒ/', meaning:'tiền công', type:'noun', example:'The minimum wage went up.', viAnswers:['tiền công','tiền lương','lương']},
      {word:'revenue', ipa:'/ˈɹɛvəˌnu/, /ˈɹɛvənˌju/', meaning:'doanh thu', type:'noun', example:'The company revenue grew 10%.', viAnswers:['doanh thu']},
      {word:'fund', ipa:'/ˈfənd/', meaning:'quỹ', type:'noun', example:'We started a new fund.', viAnswers:['quỹ','nguồn vốn']},
      {word:'account', ipa:'/əˈkaʊnt/', meaning:'tài khoản', type:'noun', example:'I opened a bank account.', viAnswers:['tài khoản']},
      {word:'balance', ipa:'/ˈbæɫəns/', meaning:'số dư', type:'noun', example:'Check your account balance.', viAnswers:['số dư','cân bằng']},
      {word:'transfer', ipa:'/ˈtɹænsfɝ/, /tɹænsˈfɝ/', meaning:'chuyển khoản', type:'verb', example:'Please transfer the money today.', viAnswers:['chuyển khoản','chuyển']},
      {word:'withdraw', ipa:'/wɪðˈdɹɔ/, /wɪθˈdɹɔ/', meaning:'rút tiền', type:'verb', example:'I need to withdraw some cash.', viAnswers:['rút tiền','rút']},
      {word:'deposit', ipa:'/dəˈpɑzɪt/, /dɪˈpɑzət/', meaning:'gửi tiền', type:'verb / noun', example:'She deposited money into her account.', viAnswers:['gửi tiền','tiền gửi','đặt cọc']},
      {word:'payment', ipa:'/ˈpeɪmənt/', meaning:'thanh toán', type:'noun', example:'The payment is due tomorrow.', viAnswers:['thanh toán','khoản thanh toán']},
      {word:'financial', ipa:'/ˌfaɪˈnænʃəɫ/, /fəˈnænʃəɫ/, /fɪˈnænʃəɫ/', meaning:'thuộc tài chính', type:'adjective', example:'This is a financial report.', viAnswers:['thuộc tài chính','tài chính']},
      {word:'economic', ipa:'/ˌɛkəˈnɑmɪk/, /ˌikəˈnɑmɪk/', meaning:'thuộc kinh tế', type:'adjective', example:'The economic situation is improving.', viAnswers:['thuộc kinh tế','kinh tế']}
    ]
  },

  // ===== DAY 22: Housing + Từ loại sau the/a/an/my =====
  {
    day: 22,
    topic: "Nhà ở",
    topicEn: "Housing",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Từ loại sau the / a / an / my / his / her",
      explanation: "Sau các từ hạn định (the, a, an, my, his, her, their, our, this, that...) phải là DANH TỪ hoặc CỤM DANH TỪ (tính từ + danh từ).\n\nQuy tắc:\n• the/a/an/my + DANH TỪ: the house, a kitchen, my apartment\n• the/a/an/my + TÍNH TỪ + DANH TỪ: the new house, a large kitchen\n\n⚠️ KHÔNG được đặt động từ hay trạng từ ngay sau the/a/an/my.",
      structure: "the / a / an / my + (adjective) + NOUN",
      examples: [
        "The apartment is very nice. (apartment = noun sau the)",
        "She signed a new lease. (new = adj, lease = noun sau a)",
        "His monthly rent is $500. (monthly = adj, rent = noun sau his)"
      ],
exceptions: [
        "Nếu sau chỗ trống đã có sẵn một danh từ làm trung tâm, vị trí trống trước đó phải điền <b>tính từ</b> để bổ nghĩa cho danh từ đó chứ không điền danh từ khác. Cấu trúc: <code>a/an/the + Adj + Noun</code>."
      ],
      notes: [
        "Công thức đầy đủ vị trí: <code>a/an/the/tính từ sở hữu + (Adv) + (Adj) + Danh từ</code>.",
        "Luôn luôn kiểm tra từ đứng ngay sau khoảng trống trước khi chọn đáp án."
      ],
            tips: "Thấy the/a/an/my → tìm danh từ ngay sau. Nếu có 2 chỗ trống, thường là tính từ + danh từ."
    },
    words: [
      {word:'house', ipa:'/ˈhaʊs/', meaning:'nhà', type:'noun', example:'They live in a big house.', viAnswers:['nhà','ngôi nhà','căn nhà']},
      {word:'apartment', ipa:'/əˈpɑɹtmənt/', meaning:'căn hộ', type:'noun', example:'The apartment has two bedrooms.', viAnswers:['căn hộ','chung cư']},
      {word:'rent', ipa:'/ˈɹɛnt/', meaning:'tiền thuê / thuê', type:'noun / verb', example:'The rent is $800 per month.', viAnswers:['tiền thuê','thuê']},
      {word:'lease', ipa:'/ˈɫis/', meaning:'hợp đồng thuê', type:'noun', example:'Please sign the lease.', viAnswers:['hợp đồng thuê','hợp đồng cho thuê']},
      {word:'landlord', ipa:'/ˈɫændˌɫɔɹd/', meaning:'chủ nhà', type:'noun', example:'The landlord fixed the door.', viAnswers:['chủ nhà','chủ cho thuê']},
      {word:'tenant', ipa:'/ˈtɛnənt/', meaning:'người thuê', type:'noun', example:'The tenant pays rent on time.', viAnswers:['người thuê','người thuê nhà']},
      {word:'furniture', ipa:'/ˈfɝnɪtʃɝ/', meaning:'đồ nội thất', type:'noun', example:'We need new furniture.', viAnswers:['đồ nội thất','nội thất','đồ đạc']},
      {word:'kitchen', ipa:'/ˈkɪtʃən/', meaning:'nhà bếp', type:'noun', example:'She is cooking in the kitchen.', viAnswers:['nhà bếp','bếp','phòng bếp']},
      {word:'bedroom', ipa:'/ˈbɛˌdɹum/', meaning:'phòng ngủ', type:'noun', example:'The bedroom is very large.', viAnswers:['phòng ngủ']},
      {word:'bathroom', ipa:'/ˈbæˌθɹum/', meaning:'phòng tắm', type:'noun', example:'The bathroom is clean.', viAnswers:['phòng tắm','nhà tắm']},
      {word:'garage', ipa:'/ɡɝˈɑʒ/', meaning:'nhà để xe', type:'noun', example:'He parks the car in the garage.', viAnswers:['nhà để xe','ga-ra']},
      {word:'garden', ipa:'/ˈɡɑɹdən/', meaning:'vườn', type:'noun', example:'There are flowers in the garden.', viAnswers:['vườn','khu vườn']},
      {word:'neighborhood', ipa:'/ˈneɪbɝˌhʊd/', meaning:'khu phố', type:'noun', example:'This is a quiet neighborhood.', viAnswers:['khu phố','hàng xóm','khu vực lân cận']},
      {word:'address', ipa:'/ˈæˌdɹɛs/, /əˈdɹɛs/', meaning:'địa chỉ', type:'noun', example:'What is your address?', viAnswers:['địa chỉ']},
      {word:'move', ipa:'/ˈmuv/', meaning:'chuyển nhà / di chuyển', type:'verb', example:'We will move next week.', viAnswers:['chuyển nhà','di chuyển','dọn nhà']},
      {word:'decorate', ipa:'/ˈdɛkɝˌeɪt/', meaning:'trang trí', type:'verb', example:'She decorated the living room.', viAnswers:['trang trí']},
      {word:'repair', ipa:'/ɹɪˈpɛɹ/', meaning:'sửa chữa', type:'verb', example:'He repaired the broken window.', viAnswers:['sửa chữa','sửa']},
      {word:'maintain', ipa:'/meɪnˈteɪn/', meaning:'bảo trì', type:'verb', example:'We maintain the building every year.', viAnswers:['bảo trì','duy trì','bảo dưỡng']},
      {word:'electricity', ipa:'/ɪˌɫɛkˈtɹɪsəti/', meaning:'điện', type:'noun', example:'The electricity bill is high.', viAnswers:['điện','điện năng']},
      {word:'water', ipa:'/ˈwɔtɝ/', meaning:'nước', type:'noun', example:'The water is clean and safe.', viAnswers:['nước']},
      {word:'heat', ipa:'/ˈhit/', meaning:'sưởi ấm / nhiệt', type:'noun / verb', example:'Turn on the heat, please.', viAnswers:['sưởi ấm','nhiệt','nóng']},
      {word:'air', ipa:'/ˈɛɹ/', meaning:'không khí', type:'noun', example:'The air is fresh here.', viAnswers:['không khí']},
      {word:'condition', ipa:'/kənˈdɪʃən/', meaning:'tình trạng', type:'noun', example:'The house is in good condition.', viAnswers:['tình trạng','điều kiện']},
      {word:'property', ipa:'/ˈpɹɑpɝti/', meaning:'bất động sản / tài sản', type:'noun', example:'This property is for sale.', viAnswers:['bất động sản','tài sản']},
      {word:'mortgage', ipa:'/ˈmɔɹɡədʒ/, /ˈmɔɹɡɪdʒ/', meaning:'thế chấp', type:'noun', example:'They are paying off the mortgage.', viAnswers:['thế chấp','vay thế chấp']}
    ]
  },

  // ===== DAY 23: Environment + Từ loại sau very, sau chủ ngữ =====
  {
    day: 23,
    topic: "Môi trường",
    topicEn: "Environment",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Từ loại sau very / sau chủ ngữ",
      explanation: "1) Sau VERY, SO, TOO, QUITE, RATHER → dùng TÍNH TỪ hoặc TRẠNG TỪ:\n• very + adj: The weather is very hot.\n• very + adv: He works very carefully.\n\n2) Sau CHỦ NGỮ + BE → dùng TÍNH TỪ (không dùng trạng từ):\n• The pollution is serious. ✅\n• The pollution is seriously. ❌\n\n3) Sau CHỦ NGỮ + ĐỘNG TỪ THƯỜNG → dùng TRẠNG TỪ:\n• The temperature rises quickly. ✅",
      structure: "very/so/too + ADJ/ADV | S + be + ADJ | S + V + ADV",
      examples: [
        "The climate is very different. (very + adj)",
        "Pollution is very serious. (be + adj)",
        "The temperature changes quickly. (V + adv)"
      ],
exceptions: [
        "Sau trạng từ chỉ mức độ (very, extremely, highly...) thường là tính từ. Tuy nhiên, nếu sau tính từ là một danh từ, thì trạng từ đó vẫn bổ nghĩa cho tính từ đứng trước danh từ. Cấu trúc: <code>S + V + a + very + Adj + N</code>."
      ],
      notes: [
        "Trạng từ có thể đứng xen vào giữa Chủ ngữ và Động từ thường để bổ nghĩa cho động từ: <code>Subject + Adverb + Verb</code> (ví dụ: <i>He quickly signed the contract</i>). Tránh nhầm lẫn điền tính từ vào đây."
      ],
            tips: "Nhớ: sau BE → tính từ; sau VERY → tính từ hoặc trạng từ; bổ nghĩa cho động từ → trạng từ."
    },
    words: [
      {word:'environment', ipa:'/ɪnˈvaɪɹənmənt/', meaning:'môi trường', type:'noun', example:'We must protect the environment.', viAnswers:['môi trường']},
      {word:'nature', ipa:'/ˈneɪtʃɝ/', meaning:'thiên nhiên', type:'noun', example:'I love nature very much.', viAnswers:['thiên nhiên','tự nhiên']},
      {word:'climate', ipa:'/ˈkɫaɪmət/, /ˈkɫaɪmɪt/', meaning:'khí hậu', type:'noun', example:'The climate is changing.', viAnswers:['khí hậu']},
      {word:'weather', ipa:'/ˈwɛðɝ/', meaning:'thời tiết', type:'noun', example:'The weather is very hot today.', viAnswers:['thời tiết']},
      {word:'pollution', ipa:'/pəˈɫuʃən/', meaning:'ô nhiễm', type:'noun', example:'Air pollution is a big problem.', viAnswers:['ô nhiễm','sự ô nhiễm']},
      {word:'recycle', ipa:'/ɹiˈsaɪkəɫ/', meaning:'tái chế', type:'verb', example:'We should recycle paper and plastic.', viAnswers:['tái chế']},
      {word:'waste', ipa:'/ˈweɪst/', meaning:'rác thải / lãng phí', type:'noun / verb', example:'Do not waste water.', viAnswers:['rác thải','lãng phí','chất thải']},
      {word:'energy', ipa:'/ˈɛnɝdʒi/', meaning:'năng lượng', type:'noun', example:'Solar energy is very clean.', viAnswers:['năng lượng']},
      {word:'solar', ipa:'/ˈsoʊɫɝ/', meaning:'thuộc mặt trời', type:'adjective', example:'We use solar power.', viAnswers:['thuộc mặt trời','năng lượng mặt trời']},
      {word:'water', ipa:'/ˈwɔtɝ/', meaning:'nước', type:'noun', example:'Clean water is very important.', viAnswers:['nước']},
      {word:'forest', ipa:'/ˈfɔɹəst/, /ˈfɔɹɪst/', meaning:'rừng', type:'noun', example:'The forest is very large.', viAnswers:['rừng','khu rừng']},
      {word:'ocean', ipa:'/ˈoʊʃən/', meaning:'đại dương', type:'noun', example:'The ocean is very deep.', viAnswers:['đại dương','biển']},
      {word:'protect', ipa:'/pɹəˈtɛkt/', meaning:'bảo vệ', type:'verb', example:'We must protect wildlife.', viAnswers:['bảo vệ']},
      {word:'conserve', ipa:'/kənˈsɝv/', meaning:'bảo tồn', type:'verb', example:'We need to conserve energy.', viAnswers:['bảo tồn','giữ gìn']},
      {word:'reduce', ipa:'/ɹəˈdus/, /ɹiˈdus/, /ɹɪˈdus/', meaning:'giảm', type:'verb', example:'Please reduce waste.', viAnswers:['giảm','giảm thiểu','giảm bớt']},
      {word:'reuse', ipa:'/ɹiˈjus/, /ɹiˈjuz/', meaning:'tái sử dụng', type:'verb', example:'You can reuse this bag.', viAnswers:['tái sử dụng']},
      {word:'global', ipa:'/ˈɡɫoʊbəɫ/', meaning:'toàn cầu', type:'adjective', example:'Global warming is very serious.', viAnswers:['toàn cầu']},
      {word:'temperature', ipa:'/ˈtɛmpɝətʃɝ/, /ˈtɛmpɹətʃɝ/', meaning:'nhiệt độ', type:'noun', example:'The temperature is very high.', viAnswers:['nhiệt độ']},
      {word:'carbon', ipa:'/ˈkɑɹbən/', meaning:'các-bon', type:'noun', example:'We must reduce carbon emissions.', viAnswers:['các-bon','carbon','cacbon']},
      {word:'green', ipa:'/ˈɡɹin/', meaning:'xanh / thân thiện môi trường', type:'adjective', example:'We need green energy.', viAnswers:['xanh','xanh lá','thân thiện môi trường']},
      {word:'clean', ipa:'/ˈkɫin/', meaning:'sạch', type:'adjective', example:'The air here is very clean.', viAnswers:['sạch','sạch sẽ']},
      {word:'sustainable', ipa:'/səˈsteɪnəbəɫ/', meaning:'bền vững', type:'adjective', example:'We need sustainable development.', viAnswers:['bền vững']},
      {word:'damage', ipa:'/ˈdæmədʒ/, /ˈdæmɪdʒ/', meaning:'thiệt hại / gây hại', type:'noun / verb', example:'The storm caused serious damage.', viAnswers:['thiệt hại','gây hại','hư hại']},
      {word:'resource', ipa:'/ˈɹisɔɹs/', meaning:'tài nguyên', type:'noun', example:'Natural resources are limited.', viAnswers:['tài nguyên','nguồn tài nguyên']},
      {word:'wildlife', ipa:'/ˈwaɪɫdˌɫaɪf/', meaning:'động vật hoang dã', type:'noun', example:'We must protect wildlife.', viAnswers:['động vật hoang dã']}
    ]
  },

  // ===== DAY 24: Travel + Giới từ in, on, at =====
  {
    day: 24,
    topic: "Du lịch",
    topicEn: "Travel",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Giới từ in, on, at",
      explanation: "Giới từ chỉ thời gian:\n• IN + tháng / năm / mùa / buổi: in May, in 2024, in summer, in the morning\n• ON + ngày / thứ / ngày tháng: on Monday, on June 5th, on the weekend\n• AT + giờ / thời điểm cụ thể: at 9 AM, at noon, at night, at the moment\n\nGiới từ chỉ nơi chốn:\n• IN + không gian lớn hoặc bên trong: in the city, in the hotel, in Vietnam\n• ON + bề mặt / phương tiện: on the table, on the bus, on the second floor\n• AT + địa điểm cụ thể: at the airport, at home, at the station",
      structure: "IN + tháng/năm/mùa | ON + ngày/thứ | AT + giờ/điểm cụ thể",
      examples: [
        "The flight arrives at 3 PM.",
        "We will travel in July.",
        "The hotel is on Main Street.",
        "I will meet you at the airport."
      ],
exceptions: [
        "Ta nói <i>in the morning/afternoon/evening</i> nhưng lại nói <i>on Monday morning</i> (khi có thứ cụ thể đi kèm).",
        "Ngoại lệ về thời gian: nói <i>at night</i> (vào ban đêm) chứ không dùng <i>in night</i>."
      ],
      notes: [
        "<b>Mẹo nhớ giới từ thời gian:</b> <b>at</b> (giờ giấc, mốc thời gian cụ thể) -> <b>on</b> (ngày trong tuần, ngày tháng cụ thể, ngày lễ) -> <b>in</b> (tháng, năm, mùa, thập kỷ, thế kỷ).",
        "<b>Lưu ý:</b> Không dùng giới từ <i>in, on, at</i> trước các từ chỉ thời gian có chứa <i>next, last, this, every</i> (ví dụ: <i>last Sunday</i>, không viết <i>on last Sunday</i> ❌)."
      ],
            tips: "Nhớ: AT → điểm nhỏ (giờ, địa điểm); ON → bề mặt, ngày; IN → không gian lớn, tháng/năm."
    },
    words: [
      {word:'passport', ipa:'/ˈpæsˌpɔɹt/', meaning:'hộ chiếu', type:'noun', example:'Show your passport at the airport.', viAnswers:['hộ chiếu']},
      {word:'visa', ipa:'/ˈvizə/', meaning:'thị thực', type:'noun', example:'You need a visa to enter this country.', viAnswers:['thị thực','visa']},
      {word:'luggage', ipa:'/ˈɫəɡədʒ/, /ˈɫəɡɪdʒ/', meaning:'hành lý', type:'noun', example:'Put your luggage on the bus.', viAnswers:['hành lý']},
      {word:'suitcase', ipa:'/ˈsutˌkeɪs/', meaning:'vali', type:'noun', example:'She packed her suitcase.', viAnswers:['vali','va li']},
      {word:'hotel', ipa:'/hoʊˈtɛɫ/', meaning:'khách sạn', type:'noun', example:'We stayed in a nice hotel.', viAnswers:['khách sạn']},
      {word:'reservation', ipa:'/ˌɹɛzɝˈveɪʃən/', meaning:'đặt chỗ', type:'noun', example:'I have a reservation at the hotel.', viAnswers:['đặt chỗ','sự đặt trước','đặt phòng']},
      {word:'tourist', ipa:'/ˈtʊɹəst/, /ˈtʊɹɪst/', meaning:'khách du lịch', type:'noun', example:'Many tourists visit in summer.', viAnswers:['khách du lịch','du khách']},
      {word:'guide', ipa:'/ˈɡaɪd/', meaning:'hướng dẫn viên', type:'noun', example:'The guide showed us the city.', viAnswers:['hướng dẫn viên','người hướng dẫn']},
      {word:'map', ipa:'/ˈmæp/', meaning:'bản đồ', type:'noun', example:'Look at the map on the wall.', viAnswers:['bản đồ']},
      {word:'itinerary', ipa:'/aɪˈtɪnɝˌɛɹi/', meaning:'lịch trình', type:'noun', example:'Check the itinerary for the trip.', viAnswers:['lịch trình','hành trình']},
      {word:'attraction', ipa:'/əˈtɹækʃən/', meaning:'điểm tham quan', type:'noun', example:'This is a famous tourist attraction.', viAnswers:['điểm tham quan','điểm thu hút']},
      {word:'culture', ipa:'/ˈkəɫtʃɝ/', meaning:'văn hóa', type:'noun', example:'I want to learn about the culture.', viAnswers:['văn hóa']},
      {word:'souvenir', ipa:'/ˌsuvəˈnɪɹ/', meaning:'quà lưu niệm', type:'noun', example:'She bought a souvenir at the shop.', viAnswers:['quà lưu niệm','đồ lưu niệm']},
      {word:'currency', ipa:'/ˈkɝənsi/', meaning:'tiền tệ', type:'noun', example:'What currency do they use in Japan?', viAnswers:['tiền tệ','đồng tiền','ngoại tệ']},
      {word:'exchange', ipa:'/ɪksˈtʃeɪndʒ/', meaning:'đổi / trao đổi', type:'verb / noun', example:'I need to exchange money at the bank.', viAnswers:['đổi','trao đổi','đổi tiền']},
      {word:'customs', ipa:'/ˈkəstəmz/', meaning:'hải quan', type:'noun', example:'Go through customs at the airport.', viAnswers:['hải quan']},
      {word:'border', ipa:'/ˈbɔɹdɝ/', meaning:'biên giới', type:'noun', example:'We crossed the border on Monday.', viAnswers:['biên giới']},
      {word:'international', ipa:'/ˌɪnɝˈnæʃənəɫ/, /ˌɪntɝˈnæʃənəɫ/', meaning:'quốc tế', type:'adjective', example:'This is an international airport.', viAnswers:['quốc tế']},
      {word:'domestic', ipa:'/dəˈmɛstɪk/', meaning:'trong nước / nội địa', type:'adjective', example:'This is a domestic flight.', viAnswers:['trong nước','nội địa']},
      {word:'accommodation', ipa:'/əˌkɑməˈdeɪʃən/', meaning:'chỗ ở', type:'noun', example:'The accommodation is in the city center.', viAnswers:['chỗ ở','nơi ở','nơi lưu trú']},
      {word:'resort', ipa:'/ɹiˈsɔɹt/, /ɹiˈzɔɹt/, /ɹɪˈzɔɹt/', meaning:'khu nghỉ dưỡng', type:'noun', example:'We stayed at a beach resort.', viAnswers:['khu nghỉ dưỡng','resort']},
      {word:'cruise', ipa:'/ˈkɹuz/', meaning:'du thuyền', type:'noun', example:'They went on a cruise in June.', viAnswers:['du thuyền','chuyến du ngoạn bằng tàu']},
      {word:'adventure', ipa:'/ædˈvɛntʃɝ/, /ədˈvɛntʃɝ/', meaning:'cuộc phiêu lưu', type:'noun', example:'The trip was a great adventure.', viAnswers:['cuộc phiêu lưu','phiêu lưu']},
      {word:'explore', ipa:'/ɪksˈpɫɔɹ/', meaning:'khám phá', type:'verb', example:'We explored the old city on foot.', viAnswers:['khám phá','thám hiểm']},
      {word:'journey', ipa:'/ˈdʒɝni/', meaning:'hành trình', type:'noun', example:'The journey took five hours.', viAnswers:['hành trình','chuyến đi']}
    ]
  },

  // ===== DAY 25: Food/Restaurant + Giới từ for, to, from, with =====
  {
    day: 25,
    topic: "Thức ăn / Nhà hàng",
    topicEn: "Food / Restaurant",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Giới từ for, to, from, with",
      explanation: "• FOR: dùng cho mục đích, thời gian, đối tượng\n  - for lunch (cho bữa trưa), for 2 hours (trong 2 giờ), for you (cho bạn)\n\n• TO: dùng cho hướng đến, người nhận\n  - go to the restaurant, give it to the waiter\n\n• FROM: dùng cho nguồn gốc, thời gian bắt đầu\n  - from 9 AM to 5 PM, from Vietnam, made from rice\n\n• WITH: dùng cho đi cùng, kèm theo\n  - coffee with milk, go with friends, a dish with vegetables",
      structure: "for + mục đích/thời gian | to + hướng đến | from + nguồn gốc | with + đi kèm",
      examples: [
        "This dish is for two people.",
        "We walked to the restaurant.",
        "The recipe is from Italy.",
        "I like coffee with sugar."
      ],
exceptions: [
        "Thông thường sau giới từ <i>to</i> là động từ nguyên mẫu (<i>to V</i>). Tuy nhiên, trong một số cụm từ cố định, <i>to</i> đóng vai trò là giới từ thực sự và đi kèm <b>V-ing hoặc Danh từ</b>: <i>look forward to + V-ing</i> (mong đợi), <i>be/get used to + V-ing</i> (quen với), <i>be committed to + V-ing</i> (cam kết), <i>object to + V-ing</i> (phản đối)."
      ],
      notes: [
        "Giới từ <i>for</i> đi với khoảng thời gian trong thì Hiện tại hoàn thành (ví dụ: <i>for 3 years</i>), phân biệt với <i>since</i> đi với mốc thời gian (ví dụ: <i>since 2020</i>)."
      ],
            tips: "FOR = cho/vì; TO = đến; FROM = từ; WITH = với/cùng."
    },
    words: [
      {word:'menu', ipa:'/ˈmɛnju/', meaning:'thực đơn', type:'noun', example:'Can I see the menu, please?', viAnswers:['thực đơn']},
      {word:'dish', ipa:'/ˈdɪʃ/', meaning:'món ăn', type:'noun', example:'This dish is from Vietnam.', viAnswers:['món ăn','đĩa']},
      {word:'meal', ipa:'/ˈmiɫ/', meaning:'bữa ăn', type:'noun', example:'We had a nice meal with friends.', viAnswers:['bữa ăn']},
      {word:'breakfast', ipa:'/ˈbɹɛkfəst/', meaning:'bữa sáng', type:'noun', example:'Breakfast is ready for you.', viAnswers:['bữa sáng','ăn sáng']},
      {word:'lunch', ipa:'/ˈɫəntʃ/', meaning:'bữa trưa', type:'noun', example:'Let us go to lunch.', viAnswers:['bữa trưa','ăn trưa']},
      {word:'dinner', ipa:'/ˈdɪnɝ/', meaning:'bữa tối', type:'noun', example:'We had dinner with the team.', viAnswers:['bữa tối','ăn tối','bữa cơm tối']},
      {word:'appetizer', ipa:'/ˈæpəˌtaɪzɝ/', meaning:'món khai vị', type:'noun', example:'We ordered an appetizer for the table.', viAnswers:['món khai vị','khai vị']},
      {word:'dessert', ipa:'/dɪˈzɝt/', meaning:'món tráng miệng', type:'noun', example:'I want cake for dessert.', viAnswers:['món tráng miệng','tráng miệng']},
      {word:'beverage', ipa:'/ˈbɛvɝɪdʒ/, /ˈbɛvɹɪdʒ/', meaning:'đồ uống', type:'noun', example:'What beverage would you like?', viAnswers:['đồ uống','thức uống']},
      {word:'ingredient', ipa:'/ˌɪnˈɡɹidiənt/', meaning:'nguyên liệu', type:'noun', example:'This recipe uses fresh ingredients.', viAnswers:['nguyên liệu','thành phần']},
      {word:'recipe', ipa:'/ˈɹɛsəpi/', meaning:'công thức nấu ăn', type:'noun', example:'The recipe is from my grandmother.', viAnswers:['công thức nấu ăn','công thức']},
      {word:'cook', ipa:'/ˈkʊk/', meaning:'nấu ăn', type:'verb', example:'She cooks dinner for the family.', viAnswers:['nấu ăn','nấu','đầu bếp']},
      {word:'serve', ipa:'/ˈsɝv/', meaning:'phục vụ', type:'verb', example:'The waiter served the food to us.', viAnswers:['phục vụ']},
      {word:'taste', ipa:'/ˈteɪst/', meaning:'nếm / hương vị', type:'verb / noun', example:'This soup tastes delicious.', viAnswers:['nếm','hương vị','vị']},
      {word:'fresh', ipa:'/ˈfɹɛʃ/', meaning:'tươi', type:'adjective', example:'We use fresh vegetables from the farm.', viAnswers:['tươi','tươi mới']},
      {word:'delicious', ipa:'/dɪˈɫɪʃəs/', meaning:'ngon', type:'adjective', example:'The food is very delicious.', viAnswers:['ngon','thơm ngon']},
      {word:'spicy', ipa:'/ˈspaɪsi/', meaning:'cay', type:'adjective', example:'This dish is too spicy for me.', viAnswers:['cay']},
      {word:'order', ipa:'/ˈɔɹdɝ/', meaning:'gọi món / đặt hàng', type:'verb', example:'I want to order a pizza.', viAnswers:['gọi món','đặt hàng','đặt','gọi']},
      {word:'waiter', ipa:'/ˈweɪtɝ/', meaning:'phục vụ bàn', type:'noun', example:'The waiter brought the menu to us.', viAnswers:['phục vụ bàn','bồi bàn','người phục vụ']},
      {word:'chef', ipa:'/ˈʃɛf/', meaning:'đầu bếp', type:'noun', example:'The chef cooks with fresh ingredients.', viAnswers:['đầu bếp','bếp trưởng']},
      {word:'kitchen', ipa:'/ˈkɪtʃən/', meaning:'nhà bếp', type:'noun', example:'The chef works in the kitchen.', viAnswers:['nhà bếp','bếp','phòng bếp']},
      {word:'bill', ipa:'/ˈbɪɫ/', meaning:'hóa đơn', type:'noun', example:'Can I have the bill, please?', viAnswers:['hóa đơn']},
      {word:'tip', ipa:'/ˈtɪp/', meaning:'tiền boa', type:'noun', example:'I left a tip for the waiter.', viAnswers:['tiền boa','tiền tip']},
      {word:'reservation', ipa:'/ˌɹɛzɝˈveɪʃən/', meaning:'đặt bàn', type:'noun', example:'I have a reservation for 7 PM.', viAnswers:['đặt bàn','đặt chỗ','đặt trước']},
      {word:'vegetarian', ipa:'/ˌvɛdʒəˈtɛˌɹiən/', meaning:'người ăn chay / ăn chay', type:'noun / adjective', example:'Do you have vegetarian dishes?', viAnswers:['người ăn chay','ăn chay','chay']}
    ]
  },

  // ===== DAY 26: Entertainment + Giới từ before, after, during, between =====
  {
    day: 26,
    topic: "Giải trí",
    topicEn: "Entertainment",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Giới từ before, after, during, between",
      explanation: "• BEFORE + danh từ/V-ing: trước khi\n  - before the show, before eating\n\n• AFTER + danh từ/V-ing: sau khi\n  - after the movie, after watching\n\n• DURING + danh từ: trong suốt (nhấn mạnh khoảng thời gian)\n  - during the concert, during the game\n  ⚠️ DURING + danh từ (KHÔNG dùng DURING + số giờ → dùng FOR)\n\n• BETWEEN + A + AND + B: giữa A và B\n  - between 6 PM and 8 PM, between work and home",
      structure: "before/after + N/V-ing | during + N | between + A + and + B",
      examples: [
        "We had dinner before the show.",
        "Let us talk after the movie.",
        "Please be quiet during the concert.",
        "The game is between 3 PM and 5 PM."
      ],
exceptions: [
        "Tránh nhầm lẫn cách dùng <i>during</i> và <i>while</i>: <i>during</i> là giới từ nên theo sau bắt buộc là <b>Danh từ/Cụm danh từ</b> (ví dụ: <i>during the meeting</i>). Còn <i>while</i> là liên từ nên theo sau là một <b>mệnh đề S+V</b> hoặc <b>V-ing rút gọn</b> (ví dụ: <i>while attending the meeting</i>)."
      ],
      notes: [
        "<i>before</i> và <i>after</i> vừa có thể làm giới từ (theo sau là N/V-ing), vừa làm liên từ (S+V).",
        "Giới từ <i>between</i> chỉ dùng khi nói về 2 đối tượng (cấu trúc: <i>between A and B</i>). Nếu từ 3 đối tượng trở lên, ta phải dùng giới từ <i>among</i>."
      ],
            tips: "DURING + danh từ (sự kiện); FOR + khoảng thời gian (số giờ/ngày). Đừng nhầm lẫn!"
    },
    words: [
      {word:'movie', ipa:'/ˈmuvi/', meaning:'phim', type:'noun', example:'We watched a movie after dinner.', viAnswers:['phim','bộ phim']},
      {word:'music', ipa:'/ˈmjuzɪk/', meaning:'âm nhạc', type:'noun', example:'I listen to music during lunch.', viAnswers:['âm nhạc','nhạc']},
      {word:'concert', ipa:'/ˈkɑnsɝt/, /kənˈsɝt/', meaning:'buổi hòa nhạc', type:'noun', example:'The concert starts at 8 PM.', viAnswers:['buổi hòa nhạc','buổi biểu diễn','concert']},
      {word:'theater', ipa:'/ˈθiətɝ/', meaning:'nhà hát / rạp chiếu phim', type:'noun', example:'We went to the theater after work.', viAnswers:['nhà hát','rạp chiếu phim','rạp hát']},
      {word:'perform', ipa:'/pɝˈfɔɹm/', meaning:'biểu diễn', type:'verb', example:'The band will perform during the festival.', viAnswers:['biểu diễn','trình diễn']},
      {word:'audience', ipa:'/ˈɑdiəns/, /ˈɔdiəns/', meaning:'khán giả', type:'noun', example:'The audience clapped after the show.', viAnswers:['khán giả']},
      {word:'ticket', ipa:'/ˈtɪkət/, /ˈtɪkɪt/', meaning:'vé', type:'noun', example:'Buy your ticket before the show.', viAnswers:['vé']},
      {word:'show', ipa:'/ˈʃoʊ/', meaning:'buổi trình diễn', type:'noun', example:'The show starts at 7 PM.', viAnswers:['buổi trình diễn','chương trình','buổi biểu diễn']},
      {word:'festival', ipa:'/ˈfɛstəvəɫ/, /ˈfɛstɪvəɫ/', meaning:'lễ hội', type:'noun', example:'The music festival is in July.', viAnswers:['lễ hội','liên hoan']},
      {word:'game', ipa:'/ˈɡeɪm/', meaning:'trò chơi / trận đấu', type:'noun', example:'The game is between two teams.', viAnswers:['trò chơi','trận đấu','game']},
      {word:'sport', ipa:'/ˈspɔɹt/', meaning:'thể thao', type:'noun', example:'He plays sport after school.', viAnswers:['thể thao','môn thể thao']},
      {word:'play', ipa:'/ˈpɫeɪ/', meaning:'chơi / vở kịch', type:'verb / noun', example:'We saw a play at the theater.', viAnswers:['chơi','vở kịch']},
      {word:'enjoy', ipa:'/ˌɛnˈdʒɔɪ/, /ɪnˈdʒɔɪ/', meaning:'thưởng thức', type:'verb', example:'I enjoyed the movie very much.', viAnswers:['thưởng thức','tận hưởng','thích']},
      {word:'relax', ipa:'/ɹiˈɫæks/, /ɹɪˈɫæks/', meaning:'thư giãn', type:'verb', example:'I relax after work every day.', viAnswers:['thư giãn','nghỉ ngơi']},
      {word:'hobby', ipa:'/ˈhɑbi/', meaning:'sở thích', type:'noun', example:'Reading is my favorite hobby.', viAnswers:['sở thích']},
      {word:'book', ipa:'/ˈbʊk/', meaning:'sách / đặt', type:'noun / verb', example:'I read a book before bed.', viAnswers:['sách','đặt','quyển sách']},
      {word:'read', ipa:'/ˈɹɛd/, /ˈɹid/', meaning:'đọc', type:'verb', example:'She reads magazines during lunch.', viAnswers:['đọc']},
      {word:'magazine', ipa:'/ˈmæɡəˌzin/', meaning:'tạp chí', type:'noun', example:'I bought a magazine at the store.', viAnswers:['tạp chí']},
      {word:'channel', ipa:'/ˈtʃænəɫ/', meaning:'kênh', type:'noun', example:'What channel is the game on?', viAnswers:['kênh','kênh truyền hình']},
      {word:'broadcast', ipa:'/ˈbɹɔdˌkæst/', meaning:'phát sóng', type:'verb / noun', example:'The show is broadcast between 8 and 9.', viAnswers:['phát sóng','truyền hình','phát thanh']},
      {word:'stream', ipa:'/ˈstɹim/', meaning:'phát trực tuyến', type:'verb', example:'You can stream the concert online.', viAnswers:['phát trực tuyến','xem trực tuyến','stream']},
      {word:'subscribe', ipa:'/səbsˈkɹaɪb/', meaning:'đăng ký', type:'verb', example:'Subscribe to this channel before Friday.', viAnswers:['đăng ký','theo dõi']},
      {word:'recommend', ipa:'/ˌɹɛkəˈmɛnd/', meaning:'giới thiệu / gợi ý', type:'verb', example:'I recommend this movie to you.', viAnswers:['giới thiệu','gợi ý','đề xuất']},
      {word:'review', ipa:'/ˌɹivˈju/', meaning:'đánh giá', type:'noun / verb', example:'Read the review before buying the book.', viAnswers:['đánh giá','nhận xét','bài đánh giá']},
      {word:'popular', ipa:'/ˈpɑpjəɫɝ/', meaning:'phổ biến', type:'adjective', example:'This show is very popular.', viAnswers:['phổ biến','nổi tiếng','được yêu thích']}
    ]
  },

  // ===== DAY 27: Communication + Liên từ and, but, or, so =====
  {
    day: 27,
    topic: "Giao tiếp",
    topicEn: "Communication",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Liên từ and, but, or, so",
      explanation: "Liên từ đẳng lập (Coordinating Conjunctions) nối 2 từ, cụm từ hoặc mệnh đề ngang hàng:\n\n• AND: và (thêm thông tin)\n  - She speaks English and French.\n\n• BUT: nhưng (tương phản)\n  - He listened but did not agree.\n\n• OR: hoặc (lựa chọn)\n  - Do you want to call or send an email?\n\n• SO: vì vậy (kết quả)\n  - She was busy, so she did not reply.\n\n⚠️ Trước and, but, or, so nối 2 mệnh đề → thường có DẤU PHẨY.",
      structure: "S + V, + and/but/or/so + S + V",
      examples: [
        "He explained the plan, and she agreed.",
        "I called him, but he did not answer.",
        "You can speak now, or you can wait.",
        "The meeting was long, so we were tired."
      ],
exceptions: [
        "Khi nối hai mệnh đề độc lập (mỗi vế đều có S + V hoàn chỉnh), bắt buộc phải có <b>dấu phẩy (,)</b> đứng trước liên từ <i>and, but, or, so</i>. Cấu trúc: <code>S + V, so/but/and S + V</code>."
      ],
      notes: [
        "<b>Quy tắc song hành (Parallelism):</b> Các từ hoặc cụm từ được nối bởi liên từ đẳng lập phải đồng dạng với nhau (ví dụ: <i>Noun and Noun</i>, <i>Adj but Adj</i>, <i>V-ing or V-ing</i>). Đây là bẫy ngữ pháp rất hay gặp trong TOEIC."
      ],
            tips: "AND = thêm; BUT = nhưng; OR = hoặc; SO = nên. Nhớ dấu phẩy trước liên từ khi nối 2 câu."
    },
    words: [
      {word:'speak', ipa:'/ˈspik/', meaning:'nói', type:'verb', example:'She speaks English and Vietnamese.', viAnswers:['nói']},
      {word:'listen', ipa:'/ˈɫɪsən/', meaning:'nghe', type:'verb', example:'Please listen carefully.', viAnswers:['nghe','lắng nghe']},
      {word:'tell', ipa:'/ˈtɛɫ/', meaning:'kể / nói cho', type:'verb', example:'Tell me the truth.', viAnswers:['kể','nói cho','bảo']},
      {word:'explain', ipa:'/ɪksˈpɫeɪn/', meaning:'giải thích', type:'verb', example:'He explained the problem, and she understood.', viAnswers:['giải thích']},
      {word:'describe', ipa:'/dɪsˈkɹaɪb/', meaning:'mô tả', type:'verb', example:'Can you describe the situation?', viAnswers:['mô tả','miêu tả']},
      {word:'express', ipa:'/ɪksˈpɹɛs/', meaning:'bày tỏ', type:'verb', example:'She expressed her opinion clearly.', viAnswers:['bày tỏ','diễn đạt','thể hiện']},
      {word:'argue', ipa:'/ˈɑɹɡju/', meaning:'tranh luận', type:'verb', example:'They argued, but they stayed friends.', viAnswers:['tranh luận','cãi nhau']},
      {word:'agree', ipa:'/əˈɡɹi/', meaning:'đồng ý', type:'verb', example:'I agree with your idea.', viAnswers:['đồng ý']},
      {word:'disagree', ipa:'/dɪsəˈɡɹi/', meaning:'không đồng ý', type:'verb', example:'He disagreed, but he was polite.', viAnswers:['không đồng ý']},
      {word:'negotiate', ipa:'/nəˈɡoʊʃiˌeɪt/, /nɪˈɡoʊʃiˌeɪt/', meaning:'thương lượng', type:'verb', example:'They negotiated for two hours.', viAnswers:['thương lượng','đàm phán']},
      {word:'persuade', ipa:'/pɝˈsweɪd/', meaning:'thuyết phục', type:'verb', example:'She persuaded him to join the team.', viAnswers:['thuyết phục']},
      {word:'present', ipa:'/ˈpɹɛzənt/, /pɝˈzɛnt/, /pɹiˈzɛnt/', meaning:'trình bày', type:'verb', example:'He presented the plan, and everyone agreed.', viAnswers:['trình bày','giới thiệu']},
      {word:'announce', ipa:'/əˈnaʊns/', meaning:'thông báo', type:'verb', example:'The manager announced the new policy.', viAnswers:['thông báo','công bố']},
      {word:'inform', ipa:'/ˌɪnˈfɔɹm/', meaning:'thông tin / báo tin', type:'verb', example:'Please inform the team about the meeting.', viAnswers:['thông tin','báo tin','cho biết']},
      {word:'respond', ipa:'/ɹiˈspɑnd/, /ɹɪˈspɑnd/', meaning:'phản hồi', type:'verb', example:'She did not respond, so I called again.', viAnswers:['phản hồi','đáp lại','hồi đáp']},
      {word:'reply', ipa:'/ɹiˈpɫaɪ/, /ɹɪˈpɫaɪ/', meaning:'trả lời', type:'verb / noun', example:'Please reply to the email today.', viAnswers:['trả lời','hồi đáp','phúc đáp']},
      {word:'complain', ipa:'/kəmˈpɫeɪn/', meaning:'phàn nàn', type:'verb', example:'He complained about the service.', viAnswers:['phàn nàn','than phiền','khiếu nại']},
      {word:'apologize', ipa:'/əˈpɑɫəˌdʒaɪz/', meaning:'xin lỗi', type:'verb', example:'She apologized, and he forgave her.', viAnswers:['xin lỗi']},
      {word:'suggest', ipa:'/səˈdʒɛst/', meaning:'đề nghị / gợi ý', type:'verb', example:'I suggest we meet tomorrow.', viAnswers:['đề nghị','gợi ý','đề xuất']},
      {word:'recommend', ipa:'/ˌɹɛkəˈmɛnd/', meaning:'khuyến nghị', type:'verb', example:'I recommend this book to everyone.', viAnswers:['khuyến nghị','đề xuất','giới thiệu']},
      {word:'advise', ipa:'/ædˈvaɪz/, /ədˈvaɪz/', meaning:'khuyên', type:'verb', example:'The doctor advised him to rest.', viAnswers:['khuyên','tư vấn','khuyên bảo']},
      {word:'warn', ipa:'/ˈwɔɹn/', meaning:'cảnh báo', type:'verb', example:'She warned them, but they did not listen.', viAnswers:['cảnh báo']},
      {word:'praise', ipa:'/ˈpɹeɪz/', meaning:'khen ngợi', type:'verb', example:'The boss praised her work.', viAnswers:['khen ngợi','khen','ca ngợi']},
      {word:'criticize', ipa:'/ˈkɹɪtɪˌsaɪz/', meaning:'chỉ trích', type:'verb', example:'Do not criticize, but give advice.', viAnswers:['chỉ trích','phê bình','phê phán']},
      {word:'discuss', ipa:'/dɪˈskəs/', meaning:'thảo luận', type:'verb', example:'We need to discuss this problem.', viAnswers:['thảo luận','bàn luận','bàn bạc']}
    ]
  },

  // ===== DAY 28: Law/Rules + Liên từ because, although, when, if =====
  {
    day: 28,
    topic: "Luật pháp / Quy định",
    topicEn: "Law / Rules",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Liên từ because, although, when, if",
      explanation: "Liên từ phụ thuộc (Subordinating Conjunctions) nối mệnh đề chính với mệnh đề phụ:\n\n• BECAUSE: vì (lý do)\n  - He was fined because he broke the law.\n\n• ALTHOUGH / EVEN THOUGH: mặc dù (tương phản)\n  - Although he was guilty, the penalty was small.\n\n• WHEN: khi (thời gian)\n  - When you sign the contract, read it carefully.\n\n• IF: nếu (điều kiện)\n  - If you violate the rule, you will pay a fine.\n\n⚠️ Mệnh đề phụ thuộc có thể đứng đầu câu (có dấu phẩy) hoặc cuối câu (không cần dấu phẩy).",
      structure: "Because/Although/When/If + S + V, S + V. | S + V + because/although/when/if + S + V.",
      examples: [
        "Because he broke the law, he paid a fine.",
        "Although the rule is strict, everyone must comply.",
        "When the judge arrives, please stand up.",
        "If you sign the contract, you must follow it."
      ],
exceptions: [
        "Phân biệt liên từ (sau đó là mệnh đề S + V) và giới từ tương đương (sau đó là Cụm danh từ / V-ing):",
        "- Nhóm nguyên nhân: <i>because, since, as</i> (liên từ) vs. <i>because of, due to, owing to, as a result of</i> (giới từ).",
        "- Nhóm nhượng bộ: <i>although, even though, though</i> (liên từ) vs. <i>despite, in spite of</i> (giới từ)."
      ],
      notes: [
        "Khi mệnh đề phụ thuộc (chứa liên từ) đứng đầu câu, bắt buộc phải có dấu phẩy ngăn cách giữa hai mệnh đề. Nếu mệnh đề phụ thuộc đứng sau mệnh đề chính, ta không cần dùng dấu phẩy."
      ],
            tips: "BECAUSE = vì; ALTHOUGH = mặc dù; WHEN = khi; IF = nếu. Mệnh đề phụ đầu câu → dấu phẩy."
    },
    words: [
      {word:'law', ipa:'/ˈɫɑ/, /ˈɫɔ/', meaning:'luật', type:'noun', example:'Everyone must follow the law.', viAnswers:['luật','luật pháp','pháp luật']},
      {word:'rule', ipa:'/ˈɹuɫ/', meaning:'quy tắc', type:'noun', example:'If you break the rule, you will be punished.', viAnswers:['quy tắc','quy định','nội quy']},
      {word:'regulation', ipa:'/ˌɹɛɡjəˈɫeɪʃən/', meaning:'quy định', type:'noun', example:'The regulation was changed last year.', viAnswers:['quy định','điều lệ']},
      {word:'policy', ipa:'/ˈpɑɫəsi/', meaning:'chính sách', type:'noun', example:'The company changed its policy.', viAnswers:['chính sách']},
      {word:'legal', ipa:'/ˈɫiɡəɫ/', meaning:'hợp pháp', type:'adjective', example:'This action is legal.', viAnswers:['hợp pháp','thuộc pháp lý']},
      {word:'illegal', ipa:'/ˌɪˈɫiɡəɫ/', meaning:'bất hợp pháp', type:'adjective', example:'It is illegal to drive without a license.', viAnswers:['bất hợp pháp','trái pháp luật','phi pháp']},
      {word:'court', ipa:'/ˈkɔɹt/', meaning:'tòa án', type:'noun', example:'The case went to court.', viAnswers:['tòa án','tòa']},
      {word:'judge', ipa:'/ˈdʒədʒ/', meaning:'thẩm phán', type:'noun', example:'The judge made a decision.', viAnswers:['thẩm phán','quan tòa']},
      {word:'lawyer', ipa:'/ˈɫɔɪɝ/, /ˈɫɔjɝ/', meaning:'luật sư', type:'noun', example:'She hired a lawyer because she needed help.', viAnswers:['luật sư']},
      {word:'contract', ipa:'/ˈkɑnˌtɹækt/, /kənˈtɹækt/', meaning:'hợp đồng', type:'noun', example:'When you sign the contract, read it carefully.', viAnswers:['hợp đồng']},
      {word:'agreement', ipa:'/əˈɡɹimənt/', meaning:'thỏa thuận', type:'noun', example:'Both sides reached an agreement.', viAnswers:['thỏa thuận','sự đồng ý','sự thỏa thuận']},
      {word:'license', ipa:'/ˈɫaɪsəns/', meaning:'giấy phép', type:'noun', example:'You need a license to sell food.', viAnswers:['giấy phép','bằng']},
      {word:'permit', ipa:'/ˈpɝˌmɪt/, /pɝˈmɪt/', meaning:'giấy phép / cho phép', type:'noun / verb', example:'If you have a permit, you can park here.', viAnswers:['giấy phép','cho phép']},
      {word:'violate', ipa:'/ˈvaɪəɫeɪt/', meaning:'vi phạm', type:'verb', example:'If you violate the law, you will be fined.', viAnswers:['vi phạm']},
      {word:'enforce', ipa:'/ɛnˈfɔɹs/', meaning:'thi hành', type:'verb', example:'The police enforce the law.', viAnswers:['thi hành','thực thi']},
      {word:'comply', ipa:'/kəmˈpɫaɪ/', meaning:'tuân thủ', type:'verb', example:'Everyone must comply with the regulations.', viAnswers:['tuân thủ','tuân theo']},
      {word:'require', ipa:'/ˌɹiˈkwaɪɝ/, /ɹiˈkwaɪɹ/, /ɹɪˈkwaɪɝ/', meaning:'yêu cầu', type:'verb', example:'The law requires all drivers to have a license.', viAnswers:['yêu cầu','đòi hỏi']},
      {word:'prohibit', ipa:'/pɹoʊˈhɪbət/', meaning:'cấm', type:'verb', example:'Smoking is prohibited in this building.', viAnswers:['cấm','ngăn cấm']},
      {word:'penalty', ipa:'/ˈpɛnəɫti/', meaning:'hình phạt', type:'noun', example:'The penalty for speeding is a fine.', viAnswers:['hình phạt','án phạt']},
      {word:'fine', ipa:'/ˈfaɪn/', meaning:'tiền phạt / phạt', type:'noun / verb', example:'He paid a fine because he parked illegally.', viAnswers:['tiền phạt','phạt']},
      {word:'guilty', ipa:'/ˈɡɪɫti/', meaning:'có tội', type:'adjective', example:'The judge said he was guilty.', viAnswers:['có tội']},
      {word:'innocent', ipa:'/ˈɪnəsənt/', meaning:'vô tội', type:'adjective', example:'Although he was suspected, he was innocent.', viAnswers:['vô tội']},
      {word:'evidence', ipa:'/ˈɛvədəns/', meaning:'bằng chứng', type:'noun', example:'The lawyer showed the evidence in court.', viAnswers:['bằng chứng','chứng cứ']},
      {word:'witness', ipa:'/ˈwɪtnəs/', meaning:'nhân chứng', type:'noun', example:'The witness told the truth in court.', viAnswers:['nhân chứng','người làm chứng']},
      {word:'sue', ipa:'/ˈsu/', meaning:'kiện', type:'verb', example:'If they do not pay, we will sue them.', viAnswers:['kiện','khởi kiện']}
    ]
  },

  // ===== DAY 29: Manufacturing + Mệnh đề phụ thuộc =====
  {
    day: 29,
    topic: "Sản xuất",
    topicEn: "Manufacturing",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Mệnh đề phụ thuộc (Dependent Clauses)",
      explanation: "Mệnh đề phụ thuộc KHÔNG thể đứng một mình, phải đi kèm mệnh đề chính.\n\nCác loại mệnh đề phụ thuộc:\n1) Mệnh đề chỉ thời gian: when, while, before, after, until, as soon as\n  - When the machine stops, call the supervisor.\n  - We will wait until the parts arrive.\n\n2) Mệnh đề chỉ lý do: because, since, as\n  - Because the quality was poor, we returned the products.\n\n3) Mệnh đề chỉ điều kiện: if, unless\n  - Unless you inspect the equipment, defects may occur.\n\n4) Mệnh đề chỉ tương phản: although, even though\n  - Although the process is slow, the quality is excellent.",
      structure: "When/Before/After/If/Unless/Although + S + V, S + V.",
      examples: [
        "When the machine breaks down, we stop production.",
        "Before we ship the product, we inspect it.",
        "If the quality is poor, we reject the batch.",
        "Although the process is slow, it is very efficient."
      ],
exceptions: [
        "Trong các mệnh đề trạng ngữ chỉ thời gian hoặc điều kiện (bắt đầu bằng <i>when, as soon as, if, unless, before, after</i>), động từ được chia ở <b>thì hiện tại đơn</b> ngay cả khi hành động đó diễn ra ở tương lai. Không dùng <i>will</i> trong mệnh đề này. Ví dụ: <i>I will call you when I will arrive</i> ❌ -> <i>I will call you when I arrive</i> ✅."
      ],
      notes: [
        "Mệnh đề phụ thuộc không bao giờ có thể đứng độc lập làm một câu hoàn chỉnh, nó bắt buộc phải đi kèm và bổ nghĩa cho một mệnh đề chính."
      ],
            tips: "Mệnh đề phụ thuộc = liên từ + S + V. Luôn cần mệnh đề chính để hoàn chỉnh câu."
    },
    words: [
      {word:'factory', ipa:'/ˈfæktɝi/', meaning:'nhà máy', type:'noun', example:'The factory operates 24 hours a day.', viAnswers:['nhà máy','xưởng']},
      {word:'machine', ipa:'/məˈʃin/', meaning:'máy móc', type:'noun', example:'When the machine stops, call the technician.', viAnswers:['máy móc','máy','cái máy']},
      {word:'equipment', ipa:'/ɪˈkwɪpmənt/', meaning:'thiết bị', type:'noun', example:'The equipment is very expensive.', viAnswers:['thiết bị','trang thiết bị']},
      {word:'tool', ipa:'/ˈtuɫ/', meaning:'dụng cụ', type:'noun', example:'Use the right tool for each task.', viAnswers:['dụng cụ','công cụ']},
      {word:'material', ipa:'/məˈtɪɹiəɫ/', meaning:'nguyên liệu / vật liệu', type:'noun', example:'We need raw materials to start production.', viAnswers:['nguyên liệu','vật liệu','chất liệu']},
      {word:'produce', ipa:'/ˈpɹoʊdus/, /pɹəˈdus/', meaning:'sản xuất', type:'verb', example:'This factory produces 500 units a day.', viAnswers:['sản xuất']},
      {word:'manufacture', ipa:'/ˌmænjəˈfæktʃɝ/', meaning:'chế tạo / sản xuất', type:'verb', example:'The company manufactures car parts.', viAnswers:['chế tạo','sản xuất']},
      {word:'assemble', ipa:'/əˈsɛmbəɫ/', meaning:'lắp ráp', type:'verb', example:'Workers assemble the products by hand.', viAnswers:['lắp ráp']},
      {word:'quality', ipa:'/ˈkwɑɫəti/', meaning:'chất lượng', type:'noun', example:'If the quality is good, customers are happy.', viAnswers:['chất lượng']},
      {word:'defect', ipa:'/ˈdifɛkt/, /dɪˈfɛkt/', meaning:'lỗi / khuyết điểm', type:'noun', example:'We found a defect in the product.', viAnswers:['lỗi','khuyết điểm','lỗi sản phẩm']},
      {word:'inspect', ipa:'/ˌɪnˈspɛkt/', meaning:'kiểm tra', type:'verb', example:'Before we ship, we inspect every item.', viAnswers:['kiểm tra','thanh tra']},
      {word:'standard', ipa:'/ˈstændɝd/', meaning:'tiêu chuẩn', type:'noun', example:'The product must meet safety standards.', viAnswers:['tiêu chuẩn']},
      {word:'process', ipa:'/ˈpɹɑˌsɛs/, /ˈpɹɔˌsɛs/', meaning:'quy trình', type:'noun', example:'The manufacturing process takes three days.', viAnswers:['quy trình','quá trình']},
      {word:'output', ipa:'/ˈaʊtˌpʊt/', meaning:'sản lượng', type:'noun', example:'The output increased after we got new machines.', viAnswers:['sản lượng','đầu ra']},
      {word:'efficient', ipa:'/ɪˈfɪʃənt/', meaning:'hiệu quả', type:'adjective', example:'This machine is very efficient.', viAnswers:['hiệu quả']},
      {word:'warehouse', ipa:'/ˈwɛɹˌhaʊs/', meaning:'nhà kho', type:'noun', example:'The products are stored in the warehouse.', viAnswers:['nhà kho','kho hàng','kho']},
      {word:'inventory', ipa:'/ˌɪnvənˈtɔɹi/', meaning:'hàng tồn kho', type:'noun', example:'We check the inventory every week.', viAnswers:['hàng tồn kho','tồn kho','kiểm kê']},
      {word:'supply', ipa:'/səˈpɫaɪ/', meaning:'cung cấp', type:'verb / noun', example:'The company supplies parts to factories.', viAnswers:['cung cấp','nguồn cung']},
      {word:'demand', ipa:'/dɪˈmænd/', meaning:'nhu cầu', type:'noun', example:'The demand for this product is very high.', viAnswers:['nhu cầu','yêu cầu']},
      {word:'raw', ipa:'/ˈɹɑ/', meaning:'thô / chưa qua chế biến', type:'adjective', example:'We import raw materials from abroad.', viAnswers:['thô','chưa qua chế biến','nguyên liệu thô']},
      {word:'component', ipa:'/kəmˈpoʊnənt/', meaning:'linh kiện / bộ phận', type:'noun', example:'Each component is tested before assembly.', viAnswers:['linh kiện','bộ phận','thành phần']},
      {word:'automate', ipa:'/ˈɔtəˌmeɪt/', meaning:'tự động hóa', type:'verb', example:'We plan to automate the production line.', viAnswers:['tự động hóa']},
      {word:'operate', ipa:'/ˈɑpɝˌeɪt/, /ˈɔpɝˌeɪt/', meaning:'vận hành', type:'verb', example:'He operates the machine every day.', viAnswers:['vận hành','hoạt động','điều hành']},
      {word:'maintain', ipa:'/meɪnˈteɪn/', meaning:'bảo trì', type:'verb', example:'We maintain the equipment every month.', viAnswers:['bảo trì','duy trì','bảo dưỡng']},
      {word:'safety', ipa:'/ˈseɪfti/', meaning:'an toàn', type:'noun', example:'Safety is the most important rule in the factory.', viAnswers:['an toàn','sự an toàn']}
    ]
  },

  // ===== DAY 30: Marketing + Câu bị động =====
  {
    day: 30,
    topic: "Tiếp thị",
    topicEn: "Marketing",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Câu bị động (Passive Voice) - Cơ bản",
      explanation: "Câu bị động được dùng khi ta muốn nhấn mạnh vào đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.\n\nCác bước chuyển câu chủ động sang bị động:\n- Bước 1: Lấy Tân ngữ (O) của câu chủ động làm Chủ ngữ (S) của câu bị động.\n- Bước 2: Chia động từ be theo thì của câu chủ động và theo số của chủ ngữ mới.\n- Bước 3: Đổi động từ chính sang dạng Phân từ 2 (V3 hoặc thêm -ed).\n- Bước 4: Chuyển Chủ ngữ (S) của câu chủ động thành Tân ngữ sau giới từ by (by + O). Có thể lược bỏ by him, by her, by them, by people... nếu không quan trọng.\n\nCấu trúc bị động ở Thì Hiện tại đơn và Quá khứ đơn:\n- 1. Hiện tại đơn: S + am/is/are + V3/V-ed\n  + Chủ động: The manager checks the report.\n  + Bị động: The report is checked by the manager.\n- 2. Quá khứ đơn: S + was/were + V3/V-ed\n  + Chủ động: They built this house in 2010.\n  + Bị động: This house was built in 2010.",
      structure: "S + be + V3/V-ed (+ by O)",
      examples: [
        "Emails are sent every morning. (Thư điện tử được gửi đi mỗi sáng.)",
        "The project was approved yesterday. (Dự án đã được phê duyệt ngày hôm qua.)",
        "English is spoken all over the world. (Tiếng Anh được nói trên toàn thế giới.)"
      ],
exceptions: [
        "<b>Không chia bị động với Nội động từ:</b> Các nội động từ (intransitive verbs) như <i>happen, occur, exist, remain, rise, fall, arrive, look, seem</i> không bao giờ được chia ở dạng bị động. Ví dụ: viết <i>The accident was occurred</i> ❌ -> <i>The accident occurred</i> ✅."
      ],
      notes: [
        "<b>Mẹo làm nhanh TOEIC:</b> Nhìn phía sau chỗ trống cần điền động từ. Nếu có Danh từ làm Tân ngữ thì chọn câu <b>Chủ động</b>. Nếu không có danh từ (thường là giới từ, trạng từ hoặc hết câu) thì chọn câu <b>Bị động</b>."
      ],
            tips: "Mẹo: Trong đề thi TOEIC, nếu sau khoảng trống có danh từ làm tân ngữ, câu đó thường ở dạng Chủ động. Nếu sau khoảng trống là giới từ (by, to, in...) hoặc không có danh từ nào, câu đó thường ở dạng Bị động."
    },
    words: [
      {word:'advertise', ipa:'/ˈædvɝˌtaɪz/', meaning:'quảng cáo', type:'verb', example:'The product is advertised on TV.', viAnswers:['quảng cáo']},
      {word:'promote', ipa:'/pɹəˈmoʊt/', meaning:'quảng bá / thăng chức', type:'verb', example:'The new phone is promoted online.', viAnswers:['quảng bá','thăng chức','xúc tiến']},
      {word:'brand', ipa:'/ˈbɹænd/', meaning:'thương hiệu', type:'noun', example:'This brand is known worldwide.', viAnswers:['thương hiệu','nhãn hiệu']},
      {word:'market', ipa:'/ˈmɑɹkət/, /ˈmɑɹkɪt/', meaning:'thị trường / tiếp thị', type:'noun / verb', example:'The product is marketed to young people.', viAnswers:['thị trường','tiếp thị']},
      {word:'campaign', ipa:'/kæmˈpeɪn/', meaning:'chiến dịch', type:'noun', example:'The campaign was launched last month.', viAnswers:['chiến dịch']},
      {word:'target', ipa:'/ˈtɑɹɡət/, /ˈtɝɡət/', meaning:'mục tiêu / nhắm đến', type:'noun / verb', example:'Young customers are targeted by this ad.', viAnswers:['mục tiêu','nhắm đến','đối tượng']},
      {word:'consumer', ipa:'/kənˈsumɝ/', meaning:'người tiêu dùng', type:'noun', example:'Consumers are attracted by low prices.', viAnswers:['người tiêu dùng']},
      {word:'compete', ipa:'/kəmˈpit/', meaning:'cạnh tranh', type:'verb', example:'Many companies compete in this market.', viAnswers:['cạnh tranh']},
      {word:'strategy', ipa:'/ˈstɹætədʒi/', meaning:'chiến lược', type:'noun', example:'A new strategy was developed.', viAnswers:['chiến lược']},
      {word:'launch', ipa:'/ˈɫɔntʃ/', meaning:'ra mắt / khởi động', type:'verb', example:'The product was launched in January.', viAnswers:['ra mắt','khởi động','tung ra']},
      {word:'survey', ipa:'/ˈsɝˌveɪ/, /sɝˈveɪ/', meaning:'khảo sát', type:'noun / verb', example:'A survey was conducted last week.', viAnswers:['khảo sát','cuộc khảo sát']},
      {word:'trend', ipa:'/ˈtɹɛnd/', meaning:'xu hướng', type:'noun', example:'New trends are analyzed by the team.', viAnswers:['xu hướng']},
      {word:'research', ipa:'/ˈɹisɝtʃ/, /ɹiˈsɝtʃ/', meaning:'nghiên cứu', type:'noun / verb', example:'The research was published online.', viAnswers:['nghiên cứu']},
      {word:'analyze', ipa:'/ˈænəˌɫaɪz/', meaning:'phân tích', type:'verb', example:'The data is analyzed every month.', viAnswers:['phân tích']},
      {word:'attract', ipa:'/əˈtɹækt/', meaning:'thu hút', type:'verb', example:'Customers are attracted by the new design.', viAnswers:['thu hút']},
      {word:'engage', ipa:'/ɛnˈɡeɪdʒ/', meaning:'thu hút / gắn kết', type:'verb', example:'Users are engaged through social media.', viAnswers:['thu hút','gắn kết','tương tác']},
      {word:'influence', ipa:'/ˈɪnfɫuəns/', meaning:'ảnh hưởng', type:'verb / noun', example:'Buying decisions are influenced by ads.', viAnswers:['ảnh hưởng','tác động']},
      {word:'social', ipa:'/ˈsoʊʃəɫ/', meaning:'xã hội', type:'adjective', example:'Social media is used for marketing.', viAnswers:['xã hội']},
      {word:'media', ipa:'/ˈmidiə/', meaning:'phương tiện truyền thông', type:'noun', example:'The news was reported by the media.', viAnswers:['phương tiện truyền thông','truyền thông']},
      {word:'content', ipa:'/ˈkɑntɛnt/, /kənˈtɛnt/', meaning:'nội dung', type:'noun', example:'New content is created every week.', viAnswers:['nội dung']},
      {word:'logo', ipa:'/ˈɫoʊɡoʊ/', meaning:'biểu tượng', type:'noun', example:'The logo was designed by a famous artist.', viAnswers:['biểu tượng','logo']},
      {word:'slogan', ipa:'/ˈsɫoʊɡən/', meaning:'khẩu hiệu', type:'noun', example:'A new slogan was chosen for the campaign.', viAnswers:['khẩu hiệu','slogan']},
      {word:'sponsor', ipa:'/ˈspɑnsɝ/', meaning:'tài trợ', type:'verb / noun', example:'The event is sponsored by a big company.', viAnswers:['tài trợ','nhà tài trợ']},
      {word:'distribute', ipa:'/dɪˈstɹɪbjut/', meaning:'phân phối', type:'verb', example:'The products are distributed nationwide.', viAnswers:['phân phối']},
      {word:'feedback', ipa:'/ˈfidˌbæk/', meaning:'phản hồi', type:'noun', example:'Customer feedback is collected every day.', viAnswers:['phản hồi','ý kiến phản hồi']}
    ]
  },

  // ===== DAY 31: Human Resources + Bị động thì hiện tại/quá khứ =====
  {
    day: 31,
    topic: "Nhân sự",
    topicEn: "Human Resources",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Bị động các thì tiếp diễn và hoàn thành",
      explanation: "Cấu trúc bị động ở các thì phức tạp hơn:\n\n1. Bị động thì Hiện tại tiếp diễn: S + am/is/are + being + V3/V-ed\n- Chủ động: She is writing a letter.\n- Bị động: A letter is being written by her.\n\n2. Bị động thì Quá khứ tiếp diễn: S + was/were + being + V3/V-ed\n- Chủ động: They were repainting the office.\n- Bị động: The office was being repainted.\n\n3. Bị động thì Hiện tại hoàn thành: S + have/has + been + V3/V-ed\n- Chủ động: The company has launched a new product.\n- Bị động: A new product has been launched by the company.",
      structure: "S + am/is/are + being + V3 | S + was/were + being + V3 | S + have/has + been + V3",
      examples: [
        "The road is being repaired at the moment. (Con đường đang được sửa chữa ngay lúc này.)",
        "Our computers have been upgraded recently. (Máy tính của chúng tôi đã được nâng cấp gần đây.)",
        "The report was being typed when the power went out. (Bản báo cáo đang được gõ thì mất điện.)"
      ],
exceptions: [
        "Bị động thì hiện tại hoàn thành có cấu trúc: <code>S + have/has + been + V3/V-ed</code>. Tránh nhầm lẫn bỏ sót từ <b>been</b> dẫn đến viết sai thành câu chủ động."
      ],
      notes: [
        "Bị động thì tiếp diễn luôn chứa từ <b>being</b> ngay trước động từ phân từ 2: <code>S + am/is/are/was/were + being + V3/V-ed</code>. Mẹo nhớ: 'Tiếp diễn cần -ing -> dùng being'."
      ],
            tips: "Mẹo: Để nhận biết bị động tiếp diễn, hãy tìm các dấu hiệu như at the moment, right now, currently. Với bị động hoàn thành, tìm các từ already, recently, lately, since, for."
    },
    words: [
      {word:'hire', ipa:'/ˈhaɪɝ/, /ˈhaɪɹ/', meaning:'thuê / tuyển dụng', type:'verb', example:'A new employee was hired yesterday.', viAnswers:['thuê','tuyển dụng','tuyển']},
      {word:'recruit', ipa:'/ɹəˈkɹut/, /ɹiˈkɹut/, /ɹɪˈkɹut/', meaning:'tuyển dụng', type:'verb', example:'New staff are recruited every year.', viAnswers:['tuyển dụng','tuyển mộ']},
      {word:'interview', ipa:'/ˈɪntɝvˌju/', meaning:'phỏng vấn', type:'verb / noun', example:'She was interviewed for the position.', viAnswers:['phỏng vấn']},
      {word:'resume', ipa:'/ˈɹɛzəˌmeɪ/, /ɹiˈzum/, /ɹɪˈzum/', meaning:'sơ yếu lý lịch', type:'noun', example:'Please submit your resume online.', viAnswers:['sơ yếu lý lịch','hồ sơ','lý lịch']},
      {word:'qualify', ipa:'/ˈkwɑɫəˌfaɪ/', meaning:'đủ điều kiện', type:'verb', example:'He is qualified for this position.', viAnswers:['đủ điều kiện','đạt tiêu chuẩn']},
      {word:'experience', ipa:'/ɪkˈspɪɹiəns/', meaning:'kinh nghiệm', type:'noun', example:'Five years of experience is required.', viAnswers:['kinh nghiệm']},
      {word:'benefit', ipa:'/ˈbɛnəfɪt/', meaning:'phúc lợi / lợi ích', type:'noun', example:'Health benefits are provided to all employees.', viAnswers:['phúc lợi','lợi ích']},
      {word:'insurance', ipa:'/ˌɪnˈʃʊɹəns/', meaning:'bảo hiểm', type:'noun', example:'Health insurance is offered to all staff.', viAnswers:['bảo hiểm']},
      {word:'vacation', ipa:'/veɪˈkeɪʃən/', meaning:'kỳ nghỉ', type:'noun', example:'Two weeks of vacation are given each year.', viAnswers:['kỳ nghỉ','nghỉ phép']},
      {word:'retire', ipa:'/ˌɹiˈtaɪɝ/, /ɹiˈtaɪɹ/, /ɹɪˈtaɪɹ/', meaning:'nghỉ hưu', type:'verb', example:'He retired after 30 years of work.', viAnswers:['nghỉ hưu','về hưu']},
      {word:'promote', ipa:'/pɹəˈmoʊt/', meaning:'thăng chức', type:'verb', example:'She was promoted to manager last month.', viAnswers:['thăng chức','đề bạt']},
      {word:'transfer', ipa:'/ˈtɹænsfɝ/, /tɹænsˈfɝ/', meaning:'chuyển', type:'verb', example:'He was transferred to the Hanoi office.', viAnswers:['chuyển','điều chuyển','chuyển công tác']},
      {word:'evaluate', ipa:'/iˈvæɫjuˌeɪt/, /ɪˈvæɫjuˌeɪt/', meaning:'đánh giá', type:'verb', example:'Employees are evaluated every six months.', viAnswers:['đánh giá']},
      {word:'performance', ipa:'/pɝˈfɔɹməns/', meaning:'hiệu suất', type:'noun', example:'Her performance was excellent this year.', viAnswers:['hiệu suất','kết quả làm việc','thành tích']},
      {word:'training', ipa:'/ˈtɹeɪnɪŋ/', meaning:'đào tạo', type:'noun', example:'Training is provided for all new staff.', viAnswers:['đào tạo','huấn luyện']},
      {word:'orientation', ipa:'/ˌɔɹiɛnˈteɪʃən/', meaning:'định hướng', type:'noun', example:'Orientation was held on Monday.', viAnswers:['định hướng','buổi giới thiệu']},
      {word:'policy', ipa:'/ˈpɑɫəsi/', meaning:'chính sách', type:'noun', example:'Company policies are updated every year.', viAnswers:['chính sách']},
      {word:'diversity', ipa:'/daɪˈvɝsɪti/, /dɪˈvɝsɪti/', meaning:'đa dạng', type:'noun', example:'Diversity is valued in our company.', viAnswers:['đa dạng','sự đa dạng']},
      {word:'workplace', ipa:'/ˈwɝkˌpɫeɪs/', meaning:'nơi làm việc', type:'noun', example:'The workplace is kept clean every day.', viAnswers:['nơi làm việc']},
      {word:'complaint', ipa:'/kəmˈpɫeɪnt/', meaning:'lời phàn nàn', type:'noun', example:'The complaint was handled quickly.', viAnswers:['lời phàn nàn','khiếu nại','sự phàn nàn']},
      {word:'discipline', ipa:'/ˈdɪsəpɫən/', meaning:'kỷ luật', type:'noun / verb', example:'He was disciplined for being late.', viAnswers:['kỷ luật']},
      {word:'resign', ipa:'/ɹiˈsaɪn/, /ɹiˈzaɪn/, /ɹɪˈzaɪn/', meaning:'từ chức', type:'verb', example:'She resigned from her job last week.', viAnswers:['từ chức','nghỉ việc']},
      {word:'terminate', ipa:'/ˈtɝməˌneɪt/', meaning:'chấm dứt', type:'verb', example:'His contract was terminated in March.', viAnswers:['chấm dứt','sa thải']},
      {word:'reference', ipa:'/ˈɹɛfɝəns/, /ˈɹɛfɹəns/', meaning:'tham chiếu / người giới thiệu', type:'noun', example:'References are checked before hiring.', viAnswers:['tham chiếu','người giới thiệu','tài liệu tham khảo']},
      {word:'compensation', ipa:'/ˌkɑmpənˈseɪʃən/', meaning:'đền bù / lương thưởng', type:'noun', example:'Fair compensation is offered to all employees.', viAnswers:['đền bù','lương thưởng','bồi thường']}
    ]
  },

  // ===== DAY 32: Banking + Bị động với will/can/must =====
  {
    day: 32,
    topic: "Ngân hàng",
    topicEn: "Banking",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Bị động với Động từ khuyết thiếu (Modal Verbs)",
      explanation: "Động từ khuyết thiếu gồm: will, can, could, must, should, may, might, have to, ought to.\n\n- Trong câu chủ động, sau động từ khuyết thiếu là động từ nguyên mẫu không to (S + Modal Verb + V-inf).\n- Trong câu bị động, cấu trúc biến đổi thành: S + Modal Verb + be + V3/V-ed.\n  + Chủ động: You must submit the report.\n  + Bị động: The report must be submitted.\n  + Chủ động: We will hold the meeting tomorrow.\n  + Bị động: The meeting will be held tomorrow.",
      structure: "S + Modal Verb (will/can/must/should...) + be + V3/V-ed",
      examples: [
        "The package will be delivered tomorrow. (Bưu phẩm sẽ được giao vào ngày mai.)",
        "This document must be signed by the director. (Tài liệu này bắt buộc phải được ký bởi giám đốc.)",
        "Employees should be trained before working. (Nhân viên nên được đào tạo trước khi làm việc.)",
        "The issue can be resolved easily. (Vấn đề có thể được giải quyết dễ dàng.)"
      ],
exceptions: [
        "Cấu trúc bị động với động từ khuyết thiếu: <code>S + can/must/should/will... + be + V3/V-ed</code>. Lưu ý từ <b>be</b> trong cấu trúc này luôn giữ nguyên mẫu, không được chia thành <i>is/are/was/were</i>."
      ],
      notes: [
        "Tránh nhầm lẫn dạng bị động hoàn thành của động từ khuyết thiếu (dùng cho dự đoán quá khứ): <code>S + modal verb + have been + V3/V-ed</code> (ví dụ: <i>should have been done</i>)."
      ],
            tips: "Mẹo: Sau các từ khuyết thiếu will, must, should, can, nếu chọn thể bị động thì cấu trúc luôn luôn có dạng be + V3/V-ed (giữ nguyên chữ be)."
    },
    words: [
      {word:'bank', ipa:'/ˈbæŋk/', meaning:'ngân hàng', type:'noun', example:'The bank will be closed on Sunday.', viAnswers:['ngân hàng']},
      {word:'branch', ipa:'/ˈbɹæntʃ/', meaning:'chi nhánh', type:'noun', example:'A new branch will be opened next month.', viAnswers:['chi nhánh']},
      {word:'teller', ipa:'/ˈtɛɫɝ/', meaning:'nhân viên giao dịch', type:'noun', example:'The teller can help you with the deposit.', viAnswers:['nhân viên giao dịch','giao dịch viên']},
      {word:'check', ipa:'/ˈtʃɛk/', meaning:'séc / kiểm tra', type:'noun / verb', example:'The check must be signed before deposit.', viAnswers:['séc','kiểm tra']},
      {word:'deposit', ipa:'/dəˈpɑzɪt/, /dɪˈpɑzət/', meaning:'gửi tiền', type:'verb / noun', example:'Money can be deposited at any branch.', viAnswers:['gửi tiền','tiền gửi','đặt cọc']},
      {word:'withdraw', ipa:'/wɪðˈdɹɔ/, /wɪθˈdɹɔ/', meaning:'rút tiền', type:'verb', example:'Cash can be withdrawn from the ATM.', viAnswers:['rút tiền','rút']},
      {word:'transfer', ipa:'/ˈtɹænsfɝ/, /tɹænsˈfɝ/', meaning:'chuyển khoản', type:'verb / noun', example:'The funds will be transferred today.', viAnswers:['chuyển khoản','chuyển']},
      {word:'loan', ipa:'/ˈɫoʊn/', meaning:'khoản vay', type:'noun', example:'The loan must be repaid in 5 years.', viAnswers:['khoản vay','tiền vay']},
      {word:'mortgage', ipa:'/ˈmɔɹɡədʒ/, /ˈmɔɹɡɪdʒ/', meaning:'thế chấp', type:'noun', example:'The mortgage can be paid monthly.', viAnswers:['thế chấp','vay thế chấp']},
      {word:'interest', ipa:'/ˈɪntɝəst/, /ˈɪntɝɪst/, /ˈɪntɹəst/, /ˈɪntɹɪst/', meaning:'lãi suất', type:'noun', example:'Interest will be calculated monthly.', viAnswers:['lãi suất','tiền lãi']},
      {word:'credit', ipa:'/ˈkɹɛdət/, /ˈkɹɛdɪt/', meaning:'tín dụng', type:'noun', example:'Your credit score should be checked.', viAnswers:['tín dụng']},
      {word:'debit', ipa:'/ˈdɛbɪt/', meaning:'ghi nợ', type:'noun / adjective', example:'The amount will be debited from your account.', viAnswers:['ghi nợ','thẻ ghi nợ']},
      {word:'statement', ipa:'/ˈsteɪtmənt/', meaning:'sao kê', type:'noun', example:'Your statement can be downloaded online.', viAnswers:['sao kê','bảng sao kê']},
      {word:'balance', ipa:'/ˈbæɫəns/', meaning:'số dư', type:'noun', example:'Your balance should be checked regularly.', viAnswers:['số dư','cân bằng']},
      {word:'fee', ipa:'/ˈfi/', meaning:'phí', type:'noun', example:'A small fee will be charged.', viAnswers:['phí','lệ phí']},
      {word:'exchange', ipa:'/ɪksˈtʃeɪndʒ/', meaning:'trao đổi / đổi', type:'verb / noun', example:'Currency can be exchanged at the bank.', viAnswers:['trao đổi','đổi','đổi tiền']},
      {word:'currency', ipa:'/ˈkɝənsi/', meaning:'tiền tệ', type:'noun', example:'Foreign currency can be bought here.', viAnswers:['tiền tệ','ngoại tệ','đồng tiền']},
      {word:'save', ipa:'/ˈseɪv/', meaning:'tiết kiệm', type:'verb', example:'Money should be saved every month.', viAnswers:['tiết kiệm','để dành']},
      {word:'invest', ipa:'/ˌɪnˈvɛst/', meaning:'đầu tư', type:'verb', example:'Your money can be invested in stocks.', viAnswers:['đầu tư']},
      {word:'portfolio', ipa:'/pɔɹtˈfoʊɫiˌoʊ/', meaning:'danh mục đầu tư', type:'noun', example:'Your portfolio should be reviewed yearly.', viAnswers:['danh mục đầu tư']},
      {word:'asset', ipa:'/ˈæˌsɛt/', meaning:'tài sản', type:'noun', example:'All assets must be reported.', viAnswers:['tài sản']},
      {word:'liability', ipa:'/ˌɫaɪəˈbɪɫɪti/', meaning:'nợ phải trả / trách nhiệm', type:'noun', example:'Liabilities must be listed in the report.', viAnswers:['nợ phải trả','trách nhiệm pháp lý','trách nhiệm']},
      {word:'fraud', ipa:'/ˈfɹɔd/', meaning:'gian lận', type:'noun', example:'Fraud must be reported to the police.', viAnswers:['gian lận','lừa đảo']},
      {word:'secure', ipa:'/sɪkˈjʊɹ/', meaning:'an toàn / bảo mật', type:'adjective / verb', example:'Your account must be secured with a password.', viAnswers:['an toàn','bảo mật']},
      {word:'transaction', ipa:'/tɹænˈzækʃən/', meaning:'giao dịch', type:'noun', example:'Every transaction will be recorded.', viAnswers:['giao dịch']}
    ]
  },

  // ===== DAY 33: Quality/Service + So sánh hơn =====
  {
    day: 33,
    topic: "Chất lượng / Dịch vụ",
    topicEn: "Quality / Service",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "So sánh hơn (Comparatives)",
      explanation: "So sánh hơn được dùng để so sánh giữa 2 người hoặc 2 vật.\n\nPhân biệt Tính từ ngắn và Tính từ dài:\n- Tính từ ngắn: Có 1 âm tiết (tall, short, big, fast), hoặc có 2 âm tiết kết thúc bằng -y, -le, -ow, -er, -et (happy, simple, narrow, clever, quiet).\n- Tính từ dài: Có từ 2 âm tiết trở lên (expensive, beautiful, difficult, professional).\n\n1. Công thức với tính từ ngắn: S + V + Adj-er + than + O\n- Cách thêm đuôi -er: tall -> taller; kết thúc bằng e chỉ thêm r (large -> larger); phụ âm + y đổi thành i-er (happy -> happier); CVC gấp đôi phụ âm cuối (big -> bigger).\n\n2. Công thức với tính từ dài: S + V + more + Adj + than + O\n- Ví dụ: more expensive than, more professional than.\n- So sánh kém hơn: less + Adj + than. Ví dụ: less difficult than.\n\n3. Các tính từ so sánh bất quy tắc (Bắt buộc thuộc lòng):\n- good/well -> better (tốt hơn)\n- bad/badly -> worse (tệ hơn)\n- far -> farther (khoảng cách vật lý) / further (chi tiết hơn, sâu hơn. Ví dụ: further information).\n- many/much -> more (nhiều hơn)\n- little -> less (ít hơn)",
      structure: "S1 + V + Adj-er + than + S2 | S1 + V + more + Adj + than + S2",
      examples: [
        "This laptop is faster than that one. (Chiếc laptop này nhanh hơn chiếc kia.)",
        "Traveling by plane is more expensive than by train. (Đi máy bay thì đắt hơn đi tàu hỏa.)",
        "If you need further information, please contact us. (Nếu bạn cần thêm thông tin chi tiết, vui lòng liên hệ chúng tôi.)",
        "He does his job better than his coworker. (Anh ấy làm công việc của mình tốt hơn đồng nghiệp.)"
      ],
exceptions: [
        "Một số tính từ/trạng từ biến đổi so sánh hơn bất quy tắc: <i>good/well -> better</i>, <i>bad/badly -> worse</i>, <i>many/much -> more</i>, <i>little -> less</i>, <i>far -> farther</i> (khoảng cách vật lý) / <i>further</i> (sâu hơn, thêm nữa).",
        "Tính từ 2 âm tiết kết thúc bằng đuôi <b>-y</b> vẫn được coi là tính từ ngắn: đổi <b>y</b> thành <b>i</b> rồi thêm <b>-er</b> (ví dụ: <i>easy -> easier</i>, <i>happy -> happier</i>)."
      ],
      notes: [
        "Bắt buộc phải có từ <b>than</b> đứng phía sau tính từ/trạng từ so sánh trong so sánh hơn.",
        "Có thể thêm các trạng từ bổ nghĩa đứng trước so sánh hơn để nhấn mạnh mức độ: <i>much, far, significantly, substantially, slightly</i> (ví dụ: <i>much better, significantly higher</i>)."
      ],
            tips: "Mẹo: Nếu trong câu có từ than, chắc chắn phải chọn so sánh hơn (Adj-er hoặc more + Adj). Các từ much, far, significantly, slightly đứng trước so sánh hơn để nhấn mạnh (ví dụ: much cheaper)."
    },
    words: [
      {word:'quality', ipa:'/ˈkwɑɫəti/', meaning:'chất lượng', type:'noun', example:'The quality is better than before.', viAnswers:['chất lượng']},
      {word:'standard', ipa:'/ˈstændɝd/', meaning:'tiêu chuẩn', type:'noun', example:'Our standard is higher than last year.', viAnswers:['tiêu chuẩn']},
      {word:'excellent', ipa:'/ˈɛksəɫənt/', meaning:'xuất sắc', type:'adjective', example:'The service is excellent.', viAnswers:['xuất sắc','tuyệt vời']},
      {word:'superior', ipa:'/suˈpɪɹiɝ/', meaning:'vượt trội', type:'adjective', example:'This product is superior to others.', viAnswers:['vượt trội','cao cấp hơn','ưu việt']},
      {word:'inferior', ipa:'/ˌɪnˈfɪɹiɝ/', meaning:'kém hơn', type:'adjective', example:'This material is inferior to the original.', viAnswers:['kém hơn','thấp kém']},
      {word:'compare', ipa:'/kəmˈpɛɹ/', meaning:'so sánh', type:'verb', example:'Compare the prices before buying.', viAnswers:['so sánh']},
      {word:'improve', ipa:'/ˌɪmˈpɹuv/', meaning:'cải thiện', type:'verb', example:'The service improved and is better now.', viAnswers:['cải thiện','cải tiến']},
      {word:'enhance', ipa:'/ɛnˈhæns/', meaning:'nâng cao', type:'verb', example:'We enhanced the product to make it more reliable.', viAnswers:['nâng cao','tăng cường']},
      {word:'upgrade', ipa:'/ˈəpˈɡɹeɪd/, /əpˈɡɹeɪd/', meaning:'nâng cấp', type:'verb / noun', example:'The system was upgraded to a faster version.', viAnswers:['nâng cấp']},
      {word:'maintain', ipa:'/meɪnˈteɪn/', meaning:'bảo trì / duy trì', type:'verb', example:'We maintain a higher standard than our competitors.', viAnswers:['bảo trì','duy trì','bảo dưỡng']},
      {word:'satisfy', ipa:'/ˈsætəsˌfaɪ/, /ˈsætɪsˌfaɪ/', meaning:'làm hài lòng', type:'verb', example:'We want to satisfy more customers.', viAnswers:['làm hài lòng','thỏa mãn']},
      {word:'reliable', ipa:'/ɹiˈɫaɪəbəɫ/, /ɹɪˈɫaɪəbəɫ/', meaning:'đáng tin cậy', type:'adjective', example:'This brand is more reliable than others.', viAnswers:['đáng tin cậy','tin cậy']},
      {word:'durable', ipa:'/ˈdʊɹəbəɫ/', meaning:'bền', type:'adjective', example:'This material is more durable than plastic.', viAnswers:['bền','bền bỉ']},
      {word:'efficient', ipa:'/ɪˈfɪʃənt/', meaning:'hiệu quả', type:'adjective', example:'The new system is more efficient than the old one.', viAnswers:['hiệu quả']},
      {word:'effective', ipa:'/ˈifɛktɪv/, /ɪˈfɛktɪv/', meaning:'có hiệu lực / hiệu quả', type:'adjective', example:'This method is more effective than the old one.', viAnswers:['có hiệu lực','hiệu quả']},
      {word:'performance', ipa:'/pɝˈfɔɹməns/', meaning:'hiệu suất', type:'noun', example:'The performance is better this quarter.', viAnswers:['hiệu suất','kết quả','thành tích']},
      {word:'warranty', ipa:'/ˈwɔɹənti/', meaning:'bảo hành', type:'noun', example:'This product has a longer warranty.', viAnswers:['bảo hành']},
      {word:'guarantee', ipa:'/ˌɡɛɹənˈti/', meaning:'bảo đảm', type:'noun / verb', example:'We guarantee better quality than before.', viAnswers:['bảo đảm','cam kết']},
      {word:'complaint', ipa:'/kəmˈpɫeɪnt/', meaning:'lời phàn nàn', type:'noun', example:'There are fewer complaints than last year.', viAnswers:['lời phàn nàn','khiếu nại','sự phàn nàn']},
      {word:'resolve', ipa:'/ɹiˈzɑɫv/', meaning:'giải quyết', type:'verb', example:'We resolve problems faster than before.', viAnswers:['giải quyết']},
      {word:'professional', ipa:'/pɹəˈfɛʃənəɫ/', meaning:'chuyên nghiệp', type:'adjective', example:'Our staff is more professional now.', viAnswers:['chuyên nghiệp']},
      {word:'courteous', ipa:'/ˈkɝtiəs/', meaning:'lịch sự', type:'adjective', example:'Please be more courteous to customers.', viAnswers:['lịch sự','nhã nhặn']},
      {word:'prompt', ipa:'/ˈpɹɑmpt/', meaning:'nhanh chóng / kịp thời', type:'adjective', example:'We need a prompter response to complaints.', viAnswers:['nhanh chóng','kịp thời']},
      {word:'thorough', ipa:'/ˈθɝoʊ/, /ˈθɔɹoʊ/', meaning:'kỹ lưỡng', type:'adjective', example:'This inspection is more thorough than usual.', viAnswers:['kỹ lưỡng','tỉ mỉ','cẩn thận']},
      {word:'consistent', ipa:'/kənˈsɪstənt/', meaning:'nhất quán', type:'adjective', example:'The quality is more consistent than before.', viAnswers:['nhất quán','ổn định','kiên định']}
    ]
  },

  // ===== DAY 34: Daily Life + So sánh nhất =====
  {
    day: 34,
    topic: "Cuộc sống hàng ngày",
    topicEn: "Daily Life",
    phase: 2,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "So sánh nhất (Superlatives)",
      explanation: "So sánh nhất được dùng khi so sánh từ 3 đối tượng trở lên.\n\n1. Công thức với tính từ ngắn: S + V + the + Adj-est\n- Quy tắc thêm đuôi -est tương tự như thêm -er: tall -> the tallest, big -> the biggest, happy -> the happiest, simple -> the simplest.\n\n2. Công thức với tính từ dài: S + V + the + adjective_long-est (S + V + the most + Adj)\n- Ví dụ: the most expensive, the most important.\n- So sánh kém nhất: the least + Adj. Ví dụ: the least expensive.\n\n3. Các trường hợp so sánh nhất bất quy tắc:\n- good/well -> the best (tốt nhất)\n- bad/badly -> the worst (tệ nhất)\n- far -> the farthest / the furthest (xa nhất)\n- many/much -> the most (nhiều nhất)\n- little -> the least (ít nhất)",
      structure: "S + V + the + Adj-est (+ N) | S + V + the most + Adj (+ N)",
      examples: [
        "He is the tallest employee in our department. (Anh ấy là nhân viên cao nhất trong bộ phận của chúng tôi.)",
        "This is the most important project of the year. (Đây là dự án quan trọng nhất trong năm.)",
        "She provided the best solution to the problem. (Cô ấy đã đưa ra giải pháp tốt nhất cho vấn đề.)",
        "This is the least difficult task. (Đây là nhiệm vụ ít khó nhất.)"
      ],
exceptions: [
        "Tính từ/trạng từ biến đổi bất quy tắc ở so sánh nhất: <i>good/well -> the best</i>, <i>bad/badly -> the worst</i>, <i>many/much -> the most</i>, <i>little -> the least</i>, <i>far -> the farthest / the furthest</i>.",
        "Tương tự so sánh hơn, tính từ 2 âm tiết kết thúc bằng <b>-y</b> đổi thành <b>-iest</b> (ví dụ: <i>the easiest, the happiest</i>)."
      ],
      notes: [
        "So sánh nhất bắt buộc phải đi kèm mạo từ <b>the</b> phía trước (ví dụ: <i>the most important, the fastest</i>).",
        "Thường có các cụm từ giới hạn phạm vi đi kèm như: <i>in the world, of all, in the team</i>, hoặc mệnh đề hiện tại hoàn thành <i>...I have ever seen</i>."
      ],
            tips: "Mẹo: Trước vị trí so sánh nhất luôn có mạo từ the. Các cụm từ đi kèm ở vế sau để giới thiệu phạm vi so sánh thường là: in the world, in the team, of all, of the three, that I have ever seen."
    },
    words: [
      {word:'wake', ipa:'/ˈweɪk/', meaning:'thức dậy', type:'verb', example:'I wake up at 6 AM every day.', viAnswers:['thức dậy']},
      {word:'dress', ipa:'/ˈdɹɛs/', meaning:'mặc quần áo', type:'verb', example:'She dresses quickly in the morning.', viAnswers:['mặc quần áo','mặc đồ','ăn mặc']},
      {word:'commute', ipa:'/kəmˈjut/', meaning:'đi làm / đi lại', type:'verb', example:'He has the longest commute in the office.', viAnswers:['đi làm','đi lại','doãng đường đi làm']},
      {word:'arrive', ipa:'/ɝˈaɪv/', meaning:'đến nơi', type:'verb', example:'She arrives at work the earliest.', viAnswers:['đến nơi','đến','tới nơi']},
      {word:'breakfast', ipa:'/ˈbɹɛkfəst/', meaning:'bữa sáng', type:'noun', example:'Breakfast is the most important meal.', viAnswers:['bữa sáng','ăn sáng']},
      {word:'routine', ipa:'/ɹuˈtin/', meaning:'thói quen hàng ngày', type:'noun', example:'This is the best morning routine.', viAnswers:['thói quen hàng ngày','thói quen','lề thói']},
      {word:'schedule', ipa:'/ˈskɛdʒuɫ/, /ˈskɛdʒʊɫ/', meaning:'lịch trình', type:'noun', example:'Today is the busiest day on my schedule.', viAnswers:['lịch trình','thời gian biểu']},
      {word:'organize', ipa:'/ˈɔɹɡəˌnaɪz/', meaning:'sắp xếp', type:'verb', example:'She is the most organized person I know.', viAnswers:['sắp xếp','tổ chức']},
      {word:'manage', ipa:'/ˈmænədʒ/, /ˈmænɪdʒ/', meaning:'quản lý', type:'verb', example:'He manages his time the best.', viAnswers:['quản lý']},
      {word:'balance', ipa:'/ˈbæɫəns/', meaning:'cân bằng', type:'noun / verb', example:'Finding balance is the hardest part.', viAnswers:['cân bằng','sự cân bằng']},
      {word:'priority', ipa:'/pɹaɪˈɔɹəti/', meaning:'ưu tiên', type:'noun', example:'Health is my highest priority.', viAnswers:['ưu tiên','sự ưu tiên']},
      {word:'errand', ipa:'/ˈɛɹənd/', meaning:'việc vặt', type:'noun', example:'I run errands on the weekend.', viAnswers:['việc vặt','công việc lặt vặt']},
      {word:'chore', ipa:'/ˈtʃɔɹ/', meaning:'việc nhà', type:'noun', example:'Doing chores is the least fun activity.', viAnswers:['việc nhà','công việc nhà']},
      {word:'grocery', ipa:'/ˈɡɹoʊsɝi/, /ˈɡɹoʊsɹi/', meaning:'tạp hóa / đi chợ', type:'noun', example:'I go to the grocery store every Sunday.', viAnswers:['tạp hóa','đi chợ','cửa hàng tạp hóa']},
      {word:'laundry', ipa:'/ˈɫɔndɹi/', meaning:'giặt đồ / đồ giặt', type:'noun', example:'Saturday is the best day to do laundry.', viAnswers:['giặt đồ','đồ giặt','giặt giũ']},
      {word:'clean', ipa:'/ˈkɫin/', meaning:'dọn dẹp / sạch', type:'verb / adjective', example:'I clean the house every weekend.', viAnswers:['dọn dẹp','sạch','lau dọn']},
      {word:'cook', ipa:'/ˈkʊk/', meaning:'nấu ăn', type:'verb', example:'She is the best cook in the family.', viAnswers:['nấu ăn','nấu']},
      {word:'exercise', ipa:'/ˈɛksɝˌsaɪz/', meaning:'tập thể dục', type:'verb / noun', example:'Morning exercise is the most effective.', viAnswers:['tập thể dục','bài tập']},
      {word:'relax', ipa:'/ɹiˈɫæks/, /ɹɪˈɫæks/', meaning:'thư giãn', type:'verb', example:'Sunday is the most relaxing day.', viAnswers:['thư giãn','nghỉ ngơi']},
      {word:'socialize', ipa:'/ˈsoʊʃəˌɫaɪz/', meaning:'giao tiếp xã hội', type:'verb', example:'She socializes the most on weekends.', viAnswers:['giao tiếp xã hội','giao lưu']},
      {word:'habit', ipa:'/ˈhæbət/', meaning:'thói quen', type:'noun', example:'Reading is one of the best habits.', viAnswers:['thói quen']},
      {word:'lifestyle', ipa:'/ˈɫaɪfˌstaɪɫ/', meaning:'lối sống', type:'noun', example:'A healthy lifestyle is the most important thing.', viAnswers:['lối sống','phong cách sống']},
      {word:'productive', ipa:'/pɝˈdəktɪv/, /pɹəˈdəktɪv/, /pɹoʊˈdəktɪv/', meaning:'năng suất', type:'adjective', example:'Morning is the most productive time.', viAnswers:['năng suất','hiệu suất cao']},
      {word:'healthy', ipa:'/ˈhɛɫθi/', meaning:'khỏe mạnh', type:'adjective', example:'This is the healthiest breakfast option.', viAnswers:['khỏe mạnh','lành mạnh']},
      {word:'convenient', ipa:'/kənˈvinjənt/', meaning:'tiện lợi', type:'adjective', example:'This is the most convenient store nearby.', viAnswers:['tiện lợi','thuận tiện']}
    ]
  },

  // ===== DAY 35: REVIEW Phase 2 (days 18-26) =====
  {
    day: 35,
    topic: "Ôn tập ngày 18-26",
    topicEn: "Review Days 18-26",
    phase: 2,
    isReview: true,
    reviewDays: [18, 19, 20, 21, 22, 23, 24, 25, 26],
    grammar: {
      title: "Ôn tập ngữ pháp",
      explanation: "Ôn lại tất cả ngữ pháp đã học từ ngày 18 đến 26:\n• Ngày 18: Ôn tập thì hiện tại / quá khứ / tương lai đơn\n• Ngày 19: Ôn tập các thì tiếp diễn và hoàn thành\n• Ngày 20: Ôn tập tổng hợp các thì\n• Ngày 21: Nhận diện từ loại (noun, verb, adj, adv)\n• Ngày 22: Từ loại sau the / a / an / my\n• Ngày 23: Từ loại sau very, sau chủ ngữ\n• Ngày 24: Giới từ in, on, at\n• Ngày 25: Giới từ for, to, from, with\n• Ngày 26: Giới từ before, after, during, between",
      structure: "",
      examples: [],
      tips: "Làm bài tập, chữa lỗi, ghi lại lỗi sai. Ôn lại từ vựng các chủ đề: Sức khỏe, Giáo dục, Công nghệ, Tài chính, Nhà ở, Môi trường, Du lịch, Thức ăn, Giải trí."
    },
    words: []
  },

  // ===== DAY 36: REVIEW Phase 2 (days 27-34) =====
  {
    day: 36,
    topic: "Ôn tập ngày 27-34",
    topicEn: "Review Days 27-34",
    phase: 2,
    isReview: true,
    reviewDays: [27, 28, 29, 30, 31, 32, 33, 34],
    grammar: {
      title: "Ôn tập ngữ pháp",
      explanation: "Ôn lại tất cả ngữ pháp đã học từ ngày 27 đến 34:\n• Ngày 27: Liên từ and, but, or, so\n• Ngày 28: Liên từ because, although, when, if\n• Ngày 29: Mệnh đề phụ thuộc\n• Ngày 30: Câu bị động - cấu trúc S + be + V3\n• Ngày 31: Bị động thì hiện tại và quá khứ đơn\n• Ngày 32: Bị động với will / can / must / should\n• Ngày 33: So sánh hơn (more...than, -er than)\n• Ngày 34: So sánh nhất (the most, the -est)",
      structure: "",
      examples: [],
      tips: "Làm bài tập, chữa lỗi, ghi lại lỗi sai. Ôn lại từ vựng các chủ đề: Giao tiếp, Luật pháp, Sản xuất, Tiếp thị, Nhân sự, Ngân hàng, Chất lượng, Cuộc sống hàng ngày."
    },
    words: []
  },

  // ===== DAY 37: REVIEW Full Phase 2 =====
  {
    day: 37,
    topic: "Ôn tập toàn bộ Giai đoạn 2",
    topicEn: "Review Full Phase 2",
    phase: 2,
    isReview: true,
    reviewDays: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    grammar: {
      title: "Ôn tập ngữ pháp",
      explanation: "Ôn lại TOÀN BỘ ngữ pháp Giai đoạn 2 (ngày 18-34):\n\nCác thì: hiện tại đơn, quá khứ đơn, tương lai đơn, hiện tại tiếp diễn, hiện tại hoàn thành.\n\nTừ loại: nhận diện noun/verb/adj/adv, vị trí sau the/a/an/my, sau very, sau be.\n\nGiới từ: in/on/at, for/to/from/with, before/after/during/between.\n\nLiên từ: and/but/or/so, because/although/when/if, mệnh đề phụ thuộc.\n\nCâu bị động: be + V3, bị động các thì, bị động với modal verbs.\n\nSo sánh: so sánh hơn (-er/more), so sánh nhất (-est/the most).",
      structure: "",
      examples: [],
      tips: "Làm bài tập tổng hợp, chữa lỗi sai, ghi nhớ các quy tắc quan trọng. Tập trung vào những phần còn yếu."
    },
    words: []
  },

  // ===== DAY 38: Weather/Nature + Chiến thuật nghe Part 1 =====
  {
    day: 38,
    topic: "Thời tiết / Thiên nhiên",
    topicEn: "Weather / Nature",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Chiến thuật nghe Part 1 - Mô tả tranh",
      explanation: "TOEIC Listening Part 1: Nghe 4 câu mô tả tranh, chọn câu đúng nhất.\n\nChiến thuật:\n1. TRƯỚC KHI NGHE: Quan sát tranh kỹ trong 5 giây.\n   - Tranh người: ai? đang làm gì? ở đâu? mặc gì?\n   - Tranh vật/phong cảnh: có gì? ở đâu? trạng thái nào?\n\n2. KHI NGHE: Nghe từ khóa chính (danh từ, động từ, giới từ).\n   - Chú ý: hành động đang diễn ra (be + V-ing)\n   - Cẩn thận từ phát âm giống nhau (weather/whether, sunny/Sunday)\n\n3. LOẠI TRỪ đáp án sai:\n   - Sai người/vật\n   - Sai hành động\n   - Sai vị trí",
      structure: "Mô tả tranh: S + be + V-ing (hành động) | There is/are + N (sự vật)",
      examples: [
        "The woman is standing in the rain.",
        "It is sunny outside.",
        "There are clouds in the sky.",
        "The man is wearing a jacket."
      ],
      tips: "Nhìn tranh → đoán từ vựng → nghe và so khớp. Loại trừ đáp án sai ngay khi nghe."
    },
    words: [
      {word:'sunny', ipa:'/ˈsəni/', meaning:'nắng', type:'adjective', example:'It is sunny today.', viAnswers:['nắng','có nắng']},
      {word:'cloudy', ipa:'/ˈkɫaʊdi/', meaning:'nhiều mây', type:'adjective', example:'The sky is very cloudy.', viAnswers:['nhiều mây','có mây','mây']},
      {word:'rainy', ipa:'/ˈɹeɪni/', meaning:'có mưa', type:'adjective', example:'It is a rainy day.', viAnswers:['có mưa','mưa']},
      {word:'windy', ipa:'/ˈwaɪndi/, /ˈwɪndi/', meaning:'có gió', type:'adjective', example:'It is too windy to go outside.', viAnswers:['có gió','gió','nhiều gió']},
      {word:'storm', ipa:'/ˈstɔɹm/', meaning:'bão', type:'noun', example:'A big storm is coming tonight.', viAnswers:['bão','cơn bão']},
      {word:'snow', ipa:'/ˈsnoʊ/', meaning:'tuyết', type:'noun / verb', example:'It is snowing outside.', viAnswers:['tuyết']},
      {word:'fog', ipa:'/ˈfɑɡ/, /ˈfɔɡ/', meaning:'sương mù', type:'noun', example:'There is heavy fog this morning.', viAnswers:['sương mù']},
      {word:'temperature', ipa:'/ˈtɛmpɝətʃɝ/, /ˈtɛmpɹətʃɝ/', meaning:'nhiệt độ', type:'noun', example:'The temperature is 30 degrees today.', viAnswers:['nhiệt độ']},
      {word:'humidity', ipa:'/hjuˈmɪdəti/', meaning:'độ ẩm', type:'noun', example:'The humidity is very high in summer.', viAnswers:['độ ẩm']},
      {word:'forecast', ipa:'/ˈfɔɹˌkæst/', meaning:'dự báo', type:'noun / verb', example:'The weather forecast says it will rain.', viAnswers:['dự báo','dự báo thời tiết']},
      {word:'season', ipa:'/ˈsizən/', meaning:'mùa', type:'noun', example:'Summer is the hottest season.', viAnswers:['mùa']},
      {word:'spring', ipa:'/ˈspɹɪŋ/, /spɝˈɪŋ/', meaning:'mùa xuân', type:'noun', example:'Flowers bloom in spring.', viAnswers:['mùa xuân']},
      {word:'summer', ipa:'/ˈsəmɝ/', meaning:'mùa hè', type:'noun', example:'Summer is the warmest season.', viAnswers:['mùa hè','mùa hạ']},
      {word:'autumn', ipa:'/ˈɔtəm/', meaning:'mùa thu', type:'noun', example:'The leaves fall in autumn.', viAnswers:['mùa thu']},
      {word:'winter', ipa:'/ˈwɪntɝ/', meaning:'mùa đông', type:'noun', example:'Winter is the coldest season.', viAnswers:['mùa đông']},
      {word:'flood', ipa:'/ˈfɫəd/', meaning:'lũ lụt', type:'noun', example:'The flood damaged many houses.', viAnswers:['lũ lụt','lụt','lũ']},
      {word:'drought', ipa:'/ˈdɹaʊt/', meaning:'hạn hán', type:'noun', example:'The drought lasted for three months.', viAnswers:['hạn hán']},
      {word:'earthquake', ipa:'/ˈɝθˌkweɪk/', meaning:'động đất', type:'noun', example:'An earthquake hit the city last night.', viAnswers:['động đất']},
      {word:'lightning', ipa:'/ˈɫaɪtnɪŋ/', meaning:'sét / chớp', type:'noun', example:'Lightning is very dangerous.', viAnswers:['sét','chớp','tia chớp']},
      {word:'thunder', ipa:'/ˈθəndɝ/', meaning:'sấm', type:'noun', example:'I heard thunder during the storm.', viAnswers:['sấm','tiếng sấm']},
      {word:'clear', ipa:'/ˈkɫɪɹ/', meaning:'quang đãng', type:'adjective', example:'The sky is clear today.', viAnswers:['quang đãng','trong','rõ ràng']},
      {word:'mild', ipa:'/ˈmaɪɫd/', meaning:'ôn hòa / nhẹ', type:'adjective', example:'The weather is mild in spring.', viAnswers:['ôn hòa','nhẹ','dịu']},
      {word:'severe', ipa:'/səˈvɪɹ/', meaning:'khắc nghiệt / nghiêm trọng', type:'adjective', example:'There was a severe storm last night.', viAnswers:['khắc nghiệt','nghiêm trọng']},
      {word:'tropical', ipa:'/ˈtɹɑpɪkəɫ/', meaning:'nhiệt đới', type:'adjective', example:'Vietnam has a tropical climate.', viAnswers:['nhiệt đới']},
      {word:'freeze', ipa:'/ˈfɹiz/', meaning:'đóng băng', type:'verb', example:'Water freezes at 0 degrees.', viAnswers:['đóng băng','đông lại']}
    ]
  },

  // ===== DAY 39: News/Media + Chiến thuật nghe Part 2 =====
  {
    day: 39,
    topic: "Tin tức / Truyền thông",
    topicEn: "News / Media",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Chiến thuật nghe Part 2 - Hỏi đáp",
      explanation: "TOEIC Listening Part 2: Nghe 1 câu hỏi + 3 đáp án, chọn câu trả lời phù hợp nhất.\n\nChiến thuật:\n1. TẬP TRUNG nghe TỪ ĐẦU TIÊN của câu hỏi (Who, What, When, Where, Why, How).\n   - Who → trả lời về NGƯỜI\n   - What → trả lời về SỰ VIỆC / VẬT\n   - When → trả lời về THỜI GIAN\n   - Where → trả lời về NƠI CHỐN\n   - Why → trả lời bằng Because...\n   - How → trả lời về CÁCH THỨC\n\n2. CẨN THẬN với câu hỏi Yes/No:\n   - Đáp án có thể không bắt đầu bằng Yes/No\n   - Ví dụ: 'Did the reporter finish?' → 'He is still working on it.'\n\n3. LOẠI TRỪ đáp án lặp lại từ trong câu hỏi (thường là bẫy).",
      structure: "Who/What/When/Where/Why/How + trợ động từ + S + V?",
      examples: [
        "Who wrote this article? - The new reporter did.",
        "When was the news published? - It was published yesterday.",
        "Where is the press conference? - It is at the hotel.",
        "Why was the interview canceled? - Because the editor was sick."
      ],
      tips: "Nghe từ đầu tiên → xác định loại câu hỏi → loại đáp án sai. Cẩn thận đáp án gián tiếp!"
    },
    words: [
      {word:'news', ipa:'/ˈnjuz/, /ˈnuz/', meaning:'tin tức', type:'noun', example:'I watch the news every morning.', viAnswers:['tin tức','tin']},
      {word:'article', ipa:'/ˈɑɹtəkəɫ/, /ˈɑɹtɪkəɫ/', meaning:'bài báo', type:'noun', example:'She wrote an article about the economy.', viAnswers:['bài báo','bài viết']},
      {word:'headline', ipa:'/ˈhɛdˌɫaɪn/', meaning:'tiêu đề', type:'noun', example:'The headline attracted many readers.', viAnswers:['tiêu đề','tít báo']},
      {word:'reporter', ipa:'/ɹɪˈpɔɹtɝ/', meaning:'phóng viên', type:'noun', example:'The reporter interviewed the president.', viAnswers:['phóng viên','nhà báo']},
      {word:'journalist', ipa:'/ˈdʒɝnəɫəst/, /ˈdʒɝnəɫɪst/', meaning:'nhà báo', type:'noun', example:'She is a famous journalist.', viAnswers:['nhà báo','ký giả']},
      {word:'editor', ipa:'/ˈɛdətɝ/, /ˈɛdɪtɝ/', meaning:'biên tập viên', type:'noun', example:'The editor reviewed the article.', viAnswers:['biên tập viên','biên tập']},
      {word:'publish', ipa:'/ˈpəbɫɪʃ/', meaning:'xuất bản / đăng', type:'verb', example:'The article was published yesterday.', viAnswers:['xuất bản','đăng','phát hành']},
      {word:'broadcast', ipa:'/ˈbɹɔdˌkæst/', meaning:'phát sóng', type:'verb / noun', example:'The news is broadcast at 7 PM.', viAnswers:['phát sóng','truyền hình','phát thanh']},
      {word:'press', ipa:'/ˈpɹɛs/', meaning:'báo chí', type:'noun', example:'The press covered the event.', viAnswers:['báo chí']},
      {word:'media', ipa:'/ˈmidiə/', meaning:'truyền thông', type:'noun', example:'Social media is very popular.', viAnswers:['truyền thông','phương tiện truyền thông']},
      {word:'interview', ipa:'/ˈɪntɝvˌju/', meaning:'phỏng vấn', type:'noun / verb', example:'The interview will be on TV tonight.', viAnswers:['phỏng vấn','buổi phỏng vấn']},
      {word:'source', ipa:'/ˈsɔɹs/', meaning:'nguồn tin', type:'noun', example:'The reporter has a reliable source.', viAnswers:['nguồn tin','nguồn']},
      {word:'issue', ipa:'/ˈɪʃu/', meaning:'vấn đề / số báo', type:'noun', example:'This is an important issue.', viAnswers:['vấn đề','số báo']},
      {word:'opinion', ipa:'/əˈpɪnjən/', meaning:'ý kiến', type:'noun', example:'Everyone has a different opinion.', viAnswers:['ý kiến','quan điểm']},
      {word:'editorial', ipa:'/ˌɛdəˈtɔɹiəɫ/', meaning:'bài xã luận', type:'noun', example:'He wrote an editorial about education.', viAnswers:['bài xã luận','bài bình luận']},
      {word:'column', ipa:'/ˈkɑɫəm/', meaning:'cột báo / chuyên mục', type:'noun', example:'She writes a weekly column.', viAnswers:['cột báo','chuyên mục','mục']},
      {word:'magazine', ipa:'/ˈmæɡəˌzin/', meaning:'tạp chí', type:'noun', example:'I read this magazine every month.', viAnswers:['tạp chí']},
      {word:'newspaper', ipa:'/ˈnuzˌpeɪpɝ/', meaning:'báo / tờ báo', type:'noun', example:'He reads the newspaper every morning.', viAnswers:['báo','tờ báo']},
      {word:'podcast', ipa:'/ˈpɔdˌkæst/', meaning:'chương trình phát thanh số', type:'noun', example:'I listen to a news podcast every day.', viAnswers:['chương trình phát thanh số','podcast']},
      {word:'blog', ipa:'/ˈbɫɔɡ/', meaning:'trang nhật ký điện tử', type:'noun', example:'She started a travel blog last year.', viAnswers:['trang nhật ký điện tử','blog']},
      {word:'update', ipa:'/ˈəpˌdeɪt/, /əpˈdeɪt/', meaning:'cập nhật', type:'verb / noun', example:'The website is updated every hour.', viAnswers:['cập nhật']},
      {word:'coverage', ipa:'/ˈkəvɝədʒ/, /ˈkəvɝɪdʒ/, /ˈkəvɹɪdʒ/', meaning:'phạm vi đưa tin', type:'noun', example:'The news coverage was excellent.', viAnswers:['phạm vi đưa tin','sự đưa tin','tin tức']},
      {word:'breaking', ipa:'/ˈbɹeɪkɪŋ/', meaning:'nóng hổi / mới nhất', type:'adjective', example:'This is breaking news!', viAnswers:['nóng hổi','mới nhất','khẩn cấp']},
      {word:'exclusive', ipa:'/ɪkˈskɫusɪv/', meaning:'độc quyền', type:'adjective', example:'The reporter got an exclusive interview.', viAnswers:['độc quyền']},
      {word:'investigate', ipa:'/ˌɪnˈvɛstəˌɡeɪt/', meaning:'điều tra', type:'verb', example:'The journalist investigated the case.', viAnswers:['điều tra']}
    ]
  },

  // ===== DAY 40: Construction + Nghe bắt từ khóa =====
  {
    day: 40,
    topic: "Xây dựng",
    topicEn: "Construction",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Nghe bắt từ khóa (Listening for Keywords)",
      explanation: "Kỹ thuật nghe bắt từ khóa giúp bạn hiểu ý chính mà không cần hiểu mọi từ.\n\nCách thực hiện:\n1. XÁC ĐỊNH từ khóa: danh từ, động từ, tính từ quan trọng\n   - Bỏ qua: a, the, is, are, of, in...\n   - Tập trung: build, construct, site, permit, inspect...\n\n2. LIÊN KẾT từ khóa thành ý nghĩa:\n   - Nghe: 'construction... delayed... permit... next month'\n   - Hiểu: Việc xây dựng bị hoãn vì chưa có giấy phép, sẽ tiếp tục tháng sau.\n\n3. GHI NHỚ các từ khóa về:\n   - THỜI GIAN: today, tomorrow, next week, by Friday\n   - HÀNH ĐỘNG: build, repair, inspect, complete\n   - VẤN ĐỀ: delay, problem, issue, cancel",
      structure: "Nghe từ khóa: DANH TỪ + ĐỘNG TỪ + THỜI GIAN = hiểu ý chính",
      examples: [
        "The construction site will be inspected tomorrow.",
        "The building was renovated last year.",
        "The contractor said the project is delayed.",
        "A new permit is required before we can start."
      ],
      tips: "Không cần hiểu 100% → bắt từ khóa quan trọng → ghép lại thành ý chính. Luyện tập mỗi ngày!"
    },
    words: [
      {word:'build', ipa:'/ˈbɪɫd/', meaning:'xây dựng', type:'verb', example:'They are building a new school.', viAnswers:['xây dựng','xây']},
      {word:'construct', ipa:'/ˈkɑnstɹəkt/, /kənˈstɹəkt/', meaning:'thi công / xây dựng', type:'verb', example:'The bridge was constructed last year.', viAnswers:['thi công','xây dựng']},
      {word:'demolish', ipa:'/dɪˈmɑɫɪʃ/', meaning:'phá dỡ', type:'verb', example:'The old building was demolished.', viAnswers:['phá dỡ','phá hủy','đập bỏ']},
      {word:'renovate', ipa:'/ˈɹɛnəˌveɪt/', meaning:'cải tạo / sửa sang', type:'verb', example:'The hotel was renovated last summer.', viAnswers:['cải tạo','sửa sang','tu sửa']},
      {word:'foundation', ipa:'/faʊnˈdeɪʃən/', meaning:'nền móng', type:'noun', example:'The foundation must be very strong.', viAnswers:['nền móng','móng']},
      {word:'structure', ipa:'/ˈstɹəktʃɝ/', meaning:'cấu trúc / công trình', type:'noun', example:'The structure of the building is solid.', viAnswers:['cấu trúc','công trình','kết cấu']},
      {word:'concrete', ipa:'/ˈkɑnkɹit/, /kənˈkɹit/', meaning:'bê tông', type:'noun', example:'The floor is made of concrete.', viAnswers:['bê tông']},
      {word:'steel', ipa:'/ˈstiɫ/', meaning:'thép', type:'noun', example:'The building uses a lot of steel.', viAnswers:['thép']},
      {word:'brick', ipa:'/ˈbɹɪk/', meaning:'gạch', type:'noun', example:'The wall is made of red brick.', viAnswers:['gạch']},
      {word:'wood', ipa:'/ˈwʊd/', meaning:'gỗ', type:'noun', example:'The table is made of wood.', viAnswers:['gỗ']},
      {word:'architect', ipa:'/ˈɑɹkəˌtɛkt/', meaning:'kiến trúc sư', type:'noun', example:'The architect designed the new building.', viAnswers:['kiến trúc sư']},
      {word:'contractor', ipa:'/ˈkɑnˌtɹæktɝ/', meaning:'nhà thầu', type:'noun', example:'The contractor will finish the work next week.', viAnswers:['nhà thầu']},
      {word:'blueprint', ipa:'/ˈbɫuˌpɹɪnt/', meaning:'bản thiết kế', type:'noun', example:'The blueprint was approved yesterday.', viAnswers:['bản thiết kế','bản vẽ']},
      {word:'site', ipa:'/ˈsaɪt/', meaning:'công trường', type:'noun', example:'Workers are busy at the construction site.', viAnswers:['công trường','công trình','địa điểm']},
      {word:'crane', ipa:'/ˈkɹeɪn/', meaning:'cần cẩu', type:'noun', example:'The crane lifted heavy materials.', viAnswers:['cần cẩu','cần trục']},
      {word:'scaffold', ipa:'/ˈskæfəɫd/', meaning:'giàn giáo', type:'noun', example:'Workers stand on the scaffold.', viAnswers:['giàn giáo']},
      {word:'plumbing', ipa:'/ˈpɫəmɪŋ/', meaning:'hệ thống ống nước', type:'noun', example:'The plumbing was installed last week.', viAnswers:['hệ thống ống nước','ống nước','đường ống']},
      {word:'electrical', ipa:'/ɪˈɫɛktɹɪkəɫ/', meaning:'thuộc điện', type:'adjective', example:'The electrical system was checked today.', viAnswers:['thuộc điện','điện']},
      {word:'insulation', ipa:'/ˌɪnsəˈɫeɪʃən/', meaning:'cách nhiệt / cách điện', type:'noun', example:'Good insulation keeps the house warm.', viAnswers:['cách nhiệt','cách điện','vật liệu cách nhiệt']},
      {word:'permit', ipa:'/ˈpɝˌmɪt/, /pɝˈmɪt/', meaning:'giấy phép', type:'noun', example:'A building permit is required.', viAnswers:['giấy phép']},
      {word:'inspect', ipa:'/ˌɪnˈspɛkt/', meaning:'kiểm tra', type:'verb', example:'The building will be inspected tomorrow.', viAnswers:['kiểm tra','thanh tra']},
      {word:'zone', ipa:'/ˈzoʊn/', meaning:'khu vực', type:'noun', example:'This is a residential zone.', viAnswers:['khu vực','vùng']},
      {word:'develop', ipa:'/dɪˈvɛɫəp/', meaning:'phát triển', type:'verb', example:'The area is being developed quickly.', viAnswers:['phát triển']},
      {word:'expand', ipa:'/ɪkˈspænd/', meaning:'mở rộng', type:'verb', example:'The company plans to expand the factory.', viAnswers:['mở rộng']},
      {word:'landscape', ipa:'/ˈɫænˌskeɪp/, /ˈɫændˌskeɪp/', meaning:'cảnh quan', type:'noun / verb', example:'The landscape around the building is beautiful.', viAnswers:['cảnh quan','phong cảnh']}
    ]
  }
];


const DAYS_DATA_PART3 = [
  {
    day: 41,
    topic: "Điện tử",
    topicEn: "Electronics",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Nghe mô tả hành động (Listening - Mô tả hành động)",
      explanation: "Trong phần nghe TOEIC Part 1, bạn sẽ nghe mô tả về hành động đang diễn ra trong hình ảnh. Hãy chú ý đến: 1) Ai đang làm gì (chủ ngữ + động từ), 2) Đồ vật ở đâu, đang được sử dụng thế nào. Thường dùng thì hiện tại tiếp diễn (is/are + V-ing) để mô tả hành động đang xảy ra.",
      structure: "Subject + is/are + V-ing + Object",
      examples: [
        "The man is plugging in the charger.",
        "She is adjusting the settings on the monitor.",
        "They are recording a video with a camera.",
        "The technician is checking the circuit board."
      ],
      tips: "Khi nghe mô tả hành động, tập trung vào ĐỘNG TỪ chính. Phân biệt các hành động tương tự nhau: plugging in ≠ unplugging, turning on ≠ turning off."
    },
    words: [
      {word:'battery', ipa:'/ˈbætɝi/', meaning:'pin, ắc quy', type:'noun', example:'The battery is low.', viAnswers:['pin','ắc quy','pin ắc quy']},
      {word:'charger', ipa:'/ˈtʃɑɹdʒɝ/', meaning:'bộ sạc', type:'noun', example:'I forgot my charger at home.', viAnswers:['bộ sạc','sạc','cục sạc']},
      {word:'cable', ipa:'/ˈkeɪbəɫ/', meaning:'dây cáp', type:'noun', example:'Please connect the cable to the computer.', viAnswers:['dây cáp','cáp','dây']},
      {word:'plug', ipa:'/ˈpɫəɡ/', meaning:'cắm (phích cắm)', type:'noun / verb', example:'Plug the lamp into the wall.', viAnswers:['cắm','phích cắm','ổ cắm']},
      {word:'switch', ipa:'/ˈswɪtʃ/', meaning:'công tắc, chuyển đổi', type:'noun / verb', example:'Turn the switch on.', viAnswers:['công tắc','chuyển đổi','nút bật']},
      {word:'wire', ipa:'/ˈwaɪɝ/, /ˈwaɪɹ/', meaning:'dây điện', type:'noun', example:'The wire is broken.', viAnswers:['dây điện','dây','sợi dây']},
      {word:'circuit', ipa:'/ˈsɝkət/', meaning:'mạch điện', type:'noun', example:'The circuit was damaged.', viAnswers:['mạch điện','mạch']},
      {word:'signal', ipa:'/ˈsɪɡnəɫ/', meaning:'tín hiệu', type:'noun', example:'The signal is weak here.', viAnswers:['tín hiệu']},
      {word:'antenna', ipa:'/ænˈtɛnə/', meaning:'ăng-ten', type:'noun', example:'The antenna receives radio signals.', viAnswers:['ăng-ten','ăng ten','an ten']},
      {word:'remote', ipa:'/ɹiˈmoʊt/, /ɹɪˈmoʊt/', meaning:'điều khiển từ xa', type:'noun / adjective', example:'Where is the remote control?', viAnswers:['điều khiển từ xa','remote','điều khiển']},
      {word:'sensor', ipa:'/ˈsɛnsɝ/', meaning:'cảm biến', type:'noun', example:'The sensor detects movement.', viAnswers:['cảm biến','bộ cảm biến']},
      {word:'monitor', ipa:'/ˈmɑnətɝ/', meaning:'màn hình', type:'noun', example:'The monitor shows a clear image.', viAnswers:['màn hình','màn hình máy tính']},
      {word:'display', ipa:'/dɪsˈpɫeɪ/', meaning:'hiển thị, màn hình hiển thị', type:'noun / verb', example:'The display is very bright.', viAnswers:['hiển thị','màn hình hiển thị','trưng bày']},
      {word:'pixel', ipa:'/ˈpɪksəɫ/', meaning:'điểm ảnh', type:'noun', example:'This screen has many pixels.', viAnswers:['điểm ảnh','pixel']},
      {word:'resolution', ipa:'/ˌɹɛzəˈɫuʃən/', meaning:'độ phân giải', type:'noun', example:'The resolution of this camera is high.', viAnswers:['độ phân giải']},
      {word:'speaker', ipa:'/ˈspikɝ/', meaning:'loa', type:'noun', example:'The speaker is very loud.', viAnswers:['loa','người nói']},
      {word:'microphone', ipa:'/ˈmaɪkɹəˌfoʊn/', meaning:'micrô', type:'noun', example:'Speak into the microphone.', viAnswers:['micrô','mi-crô','micro','mic']},
      {word:'camera', ipa:'/ˈkæmɝə/, /ˈkæmɹə/', meaning:'máy ảnh, máy quay', type:'noun', example:'She bought a new camera.', viAnswers:['máy ảnh','máy quay','camera']},
      {word:'lens', ipa:'/ˈɫɛnz/', meaning:'ống kính, thấu kính', type:'noun', example:'The lens is dirty.', viAnswers:['ống kính','thấu kính']},
      {word:'flash', ipa:'/ˈfɫæʃ/', meaning:'đèn flash', type:'noun', example:'Use the flash in dark rooms.', viAnswers:['đèn flash','flash','đèn chớp']},
      {word:'record', ipa:'/ˈɹɛkɝd/, /ɹəˈkɔɹd/, /ɹɪˈkɔɹd/', meaning:'ghi, thu', type:'verb', example:'Please record the meeting.', viAnswers:['ghi','thu','ghi lại','thu âm']},
      {word:'playback', ipa:'/ˈpɫeɪˌbæk/', meaning:'phát lại', type:'noun', example:'Check the playback of the video.', viAnswers:['phát lại','phát']},
      {word:'adjust', ipa:'/əˈdʒəst/', meaning:'điều chỉnh', type:'verb', example:'Adjust the volume, please.', viAnswers:['điều chỉnh','chỉnh']},
      {word:'setting', ipa:'/ˈsɛtɪŋ/', meaning:'cài đặt', type:'noun', example:'Change the setting to save battery.', viAnswers:['cài đặt','thiết lập']},
      {word:'compatible', ipa:'/kəmˈpætəbəɫ/', meaning:'tương thích', type:'adjective', example:'This cable is compatible with your phone.', viAnswers:['tương thích']}
    ]
  },
  {
    day: 42,
    topic: "Hợp đồng / Pháp lý",
    topicEn: "Contracts / Legal",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Nghe hội thoại (Listening - Hội thoại)",
      explanation: "Trong TOEIC Part 3, bạn sẽ nghe đoạn hội thoại giữa 2-3 người. Mẹo: 1) Đọc câu hỏi TRƯỚC khi nghe, 2) Chú ý ai nói gì - phân biệt người nói, 3) Nghe từ khóa để trả lời câu hỏi về: mục đích cuộc hội thoại, chi tiết cụ thể, hành động tiếp theo.",
      structure: "Nghe → Xác định: Who? What? Where? Why? What next?",
      examples: [
        "A: Have you signed the contract yet? B: Not yet. I need to review it first.",
        "A: When does the agreement expire? B: It expires next month.",
        "A: We should negotiate better terms. B: I agree. Let's set up a meeting."
      ],
      tips: "Trước khi nghe, đọc lướt câu hỏi và các đáp án. Gạch chân từ khóa trong câu hỏi. Khi nghe, tập trung vào từ khóa đó."
    },
    words: [
      {word:'contract', ipa:'/ˈkɑnˌtɹækt/, /kənˈtɹækt/', meaning:'hợp đồng', type:'noun', example:'Please sign the contract.', viAnswers:['hợp đồng']},
      {word:'clause', ipa:'/ˈkɫɔz/', meaning:'điều khoản', type:'noun', example:'Read every clause carefully.', viAnswers:['điều khoản']},
      {word:'term', ipa:'/ˈtɝm/', meaning:'điều kiện, kỳ hạn', type:'noun', example:'The term of the contract is two years.', viAnswers:['điều kiện','kỳ hạn','thời hạn']},
      {word:'condition', ipa:'/kənˈdɪʃən/', meaning:'điều kiện', type:'noun', example:'You must accept the conditions.', viAnswers:['điều kiện']},
      {word:'negotiate', ipa:'/nəˈɡoʊʃiˌeɪt/, /nɪˈɡoʊʃiˌeɪt/', meaning:'đàm phán, thương lượng', type:'verb', example:'They will negotiate the price.', viAnswers:['đàm phán','thương lượng']},
      {word:'agree', ipa:'/əˈɡɹi/', meaning:'đồng ý', type:'verb', example:'I agree with your idea.', viAnswers:['đồng ý']},
      {word:'sign', ipa:'/ˈsaɪn/', meaning:'ký', type:'verb', example:'Please sign your name here.', viAnswers:['ký','ký tên']},
      {word:'renew', ipa:'/ɹɪˈnu/', meaning:'gia hạn, đổi mới', type:'verb', example:'We need to renew the contract.', viAnswers:['gia hạn','đổi mới','làm mới']},
      {word:'expire', ipa:'/ɪkˈspaɪɹ/', meaning:'hết hạn', type:'verb', example:'The agreement will expire soon.', viAnswers:['hết hạn']},
      {word:'cancel', ipa:'/ˈkænsəɫ/', meaning:'hủy bỏ', type:'verb', example:'She wants to cancel the order.', viAnswers:['hủy bỏ','hủy']},
      {word:'breach', ipa:'/ˈbɹitʃ/', meaning:'vi phạm', type:'noun / verb', example:'He was accused of a breach of contract.', viAnswers:['vi phạm']},
      {word:'liability', ipa:'/ˌɫaɪəˈbɪɫɪti/', meaning:'trách nhiệm pháp lý', type:'noun', example:'The company has no liability for this.', viAnswers:['trách nhiệm pháp lý','trách nhiệm']},
      {word:'obligation', ipa:'/ˌɑbɫəˈɡeɪʃən/', meaning:'nghĩa vụ', type:'noun', example:'You have an obligation to pay on time.', viAnswers:['nghĩa vụ','bổn phận']},
      {word:'guarantee', ipa:'/ˌɡɛɹənˈti/', meaning:'bảo đảm', type:'noun / verb', example:'The product has a one-year guarantee.', viAnswers:['bảo đảm','bảo hành','đảm bảo']},
      {word:'warranty', ipa:'/ˈwɔɹənti/', meaning:'bảo hành', type:'noun', example:'The warranty covers repairs.', viAnswers:['bảo hành']},
      {word:'confidential', ipa:'/ˌkɑnfəˈdɛnʃəɫ/', meaning:'bảo mật, bí mật', type:'adjective', example:'This document is confidential.', viAnswers:['bảo mật','bí mật']},
      {word:'intellectual', ipa:'/ˌɪnəˈɫɛktʃuəɫ/, /ˌɪntəˈɫɛktʃuəɫ/', meaning:'trí tuệ, thuộc trí tuệ', type:'adjective', example:'Protect your intellectual property.', viAnswers:['trí tuệ','thuộc trí tuệ']},
      {word:'property', ipa:'/ˈpɹɑpɝti/', meaning:'tài sản', type:'noun', example:'This is company property.', viAnswers:['tài sản','bất động sản']},
      {word:'copyright', ipa:'/ˈkɑpiˌɹaɪt/', meaning:'bản quyền', type:'noun', example:'The copyright belongs to the author.', viAnswers:['bản quyền']},
      {word:'patent', ipa:'/ˈpætənt/', meaning:'bằng sáng chế', type:'noun', example:'They filed a patent for the invention.', viAnswers:['bằng sáng chế']},
      {word:'trademark', ipa:'/ˈtɹeɪdˌmɑɹk/', meaning:'nhãn hiệu', type:'noun', example:'The trademark is registered.', viAnswers:['nhãn hiệu','thương hiệu']},
      {word:'dispute', ipa:'/dɪˈspjut/', meaning:'tranh chấp', type:'noun / verb', example:'They had a dispute about the payment.', viAnswers:['tranh chấp']},
      {word:'arbitrate', ipa:'/ˈɑɹbəˌtɹeɪt/', meaning:'phân xử, trọng tài', type:'verb', example:'A judge will arbitrate the case.', viAnswers:['phân xử','trọng tài','phân xử trọng tài']},
      {word:'settle', ipa:'/ˈsɛtəɫ/', meaning:'giải quyết, dàn xếp', type:'verb', example:'They settled the dispute quickly.', viAnswers:['giải quyết','dàn xếp']},
      {word:'comply', ipa:'/kəmˈpɫaɪ/', meaning:'tuân thủ', type:'verb', example:'You must comply with the rules.', viAnswers:['tuân thủ','tuân theo']}
    ]
  },
  {
    day: 43,
    topic: "Sự kiện",
    topicEn: "Events",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Nghe thông báo (Listening - Thông báo / Talks)",
      explanation: "Trong TOEIC Part 4, bạn sẽ nghe một người nói (thông báo, quảng cáo, tin nhắn thoại, bài phát biểu). Mẹo: 1) Xác định LOẠI thông báo (announcement, advertisement, voicemail...), 2) Nghe mục đích chính, 3) Chú ý các chi tiết: thời gian, địa điểm, yêu cầu hành động.",
      structure: "Nghe → Xác định: Loại thông báo? Mục đích? Chi tiết quan trọng?",
      examples: [
        "Attention all guests, the ceremony will begin at 3 PM in the main hall.",
        "Please note that the exhibition has been moved to the second floor.",
        "We are pleased to announce the opening of our new conference center."
      ],
      tips: "Thông báo thường bắt đầu bằng: Attention please, We are pleased to announce, Please note that... Hãy nghe kỹ phần đầu để biết chủ đề chính."
    },
    words: [
      {word:'event', ipa:'/iˈvɛnt/, /ɪˈvɛnt/', meaning:'sự kiện', type:'noun', example:'The event starts at 7 PM.', viAnswers:['sự kiện']},
      {word:'ceremony', ipa:'/ˈsɛɹəˌmoʊni/', meaning:'buổi lễ', type:'noun', example:'The ceremony was beautiful.', viAnswers:['buổi lễ','lễ','nghi lễ']},
      {word:'celebration', ipa:'/ˌsɛɫəˈbɹeɪʃən/', meaning:'lễ kỷ niệm, sự ăn mừng', type:'noun', example:'It was a big celebration.', viAnswers:['lễ kỷ niệm','sự ăn mừng','ăn mừng']},
      {word:'reception', ipa:'/ɹiˈsɛpʃən/, /ɹɪˈsɛpʃən/', meaning:'tiệc chiêu đãi, lễ tân', type:'noun', example:'The reception is at the hotel.', viAnswers:['tiệc chiêu đãi','lễ tân','tiệc tiếp tân']},
      {word:'banquet', ipa:'/ˈbæŋkwət/', meaning:'tiệc lớn', type:'noun', example:'The company held a banquet.', viAnswers:['tiệc lớn','yến tiệc','tiệc']},
      {word:'conference', ipa:'/ˈkɑnfɝəns/, /ˈkɑnfɹəns/', meaning:'hội nghị', type:'noun', example:'The conference is next week.', viAnswers:['hội nghị']},
      {word:'exhibition', ipa:'/ˌɛksəˈbɪʃən/', meaning:'triển lãm', type:'noun', example:'The art exhibition is free.', viAnswers:['triển lãm','cuộc triển lãm']},
      {word:'fair', ipa:'/ˈfɛɹ/', meaning:'hội chợ', type:'noun', example:'We visited the job fair.', viAnswers:['hội chợ']},
      {word:'launch', ipa:'/ˈɫɔntʃ/', meaning:'ra mắt, khởi động', type:'noun / verb', example:'The product launch was successful.', viAnswers:['ra mắt','khởi động','phát động']},
      {word:'opening', ipa:'/ˈoʊpənɪŋ/', meaning:'khai mạc, lễ khai trương', type:'noun', example:'The grand opening is tomorrow.', viAnswers:['khai mạc','lễ khai trương','khai trương']},
      {word:'anniversary', ipa:'/ˌænəˈvɝsɝi/', meaning:'kỷ niệm', type:'noun', example:'It is their 10th anniversary.', viAnswers:['kỷ niệm','ngày kỷ niệm']},
      {word:'award', ipa:'/əˈwɔɹd/', meaning:'giải thưởng', type:'noun', example:'She won the best employee award.', viAnswers:['giải thưởng']},
      {word:'honor', ipa:'/ˈɑnɝ/', meaning:'vinh danh, danh dự', type:'noun / verb', example:'We honor our best workers.', viAnswers:['vinh danh','danh dự','tôn vinh']},
      {word:'invite', ipa:'/ˌɪnˈvaɪt/', meaning:'mời', type:'verb', example:'We invite you to the party.', viAnswers:['mời']},
      {word:'host', ipa:'/ˈhoʊst/', meaning:'chủ nhà, tổ chức', type:'noun / verb', example:'She will host the event.', viAnswers:['chủ nhà','tổ chức','người dẫn chương trình']},
      {word:'organize', ipa:'/ˈɔɹɡəˌnaɪz/', meaning:'tổ chức, sắp xếp', type:'verb', example:'They organize events every year.', viAnswers:['tổ chức','sắp xếp']},
      {word:'coordinate', ipa:'/koʊˈɔɹdəˌneɪt/, /koʊˈɔɹdənət/', meaning:'phối hợp', type:'verb', example:'She will coordinate the event.', viAnswers:['phối hợp','điều phối']},
      {word:'decorate', ipa:'/ˈdɛkɝˌeɪt/', meaning:'trang trí', type:'verb', example:'They decorate the room with flowers.', viAnswers:['trang trí']},
      {word:'cater', ipa:'/ˈkeɪtɝ/', meaning:'cung cấp thức ăn, phục vụ ăn uống', type:'verb', example:'Who will cater the wedding?', viAnswers:['cung cấp thức ăn','phục vụ ăn uống','phục vụ tiệc']},
      {word:'entertain', ipa:'/ˌɛnɝˈteɪn/, /ˌɛntɝˈteɪn/', meaning:'giải trí, tiếp đãi', type:'verb', example:'The band will entertain the guests.', viAnswers:['giải trí','tiếp đãi']},
      {word:'speech', ipa:'/ˈspitʃ/', meaning:'bài phát biểu', type:'noun', example:'He gave a great speech.', viAnswers:['bài phát biểu','bài diễn văn']},
      {word:'toast', ipa:'/ˈtoʊst/', meaning:'lời chúc mừng, nâng cốc', type:'noun / verb', example:'Let us make a toast!', viAnswers:['lời chúc mừng','nâng cốc','chúc mừng']},
      {word:'congratulate', ipa:'/kənˈɡɹætʃəˌɫeɪt/', meaning:'chúc mừng', type:'verb', example:'I congratulate you on your success.', viAnswers:['chúc mừng']},
      {word:'participate', ipa:'/pɑɹˈtɪsəˌpeɪt/', meaning:'tham gia', type:'verb', example:'Everyone can participate.', viAnswers:['tham gia']},
      {word:'venue', ipa:'/ˈvɛnju/', meaning:'địa điểm tổ chức', type:'noun', example:'The venue is easy to find.', viAnswers:['địa điểm tổ chức','địa điểm']}
    ]
  },
  {
    day: 44,
    topic: "Nông nghiệp / Thiên nhiên",
    topicEn: "Agriculture / Nature",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Tổng ôn nghe (Listening - Tổng hợp)",
      explanation: "Tổng ôn tất cả kỹ năng nghe TOEIC: Part 1 (mô tả hình ảnh), Part 2 (hỏi-đáp), Part 3 (hội thoại), Part 4 (bài nói). Quy trình làm bài nghe hiệu quả: 1) Đọc trước câu hỏi và đáp án, 2) Gạch chân từ khóa, 3) Nghe và chọn đáp án ngay, 4) Không dừng lại ở câu khó - đi tiếp.",
      structure: "Part 1: Hình ảnh → Part 2: Hỏi-đáp → Part 3: Hội thoại → Part 4: Bài nói",
      examples: [
        "Part 1: The farmer is planting seeds in the field.",
        "Part 2: When is the harvest season? - It starts in September.",
        "Part 3: A: How is the crop this year? B: It is better than last year.",
        "Part 4: Due to the drought, water usage will be limited."
      ],
      tips: "Luyện nghe mỗi ngày 15-30 phút. Nghe đi nghe lại nhiều lần. Lần 1: nghe hiểu ý chính. Lần 2: nghe chi tiết. Lần 3: nghe và đọc transcript."
    },
    words: [
      {word:'farm', ipa:'/ˈfɑɹm/', meaning:'nông trại, trang trại', type:'noun', example:'He works on a farm.', viAnswers:['nông trại','trang trại']},
      {word:'crop', ipa:'/ˈkɹɑp/', meaning:'vụ mùa, cây trồng', type:'noun', example:'Rice is an important crop.', viAnswers:['vụ mùa','cây trồng','mùa vụ']},
      {word:'harvest', ipa:'/ˈhɑɹvəst/', meaning:'thu hoạch', type:'noun / verb', example:'The harvest is in October.', viAnswers:['thu hoạch','mùa thu hoạch','gặt hái']},
      {word:'plant', ipa:'/ˈpɫænt/', meaning:'trồng, cây', type:'verb / noun', example:'They plant trees every spring.', viAnswers:['trồng','cây','thực vật']},
      {word:'seed', ipa:'/ˈsid/', meaning:'hạt giống', type:'noun', example:'Put the seeds in the soil.', viAnswers:['hạt giống','hạt']},
      {word:'soil', ipa:'/ˈsɔɪɫ/', meaning:'đất', type:'noun', example:'The soil is very rich.', viAnswers:['đất','thổ nhưỡng']},
      {word:'fertilizer', ipa:'/ˈfɝtəˌɫaɪzɝ/', meaning:'phân bón', type:'noun', example:'Use fertilizer to help plants grow.', viAnswers:['phân bón']},
      {word:'irrigate', ipa:'/ˈɪɹəˌɡeɪt/', meaning:'tưới tiêu', type:'verb', example:'They irrigate the fields every day.', viAnswers:['tưới tiêu','tưới']},
      {word:'organic', ipa:'/ɔɹˈɡænɪk/', meaning:'hữu cơ', type:'adjective', example:'I prefer organic vegetables.', viAnswers:['hữu cơ']},
      {word:'pesticide', ipa:'/ˈpɛstəˌsaɪd/', meaning:'thuốc trừ sâu', type:'noun', example:'Do not use too much pesticide.', viAnswers:['thuốc trừ sâu']},
      {word:'livestock', ipa:'/ˈɫaɪvˌstɑk/', meaning:'gia súc', type:'noun', example:'The farmer raises livestock.', viAnswers:['gia súc','vật nuôi']},
      {word:'poultry', ipa:'/ˈpoʊɫtɹi/', meaning:'gia cầm', type:'noun', example:'Poultry includes chickens and ducks.', viAnswers:['gia cầm']},
      {word:'dairy', ipa:'/ˈdɛɹi/', meaning:'sản phẩm sữa', type:'noun / adjective', example:'She buys dairy products.', viAnswers:['sản phẩm sữa','sữa','bơ sữa']},
      {word:'grain', ipa:'/ˈɡɹeɪn/', meaning:'ngũ cốc, hạt', type:'noun', example:'Wheat is a common grain.', viAnswers:['ngũ cốc','hạt']},
      {word:'vegetable', ipa:'/ˈvɛdʒtəbəɫ/', meaning:'rau', type:'noun', example:'Eat more vegetables.', viAnswers:['rau','rau củ']},
      {word:'fruit', ipa:'/ˈfɹut/', meaning:'trái cây', type:'noun', example:'I eat fruit every morning.', viAnswers:['trái cây','hoa quả']},
      {word:'orchard', ipa:'/ˈɔɹtʃɝd/', meaning:'vườn cây ăn quả', type:'noun', example:'The orchard has many apple trees.', viAnswers:['vườn cây ăn quả','vườn cây']},
      {word:'greenhouse', ipa:'/ˈɡɹinˌhaʊs/', meaning:'nhà kính', type:'noun', example:'Plants grow fast in a greenhouse.', viAnswers:['nhà kính']},
      {word:'yield', ipa:'/ˈjiɫd/', meaning:'sản lượng, cho ra', type:'noun / verb', example:'The yield was high this year.', viAnswers:['sản lượng','năng suất','cho ra']},
      {word:'cultivate', ipa:'/ˈkəɫtəˌveɪt/', meaning:'canh tác, trồng trọt', type:'verb', example:'They cultivate rice in this area.', viAnswers:['canh tác','trồng trọt']},
      {word:'sustain', ipa:'/səˈsteɪn/', meaning:'duy trì', type:'verb', example:'We must sustain our natural resources.', viAnswers:['duy trì','bền vững']},
      {word:'drought', ipa:'/ˈdɹaʊt/', meaning:'hạn hán', type:'noun', example:'The drought destroyed many crops.', viAnswers:['hạn hán']},
      {word:'fertile', ipa:'/ˈfɝtəɫ/, /fɝˈtaɪɫ/', meaning:'màu mỡ, phì nhiêu', type:'adjective', example:'The land here is very fertile.', viAnswers:['màu mỡ','phì nhiêu']},
      {word:'seasonal', ipa:'/ˈsizənəɫ/', meaning:'theo mùa', type:'adjective', example:'This is a seasonal fruit.', viAnswers:['theo mùa','mùa vụ']},
      {word:'export', ipa:'/ˈɛkspɔɹt/', meaning:'xuất khẩu', type:'noun / verb', example:'Vietnam exports a lot of rice.', viAnswers:['xuất khẩu']}
    ]
  },
  {
    day: 45,
    topic: "Chính sách / Quy trình",
    topicEn: "Policies / Procedures",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Reading Part 5 - Chọn từ loại (Word Forms)",
      explanation: "Trong TOEIC Part 5, bạn cần chọn từ loại đúng để điền vào chỗ trống. Cách nhận biết từ loại: 1) DANH TỪ (noun): đứng sau a/an/the, sau tính từ - đuôi: -tion, -ment, -ness, -ity, -ance. 2) ĐỘNG TỪ (verb): đứng sau chủ ngữ - đuôi: -ize, -ify, -ate. 3) TÍNH TỪ (adjective): đứng trước danh từ, sau be - đuôi: -ful, -less, -ive, -able, -ous. 4) TRẠNG TỪ (adverb): bổ nghĩa cho động từ, tính từ - đuôi: -ly.",
      structure: "Nhìn vị trí chỗ trống → Xác định cần từ loại gì → Chọn đáp án đúng từ loại",
      examples: [
        "The company will ___ the new policy. (implement - verb)",
        "The ___ of the new rule is important. (implementation - noun)",
        "We need ___ guidelines. (regulatory - adjective)",
        "The policy was ___ enforced. (strictly - adverb)"
      ],
exceptions: [
        "Cần điền Trạng từ chứ không phải Tính từ khi chỗ trống đứng trước cụm Tính từ + Danh từ bổ nghĩa: <code>Mạo từ + Trạng từ + Tính từ + Danh từ</code>.",
        "Bẫy phân biệt danh từ chỉ người và danh từ chỉ vật (ví dụ: <i>representative</i> - người đại diện vs. <i>representation</i> - sự đại diện)."
      ],
      notes: [
        "Nguyên tắc vàng làm bài từ loại: Nhìn 1 từ ngay <b>trước</b> và 1 từ ngay <b>sau</b> khoảng trống để xác định loại từ cần điền, sau đó dùng đuôi từ loại để chọn nhanh đáp án."
      ],
            tips: "Học thuộc các đuôi từ phổ biến: -tion (noun), -ly (adverb), -ive (adjective), -ize (verb). Khi làm bài, nhìn VỊ TRÍ chỗ trống trước, rồi mới nhìn đáp án."
    },
    words: [
      {word:'policy', ipa:'/ˈpɑɫəsi/', meaning:'chính sách', type:'noun', example:'The company has a new policy.', viAnswers:['chính sách']},
      {word:'procedure', ipa:'/pɹəˈsidʒɝ/, /pɹoʊˈsidʒɝ/', meaning:'quy trình, thủ tục', type:'noun', example:'Follow the correct procedure.', viAnswers:['quy trình','thủ tục']},
      {word:'guideline', ipa:'/ˈɡaɪdˌɫaɪn/', meaning:'hướng dẫn', type:'noun', example:'Read the guidelines carefully.', viAnswers:['hướng dẫn','nguyên tắc chỉ đạo']},
      {word:'comply', ipa:'/kəmˈpɫaɪ/', meaning:'tuân thủ', type:'verb', example:'All staff must comply with the rules.', viAnswers:['tuân thủ','tuân theo']},
      {word:'enforce', ipa:'/ɛnˈfɔɹs/', meaning:'thực thi, thi hành', type:'verb', example:'The police enforce the law.', viAnswers:['thực thi','thi hành']},
      {word:'implement', ipa:'/ˈɪmpɫəmənt/', meaning:'thực hiện, triển khai', type:'verb', example:'We will implement the plan next month.', viAnswers:['thực hiện','triển khai']},
      {word:'revise', ipa:'/ɹiˈvaɪz/, /ɹɪˈvaɪz/', meaning:'sửa đổi, xem lại', type:'verb', example:'They will revise the document.', viAnswers:['sửa đổi','xem lại','chỉnh sửa']},
      {word:'approve', ipa:'/əˈpɹuv/', meaning:'phê duyệt, chấp thuận', type:'verb', example:'The manager approved the request.', viAnswers:['phê duyệt','chấp thuận']},
      {word:'authorize', ipa:'/ˈɔθɝˌaɪz/', meaning:'ủy quyền, cho phép', type:'verb', example:'Only the director can authorize this.', viAnswers:['ủy quyền','cho phép']},
      {word:'restrict', ipa:'/ɹiˈstɹɪkt/', meaning:'hạn chế', type:'verb', example:'Access is restricted to employees.', viAnswers:['hạn chế','giới hạn']},
      {word:'mandate', ipa:'/ˈmænˌdeɪt/', meaning:'bắt buộc, ủy thác', type:'verb / noun', example:'The government mandates safety checks.', viAnswers:['bắt buộc','ủy thác','chỉ thị']},
      {word:'regulate', ipa:'/ˈɹɛɡjəˌɫeɪt/', meaning:'điều tiết, quản lý', type:'verb', example:'The agency regulates food safety.', viAnswers:['điều tiết','quản lý']},
      {word:'standard', ipa:'/ˈstændɝd/', meaning:'tiêu chuẩn', type:'noun', example:'We follow international standards.', viAnswers:['tiêu chuẩn']},
      {word:'requirement', ipa:'/ɹɪˈkwaɪɹmənt/', meaning:'yêu cầu', type:'noun', example:'What are the requirements for this job?', viAnswers:['yêu cầu','điều kiện']},
      {word:'exception', ipa:'/ɪkˈsɛpʃən/', meaning:'ngoại lệ', type:'noun', example:'There is no exception to this rule.', viAnswers:['ngoại lệ']},
      {word:'penalty', ipa:'/ˈpɛnəɫti/', meaning:'hình phạt', type:'noun', example:'The penalty for being late is a fine.', viAnswers:['hình phạt','phạt']},
      {word:'violation', ipa:'/vaɪəˈɫeɪʃən/', meaning:'vi phạm', type:'noun', example:'This is a serious violation.', viAnswers:['vi phạm','sự vi phạm']},
      {word:'monitor', ipa:'/ˈmɑnətɝ/', meaning:'giám sát, theo dõi', type:'verb', example:'We monitor the system every day.', viAnswers:['giám sát','theo dõi']},
      {word:'assess', ipa:'/əˈsɛs/', meaning:'đánh giá', type:'verb', example:'We need to assess the risk.', viAnswers:['đánh giá']},
      {word:'evaluate', ipa:'/iˈvæɫjuˌeɪt/, /ɪˈvæɫjuˌeɪt/', meaning:'đánh giá, định giá', type:'verb', example:'The teacher will evaluate your work.', viAnswers:['đánh giá','định giá']},
      {word:'criteria', ipa:'/kɹaɪˈtɪɹiə/', meaning:'tiêu chí', type:'noun', example:'What are the criteria for selection?', viAnswers:['tiêu chí']},
      {word:'benchmark', ipa:'/ˈbɛntʃˌmɑɹk/', meaning:'tiêu chuẩn đối sánh', type:'noun', example:'This is the benchmark for quality.', viAnswers:['tiêu chuẩn đối sánh','chuẩn mực','điểm chuẩn']},
      {word:'framework', ipa:'/ˈfɹeɪmˌwɝk/', meaning:'khung, khuôn khổ', type:'noun', example:'The framework of the project is clear.', viAnswers:['khung','khuôn khổ','bộ khung']},
      {word:'protocol', ipa:'/ˈpɹoʊtəˌkɑɫ/, /ˈpɹoʊtəˌkɔɫ/', meaning:'quy tắc, giao thức', type:'noun', example:'Follow the safety protocol.', viAnswers:['quy tắc','giao thức','nghi thức']},
      {word:'oversight', ipa:'/ˈoʊvɝˌsaɪt/', meaning:'sự giám sát', type:'noun', example:'The committee provides oversight.', viAnswers:['sự giám sát','giám sát','sơ suất']}
    ]
  },
  {
    day: 46,
    topic: "Đào tạo",
    topicEn: "Training",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Reading Part 5 - Thì động từ (Verb Tenses)",
      explanation: "Trong TOEIC Part 5, bạn cần chọn thì động từ đúng. Các dấu hiệu nhận biết: 1) Hiện tại đơn: always, usually, every day, often. 2) Quá khứ đơn: yesterday, last week, ago, in 2020. 3) Hiện tại hoàn thành: since, for, already, yet, recently. 4) Tương lai: tomorrow, next week, will, be going to. 5) Hiện tại tiếp diễn: now, currently, at the moment.",
      structure: "Tìm dấu hiệu thời gian → Chọn thì phù hợp",
      examples: [
        "The training program ___ last month. (started - quá khứ đơn, vì 'last month')",
        "She ___ three courses since January. (has completed - hiện tại hoàn thành, vì 'since')",
        "The workshop ___ every Friday. (takes place - hiện tại đơn, vì 'every Friday')",
        "They ___ a new program next year. (will launch - tương lai, vì 'next year')"
      ],
exceptions: [
        "Sự hòa hợp các thì trong câu có <b>since</b>: Mệnh đề chứa <i>since</i> chia ở thì <b>Quá khứ đơn</b>, mệnh đề chính chia ở thì <b>Hiện tại hoàn thành</b> (ví dụ: <i>We have grown since he joined us</i>).",
        "Khi hành động đang xảy ra (Quá khứ tiếp diễn) thì có hành động ngắn khác xen vào (Quá khứ đơn): dùng <b>when / while</b>."
      ],
      notes: [
        "Luôn luôn dựa vào trạng từ chỉ thời gian trong câu (như <i>recently, already, tomorrow, next week</i>...) để xác định thì chính xác của động từ."
      ],
            tips: "Gạch chân trạng từ chỉ thời gian trong câu trước. Đó là chìa khóa để chọn thì đúng. Nếu không có trạng từ, nhìn ngữ cảnh câu."
    },
    words: [
      {word:'training', ipa:'/ˈtɹeɪnɪŋ/', meaning:'đào tạo, huấn luyện', type:'noun', example:'The training starts on Monday.', viAnswers:['đào tạo','huấn luyện']},
      {word:'workshop', ipa:'/ˈwɝkˌʃɑp/', meaning:'hội thảo thực hành', type:'noun', example:'I attended a writing workshop.', viAnswers:['hội thảo thực hành','hội thảo','xưởng']},
      {word:'seminar', ipa:'/ˈsɛməˌnɑɹ/', meaning:'hội thảo chuyên đề', type:'noun', example:'The seminar is about marketing.', viAnswers:['hội thảo chuyên đề','hội thảo']},
      {word:'program', ipa:'/ˈpɹoʊˌɡɹæm/', meaning:'chương trình', type:'noun', example:'This is a new training program.', viAnswers:['chương trình']},
      {word:'curriculum', ipa:'/kɝˈɪkjəɫəm/', meaning:'chương trình giảng dạy', type:'noun', example:'The curriculum has been updated.', viAnswers:['chương trình giảng dạy','giáo trình']},
      {word:'instructor', ipa:'/ˌɪnˈstɹəktɝ/', meaning:'giảng viên, người hướng dẫn', type:'noun', example:'The instructor is very experienced.', viAnswers:['giảng viên','người hướng dẫn']},
      {word:'participant', ipa:'/pɑɹˈtɪsəpənt/', meaning:'người tham gia', type:'noun', example:'There are 50 participants.', viAnswers:['người tham gia']},
      {word:'material', ipa:'/məˈtɪɹiəɫ/', meaning:'tài liệu', type:'noun', example:'Please bring your training materials.', viAnswers:['tài liệu','vật liệu']},
      {word:'module', ipa:'/ˈmɑdʒuɫ/', meaning:'mô-đun, phần học', type:'noun', example:'This course has five modules.', viAnswers:['mô-đun','phần học','module']},
      {word:'session', ipa:'/ˈsɛʃən/', meaning:'buổi học, phiên', type:'noun', example:'The morning session is two hours.', viAnswers:['buổi học','phiên','buổi']},
      {word:'skill', ipa:'/ˈskɪɫ/', meaning:'kỹ năng', type:'noun', example:'Communication is an important skill.', viAnswers:['kỹ năng']},
      {word:'develop', ipa:'/dɪˈvɛɫəp/', meaning:'phát triển', type:'verb', example:'We develop new skills every day.', viAnswers:['phát triển']},
      {word:'certify', ipa:'/ˈsɝtəˌfaɪ/', meaning:'chứng nhận, cấp chứng chỉ', type:'verb', example:'The course will certify you.', viAnswers:['chứng nhận','cấp chứng chỉ']},
      {word:'accredit', ipa:'/əˌkɹɛdət/', meaning:'công nhận, cấp phép', type:'verb', example:'The university is accredited.', viAnswers:['công nhận','cấp phép']},
      {word:'evaluate', ipa:'/iˈvæɫjuˌeɪt/, /ɪˈvæɫjuˌeɪt/', meaning:'đánh giá', type:'verb', example:'We evaluate each student carefully.', viAnswers:['đánh giá']},
      {word:'assess', ipa:'/əˈsɛs/', meaning:'đánh giá, nhận định', type:'verb', example:'The test will assess your level.', viAnswers:['đánh giá','nhận định']},
      {word:'competent', ipa:'/ˈkɑmpətɪnt/', meaning:'có năng lực', type:'adjective', example:'She is a competent manager.', viAnswers:['có năng lực','đủ năng lực','thành thạo']},
      {word:'proficient', ipa:'/pɹɑˈfɪʃənt/', meaning:'thành thạo, thông thạo', type:'adjective', example:'He is proficient in English.', viAnswers:['thành thạo','thông thạo']},
      {word:'beginner', ipa:'/bɪˈɡɪnɝ/', meaning:'người mới bắt đầu', type:'noun', example:'This class is for beginners.', viAnswers:['người mới bắt đầu','người mới']},
      {word:'advanced', ipa:'/ədˈvænst/', meaning:'nâng cao', type:'adjective', example:'She took an advanced course.', viAnswers:['nâng cao','trình độ cao']},
      {word:'mentor', ipa:'/ˈmɛnˌtɔɹ/, /ˈmɛntɝ/', meaning:'người cố vấn', type:'noun', example:'My mentor helped me a lot.', viAnswers:['người cố vấn','cố vấn']},
      {word:'coach', ipa:'/ˈkoʊtʃ/', meaning:'huấn luyện viên', type:'noun / verb', example:'He is my business coach.', viAnswers:['huấn luyện viên','huấn luyện']},
      {word:'guide', ipa:'/ˈɡaɪd/', meaning:'hướng dẫn, người hướng dẫn', type:'noun / verb', example:'The guide showed us around.', viAnswers:['hướng dẫn','người hướng dẫn']},
      {word:'practice', ipa:'/ˈpɹæktəs/, /ˈpɹæktɪs/', meaning:'thực hành, luyện tập', type:'noun / verb', example:'Practice makes perfect.', viAnswers:['thực hành','luyện tập']},
      {word:'demonstrate', ipa:'/ˈdɛmənˌstɹeɪt/', meaning:'minh họa, trình diễn', type:'verb', example:'She demonstrated how to use it.', viAnswers:['minh họa','trình diễn','chứng minh']}
    ]
  },
  {
    day: 47,
    topic: "Bảo hiểm",
    topicEn: "Insurance",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Reading Part 5 - Giới từ (Prepositions)",
      explanation: "Giới từ là phần hay gặp trong TOEIC Part 5. Cần nhớ các giới từ đi với danh từ, động từ, tính từ: 1) Giới từ chỉ thời gian: in (tháng, năm), on (ngày), at (giờ), by (trước thời hạn), within (trong vòng). 2) Giới từ chỉ nơi chốn: in, on, at, between, among. 3) Cụm giới từ cố định: depend on, apply for, responsible for, comply with.",
      structure: "Verb/Adj/Noun + Preposition (học thuộc cụm cố định)",
      examples: [
        "The insurance policy is valid ___ two years. (for)",
        "You must file a claim ___ 30 days. (within)",
        "The coverage depends ___ the plan you choose. (on)",
        "She applied ___ health insurance. (for)"
      ],
exceptions: [
        "Một số tính từ đi với giới từ cố định bắt buộc phải học thuộc: <i>responsible for (chịu trách nhiệm), interested in (quan tâm), associated with (liên kết với), compatible with (tương thích với), equivalent to (tương đương với)</i>."
      ],
      notes: [
        "Học thuộc các động từ đi kèm giới từ tạo cụm từ thông dụng: <i>comply with (tuân thủ), depend on (phụ thuộc), participate in (tham gia), agree on (đồng ý về việc gì)</i>."
      ],
            tips: "Giới từ không có quy tắc rõ ràng - phải HỌC THUỘC từng cụm. Mỗi ngày học 3-5 cụm giới từ. Ví dụ: apply for, depend on, responsible for, comply with."
    },
    words: [
      {word:'insurance', ipa:'/ˌɪnˈʃʊɹəns/', meaning:'bảo hiểm', type:'noun', example:'Do you have health insurance?', viAnswers:['bảo hiểm']},
      {word:'policy', ipa:'/ˈpɑɫəsi/', meaning:'hợp đồng bảo hiểm', type:'noun', example:'Review your insurance policy.', viAnswers:['hợp đồng bảo hiểm','chính sách']},
      {word:'premium', ipa:'/ˈpɹimiəm/', meaning:'phí bảo hiểm', type:'noun', example:'The monthly premium is $200.', viAnswers:['phí bảo hiểm','phí']},
      {word:'coverage', ipa:'/ˈkəvɝədʒ/, /ˈkəvɝɪdʒ/, /ˈkəvɹɪdʒ/', meaning:'phạm vi bảo hiểm', type:'noun', example:'The coverage includes dental care.', viAnswers:['phạm vi bảo hiểm','bảo hiểm','sự bao phủ']},
      {word:'claim', ipa:'/ˈkɫeɪm/', meaning:'yêu cầu bồi thường', type:'noun / verb', example:'She filed a claim after the accident.', viAnswers:['yêu cầu bồi thường','khiếu nại']},
      {word:'deductible', ipa:'/dɪˈdəktəbəɫ/', meaning:'khoản khấu trừ', type:'noun', example:'The deductible is $500.', viAnswers:['khoản khấu trừ','mức miễn thường']},
      {word:'benefit', ipa:'/ˈbɛnəfɪt/', meaning:'quyền lợi, lợi ích', type:'noun', example:'The benefits are very good.', viAnswers:['quyền lợi','lợi ích']},
      {word:'provider', ipa:'/pɹəˈvaɪdɝ/', meaning:'nhà cung cấp', type:'noun', example:'Choose an insurance provider.', viAnswers:['nhà cung cấp']},
      {word:'liability', ipa:'/ˌɫaɪəˈbɪɫɪti/', meaning:'trách nhiệm bồi thường', type:'noun', example:'The liability is limited.', viAnswers:['trách nhiệm bồi thường','trách nhiệm pháp lý','trách nhiệm']},
      {word:'property', ipa:'/ˈpɹɑpɝti/', meaning:'tài sản', type:'noun', example:'Insure your property against fire.', viAnswers:['tài sản','bất động sản']},
      {word:'damage', ipa:'/ˈdæmədʒ/, /ˈdæmɪdʒ/', meaning:'thiệt hại, hư hại', type:'noun / verb', example:'The storm caused a lot of damage.', viAnswers:['thiệt hại','hư hại','tổn hại']},
      {word:'accident', ipa:'/ˈæksədənt/', meaning:'tai nạn', type:'noun', example:'He had a car accident.', viAnswers:['tai nạn']},
      {word:'injury', ipa:'/ˈɪndʒɝi/', meaning:'chấn thương', type:'noun', example:'She suffered a minor injury.', viAnswers:['chấn thương','thương tích']},
      {word:'medical', ipa:'/ˈmɛdəkəɫ/, /ˈmɛdɪkəɫ/', meaning:'y tế, thuộc y khoa', type:'adjective', example:'Medical insurance is important.', viAnswers:['y tế','thuộc y khoa']},
      {word:'dental', ipa:'/ˈdɛnəɫ/, /ˈdɛntəɫ/', meaning:'nha khoa', type:'adjective', example:'I need dental insurance.', viAnswers:['nha khoa','thuộc nha khoa']},
      {word:'vision', ipa:'/ˈvɪʒən/', meaning:'thị lực, thị giác', type:'noun', example:'Vision care is covered.', viAnswers:['thị lực','thị giác','tầm nhìn']},
      {word:'disability', ipa:'/ˌdɪsəˈbɪɫɪti/, /dɪsəˈbɪɫɪtiz/', meaning:'khuyết tật, tàn tật', type:'noun', example:'Disability insurance helps workers.', viAnswers:['khuyết tật','tàn tật','sự khuyết tật']},
      {word:'life', ipa:'/ˈɫaɪf/', meaning:'cuộc sống, nhân thọ', type:'noun', example:'He has life insurance.', viAnswers:['cuộc sống','nhân thọ','đời sống']},
      {word:'health', ipa:'/ˈhɛɫθ/', meaning:'sức khỏe', type:'noun', example:'Health insurance is required.', viAnswers:['sức khỏe']},
      {word:'renew', ipa:'/ɹɪˈnu/', meaning:'gia hạn, đổi mới', type:'verb', example:'Renew your policy before it expires.', viAnswers:['gia hạn','đổi mới','làm mới']},
      {word:'cancel', ipa:'/ˈkænsəɫ/', meaning:'hủy bỏ', type:'verb', example:'You can cancel the policy anytime.', viAnswers:['hủy bỏ','hủy']},
      {word:'exclude', ipa:'/ɪkˈskɫud/', meaning:'loại trừ', type:'verb', example:'Some conditions are excluded.', viAnswers:['loại trừ','không bao gồm']},
      {word:'reimburse', ipa:'/ˌɹiɪmˈbɝs/', meaning:'hoàn trả, bồi hoàn', type:'verb', example:'The company will reimburse your costs.', viAnswers:['hoàn trả','bồi hoàn']},
      {word:'approve', ipa:'/əˈpɹuv/', meaning:'phê duyệt, chấp thuận', type:'verb', example:'The claim was approved.', viAnswers:['phê duyệt','chấp thuận']},
      {word:'dependent', ipa:'/dɪˈpɛndənt/', meaning:'người phụ thuộc', type:'noun / adjective', example:'Add your dependents to the plan.', viAnswers:['người phụ thuộc','phụ thuộc']}
    ]
  },
  {
    day: 48,
    topic: "Bất động sản",
    topicEn: "Real Estate",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Reading Part 5 - Liên từ (Conjunctions)",
      explanation: "Liên từ nối các mệnh đề trong câu. Có 3 loại chính: 1) Liên từ kết hợp (and, but, or, so, yet): nối 2 mệnh đề ngang hàng. 2) Liên từ phụ thuộc (because, although, if, when, while, unless, until, before, after, since): nối mệnh đề phụ với mệnh đề chính. 3) Liên từ tương quan (both...and, either...or, neither...nor, not only...but also).",
      structure: "Clause 1 + conjunction + Clause 2",
      examples: [
        "___ the property is expensive, it is in a great location. (Although)",
        "We will sign the lease ___ we agree on the price. (after / when)",
        "The tenant must pay rent ___ the landlord will cancel the lease. (or)",
        "___ the house is old, it needs renovation. (Because / Since)"
      ],
exceptions: [
        "Các cặp liên từ tương hỗ luôn đi cùng nhau: <i>either... or...</i>, <i>neither... nor...</i>, <i>both... and...</i>, <i>not only... but also...</i>, <i>whether... or...</i>"
      ],
      notes: [
        "Khi làm bài thi Part 5, nếu thấy một trong các từ trong cặp tương hỗ nằm ở vế sau của chỗ trống, hãy chọn ngay từ còn lại đi kèm."
      ],
            tips: "Đọc cả 2 mệnh đề để hiểu QUAN HỆ LOGIC giữa chúng: nguyên nhân → because/since, tương phản → although/even though, điều kiện → if/unless, thời gian → when/while/before/after."
    },
    words: [
      {word:'property', ipa:'/ˈpɹɑpɝti/', meaning:'bất động sản, tài sản', type:'noun', example:'They own several properties.', viAnswers:['bất động sản','tài sản']},
      {word:'land', ipa:'/ˈɫænd/', meaning:'đất đai', type:'noun', example:'The land is for sale.', viAnswers:['đất đai','đất']},
      {word:'building', ipa:'/ˈbɪɫdɪŋ/', meaning:'tòa nhà', type:'noun', example:'The building has ten floors.', viAnswers:['tòa nhà','công trình']},
      {word:'commercial', ipa:'/kəˈmɝʃəɫ/', meaning:'thương mại', type:'adjective', example:'This is a commercial area.', viAnswers:['thương mại']},
      {word:'residential', ipa:'/ˌɹɛzɪˈdɛnʃəɫ/', meaning:'dân cư, nhà ở', type:'adjective', example:'This is a residential neighborhood.', viAnswers:['dân cư','nhà ở','khu dân cư']},
      {word:'lease', ipa:'/ˈɫis/', meaning:'hợp đồng thuê', type:'noun / verb', example:'The lease is for one year.', viAnswers:['hợp đồng thuê','thuê']},
      {word:'rent', ipa:'/ˈɹɛnt/', meaning:'tiền thuê, thuê', type:'noun / verb', example:'The rent is $1000 per month.', viAnswers:['tiền thuê','thuê']},
      {word:'purchase', ipa:'/ˈpɝtʃəs/', meaning:'mua', type:'verb / noun', example:'They want to purchase a house.', viAnswers:['mua','mua sắm']},
      {word:'mortgage', ipa:'/ˈmɔɹɡədʒ/, /ˈmɔɹɡɪdʒ/', meaning:'thế chấp', type:'noun', example:'They got a mortgage from the bank.', viAnswers:['thế chấp','vay thế chấp']},
      {word:'appraisal', ipa:'/əˈpɹeɪzəɫ/', meaning:'sự thẩm định giá', type:'noun', example:'The appraisal shows the house value.', viAnswers:['sự thẩm định giá','thẩm định','định giá']},
      {word:'listing', ipa:'/ˈɫɪstɪŋ/', meaning:'danh sách bán, tin rao bán', type:'noun', example:'Check the new property listings.', viAnswers:['danh sách bán','tin rao bán','niêm yết']},
      {word:'agent', ipa:'/ˈeɪdʒənt/', meaning:'đại lý, môi giới', type:'noun', example:'The real estate agent helped us.', viAnswers:['đại lý','môi giới','nhân viên môi giới']},
      {word:'broker', ipa:'/ˈbɹoʊkɝ/', meaning:'người môi giới', type:'noun', example:'The broker found a good deal.', viAnswers:['người môi giới','môi giới']},
      {word:'commission', ipa:'/kəˈmɪʃən/', meaning:'hoa hồng, tiền hoa hồng', type:'noun', example:'The agent earns a commission.', viAnswers:['hoa hồng','tiền hoa hồng']},
      {word:'inspection', ipa:'/ˌɪnˈspɛkʃən/', meaning:'kiểm tra', type:'noun', example:'The inspection found no problems.', viAnswers:['kiểm tra','sự kiểm tra']},
      {word:'zoning', ipa:'/ˈzoʊnɪŋ/', meaning:'quy hoạch khu vực', type:'noun', example:'Zoning laws limit building height.', viAnswers:['quy hoạch khu vực','quy hoạch','phân vùng']},
      {word:'permit', ipa:'/ˈpɝˌmɪt/, /pɝˈmɪt/', meaning:'giấy phép', type:'noun', example:'You need a building permit.', viAnswers:['giấy phép']},
      {word:'renovation', ipa:'/ˌɹɛnəˈveɪʃən/', meaning:'sửa chữa, cải tạo', type:'noun', example:'The renovation took three months.', viAnswers:['sửa chữa','cải tạo','tu sửa']},
      {word:'tenant', ipa:'/ˈtɛnənt/', meaning:'người thuê', type:'noun', example:'The tenant pays rent on time.', viAnswers:['người thuê','người thuê nhà']},
      {word:'landlord', ipa:'/ˈɫændˌɫɔɹd/', meaning:'chủ nhà (cho thuê)', type:'noun', example:'The landlord fixed the roof.', viAnswers:['chủ nhà','chủ cho thuê']},
      {word:'vacancy', ipa:'/ˈveɪkənsi/', meaning:'phòng trống, chỗ trống', type:'noun', example:'There is a vacancy on the third floor.', viAnswers:['phòng trống','chỗ trống']},
      {word:'occupy', ipa:'/ˈɑkjəˌpaɪ/', meaning:'chiếm, ở, sử dụng', type:'verb', example:'The office is occupied.', viAnswers:['chiếm','ở','sử dụng','chiếm giữ']},
      {word:'relocate', ipa:'/ˌɹiˈɫoʊkeɪt/', meaning:'di dời, chuyển chỗ', type:'verb', example:'The company will relocate next year.', viAnswers:['di dời','chuyển chỗ','chuyển đi']},
      {word:'suburb', ipa:'/ˈsəbɝb/', meaning:'ngoại ô, vùng ven', type:'noun', example:'They live in the suburbs.', viAnswers:['ngoại ô','vùng ven']},
      {word:'downtown', ipa:'/ˈdaʊnˈtaʊn/', meaning:'trung tâm thành phố', type:'noun / adverb', example:'The office is downtown.', viAnswers:['trung tâm thành phố','trung tâm']}
    ]
  },
  {
    day: 49,
    topic: "Thuế",
    topicEn: "Taxes",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Reading Part 5 - Đại từ (Pronouns)",
      explanation: "Đại từ thường xuất hiện trong TOEIC Part 5. Các loại đại từ cần nhớ: 1) Đại từ nhân xưng: I, you, he, she, it, we, they. 2) Đại từ tân ngữ: me, you, him, her, it, us, them. 3) Tính từ sở hữu: my, your, his, her, its, our, their. 4) Đại từ sở hữu: mine, yours, his, hers, ours, theirs. 5) Đại từ phản thân: myself, yourself, himself, herself, itself, ourselves, themselves.",
      structure: "Chủ ngữ → đại từ nhân xưng | Tân ngữ → đại từ tân ngữ | Trước danh từ → tính từ sở hữu",
      examples: [
        "Each taxpayer must file ___ return on time. (his/her - tính từ sở hữu)",
        "The accountant prepared the report ___. (herself - đại từ phản thân)",
        "The company paid ___ taxes early. (its - tính từ sở hữu)",
        "___ who file late will pay a penalty. (Those - đại từ chỉ định)"
      ],
exceptions: [
        "Đại từ phản thân (myself, himself, themselves...) đứng ở cuối câu hoặc đứng ngay sau Chủ ngữ nhằm nhấn mạnh việc tự tay làm hành động.",
        "Cấu trúc <code>by + đại từ phản thân</code> tương đương với cụm từ <code>on one's own</code> (tự mình, một mình)."
      ],
      notes: [
        "Phân biệt Tính từ sở hữu (<i>my, his, her, their</i> + Danh từ) và Đại từ sở hữu (<i>mine, his, hers, theirs</i> - đóng vai trò như cụm danh từ, không đi kèm danh từ)."
      ],
            tips: "Nhìn vị trí chỗ trống: trước danh từ → tính từ sở hữu (my, your, his...). Sau động từ → tân ngữ (me, him, her...). Đứng một mình → đại từ sở hữu (mine, yours...)."
    },
    words: [
      {word:'tax', ipa:'/ˈtæks/', meaning:'thuế', type:'noun', example:'Everyone must pay taxes.', viAnswers:['thuế']},
      {word:'income', ipa:'/ˈɪnˌkəm/', meaning:'thu nhập', type:'noun', example:'Her income is high.', viAnswers:['thu nhập']},
      {word:'revenue', ipa:'/ˈɹɛvəˌnu/, /ˈɹɛvənˌju/', meaning:'doanh thu', type:'noun', example:'The company revenue grew.', viAnswers:['doanh thu']},
      {word:'deduction', ipa:'/dɪˈdəkʃən/', meaning:'khoản khấu trừ', type:'noun', example:'You can claim a tax deduction.', viAnswers:['khoản khấu trừ','khấu trừ']},
      {word:'exemption', ipa:'/ɪɡˈzɛmpʃən/, /ɪɡˈzɛmʃən/', meaning:'miễn trừ', type:'noun', example:'He has a tax exemption.', viAnswers:['miễn trừ','sự miễn trừ']},
      {word:'refund', ipa:'/ˈɹiˌfənd/, /ɹɪˈfənd/', meaning:'hoàn thuế, tiền hoàn lại', type:'noun / verb', example:'I got a tax refund.', viAnswers:['hoàn thuế','tiền hoàn lại','hoàn trả']},
      {word:'file', ipa:'/ˈfaɪɫ/', meaning:'nộp, khai', type:'verb', example:'File your tax return before April.', viAnswers:['nộp','khai','nộp hồ sơ']},
      {word:'return', ipa:'/ɹiˈtɝn/, /ɹɪˈtɝn/', meaning:'tờ khai thuế', type:'noun', example:'Submit your tax return on time.', viAnswers:['tờ khai thuế','tờ khai','sự trở về']},
      {word:'audit', ipa:'/ˈɔdɪt/', meaning:'kiểm toán', type:'noun / verb', example:'The company had a tax audit.', viAnswers:['kiểm toán']},
      {word:'comply', ipa:'/kəmˈpɫaɪ/', meaning:'tuân thủ', type:'verb', example:'You must comply with tax laws.', viAnswers:['tuân thủ','tuân theo']},
      {word:'penalty', ipa:'/ˈpɛnəɫti/', meaning:'tiền phạt', type:'noun', example:'Pay the penalty for late filing.', viAnswers:['tiền phạt','hình phạt']},
      {word:'deadline', ipa:'/ˈdɛdˌɫaɪn/', meaning:'hạn chót', type:'noun', example:'The tax deadline is April 15.', viAnswers:['hạn chót','thời hạn']},
      {word:'withhold', ipa:'/wɪθˈhoʊɫd/', meaning:'khấu trừ, giữ lại', type:'verb', example:'The employer withholds tax from salary.', viAnswers:['khấu trừ','giữ lại']},
      {word:'payroll', ipa:'/ˈpeɪˌɹoʊɫ/', meaning:'bảng lương', type:'noun', example:'Payroll taxes are paid monthly.', viAnswers:['bảng lương']},
      {word:'corporate', ipa:'/ˈkɔɹpɝət/, /ˈkɔɹpɹət/', meaning:'doanh nghiệp, công ty', type:'adjective', example:'Corporate tax is 20%.', viAnswers:['doanh nghiệp','công ty','thuộc công ty']},
      {word:'individual', ipa:'/ˌɪndəˈvɪdʒəwəɫ/', meaning:'cá nhân', type:'noun / adjective', example:'Individual tax rates vary.', viAnswers:['cá nhân']},
      {word:'capital', ipa:'/ˈkæpətəɫ/, /ˈkæpɪtəɫ/', meaning:'vốn, tư bản', type:'noun', example:'Capital gains are taxed.', viAnswers:['vốn','tư bản']},
      {word:'gain', ipa:'/ˈɡeɪn/', meaning:'lợi nhuận, lãi', type:'noun', example:'Report all gains on your return.', viAnswers:['lợi nhuận','lãi','thu được']},
      {word:'loss', ipa:'/ˈɫɔs/', meaning:'lỗ, mất mát', type:'noun', example:'The company reported a loss.', viAnswers:['lỗ','mất mát','thua lỗ']},
      {word:'bracket', ipa:'/ˈbɹækɪt/', meaning:'khung thuế, bậc thuế', type:'noun', example:'Which tax bracket are you in?', viAnswers:['khung thuế','bậc thuế']},
      {word:'rate', ipa:'/ˈɹeɪt/', meaning:'tỷ lệ, mức', type:'noun', example:'The tax rate is 10%.', viAnswers:['tỷ lệ','mức']},
      {word:'calculate', ipa:'/ˈkæɫkjəˌɫeɪt/', meaning:'tính toán', type:'verb', example:'Calculate your total tax.', viAnswers:['tính toán','tính']},
      {word:'owe', ipa:'/ˈoʊ/', meaning:'nợ', type:'verb', example:'You owe $500 in taxes.', viAnswers:['nợ']},
      {word:'receipt', ipa:'/ɹiˈsit/, /ɹɪˈsit/', meaning:'biên lai, hóa đơn', type:'noun', example:'Keep all your receipts.', viAnswers:['biên lai','hóa đơn']},
      {word:'accountant', ipa:'/əˈkaʊntənt/', meaning:'kế toán', type:'noun', example:'Ask your accountant for help.', viAnswers:['kế toán','nhân viên kế toán']}
    ]
  },
  {
    day: 50,
    topic: "Nghiên cứu",
    topicEn: "Research",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Reading Part 5 - Câu bị động (Passive Voice)",
      explanation: "Câu bị động được dùng khi muốn nhấn mạnh đối tượng chịu tác động hoặc khi không biết ai thực hiện hành động. Cấu trúc: Subject + be + V3/ed (+ by agent). Các thì bị động thường gặp: 1) Hiện tại đơn: is/are + V3. 2) Quá khứ đơn: was/were + V3. 3) Hiện tại hoàn thành: has/have been + V3. 4) Tương lai: will be + V3.",
      structure: "Subject + be + past participle (V3) + (by + agent)",
      examples: [
        "The research ___ conducted by a team of scientists. (was - quá khứ bị động)",
        "The data ___ being analyzed now. (is - hiện tại tiếp diễn bị động)",
        "The results ___ published next month. (will be - tương lai bị động)",
        "The report has ___ reviewed by experts. (been - hiện tại hoàn thành bị động)"
      ],
exceptions: [
        "Một số cụm từ mang hình thức bị động nhưng lại dùng để diễn tả trạng thái chủ động: <i>be located in/at</i> (nằm ở vị trí), <i>be dedicated/devoted to</i> (tận tụy, cống hiến cho), <i>be interested in</i> (hứng thú với)."
      ],
      notes: [
        "Nếu chỗ trống đứng trước cụm giới từ (<i>by, to, in, at, with</i>...) hoặc trạng từ, hãy ưu tiên chọn câu bị động."
      ],
            tips: "Nếu chủ ngữ là người/vật CHỊU tác động → dùng bị động. Dấu hiệu: có 'by + ai đó' phía sau, hoặc không đề cập ai thực hiện hành động."
    },
    words: [
      {word:'research', ipa:'/ˈɹisɝtʃ/, /ɹiˈsɝtʃ/', meaning:'nghiên cứu', type:'noun / verb', example:'The research takes two years.', viAnswers:['nghiên cứu']},
      {word:'study', ipa:'/ˈstədi/', meaning:'nghiên cứu, học', type:'noun / verb', example:'The study shows good results.', viAnswers:['nghiên cứu','học','học tập']},
      {word:'experiment', ipa:'/ɪkˈspɛɹəmənt/', meaning:'thí nghiệm', type:'noun', example:'The experiment was successful.', viAnswers:['thí nghiệm']},
      {word:'data', ipa:'/ˈdætə/, /ˈdeɪtə/', meaning:'dữ liệu', type:'noun', example:'We need more data.', viAnswers:['dữ liệu','số liệu']},
      {word:'analyze', ipa:'/ˈænəˌɫaɪz/', meaning:'phân tích', type:'verb', example:'Analyze the data carefully.', viAnswers:['phân tích']},
      {word:'result', ipa:'/ɹiˈzəɫt/, /ɹɪˈzəɫt/', meaning:'kết quả', type:'noun', example:'The results are positive.', viAnswers:['kết quả']},
      {word:'finding', ipa:'/ˈfaɪndɪŋ/', meaning:'phát hiện, kết luận', type:'noun', example:'The findings were surprising.', viAnswers:['phát hiện','kết luận']},
      {word:'conclusion', ipa:'/kənˈkɫuʒən/', meaning:'kết luận', type:'noun', example:'The conclusion is clear.', viAnswers:['kết luận']},
      {word:'hypothesis', ipa:'/haɪˈpɑθəsəs/', meaning:'giả thuyết', type:'noun', example:'The hypothesis was proven correct.', viAnswers:['giả thuyết']},
      {word:'method', ipa:'/ˈmɛθəd/', meaning:'phương pháp', type:'noun', example:'Use the correct method.', viAnswers:['phương pháp']},
      {word:'survey', ipa:'/ˈsɝˌveɪ/, /sɝˈveɪ/', meaning:'khảo sát', type:'noun / verb', example:'We conducted a survey.', viAnswers:['khảo sát','cuộc khảo sát']},
      {word:'sample', ipa:'/ˈsæmpəɫ/', meaning:'mẫu', type:'noun', example:'We tested a small sample.', viAnswers:['mẫu','mẫu thử']},
      {word:'statistics', ipa:'/stəˈtɪstɪks/', meaning:'thống kê', type:'noun', example:'The statistics support our theory.', viAnswers:['thống kê','số liệu thống kê']},
      {word:'evidence', ipa:'/ˈɛvədəns/', meaning:'bằng chứng', type:'noun', example:'There is strong evidence.', viAnswers:['bằng chứng','chứng cứ']},
      {word:'report', ipa:'/ɹiˈpɔɹt/, /ɹɪˈpɔɹt/', meaning:'báo cáo', type:'noun / verb', example:'Write a report about the project.', viAnswers:['báo cáo']},
      {word:'publish', ipa:'/ˈpəbɫɪʃ/', meaning:'xuất bản, công bố', type:'verb', example:'They published the results.', viAnswers:['xuất bản','công bố']},
      {word:'peer', ipa:'/ˈpɪɹ/', meaning:'đồng nghiệp, ngang hàng', type:'noun / adjective', example:'The paper was peer reviewed.', viAnswers:['đồng nghiệp','ngang hàng']},
      {word:'review', ipa:'/ˌɹivˈju/', meaning:'đánh giá, xem xét', type:'noun / verb', example:'The review process takes time.', viAnswers:['đánh giá','xem xét']},
      {word:'journal', ipa:'/ˈdʒɝnəɫ/', meaning:'tạp chí khoa học', type:'noun', example:'The article was published in a journal.', viAnswers:['tạp chí khoa học','tạp chí','nhật ký']},
      {word:'academic', ipa:'/ˌækəˈdɛmɪk/', meaning:'học thuật', type:'adjective', example:'He has an academic background.', viAnswers:['học thuật','thuộc học thuật']},
      {word:'theory', ipa:'/ˈθiɝi/, /ˈθɪɹi/', meaning:'lý thuyết', type:'noun', example:'The theory is interesting.', viAnswers:['lý thuyết']},
      {word:'observe', ipa:'/əbˈzɝv/', meaning:'quan sát', type:'verb', example:'We observe the changes carefully.', viAnswers:['quan sát']},
      {word:'measure', ipa:'/ˈmɛʒɝ/', meaning:'đo lường', type:'verb', example:'Measure the temperature every hour.', viAnswers:['đo lường','đo']},
      {word:'variable', ipa:'/ˈvɛɹiəbəɫ/', meaning:'biến số', type:'noun', example:'Control all variables in the test.', viAnswers:['biến số','biến']},
      {word:'significant', ipa:'/səɡˈnɪfɪkənt/, /sɪɡˈnɪfɪkənt/', meaning:'đáng kể, quan trọng', type:'adjective', example:'The difference is significant.', viAnswers:['đáng kể','quan trọng','có ý nghĩa']}
    ]
  },
  {
    day: 51,
    topic: "Đàm phán",
    topicEn: "Negotiations",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Reading Part 5 - So sánh (Comparisons)",
      explanation: "Có 3 cấp so sánh: 1) So sánh hơn: tính từ ngắn + -er + than / more + tính từ dài + than. 2) So sánh nhất: the + tính từ ngắn + -est / the most + tính từ dài. 3) So sánh bằng: as + adj/adv + as. Ngoại lệ: good → better → best, bad → worse → worst, much/many → more → most, little → less → least.",
      structure: "So sánh hơn: adj-er than / more adj than | So sánh nhất: the adj-est / the most adj | So sánh bằng: as adj as",
      examples: [
        "This offer is ___ than the last one. (better - so sánh hơn bất quy tắc)",
        "We need a ___ flexible approach. (more - so sánh hơn, tính từ dài)",
        "This is the ___ important deal of the year. (most - so sánh nhất)",
        "Our terms are as ___ as theirs. (fair - so sánh bằng)"
      ],
exceptions: [
        "Cấu trúc so sánh kép (Double Comparative): <code>The + so sánh hơn + S + V, the + so sánh hơn + S + V</code> (Càng... thì càng...). Ví dụ: <i>The more you practice, the better you will perform</i>."
      ],
      notes: [
        "Trong cấu trúc so sánh bằng <code>as + Adj/Adv + as</code>, điền tính từ nếu động từ chính là <i>to be/linking verb</i>, điền trạng từ nếu động từ chính là động từ thường."
      ],
            tips: "Tính từ ngắn (1 âm tiết): thêm -er/-est. Tính từ dài (2+ âm tiết): dùng more/most. Luôn nhớ ngoại lệ: good-better-best, bad-worse-worst."
    },
    words: [
      {word:'negotiate', ipa:'/nəˈɡoʊʃiˌeɪt/, /nɪˈɡoʊʃiˌeɪt/', meaning:'đàm phán', type:'verb', example:'We need to negotiate the price.', viAnswers:['đàm phán','thương lượng']},
      {word:'offer', ipa:'/ˈɔfɝ/', meaning:'đề nghị, lời đề nghị', type:'noun / verb', example:'They made a good offer.', viAnswers:['đề nghị','lời đề nghị']},
      {word:'counter', ipa:'/ˈkaʊntɝ/', meaning:'phản đề nghị, phản bác', type:'verb / noun', example:'She countered with a lower price.', viAnswers:['phản đề nghị','phản bác','đáp trả']},
      {word:'accept', ipa:'/ækˈsɛpt/, /əkˈsɛpt/', meaning:'chấp nhận', type:'verb', example:'I accept your offer.', viAnswers:['chấp nhận','đồng ý']},
      {word:'reject', ipa:'/ˈɹidʒɛkt/, /ɹɪˈdʒɛkt/', meaning:'từ chối', type:'verb', example:'They rejected the proposal.', viAnswers:['từ chối','bác bỏ']},
      {word:'propose', ipa:'/pɹəˈpoʊz/', meaning:'đề xuất', type:'verb', example:'I propose a new plan.', viAnswers:['đề xuất','đề nghị']},
      {word:'compromise', ipa:'/ˈkɑmpɹəˌmaɪz/', meaning:'thỏa hiệp', type:'noun / verb', example:'We reached a compromise.', viAnswers:['thỏa hiệp','sự thỏa hiệp']},
      {word:'concession', ipa:'/kənˈsɛʃən/', meaning:'sự nhượng bộ', type:'noun', example:'Both sides made concessions.', viAnswers:['sự nhượng bộ','nhượng bộ']},
      {word:'demand', ipa:'/dɪˈmænd/', meaning:'yêu cầu, đòi hỏi', type:'noun / verb', example:'Their demands are too high.', viAnswers:['yêu cầu','đòi hỏi','nhu cầu']},
      {word:'condition', ipa:'/kənˈdɪʃən/', meaning:'điều kiện', type:'noun', example:'We agreed on certain conditions.', viAnswers:['điều kiện']},
      {word:'deadline', ipa:'/ˈdɛdˌɫaɪn/', meaning:'hạn chót', type:'noun', example:'The deadline for the deal is Friday.', viAnswers:['hạn chót','thời hạn']},
      {word:'leverage', ipa:'/ˈɫɛvɝɪdʒ/, /ˈɫɛvɹədʒ/, /ˈɫivɝɪdʒ/', meaning:'đòn bẩy, lợi thế', type:'noun', example:'We have leverage in this deal.', viAnswers:['đòn bẩy','lợi thế']},
      {word:'strategy', ipa:'/ˈstɹætədʒi/', meaning:'chiến lược', type:'noun', example:'Our strategy is to wait.', viAnswers:['chiến lược']},
      {word:'outcome', ipa:'/ˈaʊtˌkəm/', meaning:'kết quả', type:'noun', example:'The outcome was positive.', viAnswers:['kết quả']},
      {word:'mutual', ipa:'/ˈmjutʃuəɫ/', meaning:'lẫn nhau, chung', type:'adjective', example:'We have mutual respect.', viAnswers:['lẫn nhau','chung','tương hỗ']},
      {word:'benefit', ipa:'/ˈbɛnəfɪt/', meaning:'lợi ích', type:'noun', example:'Both sides benefit from the deal.', viAnswers:['lợi ích','quyền lợi']},
      {word:'dispute', ipa:'/dɪˈspjut/', meaning:'tranh chấp', type:'noun', example:'There is a dispute about the price.', viAnswers:['tranh chấp']},
      {word:'mediate', ipa:'/ˈmidiˌeɪt/', meaning:'hòa giải, trung gian', type:'verb', example:'A lawyer will mediate the dispute.', viAnswers:['hòa giải','trung gian','làm trung gian']},
      {word:'resolve', ipa:'/ɹiˈzɑɫv/', meaning:'giải quyết', type:'verb', example:'We resolved the issue quickly.', viAnswers:['giải quyết']},
      {word:'agreement', ipa:'/əˈɡɹimənt/', meaning:'thỏa thuận', type:'noun', example:'We signed an agreement.', viAnswers:['thỏa thuận','hợp đồng']},
      {word:'terms', ipa:'/ˈtɝmz/', meaning:'điều khoản', type:'noun', example:'Read the terms carefully.', viAnswers:['điều khoản']},
      {word:'priority', ipa:'/pɹaɪˈɔɹəti/', meaning:'ưu tiên', type:'noun', example:'Safety is our top priority.', viAnswers:['ưu tiên','sự ưu tiên']},
      {word:'flexible', ipa:'/ˈfɫɛksəbəɫ/', meaning:'linh hoạt', type:'adjective', example:'We are flexible on the date.', viAnswers:['linh hoạt']},
      {word:'firm', ipa:'/ˈfɝm/', meaning:'kiên quyết, vững chắc', type:'adjective', example:'She is firm about the deadline.', viAnswers:['kiên quyết','vững chắc','cứng rắn']},
      {word:'deal', ipa:'/ˈdiɫ/', meaning:'thỏa thuận, giao dịch', type:'noun', example:'It is a good deal for everyone.', viAnswers:['thỏa thuận','giao dịch','hợp đồng']}
    ]
  },
  {
    day: 52,
    topic: "Nghệ thuật / Văn hóa",
    topicEn: "Arts / Culture",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Mixed Practice - Tổng hợp ngữ pháp (Phần 1)",
      explanation: "Ôn tập tổng hợp các điểm ngữ pháp đã học: từ loại, thì động từ, giới từ, liên từ, đại từ, bị động, so sánh. Khi làm bài TOEIC Part 5, làm theo quy trình: 1) Đọc toàn bộ câu, 2) Xác định loại câu hỏi (từ loại? thì? giới từ?...), 3) Áp dụng kiến thức ngữ pháp phù hợp, 4) Chọn đáp án, 5) Đọc lại câu hoàn chỉnh để kiểm tra.",
      structure: "Đọc câu → Xác định loại câu hỏi → Áp dụng quy tắc → Chọn đáp án → Kiểm tra",
      examples: [
        "The ___ performance was amazing. (artistic - từ loại: tính từ trước danh từ)",
        "The exhibition ___ visited by thousands of people. (was - bị động quá khứ)",
        "This painting is ___ beautiful than that one. (more - so sánh hơn)",
        "The artist created the sculpture ___ herself. (by - giới từ)"
      ],
      tips: "Làm bài Part 5 không quá 30 giây mỗi câu. Nếu không chắc chắn, dùng phương pháp loại trừ. Đánh dấu câu khó và quay lại sau."
    },
    words: [
      {word:'art', ipa:'/ˈɑɹt/', meaning:'nghệ thuật', type:'noun', example:'She loves art.', viAnswers:['nghệ thuật']},
      {word:'museum', ipa:'/ˈmjuziəm/, /mjuˈziəm/', meaning:'bảo tàng', type:'noun', example:'We visited the museum.', viAnswers:['bảo tàng','viện bảo tàng']},
      {word:'gallery', ipa:'/ˈɡæɫɝi/', meaning:'phòng tranh, triển lãm', type:'noun', example:'The gallery has many paintings.', viAnswers:['phòng tranh','triển lãm','phòng trưng bày']},
      {word:'exhibit', ipa:'/ɪɡˈzɪbɪt/', meaning:'trưng bày, hiện vật', type:'verb / noun', example:'The museum will exhibit new art.', viAnswers:['trưng bày','hiện vật','triển lãm']},
      {word:'sculpture', ipa:'/ˈskəɫptʃɝ/', meaning:'tác phẩm điêu khắc', type:'noun', example:'The sculpture is made of stone.', viAnswers:['tác phẩm điêu khắc','điêu khắc','tượng']},
      {word:'painting', ipa:'/ˈpeɪntɪŋ/', meaning:'bức tranh', type:'noun', example:'This painting is very old.', viAnswers:['bức tranh','tranh','bức họa']},
      {word:'artist', ipa:'/ˈɑɹtəst/, /ˈɑɹtɪst/', meaning:'nghệ sĩ', type:'noun', example:'The artist is very famous.', viAnswers:['nghệ sĩ','họa sĩ']},
      {word:'creative', ipa:'/kɹiˈeɪtɪv/', meaning:'sáng tạo', type:'adjective', example:'She is very creative.', viAnswers:['sáng tạo']},
      {word:'design', ipa:'/dɪˈzaɪn/', meaning:'thiết kế', type:'noun / verb', example:'The design is beautiful.', viAnswers:['thiết kế']},
      {word:'perform', ipa:'/pɝˈfɔɹm/', meaning:'biểu diễn, trình diễn', type:'verb', example:'The band will perform tonight.', viAnswers:['biểu diễn','trình diễn','thực hiện']},
      {word:'theater', ipa:'/ˈθiətɝ/', meaning:'nhà hát, rạp hát', type:'noun', example:'We went to the theater.', viAnswers:['nhà hát','rạp hát']},
      {word:'opera', ipa:'/ˈɑpɹə/', meaning:'nhạc kịch, opera', type:'noun', example:'She loves watching opera.', viAnswers:['nhạc kịch','opera']},
      {word:'ballet', ipa:'/bæˈɫeɪ/', meaning:'múa ba-lê', type:'noun', example:'The ballet performance was wonderful.', viAnswers:['múa ba-lê','ba-lê','ballet']},
      {word:'orchestra', ipa:'/ˈɔɹkəstɹə/', meaning:'dàn nhạc', type:'noun', example:'The orchestra played beautifully.', viAnswers:['dàn nhạc']},
      {word:'instrument', ipa:'/ˈɪnstɹəmənt/', meaning:'nhạc cụ', type:'noun', example:'She plays three instruments.', viAnswers:['nhạc cụ','dụng cụ']},
      {word:'compose', ipa:'/kəmˈpoʊz/', meaning:'sáng tác', type:'verb', example:'He composed a new song.', viAnswers:['sáng tác']},
      {word:'direct', ipa:'/daɪˈɹɛkt/, /dɝˈɛkt/, /dɪˈɹɛkt/', meaning:'đạo diễn, chỉ đạo', type:'verb', example:'She directed the movie.', viAnswers:['đạo diễn','chỉ đạo','hướng dẫn']},
      {word:'produce', ipa:'/ˈpɹoʊdus/, /pɹəˈdus/', meaning:'sản xuất, tạo ra', type:'verb', example:'They produced a great film.', viAnswers:['sản xuất','tạo ra']},
      {word:'culture', ipa:'/ˈkəɫtʃɝ/', meaning:'văn hóa', type:'noun', example:'Vietnamese culture is rich.', viAnswers:['văn hóa']},
      {word:'tradition', ipa:'/tɹəˈdɪʃən/', meaning:'truyền thống', type:'noun', example:'This is an old tradition.', viAnswers:['truyền thống']},
      {word:'heritage', ipa:'/ˈhɛɹətədʒ/, /ˈhɛɹɪtɪdʒ/', meaning:'di sản', type:'noun', example:'Protect our cultural heritage.', viAnswers:['di sản']},
      {word:'festival', ipa:'/ˈfɛstəvəɫ/, /ˈfɛstɪvəɫ/', meaning:'lễ hội', type:'noun', example:'The festival is in March.', viAnswers:['lễ hội']},
      {word:'craft', ipa:'/ˈkɹæft/', meaning:'thủ công, nghề thủ công', type:'noun', example:'She sells handmade crafts.', viAnswers:['thủ công','nghề thủ công','đồ thủ công']},
      {word:'inspire', ipa:'/ˌɪnˈspaɪɹ/', meaning:'truyền cảm hứng', type:'verb', example:'The art inspired many people.', viAnswers:['truyền cảm hứng','gợi cảm hứng']},
      {word:'express', ipa:'/ɪksˈpɹɛs/', meaning:'biểu đạt, thể hiện', type:'verb', example:'Art helps us express feelings.', viAnswers:['biểu đạt','thể hiện','diễn đạt']}
    ]
  },
  {
    day: 53,
    topic: "Chính phủ",
    topicEn: "Government",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Mixed Practice - Tổng hợp ngữ pháp (Phần 2)",
      explanation: "Tiếp tục ôn tập tổng hợp. Tập trung vào các dạng câu hỏi thường gặp trong TOEIC: 1) Chọn từ vựng phù hợp ngữ cảnh, 2) Điền từ nối mệnh đề (however, therefore, moreover, furthermore, nevertheless, in addition), 3) Phân biệt các từ gần nghĩa nhưng khác cách dùng (như rise/raise, lay/lie, affect/effect).",
      structure: "Đọc ngữ cảnh → Xác định nghĩa phù hợp → Chọn từ chính xác",
      examples: [
        "The government ___ a new law. (passed - chọn từ phù hợp ngữ cảnh)",
        "Taxes increased; ___, spending was cut. (therefore - từ nối chỉ kết quả)",
        "The policy will ___ all citizens. (affect - phân biệt affect/effect)",
        "The president ___ reforms. (implemented - từ vựng ngữ cảnh)"
      ],
      tips: "Với câu hỏi từ vựng, đọc toàn bộ câu để hiểu ngữ cảnh. Đừng chỉ nhìn chỗ trống. Nhiều khi đáp án đúng không phải từ bạn nghĩ đầu tiên."
    },
    words: [
      {word:'government', ipa:'/ˈɡəvɝmənt/, /ˈɡəvɝnmənt/', meaning:'chính phủ', type:'noun', example:'The government made a new law.', viAnswers:['chính phủ']},
      {word:'president', ipa:'/ˈpɹɛzəˌdɛnt/, /ˈpɹɛzɪdənt/', meaning:'tổng thống, chủ tịch', type:'noun', example:'The president gave a speech.', viAnswers:['tổng thống','chủ tịch']},
      {word:'minister', ipa:'/ˈmɪnəstɝ/, /ˈmɪnɪstɝ/', meaning:'bộ trưởng', type:'noun', example:'The minister of education spoke.', viAnswers:['bộ trưởng']},
      {word:'parliament', ipa:'/ˈpɑɹɫəmənt/', meaning:'quốc hội, nghị viện', type:'noun', example:'Parliament approved the budget.', viAnswers:['quốc hội','nghị viện']},
      {word:'election', ipa:'/ɪˈɫɛkʃən/', meaning:'bầu cử', type:'noun', example:'The election is next year.', viAnswers:['bầu cử','cuộc bầu cử']},
      {word:'vote', ipa:'/ˈvoʊt/', meaning:'bỏ phiếu, bầu', type:'noun / verb', example:'Everyone should vote.', viAnswers:['bỏ phiếu','bầu','phiếu bầu']},
      {word:'citizen', ipa:'/ˈsɪtəzən/, /ˈsɪtɪzən/', meaning:'công dân', type:'noun', example:'Every citizen has rights.', viAnswers:['công dân']},
      {word:'democracy', ipa:'/dɪˈmɑkɹəsi/', meaning:'dân chủ', type:'noun', example:'Democracy is important.', viAnswers:['dân chủ','nền dân chủ']},
      {word:'policy', ipa:'/ˈpɑɫəsi/', meaning:'chính sách', type:'noun', example:'The new policy helps families.', viAnswers:['chính sách']},
      {word:'budget', ipa:'/ˈbədʒɪt/', meaning:'ngân sách', type:'noun', example:'The budget was approved.', viAnswers:['ngân sách']},
      {word:'legislation', ipa:'/ˌɫɛdʒəˈsɫeɪʃən/', meaning:'luật pháp, sự lập pháp', type:'noun', example:'New legislation was passed.', viAnswers:['luật pháp','sự lập pháp','pháp luật']},
      {word:'regulate', ipa:'/ˈɹɛɡjəˌɫeɪt/', meaning:'quản lý, điều tiết', type:'verb', example:'The government regulates businesses.', viAnswers:['quản lý','điều tiết']},
      {word:'public', ipa:'/ˈpəbɫɪk/', meaning:'công cộng, công chúng', type:'adjective / noun', example:'This is a public building.', viAnswers:['công cộng','công chúng']},
      {word:'official', ipa:'/əˈfɪʃəɫ/', meaning:'quan chức, chính thức', type:'noun / adjective', example:'The official announcement was made.', viAnswers:['quan chức','chính thức']},
      {word:'committee', ipa:'/kəˈmɪti/', meaning:'ủy ban', type:'noun', example:'The committee will decide.', viAnswers:['ủy ban','ban']},
      {word:'council', ipa:'/ˈkaʊnsəɫ/', meaning:'hội đồng', type:'noun', example:'The city council met today.', viAnswers:['hội đồng']},
      {word:'agency', ipa:'/ˈeɪdʒənsi/', meaning:'cơ quan, đại lý', type:'noun', example:'The agency handles immigration.', viAnswers:['cơ quan','đại lý']},
      {word:'department', ipa:'/dɪˈpɑɹtmənt/', meaning:'bộ, phòng ban', type:'noun', example:'The Department of Health issued a notice.', viAnswers:['bộ','phòng ban']},
      {word:'federal', ipa:'/ˈfɛdɝəɫ/, /ˈfɛdɹəɫ/', meaning:'liên bang', type:'adjective', example:'Federal law applies to all states.', viAnswers:['liên bang','thuộc liên bang']},
      {word:'state', ipa:'/ˈsteɪt/', meaning:'bang, tiểu bang, nhà nước', type:'noun', example:'Each state has its own laws.', viAnswers:['bang','tiểu bang','nhà nước']},
      {word:'local', ipa:'/ˈɫoʊkəɫ/', meaning:'địa phương', type:'adjective', example:'Local government manages the city.', viAnswers:['địa phương']},
      {word:'reform', ipa:'/ɹəˈfɔɹm/, /ɹɪˈfɔɹm/', meaning:'cải cách', type:'noun / verb', example:'The country needs reform.', viAnswers:['cải cách']},
      {word:'debate', ipa:'/dəˈbeɪt/', meaning:'tranh luận', type:'noun / verb', example:'The debate lasted two hours.', viAnswers:['tranh luận','cuộc tranh luận']},
      {word:'campaign', ipa:'/kæmˈpeɪn/', meaning:'chiến dịch, vận động', type:'noun', example:'The election campaign has started.', viAnswers:['chiến dịch','vận động','cuộc vận động']},
      {word:'represent', ipa:'/ˌɹɛpɹɪˈzɛnt/', meaning:'đại diện', type:'verb', example:'She represents the company.', viAnswers:['đại diện']}
    ]
  },
  {
    day: 54,
    topic: "Chuỗi cung ứng",
    topicEn: "Supply Chain",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Mixed Practice - Tổng hợp ngữ pháp (Phần 3)",
      explanation: "Luyện tập tổng hợp tập trung vào Part 6 & 7 của TOEIC: đọc hiểu đoạn văn. Kỹ năng cần: 1) Đọc lướt (skimming) để nắm ý chính, 2) Đọc quét (scanning) để tìm thông tin cụ thể, 3) Suy luận ý ẩn (inference), 4) Hiểu mục đích của đoạn văn (email, thông báo, quảng cáo...).",
      structure: "Đọc câu hỏi trước → Đọc lướt bài → Tìm thông tin → Chọn đáp án",
      examples: [
        "Email: 'The shipment will arrive by Friday.' → Khi nào hàng đến? (By Friday)",
        "Notice: 'All vendors must submit invoices by the 15th.' → Ai phải nộp? (Vendors)",
        "Memo: 'Due to high demand, production has increased.' → Tại sao? (High demand)",
        "Ad: 'Free shipping on orders over $50.' → Điều kiện? (Orders over $50)"
      ],
      tips: "Đọc câu hỏi TRƯỚC khi đọc bài. Gạch chân từ khóa trong câu hỏi. Khi đọc bài, tìm từ khóa đó. Không cần hiểu 100% bài - chỉ cần tìm đúng thông tin."
    },
    words: [
      {word:'supply', ipa:'/səˈpɫaɪ/', meaning:'cung cấp, nguồn cung', type:'noun / verb', example:'The supply of goods is stable.', viAnswers:['cung cấp','nguồn cung']},
      {word:'chain', ipa:'/ˈtʃeɪn/', meaning:'chuỗi', type:'noun', example:'The supply chain is global.', viAnswers:['chuỗi']},
      {word:'logistics', ipa:'/ɫəˈdʒɪstɪks/', meaning:'hậu cần, logistics', type:'noun', example:'Logistics is very important.', viAnswers:['hậu cần','logistics']},
      {word:'warehouse', ipa:'/ˈwɛɹˌhaʊs/', meaning:'nhà kho, kho hàng', type:'noun', example:'The goods are in the warehouse.', viAnswers:['nhà kho','kho hàng','kho']},
      {word:'inventory', ipa:'/ˌɪnvənˈtɔɹi/', meaning:'hàng tồn kho', type:'noun', example:'Check the inventory list.', viAnswers:['hàng tồn kho','kiểm kê']},
      {word:'distribute', ipa:'/dɪˈstɹɪbjut/', meaning:'phân phối', type:'verb', example:'We distribute products nationwide.', viAnswers:['phân phối']},
      {word:'transport', ipa:'/ˈtɹænspɔɹt/, /tɹænˈspɔɹt/', meaning:'vận chuyển', type:'verb / noun', example:'We transport goods by truck.', viAnswers:['vận chuyển']},
      {word:'freight', ipa:'/ˈfɹeɪt/', meaning:'hàng hóa vận chuyển', type:'noun', example:'The freight arrived on time.', viAnswers:['hàng hóa vận chuyển','vận tải','hàng hóa']},
      {word:'cargo', ipa:'/ˈkɑɹˌɡoʊ/', meaning:'hàng hóa (tàu/máy bay)', type:'noun', example:'The cargo was unloaded.', viAnswers:['hàng hóa','hàng']},
      {word:'customs', ipa:'/ˈkəstəmz/', meaning:'hải quan', type:'noun', example:'The package is at customs.', viAnswers:['hải quan']},
      {word:'import', ipa:'/ˈɪmˌpɔɹt/, /ˌɪmˈpɔɹt/', meaning:'nhập khẩu', type:'noun / verb', example:'We import electronics from Japan.', viAnswers:['nhập khẩu']},
      {word:'export', ipa:'/ˈɛkspɔɹt/', meaning:'xuất khẩu', type:'noun / verb', example:'Vietnam exports coffee.', viAnswers:['xuất khẩu']},
      {word:'manufacturer', ipa:'/ˌmænjəˈfæktʃɝɝ/', meaning:'nhà sản xuất', type:'noun', example:'The manufacturer is in China.', viAnswers:['nhà sản xuất']},
      {word:'retailer', ipa:'/ˈɹiˌteɪɫɝ/', meaning:'nhà bán lẻ', type:'noun', example:'The retailer sells to customers.', viAnswers:['nhà bán lẻ']},
      {word:'wholesale', ipa:'/ˈhoʊɫˌseɪɫ/', meaning:'bán buôn, bán sỉ', type:'noun / adjective', example:'We buy at wholesale prices.', viAnswers:['bán buôn','bán sỉ']},
      {word:'vendor', ipa:'/ˈvɛndɝ/', meaning:'nhà cung cấp, người bán', type:'noun', example:'The vendor delivers every Monday.', viAnswers:['nhà cung cấp','người bán']},
      {word:'procure', ipa:'/pɹoʊkˈjʊɹ/', meaning:'mua sắm, thu mua', type:'verb', example:'We procure materials from abroad.', viAnswers:['mua sắm','thu mua']},
      {word:'order', ipa:'/ˈɔɹdɝ/', meaning:'đơn hàng, đặt hàng', type:'noun / verb', example:'Place an order today.', viAnswers:['đơn hàng','đặt hàng']},
      {word:'track', ipa:'/ˈtɹæk/', meaning:'theo dõi', type:'verb', example:'Track your package online.', viAnswers:['theo dõi']},
      {word:'deliver', ipa:'/dɪˈɫɪvɝ/', meaning:'giao hàng', type:'verb', example:'We deliver within 3 days.', viAnswers:['giao hàng','giao']},
      {word:'route', ipa:'/ˈɹaʊt/, /ˈɹut/', meaning:'tuyến đường', type:'noun', example:'The delivery route is long.', viAnswers:['tuyến đường','đường đi','lộ trình']},
      {word:'schedule', ipa:'/ˈskɛdʒuɫ/, /ˈskɛdʒʊɫ/', meaning:'lịch trình', type:'noun / verb', example:'The delivery schedule is fixed.', viAnswers:['lịch trình','lịch']},
      {word:'efficient', ipa:'/ɪˈfɪʃənt/', meaning:'hiệu quả', type:'adjective', example:'The system is very efficient.', viAnswers:['hiệu quả']},
      {word:'optimize', ipa:'/ˈɑptəˌmaɪz/', meaning:'tối ưu hóa', type:'verb', example:'We optimize the delivery process.', viAnswers:['tối ưu hóa','tối ưu']},
      {word:'automate', ipa:'/ˈɔtəˌmeɪt/', meaning:'tự động hóa', type:'verb', example:'We automate many tasks now.', viAnswers:['tự động hóa']}
    ]
  },
  {
    day: 55,
    topic: "Khiếu nại",
    topicEn: "Complaints",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Mixed Practice - Tổng hợp ngữ pháp (Phần 4)",
      explanation: "Ôn tập cách viết email/thư khiếu nại và phản hồi - dạng hay gặp trong TOEIC Part 6 & 7. Cấu trúc thư khiếu nại: 1) Mở đầu: nêu vấn đề (I am writing to complain about...), 2) Thân bài: mô tả chi tiết vấn đề, 3) Kết luận: yêu cầu giải pháp (I would like a refund/replacement...). Cấu trúc thư phản hồi: xin lỗi → giải thích → đề xuất giải pháp.",
      structure: "Khiếu nại: Problem → Details → Request | Phản hồi: Apology → Explanation → Solution",
      examples: [
        "I am writing to complain about the service I received.",
        "The product was damaged when it arrived.",
        "I would like a full refund.",
        "We sincerely apologize for the inconvenience."
      ],
      tips: "Trong TOEIC, thường hỏi: 'What is the purpose of the email?' → Mục đích. 'What does the customer want?' → Yêu cầu. 'What will the company do?' → Giải pháp."
    },
    words: [
      {word:'complain', ipa:'/kəmˈpɫeɪn/', meaning:'phàn nàn, khiếu nại', type:'verb', example:'The customer complained about the service.', viAnswers:['phàn nàn','khiếu nại']},
      {word:'complaint', ipa:'/kəmˈpɫeɪnt/', meaning:'lời phàn nàn, đơn khiếu nại', type:'noun', example:'We received many complaints.', viAnswers:['lời phàn nàn','đơn khiếu nại','khiếu nại']},
      {word:'issue', ipa:'/ˈɪʃu/', meaning:'vấn đề', type:'noun', example:'There is an issue with the order.', viAnswers:['vấn đề']},
      {word:'problem', ipa:'/ˈpɹɑbɫəm/', meaning:'vấn đề, trục trặc', type:'noun', example:'We will fix the problem.', viAnswers:['vấn đề','trục trặc']},
      {word:'dissatisfied', ipa:'/dɪˈsætəsˌfaɪd/', meaning:'không hài lòng', type:'adjective', example:'The customer is dissatisfied.', viAnswers:['không hài lòng','bất mãn']},
      {word:'frustrated', ipa:'/ˈfɹəsˌtɹeɪtəd/', meaning:'thất vọng, bực bội', type:'adjective', example:'She was frustrated with the delay.', viAnswers:['thất vọng','bực bội','bực tức']},
      {word:'inconvenience', ipa:'/ˌɪnkənˈvinjəns/', meaning:'sự bất tiện', type:'noun', example:'We apologize for the inconvenience.', viAnswers:['sự bất tiện','bất tiện']},
      {word:'resolve', ipa:'/ɹiˈzɑɫv/', meaning:'giải quyết', type:'verb', example:'We will resolve this quickly.', viAnswers:['giải quyết']},
      {word:'apologize', ipa:'/əˈpɑɫəˌdʒaɪz/', meaning:'xin lỗi', type:'verb', example:'We apologize for the mistake.', viAnswers:['xin lỗi']},
      {word:'compensate', ipa:'/ˈkɑmpənˌseɪt/', meaning:'bồi thường, đền bù', type:'verb', example:'The company will compensate you.', viAnswers:['bồi thường','đền bù']},
      {word:'refund', ipa:'/ˈɹiˌfənd/, /ɹɪˈfənd/', meaning:'hoàn tiền', type:'noun / verb', example:'I want a full refund.', viAnswers:['hoàn tiền','hoàn lại tiền']},
      {word:'replace', ipa:'/ˌɹiˈpɫeɪs/, /ɝˈpɫeɪs/', meaning:'thay thế', type:'verb', example:'We will replace the item.', viAnswers:['thay thế']},
      {word:'exchange', ipa:'/ɪksˈtʃeɪndʒ/', meaning:'đổi', type:'verb / noun', example:'Can I exchange this product?', viAnswers:['đổi','trao đổi']},
      {word:'escalate', ipa:'/ˈɛskəˌɫeɪt/', meaning:'chuyển lên cấp trên', type:'verb', example:'The issue was escalated to the manager.', viAnswers:['chuyển lên cấp trên','leo thang','nâng lên']},
      {word:'manager', ipa:'/ˈmænədʒɝ/, /ˈmænɪdʒɝ/', meaning:'quản lý', type:'noun', example:'I want to speak to the manager.', viAnswers:['quản lý','người quản lý']},
      {word:'supervisor', ipa:'/ˈsupɝˌvaɪzɝ/', meaning:'giám sát viên', type:'noun', example:'The supervisor handled the complaint.', viAnswers:['giám sát viên','người giám sát']},
      {word:'response', ipa:'/ɹiˈspɑns/, /ɹɪˈspɑns/', meaning:'phản hồi', type:'noun', example:'We need a quick response.', viAnswers:['phản hồi','câu trả lời']},
      {word:'follow', ipa:'/ˈfɑɫoʊ/', meaning:'theo dõi, tiếp tục', type:'verb', example:'We will follow up on your case.', viAnswers:['theo dõi','tiếp tục','theo']},
      {word:'investigate', ipa:'/ˌɪnˈvɛstəˌɡeɪt/', meaning:'điều tra', type:'verb', example:'We will investigate the matter.', viAnswers:['điều tra']},
      {word:'feedback', ipa:'/ˈfidˌbæk/', meaning:'phản hồi, ý kiến', type:'noun', example:'Your feedback is important.', viAnswers:['phản hồi','ý kiến','góp ý']},
      {word:'improve', ipa:'/ˌɪmˈpɹuv/', meaning:'cải thiện', type:'verb', example:'We will improve our service.', viAnswers:['cải thiện','cải tiến']},
      {word:'prevent', ipa:'/pɹiˈvɛnt/, /pɹɪˈvɛnt/', meaning:'ngăn chặn, phòng ngừa', type:'verb', example:'We will prevent this from happening again.', viAnswers:['ngăn chặn','phòng ngừa']},
      {word:'recur', ipa:'/ɹiˈkɝ/, /ɹɪˈkɝ/', meaning:'tái diễn', type:'verb', example:'The problem must not recur.', viAnswers:['tái diễn','xảy ra lại','lặp lại']},
      {word:'satisfaction', ipa:'/ˌsætəsˈfækʃən/, /ˌsætɪsˈfækʃən/', meaning:'sự hài lòng', type:'noun', example:'Customer satisfaction is our goal.', viAnswers:['sự hài lòng','hài lòng']},
      {word:'guarantee', ipa:'/ˌɡɛɹənˈti/', meaning:'bảo đảm, cam kết', type:'noun / verb', example:'We guarantee high quality.', viAnswers:['bảo đảm','cam kết','đảm bảo']}
    ]
  },
  {
    day: 56,
    topic: "Lễ kỷ niệm / Chúc mừng",
    topicEn: "Celebrations",
    phase: 3,
    isReview: false,
    reviewDays: [],
    grammar: {
      title: "Mixed Practice - Tổng hợp ngữ pháp (Phần 5)",
      explanation: "Ôn tập toàn diện tất cả ngữ pháp đã học trong 56 ngày. Checklist cuối cùng: ✓ Từ loại (noun, verb, adj, adv), ✓ Thì động từ (12 thì), ✓ Giới từ (in, on, at, by, for, with...), ✓ Liên từ (and, but, because, although...), ✓ Đại từ (I, me, my, mine, myself...), ✓ Câu bị động (be + V3), ✓ So sánh (more/most, -er/-est, as...as).",
      structure: "Ôn tập toàn bộ → Làm bài tập tổng hợp → Sửa lỗi → Ghi nhớ",
      examples: [
        "The ___ ceremony was held at the hotel. (award - từ loại)",
        "They ___ the company's 10th anniversary. (celebrated - thì quá khứ đơn)",
        "The event was ___ by the marketing team. (organized - bị động)",
        "This year's celebration is ___ than last year's. (bigger - so sánh hơn)"
      ],
      tips: "Trước ngày thi, tập trung vào những điểm ngữ pháp mình HAY SAI nhất. Làm lại các bài tập đã sai. Ghi nhớ bằng cách viết lại câu đúng 3 lần."
    },
    words: [
      {word:'celebrate', ipa:'/ˈsɛɫəˌbɹeɪt/', meaning:'ăn mừng, kỷ niệm', type:'verb', example:'We celebrate our success.', viAnswers:['ăn mừng','kỷ niệm','chúc mừng']},
      {word:'congratulate', ipa:'/kənˈɡɹætʃəˌɫeɪt/', meaning:'chúc mừng', type:'verb', example:'I congratulate you on your promotion.', viAnswers:['chúc mừng']},
      {word:'achievement', ipa:'/əˈtʃivmənt/', meaning:'thành tích, thành tựu', type:'noun', example:'This is a great achievement.', viAnswers:['thành tích','thành tựu']},
      {word:'milestone', ipa:'/ˈmaɪɫˌstoʊn/', meaning:'cột mốc quan trọng', type:'noun', example:'This is a major milestone.', viAnswers:['cột mốc quan trọng','cột mốc']},
      {word:'award', ipa:'/əˈwɔɹd/', meaning:'giải thưởng', type:'noun', example:'She received an award.', viAnswers:['giải thưởng']},
      {word:'ceremony', ipa:'/ˈsɛɹəˌmoʊni/', meaning:'buổi lễ, nghi lễ', type:'noun', example:'The ceremony was formal.', viAnswers:['buổi lễ','nghi lễ','lễ']},
      {word:'reception', ipa:'/ɹiˈsɛpʃən/, /ɹɪˈsɛpʃən/', meaning:'tiệc chiêu đãi', type:'noun', example:'The reception is at 6 PM.', viAnswers:['tiệc chiêu đãi','tiệc tiếp tân','lễ tân']},
      {word:'toast', ipa:'/ˈtoʊst/', meaning:'nâng cốc chúc mừng', type:'noun / verb', example:'He made a toast to the team.', viAnswers:['nâng cốc chúc mừng','nâng cốc','chúc mừng']},
      {word:'gift', ipa:'/ˈɡɪft/', meaning:'quà tặng', type:'noun', example:'She gave me a gift.', viAnswers:['quà tặng','quà','món quà']},
      {word:'present', ipa:'/ˈpɹɛzənt/, /pɝˈzɛnt/, /pɹiˈzɛnt/', meaning:'quà, hiện tại, có mặt', type:'noun / adjective', example:'Thank you for the present.', viAnswers:['quà','hiện tại','có mặt','quà tặng']},
      {word:'surprise', ipa:'/səˈpɹaɪz/, /sɝˈpɹaɪz/', meaning:'bất ngờ, ngạc nhiên', type:'noun / verb', example:'It was a big surprise!', viAnswers:['bất ngờ','ngạc nhiên','sự bất ngờ']},
      {word:'gather', ipa:'/ˈɡæðɝ/', meaning:'tụ họp, tập hợp', type:'verb', example:'Everyone gathered for the party.', viAnswers:['tụ họp','tập hợp','tụ tập']},
      {word:'reunion', ipa:'/ɹiˈunjən/', meaning:'buổi họp mặt', type:'noun', example:'The family reunion was fun.', viAnswers:['buổi họp mặt','họp mặt','đoàn tụ']},
      {word:'tradition', ipa:'/tɹəˈdɪʃən/', meaning:'truyền thống', type:'noun', example:'It is a family tradition.', viAnswers:['truyền thống']},
      {word:'custom', ipa:'/ˈkəstəm/', meaning:'phong tục, tập quán', type:'noun', example:'This is a local custom.', viAnswers:['phong tục','tập quán']},
      {word:'holiday', ipa:'/ˈhɑɫəˌdeɪ/, /ˈhɑɫɪˌdeɪ/', meaning:'ngày lễ, kỳ nghỉ', type:'noun', example:'Monday is a public holiday.', viAnswers:['ngày lễ','kỳ nghỉ']},
      {word:'vacation', ipa:'/veɪˈkeɪʃən/', meaning:'kỳ nghỉ', type:'noun', example:'We are on vacation next week.', viAnswers:['kỳ nghỉ','nghỉ phép']},
      {word:'memorable', ipa:'/ˈmɛmɝəbəɫ/', meaning:'đáng nhớ', type:'adjective', example:'It was a memorable day.', viAnswers:['đáng nhớ']},
      {word:'special', ipa:'/ˈspɛʃəɫ/', meaning:'đặc biệt', type:'adjective', example:'This is a special occasion.', viAnswers:['đặc biệt']},
      {word:'occasion', ipa:'/əˈkeɪʒən/', meaning:'dịp', type:'noun', example:'It was a happy occasion.', viAnswers:['dịp','sự kiện']},
      {word:'honor', ipa:'/ˈɑnɝ/', meaning:'vinh danh, tôn vinh', type:'verb / noun', example:'We honor our teachers.', viAnswers:['vinh danh','tôn vinh','danh dự']},
      {word:'recognize', ipa:'/ˈɹɛkəɡˌnaɪz/', meaning:'công nhận, ghi nhận', type:'verb', example:'The company recognized her efforts.', viAnswers:['công nhận','ghi nhận','nhận ra']},
      {word:'appreciate', ipa:'/əˈpɹiʃiˌeɪt/', meaning:'trân trọng, đánh giá cao', type:'verb', example:'I appreciate your help.', viAnswers:['trân trọng','đánh giá cao','cảm kích']},
      {word:'grateful', ipa:'/ˈɡɹeɪtfəɫ/', meaning:'biết ơn', type:'adjective', example:'I am very grateful.', viAnswers:['biết ơn']},
      {word:'cherish', ipa:'/ˈtʃɛɹɪʃ/', meaning:'trân quý, nâng niu', type:'verb', example:'We cherish these memories.', viAnswers:['trân quý','nâng niu','trân trọng']}
    ]
  },
  {
    day: 57,
    topic: "Bài thi thử",
    topicEn: "Practice Test",
    phase: 3,
    isReview: true,
    reviewDays: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    grammar: {
      title: "Bài thi thử TOEIC",
      explanation: "Hôm nay bạn sẽ làm bài thi thử TOEIC để đánh giá trình độ hiện tại. Hãy làm bài trong điều kiện giống thi thật: 1) Không sử dụng từ điển, 2) Tính giờ nghiêm túc (Listening: 45 phút, Reading: 75 phút), 3) Không dừng lại quá lâu ở câu khó, 4) Ghi lại các câu sai để ôn tập.",
      structure: "",
      examples: [],
      tips: "Làm bài thi thử, chữa lỗi, ghi lại lỗi sai. Tập trung vào những phần còn yếu."
    },
    words: []
  },
  {
    day: 58,
    topic: "Ôn tập lỗi sai",
    topicEn: "Review Mistakes",
    phase: 3,
    isReview: true,
    reviewDays: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    grammar: {
      title: "Ôn tập lỗi sai",
      explanation: "Xem lại tất cả các lỗi sai từ bài thi thử ngày 57. Phân loại lỗi sai theo nhóm: 1) Lỗi từ vựng: học lại từ đã quên, 2) Lỗi ngữ pháp: ôn lại quy tắc, 3) Lỗi nghe: luyện nghe lại đoạn bị sai, 4) Lỗi đọc hiểu: luyện đọc lại bài. Ghi chú lỗi vào sổ tay để tránh lặp lại.",
      structure: "",
      examples: [],
      tips: "Làm bài tập, chữa lỗi, ghi lại lỗi sai. Ôn lại từ vựng các ngày trước."
    },
    words: []
  },
  {
    day: 59,
    topic: "Ôn tập tổng kết",
    topicEn: "Final Review",
    phase: 3,
    isReview: true,
    reviewDays: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    grammar: {
      title: "Ôn tập tổng kết toàn bộ khóa học",
      explanation: "Đây là ngày ôn tập tổng kết toàn bộ 60 ngày học. Hãy: 1) Ôn lại tất cả từ vựng từ ngày 1 đến ngày 56, 2) Làm lại các bài tập ngữ pháp khó, 3) Luyện nghe 1-2 bài TOEIC hoàn chỉnh, 4) Đọc lại các dạng bài Reading Part 5, 6, 7, 5) Ghi nhớ các mẹo làm bài thi.",
      structure: "",
      examples: [],
      tips: "Làm bài tập, chữa lỗi, ghi lại lỗi sai. Ôn lại tất cả từ vựng và ngữ pháp đã học."
    },
    words: []
  },
  {
    day: 60,
    topic: "Chuẩn bị thi",
    topicEn: "Test Preparation",
    phase: 3,
    isReview: true,
    reviewDays: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    grammar: {
      title: "Chuẩn bị trước ngày thi",
      explanation: "Ngày cuối cùng trước kỳ thi TOEIC. Checklist chuẩn bị: 1) ĐÊM TRƯỚC: ngủ đủ giấc (7-8 tiếng), chuẩn bị giấy tờ (CMND/CCCD, phiếu dự thi), bút chì 2B, gôm. 2) SÁNG THI: ăn sáng nhẹ, đến sớm 30 phút, giữ bình tĩnh. 3) KHI THI: quản lý thời gian, không dừng quá lâu ở câu khó, tô đáp án cẩn thận. 4) CHIẾN LƯỢC: Listening - đọc trước câu hỏi, Reading - làm Part 5 trước (nhanh), dành thời gian cho Part 7.",
      structure: "",
      examples: [],
      tips: "Nghỉ ngơi đầy đủ, tự tin vào bản thân. Bạn đã chuẩn bị tốt trong 60 ngày qua. Chúc bạn thi tốt! 🎯"
    },
    words: []
  }
];


const DAYS_DATA = DAYS_DATA_PART1.concat(DAYS_DATA_PART2, DAYS_DATA_PART3);
