/* ========================================================
   GRAMMAR_QUESTIONS.JS
   Bộ dữ liệu và sinh câu hỏi trắc nghiệm ngữ pháp TOEIC tự động
   Cung cấp 50 câu hỏi trắc nghiệm A/B/C/D cho mỗi ngày học ngữ pháp.
   ======================================================== */

const GrammarQuiz = {
  // Từ vựng nền để thay thế ngẫu nhiên
  VOCAB: {
    singSubjects: [
      "The manager", "The director", "The supervisor", "The coordinator", "The receptionist", 
      "The assistant", "The technician", "The representative", "The accountant", "The secretary", 
      "The executive", "The engineer", "The inspector", "The consultant", "The designer", 
      "The specialist", "The administrator", "The operator", "The analyst", "The advisor"
    ],
    plurSubjects: [
      "The managers", "The directors", "The employees", "The workers", "The coordinators", 
      "The assistants", "The representatives", "The accountants", "The engineers", "The consultants", 
      "The technicians", "The designers", "The analysts", "The specialists", "The administrators"
    ],
    singPronouns: ["He", "She", "It"],
    plurPronouns: ["We", "They", "You"],
    verbs: [
      { base: "send", singular: "sends", plural: "send", past: "sent", ing: "sending", to: "to send", object: "the email", objectPlur: "the emails" },
      { base: "check", singular: "checks", plural: "check", past: "checked", ing: "checking", to: "to check", object: "the report", objectPlur: "the reports" },
      { base: "prepare", singular: "prepares", plural: "prepare", past: "prepared", ing: "preparing", to: "to prepare", object: "the document", objectPlur: "the documents" },
      { base: "finish", singular: "finishes", plural: "finish", past: "finished", ing: "finishing", to: "to finish", object: "the task", objectPlur: "the tasks" },
      { base: "sign", singular: "signs", plural: "sign", past: "signed", ing: "signing", to: "to sign", object: "the contract", objectPlur: "the contracts" },
      { base: "review", singular: "reviews", plural: "review", past: "reviewed", ing: "reviewing", to: "to review", object: "the plan", objectPlur: "the plans" },
      { base: "update", singular: "updates", plural: "update", past: "updated", ing: "updating", to: "to update", object: "the schedule", objectPlur: "the schedules" },
      { base: "submit", singular: "submits", plural: "submit", past: "submitted", ing: "submitting", to: "to submit", object: "the proposal", objectPlur: "the proposals" },
      { base: "analyze", singular: "analyzes", plural: "analyze", past: "analyzed", ing: "analyzing", to: "to analyze", object: "the data", objectPlur: "the data" },
      { base: "inspect", singular: "inspects", plural: "inspect", past: "inspected", ing: "inspecting", to: "to inspect", object: "the facility", objectPlur: "the facilities" },
      { base: "organize", singular: "organizes", plural: "organize", past: "organized", ing: "organizing", to: "to organize", object: "the meeting", objectPlur: "the meetings" },
      { base: "discuss", singular: "discusses", plural: "discuss", past: "discussed", ing: "discussing", to: "to discuss", object: "the project", objectPlur: "the projects" },
      { base: "deliver", singular: "delivers", plural: "deliver", past: "delivered", ing: "delivering", to: "to deliver", object: "the package", objectPlur: "the packages" },
      { base: "present", singular: "presents", plural: "present", past: "presented", ing: "presenting", to: "to present", object: "the slides", objectPlur: "the slides" }
    ],
    places: [
      "in the office", "at the station", "in the building", "at the airport", "in the warehouse", 
      "in the conference room", "at the headquarters", "in the laboratory", "at the front desk", 
      "in the main hall", "at the workshop", "in the branch office"
    ],
    times: [
      "every morning", "every day", "on Mondays", "this week", "at 9 AM", 
      "every afternoon", "on weekdays", "every month", "each Friday", "regularly"
    ],
    names: ["John", "Mary", "David", "Sarah", "Alex", "Emily", "Michael", "Robert", "Jessica", "Daniel", "Laura", "James"]
  },

  // Templates của 33 ngày học lý thuyết ngữ pháp
  TEMPLATES: {
    // === DAY 1: Clause structures (S+V, S+V+O) ===
    1: [
      {
        q: "{subject} ______ {places} every day.",
        opts: ["works", "work", "working", "to work"],
        ans: 0, // singular
        ansPlur: 1, // plural
        exp: "Chủ ngữ số ít đi với động từ chia số ít 'works' (cấu trúc S+V)."
      },
      {
        q: "{subject} ______ {object} every morning.",
        opts: ["{verb_base}", "{verb_singular}", "{verb_ing}", "{verb_to}"],
        ans: 1, // singular
        ansPlur: 0, // plural
        exp: "Cấu trúc S + V + O. Chủ ngữ quyết định chia động từ dạng số ít/số nhiều phù hợp."
      },
      {
        q: "Trong câu '{subject} {verb_past} {object}', từ đóng vai trò CHỦ NGỮ (Subject) là gì?",
        opts: ["{subject}", "{verb_past}", "{object}", "Không có"],
        ans: 0,
        exp: "Chủ ngữ (Subject) là người/vật thực hiện hành động, đứng đầu câu."
      },
      {
        q: "Trong câu '{subject} {verb_past} {object}', từ đóng vai trò TÂN NGỮ (Object) là gì?",
        opts: ["{subject}", "{verb_past}", "{object}", "Không có"],
        ans: 2,
        exp: "Tân ngữ (Object) là đối tượng chịu tác động của hành động, đứng sau động từ."
      },
      {
        q: "Trong câu '{subject} {verb_past} {object}', từ đóng vai trò ĐỘNG TỪ (Verb) là gì?",
        opts: ["{subject}", "{verb_past}", "{object}", "Không có"],
        ans: 1,
        exp: "Động từ (Verb) chỉ hành động của chủ ngữ."
      },
      {
        q: "Từ nào dưới đây là NỘI ĐỘNG TỪ (Intransitive Verb - không cần tân ngữ)?",
        opts: ["arrive", "send", "prepare", "sign"],
        ans: 0,
        exp: "Arrive (đến nơi) là nội động từ, hành động tự thân không tác động lên đối tượng khác."
      },
      {
        q: "Từ nào dưới đây là NGOẠI ĐỘNG TỪ (Transitive Verb - bắt buộc có tân ngữ)?",
        opts: ["sleep", "sit", "prepare", "occur"],
        ans: 2,
        exp: "Prepare (chuẩn bị) cần có tân ngữ (chuẩn bị cái gì) đi sau mới trọn nghĩa."
      },
      {
        q: "Câu nào dưới đây có cấu trúc chỉ gồm S + V (Chủ ngữ + Động từ)?",
        opts: ["{subject} works.", "{subject} prepares {object}.", "{subject} sends {object}.", "{subject} reviews {object}."],
        ans: 0,
        exp: "Câu '{subject} works' chỉ gồm Chủ ngữ và Động từ."
      },
      {
        q: "Câu nào dưới đây có cấu trúc S + V + O (Chủ ngữ + Động từ + Tân ngữ)?",
        opts: ["{pronoun} sleeps.", "{subject} arrived.", "{subject} signed {object}.", "{pronoun} walks to work."],
        ans: 2,
        exp: "{subject} (S) + signed (V) + {object} (O)."
      }
    ],

    // === DAY 2: Present Simple ===
    2: [
      {
        q: "{subject} ______ to the office at 8 AM. (go)",
        opts: ["go", "goes", "going", "to go"],
        ans: 1, // singular
        ansPlur: 0, // plural
        exp: "Thì hiện tại đơn, động từ 'go' thêm -es thành 'goes' khi đi với chủ ngữ số ít."
      },
      {
        q: "{subject} ______ English every night. (study)",
        opts: ["study", "studies", "studying", "studied"],
        ans: 1, // singular
        ansPlur: 0, // plural
        exp: "Động từ kết thúc bằng phụ âm + y (study) đổi y thành i rồi thêm -es khi đi với chủ ngữ số ít."
      },
      {
        q: "{subject} ______ many tasks today. (have)",
        opts: ["have", "has", "having", "to have"],
        ans: 1, // singular
        ansPlur: 0, // plural
        exp: "Trường hợp đặc biệt: động từ 'have' chuyển thành 'has' khi đi với chủ ngữ số ít."
      },
      {
        q: "{subject} always ______ {object} first.",
        opts: ["{verb_base}", "{verb_singular}", "{verb_ing}", "{verb_to}"],
        ans: 1, // singular
        ansPlur: 0, // plural
        exp: "Trạng từ tần suất 'always' đứng trước động từ thường chia ở hiện tại đơn."
      },
      {
        q: "The sun ______ in the east. (rise)",
        opts: ["rise", "rises", "rising", "risen"],
        ans: 1,
        exp: "Sự thật hiển nhiên chia ở thì hiện tại đơn. Chủ ngữ số ít (The sun) đi với động từ thêm -s."
      },
      {
        q: "The train ______ at 7 AM tomorrow. (leave)",
        opts: ["leave", "leaves", "leaving", "will left"],
        ans: 1,
        exp: "Diễn tả lịch trình, giờ tàu chạy cố định chia ở thì hiện tại đơn."
      },
      {
        q: "Chọn từ chia đúng cho động từ 'watch' với chủ ngữ số ít:",
        opts: ["watch", "watchs", "watches", "watching"],
        ans: 2,
        exp: "Động từ kết thúc bằng đuôi -ch (watch) thì thêm -es thành 'watches'."
      },
      {
        q: "{subject} ______ always late for meetings.",
        opts: ["is", "are", "am", "be"],
        ans: 0, // singular
        ansPlur: 1, // plural
        exp: "Động từ to be đứng trước trạng từ chỉ tần suất 'always'."
      }
    ],

    // === DAY 3: Negative Present Simple ===
    3: [
      {
        q: "{subject} ______ work on Sundays.",
        opts: ["don't", "doesn't", "isn't", "not"],
        ans: 1, // singular
        ansPlur: 0, // plural
        exp: "Câu phủ định thì hiện tại đơn: Chủ ngữ số ít mượn trợ động từ 'doesn't', số nhiều mượn 'don't'."
      },
      {
        q: "{pronoun} doesn't ______ {object}. ({verb_base})",
        opts: ["{verb_singular}", "{verb_base}", "{verb_ing}", "{verb_past}"],
        ans: 1,
        exp: "Sau trợ động từ 'doesn't' động từ chính phải trở về dạng nguyên mẫu không chia (V-bare)."
      },
      {
        q: "{subject} ______ busy today.",
        opts: ["don't be", "doesn't be", "is not", "are not"],
        ans: 2, // singular
        ansPlur: 3, // plural
        exp: "Với động từ 'to be', ta thêm 'not' trực tiếp sau be mà không mượn do/does."
      },
      {
        q: "{subject} ______ want to change {object}.",
        opts: ["don't", "doesn't", "not", "aren't"],
        ans: 1, // singular
        ansPlur: 0, // plural
        exp: "Câu phủ định hiện tại đơn mượn do/does + not. Động từ thường 'want' đứng phía sau."
      },
      {
        q: "{subject} can ______ {verb_base} {object} today.",
        opts: ["doesn't", "don't", "not", "isn't"],
        ans: 2,
        exp: "Sau động từ khuyết thiếu như 'can', ta phủ định bằng cách thêm 'not' trực tiếp."
      }
    ],

    // === DAY 4: Question Present Simple ===
    4: [
      {
        q: "______ {subject} {verb_base} {object}?",
        opts: ["Do", "Does", "Is", "Are"],
        ans: 1, // singular
        ansPlur: 0, // plural
        exp: "Câu hỏi Yes/No hiện tại đơn: Chủ ngữ số ít mượn 'Does', chủ ngữ số nhiều mượn 'Do'."
      },
      {
        q: "Does {pronoun} ______ {object}?",
        opts: ["{verb_singular}", "{verb_base}", "{verb_ing}", "{verb_past}"],
        ans: 1,
        exp: "Trong câu hỏi đã có trợ động từ 'Does', động từ chính phải ở dạng nguyên mẫu không chia."
      },
      {
        q: "Where ______ {subject} {verb_base} {object}?",
        opts: ["do", "does", "is", "are"],
        ans: 1, // singular
        ansPlur: 0, // plural
        exp: "Câu hỏi Wh-: Wh- + do/does + S + V(nguyên mẫu). Chia theo chủ ngữ phù hợp."
      },
      {
        q: "______ {pronoun} study English daily?",
        opts: ["Do", "Does", "Are", "Is"],
        ans: 1, // singular
        ansPlur: 0, // plural
        exp: "Nhóm đại từ số nhiều (We, They, You) dùng Do; nhóm số ít (He, She, It) dùng Does."
      },
      {
        q: "Who ______ {places}? ({verb_base} - Ai làm hành động này ở đây?)",
        opts: ["do {verb_base}", "does {verb_base}", "{verb_singular}", "{verb_base}"],
        ans: 2,
        exp: "Câu hỏi cho chủ ngữ (Who làm chủ ngữ) không dùng trợ động từ do/does mà chia động từ trực tiếp số ít."
      }
    ],

    // === DAY 5: Singular & Plural Nouns ===
    5: [
      {
        q: "Choose the correct plural form of 'company':",
        opts: ["companys", "companies", "companyes", "company's"],
        ans: 1,
        exp: "Danh từ kết thúc bằng phụ âm + y (company) đổi y thành i rồi thêm -es."
      },
      {
        q: "Choose the correct plural form of 'person':",
        opts: ["persons", "people", "peoples", "persones"],
        ans: 1,
        exp: "Person là danh từ biến đổi bất quy tắc ở số nhiều thành 'people'."
      },
      {
        q: "Choose the correct plural form of 'photo':",
        opts: ["photoes", "photos", "photo", "photoyes"],
        ans: 1,
        exp: "Ngoại lệ: từ 'photo' kết thúc bằng -o nhưng chỉ thêm -s ở số nhiều."
      },
      {
        q: "The ______ are working {places}. (cảnh sát)",
        opts: ["police", "polices", "policeman", "policeman's"],
        ans: 0,
        exp: "Police (cảnh sát) là danh từ tập hợp, luôn đi với động từ số nhiều 'are'."
      },
      {
        q: "The ______ is very important. (tin tức)",
        opts: ["news", "new", "newes", "new's"],
        ans: 0,
        exp: "News (tin tức) tận cùng bằng -s nhưng là danh từ không đếm được, chia động từ số ít."
      },
      {
        q: "Many ______ are working {places}.",
        opts: ["employee", "employees", "employee's", "employees'"],
        ans: 1,
        exp: "Sau lượng từ chỉ số nhiều 'many' phải dùng danh từ số nhiều thêm -s."
      }
    ],

    // === DAY 6: Adjectives ===
    6: [
      {
        q: "I read an ______ {object} yesterday. (thú vị)",
        opts: ["interested", "interesting", "interest", "interestingly"],
        ans: 1,
        exp: "Tính từ đuôi -ing dùng để mô tả đặc điểm, tính chất của sự vật (cuốn sách/tài liệu thú vị)."
      },
      {
        q: "She is ______ in the new project. (hứng thú)",
        opts: ["interest", "interesting", "interested", "interestingly"],
        ans: 2,
        exp: "Tính từ đuôi -ed dùng để chỉ trạng thái cảm xúc của con người khi bị tác động."
      },
      {
        q: "Which word is an ADJECTIVE ending in -ly?",
        opts: ["quickly", "slowly", "friendly", "happily"],
        ans: 2,
        exp: "Friendly (thân thiện) là tính từ dù tận cùng bằng -ly (Noun + ly = Adj)."
      },
      {
        q: "The assistant is very ______. (chuyên nghiệp)",
        opts: ["profession", "professional", "professionally", "professionalize"],
        ans: 1,
        exp: "Đứng sau động từ liên kết 'be' (is/was) và trạng từ chỉ mức độ 'very' là một Tính từ."
      },
      {
        q: "He became ______ after the meeting.",
        opts: ["angry", "angrily", "anger", "to angry"],
        ans: 0,
        exp: "Become là động từ liên kết (linking verb), theo sau bởi một Tính từ."
      }
    ],

    // === DAY 8: Present Continuous ===
    8: [
      {
        q: "{subject} ______ {object} right now.",
        opts: ["is {verb_ing}", "are {verb_ing}", "am {verb_ing}", "{verb_singular}"],
        ans: 0, // singular
        ansPlur: 1, // plural
        exp: "Thì hiện tại tiếp diễn: S + am/is/are + V-ing. 'right now' là dấu hiệu nhận biết."
      },
      {
        q: "I ______ this computer. (sở hữu)",
        opts: ["am owning", "own", "owns", "owning"],
        ans: 1,
        exp: "Own (sở hữu) là động từ trạng thái (stative verb), không chia ở thì tiếp diễn."
      },
      {
        q: "Look! {subject} ______.",
        opts: ["arrives", "is arriving", "are arriving", "arrive"],
        ans: 1, // singular
        ansPlur: 2, // plural
        exp: "Dấu hiệu 'Look!' chỉ hành động đang diễn ra tại thời điểm nói. Dùng be + V-ing."
      },
      {
        q: "We ______ a new project next week. (bắt đầu - kế hoạch chắc chắn)",
        opts: ["start", "starts", "are starting", "will started"],
        ans: 2,
        exp: "Thì hiện tại tiếp diễn dùng để diễn tả kế hoạch chắc chắn xảy ra trong tương lai gần."
      }
    ],

    // === DAY 9: Past Simple ===
    9: [
      {
        q: "{subject} ______ the office yesterday. (leave)",
        opts: ["leaves", "left", "leaved", "leaving"],
        ans: 1,
        exp: "Thì quá khứ đơn, động từ bất quy tắc 'leave' đổi thành 'left'."
      },
      {
        q: "{subject} ______ {object} last week. (prepare)",
        opts: ["prepares", "prepared", "prepare", "preparing"],
        ans: 1,
        exp: "Thì quá khứ đơn của động từ có quy tắc thêm -ed: 'prepared'. 'last week' là dấu hiệu quá khứ."
      },
      {
        q: "{subject} ______ the task quickly yesterday. (finish)",
        opts: ["finished", "finisheder", "finish", "finishing"],
        ans: 0,
        exp: "Thì quá khứ đơn động từ có quy tắc thêm -ed: finished."
      },
      {
        q: "The company ______ a new policy in 2020. (introduce)",
        opts: ["introduces", "introduced", "introduce", "introducing"],
        ans: 1,
        exp: "Hành động xảy ra và kết thúc trong quá khứ có thời gian cụ thể (in 2020) dùng quá khứ đơn."
      }
    ],

    // === DAY 10: Negative/Question Past Simple ===
    10: [
      {
        q: "{subject} ______ attend the meeting yesterday.",
        opts: ["don't", "doesn't", "didn't", "wasn't"],
        ans: 2,
        exp: "Phủ định quá khứ đơn dùng trợ động từ 'didn't' chung cho tất cả các ngôi."
      },
      {
        q: "Did you ______ the contract? (sign)",
        opts: ["signed", "sign", "signing", "signs"],
        ans: 1,
        exp: "Trong câu hỏi nghi vấn quá khứ đơn đã có trợ động từ 'Did', động từ chính về nguyên mẫu."
      },
      {
        q: "{subject} ______ busy yesterday.",
        opts: ["didn't be", "was not", "were not", "not was"],
        ans: 1, // singular
        ansPlur: 2, // plural
        exp: "Động từ 'to be' chia quá khứ là was/were. Phủ định thêm 'not' trực tiếp, không dùng 'didn't'."
      },
      {
        q: "Where ______ they go last weekend?",
        opts: ["do", "does", "did", "were"],
        ans: 2,
        exp: "Cấu trúc câu hỏi Wh- quá khứ đơn: Wh- + did + S + V(nguyên mẫu)."
      }
    ],

    // === DAY 11: Adverbs ===
    11: [
      {
        q: "She speaks English very ______.",
        opts: ["good", "well", "goodly", "best"],
        ans: 1,
        exp: "Trạng từ của tính từ 'good' là 'well'. Trạng từ bổ nghĩa cho động từ 'speak'."
      },
      {
        q: "The technician works very ______.",
        opts: ["hardly", "hard", "harder", "to hard"],
        ans: 1,
        exp: "Hard vừa là tính từ và là trạng từ (chăm chỉ). Trạng từ 'hardly' có nghĩa khác là 'hầu như không'."
      },
      {
        q: "The report is ______ recommended by the manager.",
        opts: ["high", "highly", "height", "highness"],
        ans: 1,
        exp: "Highly là trạng từ chỉ mức độ mang nghĩa 'rất, cực kỳ' (highly recommended)."
      },
      {
        q: "I have ______ seen him at the office recently.",
        opts: ["late", "lately", "latest", "lateness"],
        ans: 1,
        exp: "Lately là trạng từ có nghĩa là 'gần đây', thường dùng trong thì hiện tại hoàn thành."
      },
      {
        q: "He runs ______ to catch the bus.",
        opts: ["fast", "fastly", "faster", "fastest"],
        ans: 0,
        exp: "Fast vừa là tính từ và là trạng từ (nhanh). Không có từ 'fastly'."
      }
    ],

    // === DAY 12: Future with be going to ===
    12: [
      {
        q: "{subject} ______ to visit the client tomorrow.",
        opts: ["is going", "are going", "am going", "goes"],
        ans: 0, // singular
        ansPlur: 1, // plural
        exp: "Cấu trúc tương lai gần: S + am/is/are + going + to V."
      },
      {
        q: "We ______ start the training session. (be going to)",
        opts: ["are going to", "is going to", "going to", "are go to"],
        ans: 0,
        exp: "Chủ ngữ số nhiều 'We' đi với 'are going to'."
      },
      {
        q: "Look at the dark clouds! It ______ rain. (dự đoán có căn cứ)",
        opts: ["will", "is going to", "goes to", "is raining"],
        ans: 1,
        exp: "Dự đoán có căn cứ thực tế trước mắt (mây đen) dùng tương lai gần 'be going to'."
      },
      {
        q: "I ______ to Hanoi tonight. (go - rút gọn tránh lặp động từ)",
        opts: ["am going to go", "am going", "will go to", "go to"],
        ans: 1,
        exp: "Để tránh lặp từ, ta dùng 'am/is/are going to + Địa điểm' thay vì 'going to go to'."
      }
    ],

    // === DAY 13: Modal Verbs ===
    13: [
      {
        q: "She ______ speak three languages. (có thể)",
        opts: ["cans", "can", "can to", "is can"],
        ans: 1,
        exp: "Động từ khuyết thiếu 'can' không thêm -s ở ngôi thứ 3 số ít và theo sau là động từ nguyên mẫu không to."
      },
      {
        q: "You ______ park here. It is forbidden. (cấm)",
        opts: ["must", "mustn't", "don't have to", "shouldn't"],
        ans: 1,
        exp: "Must not (mustn't) mang nghĩa cấm đoán làm việc gì."
      },
      {
        q: "We ______ do this task. It is not necessary. (không cần thiết)",
        opts: ["mustn't", "don't have to", "shouldn't", "cannot"],
        ans: 1,
        exp: "Don't have to chỉ sự không cần thiết (không bắt buộc làm)."
      },
      {
        q: "The candidate ______ submit the application form. (bắt buộc theo quy định)",
        opts: ["should", "must", "may", "ought"],
        ans: 1,
        exp: "Must dùng để chỉ sự bắt buộc phải làm theo nội quy/quy định khách quan."
      }
    ],

    // === DAY 15: Prepositions of Place ===
    15: [
      {
        q: "The files are ______ the desk. (trên bề mặt)",
        opts: ["in", "on", "at", "under"],
        ans: 1,
        exp: "Giới từ 'on' chỉ vị trí tiếp xúc trực tiếp trên bề mặt bàn."
      },
      {
        q: "She is waiting ______ the bus stop. (điểm cụ thể)",
        opts: ["in", "on", "at", "under"],
        ans: 2,
        exp: "Giới từ 'at' dùng cho một điểm cụ thể, địa chỉ chính xác."
      },
      {
        q: "They are travelling ______ a bus. (phương tiện công cộng lớn)",
        opts: ["in", "on", "at", "under"],
        ans: 1,
        exp: "Dùng 'on' cho các phương tiện công cộng lớn có thể đi lại bên trong (on a bus/train/plane)."
      },
      {
        q: "I sit ______ David and Mary. (ở giữa 2 người)",
        opts: ["among", "between", "next", "in"],
        ans: 1,
        exp: "Between dùng khi chỉ ở giữa 2 đối tượng (between A and B)."
      },
      {
        q: "The keys are ______ my pocket. (bên trong)",
        opts: ["in", "on", "at", "through"],
        ans: 0,
        exp: "Giới từ 'in' chỉ vị trí bên trong một không gian khép kín (pocket - túi quần)."
      }
    ],

    // === DAY 16: Wh- Questions ===
    16: [
      {
        q: "______ is the new director? - He is from London.",
        opts: ["Who", "Where", "When", "Why"],
        ans: 1,
        exp: "Câu trả lời chỉ nơi chốn (from London) nên dùng từ hỏi 'Where'."
      },
      {
        q: "______ many employees are there in your team?",
        opts: ["How", "What", "Who", "Which"],
        ans: 0,
        exp: "Cấu trúc hỏi số lượng đếm được: 'How many + N số nhiều'."
      },
      {
        q: "______ did they sign the contract? - Last Friday.",
        opts: ["Where", "When", "Why", "Who"],
        ans: 1,
        exp: "Câu trả lời chỉ mốc thời gian (Last Friday) nên dùng từ hỏi 'When'."
      },
      {
        q: "______ happened at the meeting yesterday?",
        opts: ["Who", "Why", "What", "How"],
        ans: 2,
        exp: "Từ hỏi 'What' đóng vai trò làm chủ ngữ trong câu hỏi về sự việc xảy ra."
      }
    ],

    // === DAY 21: Suffixes (Word forms) ===
    21: [
      {
        q: "The company will announce a new ______ tomorrow.",
        opts: ["develop", "development", "developer", "developed"],
        ans: 1, // development (thing)
        exp: "Sau mạo từ 'a' + tính từ 'new' phải là một Danh từ chỉ sự vật sự việc (development)."
      },
      {
        q: "He is a very ______ engineer.",
        opts: ["create", "creative", "creatively", "creation"],
        ans: 1,
        exp: "Đứng trước danh từ 'engineer' và sau trạng từ 'very' phải là một Tính từ (creative)."
      },
      {
        q: "We must ______ this process to save time.",
        opts: ["simple", "simplify", "simplicity", "simplification"],
        ans: 1,
        exp: "Sau động từ khuyết thiếu 'must' là động từ nguyên mẫu. Đuôi -ify (simplify) là hậu tố của động từ."
      },
      {
        q: "The board rejected the ______ for the project.",
        opts: ["proposal", "propose", "proposed", "proposally"],
        ans: 0,
        exp: "Bẫy: proposal (đuôi -al) là Danh từ mang nghĩa 'đề xuất', đứng sau mạo từ 'the'."
      },
      {
        q: "She is the ______ representative of the firm.",
        opts: ["authority", "authorized", "authorize", "authorizing"],
        ans: 1,
        exp: "Dùng tính từ phân từ bị động 'authorized' (được ủy quyền) để bổ nghĩa cho danh từ 'representative'."
      }
    ],

    // === DAY 22: Word order after articles/possessives ===
    22: [
      {
        q: "Please read the ______ report carefully.",
        opts: ["attached", "attach", "attachment", "attaching"],
        ans: 0,
        exp: "Cấu trúc: Article (the) + Adj (attached) + Noun (report)."
      },
      {
        q: "This is my ______ laptop.",
        opts: ["person", "personal", "personally", "personality"],
        ans: 1,
        exp: "Đứng sau tính từ sở hữu 'my' và trước danh từ 'laptop' phải là một Tính từ (personal)."
      },
      {
        q: "We need an ______ explanation from the manager.",
        opts: ["immediate", "immediately", "immediacy", "immediateness"],
        ans: 0,
        exp: "Cấu trúc: an + Adj + N. Tính từ ở đây là 'immediate'."
      },
      {
        q: "The supervisor approved his ______.",
        opts: ["request", "requesting", "requested", "requestedly"],
        ans: 0,
        exp: "Đứng sau tính từ sở hữu 'his' phải là một Danh từ. Ở đây 'request' làm danh từ."
      }
    ],

    // === DAY 23: Word order after very/subject ===
    23: [
      {
        q: "The manager ______ signed the contract.",
        opts: ["quick", "quickly", "quickness", "to quicken"],
        ans: 1,
        exp: "Trạng từ (quickly) có thể đứng giữa Chủ ngữ và Động từ thường để bổ nghĩa cho động từ."
      },
      {
        q: "The service at the hotel was very ______.",
        opts: ["satisfy", "satisfyingly", "satisfactory", "satisfaction"],
        ans: 2,
        exp: "Đứng sau be (was) và trạng từ mức độ 'very' phải là Tính từ (satisfactory)."
      },
      {
        q: "She ______ explained the situation to us.",
        opts: ["clear", "clearly", "clearness", "clarify"],
        ans: 1,
        exp: "Trạng từ 'clearly' đứng trước động từ thường 'explained' để bổ nghĩa."
      }
    ],

    // === DAY 24: Prepositions of Time (in, on, at) ===
    24: [
      {
        q: "The meeting will start ______ 9:30 AM.",
        opts: ["in", "on", "at", "for"],
        ans: 2,
        exp: "Giới từ 'at' dùng trước mốc giờ giấc cụ thể."
      },
      {
        q: "He was born ______ October 20th.",
        opts: ["in", "on", "at", "during"],
        ans: 1,
        exp: "Giới từ 'on' dùng trước ngày cụ thể trong tháng."
      },
      {
        q: "The project will be completed ______ 2027.",
        opts: ["in", "on", "at", "since"],
        ans: 0,
        exp: "Giới từ 'in' dùng trước năm, tháng, thế kỷ."
      },
      {
        q: "I usually read emails ______ the morning.",
        opts: ["in", "on", "at", "with"],
        ans: 0,
        exp: "Cụm từ cố định: in the morning/afternoon/evening. Nhưng chú ý: 'at night'."
      },
      {
        q: "She will visit us ______ next Monday.",
        opts: ["in", "on", "at", "Không điền giới từ"],
        ans: 3,
        exp: "Không dùng giới từ in/on/at trước các từ chỉ thời gian chứa next, last, this, every."
      }
    ],

    // === DAY 25: Prepositions (for, to, from, with) ===
    25: [
      {
        q: "We are looking forward to ______ you soon.",
        opts: ["meet", "meeting", "met", "to meet"],
        ans: 1,
        exp: "Cấu trúc bẫy: look forward to + V-ing (mong đợi làm việc gì)."
      },
      {
        q: "She has worked here ______ three years.",
        opts: ["since", "for", "during", "in"],
        ans: 1,
        exp: "Giới từ 'for' đi với khoảng thời gian (three years) trong thì hiện tại hoàn thành."
      },
      {
        q: "David is committed to ______ the company's rules.",
        opts: ["obey", "obeying", "obeyed", "obeys"],
        ans: 1,
        exp: "Cấu trúc: be committed to + V-ing (cam kết tuân thủ)."
      },
      {
        q: "He signed the letter ______ a blue pen.",
        opts: ["by", "with", "for", "to"],
        ans: 1,
        exp: "Giới từ 'with' dùng khi nói về công cụ thực hiện hành động (with a pen)."
      }
    ],

    // === DAY 26: Prepositions (before, after, during, between) ===
    26: [
      {
        q: "Please turn off the lights ______ leaving the office.",
        opts: ["during", "before", "between", "while"],
        ans: 1,
        exp: "Before + V-ing/Danh từ mang nghĩa 'trước khi làm gì'."
      },
      {
        q: "Do not talk ______ the presentations.",
        opts: ["while", "during", "between", "before"],
        ans: 1,
        exp: "During là giới từ, đi kèm Danh từ chỉ một thời kỳ/sự kiện (the presentations)."
      },
      {
        q: "He must choose ______ option A and option B.",
        opts: ["among", "between", "through", "within"],
        ans: 1,
        exp: "Cấu trúc: between A and B (giữa 2 đối tượng)."
      },
      {
        q: "I worked as an assistant ______ three months.",
        opts: ["during", "for", "since", "while"],
        ans: 1,
        exp: "For + khoảng thời gian (kéo dài bao lâu). During chỉ trả lời câu hỏi 'Khi nào xảy ra'."
      }
    ],

    // === DAY 27: Conjunctions (and, but, or, so) ===
    27: [
      {
        q: "The product is cheap, ______ it is very durable.",
        opts: ["and", "but", "or", "so"],
        ans: 1,
        exp: "But nối hai vế tương phản (rẻ nhưng bền)."
      },
      {
        q: "He was late, ______ he missed the train.",
        opts: ["and", "but", "or", "so"],
        ans: 3,
        exp: "So nối vế nguyên nhân - kết quả (trễ nên lỡ tàu)."
      },
      {
        q: "She can choose to study French ______ Spanish.",
        opts: ["and", "but", "or", "so"],
        ans: 2,
        exp: "Or nối hai sự lựa chọn thay thế (hoặc tiếng Pháp hoặc tiếng Tây Ban Nha)."
      },
      {
        q: "We need to check the design, format, ______ spelling.",
        opts: ["and", "but", "or", "so"],
        ans: 0,
        exp: "Quy tắc song hành (Parallelism): nối các danh từ cùng dạng bằng liên từ 'and'."
      }
    ],

    // === DAY 28: Conjunctions (because, although, when, if) ===
    28: [
      {
        q: "We cancelled the meeting ______ the heavy rain.",
        opts: ["because", "because of", "although", "despite"],
        ans: 1,
        exp: "Because of là giới từ, theo sau là Cụm danh từ (the heavy rain)."
      },
      {
        q: "______ it was raining heavily, we went to the office.",
        opts: ["Because", "Because of", "Although", "Despite"],
        ans: 2,
        exp: "Although là liên từ nối mệnh đề chỉ sự nhượng bộ (mặc dù... nhưng...)."
      },
      {
        q: "She succeeded ______ her hard work.",
        opts: ["because of", "because", "although", "despite"],
        ans: 0,
        exp: "Because of + Cụm danh từ chỉ nguyên nhân tích cực."
      },
      {
        q: "______ the low salary, he accepted the job offer.",
        opts: ["Although", "Even though", "Despite", "Because"],
        ans: 2,
        exp: "Despite là giới từ, theo sau là Cụm danh từ chỉ sự đối lập/nhượng bộ."
      }
    ],

    // === DAY 29: Dependent Clauses ===
    29: [
      {
        q: "I will call you as soon as I ______ HCMC.",
        opts: ["will arrive", "arrive", "arrived", "arriving"],
        ans: 1,
        exp: "Trong mệnh đề trạng ngữ chỉ thời gian (as soon as), dùng thì hiện tại đơn để diễn tả tương lai."
      },
      {
        q: "If it ______ tomorrow, the event will be postponed.",
        opts: ["rains", "will rain", "raining", "rained"],
        ans: 0,
        exp: "Mệnh đề điều kiện (If) câu điều kiện loại 1 chia ở thì hiện tại đơn ở vế If."
      },
      {
        q: "We cannot start the project unless we ______ the funding.",
        opts: ["receive", "will receive", "don't receive", "received"],
        ans: 0,
        exp: "Unless = If not (trừ khi). Mệnh đề sau unless chia ở thể khẳng định thì hiện tại đơn."
      }
    ],

    // === DAY 30: Passive Voice (Basic) ===
    30: [
      {
        q: "The report ______ by the manager yesterday.",
        opts: ["is checked", "was checked", "checked", "was checking"],
        ans: 1,
        exp: "Câu bị động thì quá khứ đơn: S + was/were + V3. 'yesterday' chỉ quá khứ."
      },
      {
        q: "Many emails ______ every morning.",
        opts: ["are sent", "is sent", "sent", "are sending"],
        ans: 0,
        exp: "Bị động hiện tại đơn, chủ ngữ số nhiều (emails) đi với 'are sent'."
      },
      {
        q: "The accident ______ at 9 AM yesterday. (happen)",
        opts: ["was happened", "happened", "is happened", "was happening"],
        ans: 1,
        exp: "Happen là nội động từ, không bao giờ được chia ở dạng bị động."
      },
      {
        q: "The contract ______ by the director last week.",
        opts: ["signed", "was signed", "is signed", "was signing"],
        ans: 1,
        exp: "Bị động quá khứ đơn chủ ngữ số ít (contract) đi với 'was signed'."
      }
    ],

    // === DAY 31: Passive Voice (Continuous & Perfect) ===
    31: [
      {
        q: "The office ______ painted at the moment.",
        opts: ["is being", "is been", "are being", "was being"],
        ans: 0,
        exp: "Bị động thì hiện tại tiếp diễn: S + am/is/are + being + V3. Dấu hiệu 'at the moment'."
      },
      {
        q: "The project ______ completed already.",
        opts: ["has been", "have been", "was being", "has being"],
        ans: 0,
        exp: "Bị động thì hiện tại hoàn thành: S + have/has + been + V3. 'already' đi với hoàn thành."
      },
      {
        q: "The documents ______ sent when I arrived. (đang được gửi lúc đó)",
        opts: ["was being", "were being", "were been", "had been"],
        ans: 1,
        exp: "Bị động quá khứ tiếp diễn, chủ ngữ số nhiều (documents) đi với 'were being'."
      }
    ],

    // === DAY 32: Passive Voice (Modals) ===
    32: [
      {
        q: "The document must ______ by tomorrow.",
        opts: ["be sign", "be signed", "signed", "is signed"],
        ans: 1,
        exp: "Bị động với động từ khuyết thiếu: S + modal + be + V3. Ở đây là 'must be signed'."
      },
      {
        q: "The contract will ______ next week.",
        opts: ["be review", "be reviewed", "been reviewed", "reviewed"],
        ans: 1,
        exp: "Bị động thì tương lai đơn với modal 'will': S + will + be + V3."
      },
      {
        q: "The problem should ______ solved immediately.",
        opts: ["be", "been", "is", "was"],
        ans: 0,
        exp: "Bị động với 'should': S + should + be + V3."
      }
    ],

    // === DAY 33: Comparatives ===
    33: [
      {
        q: "The new laptop is ______ than the old one.",
        opts: ["more fast", "faster", "fastest", "fast"],
        ans: 1,
        exp: "Fast là tính từ ngắn, so sánh hơn thêm đuôi -er thành 'faster'."
      },
      {
        q: "This project is ______ difficult than that one.",
        opts: ["more", "most", "er", "lesser"],
        ans: 0,
        exp: "Difficult là tính từ dài, so sánh hơn dùng 'more + Adj'."
      },
      {
        q: "The technician works ______ than the assistant. (chăm chỉ)",
        opts: ["more hard", "harder", "hardly", "most hard"],
        ans: 1,
        exp: "Hard là trạng từ ngắn, so sánh hơn thêm đuôi -er thành 'harder'."
      },
      {
        q: "His salary is ______ higher than mine.",
        opts: ["more", "far", "very", "so"],
        ans: 1,
        exp: "Có thể dùng trạng từ 'far' hoặc 'much' trước tính từ so sánh hơn để nhấn mạnh."
      },
      {
        q: "This task is ______ than the previous one.",
        opts: ["easyer", "easier", "more easy", "easiest"],
        ans: 1,
        exp: "Tính từ 2 âm tiết tận cùng bằng -y (easy) đổi y thành i rồi thêm -er thành 'easier'."
      }
    ],

    // === DAY 34: Superlatives ===
    34: [
      {
        q: "He is ______ employee in our company. (chăm chỉ nhất)",
        opts: ["the most hard-working", "most hard-working", "the hardest-working", "hard-workingest"],
        ans: 0,
        exp: "So sánh nhất tính từ dài: the + most + Adj."
      },
      {
        q: "This is ______ project I have ever worked on.",
        opts: ["the larger", "the largest", "largest", "most large"],
        ans: 1,
        exp: "Large là tính từ ngắn, so sánh nhất thêm đuôi -est thành 'the largest'."
      },
      {
        q: "Which option is the irregular superlative of 'good'?",
        opts: ["goodest", "better", "the best", "the most good"],
        ans: 2,
        exp: "Good biến đổi bất quy tắc thành 'the best' ở so sánh nhất."
      },
      {
        q: "She runs the ______ of all candidates. (nhanh nhất)",
        opts: ["fastest", "most fast", "faster", "the fast"],
        ans: 0,
        exp: "Fast (Adv) ở so sánh nhất thêm đuôi -est thành 'fastest'."
      }
    ],

    // === DAY 45: Word Forms (Part 5) ===
    45: [
      {
        q: "The committee will make a final ______ next Friday.",
        opts: ["decide", "decision", "decisive", "decisively"],
        ans: 1,
        exp: "Đứng sau tính từ 'final' và mạo từ 'a' phải là Danh từ. 'decision' là danh từ."
      },
      {
        q: "The new system is ______ efficient.",
        opts: ["extreme", "extremely", "extremity", "extremes"],
        ans: 1,
        exp: "Trạng từ 'extremely' đứng trước tính từ 'efficient' để bổ nghĩa cho tính từ."
      },
      {
        q: "We need an ______ representative to attend the conference.",
        opts: ["authorize", "authorizing", "authorized", "authorization"],
        ans: 2,
        exp: "Dùng tính từ phân từ bị động 'authorized' (được ủy quyền) để bổ nghĩa cho danh từ."
      }
    ],

    // === DAY 46: Verb Tenses (Part 5) ===
    46: [
      {
        q: "We ______ in Hanoi since the company was founded in 2022.",
        opts: ["have lived", "lived", "live", "are living"],
        ans: 0,
        exp: "Sự kết hợp các thì với 'since': Trước since chia hiện tại hoàn thành, sau since chia quá khứ đơn."
      },
      {
        q: "While the technician ______ the system, the power went out.",
        opts: ["inspects", "was inspecting", "inspected", "inspecting"],
        ans: 1,
        exp: "Hành động đang xảy ra trong quá khứ (chia quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
      },
      {
        q: "By next month, she ______ here for ten years.",
        opts: ["will work", "will have worked", "works", "has worked"],
        ans: 1,
        exp: "Mốc thời gian 'By + thời gian tương lai' là dấu hiệu của thì tương lai hoàn thành."
      }
    ],

    // === DAY 47: Prepositions (Part 5) ===
    47: [
      {
        q: "The manager is responsible ______ approving the budget.",
        opts: ["to", "for", "with", "in"],
        ans: 1,
        exp: "Cấu trúc cố định: be responsible for + V-ing/N (chịu trách nhiệm cho việc gì)."
      },
      {
        q: "All employees must comply ______ the safety regulations.",
        opts: ["to", "by", "with", "in"],
        ans: 2,
        exp: "Cấu trúc cố định: comply with (tuân thủ quy định)."
      },
      {
        q: "Our success depends ______ the teamwork of all members.",
        opts: ["on", "with", "to", "for"],
        ans: 0,
        exp: "Cụm động từ: depend on (phụ thuộc vào)."
      }
    ],

    // === DAY 48: Conjunctions (Part 5) ===
    48: [
      {
        q: "______ the director ______ the manager signed the contract.",
        opts: ["Either... or", "Neither... nor", "Both... and", "Not only... but also"],
        ans: 2,
        exp: "Nhìn vế sau thấy từ 'and', cặp liên từ tương hỗ đi với and là 'both... and'."
      },
      {
        q: "We will attend the meeting whether it is online ______ in person.",
        opts: ["and", "or", "nor", "but"],
        ans: 1,
        exp: "Cặp liên từ tương hỗ: whether... or... (liệu... hay là...)."
      },
      {
        q: "He neither called ______ sent an email.",
        opts: ["or", "nor", "and", "but"],
        ans: 1,
        exp: "Cặp liên từ tương hỗ: neither... nor... (không... cũng không...)."
      }
    ],

    // === DAY 49: Pronouns (Part 5) ===
    49: [
      {
        q: "The director ______ signed the official documents.",
        opts: ["him", "himself", "his", "he"],
        ans: 1,
        exp: "Đại từ phản thân 'himself' đứng sau chủ ngữ hoặc cuối câu để nhấn mạnh việc tự tay làm."
      },
      {
        q: "We completed the project on ______ own.",
        opts: ["our", "ours", "us", "ourselves"],
        ans: 0,
        exp: "Cấu trúc: on one's own (tự mình). Dùng tính từ sở hữu 'our' trước 'own'."
      },
      {
        q: "Please return the form to ______ as soon as possible.",
        opts: ["my", "me", "mine", "myself"],
        ans: 1,
        exp: "Đứng sau giới từ 'to' làm tân ngữ phải dùng đại từ nhân xưng làm tân ngữ 'me'."
      }
    ],

    // === DAY 50: Passive Voice (Part 5) ===
    50: [
      {
        q: "The main office is ______ in the center of Hanoi.",
        opts: ["locate", "located", "locating", "location"],
        ans: 1,
        exp: "Cấu trúc mang nghĩa bị động nhưng chỉ trạng thái chủ động: be located in/at (nằm ở vị trí)."
      },
      {
        q: "The employees were ______ to improve their service.",
        opts: ["instructed", "instructing", "instruct", "instruction"],
        ans: 0,
        exp: "Cấu trúc bị động: were + V3. 'Các nhân viên được hướng dẫn làm gì'."
      },
      {
        q: "He devoted ______ to the growth of the company.",
        opts: ["him", "himself", "his", "he"],
        ans: 1,
        exp: "Cấu trúc: devote oneself to sth/V-ing (cống hiến bản thân cho việc gì)."
      }
    ],

    // === DAY 51: Comparisons (Part 5) ===
    51: [
      {
        q: "The new project is as ______ as the previous one.",
        opts: ["successfully", "successful", "success", "succeed"],
        ans: 1,
        exp: "Trong cấu trúc so sánh bằng as + adj/adv + as, vì động từ chính là 'is' (to be) nên dùng tính từ 'successful'."
      },
      {
        q: "The ______ we submit the report, the better.",
        opts: ["soon", "sooner", "soonest", "more soon"],
        ans: 1,
        exp: "Cấu trúc so sánh kép (Double Comparative): The + so sánh hơn..., the + so sánh hơn..."
      },
      {
        q: "He works as ______ as his supervisor.",
        opts: ["efficiently", "efficient", "efficiency", "more efficient"],
        ans: 0,
        exp: "Vì động từ chính là động từ thường 'works' nên điền trạng từ 'efficiently' vào giữa cấu trúc so sánh bằng."
      }
    ]
  },

  // Từ điển dịch nghĩa & từ loại phục vụ học tích hợp từ vựng trong ngữ pháp
  TRANSLATIONS: {
    // Subjects
    "the manager": { vi: "người quản lý", type: "Danh từ (Noun)" },
    "the director": { vi: "giám đốc", type: "Danh từ (Noun)" },
    "the supervisor": { vi: "người giám sát", type: "Danh từ (Noun)" },
    "the coordinator": { vi: "điều phối viên", type: "Danh từ (Noun)" },
    "the receptionist": { vi: "nhân viên lễ tân", type: "Danh từ (Noun)" },
    "the assistant": { vi: "trợ lý", type: "Danh từ (Noun)" },
    "the technician": { vi: "kỹ thuật viên", type: "Danh từ (Noun)" },
    "the representative": { vi: "người đại diện", type: "Danh từ (Noun)" },
    "the accountant": { vi: "kế toán viên", type: "Danh từ (Noun)" },
    "the secretary": { vi: "thư ký", type: "Danh từ (Noun)" },
    "the executive": { vi: "nhân viên điều hành", type: "Danh từ (Noun)" },
    "the engineer": { vi: "kỹ sư", type: "Danh từ (Noun)" },
    "the inspector": { vi: "thanh tra viên", type: "Danh từ (Noun)" },
    "the consultant": { vi: "tư vấn viên", type: "Danh từ (Noun)" },
    "the designer": { vi: "nhà thiết kế", type: "Danh từ (Noun)" },
    "the specialist": { vi: "chuyên gia", type: "Danh từ (Noun)" },
    "the administrator": { vi: "quản trị viên", type: "Danh từ (Noun)" },
    "the operator": { vi: "người vận hành", type: "Danh từ (Noun)" },
    "the analyst": { vi: "nhà phân tích", type: "Danh từ (Noun)" },
    "the advisor": { vi: "cố vấn", type: "Danh từ (Noun)" },

    "the managers": { vi: "các người quản lý", type: "Danh từ số nhiều (Plural Noun)" },
    "the directors": { vi: "các giám đốc", type: "Danh từ số nhiều (Plural Noun)" },
    "the employees": { vi: "các nhân viên", type: "Danh từ số nhiều (Plural Noun)" },
    "the workers": { vi: "các công nhân", type: "Danh từ số nhiều (Plural Noun)" },
    "the coordinators": { vi: "các điều phối viên", type: "Danh từ số nhiều (Plural Noun)" },
    "the assistants": { vi: "các trợ lý", type: "Danh từ số nhiều (Plural Noun)" },
    "the representatives": { vi: "các người đại diện", type: "Danh từ số nhiều (Plural Noun)" },
    "the accountants": { vi: "các kế toán", type: "Danh từ số nhiều (Plural Noun)" },
    "the engineers": { vi: "các kỹ sư", type: "Danh từ số nhiều (Plural Noun)" },
    "the consultants": { vi: "các tư vấn viên", type: "Danh từ số nhiều (Plural Noun)" },
    "the technicians": { vi: "các kỹ thuật viên", type: "Danh từ số nhiều (Plural Noun)" },
    "the designers": { vi: "các nhà thiết kế", type: "Danh từ số nhiều (Plural Noun)" },
    "the analysts": { vi: "các nhà phân tích", type: "Danh từ số nhiều (Plural Noun)" },
    "the specialists": { vi: "các chuyên gia", type: "Danh từ số nhiều (Plural Noun)" },
    "the administrators": { vi: "các quản trị viên", type: "Danh từ số nhiều (Plural Noun)" },

    // Verbs & Objects
    "send": { vi: "gửi", type: "Động từ (Verb)" },
    "sends": { vi: "gửi", type: "Động từ (Verb)" },
    "sending": { vi: "việc gửi", type: "Danh động từ (Gerund)" },
    "sent": { vi: "đã gửi", type: "Động từ quá khứ (Past Verb)" },
    "the email": { vi: "thư điện tử", type: "Danh từ (Noun)" },
    "the emails": { vi: "các thư điện tử", type: "Danh từ số nhiều (Plural Noun)" },

    "check": { vi: "kiểm tra", type: "Động từ (Verb)" },
    "checks": { vi: "kiểm tra", type: "Động từ (Verb)" },
    "checking": { vi: "việc kiểm tra", type: "Danh động từ (Gerund)" },
    "checked": { vi: "đã kiểm tra", type: "Động từ quá khứ (Past Verb)" },
    "the report": { vi: "bản báo cáo", type: "Danh từ (Noun)" },
    "the reports": { vi: "các bản báo cáo", type: "Danh từ số nhiều (Plural Noun)" },

    "prepare": { vi: "chuẩn bị", type: "Động từ (Verb)" },
    "prepares": { vi: "chuẩn bị", type: "Động từ (Verb)" },
    "preparing": { vi: "việc chuẩn bị", type: "Danh động từ (Gerund)" },
    "prepared": { vi: "đã chuẩn bị", type: "Động từ quá khứ (Past Verb)" },
    "the document": { vi: "tài liệu", type: "Danh từ (Noun)" },
    "the documents": { vi: "các tài liệu", type: "Danh từ số nhiều (Plural Noun)" },

    "finish": { vi: "hoàn thành", type: "Động từ (Verb)" },
    "finishes": { vi: "hoàn thành", type: "Động từ (Verb)" },
    "finishing": { vi: "việc hoàn thành", type: "Danh động từ (Gerund)" },
    "finished": { vi: "đã hoàn thành", type: "Động từ quá khứ (Past Verb)" },
    "the task": { vi: "nhiệm vụ", type: "Danh từ (Noun)" },
    "the tasks": { vi: "các nhiệm vụ", type: "Danh từ số nhiều (Plural Noun)" },

    "sign": { vi: "ký", type: "Động từ (Verb)" },
    "signs": { vi: "ký", type: "Động từ (Verb)" },
    "signing": { vi: "việc ký", type: "Danh động từ (Gerund)" },
    "signed": { vi: "đã ký", type: "Động từ quá khứ (Past Verb)" },
    "the contract": { vi: "hợp đồng", type: "Danh từ (Noun)" },
    "the contracts": { vi: "các hợp đồng", type: "Danh từ số nhiều (Plural Noun)" },

    "review": { vi: "xem xét", type: "Động từ (Verb)" },
    "reviews": { vi: "xem xét", type: "Động từ (Verb)" },
    "reviewing": { vi: "việc xem xét", type: "Danh động từ (Gerund)" },
    "reviewed": { vi: "đã xem xét", type: "Động từ quá khứ (Past Verb)" },
    "the plan": { vi: "kế hoạch", type: "Danh từ (Noun)" },
    "the plans": { vi: "các kế hoạch", type: "Danh từ số nhiều (Plural Noun)" },

    "update": { vi: "cập nhật", type: "Động từ (Verb)" },
    "updates": { vi: "cập nhật", type: "Động từ (Verb)" },
    "updating": { vi: "việc cập nhật", type: "Danh động từ (Gerund)" },
    "updated": { vi: "đã cập nhật", type: "Động từ quá khứ (Past Verb)" },
    "the schedule": { vi: "lịch trình", type: "Danh từ (Noun)" },
    "the schedules": { vi: "các lịch trình", type: "Danh từ số nhiều (Plural Noun)" },

    "submit": { vi: "nộp", type: "Động từ (Verb)" },
    "submits": { vi: "nộp", type: "Động từ (Verb)" },
    "submitting": { vi: "việc nộp", type: "Danh động từ (Gerund)" },
    "submitted": { vi: "đã nộp", type: "Động từ quá khứ (Past Verb)" },
    "the proposal": { vi: "đề xuất", type: "Danh từ (Noun)" },
    "the proposals": { vi: "các đề xuất", type: "Danh từ số nhiều (Plural Noun)" },

    "analyze": { vi: "phân tích", type: "Động từ (Verb)" },
    "analyzes": { vi: "phân tích", type: "Động từ (Verb)" },
    "analyzing": { vi: "việc phân tích", type: "Danh động từ (Gerund)" },
    "analyzed": { vi: "đã phân tích", type: "Động từ quá khứ (Past Verb)" },
    "the data": { vi: "dữ liệu", type: "Danh từ (Noun)" },

    "inspect": { vi: "kiểm tra, thanh tra", type: "Động từ (Verb)" },
    "inspects": { vi: "kiểm tra", type: "Động từ (Verb)" },
    "inspecting": { vi: "việc kiểm tra", type: "Danh động từ (Gerund)" },
    "inspected": { vi: "đã kiểm tra", type: "Động từ quá khứ (Past Verb)" },
    "the facility": { vi: "cơ sở vật chất", type: "Danh từ (Noun)" },
    "the facilities": { vi: "các cơ sở vật chất", type: "Danh từ số nhiều (Plural Noun)" },

    "organize": { vi: "tổ chức", type: "Động từ (Verb)" },
    "organizes": { vi: "tổ chức", type: "Động từ (Verb)" },
    "organizing": { vi: "việc tổ chức", type: "Danh động từ (Gerund)" },
    "organized": { vi: "đã tổ chức", type: "Động từ quá khứ (Past Verb)" },
    "the meeting": { vi: "cuộc họp", type: "Danh từ (Noun)" },
    "the meetings": { vi: "các cuộc họp", type: "Danh từ số nhiều (Plural Noun)" },

    "discuss": { vi: "thảo luận", type: "Động từ (Verb)" },
    "discusses": { vi: "thảo luận", type: "Động từ (Verb)" },
    "discussing": { vi: "việc thảo luận", type: "Danh động từ (Gerund)" },
    "discussed": { vi: "đã thảo luận", type: "Động từ quá khứ (Past Verb)" },
    "the project": { vi: "dự án", type: "Danh từ (Noun)" },
    "the projects": { vi: "các dự án", type: "Danh từ số nhiều (Plural Noun)" },

    "deliver": { vi: "giao", type: "Động từ (Verb)" },
    "delivers": { vi: "giao", type: "Động từ (Verb)" },
    "delivering": { vi: "việc giao", type: "Danh động từ (Gerund)" },
    "delivered": { vi: "đã giao", type: "Động từ quá khứ (Past Verb)" },
    "the package": { vi: "gói hàng, kiện hàng", type: "Danh từ (Noun)" },
    "the packages": { vi: "các gói hàng, kiện hàng", type: "Danh từ số nhiều (Plural Noun)" },

    "present": { vi: "trình bày", type: "Động từ (Verb)" },
    "presents": { vi: "trình bày", type: "Động từ (Verb)" },
    "presenting": { vi: "việc trình bày", type: "Danh động từ (Gerund)" },
    "presented": { vi: "đã trình bày", type: "Động từ quá khứ (Past Verb)" },
    "the slides": { vi: "các trang trình chiếu", type: "Danh từ số nhiều (Plural Noun)" },

    // Places
    "in the office": { vi: "trong văn phòng", type: "Cụm giới từ" },
    "at the station": { vi: "tại nhà ga", type: "Cụm giới từ" },
    "in the building": { vi: "trong tòa nhà", type: "Cụm giới từ" },
    "at the airport": { vi: "tại sân bay", type: "Cụm giới từ" },
    "in the warehouse": { vi: "trong kho hàng", type: "Cụm giới từ" },
    "in the conference room": { vi: "trong phòng hội nghị", type: "Cụm giới từ" },
    "at the headquarters": { vi: "tại trụ sở chính", type: "Cụm giới từ" },
    "in the laboratory": { vi: "trong phòng thí nghiệm", type: "Cụm giới từ" },
    "at the front desk": { vi: "tại quầy lễ tân", type: "Cụm giới từ" },
    "in the main hall": { vi: "trong sảnh chính", type: "Cụm giới từ" },
    "at the workshop": { vi: "tại hội thảo thực hành", type: "Cụm giới từ" },
    "in the branch office": { vi: "trong văn phòng chi nhánh", type: "Cụm giới từ" },

    // Times
    "every morning": { vi: "mỗi buổi sáng", type: "Cụm trạng từ" },
    "every day": { vi: "mỗi ngày", type: "Cụm trạng từ" },
    "on mondays": { vi: "vào các ngày thứ Hai", type: "Cụm trạng từ" },
    "this week": { vi: "tuần này", type: "Cụm trạng từ" },
    "at 9 am": { vi: "lúc 9 giờ sáng", type: "Cụm trạng từ" },
    "every afternoon": { vi: "mỗi buổi chiều", type: "Cụm trạng từ" },
    "on weekdays": { vi: "vào các ngày trong tuần", type: "Cụm trạng từ" },
    "every month": { vi: "mỗi tháng", type: "Cụm trạng từ" },
    "each friday": { vi: "mỗi thứ Sáu", type: "Cụm trạng từ" },
    "regularly": { vi: "một cách thường xuyên", type: "Trạng từ (Adverb)" },

    // Common words from grammar templates
    "work": { vi: "làm việc", type: "Động từ (Verb)" },
    "works": { vi: "làm việc", type: "Động từ (Verb)" },
    "working": { vi: "việc làm việc", type: "Danh động từ (Gerund)" },
    "worked": { vi: "đã làm việc", type: "Động từ quá khứ (Past Verb)" },
    "go": { vi: "đi", type: "Động từ (Verb)" },
    "goes": { vi: "đi", type: "Động từ (Verb)" },
    "going": { vi: "việc đi", type: "Danh động từ (Gerund)" },
    "study": { vi: "học, nghiên cứu", type: "Động từ (Verb)" },
    "studies": { vi: "học, nghiên cứu", type: "Động từ (Verb)" },
    "studying": { vi: "việc học", type: "Danh động từ (Gerund)" },
    "leave": { vi: "rời đi", type: "Động từ (Verb)" },
    "left": { vi: "đã rời đi", type: "Động từ quá khứ (Past Verb)" },
    "leaving": { vi: "việc rời đi", type: "Danh động từ (Gerund)" },
    "attend": { vi: "tham dự", type: "Động từ (Verb)" },
    "attends": { vi: "tham dự", type: "Động từ (Verb)" },
    "attending": { vi: "việc tham dự", type: "Danh động từ (Gerund)" },
    "attended": { vi: "đã tham dự", type: "Động từ quá khứ (Past Verb)" },
    "announce": { vi: "thông báo", type: "Động từ (Verb)" },
    "complete": { vi: "hoàn thành", type: "Động từ (Verb)" },
    "completed": { vi: "đã hoàn thành", type: "Động từ quá khứ (Past Verb)" },
    "decide": { vi: "quyết định", type: "Động từ (Verb)" },
    "decided": { vi: "đã quyết định", type: "Động từ quá khứ (Past Verb)" },
    "recommend": { vi: "khuyến nghị", type: "Động từ (Verb)" },
    "recommended": { vi: "đã khuyến nghị", type: "Động từ quá khứ (Past Verb)" },
    "introduce": { vi: "giới thiệu", type: "Động từ (Verb)" },
    "introduced": { vi: "đã giới thiệu", type: "Động từ quá khứ (Past Verb)" },
    "purchase": { vi: "mua sắm", type: "Động từ (Verb)" },
    "approve": { vi: "phê duyệt", type: "Động từ (Verb)" },
    "approved": { vi: "đã phê duyệt", type: "Động từ quá khứ (Past Verb)" },
    "operate": { vi: "vận hành", type: "Động từ (Verb)" },
    "operating": { vi: "việc vận hành", type: "Danh động từ (Gerund)" },
    "located": { vi: "tọa lạc, nằm ở", type: "Tính từ (Adjective)" },
    "require": { vi: "yêu cầu", type: "Động từ (Verb)" },
    "required": { vi: "được yêu cầu", type: "Tính từ (Adjective)" },
    "manage": { vi: "quản lý", type: "Động từ (Verb)" },
    "managed": { vi: "đã quản lý", type: "Động từ quá khứ (Past Verb)" },
    "implement": { vi: "triển khai, thực hiện", type: "Động từ (Verb)" },
    "implemented": { vi: "đã triển khai", type: "Động từ quá khứ (Past Verb)" },

    // Common nouns from templates
    "the company": { vi: "công ty", type: "Danh từ (Noun)" },
    "the board": { vi: "ban giám đốc", type: "Danh từ (Noun)" },
    "the team": { vi: "nhóm, đội", type: "Danh từ (Noun)" },
    "the staff": { vi: "nhân viên", type: "Danh từ tập hợp (Collective Noun)" },
    "the committee": { vi: "ủy ban", type: "Danh từ (Noun)" },
    "the policy": { vi: "chính sách", type: "Danh từ (Noun)" },
    "the budget": { vi: "ngân sách", type: "Danh từ (Noun)" },
    "the deadline": { vi: "hạn chót", type: "Danh từ (Noun)" },
    "the conference": { vi: "hội nghị", type: "Danh từ (Noun)" },
    "the campaign": { vi: "chiến dịch", type: "Danh từ (Noun)" },
    "the machinery": { vi: "máy móc", type: "Danh từ (Noun)" },
    "the draft": { vi: "bản nháp", type: "Danh từ (Noun)" },
    "the resources": { vi: "nguồn lực", type: "Danh từ số nhiều (Plural Noun)" },
    "the client": { vi: "khách hàng", type: "Danh từ (Noun)" },
    "the clients": { vi: "các khách hàng", type: "Danh từ số nhiều (Plural Noun)" },
    "the supervisor": { vi: "người giám sát", type: "Danh từ (Noun)" },

    // Common adjectives & adverbs from templates
    "new": { vi: "mới", type: "Tính từ (Adjective)" },
    "quickly": { vi: "một cách nhanh chóng", type: "Trạng từ (Adverb)" },
    "immediately": { vi: "ngay lập tức", type: "Trạng từ (Adverb)" },
    "efficiently": { vi: "một cách hiệu quả", type: "Trạng từ (Adverb)" },
    "carefully": { vi: "một cách cẩn thận", type: "Trạng từ (Adverb)" },
    "always": { vi: "luôn luôn", type: "Trạng từ (Adverb)" },
    "currently": { vi: "hiện tại", type: "Trạng từ (Adverb)" },
    "entirely": { vi: "hoàn toàn", type: "Trạng từ (Adverb)" },

    // Time expressions from templates
    "yesterday": { vi: "hôm qua", type: "Trạng từ chỉ thời gian" },
    "tomorrow": { vi: "ngày mai", type: "Trạng từ chỉ thời gian" },
    "last week": { vi: "tuần trước", type: "Cụm trạng từ chỉ thời gian" },
    "last year": { vi: "năm ngoái", type: "Cụm trạng từ chỉ thời gian" },
    "next week": { vi: "tuần sau", type: "Cụm trạng từ chỉ thời gian" },
    "right now": { vi: "ngay bây giờ", type: "Cụm trạng từ chỉ thời gian" },
    "at the moment": { vi: "vào lúc này", type: "Cụm trạng từ chỉ thời gian" },
    "on sundays": { vi: "vào các ngày Chủ nhật", type: "Cụm trạng từ chỉ thời gian" },
    "on time": { vi: "đúng giờ", type: "Cụm trạng từ" },
    "on schedule": { vi: "đúng tiến độ", type: "Cụm trạng từ" },
    "as soon as possible": { vi: "càng sớm càng tốt", type: "Cụm trạng từ" }
  },

  // Hàm sinh ra 50 câu hỏi trắc nghiệm ngẫu nhiên cho một ngày học
  generate(day, count = 50) {
    const templates = this.TEMPLATES[day];
    if (!templates || templates.length === 0) return [];

    const quiz = [];
    const usedQuestions = new Set();
    let attempts = 0;

    // Nếu số lượng templates ít và số tổ hợp có thể tạo ra ít hơn count, 
    // chúng ta sẽ nới lỏng kiểm tra trùng lặp sau 600 attempts để đảm bảo luôn đủ count câu hỏi.
    while (quiz.length < count && attempts < 1500) {
      attempts++;
      // Chọn ngẫu nhiên một template của ngày đó
      const t = templates[Math.floor(Math.random() * templates.length)];
      
      // Chọn ngẫu nhiên các từ vựng để điền vào template
      const subSing = this.VOCAB.singSubjects[Math.floor(Math.random() * this.VOCAB.singSubjects.length)];
      const subPlur = this.VOCAB.plurSubjects[Math.floor(Math.random() * this.VOCAB.plurSubjects.length)];
      const proSing = this.VOCAB.singPronouns[Math.floor(Math.random() * this.VOCAB.singPronouns.length)];
      const proPlur = this.VOCAB.plurPronouns[Math.floor(Math.random() * this.VOCAB.plurPronouns.length)];
      const place = this.VOCAB.places[Math.floor(Math.random() * this.VOCAB.places.length)];
      const time = this.VOCAB.times[Math.floor(Math.random() * this.VOCAB.times.length)];
      const name = this.VOCAB.names[Math.floor(Math.random() * this.VOCAB.names.length)];
      const verb = this.VOCAB.verbs[Math.floor(Math.random() * this.VOCAB.verbs.length)];

      // Xác định chủ ngữ (ngẫu nhiên chọn số ít/số nhiều)
      const isPlural = Math.random() > 0.5;
      const subject = isPlural ? subPlur : subSing;
      const pronoun = isPlural ? proPlur : proSing;
      const object = isPlural ? verb.objectPlur : verb.object;

      // Thay thế các token trong câu hỏi
      let questionText = t.q
        .replace(/{subject}/g, subject)
        .replace(/{pronoun}/g, pronoun)
        .replace(/{place}/g, place)
        .replace(/{places}/g, place)
        .replace(/{time}/g, time)
        .replace(/{name}/g, name)
        .replace(/{object}/g, object)
        .replace(/{verb_base}/g, verb.base)
        .replace(/{verb_singular}/g, verb.singular)
        .replace(/{verb_plural}/g, verb.plural)
        .replace(/{verb_past}/g, verb.past)
        .replace(/{verb_ing}/g, verb.ing)
        .replace(/{verb_to}/g, verb.to);

      // Tránh trùng lặp câu hỏi (nới lỏng sau 800 attempts)
      if (attempts < 800 && usedQuestions.has(questionText)) continue;
      usedQuestions.add(questionText);

      // Thay thế trong giải thích cốt lõi
      let coreExplanation = t.exp
        .replace(/{subject}/g, subject)
        .replace(/{pronoun}/g, pronoun)
        .replace(/{place}/g, place)
        .replace(/{places}/g, place)
        .replace(/{time}/g, time)
        .replace(/{name}/g, name)
        .replace(/{object}/g, object)
        .replace(/{verb_base}/g, verb.base)
        .replace(/{verb_singular}/g, verb.singular)
        .replace(/{verb_plural}/g, verb.plural)
        .replace(/{verb_past}/g, verb.past)
        .replace(/{verb_ing}/g, verb.ing)
        .replace(/{verb_to}/g, verb.to);

      // Xây dựng options và xác định đáp án đúng trước khi trộn
      let originalOptions = t.opts.map(opt => 
        opt.replace(/{subject}/g, subject)
           .replace(/{pronoun}/g, pronoun)
           .replace(/{place}/g, place)
           .replace(/{places}/g, place)
           .replace(/{time}/g, time)
           .replace(/{name}/g, name)
           .replace(/{object}/g, object)
           .replace(/{verb_base}/g, verb.base)
           .replace(/{verb_singular}/g, verb.singular)
           .replace(/{verb_plural}/g, verb.plural)
           .replace(/{verb_past}/g, verb.past)
           .replace(/{verb_ing}/g, verb.ing)
           .replace(/{verb_to}/g, verb.to)
      );

      let correctOptionIdx = t.ans;
      if (isPlural && t.hasOwnProperty('ansPlur')) {
        correctOptionIdx = t.ansPlur;
      }
      const correctOptionText = originalOptions[correctOptionIdx];

      // Trộn ngẫu nhiên options A, B, C, D
      const shuffledOptions = [...originalOptions];
      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
      }
      const newAnswerIdx = shuffledOptions.indexOf(correctOptionText);

      // Sinh giải thích chi tiết cho từng phương án để tránh giải thích hời hợt
      const optionExplanations = shuffledOptions.map(opt => {
        let label = `<b>${opt}</b>`;
        if (opt === correctOptionText) {
          return `${label}: ĐÚNG. Phù hợp nhất với cấu trúc ngữ pháp và ý nghĩa của câu.`;
        }

        // 1. Phân tích lỗi chia động từ
        const hasVerbTokens = t.opts.some(o => o.includes('{verb_') || ['go', 'goes', 'going', 'to go', 'study', 'studies', 'have', 'has', 'leave', 'left', 'sign', 'signed'].includes(o));
        if (hasVerbTokens) {
          const origIdx = originalOptions.indexOf(opt);
          if (origIdx !== -1) {
            const origOpt = t.opts[origIdx];
            if (origOpt === '{verb_ing}' || opt.endsWith('ing')) {
              return `${label}: SAI. Dạng V-ing không thể đóng vai trò làm động từ chia thì chính trong câu khi đứng một mình (thiếu động từ 'to be').`;
            }
            if (origOpt === '{verb_to}' || opt.startsWith('to ')) {
              return `${label}: SAI. Động từ nguyên mẫu có 'to' (to-infinitive) chỉ dùng để chỉ mục đích, không chia thì làm động từ chính của mệnh đề.`;
            }
            if (origOpt === '{verb_singular}' || opt.endsWith('s') || opt.endsWith('es')) {
              if (['goes', 'studies', 'has', 'works', 'checks', 'prepares', 'finishes', 'signs', 'reviews', 'updates', 'submits', 'analyzes', 'inspects', 'discusses', 'delivers'].includes(opt)) {
                return `${label}: SAI. Đây là dạng động từ chia số ít (V-s/es), không hòa hợp với chủ ngữ số nhiều.`;
              }
            }
            if (origOpt === '{verb_plural}' || origOpt === '{verb_base}' || ['go', 'study', 'have', 'work', 'check', 'prepare', 'finish', 'sign', 'review', 'update', 'submit', 'analyze', 'inspect', 'discuss', 'deliver'].includes(opt)) {
              return `${label}: SAI. Đây là dạng động từ nguyên mẫu/chia số nhiều, không hòa hợp với chủ ngữ số ít.`;
            }
            if (origOpt === '{verb_past}' || ['left', 'prepared', 'finished', 'signed', 'reviewed', 'updated', 'submitted', 'analyzed', 'inspected', 'discussed', 'delivered'].includes(opt)) {
              return `${label}: SAI. Thì quá khứ đơn không thích hợp với dấu hiệu thời gian thói quen/lịch trình hiện tại của câu.`;
            }
          }
        }

        // 2. Phân tích lỗi đại từ (Pronoun)
        const pronLower = opt.toLowerCase();
        if (["he", "she", "it", "they", "we", "i", "you"].includes(pronLower)) {
          return `${label}: SAI. Đây là Đại từ nhân xưng chủ ngữ (Subject Pronoun), chỉ đứng đầu câu làm chủ ngữ chứ không thể đứng ở vị trí tân ngữ hay tính từ sở hữu.`;
        }
        if (["him", "her", "them", "us", "me"].includes(pronLower)) {
          return `${label}: SAI. Đây là Đại từ nhân xưng tân ngữ (Object Pronoun), chỉ làm tân ngữ đứng sau động từ/giới từ.`;
        }
        if (["his", "her", "their", "our", "my", "your"].includes(pronLower)) {
          return `${label}: SAI. Đây là Tính từ sở hữu (Possessive Adjective), bắt buộc phải có một danh từ đứng ngay sau để bổ nghĩa.`;
        }
        if (["himself", "herself", "themselves", "ourselves", "myself", "yourself"].includes(pronLower)) {
          return `${label}: SAI. Đại từ phản thân (Reflexive Pronoun) chỉ dùng để nhấn mạnh hoặc khi chủ ngữ và tân ngữ là cùng một đối tượng.`;
        }

        // 3. Phân tích lỗi Tính từ (Adjective) & Trạng từ (Adverb)
        if (opt.endsWith('ly')) {
          return `${label}: SAI. Đây là Trạng từ (Adverb), không thể đứng sau động từ liên kết (linking verb) hoặc bổ nghĩa trực tiếp cho danh từ.`;
        }
        if (opt.endsWith('ed')) {
          return `${label}: SAI. Tính từ đuôi -ed dùng để chỉ trạng thái cảm xúc của con người khi bị tác động, không dùng cho sự vật/việc.`;
        }
        if (opt.endsWith('ing')) {
          return `${label}: SAI. Tính từ đuôi -ing dùng để chỉ tính chất đặc điểm của vật/việc, không dùng cho cảm xúc của người.`;
        }

        return `${label}: SAI. Phương án này không đáp ứng sự hòa hợp chủ-vị hoặc cấu trúc từ loại cần thiết của câu.`;
      });

      // Tạo dịch nghĩa và từ vựng tích hợp — chỉ hiển thị từ thực sự có trong câu hỏi
      const qLower = questionText.toLowerCase();

      // Quét toàn bộ từ điển TRANSLATIONS, chỉ giữ lại từ/cụm từ thực sự xuất hiện trong câu hỏi
      const vocabItems = [];
      const matchedParts = []; // để ghép câu dịch
      const transKeys = Object.keys(this.TRANSLATIONS);
      // Sắp xếp key dài trước để khớp cụm từ dài hơn ưu tiên (ví dụ "in the office" trước "the")
      transKeys.sort((a, b) => b.length - a.length);
      const usedRanges = []; // tránh trùng lặp highlight

      for (const key of transKeys) {
        const keyLower = key.toLowerCase();
        const pos = qLower.indexOf(keyLower);
        if (pos === -1) continue;
        // Kiểm tra không bị trùng overlap với từ/cụm đã khớp
        const end = pos + keyLower.length;
        const overlaps = usedRanges.some(r => !(end <= r[0] || pos >= r[1]));
        if (overlaps) continue;
        usedRanges.push([pos, end]);

        const entry = this.TRANSLATIONS[key];
        // Lấy đúng dạng viết gốc trong câu hỏi (giữ nguyên hoa/thường)
        const originalText = questionText.substring(pos, end);
        vocabItems.push({
          pos: pos,
          html: `- <b>${originalText}</b>: ${entry.vi} (<i>${entry.type}</i>)`
        });
        matchedParts.push({ pos: pos, vi: entry.vi });
      }

      // Bổ sung thêm đáp án đúng vào danh sách từ vựng nếu chưa có
      const correctWord = correctOptionText;
      const correctLower = correctWord.toLowerCase();
      if (this.TRANSLATIONS[correctLower]) {
        const alreadyHas = vocabItems.some(v => v.html.toLowerCase().includes(`<b>${correctLower}</b>`));
        if (!alreadyHas) {
          const cEntry = this.TRANSLATIONS[correctLower];
          vocabItems.push({
            pos: 9999,
            html: `- <b>${correctWord}</b> <span style="color:var(--success)">✓ đáp án</span>: ${cEntry.vi} (<i>${cEntry.type}</i>)`
          });
        }
      }

      // Sắp xếp từ vựng theo thứ tự xuất hiện trong câu
      vocabItems.sort((a, b) => a.pos - b.pos);

      // Tự động dịch nghĩa câu hỏi dựa trên các từ đã khớp
      let helper = "";
      if (qLower.includes("will")) helper = "sẽ ";
      else if (qLower.includes("must")) helper = "phải ";
      else if (qLower.includes("should")) helper = "nên ";
      else if (qLower.includes("can")) helper = "có thể ";
      else if (qLower.includes("did ") || qLower.includes("yesterday") || qLower.includes("last week") || qLower.includes("ago")) helper = "đã ";

      // Ghép dịch nghĩa từ các phần đã khớp theo thứ tự xuất hiện
      matchedParts.sort((a, b) => a.pos - b.pos);
      let sentenceTranslation = '';
      if (matchedParts.length > 0) {
        const viParts = matchedParts.map(p => p.vi);
        // Chèn trợ động từ sau chủ ngữ (phần tử đầu tiên)
        if (viParts.length >= 2 && helper) {
          viParts.splice(1, 0, helper.trim());
        }
        sentenceTranslation = viParts.join(' ');
        sentenceTranslation = sentenceTranslation.charAt(0).toUpperCase() + sentenceTranslation.slice(1);
        if (!sentenceTranslation.endsWith('.')) sentenceTranslation += '.';
      } else {
        sentenceTranslation = coreExplanation;
      }

      // Tạo giải thích chuyên sâu (Tutor-style) với dịch nghĩa & từ vựng thực tế trong câu
      let detailedExplanation = `
        📝 <b>Dịch nghĩa câu:</b> ${sentenceTranslation}<br><br>
        💡 <b>Nguyên lý ngữ pháp:</b> ${coreExplanation}<br><br>
        ${vocabItems.length > 0 ? `📚 <b>Từ vựng trong câu:</b><br>
        ${vocabItems.map(v => v.html).join('<br>')}<br><br>` : ''}
        🔍 <b>Phân tích chi tiết các đáp án:</b><br>
        ${optionExplanations.map((expLine, idx) => `${String.fromCharCode(65 + idx)}. ${expLine}`).join('<br>')}
      `;

      quiz.push({
        question: questionText,
        options: shuffledOptions,
        answerIdx: newAnswerIdx,
        explanation: detailedExplanation
      });
    }

    // Nếu vẫn chưa đủ 50 câu (trong các trường hợp hiếm gặp), ta nhân bản tạm các câu hỏi hiện có để đạt đủ 50 câu
    while (quiz.length < count && quiz.length > 0) {
      quiz.push({ ...quiz[Math.floor(Math.random() * quiz.length)] });
    }

    return quiz.slice(0, count);
  }
};

