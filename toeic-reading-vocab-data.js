const TOEIC_READING_VOCAB = [
  {
    id: "part5",
    part: "Part 5",
    title: "Hoàn thành câu",
    focus: "Từ loại, ngữ pháp cốt lõi, từ vựng đi kèm (collocations), giới từ.",
    grammar: {
      overview: "TOEIC Reading Part 5 gồm 30 câu hỏi hoàn thành câu (A, B, C, D). Đây là phần gỡ điểm nhanh nhất nếu bạn vững ngữ pháp và từ vựng. Đề bài thường kiểm tra 2 nhóm chính: Câu hỏi ngữ pháp (chia thì, đại từ, liên từ, từ loại) và câu hỏi từ vựng (dịch nghĩa, cụm collocations).",
      structures: [
        {
          title: "Quy tắc vị trí Từ loại (Word Forms)",
          formula: "• Trạng từ bổ nghĩa: Verb + Adv | Adv + Adj | Adv + Verb\n• Tính từ đứng trước danh từ: Adj + Noun\n• Danh từ làm chủ ngữ/tân ngữ: S(Noun) + V + O(Noun)",
          example: "The company offers a highly competitive salary. (Công ty đưa ra một mức lương cạnh tranh cao - 'highly' bổ nghĩa cho 'competitive').",
          explanation: "Khi xác định được vị trí cần điền là loại từ gì, bạn chỉ cần tìm hậu tố (suffixes) tương ứng để chọn đáp án mà không cần dịch nghĩa."
        },
        {
          title: "Đại từ quan hệ (Relative Pronouns)",
          formula: "• Chỉ người: Who (làm S), Whom (làm O), Whose (sở hữu + Noun)\n• Chỉ vật: Which (làm S hoặc O)\n• Chỉ cả hai: That (thay thế Who/Whom/Which trong mệnh đề xác định)",
          example: "The employee who won the award was promoted. (Nhân viên người mà giành giải thưởng đã được thăng chức.)",
          explanation: "Luôn nhìn phía sau ô trống. Nếu là một động từ -> chọn Who/Which. Nếu là Noun -> chọn Whose. Nếu là mệnh đề S + V -> chọn Whom/Which."
        },
        {
          title: "Cấu trúc so sánh (Comparisons)",
          formula: "• So sánh bằng: as + Adj/Adv + as\n• So sánh hơn: Adj-er/Adv-er + than  HOẶC  more + Adj/Adv + than\n• So sánh nhất: the + Adj-est  HOẶC  the most + Adj/Adv",
          example: "This month's sales are higher than last month's. (Doanh số tháng này cao hơn tháng trước.)",
          explanation: "Dấu hiệu nhận biết: thấy 'than' chọn so sánh hơn, thấy 'the' đứng trước ô trống chọn so sánh nhất."
        }
      ],
      traps: [
        {
          name: "Bẫy V-ing vs V-ed (Tính từ phân từ)",
          description: "Lựa chọn giữa tính từ chỉ thái độ/cảm xúc (V-ed) và tính từ chỉ bản chất của vật (V-ing).",
          example: "The seminar was very ______ (interest). -> Chọn 'interesting' vì tả bản chất buổi hội thảo. 'Interested' chỉ người cảm thấy hứng thú.",
          tip: "V-ed dùng cho người (bị tác động cảm xúc), V-ing dùng cho vật (tạo ra cảm xúc hoặc mô tả tính chất)."
        },
        {
          name: "Bẫy Danh từ kép (Noun - Noun)",
          description: "Ngay trước danh từ thường là tính từ, nhưng đôi khi lại là danh từ ghép tạo thành danh từ kép.",
          example: "Please complete the application ______ (form). -> Chọn 'form' (Noun) tạo thành cụm 'application form' (đơn ứng tuyển) chứ không chọn tính từ.",
          tip: "Học thuộc các danh từ kép phổ biến: application form (đơn ứng tuyển), office supplies (văn phòng phẩm), safety regulations (quy định an toàn), performance evaluation (đánh giá năng lực)."
        }
      ],
      tips: [
        "Phân loại câu hỏi trước khi làm: Nhìn vào 4 đáp án. Nếu 4 từ giống gốc từ nhưng khác đuôi -> Câu hỏi từ loại (chỉ cần xét ngữ pháp, không cần dịch). Nếu 4 từ khác nhau hoàn toàn -> Câu hỏi từ vựng (phải dịch nghĩa).",
        "Quy tắc 30 giây: Không dành quá 30 giây cho một câu Part 5. Phần ngữ pháp nên hoàn thành trong 10-15 giây để dành thời gian cho Part 7.",
        "Học từ vựng theo cụm (Collocations) thay vì học từ đơn lẻ. Ví dụ: 'be responsible for', 'take care of', 'in accordance with'."
      ]
    },
    sets: [
      {
        name: "Từ loại & Hậu tố",
        words: [
          { word: "applicant", ipa: "/ˈæplɪkənt/", meaning: "người nộp đơn, ứng viên", type: "noun", example: "The applicant submitted a resume.", viAnswers: ["ứng viên", "người nộp đơn"] },
          { word: "authorize", ipa: "/ˈɔːθəraɪz/", meaning: "ủy quyền, cho phép", type: "verb", example: "The manager authorized the purchase.", viAnswers: ["ủy quyền", "cho phép"] },
          { word: "reliability", ipa: "/rɪˌlaɪəˈbɪləti/", meaning: "độ tin cậy", type: "noun", example: "We test the product for reliability.", viAnswers: ["độ tin cậy"] },
          { word: "innovative", ipa: "/ˈɪnəveɪtɪv/", meaning: "mang tính sáng tạo, đột phá", type: "adjective", example: "The company is known for its innovative designs.", viAnswers: ["sáng tạo", "đột phá"] },
          { word: "criticism", ipa: "/ˈkrɪtɪsɪzəm/", meaning: "sự phê bình, chỉ trích", type: "noun", example: "The plan received some criticism from the board.", viAnswers: ["chỉ trích", "phê bình"] },
          { word: "successfully", ipa: "/səkˈsesfəli/", meaning: "một cách thành công", type: "adverb", example: "She successfully completed the training course.", viAnswers: ["thành công", "một cách thành công"] },
          { word: "evaluation", ipa: "/html/ɪˌvæljuˈeɪʃn/", meaning: "sự đánh giá", type: "noun", example: "Annual evaluations are held in December.", viAnswers: ["đánh giá", "sự đánh giá"] },
          { word: "professionalism", ipa: "/prəˈfeʃənəlɪzəm/", meaning: "sự chuyên nghiệp", type: "noun", example: "We value professionalism in our workplace.", viAnswers: ["chuyên nghiệp", "sự chuyên nghiệp"] },
          { word: "identify", ipa: "/aɪˈdentɪfaɪ/", meaning: "nhận dạng, xác định", type: "verb", example: "Please identify the main problem.", viAnswers: ["nhận dạng", "xác định"] },
          { word: "significant", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể, quan trọng", type: "adjective", example: "There is a significant increase in sales.", viAnswers: ["đáng kể", "quan trọng"] },
          { word: "expand", ipa: "/ɪkˈspænd/", meaning: "mở rộng", type: "verb", example: "We plan to expand our business to Asia.", viAnswers: ["mở rộng"] },
          { word: "competitive", ipa: "/kəmˈpetətɪv/", meaning: "cạnh tranh", type: "adjective", example: "Our prices are very competitive.", viAnswers: ["cạnh tranh"] },
          { word: "supervise", ipa: "/ˈsuːpəvaɪz/", meaning: "giám sát", type: "verb", example: "He supervises a team of five developers.", viAnswers: ["giám sát"] },
          { word: "effectively", ipa: "/ɪˈfektɪvli/", meaning: "một cách hiệu quả", type: "adverb", example: "She manages her time effectively.", viAnswers: ["hiệu quả", "một cách hiệu quả"] },
          { word: "requirement", ipa: "/rɪˈkwaɪəmənt/", meaning: "yêu cầu, điều kiện bắt buộc", type: "noun", example: "Meeting the deadline is a key requirement.", viAnswers: ["yêu cầu"] }
        ]
      },
      {
        name: "Từ hạn định & Đại từ",
        words: [
          { word: "each", ipa: "/iːtʃ/", meaning: "mỗi (đi với danh từ số ít)", type: "determiner", example: "Each employee will receive a badge.", viAnswers: ["mỗi"] },
          { word: "another", ipa: "/əˈnʌðər/", meaning: "một cái khác (chưa xác định, số ít)", type: "determiner / pronoun", example: "We need another printer in this room.", viAnswers: ["một cái khác"] },
          { word: "other", ipa: "/ˈʌðər/", meaning: "khác (đi với danh từ số nhiều/không đếm được)", type: "determiner", example: "Other departments are busy today.", viAnswers: ["khác"] },
          { word: "others", ipa: "/ˈʌðəz/", meaning: "những cái/người khác (đóng vai trò danh từ)", type: "pronoun", example: "Some work in the office, others work from home.", viAnswers: ["những cái khác", "những người khác"] },
          { word: "herself", ipa: "/hɜːˈself/", meaning: "chính cô ấy (đại từ phản thân)", type: "pronoun", example: "She wrote the report herself.", viAnswers: ["chính cô ấy"] },
          { word: "ourselves", ipa: "/ˌaʊəˈselvz/", meaning: "chính chúng tôi (đại từ phản thân)", type: "pronoun", example: "We can finish this project ourselves.", viAnswers: ["chính chúng tôi"] },
          { word: "whose", ipa: "/huːz/", meaning: "của ai (đại từ quan hệ sở hữu)", type: "pronoun", example: "The employee whose car is parked outside is Taylor.", viAnswers: ["của ai", "mà của người đó"] },
          { word: "any", ipa: "/ˈeni/", meaning: "bất kỳ", type: "determiner", example: "Are there any questions about the policy?", viAnswers: ["bất kỳ"] },
          { word: "several", ipa: "/ˈsevrəl/", meaning: "một vài (đi với danh từ đếm được số nhiều)", type: "determiner", example: "Several managers attended the seminar.", viAnswers: ["một vài"] },
          { word: "someone", ipa: "/ˈsʌmwʌn/", meaning: "ai đó", type: "pronoun", example: "Someone left a notebook in the conference room.", viAnswers: ["ai đó"] },
          { word: "anyone", ipa: "/ˈeniwʌn/", meaning: "bất kỳ ai", type: "pronoun", example: "Anyone interested should sign up online.", viAnswers: ["bất kỳ ai"] },
          { word: "no one", ipa: "/noʊ wʌn/", meaning: "không ai", type: "pronoun", example: "No one has submitted the form yet.", viAnswers: ["không ai"] },
          { word: "neither", ipa: "/ˈnaɪðər/", meaning: "không ai/cái nào trong cả hai", type: "determiner / pronoun", example: "Neither candidate was hired.", viAnswers: ["không cái nào"] },
          { word: "either", ipa: "/ˈaɪðər/", meaning: "một trong hai", type: "determiner / pronoun", example: "Either day is fine for the meeting.", viAnswers: ["một trong hai"] },
          { word: "few", ipa: "/fjuː/", meaning: "rất ít (mang nghĩa tiêu cực)", type: "determiner / adjective", example: "Few people attended the presentation.", viAnswers: ["ít", "rất ít"] }
        ]
      },
      {
        name: "Cụm động từ & Giới từ",
        words: [
          { word: "comply with", ipa: "/kəmˈplaɪ wɪð/", meaning: "tuân thủ theo", type: "phrase", example: "We must comply with the new safety regulations.", viAnswers: ["tuân thủ", "tuân theo"] },
          { word: "rely on", ipa: "/rɪˈlaɪ ɒn/", meaning: "tin cậy vào, phụ thuộc vào", type: "phrase", example: "You can rely on our team for support.", viAnswers: ["phụ thuộc", "tin cậy"] },
          { word: "deal with", ipa: "/diːl wɪð/", meaning: "giải quyết, đối phó", type: "phrase", example: "He deals with customer complaints daily.", viAnswers: ["giải quyết", "đối phó"] },
          { word: "approve of", ipa: "/əˈpruːv ɒv/", meaning: "tán thành, phê duyệt", type: "phrase", example: "The board approved of the design.", viAnswers: ["phê duyệt", "tán thành"] },
          { word: "apply for", ipa: "/əˈplaɪ fɔːr/", meaning: "nộp đơn xin việc/ứng tuyển", type: "phrase", example: "She applied for the assistant position.", viAnswers: ["ứng tuyển", "nộp đơn"] },
          { word: "succeed in", ipa: "/səkˈsiːd ɪn/", meaning: "thành công trong việc gì", type: "phrase", example: "He succeeded in solving the issue.", viAnswers: ["thành công"] },
          { word: "depend on", ipa: "/dɪˈpend ɒn/", meaning: "phụ thuộc vào", type: "phrase", example: "Our success depends on team work.", viAnswers: ["phụ thuộc vào"] },
          { word: "consist of", ipa: "/kənˈsɪst ɒv/", meaning: "bao gồm có", type: "phrase", example: "The package consists of three items.", viAnswers: ["bao gồm"] },
          { word: "participate in", ipa: "/pɑːˈtɪsɪpeɪt ɪn/", meaning: "tham gia vào", type: "phrase", example: "Everyone must participate in the discussion.", viAnswers: ["tham gia"] },
          { word: "focus on", ipa: "/ˈfoʊkəs ɒn/", meaning: "tập trung vào", type: "phrase", example: "We need to focus on marketing next month.", viAnswers: ["tập trung"] },
          { word: "account for", ipa: "/əˈkaʊnt fɔːr/", meaning: "giải thích, chiếm tỷ lệ", type: "phrase", example: "Marketing accounts for half of the budget.", viAnswers: ["giải thích", "chiếm"] },
          { word: "lead to", ipa: "/liːd tuː/", meaning: "dẫn tới", type: "phrase", example: "Hard work will lead to success.", viAnswers: ["dẫn tới"] },
          { word: "result in", ipa: "/rɪˈzʌlt ɪn/", meaning: "dẫn đến kết quả", type: "phrase", example: "The strategy resulted in higher sales.", viAnswers: ["dẫn đến"] },
          { word: "refer to", ipa: "/rɪˈfɜːr tuː/", meaning: "tham khảo, đề cập tới", type: "phrase", example: "Please refer to the manual for instructions.", viAnswers: ["tham khảo", "đề cập"] },
          { word: "postpone until", ipa: "/poʊˈspoʊn ʌnˈtɪl/", meaning: "hoãn lại cho tới khi", type: "phrase", example: "The meeting is postponed until Monday.", viAnswers: ["hoãn"] }
        ]
      },
      {
        name: "Liên từ & Giới từ chỉ thời gian/nơi chốn",
        words: [
          { word: "although", ipa: "/ɔːlˈðoʊ/", meaning: "mặc dù", type: "conjunction", example: "Although the budget is small, we will proceed.", viAnswers: ["mặc dù"] },
          { word: "despite", ipa: "/dɪˈspaɪt/", meaning: "mặc dù (đi kèm với cụm danh từ/V-ing)", type: "preposition", example: "We finished on time despite the difficulties.", viAnswers: ["mặc dù"] },
          { word: "unless", ipa: "/ʌnˈles/", meaning: "trừ khi, nếu không", type: "conjunction", example: "Do not submit the report unless it is checked.", viAnswers: ["trừ khi"] },
          { word: "during", ipa: "/ˈdjʊərɪŋ/", meaning: "trong suốt thời gian", type: "preposition", example: "No phone calls are allowed during the test.", viAnswers: ["trong suốt"] },
          { word: "within", ipa: "/wɪˈðɪn/", meaning: "trong vòng (phạm vi thời gian/không gian)", type: "preposition", example: "Please reply within three working days.", viAnswers: ["trong vòng"] },
          { word: "throughout", ipa: "/θruːˈaʊt/", meaning: "xuyên suốt, khắp nơi", type: "preposition / adverb", example: "There are sales offices throughout the country.", viAnswers: ["xuyên suốt", "khắp"] },
          { word: "upon", ipa: "/əˈpɒn/", meaning: "ngay khi, trên", type: "preposition", example: "Upon arriving, please sign in at the desk.", viAnswers: ["ngay khi", "khi"] },
          { word: "provided that", ipa: "/prəˈvaɪdɪd ðæt/", meaning: "miễn là, với điều kiện là", type: "conjunction", example: "You can attend provided that you register.", viAnswers: ["miễn là", "với điều kiện là"] },
          { word: "in case", ipa: "/ɪn keɪs/", meaning: "phòng khi, phòng hờ", type: "phrase", example: "Bring an umbrella in case it rains.", viAnswers: ["phòng khi", "trong trường hợp"] },
          { word: "as long as", ipa: "/æz lɒŋ æz/", meaning: "miễn là, chừng nào mà", type: "phrase", example: "You can stay as long as you want.", viAnswers: ["miễn là"] },
          { word: "concerning", ipa: "/kənˈsɜːnɪŋ/", meaning: "về việc, liên quan đến", type: "preposition", example: "Please call us concerning your application.", viAnswers: ["liên quan đến", "về việc"] },
          { word: "prior to", ipa: "/ˈpraɪər tuː/", meaning: "trước khi, trước thời điểm", type: "phrase", example: "Prior to joining, he was a manager.", viAnswers: ["trước", "trước khi"] },
          { word: "in addition to", ipa: "/ɪn əˈdɪʃn tuː/", meaning: "thêm vào đó, ngoài ra", type: "phrase", example: "In addition to tax, you must pay delivery fees.", viAnswers: ["thêm vào đó", "ngoài ra"] },
          { word: "instead of", ipa: "/ɪnˈsted ɒv/", meaning: "thay vì", type: "phrase", example: "Choose tea instead of coffee.", viAnswers: ["thay vì"] },
          { word: "on behalf of", ipa: "/ɒn bɪˈhɑːf ɒv/", meaning: "thay mặt cho, đại diện cho", type: "phrase", example: "I am writing on behalf of our company.", viAnswers: ["thay mặt", "đại diện"] }
        ]
      }
    ]
  },
  {
    id: "part6",
    part: "Part 6",
    title: "Hoàn thành đoạn văn",
    focus: "Mạch văn cảnh, từ nối (Transitions), sự hòa hợp thì, đại từ liên kết.",
    grammar: {
      overview: "TOEIC Reading Part 6 gồm 16 câu hỏi nằm trong 4 đoạn văn (mỗi đoạn 4 câu hỏi). Các đoạn văn thường là email, thông cáo, bài báo ngắn hoặc thư báo. Điểm khác biệt lớn nhất với Part 5 là bạn cần hiểu ngữ cảnh của toàn đoạn văn để điền từ đúng (đặc biệt là câu điền cả câu văn hoặc chọn trạng từ liên kết).",
      structures: [
        {
          title: "Trạng từ liên kết ý (Transition Adverbs)",
          formula: "• Kết quả: Therefore (Do đó), Consequently (Hệ quả là)\n• Đối lập: However (Tuy nhiên), Nevertheless (Dù vậy)\n• Bổ sung: Moreover (Hơn nữa), In addition (Thêm vào đó)\n• Thay thế/Ngược lại: On the contrary (Ngược lại), Otherwise (Nếu không thì)",
          example: "We had budget issues. However, the project was completed on time. (Chúng tôi gặp vấn đề ngân sách. Tuy nhiên, dự án vẫn xong đúng hạn.)",
          explanation: "Để làm được câu hỏi này, bạn phải đọc hiểu câu phía trước và câu chứa chỗ trống để xác định mối quan hệ logic (nguyên nhân-kết quả, bổ sung hay đối lập)."
        },
        {
          title: "Sự nhất quán về Thì (Tense Consistency)",
          formula: "• Quyết định thì dựa vào các mốc thời gian trong đoạn văn hoặc câu xung quanh.",
          example: "Yesterday we launched a product. It ______ (be) very successful. -> Chọn 'was' (quá khứ) để nhất quán với 'Yesterday'.",
          explanation: "Khác với Part 5 có trạng từ chỉ thời gian đứng ngay trong câu, Part 6 đòi hỏi bạn phải tìm trạng ngữ thời gian ở câu trước hoặc câu sau."
        }
      ],
      traps: [
        {
          name: "Bẫy điền cả câu văn (Sentence Insertion)",
          description: "Chọn câu văn phù hợp nhất để chèn vào chỗ trống trong đoạn văn.",
          example: "Một chỗ trống cần điền đứng sau câu giới thiệu về nhân viên mới, và đứng trước câu mô tả nhiệm vụ của người đó.",
          tip: "Xem xét sự liên kết: Câu trước nói về ai/cái gì? Câu sau nói về ai/cái gì? Câu cần điền phải đóng vai trò là cầu nối thông tin giữa 2 câu đó."
        }
      ],
      tips: [
        "Đừng đọc ngắt quãng: Đọc lướt qua toàn bộ đoạn văn từ đầu đến cuối để nắm được chủ đề và giọng điệu chung, thay vì chỉ đọc mỗi câu chứa chỗ trống.",
        "Chú ý các đại từ chỉ định: This, That, These, Those thường ám chỉ đến danh từ đã được nhắc tới ở câu ngay trước đó."
      ]
    },
    sets: [
      {
        name: "Liên từ liên kết",
        words: [
          { word: "therefore", ipa: "/ˈðeəfɔːr/", meaning: "do đó, vì vậy", type: "adverb", example: "We missed the train; therefore, we were late.", viAnswers: ["do đó", "vì vậy"] },
          { word: "however", ipa: "/haʊˈevər/", meaning: "tuy nhiên", type: "adverb", example: "She is smart; however, she lacks experience.", viAnswers: ["tuy nhiên"] },
          { word: "moreover", ipa: "/mɔːrˈoʊvər/", meaning: "hơn thế nữa, ngoài ra", type: "adverb", example: "The laptop is cheap; moreover, it has good features.", viAnswers: ["hơn nữa", "ngoài ra"] },
          { word: "consequently", ipa: "/ˈkɒnsɪkwəntli/", meaning: "kết quả là, hậu quả là", type: "adverb", example: "He worked hard; consequently, he was promoted.", viAnswers: ["kết quả là"] },
          { word: "otherwise", ipa: "/ˈʌðəwaɪz/", meaning: "nếu không thì", type: "adverb", example: "Please reply now; otherwise, the order is canceled.", viAnswers: ["nếu không thì"] },
          { word: "nevertheless", ipa: "/ˌnevəðəˈles/", meaning: "tuy nhiên, tuy thế mà", type: "adverb", example: "The road was wet; nevertheless, he drove fast.", viAnswers: ["tuy nhiên", "dù vậy"] },
          { word: "meanwhile", ipa: "/ˈmiːnwaɪl/", meaning: "trong khi đó", type: "adverb", example: "He cleaned the room; meanwhile, she cooked lunch.", viAnswers: ["trong khi đó"] },
          { word: "furthermore", ipa: "/ˌfɜːðəˈmɔːr/", meaning: "hơn nữa, vả lại", type: "adverb", example: "The house is big; furthermore, the garden is beautiful.", viAnswers: ["hơn nữa"] },
          { word: "besides", ipa: "/bɪˈsaɪdz/", meaning: "ngoài ra, bên cạnh đó", type: "preposition / adverb", example: "Besides English, she speaks French.", viAnswers: ["ngoài ra", "bên cạnh đó"] },
          { word: "although", ipa: "/ɔːlˈðoʊ/", meaning: "mặc dù", type: "conjunction", example: "Although it rained, we went out.", viAnswers: ["mặc dù"] },
          { word: "unless", ipa: "/ʌnˈles/", meaning: "trừ khi, nếu không", type: "conjunction", example: "Unless you hurry, you will miss the flight.", viAnswers: ["trừ khi"] },
          { word: "whereas", ipa: "/ˌweərˈæz/", meaning: "trong khi đó (so sánh đối lập)", type: "conjunction", example: "He loves cats, whereas she prefers dogs.", viAnswers: ["trong khi"] },
          { word: "in addition to", ipa: "/ɪn əˈdɪʃn tuː/", meaning: "thêm vào đó, ngoài ra", type: "phrase", example: "In addition to a salary, he gets bonuses.", viAnswers: ["thêm vào đó", "ngoài ra"] },
          { word: "despite", ipa: "/dɪˈspaɪt/", meaning: "mặc dù (đi với cụm Noun/V-ing)", type: "preposition", example: "We went out despite the cold weather.", viAnswers: ["mặc dù"] },
          { word: "provided that", ipa: "/prəˈvaɪdɪd ðæt/", meaning: "với điều kiện là, miễn là", type: "conjunction", example: "You can borrow my car provided that you drive carefully.", viAnswers: ["với điều kiện là", "miễn là"] }
        ]
      },
      {
        name: "Thư từ thương mại",
        words: [
          { word: "recipient", ipa: "/rɪˈsɪpiənt/", meaning: "người nhận", type: "noun", example: "Please write the recipient's name clearly.", viAnswers: ["người nhận"] },
          { word: "correspondence", ipa: "/ˌkɒrəˈspɒndəns/", meaning: "thư tín, thư từ giao dịch", type: "noun", example: "Business correspondence should be kept formal.", viAnswers: ["thư từ", "thư tín"] },
          { word: "inquire", ipa: "/ɪnˈkwaɪər/", meaning: "yêu cầu thông tin, hỏi", type: "verb", example: "I am writing to inquire about your services.", viAnswers: ["hỏi", "yêu cầu"] },
          { word: "regarding", ipa: "/rɪˈɡɑːdɪŋ/", meaning: "về việc, liên quan đến", type: "preposition", example: "I have some questions regarding the invoice.", viAnswers: ["liên quan đến", "về việc"] },
          { word: "sincerely", ipa: "/sɪnˈsɪəli/", meaning: "chân thành (dùng cuối thư)", type: "adverb", example: "Yours sincerely, John Doe.", viAnswers: ["chân thành"] },
          { word: "attachment", ipa: "/əˈtætʃmənt/", meaning: "tập tin đính kèm", type: "noun", example: "Please see the attachment for details.", viAnswers: ["đính kèm", "tệp đính kèm"] },
          { word: "forward", ipa: "/ˈfɔːwəd/", meaning: "chuyển tiếp thư", type: "verb", example: "Could you forward this email to the team?", viAnswers: ["chuyển tiếp"] },
          { word: "reminder", ipa: "/rɪˈmaɪndər/", meaning: "thư nhắc nhở", type: "noun", example: "Send a reminder to unpaid accounts.", viAnswers: ["thư nhắc nhở", "lời nhắc"] },
          { word: "apologize", ipa: "/əˈpɒlədʒaɪz/", meaning: "xin lỗi", type: "verb", example: "We apologize for the delay.", viAnswers: ["xin lỗi"] },
          { word: "grateful", ipa: "/ˈɡreɪtfl/", meaning: "biết ơn, trân trọng", type: "adjective", example: "We are grateful for your help.", viAnswers: ["biết ơn", "trân trọng"] },
          { word: "appreciate", ipa: "/əˈpriːʃieɪt/", meaning: "đánh giá cao, cảm kích", type: "verb", example: "I appreciate your prompt reply.", viAnswers: ["cảm kích", "đánh giá cao"] },
          { word: "regret", ipa: "/rɪˈɡret/", meaning: "lấy làm tiếc, hối tiếc", type: "verb / noun", example: "We regret to inform you that the seat is full.", viAnswers: ["tiếc", "lấy làm tiếc"] },
          { word: "enclose", ipa: "/ɪnˈkloʊz/", meaning: "gửi kèm, đính kèm (trong phong bì)", type: "verb", example: "I enclose a copy of the contract.", viAnswers: ["gửi kèm", "đính kèm"] },
          { word: "response", ipa: "/rɪˈspɒns/", meaning: "câu trả lời, phản hồi", type: "noun", example: "Thank you for your response.", viAnswers: ["phản hồi", "câu trả lời"] },
          { word: "promptly", ipa: "/ˈprɒmptli/", meaning: "một cách nhanh chóng, ngay lập tức", type: "adverb", example: "The support team responded promptly.", viAnswers: ["nhanh chóng", "ngay lập tức"] }
        ]
      },
      {
        name: "Thông báo & Quy định Văn phòng",
        words: [
          { word: "implement", ipa: "/ˈɪmplɪment/", meaning: "triển khai, áp dụng", type: "verb", example: "We will implement the new rules next week.", viAnswers: ["triển khai", "áp dụng"] },
          { word: "procedure", ipa: "/prəˈsiːdʒər/", meaning: "quy trình, thủ tục", type: "noun", example: "Follow the standard procedure for complaints.", viAnswers: ["quy trình", "thủ tục"] },
          { word: "compliance", ipa: "/kəmˈplaɪəns/", meaning: "sự tuân thủ đúng quy định", type: "noun", example: "The company is in compliance with safety laws.", viAnswers: ["tuân thủ", "sự tuân thủ"] },
          { word: "mandate", ipa: "/ˈmændeɪt/", meaning: "bắt buộc, chỉ thị chính thức", type: "verb / noun", example: "Wearing a badge is mandated for all employees.", viAnswers: ["bắt buộc", "chỉ thị"] },
          { word: "observe", ipa: "/əbˈzɜːv/", meaning: "tuân thủ, quan sát", type: "verb", example: "You must observe the speed limit.", viAnswers: ["tuân thủ", "quan sát"] },
          { word: "prohibit", ipa: "/prəˈhɪbɪt/", meaning: "ngăn cấm, cấm đoán", type: "verb", example: "Parking is prohibited in this area.", viAnswers: ["cấm", "ngăn cấm"] },
          { word: "restriction", ipa: "/rɪˈstrɪkʃn/", meaning: "sự hạn chế, giới hạn", type: "noun", example: "There are travel restrictions due to the storm.", viAnswers: ["hạn chế", "sự hạn chế"] },
          { word: "penalty", ipa: "/ˈpenəlti/", meaning: "khoản tiền phạt, hình phạt", type: "noun", example: "You must pay a penalty for late payment.", viAnswers: ["tiền phạt", "phạt"] },
          { word: "security", ipa: "/sɪˈkjʊərəti/", meaning: "an ninh, bảo mật", type: "noun", example: "Security is tight at the headquarters.", viAnswers: ["an ninh", "bảo mật"] },
          { word: "notify", ipa: "/ˈnoʊtɪfaɪ/", meaning: "thông báo, báo cho biết", type: "verb", example: "Please notify us if your address changes.", viAnswers: ["thông báo"] },
          { word: "obligation", ipa: "/ˌɒblɪˈɡeɪʃn/", meaning: "nghĩa vụ, bổn phận bắt buộc", type: "noun", example: "You have an obligation to complete the work.", viAnswers: ["nghĩa vụ", "bổn phận"] },
          { word: "authorize", ipa: "/ˈɔːθəraɪz/", meaning: "ủy quyền, cho phép chính thức", type: "verb", example: "Only authorized managers can sign this.", viAnswers: ["ủy quyền", "cho phép"] },
          { word: "strictly", ipa: "/ˈstrɪktli/", meaning: "một cách nghiêm ngặt, hoàn toàn", type: "adverb", example: "Safety regulations are strictly enforced.", viAnswers: ["nghiêm ngặt", "một cách nghiêm ngặt"] },
          { word: "violation", ipa: "/ˌvaɪəˈleɪʃn/", meaning: "sự vi phạm quy định/luật lệ", type: "noun", example: "Entering without a pass is a violation of rules.", viAnswers: ["vi phạm", "sự vi phạm"] },
          { word: "policy", ipa: "/ˈpɒləsi/", meaning: "chính sách, quy chế quy định", type: "noun", example: "Read the company policy on remote work.", viAnswers: ["chính sách"] }
        ]
      }
    ]
  },
  {
    id: "part7",
    part: "Part 7",
    title: "Đọc hiểu đoạn văn",
    focus: "Tìm thông tin chi tiết, từ đồng nghĩa (Paraphrase), suy luận (Inference), đọc văn bản kép.",
    grammar: {
      overview: "TOEIC Reading Part 7 gồm 54 câu hỏi (từ câu 147 đến câu 200). Bạn phải đọc các đoạn văn đơn (single passage), đoạn văn đôi (double passage) hoặc đoạn văn ba (triple passage) và trả lời các câu hỏi trắc nghiệm. Đây là phần kiểm tra vốn từ vựng lớn nhất và kỹ năng quản lý thời gian cực kỳ khắt khe.",
      structures: [
        {
          title: "Kỹ năng Đọc quét thông tin (Scanning)",
          formula: "Nhìn câu hỏi -> Xác định từ khóa (Tên riêng, con số, ngày tháng, danh từ viết hoa) -> Quét nhanh mắt trên đoạn văn để tìm đúng dòng chứa từ khóa.",
          example: "Câu hỏi: 'When will Mr. Kim meet the client?' -> Từ khóa là 'Mr. Kim', 'meet'. Quét nhanh trong email để tìm dòng có 'Mr. Kim'.",
          explanation: "Không đọc toàn bộ đoạn văn khi làm câu hỏi chi tiết. Hãy quét từ khóa để định vị thông tin trước, rồi đọc kỹ 1-2 câu xung quanh đó để tìm đáp án."
        },
        {
          title: "Kỹ năng Đọc lướt lấy ý chính (Skimming)",
          formula: "Đọc tiêu đề (Title) -> Đọc câu đầu tiên và câu cuối cùng của mỗi đoạn (Topic sentences) -> Đọc nhanh các từ in đậm/in nghiêng.",
          example: "Câu hỏi: 'What is the main purpose of the letter?' -> Chỉ cần đọc lướt câu đầu tiên của bức thư để tìm câu trả lời.",
          explanation: "Skimming giúp bạn hiểu đại ý của đoạn văn cực nhanh để trả lời câu hỏi tổng quát mà không bị sa vào các chi tiết vụn vặt."
        }
      ],
      traps: [
        {
          name: "Bẫy thông tin gây nhiễu (Distractor Trap)",
          description: "Thông tin ở câu hỏi giống hệt một câu trong đoạn văn nhưng thực ra nó mô tả một sự việc khác hoặc thuộc dòng thời gian khác.",
          example: "Đoạn văn viết: 'The meeting was originally set for Monday but then changed to Wednesday.' Phương án A ghi Monday, phương án B ghi Wednesday. Nhiều người chọn Monday vì thấy nó xuất hiện trước.",
          tip: "Luôn đọc kỹ toàn bộ câu văn chứa thông tin để hiểu đúng thì và điều kiện của thông tin đó, tránh chọn vội vàng khi vừa thấy từ quen mắt."
        },
        {
          name: "Bẫy câu hỏi suy luận (Inference Trap)",
          description: "Đáp án đúng không được ghi trực tiếp trong bài nghe mà bạn phải tự suy ra từ các dữ kiện liên kết.",
          example: "Bức thư ghi: 'I will buy the plane ticket today.' Câu hỏi: 'What will the speaker do?' Đáp án đúng: 'Make travel arrangements.' (Lên lịch trình di chuyển).",
          tip: "Câu trả lời đúng thường sử dụng cấu trúc diễn đạt tương đương (Paraphrasing) bằng các từ đồng nghĩa rộng hơn."
        }
      ],
      tips: [
        "Quản lý thời gian: Dành khoảng 50-55 phút cho Part 7. Trung bình mỗi câu hỏi chỉ có dưới 1 phút bao gồm cả thời gian đọc đoạn văn.",
        "Đọc câu hỏi trước khi đọc đoạn văn: Giúp bạn biết mình cần tìm thông tin gì, chủ động hơn trong lúc đọc bài.",
        "Đoạn kép và đoạn ba: Thông tin thường liên kết giữa các đoạn. Ví dụ: Đoạn 1 là email đặt hàng, Đoạn 2 là hóa đơn giao hàng. Câu hỏi sẽ hỏi món đồ nào bị thiếu -> phải so đối chiếu giữa 2 đoạn."
      ]
    },
    sets: [
      {
        name: "Email & Thư tín",
        words: [
          { word: "inbox", ipa: "/ˈɪnbɒks/", meaning: "hộp thư đến", type: "noun", example: "Please check your inbox for the confirmation email.", viAnswers: ["hộp thư đến"] },
          { word: "sender", ipa: "/ˈsendər/", meaning: "người gửi", type: "noun", example: "The sender's address was written at the top.", viAnswers: ["người gửi"] },
          { word: "subject line", ipa: "/ˈsʌbdʒɪkt laɪn/", meaning: "dòng chủ đề email", type: "noun", example: "Write a clear subject line for your message.", viAnswers: ["dòng chủ đề"] },
          { word: "regarding", ipa: "/rɪˈɡɑːdɪŋ/", meaning: "về, liên quan tới", type: "preposition", example: "I am writing regarding the job opening.", viAnswers: ["liên quan", "về"] },
          { word: "postpone", ipa: "/poʊˈspoʊn/", meaning: "hoãn lại, dời lại", type: "verb", example: "The flight was postponed due to bad weather.", viAnswers: ["hoãn", "hoãn lại"] },
          { word: "attachment", ipa: "/əˈtætʃmənt/", meaning: "tệp đính kèm", type: "noun", example: "Please review the attachment before the call.", viAnswers: ["đính kèm", "tệp đính kèm"] },
          { word: "urgently", ipa: "/ˈɜːdʒəntli/", meaning: "một cách khẩn cấp", type: "adverb", example: "We urgently need to resolve this issue.", viAnswers: ["khẩn cấp", "một cách khẩn cấp"] },
          { word: "confirmation", ipa: "/ˌkɒnfəˈmeɪʃn/", meaning: "sự xác nhận", type: "noun", example: "You will receive a confirmation number shortly.", viAnswers: ["xác nhận", "sự xác nhận"] },
          { word: "colleague", ipa: "/ˈkɒliːɡ/", meaning: "đồng nghiệp", type: "noun", example: "I forwarded the message to my colleagues.", viAnswers: ["đồng nghiệp"] },
          { word: "representative", ipa: "/ˌreprɪˈzentətɪv/", meaning: "người đại diện, nhân viên", type: "noun", example: "A representative will contact you.", viAnswers: ["đại diện"] },
          { word: "proposal", ipa: "/prəˈpoʊzl/", meaning: "bản đề xuất, đề nghị", type: "noun", example: "We submitted the proposal last week.", viAnswers: ["đề xuất", "đề nghị"] },
          { word: "feedback", ipa: "/ˈfiːdbæk/", meaning: "ý kiến phản hồi", type: "noun", example: "We appreciate your feedback on the project.", viAnswers: ["phản hồi", "ý kiến phản hồi"] },
          { word: "schedule", ipa: "/ˈʃedjuːl/", meaning: "lập lịch trình, thời gian biểu", type: "verb / noun", example: "The meeting has been scheduled for Friday.", viAnswers: ["lịch trình", "lên lịch"] },
          { word: "renovate", ipa: "/ˈrenəveɪt/", meaning: "cải tạo, sửa sang mới lại", type: "verb", example: "The office will close for renovation.", viAnswers: ["cải tạo", "sửa sang"] },
          { word: "complimentary", ipa: "/ˌkɒmplɪˈmentəri/", meaning: "miễn phí, làm quà tặng", type: "adjective", example: "Free WiFi is complimentary for guests.", viAnswers: ["miễn phí"] }
        ]
      },
      {
        name: "Thông báo & Quảng cáo",
        words: [
          { word: "banquet", ipa: "/ˈbæŋkwɪt/", meaning: "tiệc lớn, yến tiệc", type: "noun", example: "The annual banquet is held in the grand hall.", viAnswers: ["tiệc", "tiệc lớn"] },
          { word: "renovation", ipa: "/ˌrenəˈveɪʃn/", meaning: "sự nâng cấp, cải tạo", type: "noun", example: "The renovation project took three months.", viAnswers: ["nâng cấp", "cải tạo"] },
          { word: "policy", ipa: "/ˈpɒləsi/", meaning: "chính sách, quy định", type: "noun", example: "We have a strict policy against smoking.", viAnswers: ["chính sách", "quy định"] },
          { word: "effective", ipa: "/html/ɪˈfektɪv/", meaning: "có hiệu lực", type: "adjective", example: "The new rules are effective tomorrow.", viAnswers: ["có hiệu lực"] },
          { word: "expired", ipa: "/ɪkˈspaɪəd/", meaning: "đã hết hạn", type: "adjective", example: "This discount code is expired.", viAnswers: ["hết hạn"] },
          { word: "promotion", ipa: "/prəˈmoʊʃn/", meaning: "chương trình khuyến mãi, thăng chức", type: "noun", example: "The store has a special promotion this week.", viAnswers: ["khuyến mãi", "thăng chức"] },
          { word: "announcement", ipa: "/əˈnaʊnsmənt/", meaning: "thông báo công cộng", type: "noun", example: "The principal made an announcement.", viAnswers: ["thông báo"] },
          { word: "warranty", ipa: "/ˈwɒrənti/", meaning: "giấy bảo hành", type: "noun", example: "The product has a two-year warranty.", viAnswers: ["bảo hành", "giấy bảo hành"] },
          { word: "discount", ipa: "/ˈdɪskaʊnt/", meaning: "giảm giá", type: "noun / verb", example: "We offer a 20 percent discount to students.", viAnswers: ["giảm giá"] },
          { word: "limited-time", ipa: "/ˌlɪmɪtɪd ˈtaɪm/", meaning: "trong thời gian giới hạn", type: "adjective", example: "This is a limited-time special offer.", viAnswers: ["giới hạn thời gian"] },
          { word: "coupon", ipa: "/ˈkuːpɒn/", meaning: "phiếu giảm giá", type: "noun", example: "Present this coupon to get a free drink.", viAnswers: ["phiếu giảm giá"] },
          { word: "merchandise", ipa: "/ˈmɜːrtʃəndaɪz/", meaning: "hàng hóa", type: "noun", example: "Merchandise can be returned within 14 days.", viAnswers: ["hàng hóa"] },
          { word: "selection", ipa: "/sɪˈlekʃn/", meaning: "sự chọn lựa, danh mục chọn", type: "noun", example: "We have a wide selection of clothing.", viAnswers: ["sự lựa chọn", "danh mục"] },
          { word: "affordable", ipa: "/əˈfɔːdəbl/", meaning: "giá cả phải chăng, vừa túi tiền", type: "adjective", example: "These shoes are very affordable.", viAnswers: ["phải chăng", "giá cả phải chăng"] },
          { word: "complaint", ipa: "/kəmˈpleɪnt/", meaning: "khiếu nại, phàn nàn", type: "noun", example: "We handled the customer complaint quickly.", viAnswers: ["khiếu nại", "phàn nàn"] }
        ]
      },
      {
        name: "Hóa đơn & Biểu mẫu",
        words: [
          { word: "invoice", ipa: "/ˈɪnvɔɪs/", meaning: "hóa đơn thanh toán chi tiết", type: "noun", example: "Please review the invoice and send payment.", viAnswers: ["hóa đơn"] },
          { word: "receipt", ipa: "/rɪˈsiːt/", meaning: "biên lai, hóa đơn đã trả", type: "noun", example: "Please keep your receipt as proof of purchase.", viAnswers: ["biên lai", "hóa đơn"] },
          { word: "billing", ipa: "/ˈbɪlɪŋ/", meaning: "thanh toán hóa đơn", type: "noun", example: "For billing questions, call customer service.", viAnswers: ["thanh toán", "hóa đơn"] },
          { word: "transaction", ipa: "/trænˈzækʃn/", meaning: "giao dịch", type: "noun", example: "The transaction was completed successfully.", viAnswers: ["giao dịch"] },
          { word: "payment", ipa: "/ˈpeɪmənt/", meaning: "khoản thanh toán", type: "noun", example: "Payment is due upon receipt of the bill.", viAnswers: ["thanh toán", "khoản thanh toán"] },
          { word: "reimburse", ipa: "/ˌriːɪmˈbɜːs/", meaning: "bồi hoàn, hoàn tiền lại", type: "verb", example: "We will reimburse your travel expenses.", viAnswers: ["bồi hoàn", "hoàn tiền"] },
          { word: "reimbursement", ipa: "/ˌriːɪmˈbɜːsmənt/", meaning: "sự bồi hoàn chi phí", type: "noun", example: "Submit your receipts for reimbursement.", viAnswers: ["bồi hoàn", "sự bồi hoàn"] },
          { word: "charge", ipa: "/tʃɑːdʒ/", meaning: "tính phí, tiền phí", type: "verb / noun", example: "There is an extra charge for delivery.", viAnswers: ["phí", "tính phí"] },
          { word: "contract", ipa: "/ˈkɒntrækt/", meaning: "hợp đồng chính thức", type: "noun", example: "Please sign the contract here.", viAnswers: ["hợp đồng"] },
          { word: "agreement", ipa: "/əˈɡriːmənt/", meaning: "sự thỏa thuận, hợp đồng", type: "noun", example: "They signed a trade agreement.", viAnswers: ["thỏa thuận"] },
          { word: "negotiate", ipa: "/nɪˈɡoʊʃieɪt/", meaning: "đàm phán, thương lượng", type: "verb", example: "We need to negotiate the contract terms.", viAnswers: ["đàm phán", "thương lượng"] },
          { word: "estimate", ipa: "/ˈestɪmət/", meaning: "bản dự toán, ước tính", type: "noun / verb", example: "Can you give me a cost estimate?", viAnswers: ["ước tính", "dự toán"] },
          { word: "signature", ipa: "/ˈsɪɡnətʃər/", meaning: "chữ ký", type: "noun", example: "The contract requires your signature.", viAnswers: ["chữ ký"] },
          { word: "penalty", ipa: "/ˈpenəlti/", meaning: "khoản tiền phạt, hình phạt", type: "noun", example: "There is a penalty for late payment.", viAnswers: ["tiền phạt", "phạt"] },
          { word: "deposit", ipa: "/dɪˈpɒzɪt/", meaning: "tiền đặt cọc, gửi tiền", type: "noun / verb", example: "You must pay a deposit to hold the room.", viAnswers: ["đặt cọc", "tiền đặt cọc"] }
        ]
      },
      {
        name: "Bài báo & Bản tin kinh tế",
        words: [
          { word: "acquire", ipa: "/əˈkwaɪər/", meaning: "mua lại, thâu tóm công ty", type: "verb", example: "The firm acquired its competitor yesterday.", viAnswers: ["mua lại", "thâu tóm"] },
          { word: "merger", ipa: "/ˈmɜːdʒər/", meaning: "sự sáp nhập doanh nghiệp", type: "noun", example: "The merger of the two banks was approved.", viAnswers: ["sáp nhập", "sự sáp nhập"] },
          { word: "expansion", ipa: "/ɪkˈspænʃn/", meaning: "sự mở rộng phát triển", type: "noun", example: "They plan business expansion into Asia.", viAnswers: ["mở rộng", "sự mở rộng"] },
          { word: "competitor", ipa: "/kəmˈpetɪtər/", meaning: "đối thủ cạnh tranh", type: "noun", example: "Our prices are lower than our competitors.", viAnswers: ["đối thủ", "đối thủ cạnh tranh"] },
          { word: "market share", ipa: "/ˈmɑːkɪt ʃeər/", meaning: "thị phần kinh doanh", type: "noun", example: "The company holds a large market share.", viAnswers: ["thị phần"] },
          { word: "subsidiary", ipa: "/səbˈsɪdiəri/", meaning: "công ty con", type: "noun", example: "The Japanese subsidiary is very profitable.", viAnswers: ["công ty con"] },
          { word: "revenue", ipa: "/ˈrevənjuː/", meaning: "doanh thu, tiền thu về", type: "noun", example: "Annual revenue reached five million dollars.", viAnswers: ["doanh thu"] },
          { word: "fluctuation", ipa: "/ˌflʌktʃuˈeɪʃn/", meaning: "sự dao động, biến động", type: "noun", example: "We noticed price fluctuations in oil.", viAnswers: ["biến động", "dao động", "sự biến động"] },
          { word: "industry", ipa: "/ˈɪndəstri/", meaning: "ngành công nghiệp/kinh doanh", type: "noun", example: "He has worked in the tourism industry for years.", viAnswers: ["ngành công nghiệp", "ngành"] },
          { word: "spokesperson", ipa: "/ˈspoʊkspɜːsn/", meaning: "người phát ngôn", type: "noun", example: "A spokesperson refused to comment.", viAnswers: ["người phát ngôn"] },
          { word: "growth", ipa: "/ɡroʊθ/", meaning: "sự tăng trưởng, phát triển", type: "noun", example: "The economy is showing signs of growth.", viAnswers: ["tăng trưởng", "sự tăng trưởng"] },
          { word: "decline", ipa: "/dɪˈklaɪn/", meaning: "sự sụt giảm, suy thoái", type: "verb / noun", example: "There is a decline in corporate profits.", viAnswers: ["sụt giảm", "sự sụt giảm"] },
          { word: "venture", ipa: "/ˈventʃər/", meaning: "dự án kinh doanh liên doanh", type: "noun / verb", example: "They started a joint venture in Korea.", viAnswers: ["liên doanh", "dự án kinh doanh"] },
          { word: "monopoly", ipa: "/məˈnɒpəli/", meaning: "sự độc quyền thị trường", type: "noun", example: "The government regulated the telephone monopoly.", viAnswers: ["độc quyền", "sự độc quyền"] },
          { word: "economy", ipa: "/ɪˈkɒnəmi/", meaning: "nền kinh tế, sự tiết kiệm", type: "noun", example: "A strong economy benefits everyone.", viAnswers: ["nền kinh tế", "kinh tế"] }
        ]
      }
    ]
  }
];
