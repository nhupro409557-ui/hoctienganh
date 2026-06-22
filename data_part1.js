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
      tips: "Mẹo: Luôn bắt đầu câu bằng chủ ngữ (ai/cái gì), rồi đến hành động (làm gì), cuối cùng là đối tượng (cái gì/ai)."
    },
    words: [
      {word:'company', meaning:'công ty', type:'noun', example:'I work for a big company.', viAnswers:['công ty']},
      {word:'office', meaning:'văn phòng', type:'noun', example:'The office is on the second floor.', viAnswers:['văn phòng']},
      {word:'employee', meaning:'nhân viên', type:'noun', example:'She is a new employee.', viAnswers:['nhân viên']},
      {word:'manager', meaning:'quản lý, giám đốc', type:'noun', example:'The manager has a meeting today.', viAnswers:['quản lý','giám đốc','người quản lý']},
      {word:'staff', meaning:'nhân viên, đội ngũ', type:'noun', example:'The staff works very hard.', viAnswers:['nhân viên','đội ngũ','đội ngũ nhân viên']},
      {word:'meeting', meaning:'cuộc họp', type:'noun', example:'We have a meeting at 10 a.m.', viAnswers:['cuộc họp','buổi họp']},
      {word:'report', meaning:'báo cáo', type:'noun', example:'Please read this report.', viAnswers:['báo cáo','bản báo cáo']},
      {word:'document', meaning:'tài liệu', type:'noun', example:'I need this document today.', viAnswers:['tài liệu','văn bản']},
      {word:'schedule', meaning:'lịch trình, thời khóa biểu', type:'noun', example:'Check the schedule before the meeting.', viAnswers:['lịch trình','thời khóa biểu','lịch','lịch làm việc']},
      {word:'department', meaning:'phòng ban, bộ phận', type:'noun', example:'He works in the sales department.', viAnswers:['phòng ban','bộ phận','phòng']},
      {word:'customer', meaning:'khách hàng', type:'noun', example:'The customer wants a refund.', viAnswers:['khách hàng','người mua']},
      {word:'client', meaning:'khách hàng, thân chủ', type:'noun', example:'We meet the client tomorrow.', viAnswers:['khách hàng','thân chủ']},
      {word:'project', meaning:'dự án', type:'noun', example:'This project is very important.', viAnswers:['dự án']},
      {word:'task', meaning:'nhiệm vụ, công việc', type:'noun', example:'I have many tasks today.', viAnswers:['nhiệm vụ','công việc','tác vụ']},
      {word:'deadline', meaning:'hạn chót, thời hạn', type:'noun', example:'The deadline is next Friday.', viAnswers:['hạn chót','thời hạn','hạn cuối']},
      {word:'email', meaning:'thư điện tử, email', type:'noun', example:'I send an email every morning.', viAnswers:['thư điện tử','email']},
      {word:'message', meaning:'tin nhắn, lời nhắn', type:'noun', example:'He left a message for you.', viAnswers:['tin nhắn','lời nhắn','thông điệp']},
      {word:'call', meaning:'cuộc gọi', type:'noun / verb', example:'I will make a call now.', viAnswers:['cuộc gọi','gọi điện']},
      {word:'position', meaning:'vị trí, chức vụ', type:'noun', example:'She applied for a new position.', viAnswers:['vị trí','chức vụ']},
      {word:'job', meaning:'công việc, nghề', type:'noun', example:'He loves his job.', viAnswers:['công việc','nghề','việc làm']},
      {word:'work', meaning:'công việc, làm việc', type:'noun / verb', example:'I work from 8 to 5.', viAnswers:['công việc','làm việc','việc']},
      {word:'team', meaning:'đội, nhóm', type:'noun', example:'Our team has five members.', viAnswers:['đội','nhóm','đội nhóm']},
      {word:'plan', meaning:'kế hoạch', type:'noun / verb', example:'We need a good plan.', viAnswers:['kế hoạch','dự định']},
      {word:'problem', meaning:'vấn đề', type:'noun', example:'There is a problem with the computer.', viAnswers:['vấn đề','sự cố']},
      {word:'solution', meaning:'giải pháp', type:'noun', example:'We found a solution.', viAnswers:['giải pháp','cách giải quyết']}
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
      title: "Hiện tại đơn (Present Simple) & Quy tắc thêm s/es",
      explanation: "Thì hiện tại đơn dùng để diễn tả:\n1. Thói quen hàng ngày: I go to work every day.\n2. Sự thật hiển nhiên: The sun rises in the east.\n3. Lịch trình cố định: The train leaves at 7 a.m.\n\nCấu trúc:\n- Khẳng định: S + V(s/es)\n  + S = I/You/We/They/Danh từ số nhiều + V nguyên mẫu (Ví dụ: We work.)\n  + S = He/She/It/Danh từ số ít/Danh từ không đếm được + V-s/es (Ví dụ: She works.)\n- Phủ định: S + do/does + not + V nguyên mẫu\n- Nghi vấn: Do/Does + S + V nguyên mẫu?\n\n**QUY TẮC THÊM S/ES CHO ĐỘNG TỪ (Với chủ ngữ số ít):**\n1. Hầu hết động từ: Thêm -s (work -> works, speak -> speaks).\n2. Động từ tận cùng bằng -o, -s, -x, -ch, -sh, -z (Mẹo nhớ: \"Ông Sáu Chạy Xe Sh Zip\"): Thêm -es\n   - go -> goes, do -> does\n   - pass -> passes, kiss -> kisses\n   - watch -> watches, teach -> teaches\n   - wash -> washes, brush -> brushes\n   - mix -> mixes, fix -> fixes\n3. Động từ tận cùng bằng phụ âm + -y: Đổi -y thành -i rồi thêm -es.\n   - study -> studies, fly -> flies, try -> tries, carry -> carries.\n4. Động từ tận cùng bằng nguyên âm (u, e, o, a, i) + -y: Chỉ thêm -s.\n   - play -> plays, buy -> buys, pay -> pays.",
      structure: "S + V(s/es) | S + do/does + not + V | Do/Does + S + V?",
      examples: [
        "She goes to the office at 8 a.m. (Cô ấy đi đến văn phòng lúc 8 giờ sáng.)",
        "He studies English every evening. (Anh ấy học tiếng Anh mỗi tối.)",
        "The company provides good service. (Công ty cung cấp dịch vụ tốt.)",
        "Does the manager check the report daily? (Quản lý có kiểm tra báo cáo hàng ngày không?)"
      ],
      tips: "Mẹo nhớ đuôi es: \"Ông Sáu Chạy Xe Sh Zip\" (O, S, CH, X, SH, Z) -> thêm -es. Luôn đưa động từ về nguyên mẫu khi dùng trợ động từ do/does!"
    },
    words: [
      {word:'today', meaning:'hôm nay', type:'noun / adverb', example:'Today is Monday.', viAnswers:['hôm nay','ngày hôm nay']},
      {word:'tomorrow', meaning:'ngày mai', type:'noun / adverb', example:'I will come back tomorrow.', viAnswers:['ngày mai']},
      {word:'yesterday', meaning:'hôm qua', type:'noun / adverb', example:'Yesterday was a busy day.', viAnswers:['hôm qua','ngày hôm qua']},
      {word:'morning', meaning:'buổi sáng', type:'noun', example:'I exercise every morning.', viAnswers:['buổi sáng','sáng']},
      {word:'afternoon', meaning:'buổi chiều', type:'noun', example:'The meeting is in the afternoon.', viAnswers:['buổi chiều','chiều']},
      {word:'evening', meaning:'buổi tối', type:'noun', example:'I read books in the evening.', viAnswers:['buổi tối','tối']},
      {word:'week', meaning:'tuần', type:'noun', example:'I work five days a week.', viAnswers:['tuần','tuần lễ']},
      {word:'month', meaning:'tháng', type:'noun', example:'This month is very busy.', viAnswers:['tháng']},
      {word:'year', meaning:'năm', type:'noun', example:'There are twelve months in a year.', viAnswers:['năm']},
      {word:'Monday', meaning:'thứ Hai', type:'noun', example:'The meeting is on Monday.', viAnswers:['thứ hai','thứ Hai']},
      {word:'Tuesday', meaning:'thứ Ba', type:'noun', example:'I have class on Tuesday.', viAnswers:['thứ ba','thứ Ba']},
      {word:'weekend', meaning:'cuối tuần', type:'noun', example:'I relax on the weekend.', viAnswers:['cuối tuần']},
      {word:'date', meaning:'ngày tháng, hẹn hò', type:'noun', example:'What is the date today?', viAnswers:['ngày tháng','ngày','hẹn hò']},
      {word:'time', meaning:'thời gian, giờ', type:'noun', example:'What time is it?', viAnswers:['thời gian','giờ','lần']},
      {word:'early', meaning:'sớm', type:'adjective / adverb', example:'She comes early every day.', viAnswers:['sớm']},
      {word:'late', meaning:'muộn, trễ', type:'adjective / adverb', example:'He is always late.', viAnswers:['muộn','trễ']},
      {word:'soon', meaning:'sớm, ngay', type:'adverb', example:'The bus will come soon.', viAnswers:['sớm','ngay','không lâu nữa']},
      {word:'now', meaning:'bây giờ, ngay bây giờ', type:'adverb', example:'I am busy now.', viAnswers:['bây giờ','ngay bây giờ','hiện tại']},
      {word:'then', meaning:'sau đó, lúc đó', type:'adverb', example:'We had lunch, then we went back to work.', viAnswers:['sau đó','lúc đó','khi đó']},
      {word:'before', meaning:'trước, trước khi', type:'preposition / adverb', example:'I eat breakfast before work.', viAnswers:['trước','trước khi']},
      {word:'after', meaning:'sau, sau khi', type:'preposition / adverb', example:'I go home after work.', viAnswers:['sau','sau khi']},
      {word:'during', meaning:'trong suốt, trong khi', type:'preposition', example:'Do not talk during the meeting.', viAnswers:['trong suốt','trong khi','trong lúc']},
      {word:'until', meaning:'cho đến khi', type:'preposition', example:'I work until 6 p.m.', viAnswers:['cho đến khi','cho đến','đến khi']},
      {word:'since', meaning:'kể từ, từ khi', type:'preposition', example:'I have worked here since 2020.', viAnswers:['kể từ','từ khi','từ']},
      {word:'daily', meaning:'hàng ngày', type:'adjective / adverb', example:'I check email daily.', viAnswers:['hàng ngày','mỗi ngày']}
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
      tips: "Mẹo: Nhớ quy tắc 'doesn't + V nguyên thể'. Khi thấy 'doesn't', động từ phía sau luôn ở dạng nguyên thể, không thêm s/es."
    },
    words: [
      {word:'send', meaning:'gửi', type:'verb', example:'Please send the email now.', viAnswers:['gửi']},
      {word:'receive', meaning:'nhận', type:'verb', example:'I receive many emails every day.', viAnswers:['nhận','nhận được']},
      {word:'check', meaning:'kiểm tra', type:'verb', example:'Please check the document.', viAnswers:['kiểm tra','xem xét']},
      {word:'open', meaning:'mở', type:'verb', example:'Open the file on your computer.', viAnswers:['mở']},
      {word:'close', meaning:'đóng, kết thúc', type:'verb', example:'Please close the door.', viAnswers:['đóng','đóng lại','kết thúc']},
      {word:'prepare', meaning:'chuẩn bị', type:'verb', example:'I prepare the report every Monday.', viAnswers:['chuẩn bị']},
      {word:'finish', meaning:'hoàn thành, kết thúc', type:'verb', example:'I finish work at 5 p.m.', viAnswers:['hoàn thành','kết thúc','hoàn tất']},
      {word:'start', meaning:'bắt đầu', type:'verb', example:'We start work at 8 a.m.', viAnswers:['bắt đầu']},
      {word:'attend', meaning:'tham dự', type:'verb', example:'I attend the meeting every week.', viAnswers:['tham dự','tham gia','dự']},
      {word:'join', meaning:'tham gia', type:'verb', example:'Do you want to join our team?', viAnswers:['tham gia','gia nhập']},
      {word:'discuss', meaning:'thảo luận', type:'verb', example:'We discuss the plan together.', viAnswers:['thảo luận','bàn luận','bàn bạc']},
      {word:'explain', meaning:'giải thích', type:'verb', example:'Can you explain this problem?', viAnswers:['giải thích']},
      {word:'update', meaning:'cập nhật', type:'verb', example:'Please update the schedule.', viAnswers:['cập nhật']},
      {word:'fix', meaning:'sửa chữa', type:'verb', example:'He fixes the computer quickly.', viAnswers:['sửa chữa','sửa']},
      {word:'create', meaning:'tạo, tạo ra', type:'verb', example:'She creates a new document.', viAnswers:['tạo','tạo ra','sáng tạo']},
      {word:'design', meaning:'thiết kế', type:'verb / noun', example:'He designs the new website.', viAnswers:['thiết kế']},
      {word:'develop', meaning:'phát triển', type:'verb', example:'We develop new products every year.', viAnswers:['phát triển']},
      {word:'review', meaning:'xem lại, đánh giá', type:'verb / noun', example:'Please review this report before the meeting.', viAnswers:['xem lại','đánh giá','ôn tập']},
      {word:'test', meaning:'kiểm tra, thử nghiệm', type:'verb / noun', example:'We test the software every week.', viAnswers:['kiểm tra','thử nghiệm','thử']},
      {word:'improve', meaning:'cải thiện', type:'verb', example:'We need to improve our service.', viAnswers:['cải thiện','cải tiến','nâng cao']},
      {word:'change', meaning:'thay đổi', type:'verb / noun', example:'We change the plan today.', viAnswers:['thay đổi','đổi']},
      {word:'confirm', meaning:'xác nhận', type:'verb', example:'Please confirm the meeting time.', viAnswers:['xác nhận']},
      {word:'provide', meaning:'cung cấp', type:'verb', example:'We provide good service.', viAnswers:['cung cấp']},
      {word:'choose', meaning:'chọn, lựa chọn', type:'verb', example:'Please choose one option.', viAnswers:['chọn','lựa chọn']},
      {word:'require', meaning:'yêu cầu, đòi hỏi', type:'verb', example:'This job requires experience.', viAnswers:['yêu cầu','đòi hỏi','cần']}
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
      tips: "Mẹo: Nhớ 'Do' đi với I/you/we/they và 'Does' đi với he/she/it. Sau 'Does', động từ luôn ở nguyên thể."
    },
    words: [
      {word:'room', meaning:'phòng', type:'noun', example:'The meeting room is on the third floor.', viAnswers:['phòng','căn phòng']},
      {word:'building', meaning:'tòa nhà', type:'noun', example:'Our office is in a tall building.', viAnswers:['tòa nhà','toà nhà']},
      {word:'floor', meaning:'tầng, sàn nhà', type:'noun', example:'My office is on the fifth floor.', viAnswers:['tầng','sàn nhà','tầng lầu']},
      {word:'desk', meaning:'bàn làm việc', type:'noun', example:'There is a computer on my desk.', viAnswers:['bàn làm việc','bàn','bàn viết']},
      {word:'table', meaning:'bàn', type:'noun', example:'Please put the documents on the table.', viAnswers:['bàn','cái bàn']},
      {word:'chair', meaning:'ghế', type:'noun', example:'Please sit on the chair.', viAnswers:['ghế','cái ghế']},
      {word:'station', meaning:'nhà ga, trạm', type:'noun', example:'The train station is nearby.', viAnswers:['nhà ga','trạm','ga']},
      {word:'airport', meaning:'sân bay', type:'noun', example:'The airport is far from here.', viAnswers:['sân bay']},
      {word:'hotel', meaning:'khách sạn', type:'noun', example:'We stay at a nice hotel.', viAnswers:['khách sạn']},
      {word:'restaurant', meaning:'nhà hàng', type:'noun', example:'Let us eat at the restaurant.', viAnswers:['nhà hàng','quán ăn']},
      {word:'store', meaning:'cửa hàng', type:'noun', example:'The store closes at 9 p.m.', viAnswers:['cửa hàng','tiệm']},
      {word:'bank', meaning:'ngân hàng', type:'noun', example:'I go to the bank every Friday.', viAnswers:['ngân hàng']},
      {word:'school', meaning:'trường học', type:'noun', example:'The school is near my house.', viAnswers:['trường học','trường']},
      {word:'university', meaning:'đại học, trường đại học', type:'noun', example:'She studies at a big university.', viAnswers:['đại học','trường đại học']},
      {word:'hospital', meaning:'bệnh viện', type:'noun', example:'The hospital is open 24 hours.', viAnswers:['bệnh viện']},
      {word:'factory', meaning:'nhà máy, xưởng', type:'noun', example:'The factory produces cars.', viAnswers:['nhà máy','xưởng','công xưởng']},
      {word:'warehouse', meaning:'nhà kho', type:'noun', example:'The products are in the warehouse.', viAnswers:['nhà kho','kho hàng','kho']},
      {word:'entrance', meaning:'lối vào', type:'noun', example:'The entrance is on the left.', viAnswers:['lối vào','cửa vào','cổng vào']},
      {word:'exit', meaning:'lối ra', type:'noun', example:'The exit is at the back of the building.', viAnswers:['lối ra','cửa ra','cổng ra']},
      {word:'street', meaning:'đường phố, con đường', type:'noun', example:'The store is on Main Street.', viAnswers:['đường phố','con đường','đường','phố']},
      {word:'city', meaning:'thành phố', type:'noun', example:'I live in a big city.', viAnswers:['thành phố']},
      {word:'area', meaning:'khu vực', type:'noun', example:'This area is very quiet.', viAnswers:['khu vực','vùng','khu']},
      {word:'place', meaning:'nơi, địa điểm', type:'noun', example:'This is a nice place to work.', viAnswers:['nơi','địa điểm','chỗ']},
      {word:'location', meaning:'vị trí, địa điểm', type:'noun', example:'The location of the office is good.', viAnswers:['vị trí','địa điểm']},
      {word:'parking', meaning:'bãi đỗ xe, đỗ xe', type:'noun', example:'The parking lot is behind the building.', viAnswers:['bãi đỗ xe','đỗ xe','bãi đậu xe','chỗ đậu xe']}
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
      title: "Danh từ số ít, số nhiều & Quy tắc thêm s/es",
      explanation: "Danh từ đếm được có hai dạng: Số ít (một đối tượng) và Số nhiều (hai trở lên).\n\n**QUY TẮC CHUYỂN DANH TỪ SỐ ÍT SANG SỐ NHIỀU:**\n1. Thông thường: Thêm -s vào sau danh từ (product -> products, item -> items).\n2. Danh từ tận cùng bằng -s, -ss, -sh, -ch, -x, -z, -o: Thêm -es.\n   - bus -> buses, class -> classes, watch -> watches, box -> boxes.\n   * Ngoại lệ với -o: Một số từ mượn chỉ thêm -s (photo -> photos, piano -> pianos).\n3. Danh từ tận cùng bằng phụ âm + -y: Đổi -y thành -i rồi thêm -es.\n   - company -> companies, city -> cities, factory -> factories.\n   * Nếu trước -y là nguyên âm thì chỉ thêm -s: day -> days, key -> keys.\n4. Danh từ tận cùng bằng -f hoặc -fe: Đổi -f/-fe thành -v rồi thêm -es.\n   - shelf -> shelves (kệ), knife -> knives (dao), life -> lives (mạng sống).\n   * Ngoại lệ: roof -> roofs (mái nhà), belief -> beliefs (niềm tin).\n5. Danh từ bất quy tắc (Phải học thuộc vì xuất hiện rất nhiều trong TOEIC):\n   - man -> men, woman -> women\n   - child -> children (trẻ em), person -> people (người)\n   - tooth -> teeth (răng), foot -> feet (bàn chân)\n   - mouse -> mice (chuột)\n   - sheep -> sheep (cừu), fish -> fish (cá) - không đổi.",
      structure: "Singular + s/es/ies -> Plural | a/an + Singular | some/many + Plural",
      examples: [
        "We ordered three new shelves for the office. (Chúng tôi đã đặt mua 3 cái kệ mới cho văn phòng.)",
        "The manager met three clients yesterday. (Quản lý đã gặp ba khách hàng ngày hôm qua.)",
        "All employees must attend the meeting. (Tất cả nhân viên phải tham gia cuộc họp.)",
        "There are many people waiting in the lobby. (Có nhiều người đang đợi ở hành lang.)"
      ],
      tips: "Lưu ý từ bất quy tắc: person -> people rất hay ra thi. Danh từ không đếm được (money, information, advice, water) KHÔNG được thêm -s/es và không đi với a/an!"
    },
    words: [
      {word:'buy', meaning:'mua', type:'verb', example:'I buy office supplies every month.', viAnswers:['mua']},
      {word:'sell', meaning:'bán', type:'verb', example:'We sell computers and phones.', viAnswers:['bán']},
      {word:'price', meaning:'giá, giá cả', type:'noun', example:'The price is too high.', viAnswers:['giá','giá cả','giá tiền']},
      {word:'cost', meaning:'chi phí, tốn', type:'noun / verb', example:'How much does it cost?', viAnswers:['chi phí','tốn','giá']},
      {word:'order', meaning:'đặt hàng, đơn hàng', type:'verb / noun', example:'I want to order ten items.', viAnswers:['đặt hàng','đơn hàng','gọi món']},
      {word:'product', meaning:'sản phẩm', type:'noun', example:'This product is very popular.', viAnswers:['sản phẩm']},
      {word:'item', meaning:'mặt hàng, món đồ', type:'noun', example:'How many items do you need?', viAnswers:['mặt hàng','món đồ','vật phẩm','mục']},
      {word:'invoice', meaning:'hóa đơn', type:'noun', example:'Please send the invoice by email.', viAnswers:['hóa đơn','hoá đơn']},
      {word:'payment', meaning:'thanh toán, khoản trả', type:'noun', example:'The payment is due next week.', viAnswers:['thanh toán','khoản thanh toán','khoản trả']},
      {word:'cash', meaning:'tiền mặt', type:'noun', example:'Do you pay by cash or card?', viAnswers:['tiền mặt']},
      {word:'card', meaning:'thẻ', type:'noun', example:'I pay by credit card.', viAnswers:['thẻ','thẻ tín dụng']},
      {word:'discount', meaning:'giảm giá, chiết khấu', type:'noun', example:'There is a 20% discount today.', viAnswers:['giảm giá','chiết khấu']},
      {word:'sale', meaning:'giảm giá, bán hàng', type:'noun', example:'The store has a big sale this week.', viAnswers:['giảm giá','bán hàng','đợt giảm giá']},
      {word:'delivery', meaning:'giao hàng', type:'noun', example:'The delivery arrives tomorrow.', viAnswers:['giao hàng','sự giao hàng','vận chuyển']},
      {word:'shipping', meaning:'vận chuyển', type:'noun', example:'Shipping is free for big orders.', viAnswers:['vận chuyển','giao hàng','phí vận chuyển']},
      {word:'package', meaning:'gói hàng, bưu kiện', type:'noun', example:'Your package is ready.', viAnswers:['gói hàng','bưu kiện','kiện hàng']},
      {word:'receipt', meaning:'biên lai, hóa đơn', type:'noun', example:'Please keep your receipt.', viAnswers:['biên lai','hóa đơn','biên nhận']},
      {word:'service', meaning:'dịch vụ', type:'noun', example:'The service here is excellent.', viAnswers:['dịch vụ']},
      {word:'market', meaning:'thị trường, chợ', type:'noun', example:'The market is very competitive.', viAnswers:['thị trường','chợ']},
      {word:'supplier', meaning:'nhà cung cấp', type:'noun', example:'We need a new supplier.', viAnswers:['nhà cung cấp','nhà cung ứng']},
      {word:'stock', meaning:'hàng tồn kho, kho hàng', type:'noun', example:'This item is out of stock.', viAnswers:['hàng tồn kho','kho hàng','tồn kho']},
      {word:'available', meaning:'có sẵn, có thể sử dụng', type:'adjective', example:'This product is available now.', viAnswers:['có sẵn','có thể sử dụng','sẵn có','sẵn sàng']},
      {word:'expensive', meaning:'đắt, đắt đỏ', type:'adjective', example:'This phone is very expensive.', viAnswers:['đắt','đắt đỏ','mắc']},
      {word:'cheap', meaning:'rẻ', type:'adjective', example:'This item is cheap but good.', viAnswers:['rẻ','rẻ tiền','giá rẻ']},
      {word:'refund', meaning:'hoàn tiền, trả lại tiền', type:'noun / verb', example:'Can I get a refund?', viAnswers:['hoàn tiền','trả lại tiền','hoàn lại tiền']}
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
      title: "Tính từ (trước danh từ / sau to be)",
      explanation: "Tính từ (adjective) dùng để mô tả danh từ. Trong tiếng Anh, tính từ có 2 vị trí chính:\n\n1. Trước danh từ (Attributive):\n   a big office (một văn phòng lớn)\n   an important meeting (một cuộc họp quan trọng)\n   Cấu trúc: a/an/the + ADJ + N\n\n2. Sau động từ 'to be' (Predicative):\n   The office is big. (Văn phòng thì lớn.)\n   The meeting is important. (Cuộc họp thì quan trọng.)\n   Cấu trúc: S + be + ADJ\n\nLưu ý: Tính từ trong tiếng Anh KHÔNG thay đổi theo số ít/số nhiều.\n   ✅ big offices (ĐÚNG)\n   ❌ bigs offices (SAI)",
      structure: "a/an/the + ADJ + N | S + be + ADJ",
      examples: [
        "It is a new product. (Đó là một sản phẩm mới.)",
        "The task is difficult. (Nhiệm vụ thì khó.)",
        "We need a fast solution. (Chúng tôi cần một giải pháp nhanh.)",
        "The rooms are large and clean. (Các phòng thì rộng và sạch.)"
      ],
      tips: "Mẹo: Tính từ tiếng Anh không bao giờ thêm -s dù danh từ là số nhiều. 'big rooms' chứ không phải 'bigs rooms'. Khác với tiếng Việt, tính từ đứng TRƯỚC danh từ."
    },
    words: [
      {word:'new', meaning:'mới', type:'adjective', example:'She has a new computer.', viAnswers:['mới']},
      {word:'old', meaning:'cũ, già', type:'adjective', example:'This is an old building.', viAnswers:['cũ','già']},
      {word:'good', meaning:'tốt, giỏi', type:'adjective', example:'He is a good manager.', viAnswers:['tốt','giỏi','hay']},
      {word:'bad', meaning:'xấu, tệ, kém', type:'adjective', example:'The weather is bad today.', viAnswers:['xấu','tệ','kém','dở']},
      {word:'large', meaning:'lớn, rộng', type:'adjective', example:'We need a large room for the meeting.', viAnswers:['lớn','rộng','to']},
      {word:'small', meaning:'nhỏ, bé', type:'adjective', example:'The office is too small.', viAnswers:['nhỏ','bé','nhỏ bé']},
      {word:'high', meaning:'cao', type:'adjective', example:'The price is very high.', viAnswers:['cao']},
      {word:'low', meaning:'thấp', type:'adjective', example:'We offer low prices.', viAnswers:['thấp']},
      {word:'fast', meaning:'nhanh', type:'adjective / adverb', example:'The internet is very fast here.', viAnswers:['nhanh']},
      {word:'slow', meaning:'chậm', type:'adjective / adverb', example:'The computer is too slow.', viAnswers:['chậm']},
      {word:'easy', meaning:'dễ, dễ dàng', type:'adjective', example:'This task is easy.', viAnswers:['dễ','dễ dàng']},
      {word:'difficult', meaning:'khó, khó khăn', type:'adjective', example:'The exam is very difficult.', viAnswers:['khó','khó khăn']},
      {word:'important', meaning:'quan trọng', type:'adjective', example:'This meeting is very important.', viAnswers:['quan trọng']},
      {word:'necessary', meaning:'cần thiết', type:'adjective', example:'A passport is necessary for travel.', viAnswers:['cần thiết']},
      {word:'available', meaning:'có sẵn, rảnh', type:'adjective', example:'Are you available tomorrow?', viAnswers:['có sẵn','rảnh','sẵn có','sẵn sàng']},
      {word:'busy', meaning:'bận, bận rộn', type:'adjective', example:'I am very busy this week.', viAnswers:['bận','bận rộn']},
      {word:'free', meaning:'miễn phí, rảnh, tự do', type:'adjective', example:'The parking is free.', viAnswers:['miễn phí','rảnh','tự do']},
      {word:'ready', meaning:'sẵn sàng', type:'adjective', example:'The report is ready.', viAnswers:['sẵn sàng']},
      {word:'late', meaning:'muộn, trễ', type:'adjective', example:'He is always late for meetings.', viAnswers:['muộn','trễ']},
      {word:'early', meaning:'sớm', type:'adjective', example:'She is always early.', viAnswers:['sớm']},
      {word:'full', meaning:'đầy', type:'adjective', example:'The parking lot is full.', viAnswers:['đầy','đầy đủ']},
      {word:'empty', meaning:'trống, rỗng', type:'adjective', example:'The room is empty.', viAnswers:['trống','rỗng','trống rỗng']},
      {word:'possible', meaning:'có thể, khả thi', type:'adjective', example:'Is it possible to change the date?', viAnswers:['có thể','khả thi']},
      {word:'different', meaning:'khác, khác nhau', type:'adjective', example:'We have different opinions.', viAnswers:['khác','khác nhau','khác biệt']},
      {word:'same', meaning:'giống nhau, cùng', type:'adjective', example:'We work in the same office.', viAnswers:['giống nhau','cùng','giống','y hệt']}
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
      title: "Hiện tại tiếp diễn (Present Continuous) & Quy tắc thêm -ing",
      explanation: "Thì hiện tại tiếp diễn dùng để diễn tả hành động đang xảy ra tại thời điểm nói hoặc xung quanh thời điểm nói.\n\nCấu trúc:\n- Khẳng định: S + am/is/are + V-ing\n- Phủ định: S + am/is/are + not + V-ing\n- Nghi vấn: Am/Is/Are + S + V-ing?\n\n**QUY TẮC THÊM -ING VÀO SAU ĐỘNG TỪ:**\n1. Thông thường: Thêm trực tiếp -ing (go -> going, work -> working).\n2. Động từ tận cùng bằng một chữ -e: Bỏ -e rồi thêm -ing.\n   - write -> writing, take -> taking, drive -> driving, change -> changing.\n   * Lưu ý: Nếu tận cùng bằng -ee thì giữ nguyên: see -> seeing, agree -> agreeing.\n3. Động từ 1 âm tiết, tận cùng dạng Phụ âm - Nguyên âm - Phụ âm (CVC): Gấp đôi phụ âm cuối rồi thêm -ing.\n   - run -> running, sit -> sitting, plan -> planning, get -> getting, stop -> stopping.\n   * Ngoại lệ: Không gấp đôi nếu phụ âm cuối là w, x, y (play -> playing, snow -> snowing).\n4. Động từ 2 âm tiết, có trọng âm rơi vào âm tiết 2, tận cùng dạng CVC: Gấp đôi phụ âm cuối.\n   - begin -> beginning, prefer -> preferring, commit -> committing.\n5. Động từ tận cùng bằng -ie: Đổi -ie thành -y rồi thêm -ing.\n   - lie -> lying (nằm/nói dối), die -> dying (chết).",
      structure: "S + am/is/are + V-ing",
      examples: [
        "She is writing a report right now. (Cô ấy đang viết báo cáo ngay bây giờ.)",
        "They are planning a new marketing campaign. (Họ đang lên kế hoạch cho chiến dịch tiếp thị mới.)",
        "The technicians are fixing the copier. (Các kỹ thuật viên đang sửa máy photocopy.)",
        "We are beginning the training session. (Chúng tôi đang bắt đầu buổi đào tạo.)"
      ],
      tips: "Mẹo nhớ: Trọng âm ở âm tiết 1 thì không gấp đôi phụ âm cuối, ví dụ: visit -> visiting, open -> opening. Các động từ trạng thái (know, believe, love, want) thường không chia tiếp diễn!"
    },
    words: [
      {word:'go', meaning:'đi', type:'verb', example:'I go to work by bus.', viAnswers:['đi']},
      {word:'come', meaning:'đến, tới', type:'verb', example:'Please come to the office.', viAnswers:['đến','tới']},
      {word:'arrive', meaning:'đến nơi', type:'verb', example:'The train arrives at 9 a.m.', viAnswers:['đến nơi','đến','tới nơi']},
      {word:'leave', meaning:'rời đi, rời khỏi', type:'verb', example:'I leave home at 7 a.m.', viAnswers:['rời đi','rời khỏi','rời']},
      {word:'travel', meaning:'du lịch, đi lại', type:'verb / noun', example:'I travel by plane for work.', viAnswers:['du lịch','đi lại','di chuyển']},
      {word:'drive', meaning:'lái xe', type:'verb', example:'He drives to work every day.', viAnswers:['lái xe']},
      {word:'walk', meaning:'đi bộ', type:'verb', example:'I walk to the station.', viAnswers:['đi bộ']},
      {word:'ride', meaning:'đi (xe), cưỡi', type:'verb / noun', example:'She rides a bicycle to school.', viAnswers:['đi xe','cưỡi','đi']},
      {word:'take', meaning:'đi (phương tiện), lấy', type:'verb', example:'I take the bus every morning.', viAnswers:['đi','lấy','mất']},
      {word:'train', meaning:'tàu hỏa', type:'noun', example:'The train is very fast.', viAnswers:['tàu hỏa','tàu','xe lửa']},
      {word:'bus', meaning:'xe buýt', type:'noun', example:'The bus comes every 15 minutes.', viAnswers:['xe buýt','xe bus']},
      {word:'taxi', meaning:'xe taxi', type:'noun', example:'I take a taxi to the airport.', viAnswers:['xe taxi','taxi','tắc xi']},
      {word:'car', meaning:'xe hơi, ô tô', type:'noun', example:'He has a new car.', viAnswers:['xe hơi','ô tô','xe']},
      {word:'flight', meaning:'chuyến bay', type:'noun', example:'My flight is at 3 p.m.', viAnswers:['chuyến bay']},
      {word:'ticket', meaning:'vé', type:'noun', example:'I buy a ticket online.', viAnswers:['vé']},
      {word:'road', meaning:'con đường', type:'noun', example:'The road is very busy.', viAnswers:['con đường','đường']},
      {word:'traffic', meaning:'giao thông', type:'noun', example:'The traffic is heavy this morning.', viAnswers:['giao thông']},
      {word:'delay', meaning:'sự chậm trễ, trì hoãn', type:'noun / verb', example:'There is a delay at the airport.', viAnswers:['sự chậm trễ','trì hoãn','hoãn','chậm trễ']},
      {word:'trip', meaning:'chuyến đi', type:'noun', example:'I have a business trip next week.', viAnswers:['chuyến đi','chuyến']},
      {word:'visit', meaning:'thăm, ghé thăm', type:'verb / noun', example:'I visit the client every month.', viAnswers:['thăm','ghé thăm','viếng thăm','tham quan']},
      {word:'return', meaning:'trở về, trả lại', type:'verb', example:'I return home at 6 p.m.', viAnswers:['trở về','trả lại','quay về']},
      {word:'depart', meaning:'khởi hành', type:'verb', example:'The bus departs at 8 a.m.', viAnswers:['khởi hành','rời đi']},
      {word:'destination', meaning:'điểm đến', type:'noun', example:'What is your destination?', viAnswers:['điểm đến','đích đến','nơi đến']},
      {word:'passenger', meaning:'hành khách', type:'noun', example:'There are many passengers on the train.', viAnswers:['hành khách','khách']},
      {word:'schedule', meaning:'lịch trình', type:'noun', example:'Check the bus schedule online.', viAnswers:['lịch trình','thời khóa biểu','lịch']}
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
      title: "Quá khứ đơn (Past Simple) & Quy tắc thêm -ed",
      explanation: "Thì quá khứ đơn diễn tả hành động đã xảy ra và chấm dứt hoàn toàn trong quá khứ, có thời gian xác định.\n\nCấu trúc với động từ thường:\n- Khẳng định: S + V-ed (Động từ có quy tắc) hoặc V2 (Động từ bất quy tắc)\n- Phủ định: S + did + not + V nguyên mẫu\n- Nghi vấn: Did + S + V nguyên mẫu?\n\n**QUY TẮC THÊM -ED CHO ĐỘNG TỪ CÓ QUY TẮC:**\n1. Thông thường: Thêm -ed (worked, started, played).\n2. Động từ tận cùng bằng -e: Chỉ cần thêm -d (live -> lived, arrive -> arrived, like -> liked).\n3. Động từ tận cùng bằng phụ âm + -y: Đổi -y thành -i rồi thêm -ed.\n   - study -> studied, cry -> cried, copy -> copied.\n   * Nếu trước -y là nguyên âm thì chỉ thêm -ed: play -> played, stay -> stayed.\n4. Động từ 1 âm tiết, tận cùng dạng Phụ âm - Nguyên âm - Phụ âm (CVC): Gấp đôi phụ âm cuối rồi thêm -ed.\n   - stop -> stopped, plan -> planned, fit -> fitted.\n   * Ngoại lệ: Không gấp đôi nếu phụ âm cuối là w, x, y.\n\n**ĐỘNG TỪ BẤT QUY TẮC PHỔ BIẾN TRONG TOEIC (Phải thuộc):**\n- go -> went (đi), have -> had (có), do -> did (làm), say -> said (nói)\n- make -> made (tạo ra), get -> got (nhận được), take -> took (cầm/lấy/mất thời gian)\n- see -> saw (nhìn), give -> gave (cho), find -> found (tìm thấy)\n- write -> wrote (viết), read -> read (đọc - viết giống nhau nhưng phát âm khác), meet -> met (gặp)\n- send -> sent (gửi), spend -> spent (chi tiêu), build -> built (xây dựng)\n- buy -> bought (mua), sell -> sold (bán), leave -> left (rời đi)",
      structure: "S + V-ed / V2 | S + did + not + V | Did + S + V?",
      examples: [
        "The manager sent the email yesterday. (Quản lý đã gửi email ngày hôm qua.)",
        "They planned the event very carefully. (Họ đã lập kế hoạch cho sự kiện rất cẩn thận.)",
        "We studied the market before launching the product. (Chúng tôi đã nghiên cứu thị trường trước khi tung sản phẩm.)",
        "Did you meet the new employee last week? (Bạn có gặp nhân viên mới tuần trước không?)"
      ],
      tips: "Mẹo làm bài: Cứ xuất hiện did/didn't thì động từ chính phía sau phải về nguyên mẫu! Cần ghi nhớ cặp động từ có/bất quy tắc để tránh nhầm lẫn đuôi."
    },
    words: [
      {word:'director', meaning:'giám đốc', type:'noun', example:'The director makes important decisions.', viAnswers:['giám đốc']},
      {word:'assistant', meaning:'trợ lý', type:'noun', example:'The assistant helps the manager.', viAnswers:['trợ lý','phụ tá']},
      {word:'supervisor', meaning:'giám sát viên, người giám sát', type:'noun', example:'The supervisor checks our work.', viAnswers:['giám sát viên','người giám sát','quản đốc']},
      {word:'worker', meaning:'công nhân, người lao động', type:'noun', example:'The workers start at 7 a.m.', viAnswers:['công nhân','người lao động','nhân công']},
      {word:'engineer', meaning:'kỹ sư', type:'noun', example:'She is a software engineer.', viAnswers:['kỹ sư']},
      {word:'developer', meaning:'nhà phát triển, lập trình viên', type:'noun', example:'The developer builds websites.', viAnswers:['nhà phát triển','lập trình viên']},
      {word:'designer', meaning:'nhà thiết kế', type:'noun', example:'The designer creates beautiful logos.', viAnswers:['nhà thiết kế']},
      {word:'accountant', meaning:'kế toán', type:'noun', example:'The accountant manages the budget.', viAnswers:['kế toán','nhân viên kế toán']},
      {word:'receptionist', meaning:'lễ tân', type:'noun', example:'The receptionist answers the phone.', viAnswers:['lễ tân','nhân viên lễ tân']},
      {word:'secretary', meaning:'thư ký', type:'noun', example:'The secretary schedules meetings.', viAnswers:['thư ký']},
      {word:'teacher', meaning:'giáo viên', type:'noun', example:'The teacher explains the lesson.', viAnswers:['giáo viên','thầy giáo','cô giáo']},
      {word:'student', meaning:'học sinh, sinh viên', type:'noun', example:'The student studies hard for the exam.', viAnswers:['học sinh','sinh viên']},
      {word:'applicant', meaning:'người nộp đơn, ứng viên', type:'noun', example:'The applicant has good experience.', viAnswers:['người nộp đơn','ứng viên','người xin việc']},
      {word:'candidate', meaning:'ứng viên, ứng cử viên', type:'noun', example:'There are five candidates for this position.', viAnswers:['ứng viên','ứng cử viên']},
      {word:'guest', meaning:'khách, khách mời', type:'noun', example:'We have special guests today.', viAnswers:['khách','khách mời']},
      {word:'visitor', meaning:'khách tham quan, người đến thăm', type:'noun', example:'Visitors must sign in at the front desk.', viAnswers:['khách tham quan','người đến thăm','du khách','khách']},
      {word:'member', meaning:'thành viên', type:'noun', example:'She is a member of our team.', viAnswers:['thành viên']},
      {word:'leader', meaning:'người lãnh đạo, trưởng nhóm', type:'noun', example:'The leader guides the team.', viAnswers:['người lãnh đạo','trưởng nhóm','lãnh đạo']},
      {word:'partner', meaning:'đối tác, cộng sự', type:'noun', example:'He is our business partner.', viAnswers:['đối tác','cộng sự','bạn đồng hành']},
      {word:'colleague', meaning:'đồng nghiệp', type:'noun', example:'My colleague sits next to me.', viAnswers:['đồng nghiệp']},
      {word:'owner', meaning:'chủ sở hữu, chủ', type:'noun', example:'The owner opened this store in 2010.', viAnswers:['chủ sở hữu','chủ']},
      {word:'employer', meaning:'người sử dụng lao động, chủ', type:'noun', example:'The employer provides health insurance.', viAnswers:['người sử dụng lao động','chủ','nhà tuyển dụng']},
      {word:'volunteer', meaning:'tình nguyện viên', type:'noun', example:'Volunteers help at the event.', viAnswers:['tình nguyện viên','người tình nguyện']},
      {word:'representative', meaning:'đại diện, người đại diện', type:'noun', example:'She is the company representative.', viAnswers:['đại diện','người đại diện']},
      {word:'consultant', meaning:'tư vấn viên, cố vấn', type:'noun', example:'The consultant gives expert advice.', viAnswers:['tư vấn viên','cố vấn','chuyên gia tư vấn']}
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
      tips: "Mẹo: Nhớ quy tắc vàng: 'did/didn't' + V nguyên thể. Khi thấy 'did', động từ sau nó LUÔN ở nguyên thể."
    },
    words: [
      {word:'file', meaning:'tập tin, hồ sơ', type:'noun', example:'Please open this file.', viAnswers:['tập tin','hồ sơ','tệp']},
      {word:'form', meaning:'biểu mẫu, đơn', type:'noun', example:'Fill out this form, please.', viAnswers:['biểu mẫu','đơn','mẫu đơn']},
      {word:'letter', meaning:'thư, lá thư', type:'noun', example:'I received a letter from the bank.', viAnswers:['thư','lá thư','bức thư']},
      {word:'notice', meaning:'thông báo', type:'noun', example:'There is a notice on the board.', viAnswers:['thông báo']},
      {word:'information', meaning:'thông tin', type:'noun', example:'I need more information.', viAnswers:['thông tin']},
      {word:'detail', meaning:'chi tiết', type:'noun', example:'Please check the details carefully.', viAnswers:['chi tiết']},
      {word:'instruction', meaning:'hướng dẫn, chỉ dẫn', type:'noun', example:'Read the instructions before you start.', viAnswers:['hướng dẫn','chỉ dẫn']},
      {word:'request', meaning:'yêu cầu, đề nghị', type:'noun / verb', example:'I sent a request to the IT department.', viAnswers:['yêu cầu','đề nghị']},
      {word:'application', meaning:'đơn xin, ứng dụng', type:'noun', example:'She submitted her application.', viAnswers:['đơn xin','ứng dụng','đơn ứng tuyển']},
      {word:'contract', meaning:'hợp đồng', type:'noun', example:'Please sign the contract.', viAnswers:['hợp đồng']},
      {word:'agreement', meaning:'thỏa thuận, hợp đồng', type:'noun', example:'Both sides reached an agreement.', viAnswers:['thỏa thuận','hợp đồng','sự đồng ý']},
      {word:'copy', meaning:'bản sao, sao chép', type:'noun / verb', example:'Please make a copy of this document.', viAnswers:['bản sao','sao chép']},
      {word:'attachment', meaning:'tệp đính kèm', type:'noun', example:'Please check the attachment in the email.', viAnswers:['tệp đính kèm','đính kèm','file đính kèm']},
      {word:'page', meaning:'trang', type:'noun', example:'This document has ten pages.', viAnswers:['trang']},
      {word:'list', meaning:'danh sách', type:'noun', example:'I made a list of items we need.', viAnswers:['danh sách']},
      {word:'chart', meaning:'biểu đồ', type:'noun', example:'The chart shows sales data.', viAnswers:['biểu đồ','bảng biểu']},
      {word:'record', meaning:'hồ sơ, ghi lại, bản ghi', type:'noun / verb', example:'We keep a record of all meetings.', viAnswers:['hồ sơ','ghi lại','bản ghi','kỷ lục']},
      {word:'data', meaning:'dữ liệu', type:'noun', example:'The data is stored on the server.', viAnswers:['dữ liệu','số liệu']},
      {word:'system', meaning:'hệ thống', type:'noun', example:'The computer system is updated.', viAnswers:['hệ thống']},
      {word:'account', meaning:'tài khoản', type:'noun', example:'Please create an account.', viAnswers:['tài khoản']},
      {word:'password', meaning:'mật khẩu', type:'noun', example:'Do not share your password.', viAnswers:['mật khẩu','mật mã']},
      {word:'software', meaning:'phần mềm', type:'noun', example:'We use new software for work.', viAnswers:['phần mềm']},
      {word:'print', meaning:'in, in ấn', type:'verb', example:'Please print this document.', viAnswers:['in','in ấn']},
      {word:'sign', meaning:'ký, ký tên', type:'verb', example:'Please sign your name here.', viAnswers:['ký','ký tên']},
      {word:'submit', meaning:'nộp, gửi', type:'verb', example:'Submit the form before Friday.', viAnswers:['nộp','gửi','nộp bài']}
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
      title: "Vị trí trạng từ trong câu",
      explanation: "Trạng từ (adverb) bổ nghĩa cho động từ, tính từ, hoặc trạng từ khác. Vị trí trạng từ trong câu phụ thuộc vào loại trạng từ.\n\n1. Trạng từ tần suất (always, usually, often, sometimes, rarely, never):\n   → Đứng TRƯỚC động từ thường: She always checks emails.\n   → Đứng SAU động từ 'to be': He is always late.\n\n2. Trạng từ cách thức (carefully, quickly, slowly):\n   → Thường đứng SAU động từ hoặc SAU tân ngữ:\n   She works carefully. / He reads the report quickly.\n\n3. Trạng từ thời gian (recently, already, still, just, again):\n   → already, just, still: trước động từ chính: I have already finished.\n   → recently, again: cuối câu: I saw him recently.\n\n4. Trạng từ nơi chốn (here, there, inside, outside):\n   → Thường đứng cuối câu: She works here.",
      structure: "Trạng từ tần suất: S + adv + V | S + be + adv\nTrạng từ cách thức: S + V + O + adv",
      examples: [
        "She always arrives early. (Cô ấy luôn đến sớm.)",
        "He is usually busy on Monday. (Anh ấy thường bận vào thứ Hai.)",
        "Please read the document carefully. (Hãy đọc tài liệu cẩn thận.)",
        "I recently started a new job. (Tôi gần đây đã bắt đầu công việc mới.)"
      ],
      tips: "Mẹo nhớ vị trí trạng từ tần suất: 'Be sau, thường trước'. Trạng từ tần suất đứng SAU 'to be' nhưng TRƯỚC động từ thường."
    },
    words: [
      {word:'always', meaning:'luôn luôn', type:'adverb', example:'She always comes on time.', viAnswers:['luôn luôn','luôn']},
      {word:'usually', meaning:'thường, thường xuyên', type:'adverb', example:'I usually eat lunch at noon.', viAnswers:['thường','thường xuyên']},
      {word:'often', meaning:'thường, hay', type:'adverb', example:'He often works late.', viAnswers:['thường','hay','thường xuyên']},
      {word:'sometimes', meaning:'thỉnh thoảng, đôi khi', type:'adverb', example:'I sometimes work from home.', viAnswers:['thỉnh thoảng','đôi khi']},
      {word:'rarely', meaning:'hiếm khi', type:'adverb', example:'She rarely takes a day off.', viAnswers:['hiếm khi','ít khi']},
      {word:'never', meaning:'không bao giờ', type:'adverb', example:'He never misses a meeting.', viAnswers:['không bao giờ']},
      {word:'very', meaning:'rất', type:'adverb', example:'The report is very important.', viAnswers:['rất']},
      {word:'too', meaning:'quá, cũng', type:'adverb', example:'This room is too small.', viAnswers:['quá','cũng']},
      {word:'quite', meaning:'khá, khá là', type:'adverb', example:'The test was quite difficult.', viAnswers:['khá','khá là','tương đối']},
      {word:'really', meaning:'thực sự', type:'adverb', example:'I really like this job.', viAnswers:['thực sự','thật sự']},
      {word:'carefully', meaning:'cẩn thận', type:'adverb', example:'Please read the instructions carefully.', viAnswers:['cẩn thận','một cách cẩn thận']},
      {word:'quickly', meaning:'nhanh chóng', type:'adverb', example:'She finished the task quickly.', viAnswers:['nhanh chóng','nhanh','một cách nhanh chóng']},
      {word:'slowly', meaning:'chậm, từ từ', type:'adverb', example:'Please speak slowly.', viAnswers:['chậm','từ từ','chậm rãi']},
      {word:'recently', meaning:'gần đây', type:'adverb', example:'I recently moved to a new office.', viAnswers:['gần đây','mới đây']},
      {word:'already', meaning:'đã, rồi', type:'adverb', example:'I have already finished the report.', viAnswers:['đã','rồi']},
      {word:'still', meaning:'vẫn, vẫn còn', type:'adverb', example:'He is still working.', viAnswers:['vẫn','vẫn còn']},
      {word:'just', meaning:'vừa mới, chỉ', type:'adverb', example:'I just received your email.', viAnswers:['vừa mới','chỉ','vừa']},
      {word:'again', meaning:'lại, một lần nữa', type:'adverb', example:'Please try again.', viAnswers:['lại','một lần nữa','lần nữa']},
      {word:'together', meaning:'cùng nhau', type:'adverb', example:'Let us work together.', viAnswers:['cùng nhau']},
      {word:'alone', meaning:'một mình', type:'adverb / adjective', example:'She works alone in the office.', viAnswers:['một mình']},
      {word:'here', meaning:'ở đây', type:'adverb', example:'The meeting is here.', viAnswers:['ở đây','đây']},
      {word:'there', meaning:'ở đó, ở kia', type:'adverb', example:'The parking lot is over there.', viAnswers:['ở đó','ở kia','đó']},
      {word:'inside', meaning:'bên trong', type:'adverb / preposition', example:'Please wait inside the building.', viAnswers:['bên trong','phía trong','ở trong']},
      {word:'outside', meaning:'bên ngoài', type:'adverb / preposition', example:'The parking is outside.', viAnswers:['bên ngoài','phía ngoài','ở ngoài']},
      {word:'nearby', meaning:'gần đây, ở gần', type:'adverb / adjective', example:'There is a restaurant nearby.', viAnswers:['gần đây','ở gần','gần']}
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
      tips: "Mẹo: 'be going to' = dự định đã lên kế hoạch. Trong TOEIC, thường gặp trong email thông báo kế hoạch hoặc lịch hẹn."
    },
    words: [
      {word:'appointment', meaning:'cuộc hẹn', type:'noun', example:'I have an appointment at 2 p.m.', viAnswers:['cuộc hẹn','lịch hẹn']},
      {word:'conference', meaning:'hội nghị', type:'noun', example:'The conference is next month.', viAnswers:['hội nghị']},
      {word:'interview', meaning:'phỏng vấn, cuộc phỏng vấn', type:'noun / verb', example:'She has a job interview tomorrow.', viAnswers:['phỏng vấn','cuộc phỏng vấn']},
      {word:'agenda', meaning:'chương trình nghị sự', type:'noun', example:'What is on the agenda today?', viAnswers:['chương trình nghị sự','lịch trình','nghị trình']},
      {word:'presentation', meaning:'bài thuyết trình', type:'noun', example:'He gave a good presentation.', viAnswers:['bài thuyết trình','thuyết trình','bài trình bày']},
      {word:'discussion', meaning:'cuộc thảo luận', type:'noun', example:'We had a long discussion.', viAnswers:['cuộc thảo luận','thảo luận','buổi thảo luận']},
      {word:'speaker', meaning:'diễn giả, người nói', type:'noun', example:'The speaker is very interesting.', viAnswers:['diễn giả','người nói','người phát biểu']},
      {word:'participant', meaning:'người tham gia', type:'noun', example:'There are 50 participants.', viAnswers:['người tham gia','thành viên tham gia']},
      {word:'topic', meaning:'chủ đề', type:'noun', example:'What is the topic of the meeting?', viAnswers:['chủ đề','đề tài']},
      {word:'reservation', meaning:'đặt chỗ, đặt phòng', type:'noun', example:'I made a reservation for the meeting room.', viAnswers:['đặt chỗ','đặt phòng','sự đặt trước']},
      {word:'invitation', meaning:'lời mời, thư mời', type:'noun', example:'I received an invitation to the event.', viAnswers:['lời mời','thư mời','giấy mời']},
      {word:'cancel', meaning:'hủy, hủy bỏ', type:'verb', example:'We need to cancel the meeting.', viAnswers:['hủy','hủy bỏ']},
      {word:'postpone', meaning:'hoãn, trì hoãn', type:'verb', example:'The meeting was postponed to next week.', viAnswers:['hoãn','trì hoãn','hoãn lại']},
      {word:'arrange', meaning:'sắp xếp, thu xếp', type:'verb', example:'She arranged the meeting for Monday.', viAnswers:['sắp xếp','thu xếp','bố trí']},
      {word:'organize', meaning:'tổ chức, sắp xếp', type:'verb', example:'We organize events every year.', viAnswers:['tổ chức','sắp xếp']},
      {word:'remind', meaning:'nhắc nhở', type:'verb', example:'Please remind me about the meeting.', viAnswers:['nhắc nhở','nhắc']},
      {word:'attend', meaning:'tham dự', type:'verb', example:'Will you attend the conference?', viAnswers:['tham dự','tham gia','dự']},
      {word:'prepare', meaning:'chuẩn bị', type:'verb', example:'She is preparing for the presentation.', viAnswers:['chuẩn bị']},
      {word:'register', meaning:'đăng ký', type:'verb', example:'Please register for the workshop online.', viAnswers:['đăng ký']},
      {word:'announce', meaning:'thông báo, công bố', type:'verb', example:'The director announced the new plan.', viAnswers:['thông báo','công bố']},
      {word:'session', meaning:'phiên, buổi', type:'noun', example:'The morning session starts at 9 a.m.', viAnswers:['phiên','buổi']},
      {word:'workshop', meaning:'hội thảo thực hành', type:'noun', example:'I joined a writing workshop.', viAnswers:['hội thảo thực hành','hội thảo','lớp thực hành']},
      {word:'seminar', meaning:'hội thảo chuyên đề', type:'noun', example:'The seminar is about marketing.', viAnswers:['hội thảo','hội thảo chuyên đề']},
      {word:'feedback', meaning:'phản hồi, góp ý', type:'noun', example:'We need your feedback on the project.', viAnswers:['phản hồi','góp ý','ý kiến phản hồi']},
      {word:'audience', meaning:'khán giả, người nghe', type:'noun', example:'The audience listened carefully.', viAnswers:['khán giả','người nghe','thính giả']}
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
      tips: "Mẹo: Modal verb + V nguyên thể. Không bao giờ thêm -s, -ed, -ing sau modal verb. ❌ She can speaks → ✅ She can speak"
    },
    words: [
      {word:'will', meaning:'sẽ', type:'modal verb', example:'I will finish the work tomorrow.', viAnswers:['sẽ']},
      {word:'may', meaning:'có thể, có lẽ', type:'modal verb', example:'It may rain this afternoon.', viAnswers:['có thể','có lẽ']},
      {word:'can', meaning:'có thể, biết', type:'modal verb', example:'She can speak three languages.', viAnswers:['có thể','biết']},
      {word:'must', meaning:'phải', type:'modal verb', example:'You must submit the report today.', viAnswers:['phải']},
      {word:'should', meaning:'nên', type:'modal verb', example:'You should study every day.', viAnswers:['nên']},
      {word:'need', meaning:'cần', type:'verb', example:'I need your help.', viAnswers:['cần']},
      {word:'want', meaning:'muốn', type:'verb', example:'I want to learn English.', viAnswers:['muốn']},
      {word:'hope', meaning:'hy vọng', type:'verb', example:'I hope to pass the exam.', viAnswers:['hy vọng','mong']},
      {word:'expect', meaning:'mong đợi, kỳ vọng', type:'verb', example:'We expect good results.', viAnswers:['mong đợi','kỳ vọng','trông đợi']},
      {word:'decide', meaning:'quyết định', type:'verb', example:'She decided to change jobs.', viAnswers:['quyết định']},
      {word:'promise', meaning:'hứa', type:'verb / noun', example:'I promise to finish on time.', viAnswers:['hứa','lời hứa']},
      {word:'offer', meaning:'đề nghị, mời', type:'verb / noun', example:'He offered to help us.', viAnswers:['đề nghị','mời','cung cấp']},
      {word:'ask', meaning:'hỏi, yêu cầu', type:'verb', example:'Can I ask a question?', viAnswers:['hỏi','yêu cầu']},
      {word:'answer', meaning:'trả lời, câu trả lời', type:'verb / noun', example:'Please answer my question.', viAnswers:['trả lời','câu trả lời','đáp']},
      {word:'help', meaning:'giúp đỡ, sự giúp đỡ', type:'verb / noun', example:'Can you help me?', viAnswers:['giúp đỡ','giúp','sự giúp đỡ']},
      {word:'support', meaning:'hỗ trợ, ủng hộ', type:'verb / noun', example:'The team supports each other.', viAnswers:['hỗ trợ','ủng hộ']},
      {word:'solve', meaning:'giải quyết', type:'verb', example:'We need to solve this problem.', viAnswers:['giải quyết']},
      {word:'continue', meaning:'tiếp tục', type:'verb', example:'Please continue with the meeting.', viAnswers:['tiếp tục']},
      {word:'stop', meaning:'dừng, ngừng', type:'verb', example:'Stop talking, please.', viAnswers:['dừng','ngừng','dừng lại']},
      {word:'try', meaning:'cố gắng, thử', type:'verb', example:'Try to finish before 5 p.m.', viAnswers:['cố gắng','thử']},
      {word:'learn', meaning:'học, học hỏi', type:'verb', example:'I want to learn new skills.', viAnswers:['học','học hỏi']},
      {word:'pass', meaning:'vượt qua, đậu', type:'verb', example:'She passed the exam.', viAnswers:['vượt qua','đậu','đỗ','qua']},
      {word:'fail', meaning:'thất bại, trượt', type:'verb', example:'He failed the driving test.', viAnswers:['thất bại','trượt','rớt']},
      {word:'graduate', meaning:'tốt nghiệp', type:'verb', example:'She graduated from university last year.', viAnswers:['tốt nghiệp']},
      {word:'achieve', meaning:'đạt được', type:'verb', example:'We achieved our goal.', viAnswers:['đạt được','đạt']}
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
      tips: "Mẹo cho TOEIC Part 1: Khi nghe mô tả ảnh, chú ý giới từ vì nó giúp xác định vị trí chính xác. Luyện tập mô tả đồ vật quanh bạn bằng giới từ."
    },
    words: [
      {word:'stand', meaning:'đứng', type:'verb', example:'A man is standing near the door.', viAnswers:['đứng']},
      {word:'sit', meaning:'ngồi', type:'verb', example:'She is sitting on a chair.', viAnswers:['ngồi']},
      {word:'hold', meaning:'cầm, giữ', type:'verb', example:'He is holding a cup of coffee.', viAnswers:['cầm','giữ','nắm']},
      {word:'carry', meaning:'mang, xách', type:'verb', example:'She is carrying a box.', viAnswers:['mang','xách','vác','bê']},
      {word:'wear', meaning:'mặc, đeo', type:'verb', example:'He is wearing a suit.', viAnswers:['mặc','đeo','mang']},
      {word:'point', meaning:'chỉ, trỏ', type:'verb', example:'She is pointing at the screen.', viAnswers:['chỉ','trỏ']},
      {word:'lean', meaning:'tựa, nghiêng', type:'verb', example:'He is leaning against the wall.', viAnswers:['tựa','nghiêng','dựa']},
      {word:'pour', meaning:'rót, đổ', type:'verb', example:'She is pouring water into a glass.', viAnswers:['rót','đổ']},
      {word:'hang', meaning:'treo', type:'verb', example:'A picture is hanging on the wall.', viAnswers:['treo']},
      {word:'stack', meaning:'xếp chồng', type:'verb', example:'The boxes are stacked in the corner.', viAnswers:['xếp chồng','chồng','chất đống']},
      {word:'load', meaning:'chất hàng, tải', type:'verb', example:'They are loading boxes onto the truck.', viAnswers:['chất hàng','tải','bốc hàng']},
      {word:'unload', meaning:'dỡ hàng', type:'verb', example:'Workers are unloading the truck.', viAnswers:['dỡ hàng','bốc dỡ']},
      {word:'display', meaning:'trưng bày', type:'verb / noun', example:'Products are displayed in the window.', viAnswers:['trưng bày','trình bày','hiển thị']},
      {word:'arrange', meaning:'sắp xếp', type:'verb', example:'She is arranging flowers on the table.', viAnswers:['sắp xếp','bố trí']},
      {word:'repair', meaning:'sửa chữa', type:'verb', example:'A man is repairing the machine.', viAnswers:['sửa chữa','sửa']},
      {word:'examine', meaning:'kiểm tra, xem xét', type:'verb', example:'The doctor is examining the patient.', viAnswers:['kiểm tra','xem xét','khám']},
      {word:'measure', meaning:'đo, đo lường', type:'verb', example:'He is measuring the length of the table.', viAnswers:['đo','đo lường']},
      {word:'cross', meaning:'băng qua', type:'verb', example:'People are crossing the street.', viAnswers:['băng qua','đi qua','qua']},
      {word:'climb', meaning:'leo, trèo', type:'verb', example:'He is climbing the stairs.', viAnswers:['leo','trèo']},
      {word:'face', meaning:'đối diện, hướng về', type:'verb', example:'She is facing the window.', viAnswers:['đối diện','hướng về','quay mặt về']},
      {word:'reach', meaning:'với tay, đạt tới', type:'verb', example:'He is reaching for a book on the shelf.', viAnswers:['với tay','đạt tới','vươn tới']},
      {word:'gather', meaning:'tụ họp, thu thập', type:'verb', example:'People are gathering in the hall.', viAnswers:['tụ họp','thu thập','tập trung']},
      {word:'sweep', meaning:'quét', type:'verb', example:'A man is sweeping the floor.', viAnswers:['quét']},
      {word:'plant', meaning:'trồng, cây', type:'verb / noun', example:'She is planting flowers in the garden.', viAnswers:['trồng','cây']},
      {word:'fold', meaning:'gấp, gập', type:'verb', example:'She is folding the towels.', viAnswers:['gấp','gập','xếp']}
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
      tips: "Mẹo cho TOEIC Part 2: Nghe kỹ từ đầu tiên của câu hỏi (Who, What, Where...) vì nó quyết định loại thông tin cần trả lời. Who → người, Where → nơi chốn, When → thời gian."
    },
    words: [
      {word:'who', meaning:'ai', type:'pronoun', example:'Who is in charge of this project?', viAnswers:['ai']},
      {word:'what', meaning:'gì, cái gì', type:'pronoun', example:'What is your job title?', viAnswers:['gì','cái gì']},
      {word:'when', meaning:'khi nào', type:'adverb', example:'When does the meeting start?', viAnswers:['khi nào','bao giờ']},
      {word:'where', meaning:'ở đâu', type:'adverb', example:'Where is the nearest bank?', viAnswers:['ở đâu','đâu']},
      {word:'why', meaning:'tại sao', type:'adverb', example:'Why are you late?', viAnswers:['tại sao','vì sao']},
      {word:'how', meaning:'như thế nào, bằng cách nào', type:'adverb', example:'How do you go to work?', viAnswers:['như thế nào','bằng cách nào','thế nào']},
      {word:'which', meaning:'cái nào, mà', type:'pronoun / adjective', example:'Which option do you prefer?', viAnswers:['cái nào','mà','nào']},
      {word:'whose', meaning:'của ai', type:'pronoun', example:'Whose bag is this?', viAnswers:['của ai']},
      {word:'whom', meaning:'ai (tân ngữ)', type:'pronoun', example:'To whom did you send the email?', viAnswers:['ai']},
      {word:'whether', meaning:'liệu, có...không', type:'conjunction', example:'I do not know whether he will come.', viAnswers:['liệu','có...không','liệu có']},
      {word:'either', meaning:'hoặc, một trong hai', type:'pronoun / adverb', example:'You can choose either option.', viAnswers:['hoặc','một trong hai','cũng']},
      {word:'neither', meaning:'không...cũng không', type:'pronoun / adverb', example:'Neither answer is correct.', viAnswers:['không...cũng không','không cái nào']},
      {word:'both', meaning:'cả hai', type:'pronoun', example:'Both options are good.', viAnswers:['cả hai']},
      {word:'each', meaning:'mỗi', type:'pronoun / adjective', example:'Each employee has an ID card.', viAnswers:['mỗi','mỗi một']},
      {word:'every', meaning:'mọi, mỗi', type:'adjective', example:'Every student must take the exam.', viAnswers:['mọi','mỗi']},
      {word:'another', meaning:'một cái khác, khác', type:'pronoun / adjective', example:'Can I have another copy?', viAnswers:['một cái khác','khác','cái khác']},
      {word:'other', meaning:'khác, cái khác', type:'adjective / pronoun', example:'The other room is bigger.', viAnswers:['khác','cái khác','khác nữa']},
      {word:'such', meaning:'như vậy, như thế', type:'adjective', example:'Such problems are common.', viAnswers:['như vậy','như thế']},
      {word:'certain', meaning:'chắc chắn, nhất định', type:'adjective', example:'I am certain about this answer.', viAnswers:['chắc chắn','nhất định']},
      {word:'several', meaning:'một vài, nhiều', type:'adjective', example:'Several employees are absent today.', viAnswers:['một vài','nhiều','vài']},
      {word:'few', meaning:'ít, vài', type:'adjective', example:'There are few chairs in the room.', viAnswers:['ít','vài','một vài']},
      {word:'many', meaning:'nhiều', type:'adjective', example:'Many people attended the meeting.', viAnswers:['nhiều']},
      {word:'much', meaning:'nhiều (không đếm được)', type:'adjective', example:'How much time do we have?', viAnswers:['nhiều']},
      {word:'most', meaning:'hầu hết, nhất', type:'adjective / adverb', example:'Most employees work from 9 to 5.', viAnswers:['hầu hết','nhất','phần lớn']},
      {word:'enough', meaning:'đủ', type:'adjective / adverb', example:'We have enough time.', viAnswers:['đủ']}
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
      {word:'health', meaning:'sức khỏe', type:'noun', example:'Good health is very important.', viAnswers:['sức khỏe']},
      {word:'body', meaning:'cơ thể, thân thể', type:'noun', example:'Exercise is good for your body.', viAnswers:['cơ thể','thân thể']},
      {word:'head', meaning:'đầu', type:'noun', example:'I have a headache. My head hurts.', viAnswers:['đầu','cái đầu']},
      {word:'hand', meaning:'bàn tay, tay', type:'noun', example:'Please wash your hands.', viAnswers:['bàn tay','tay']},
      {word:'eye', meaning:'mắt', type:'noun', example:'My eyes are tired from the screen.', viAnswers:['mắt']},
      {word:'doctor', meaning:'bác sĩ', type:'noun', example:'I went to the doctor yesterday.', viAnswers:['bác sĩ']},
      {word:'nurse', meaning:'y tá', type:'noun', example:'The nurse checks the patient.', viAnswers:['y tá']},
      {word:'medicine', meaning:'thuốc', type:'noun', example:'Take this medicine three times a day.', viAnswers:['thuốc']},
      {word:'hospital', meaning:'bệnh viện', type:'noun', example:'She works at the hospital.', viAnswers:['bệnh viện']},
      {word:'sick', meaning:'ốm, bệnh', type:'adjective', example:'He is sick today and cannot come to work.', viAnswers:['ốm','bệnh','bị bệnh','bị ốm']},
      {word:'pain', meaning:'đau, sự đau đớn', type:'noun', example:'I feel pain in my back.', viAnswers:['đau','sự đau đớn','cơn đau']},
      {word:'exercise', meaning:'tập thể dục, bài tập', type:'noun / verb', example:'I exercise every morning.', viAnswers:['tập thể dục','bài tập','luyện tập']},
      {word:'weight', meaning:'cân nặng, trọng lượng', type:'noun', example:'She wants to lose weight.', viAnswers:['cân nặng','trọng lượng']},
      {word:'heart', meaning:'tim, trái tim', type:'noun', example:'Exercise is good for the heart.', viAnswers:['tim','trái tim']},
      {word:'blood', meaning:'máu', type:'noun', example:'The doctor checked her blood pressure.', viAnswers:['máu']},
      {word:'temperature', meaning:'nhiệt độ', type:'noun', example:'The nurse takes the patient temperature.', viAnswers:['nhiệt độ']},
      {word:'diet', meaning:'chế độ ăn', type:'noun', example:'A healthy diet is important.', viAnswers:['chế độ ăn','chế độ ăn uống']},
      {word:'sleep', meaning:'ngủ, giấc ngủ', type:'verb / noun', example:'I sleep eight hours every night.', viAnswers:['ngủ','giấc ngủ']},
      {word:'rest', meaning:'nghỉ ngơi', type:'verb / noun', example:'You need to rest when you are sick.', viAnswers:['nghỉ ngơi','nghỉ']},
      {word:'recover', meaning:'hồi phục, bình phục', type:'verb', example:'She is recovering from surgery.', viAnswers:['hồi phục','bình phục','phục hồi']},
      {word:'breathe', meaning:'thở', type:'verb', example:'Breathe slowly and deeply.', viAnswers:['thở','hít thở']},
      {word:'examine', meaning:'khám, kiểm tra', type:'verb', example:'The doctor examined the patient.', viAnswers:['khám','kiểm tra','xem xét']},
      {word:'treat', meaning:'điều trị, chữa trị', type:'verb', example:'The doctor treated her illness.', viAnswers:['điều trị','chữa trị','chữa']},
      {word:'prevent', meaning:'ngăn ngừa, phòng ngừa', type:'verb', example:'Washing hands helps prevent illness.', viAnswers:['ngăn ngừa','phòng ngừa','ngăn chặn']},
      {word:'symptom', meaning:'triệu chứng', type:'noun', example:'What are your symptoms?', viAnswers:['triệu chứng']}
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
      {word:'school', meaning:'trường học', type:'noun', example:'My school is near my house.', viAnswers:['trường học','trường']},
      {word:'class', meaning:'lớp học, lớp', type:'noun', example:'English class starts at 9 a.m.', viAnswers:['lớp học','lớp']},
      {word:'course', meaning:'khóa học', type:'noun', example:'I am taking an English course.', viAnswers:['khóa học']},
      {word:'degree', meaning:'bằng cấp', type:'noun', example:'She has a degree in business.', viAnswers:['bằng cấp','bằng']},
      {word:'grade', meaning:'điểm, lớp (cấp)', type:'noun', example:'He got a good grade on the test.', viAnswers:['điểm','lớp','cấp']},
      {word:'exam', meaning:'kỳ thi, bài thi', type:'noun', example:'The final exam is next week.', viAnswers:['kỳ thi','bài thi','bài kiểm tra']},
      {word:'score', meaning:'điểm số', type:'noun / verb', example:'She scored 800 on the TOEIC test.', viAnswers:['điểm số','điểm','ghi điểm']},
      {word:'study', meaning:'học, nghiên cứu', type:'verb', example:'I study English every day.', viAnswers:['học','nghiên cứu']},
      {word:'teach', meaning:'dạy, giảng dạy', type:'verb', example:'She teaches math at the university.', viAnswers:['dạy','giảng dạy']},
      {word:'learn', meaning:'học, học hỏi', type:'verb', example:'I want to learn a new language.', viAnswers:['học','học hỏi']},
      {word:'lecture', meaning:'bài giảng', type:'noun', example:'The lecture was very interesting.', viAnswers:['bài giảng','bài thuyết trình']},
      {word:'assignment', meaning:'bài tập', type:'noun', example:'The assignment is due on Friday.', viAnswers:['bài tập','nhiệm vụ']},
      {word:'research', meaning:'nghiên cứu', type:'noun / verb', example:'She does research on climate change.', viAnswers:['nghiên cứu']},
      {word:'library', meaning:'thư viện', type:'noun', example:'I study at the library.', viAnswers:['thư viện']},
      {word:'textbook', meaning:'sách giáo khoa', type:'noun', example:'Open your textbook to page 50.', viAnswers:['sách giáo khoa']},
      {word:'knowledge', meaning:'kiến thức', type:'noun', example:'Knowledge is power.', viAnswers:['kiến thức','tri thức']},
      {word:'skill', meaning:'kỹ năng', type:'noun', example:'Communication is an important skill.', viAnswers:['kỹ năng']},
      {word:'practice', meaning:'thực hành, luyện tập', type:'noun / verb', example:'Practice makes perfect.', viAnswers:['thực hành','luyện tập']},
      {word:'certificate', meaning:'chứng chỉ, giấy chứng nhận', type:'noun', example:'She received a certificate after the course.', viAnswers:['chứng chỉ','giấy chứng nhận']},
      {word:'scholarship', meaning:'học bổng', type:'noun', example:'He won a scholarship to study abroad.', viAnswers:['học bổng']},
      {word:'enroll', meaning:'đăng ký (nhập học)', type:'verb', example:'I enrolled in a new course.', viAnswers:['đăng ký','đăng ký nhập học','ghi danh']},
      {word:'graduate', meaning:'tốt nghiệp', type:'verb', example:'She graduated from university in 2022.', viAnswers:['tốt nghiệp']},
      {word:'tutor', meaning:'gia sư', type:'noun', example:'My tutor helps me with math.', viAnswers:['gia sư']},
      {word:'lesson', meaning:'bài học', type:'noun', example:'Today lesson is about grammar.', viAnswers:['bài học']},
      {word:'curriculum', meaning:'chương trình học', type:'noun', example:'The school updated its curriculum.', viAnswers:['chương trình học','chương trình giảng dạy','giáo trình']}
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
      {word:'computer', meaning:'máy tính', type:'noun', example:'I use a computer at work.', viAnswers:['máy tính']},
      {word:'phone', meaning:'điện thoại', type:'noun', example:'My phone is on the desk.', viAnswers:['điện thoại']},
      {word:'screen', meaning:'màn hình', type:'noun', example:'The screen is too bright.', viAnswers:['màn hình']},
      {word:'keyboard', meaning:'bàn phím', type:'noun', example:'I need a new keyboard.', viAnswers:['bàn phím']},
      {word:'mouse', meaning:'chuột máy tính', type:'noun', example:'Click the mouse to open the file.', viAnswers:['chuột máy tính','chuột','con chuột']},
      {word:'internet', meaning:'mạng internet', type:'noun', example:'The internet is very fast here.', viAnswers:['mạng internet','internet']},
      {word:'website', meaning:'trang web', type:'noun', example:'Visit our website for more information.', viAnswers:['trang web','website']},
      {word:'download', meaning:'tải xuống', type:'verb / noun', example:'Please download this file.', viAnswers:['tải xuống','tải về','tải']},
      {word:'upload', meaning:'tải lên', type:'verb / noun', example:'Upload the document to the system.', viAnswers:['tải lên']},
      {word:'install', meaning:'cài đặt', type:'verb', example:'I need to install new software.', viAnswers:['cài đặt']},
      {word:'program', meaning:'chương trình', type:'noun', example:'This program helps you learn English.', viAnswers:['chương trình','phần mềm']},
      {word:'software', meaning:'phần mềm', type:'noun', example:'We use accounting software.', viAnswers:['phần mềm']},
      {word:'hardware', meaning:'phần cứng', type:'noun', example:'The hardware needs to be replaced.', viAnswers:['phần cứng']},
      {word:'device', meaning:'thiết bị', type:'noun', example:'This device connects to the internet.', viAnswers:['thiết bị']},
      {word:'digital', meaning:'kỹ thuật số, số', type:'adjective', example:'We live in a digital world.', viAnswers:['kỹ thuật số','số','điện tử']},
      {word:'online', meaning:'trực tuyến', type:'adjective / adverb', example:'I study English online.', viAnswers:['trực tuyến','online']},
      {word:'connect', meaning:'kết nối', type:'verb', example:'Please connect to the Wi-Fi.', viAnswers:['kết nối']},
      {word:'network', meaning:'mạng', type:'noun', example:'The network is down today.', viAnswers:['mạng','mạng lưới']},
      {word:'server', meaning:'máy chủ', type:'noun', example:'The server stores all the data.', viAnswers:['máy chủ']},
      {word:'database', meaning:'cơ sở dữ liệu', type:'noun', example:'All customer data is in the database.', viAnswers:['cơ sở dữ liệu']},
      {word:'update', meaning:'cập nhật', type:'verb / noun', example:'Please update the software.', viAnswers:['cập nhật']},
      {word:'backup', meaning:'sao lưu, bản sao lưu', type:'noun / verb', example:'Always backup your files.', viAnswers:['sao lưu','bản sao lưu']},
      {word:'error', meaning:'lỗi', type:'noun', example:'There is an error in the system.', viAnswers:['lỗi']},
      {word:'fix', meaning:'sửa, sửa lỗi', type:'verb', example:'The technician will fix the error.', viAnswers:['sửa','sửa lỗi','sửa chữa']},
      {word:'reboot', meaning:'khởi động lại', type:'verb', example:'Try to reboot the computer.', viAnswers:['khởi động lại','khởi động lại máy']}
    ]
  }
];