// Xuất module cho cả môi trường trình duyệt lẫn node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GrammarQuiz };
}

// NEW TEMPLATES OVERWRITE
(function() {
  const oldTemplates = Object.assign({}, GrammarQuiz.TEMPLATES);

  // Clear or reassign templates
  GrammarQuiz.TEMPLATES[2] = oldTemplates[21]; // Suffixes
  GrammarQuiz.TEMPLATES[3] = oldTemplates[22]; // Word order after articles/possessives
  GrammarQuiz.TEMPLATES[4] = oldTemplates[23]; // Word order after very/subject
  
  // Day 5 remains the same
  GrammarQuiz.TEMPLATES[5] = oldTemplates[5];
  
  // Day 6: Combine Adjectives (6) and Adverbs (11)
  GrammarQuiz.TEMPLATES[6] = (oldTemplates[6] || []).concat(oldTemplates[11] || []);
  
  // Day 8: Combine Present Simple (2, 3, 4) and Present Continuous (8)
  GrammarQuiz.TEMPLATES[8] = (oldTemplates[2] || [])
    .concat(oldTemplates[3] || [])
    .concat(oldTemplates[4] || [])
    .concat(oldTemplates[8] || []);
    
  // Day 9: Combine Past Simple (9, 10) and add Past Continuous
  GrammarQuiz.TEMPLATES[9] = (oldTemplates[9] || [])
    .concat(oldTemplates[10] || [])
    .concat([
      {
        q: "While {subject} ______ {object}, the phone rang.",
        opts: ["was preparing", "prepared", "were preparing", "prepares"],
        ans: 0, // was preparing
        ansPlur: 2, // were preparing
        exp: "Hành động đang xảy ra (chia quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
      },
      {
        q: "At 9 PM yesterday, {subject} ______ the report.",
        opts: ["was checking", "checked", "were checking", "checks"],
        ans: 0,
        ansPlur: 2,
        exp: "Thì quá khứ tiếp diễn diễn tả hành động đang diễn ra tại một thời điểm xác định trong quá khứ (At 9 PM yesterday)."
      }
    ]);

  // Day 10: Combine Future (12) and Modals (13)
  GrammarQuiz.TEMPLATES[10] = (oldTemplates[12] || []).concat(oldTemplates[13] || []);
  
  // Day 11: Sự hòa hợp Chủ ngữ - Động từ (S-V Agreement) (NEW)
  GrammarQuiz.TEMPLATES[11] = [
    {
      q: "The performance of these new systems ______ outstanding.",
      opts: ["is", "are", "be", "being"],
      ans: 0,
      ansPlur: 0,
      exp: "Chủ ngữ chính là 'performance' (số ít), các từ nhiễu 'of these new systems' không làm thay đổi chủ ngữ."
    },
    {
      q: "The manager and his assistant ______ the report yesterday.",
      opts: ["signed", "signs", "signing", "to sign"],
      ans: 0,
      exp: "Chủ ngữ là 'The manager and his assistant' (2 người -> số nhiều). Câu diễn tả hành động trong quá khứ (yesterday) chia quá khứ đơn 'signed'."
    },
    {
      q: "The quality of the office supplies ______ very high.",
      opts: ["is", "are", "be", "being"],
      ans: 0,
      exp: "Chủ ngữ chính là danh từ 'quality' (số ít) đứng trước giới từ 'of'."
    },
    {
      q: "Each of the candidates ______ required to submit a resume.",
      opts: ["is", "are", "be", "being"],
      ans: 0,
      exp: "Each of + Danh từ số nhiều chia động từ số ít 'is'."
    },
    {
      q: "A number of employees ______ attending the meeting today.",
      opts: ["are", "is", "be", "being"],
      ans: 0,
      exp: "A number of + Danh từ số nhiều + Động từ số nhiều 'are'. (Phân biệt với 'The number of' đi với động từ số ít)."
    }
  ];
  
  // Day 12: Giới từ thời gian & nơi chốn (in, on, at...)
  GrammarQuiz.TEMPLATES[12] = (oldTemplates[15] || []).concat(oldTemplates[24] || []);
  
  // Day 13: Wh- questions
  GrammarQuiz.TEMPLATES[13] = oldTemplates[16];
  
  // Day 15: Advanced Prepositions & Collocations (25, 26)
  GrammarQuiz.TEMPLATES[15] = (oldTemplates[25] || []).concat(oldTemplates[26] || []);
  
  // Day 16: Conjunctions (27, 28)
  GrammarQuiz.TEMPLATES[16] = (oldTemplates[27] || []).concat(oldTemplates[28] || []);
  
  // Day 21: Mệnh đề quan hệ (Who, Whom, Which, That, Whose) (NEW)
  GrammarQuiz.TEMPLATES[21] = [
    {
      q: "The representative ______ signed the contract was very professional.",
      opts: ["who", "whom", "whose", "which"],
      ans: 0,
      exp: "Đại từ quan hệ 'who' thay thế cho người (representative) và làm chủ ngữ cho động từ 'signed' đứng sau."
    },
    {
      q: "The client ______ we met yesterday is very satisfied.",
      opts: ["whom", "who", "whose", "which"],
      ans: 0,
      exp: "Đại từ quan hệ 'whom' thay thế cho người và làm tân ngữ cho mệnh đề 'we met' đứng sau."
    },
    {
      q: "The document ______ is on the desk is important.",
      opts: ["which", "who", "whom", "whose"],
      ans: 0,
      exp: "Đại từ quan hệ 'which' thay thế cho vật (document) và làm chủ ngữ cho 'is'."
    },
    {
      q: "The manager ______ car is parked outside has arrived.",
      opts: ["whose", "who", "whom", "which"],
      ans: 0,
      exp: "Đại từ quan hệ sở hữu 'whose' đứng trước danh từ 'car' để chỉ chiếc xe của người quản lý."
    }
  ];
  
  // Day 22: Rút gọn Mệnh đề quan hệ (V-ing / V-ed) (NEW)
  GrammarQuiz.TEMPLATES[22] = [
    {
      q: "The employee ______ the project was promoted.",
      opts: ["leading", "led", "leads", "to lead"],
      ans: 0,
      exp: "Mệnh đề quan hệ rút gọn chủ động: who led -> leading (người đang dẫn dắt dự án)."
    },
    {
      q: "The report ______ by the supervisor was very detailed.",
      opts: ["prepared", "preparing", "prepares", "to prepare"],
      ans: 0,
      exp: "Mệnh đề quan hệ rút gọn bị động: which was prepared -> prepared (được chuẩn bị bởi...)."
    },
    {
      q: "Anyone ______ to attend the conference should register today.",
      opts: ["wishing", "wished", "wishes", "to wish"],
      ans: 0,
      exp: "Mệnh đề quan hệ rút gọn chủ động: who wishes -> wishing."
    },
    {
      q: "The machines ______ in this factory are very durable.",
      opts: ["manufactured", "manufacturing", "manufactures", "manufacture"],
      ans: 0,
      exp: "Mệnh đề quan hệ rút gọn bị động: which are manufactured -> manufactured."
    }
  ];
  
  // Day 23: Danh động từ & Động từ nguyên mẫu (Gerund & Infinitive) (NEW)
  GrammarQuiz.TEMPLATES[23] = [
    {
      q: "{subject} decided ______ the meeting.",
      opts: ["to postpone", "postponing", "postponed", "postpones"],
      ans: 0,
      exp: "Động từ 'decide' đi kèm động từ nguyên mẫu có 'to': decide + to V."
    },
    {
      q: "We recommend ______ a backup of all files.",
      opts: ["making", "to make", "made", "makes"],
      ans: 0,
      exp: "Động từ 'recommend' đi kèm Danh động từ: recommend + V-ing."
    },
    {
      q: "The manager encouraged employees ______ the seminar.",
      opts: ["to attend", "attending", "attended", "attend"],
      ans: 0,
      exp: "Cấu trúc: encourage someone + to V (khuyến khích ai làm gì)."
    },
    {
      q: "{subject} is responsible for ______ the reports.",
      opts: ["preparing", "to prepare", "prepared", "prepares"],
      ans: 0,
      exp: "Sau giới từ 'for' bắt buộc dùng Danh động từ (V-ing)."
    }
  ];
  
  // Day 24: Phân từ làm tính từ & Rút gọn mệnh đề trạng ngữ (NEW)
  GrammarQuiz.TEMPLATES[24] = [
    {
      q: "The presentation was ______ so we felt ______.",
      opts: ["boring / bored", "bored / boring", "boring / boring", "bored / bored"],
      ans: 0,
      exp: "Tính từ đuôi -ing chỉ bản chất sự vật (boring presentation), tính từ đuôi -ed chỉ cảm xúc con người (felt bored)."
    },
    {
      q: "After ______ the document, the manager signed it.",
      opts: ["reviewing", "reviewed", "reviews", "to review"],
      ans: 0,
      exp: "Rút gọn mệnh đề trạng ngữ chủ động sau liên từ: After + V-ing."
    },
    {
      q: "We need an ______ technician to repair the server.",
      opts: ["experienced", "experiencing", "experience", "experiences"],
      ans: 0,
      exp: "Dùng tính từ phân từ bị động 'experienced' (có kinh nghiệm) để bổ nghĩa cho danh từ 'technician'."
    },
    {
      q: "Before ______ the office, please turn off the lights.",
      opts: ["leaving", "left", "leaves", "to leave"],
      ans: 0,
      exp: "Rút gọn mệnh đề trạng ngữ chủ động sau liên từ: Before + V-ing."
    }
  ];
  
  // Day 25: Passive Voice - Basic (old 30)
  GrammarQuiz.TEMPLATES[25] = oldTemplates[30];
  
  // Day 26: Passive Voice - Continuous & Perfect (old 31)
  GrammarQuiz.TEMPLATES[26] = oldTemplates[31];
  
  // Day 27: Passive Voice - Modals (old 32)
  GrammarQuiz.TEMPLATES[27] = oldTemplates[32];
  
  // Day 28: So sánh hơn & So sánh bằng (old 33 + Equatives)
  GrammarQuiz.TEMPLATES[28] = (oldTemplates[33] || []).concat([
    {
      q: "The new system works as ______ as the old one.",
      opts: ["efficiently", "efficient", "efficiency", "more efficiently"],
      ans: 0,
      exp: "So sánh bằng với động từ thường 'works' dùng trạng từ: as + Adv + as."
    },
    {
      q: "The office space is as ______ as we expected.",
      opts: ["large", "largely", "larger", "largest"],
      ans: 0,
      exp: "So sánh bằng với động từ liên kết 'is' dùng tính từ: as + Adj + as."
    }
  ]);
  
  // Day 29: So sánh nhất & So sánh đặc biệt (old 34 + Double)
  GrammarQuiz.TEMPLATES[29] = (oldTemplates[34] || []).concat([
    {
      q: "The ______ we start, the ______ we will finish.",
      opts: ["earlier / sooner", "early / soon", "earliest / soonest", "more early / more soon"],
      ans: 0,
      exp: "Cấu trúc so sánh kép (Double Comparative): The + so sánh hơn..., the + so sánh hơn..."
    }
  ]);
  
  // Day 30: Câu điều kiện loại 1 & loại 2 (If Clause) (NEW)
  GrammarQuiz.TEMPLATES[30] = [
    {
      q: "If the product ______ successful, we will expand our market.",
      opts: ["is", "will be", "was", "were"],
      ans: 0,
      exp: "Câu điều kiện loại 1 (có thật ở hiện tại/tương lai): If + hiện tại đơn, tương lai đơn."
    },
    {
      q: "If they ______ more budget, they would hire more employees.",
      opts: ["had", "have", "will have", "would have"],
      ans: 0,
      exp: "Câu điều kiện loại 2 (trái thực tế hiện tại): If + quá khứ đơn, would + V-bare."
    },
    {
      q: "If I ______ the director, I would approve this proposal.",
      opts: ["were", "was", "am", "will be"],
      ans: 0,
      exp: "Trong câu điều kiện loại 2, động từ 'to be' chia là 'were' cho tất cả các ngôi."
    },
    {
      q: "Unless you ______ the contract, the deal will be canceled.",
      opts: ["sign", "don't sign", "signed", "will sign"],
      ans: 0,
      exp: "Unless = If ... not (Trừ khi/Nếu không). Theo sau 'unless' chia mệnh đề ở thể khẳng định: unless you sign."
    }
  ];
  
  // Day 31: Câu điều kiện loại 3 & Đảo ngữ câu điều kiện (NEW)
  GrammarQuiz.TEMPLATES[31] = [
    {
      q: "If we ______ the problem earlier, we would have saved a lot of money.",
      opts: ["had resolved", "resolved", "have resolved", "would resolve"],
      ans: 0,
      exp: "Câu điều kiện loại 3 (trái thực tế quá khứ): If + quá khứ hoàn thành (had + V3), would + have + V3."
    },
    {
      q: "______ you need any further assistance, please contact us.",
      opts: ["Should", "Had", "Were", "If"],
      ans: 0,
      exp: "Đảo ngữ câu điều kiện loại 1: Should + S + V-bare... (thay thế cho 'If S + V')."
    },
    {
      q: "Had we ______ the schedule, we would have attended the meeting.",
      opts: ["known", "knew", "know", "knowing"],
      ans: 0,
      exp: "Đảo ngữ câu điều kiện loại 3: Had + S + V3/ed..., S + would have + V3/ed."
    },
    {
      q: "Were they ______ the project on time, they would get a bonus.",
      opts: ["to finish", "finished", "finishing", "finish"],
      ans: 0,
      exp: "Đảo ngữ câu điều kiện loại 2: Were + S + to V..., S + would + V-bare."
    }
  ];
  
  // Day 32: Thức giả định trong TOEIC (Subjunctive Mood) (NEW)
  GrammarQuiz.TEMPLATES[32] = [
    {
      q: "The supervisor recommended that {subject} ______ the report.",
      opts: ["submit", "submits", "submitted", "submitting"],
      ans: 0,
      exp: "Thức giả định sau động từ 'recommend that': chủ ngữ vế sau đi với động từ nguyên mẫu không chia 'submit'."
    },
    {
      q: "It is essential that all employees ______ on time.",
      opts: ["be", "are", "was", "been"],
      ans: 0,
      exp: "Thức giả định sau tính từ 'essential that': chủ ngữ vế sau đi với động từ nguyên mẫu 'be'."
    },
    {
      q: "The policy requires that each candidate ______ a resume.",
      opts: ["present", "presents", "presented", "presenting"],
      ans: 0,
      exp: "Thức giả định sau động từ 'require that': động từ ở vế sau luôn ở dạng nguyên mẫu không chia 'present'."
    },
    {
      q: "The manager insisted that the schedule ______ changed.",
      opts: ["not be", "is not", "was not", "not being"],
      ans: 0,
      exp: "Thức giả định ở thể phủ định: not + V-bare (ở đây là bị động 'not be changed')."
    }
  ];
  
  // Day 33: Đại từ & Sở hữu (Subject, Object, Possessive, Reflexive) (NEW)
  GrammarQuiz.TEMPLATES[33] = [
    {
      q: "The coordinator completed the report ______.",
      opts: ["himself", "him", "his", "he"],
      ans: 0,
      exp: "Dùng đại từ phản thân 'himself' để nhấn mạnh tự tay chủ ngữ làm việc đó."
    },
    {
      q: "Please send the document to ______ as soon as possible.",
      opts: ["me", "my", "mine", "myself"],
      ans: 0,
      exp: "Đứng sau giới từ 'to' và làm tân ngữ cho hành động gửi phải là đại từ tân ngữ 'me'."
    },
    {
      q: "Their project was successful, but ______ was delayed.",
      opts: ["ours", "our", "us", "ourselves"],
      ans: 0,
      exp: "Đại từ sở hữu 'ours' (our project) đóng vai trò làm chủ ngữ cho vế sau."
    },
    {
      q: "She managed the campaign entirely on ______ own.",
      opts: ["her", "hers", "herself", "she"],
      ans: 0,
      exp: "Cấu trúc sở hữu: on one's own (tự mình). Dùng tính từ sở hữu 'her'."
    }
  ];
  
  // Day 34: Từ hạn định và Lượng từ (other, others, another, few, little) (NEW)
  GrammarQuiz.TEMPLATES[34] = [
    {
      q: "We need ______ printer in the conference room.",
      opts: ["another", "other", "others", "the others"],
      ans: 0,
      exp: "Another + Danh từ số ít đếm được: một cái khác (chưa xác định)."
    },
    {
      q: "Some candidates were hired, while ______ were rejected.",
      opts: ["others", "other", "another", "the other"],
      ans: 0,
      exp: "Others đóng vai trò đại từ làm chủ ngữ cho vế sau (others = other candidates)."
    },
    {
      q: "There are only ______ days left before the deadline.",
      opts: ["a few", "a little", "much", "any"],
      ans: 0,
      exp: "Days là danh từ đếm được số nhiều -> dùng lượng từ 'a few' (một vài)."
    },
    {
      q: "We have ______ money remaining in our budget.",
      opts: ["little", "few", "many", "several"],
      ans: 0,
      exp: "Money là danh từ không đếm được -> dùng lượng từ 'little' (ít/hầu như không)."
    }
  ];

  
  // Day 35: Mệnh đề danh từ (Noun Clause) (NEW)
  GrammarQuiz.TEMPLATES[35] = [
    {
      q: "______ she will attend the national conference remains uncertain.",
      opts: ["Whether", "That", "What", "Which"],
      ans: 0,
      exp: "Whether + S + V + V_main(sing): Liệu rằng có... hay không (đóng vai trò làm chủ ngữ)."
    },
    {
      q: "The supervisor announced ______ the project deadline had been extended.",
      opts: ["that", "what", "which", "whether"],
      ans: 0,
      exp: "S + V + that + S + V: Rằng... (mệnh đề danh từ đóng vai trò tân ngữ làm rõ việc được thông báo)."
    },
    {
      q: "We must decide ______ we will purchase the new machinery or repair the old one.",
      opts: ["whether", "that", "what", "how"],
      ans: 0,
      exp: "Whether... or...: Liệu rằng làm cái này hay cái kia (đóng vai trò tân ngữ sau động từ decide)."
    },
    {
      q: "The team is currently discussing ______ the main cause of the system failure was.",
      opts: ["what", "that", "which", "whether"],
      ans: 0,
      exp: "What + S + V: Cái gì (mệnh đề danh từ đóng vai trò tân ngữ làm rõ nội dung thảo luận)."
    }
  ];


  // Day 36: Rút gọn mệnh đề trạng ngữ (Reduced Adverbial Clause) (NEW)
  GrammarQuiz.TEMPLATES[36] = [
    {
      q: "After ______ the contract, the director submitted it to the client.",
      opts: ["signing", "signed", "to sign", "signs"],
      ans: 0,
      exp: "After + V-ing: Rút gọn chủ động của mệnh đề trạng ngữ (Sau khi tự tay ký hợp đồng...)."
    },
    {
      q: "Once ______ by the board of directors, the new policy will be implemented immediately.",
      opts: ["approved", "approving", "approve", "approves"],
      ans: 0,
      exp: "Once + V3/ed: Rút gọn bị động của mệnh đề trạng ngữ (Một khi được ban giám đốc phê duyệt...)."
    },
    {
      q: "Although ______ with limited resources, the team completed the project on schedule.",
      opts: ["operating", "operated", "operates", "to operate"],
      ans: 0,
      exp: "Although + V-ing: Rút gọn chủ động (Mặc dù hoạt động với nguồn lực hạn chế...)."
    },
    {
      q: "When ______ in the city center, the regional office is easy for clients to access.",
      opts: ["located", "locating", "locate", "locates"],
      ans: 0,
      exp: "When + V3/ed (be located): Rút gọn bị động của mệnh đề trạng ngữ chỉ vị trí."
    }
  ];


  // Day 37: Ôn tập tổng hợp ngữ pháp Phase 2 (Phần 3) (NEW)
  GrammarQuiz.TEMPLATES[37] = [
    {
      q: "The supervisor recommended that she ______ the draft before submitting it.",
      opts: ["review", "reviews", "reviewed", "reviewing"],
      ans: 0,
      exp: "Thức giả định sau động từ 'recommend that': động từ vế sau luôn ở dạng nguyên mẫu không chia."
    },
    {
      q: "Had we ______ the schedule in advance, we would have attended the seminar.",
      opts: ["known", "knowing", "know", "knew"],
      ans: 0,
      exp: "Đảo ngữ câu điều kiện loại 3: Had + S + V3/ed, S + would have + V3/ed."
    },
    {
      q: "The board decided that ______ the company will merge or remain independent is key.",
      opts: ["whether", "that", "what", "which"],
      ans: 0,
      exp: "Whether + S + V: Liệu rằng làm cái này hay cái kia (mệnh đề danh từ làm chủ ngữ vế sau)."
    },
    {
      q: "Once ______ by the laboratory, the results will be shared with the public.",
      opts: ["verified", "verifying", "verify", "verifies"],
      ans: 0,
      exp: "Once + V3/ed: Rút gọn bị động của mệnh đề trạng ngữ (Một khi được xác thực...)."
    }
  ];


  // Clean up old references from templates that we don't want to use
  for (let key in oldTemplates) {
    const k = parseInt(key);
    if (k > 37 && k < 45) {
      delete GrammarQuiz.TEMPLATES[k];
    }
  }
})();
