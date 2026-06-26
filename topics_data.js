/* ====================================================
   TOPICS_DATA.JS - Custom Vocabulary categories (Grouped)
   Add new topic vocabulary data inside TOPICS_DATA.
   ==================================================== */
const TOPICS_DATA = {
  "Liên từ TOEIC trọng tâm": [
    ...[
      ["and", "và", "coordinating conjunction", "The company manufactures computers and smartphones.", "FANBOYS - thêm ý"],
      ["but", "nhưng", "coordinating conjunction", "The report is accurate but incomplete.", "FANBOYS - đối lập"],
      ["or", "hoặc", "coordinating conjunction", "Please call or email us.", "FANBOYS - lựa chọn"],
      ["so", "vì vậy", "coordinating conjunction", "It rained heavily, so the event was canceled.", "FANBOYS - kết quả"],
      ["for", "vì", "coordinating conjunction", "The meeting ended early, for everyone had finished.", "FANBOYS - nguyên nhân, trang trọng, ít gặp"],
      ["nor", "cũng không", "coordinating conjunction", "He does not smoke, nor does he drink.", "FANBOYS - phủ định"],
      ["yet", "tuy nhiên", "coordinating conjunction", "The product is expensive, yet customers continue buying it.", "FANBOYS - đối lập mạnh"],
      ["when", "khi", "subordinating conjunction - time", "Call me when you arrive.", "Liên từ thời gian"],
      ["while", "trong khi", "subordinating conjunction - time/contrast", "She answered emails while waiting.", "Có thể chỉ đồng thời hoặc đối lập"],
      ["before", "trước khi", "subordinating conjunction - time", "Finish the report before you leave.", "Before + S + V"],
      ["after", "sau khi", "subordinating conjunction - time", "After the meeting ended, everyone left.", "After + S + V"],
      ["until", "cho đến khi", "subordinating conjunction - time", "Stay here until I return.", "Until + S + V"],
      ["till", "cho đến khi", "subordinating conjunction - time", "Please wait till the manager arrives.", "Till = until"],
      ["since", "kể từ khi, vì", "subordinating conjunction - time/cause", "We have worked here since we graduated.", "Có thể là thời gian hoặc nguyên nhân"],
      ["as soon as", "ngay khi", "subordinating conjunction - time", "Contact us as soon as you receive the package.", "Ngay khi một hành động xảy ra"],
      ["once", "một khi, ngay khi", "subordinating conjunction - time/condition", "Once payment is confirmed, shipping begins.", "Once + S + V"],
      ["whenever", "bất cứ khi nào", "subordinating conjunction - time", "Whenever you need help, contact support.", "Bất cứ khi nào"],
      ["if", "nếu", "subordinating conjunction - condition", "If sales increase, we will hire more staff.", "Điều kiện"],
      ["unless", "trừ khi", "subordinating conjunction - condition", "We will not start unless everyone arrives.", "Unless = if not"],
      ["provided that", "miễn là", "subordinating conjunction - condition", "Refunds are available provided that you keep the receipt.", "Điều kiện trang trọng"],
      ["providing that", "miễn là", "subordinating conjunction - condition", "You may enter providing that you show your ID.", "Điều kiện"],
      ["as long as", "miễn là", "subordinating conjunction - condition", "You may stay as long as you follow the rules.", "Miễn là"],
      ["in case", "phòng khi", "subordinating conjunction - condition", "Take an umbrella in case it rains.", "Phòng khi"],
      ["even if", "ngay cả khi", "subordinating conjunction - condition/concession", "Even if sales decline, we will continue production.", "Nhấn mạnh điều kiện không làm thay đổi kết quả"],
      ["whether", "liệu", "subordinating conjunction", "We do not know whether the client will accept.", "Liệu có hay không"],
      ["because", "bởi vì", "subordinating conjunction - cause", "The event was canceled because it rained.", "Nguyên nhân rõ nhất"],
      ["as", "bởi vì, khi", "subordinating conjunction - cause/time", "As the office is closed, we will meet online.", "Có thể là nguyên nhân hoặc thời gian"],
      ["now that", "vì bây giờ", "subordinating conjunction - cause", "Now that the software is installed, we can begin.", "Nguyên nhân do tình huống mới"],
      ["so...that", "quá...đến mức", "result structure", "The machine is so efficient that production increased.", "so + adj/adv + that"],
      ["such...that", "quá...đến mức", "result structure", "It was such a successful campaign that sales doubled.", "such + (a/an) + adj + noun + that"],
      ["although", "mặc dù", "subordinating conjunction - concession", "Although the product is expensive, many customers buy it.", "Không dùng cùng but"],
      ["though", "mặc dù", "subordinating conjunction - concession", "Though the task was difficult, the team finished it.", "Gần nghĩa although"],
      ["even though", "mặc dù", "subordinating conjunction - concession", "Even though the price rose, demand remained high.", "Nhấn mạnh hơn although"],
      ["whereas", "trong khi, trái lại", "subordinating conjunction - contrast", "Sales increased, whereas expenses decreased.", "So sánh đối lập"],
      ["so that", "để", "subordinating conjunction - purpose", "We left early so that we could avoid traffic.", "Theo sau là mệnh đề"],
      ["in order that", "để", "subordinating conjunction - purpose", "The notice was posted in order that everyone would see it.", "Trang trọng hơn so that"],
      ["both...and", "cả...và", "correlative conjunction", "Both quality and price matter.", "Nối hai thành phần song song"],
      ["either...or", "hoặc...hoặc", "correlative conjunction", "Either the manager or the employees are responsible.", "Động từ chia theo vế gần nhất"],
      ["neither...nor", "không...cũng không", "correlative conjunction", "Neither the manager nor the employees are available.", "Động từ chia theo vế gần nhất"],
      ["not only...but also", "không những...mà còn", "correlative conjunction", "Not only the manager but also the employees are attending.", "Cần song song cấu trúc"],
      ["whether...or", "dù...hay, liệu...hay", "correlative conjunction", "We must decide whether to expand or remain local.", "Nối hai lựa chọn"]
    ].map(([word, meaning, type, example, usage]) => ({
      word,
      ipa: "",
      meaning,
      type,
      example,
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage
    }))
  ],
  "Quy tắc liên từ TOEIC": [
    ...[
      ["FANBOYS", "7 liên từ đẳng lập: for, and, nor, but, or, yet, so", "conjunction rule", "The shipment arrived late, but customers remained satisfied."],
      ["S + V, FANBOYS + S + V", "dùng dấu phẩy khi nối hai mệnh đề độc lập", "punctuation rule", "The shipment arrived late, but customers remained satisfied."],
      ["No comma for words/phrases", "không cần dấu phẩy khi chỉ nối từ hoặc cụm từ", "punctuation rule", "Please call or email us."],
      ["Liên từ phụ thuộc + S + V", "liên từ phụ thuộc tạo mệnh đề phụ, không đứng một mình", "subordinating rule", "Before you leave, finish the report."],
      ["because hoặc so", "không dùng Because..., so... trong cùng một câu", "common TOEIC error", "Because it rained, the event was canceled."],
      ["although hoặc but", "không dùng Although..., but... trong cùng một câu", "common TOEIC error", "Although the product is expensive, many customers buy it."],
      ["parallelism", "hai thành phần được nối phải cùng loại ngữ pháp", "parallel structure", "The company plans to expand and to hire more employees."],
      ["either A or B", "động từ chia theo thành phần gần nhất", "subject-verb agreement", "Either the manager or the employees are responsible."],
      ["neither A nor B", "động từ chia theo thành phần gần nhất", "subject-verb agreement", "Neither the manager nor the employees are available."],
      ["both A and B", "nếu nối hai chủ ngữ, động từ thường chia số nhiều", "subject-verb agreement", "Both quality and price matter."],
      ["not only A but also B", "cần song song cấu trúc và chia động từ theo vế gần nhất nếu nối chủ ngữ", "correlative rule", "Not only the manager but also the employees are attending."],
      ["while", "có thể nghĩa là trong khi hoặc còn/trong khi đối lập", "meaning trap", "Sales increased, while expenses decreased."],
      ["since/as", "có thể chỉ thời gian hoặc nguyên nhân tùy ngữ cảnh", "meaning trap", "Since the system was updated, errors have decreased."],
      ["so that + clause", "so that thường theo sau bởi mệnh đề S + can/could/will/would + V", "purpose rule", "We left early so that we could avoid traffic."]
    ].map(([word, meaning, type, example]) => ({
      word,
      ipa: "",
      meaning,
      type,
      example,
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Ghi nhớ: ${meaning}`
    }))
  ],
  "Dấu hiệu nhận biết danh từ không đếm được": [
    {
      word: "much",
      ipa: "/mʌtʃ/",
      meaning: "nhiều",
      type: "quantifier + uncountable noun",
      example: "There is much information in the report.",
      viAnswers: ["nhiều"]
    },
    {
      word: "little",
      ipa: "/ˈlɪtəl/",
      meaning: "ít, hầu như không nhiều",
      type: "quantifier + uncountable noun",
      example: "There is little time left.",
      viAnswers: ["ít", "hầu như không nhiều"]
    },
    {
      word: "a little",
      ipa: "/ə ˈlɪtəl/",
      meaning: "một ít, một chút",
      type: "quantifier + uncountable noun",
      example: "We still have a little money.",
      viAnswers: ["một ít", "một chút"]
    },
    {
      word: "less",
      ipa: "/les/",
      meaning: "ít hơn",
      type: "quantifier + uncountable noun",
      example: "This task requires less effort.",
      viAnswers: ["ít hơn"]
    },
    {
      word: "the amount of",
      ipa: "/ði əˈmaʊnt əv/",
      meaning: "lượng, số lượng",
      type: "quantifier phrase + uncountable noun",
      example: "The amount of water in the tank is low.",
      viAnswers: ["lượng", "số lượng"]
    },
    {
      word: "a large amount of",
      ipa: "/ə lɑːrdʒ əˈmaʊnt əv/",
      meaning: "một lượng lớn",
      type: "quantifier phrase + uncountable noun",
      example: "The project needs a large amount of funding.",
      viAnswers: ["một lượng lớn", "lượng lớn"]
    },
    {
      word: "a great amount of",
      ipa: "/ə ɡreɪt əˈmaʊnt əv/",
      meaning: "một lượng rất lớn",
      type: "quantifier phrase + uncountable noun",
      example: "The system stores a great amount of data.",
      viAnswers: ["một lượng rất lớn", "lượng rất lớn"]
    },
    {
      word: "a small amount of",
      ipa: "/ə smɔːl əˈmaʊnt əv/",
      meaning: "một lượng nhỏ",
      type: "quantifier phrase + uncountable noun",
      example: "Add a small amount of salt.",
      viAnswers: ["một lượng nhỏ", "lượng nhỏ"]
    },
    {
      word: "a considerable amount of",
      ipa: "/ə kənˈsɪdərəbl əˈmaʊnt əv/",
      meaning: "một lượng đáng kể",
      type: "quantifier phrase + uncountable noun",
      example: "The company spent a considerable amount of money.",
      viAnswers: ["một lượng đáng kể", "lượng đáng kể"]
    },
    {
      word: "a huge amount of",
      ipa: "/ə hjuːdʒ əˈmaʊnt əv/",
      meaning: "một lượng khổng lồ",
      type: "quantifier phrase + uncountable noun",
      example: "The server processes a huge amount of traffic.",
      viAnswers: ["một lượng khổng lồ", "lượng khổng lồ"]
    },
    {
      word: "a great deal of",
      ipa: "/ə ɡreɪt diːl əv/",
      meaning: "rất nhiều",
      type: "quantifier phrase + uncountable noun",
      example: "She has a great deal of experience.",
      viAnswers: ["rất nhiều", "nhiều"]
    },
    {
      word: "a good deal of",
      ipa: "/ə ɡʊd diːl əv/",
      meaning: "khá nhiều, rất nhiều",
      type: "quantifier phrase + uncountable noun",
      example: "We saved a good deal of time.",
      viAnswers: ["khá nhiều", "rất nhiều", "nhiều"]
    }
  ],
  "Động từ khiếm khuyết": [
    {
      word: "can",
      ipa: "/kæn/",
      meaning: "có thể, biết cách",
      type: "modal verb",
      example: "She can finish the report today.",
      viAnswers: ["có thể", "biết cách"]
    },
    {
      word: "could",
      ipa: "/kʊd/",
      meaning: "có thể, đã có thể, có lẽ",
      type: "modal verb",
      example: "Could you send me the invoice?",
      viAnswers: ["có thể", "đã có thể", "có lẽ"]
    },
    {
      word: "may",
      ipa: "/meɪ/",
      meaning: "có thể, được phép",
      type: "modal verb",
      example: "You may leave after the meeting.",
      viAnswers: ["có thể", "được phép"]
    },
    {
      word: "might",
      ipa: "/maɪt/",
      meaning: "có thể, có lẽ",
      type: "modal verb",
      example: "The shipment might arrive tomorrow.",
      viAnswers: ["có thể", "có lẽ"]
    },
    {
      word: "shall",
      ipa: "/ʃæl/",
      meaning: "sẽ, nên chăng",
      type: "modal verb",
      example: "Shall we begin the presentation?",
      viAnswers: ["sẽ", "nên chăng"]
    },
    {
      word: "should",
      ipa: "/ʃʊd/",
      meaning: "nên",
      type: "modal verb",
      example: "You should review the contract carefully.",
      viAnswers: ["nên"]
    },
    {
      word: "will",
      ipa: "/wɪl/",
      meaning: "sẽ",
      type: "modal verb",
      example: "The manager will call you later.",
      viAnswers: ["sẽ"]
    },
    {
      word: "would",
      ipa: "/wʊd/",
      meaning: "sẽ, muốn, thường",
      type: "modal verb",
      example: "Would you like to join the meeting?",
      viAnswers: ["sẽ", "muốn", "thường"]
    },
    {
      word: "must",
      ipa: "/mʌst/",
      meaning: "phải, chắc hẳn",
      type: "modal verb",
      example: "Employees must wear ID badges.",
      viAnswers: ["phải", "chắc hẳn"]
    },
    {
      word: "ought to",
      ipa: "/ɔːt tuː/",
      meaning: "nên",
      type: "modal verb",
      example: "You ought to check the details first.",
      viAnswers: ["nên"]
    },
    {
      word: "need",
      ipa: "/niːd/",
      meaning: "cần",
      type: "semi-modal verb",
      example: "You need not submit the form twice.",
      viAnswers: ["cần"]
    },
    {
      word: "dare",
      ipa: "/der/",
      meaning: "dám",
      type: "semi-modal verb",
      example: "Dare he question the decision?",
      viAnswers: ["dám"]
    },
    {
      word: "have to",
      ipa: "/hæv tuː/",
      meaning: "phải",
      type: "modal equivalent",
      example: "We have to update the schedule.",
      viAnswers: ["phải"]
    },
    {
      word: "has to",
      ipa: "/hæz tuː/",
      meaning: "phải",
      type: "modal equivalent",
      example: "She has to submit the report today.",
      viAnswers: ["phải"]
    },
    {
      word: "had to",
      ipa: "/hæd tuː/",
      meaning: "đã phải",
      type: "modal equivalent",
      example: "They had to cancel the event.",
      viAnswers: ["đã phải", "phải"]
    },
    {
      word: "be able to",
      ipa: "/bi ˈeɪbl tuː/",
      meaning: "có thể, có khả năng",
      type: "modal equivalent",
      example: "The team is able to finish on time.",
      viAnswers: ["có thể", "có khả năng"]
    },
    {
      word: "be allowed to",
      ipa: "/bi əˈlaʊd tuː/",
      meaning: "được phép",
      type: "modal equivalent",
      example: "Visitors are allowed to enter after 9 a.m.",
      viAnswers: ["được phép"]
    },
    {
      word: "be supposed to",
      ipa: "/bi səˈpoʊzd tuː/",
      meaning: "được cho là, phải theo dự kiến",
      type: "modal equivalent",
      example: "The meeting is supposed to start at 10.",
      viAnswers: ["được cho là", "phải theo dự kiến", "dự kiến"]
    },
    {
      word: "be going to",
      ipa: "/bi ˈɡoʊɪŋ tuː/",
      meaning: "sắp, sẽ",
      type: "modal equivalent",
      example: "We are going to launch the product soon.",
      viAnswers: ["sắp", "sẽ"]
    },
    {
      word: "be required to",
      ipa: "/bi rɪˈkwaɪərd tuː/",
      meaning: "được yêu cầu phải",
      type: "modal equivalent",
      example: "Employees are required to attend training.",
      viAnswers: ["được yêu cầu phải", "phải"]
    },
    {
      word: "be expected to",
      ipa: "/bi ɪkˈspektɪd tuː/",
      meaning: "được kỳ vọng sẽ, dự kiến sẽ",
      type: "modal equivalent",
      example: "Sales are expected to increase next quarter.",
      viAnswers: ["được kỳ vọng sẽ", "dự kiến sẽ"]
    },
    {
      word: "be likely to",
      ipa: "/bi ˈlaɪkli tuː/",
      meaning: "có khả năng sẽ",
      type: "modal equivalent",
      example: "The price is likely to rise.",
      viAnswers: ["có khả năng sẽ", "có thể sẽ"]
    },
    {
      word: "be willing to",
      ipa: "/bi ˈwɪlɪŋ tuː/",
      meaning: "sẵn lòng",
      type: "modal equivalent",
      example: "The supplier is willing to offer a discount.",
      viAnswers: ["sẵn lòng"]
    },
    {
      word: "be about to",
      ipa: "/bi əˈbaʊt tuː/",
      meaning: "sắp sửa",
      type: "modal equivalent",
      example: "The train is about to depart.",
      viAnswers: ["sắp sửa", "sắp"]
    },
    {
      word: "used to",
      ipa: "/ˈjuːst tuː/",
      meaning: "đã từng, thường từng",
      type: "modal equivalent",
      example: "He used to work in sales.",
      viAnswers: ["đã từng", "thường từng"]
    }
  ],
  "Động từ nối": [
    ...[
      ["be", "là, thì, ở", "be + adjective/noun", "She is ready for the meeting."],
      ["become", "trở nên, trở thành", "become + adjective/noun", "The process became easier."],
      ["get", "trở nên", "get + adjective", "The room got quiet."],
      ["remain", "vẫn, duy trì", "remain + adjective/noun", "The price remained stable."],
      ["stay", "vẫn, giữ trạng thái", "stay + adjective", "Please stay calm."],
      ["keep", "giữ, duy trì", "keep + adjective", "The system keeps accurate records."],
      ["continue", "tiếp tục ở trạng thái", "continue + adjective", "The service continued available all day."],
      ["seem", "có vẻ, dường như", "seem + adjective", "The proposal seems reasonable."],
      ["appear", "có vẻ, dường như", "appear + adjective", "The results appear accurate."],
      ["look", "trông có vẻ", "look + adjective", "The office looks clean."],
      ["sound", "nghe có vẻ", "sound + adjective", "Your plan sounds practical."],
      ["smell", "có mùi", "smell + adjective", "The coffee smells fresh."],
      ["taste", "có vị", "taste + adjective", "The soup tastes good."],
      ["feel", "cảm thấy, có cảm giác", "feel + adjective", "I feel confident about the test."],
      ["prove", "chứng tỏ là", "prove + adjective/noun", "The decision proved effective."],
      ["grow", "trở nên dần", "grow + adjective", "The company grew stronger."],
      ["turn", "trở nên, chuyển thành", "turn + adjective/color", "The traffic light turned green."],
      ["go", "trở nên, chuyển sang trạng thái xấu", "go + adjective", "The milk went bad."],
      ["fall", "rơi vào/trở nên", "fall + adjective/asleep/silent", "The room fell silent."],
      ["come", "trở nên, thành sự thật", "come + adjective/true", "Her prediction came true."]
    ].map(([word, meaning, usage, example]) => ({
      word,
      ipa: "",
      meaning,
      type: "linking verb",
      example,
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Cấu trúc: ${usage}`
    }))
  ],
  "Nội động từ": [
    ...[
      ["arrive", "đến", "arrive at/in + place", "The train arrived on time."],
      ["come", "đến", "come to + place", "The client came to the office early."],
      ["go", "đi", "go to + place", "She went to the conference yesterday."],
      ["depart", "khởi hành", "depart from + place", "The flight departed at 8 a.m."],
      ["proceed", "tiếp tục tiến hành", "proceed with + noun", "The meeting proceeded as planned."],
      ["stay", "ở lại", "stay at/in + place", "We stayed at a hotel near the station."],
      ["remain", "vẫn còn", "remain + adjective/place", "Several issues remained after the review."],
      ["exist", "tồn tại", "exist in + place/situation", "A problem exists in the current system."],
      ["happen", "xảy ra", "happen to + person", "The accident happened near the office."],
      ["occur", "xảy ra", "occur at/on/in + time/place", "The error occurred during the update."],
      ["arise", "phát sinh", "arise from + noun", "New questions arose after the presentation."],
      ["appear", "xuất hiện", "appear on/in + place", "A warning appeared on the screen."],
      ["disappear", "biến mất", "disappear from + place", "The file disappeared from the folder."],
      ["emerge", "xuất hiện", "emerge from + place/situation", "A new trend emerged in the market."],
      ["rise", "tăng", "rise by/to + amount", "Sales rose by ten percent."],
      ["fall", "giảm", "fall by/to + amount", "Prices fell sharply last month."],
      ["succeed", "thành công", "succeed in + V-ing/noun", "The team succeeded in reducing costs."],
      ["retire", "nghỉ hưu", "retire from + job", "The director retired after thirty years."],
      ["resign", "từ chức", "resign from + position", "She resigned from her position."],
      ["sleep", "ngủ", "sleep well/badly", "He slept well after the trip."],
      ["laugh", "cười", "laugh at + noun", "Everyone laughed at the joke."],
      ["smile", "mỉm cười", "smile at + person", "The receptionist smiled at the visitor."],
      ["cry", "khóc", "cry about/over + noun", "The child cried for a long time."],
      ["live", "sống", "live in + place", "They live in a small apartment."],
      ["die", "chết", "die of/from + cause", "The plant died from lack of water."]
    ].map(([word, meaning, usage, example]) => ({
      word,
      ipa: "",
      meaning,
      type: "intransitive verb",
      example,
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Cấu trúc: ${usage}`
    }))
  ],
  "Trạng từ không theo quy tắc hay ra": [
    {
      word: "always",
      ipa: "/ˈɔːlweɪz/",
      meaning: "luôn luôn",
      type: "adverb of frequency",
      example: "She always arrives on time.",
      viAnswers: ["luôn luôn", "luôn"]
    },
    {
      word: "usually",
      ipa: "/ˈjuːʒuəli/",
      meaning: "thường xuyên, thường thường",
      type: "adverb of frequency",
      example: "We usually meet on Mondays.",
      viAnswers: ["thường xuyên", "thường thường", "thường"]
    },
    {
      word: "often",
      ipa: "/ˈɔːfən/",
      meaning: "thường",
      type: "adverb of frequency",
      example: "He often travels for work.",
      viAnswers: ["thường"]
    },
    {
      word: "sometimes",
      ipa: "/ˈsʌmtaɪmz/",
      meaning: "thỉnh thoảng",
      type: "adverb of frequency",
      example: "Sometimes the office closes early.",
      viAnswers: ["thỉnh thoảng", "đôi khi"]
    },
    {
      word: "never",
      ipa: "/ˈnevər/",
      meaning: "không bao giờ",
      type: "adverb of frequency",
      example: "They never miss a deadline.",
      viAnswers: ["không bao giờ"]
    },
    {
      word: "already",
      ipa: "/ɔːlˈredi/",
      meaning: "đã rồi",
      type: "adverb of time",
      example: "The report has already been sent.",
      viAnswers: ["đã rồi", "đã"]
    },
    {
      word: "yet",
      ipa: "/jet/",
      meaning: "chưa, vẫn chưa",
      type: "adverb of time",
      example: "The invoice has not arrived yet.",
      viAnswers: ["chưa", "vẫn chưa"]
    },
    {
      word: "still",
      ipa: "/stɪl/",
      meaning: "vẫn còn",
      type: "adverb of time",
      example: "The client is still waiting.",
      viAnswers: ["vẫn còn", "vẫn"]
    },
    {
      word: "just",
      ipa: "/dʒʌst/",
      meaning: "vừa mới, chỉ",
      type: "adverb of time / degree",
      example: "She has just finished the task.",
      viAnswers: ["vừa mới", "chỉ"]
    },
    {
      word: "soon",
      ipa: "/suːn/",
      meaning: "sớm, chẳng bao lâu",
      type: "adverb of time",
      example: "The package will arrive soon.",
      viAnswers: ["sớm", "chẳng bao lâu"]
    },
    {
      word: "here",
      ipa: "/hɪr/",
      meaning: "ở đây",
      type: "adverb of place",
      example: "Please sign here.",
      viAnswers: ["ở đây"]
    },
    {
      word: "anywhere",
      ipa: "/ˈeniwer/",
      meaning: "bất cứ đâu, nơi nào",
      type: "adverb of place",
      example: "You can work from anywhere.",
      viAnswers: ["bất cứ đâu", "nơi nào"]
    },
    {
      word: "somewhere",
      ipa: "/ˈsʌmwer/",
      meaning: "ở đâu đó",
      type: "adverb of place",
      example: "The file is somewhere on my desk.",
      viAnswers: ["ở đâu đó", "đâu đó"]
    },
    {
      word: "nowhere",
      ipa: "/ˈnoʊwer/",
      meaning: "không nơi nào",
      type: "adverb of place",
      example: "The missing document was nowhere to be found.",
      viAnswers: ["không nơi nào", "không đâu"]
    },
    {
      word: "very",
      ipa: "/ˈveri/",
      meaning: "rất",
      type: "adverb of degree",
      example: "The instructions are very clear.",
      viAnswers: ["rất"]
    },
    {
      word: "too",
      ipa: "/tuː/",
      meaning: "quá, cũng",
      type: "adverb of degree",
      example: "The price is too high.",
      viAnswers: ["quá", "cũng"]
    },
    {
      word: "so",
      ipa: "/soʊ/",
      meaning: "rất, quá, vì vậy",
      type: "adverb of degree / linking adverb",
      example: "The meeting was so useful.",
      viAnswers: ["rất", "quá", "vì vậy"]
    },
    {
      word: "enough",
      ipa: "/ɪˈnʌf/",
      meaning: "đủ",
      type: "adverb of degree",
      example: "The room is large enough.",
      viAnswers: ["đủ"]
    },
    {
      word: "almost",
      ipa: "/ˈɔːlmoʊst/",
      meaning: "gần như",
      type: "adverb of degree",
      example: "The project is almost complete.",
      viAnswers: ["gần như"]
    },
    {
      word: "nearly",
      ipa: "/ˈnɪrli/",
      meaning: "gần như",
      type: "adverb of degree",
      example: "Nearly all employees attended.",
      viAnswers: ["gần như"]
    },
    {
      word: "hardly",
      ipa: "/ˈhɑːrdli/",
      meaning: "hầu như không",
      type: "adverb of degree",
      example: "We hardly had enough time.",
      viAnswers: ["hầu như không"]
    },
    {
      word: "therefore",
      ipa: "/ˈðerfɔːr/",
      meaning: "vì vậy, do đó",
      type: "linking adverb",
      example: "The deadline changed; therefore, we revised the plan.",
      viAnswers: ["vì vậy", "do đó"]
    },
    {
      word: "moreover",
      ipa: "/mɔːrˈoʊvər/",
      meaning: "hơn nữa",
      type: "linking adverb",
      example: "The service is fast; moreover, it is affordable.",
      viAnswers: ["hơn nữa"]
    },
    {
      word: "otherwise",
      ipa: "/ˈʌðərwaɪz/",
      meaning: "nếu không thì, mặt khác",
      type: "linking adverb",
      example: "Please reply today; otherwise, the order will be canceled.",
      viAnswers: ["nếu không thì", "mặt khác"]
    }
  ],
  "Động từ + To-V": [
    ...[
      ["agree", "đồng ý", "agree to attend", "She agreed to attend the meeting."],
      ["afford", "có đủ khả năng chi trả/làm gì", "afford to buy", "We cannot afford to delay the project."],
      ["attempt", "cố gắng, nỗ lực", "attempt to solve", "They attempted to solve the problem quickly."],
      ["choose", "chọn", "choose to leave", "He chose to leave early."],
      ["decide", "quyết định", "decide to hire", "The company decided to hire more staff."],
      ["deserve", "xứng đáng", "deserve to win", "She deserves to receive the award."],
      ["expect", "mong đợi, kỳ vọng", "expect to finish", "We expect to finish the work today."],
      ["fail", "không thể, thất bại", "fail to submit", "He failed to submit the report on time."],
      ["hope", "hy vọng", "hope to visit", "I hope to visit the branch office next week."],
      ["learn", "học, học cách", "learn to use", "New employees learn to use the system."],
      ["manage", "xoay xở, thành công làm gì", "manage to complete", "They managed to complete the task before noon."],
      ["offer", "đề nghị", "offer to help", "She offered to help with the presentation."],
      ["plan", "lên kế hoạch, dự định", "plan to expand", "The team plans to expand the service."],
      ["prepare", "chuẩn bị", "prepare to leave", "Please prepare to leave for the conference."],
      ["pretend", "giả vờ", "pretend to know", "He pretended to know the answer."],
      ["promise", "hứa", "promise to call", "They promised to call the client today."],
      ["refuse", "từ chối", "refuse to sign", "The customer refused to sign the contract."],
      ["want", "muốn", "want to improve", "We want to improve customer service."],
      ["wish", "ước, mong muốn", "wish to apply", "I wish to apply for the position."]
    ].map(([word, meaning, usage, example]) => ({
      word,
      ipa: "",
      meaning,
      type: "verb + to-infinitive",
      example,
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Cấu trúc: ${usage}`
    }))
  ],
  "Động từ + V-ing": [
    ...[
      ["enjoy", "thích, tận hưởng", "enjoy working", "She enjoys working with international clients."],
      ["avoid", "tránh", "avoid making", "Please avoid making the same mistake."],
      ["finish", "hoàn thành, kết thúc", "finish preparing", "They finished preparing the documents."],
      ["consider", "cân nhắc, xem xét", "consider hiring", "We are considering hiring a new assistant."],
      ["suggest", "đề xuất, gợi ý", "suggest changing", "He suggested changing the schedule."],
      ["keep", "tiếp tục", "keep improving", "The team keeps improving the product."],
      ["mind", "phiền, ngại", "mind waiting", "Do you mind waiting for a few minutes?"],
      ["postpone", "hoãn lại", "postpone launching", "The company postponed launching the new service."],
      ["practice", "luyện tập, thực hành", "practice speaking", "She practices speaking English every day."],
      ["recommend", "khuyên, đề xuất", "recommend using", "The manager recommended using the new software."],
      ["admit", "thừa nhận", "admit causing", "He admitted causing the delay."],
      ["deny", "phủ nhận", "deny receiving", "They denied receiving the complaint."],
      ["quit", "bỏ, ngừng", "quit smoking", "He quit smoking last year."],
      ["imagine", "tưởng tượng", "imagine living", "Can you imagine living in another country?"],
      ["miss", "nhớ, bỏ lỡ", "miss working", "She misses working with her old team."],
      ["risk", "mạo hiểm, có nguy cơ", "risk losing", "We risk losing the contract if we delay."],
      ["resist", "chống lại, cưỡng lại", "resist buying", "He could not resist buying the discounted laptop."],
      ["appreciate", "trân trọng, đánh giá cao", "appreciate receiving", "We appreciate receiving your feedback."],
      ["delay", "trì hoãn", "delay sending", "They delayed sending the final invoice."]
    ].map(([word, meaning, usage, example]) => ({
      word,
      ipa: "",
      meaning,
      type: "verb + gerund",
      example,
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Cấu trúc: ${usage}`
    }))
  ],
  "Tính từ + To-V": [
    ...[
      ["happy", "vui", "happy to help", "I am happy to help you."],
      ["glad", "vui", "glad to meet", "She was glad to meet the new manager."],
      ["pleased", "hài lòng", "pleased to announce", "We are pleased to announce the results."],
      ["sorry", "xin lỗi, lấy làm tiếc", "sorry to hear", "I am sorry to hear about the delay."],
      ["surprised", "ngạc nhiên", "surprised to see", "They were surprised to see the new design."],
      ["ready", "sẵn sàng", "ready to start", "The team is ready to start the project."],
      ["eager", "háo hức", "eager to learn", "New employees are eager to learn."],
      ["willing", "sẵn lòng", "willing to work", "She is willing to work overtime."],
      ["likely", "có khả năng", "likely to change", "The schedule is likely to change."],
      ["certain", "chắc chắn", "certain to succeed", "The plan is certain to succeed."],
      ["unable", "không thể", "unable to attend", "He is unable to attend the meeting."],
      ["difficult", "khó", "difficult to solve", "This problem is difficult to solve."],
      ["easy", "dễ", "easy to use", "The software is easy to use."],
      ["important", "quan trọng", "important to remember", "It is important to remember the deadline."],
      ["necessary", "cần thiết", "necessary to update", "It is necessary to update the records."]
    ].map(([word, meaning, usage, example]) => ({
      word,
      ipa: "",
      meaning,
      type: "adjective + to-infinitive",
      example,
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Cấu trúc: ${usage}`
    }))
  ],
  "Động từ + Wh-word + to V": [
    ...[
      ["know", "biết", "know what to do", "Nhóm Tư duy & Nhận thức (Mental Verbs)"],
      ["decide", "quyết định", "decide where to go", "Nhóm Tư duy & Nhận thức (Mental Verbs)"],
      ["understand", "hiểu", "understand how to use", "Nhóm Tư duy & Nhận thức (Mental Verbs)"],
      ["wonder", "tự hỏi / băn khoăn", "wonder who to invite", "Nhóm Tư duy & Nhận thức (Mental Verbs)"],
      ["remember", "nhớ", "remember when to stop", "Nhóm Tư duy & Nhận thức (Mental Verbs)"],
      ["forget", "quên", "forget how to log in", "Nhóm Tư duy & Nhận thức (Mental Verbs)"],
      ["consider", "cân nhắc", "consider which to choose", "Nhóm Tư duy & Nhận thức (Mental Verbs)"],
      ["tell", "bảo / nói với", "tell me where to sign", "Nhóm Truyền đạt & Hướng dẫn (Communication Verbs)"],
      ["show", "chỉ cho (ai) thấy", "show him how to fix", "Nhóm Truyền đạt & Hướng dẫn (Communication Verbs)"],
      ["ask", "hỏi / yêu cầu", "ask her what to say", "Nhóm Truyền đạt & Hướng dẫn (Communication Verbs)"],
      ["explain", "giải thích", "explain how to operate", "Nhóm Truyền đạt & Hướng dẫn (Communication Verbs)"],
      ["teach", "dạy", "teach us how to swim", "Nhóm Truyền đạt & Hướng dẫn (Communication Verbs)"],
      ["advise", "khuyên", "advise them when to sell", "Nhóm Truyền đạt & Hướng dẫn (Communication Verbs)"],
      ["learn", "học (cách)", "learn how to drive", "Nhóm Tìm hiểu & Khám phá (Discovery Verbs)"],
      ["find out", "tìm ra / phát hiện", "find out what to buy", "Nhóm Tìm hiểu & Khám phá (Discovery Verbs)"],
      ["figure out", "nghĩ ra / tìm ra (giải pháp)", "figure out how to solve", "Nhóm Tìm hiểu & Khám phá (Discovery Verbs)"],
      ["discover", "khám phá ra", "discover where to hide", "Nhóm Tìm hiểu & Khám phá (Discovery Verbs)"]
    ].map(([word, meaning, phrase, group]) => ({
      word,
      ipa: "",
      meaning,
      type: group,
      example: phrase.charAt(0).toUpperCase() + phrase.slice(1) + ".",
      viAnswers: meaning.split(" / ").flatMap(item => item.split(", ")),
      usage: phrase
    }))
  ],
  "Giới từ": [
    ...[
      ["in", "tháng, năm, mùa, thế kỷ, buổi, quốc gia, thành phố, khu vực, phòng, tòa nhà, không gian kín, khoảng thời gian tương lai", "at night; in a car/taxi; participate in; engage in; succeed in; interested in"],
      ["on", "thứ, ngày, ngày cụ thể, ngày lễ có Day, thứ + buổi, bề mặt, đảo, phương tiện lớn", "on Monday morning; on the table; on a bus; depend on; focus on; rely on"],
      ["at", "giờ, thời điểm cụ thể, noon, midnight, sunrise, sunset, night, địa điểm cụ thể, điểm dừng", "at home; at work; at school; at the airport; at the station; good at"],
      ["for", "khoảng thời gian, dành cho, mục đích, đối tượng nhận", "for 3 years khác since 2020; apply for; pay for; responsible for; reason for"],
      ["since", "mốc thời gian bắt đầu", "since Monday; since 2020; since last year; thường đi với hiện tại hoàn thành"],
      ["during", "sự kiện, hoạt động, cuộc họp, hội nghị, kỳ nghỉ, chuyến đi", "không dùng during 3 years; dùng during the meeting"],
      ["by", "hạn chót, phương tiện, cách thức, tác giả/người thực hiện trong bị động", "by Friday = trước hoặc đúng thứ Sáu; by bus; written by"],
      ["until/till", "kéo dài tới một thời điểm", "until Friday khác by Friday"],
      ["from", "điểm bắt đầu, nguồn gốc, xuất xứ, khoảng thời gian bắt đầu", "from A to B; benefit from; suffer from; recover from"],
      ["to", "điểm đến, hướng tới, mối quan hệ/liên hệ", "belong to; reply to; respond to; refer to; access to; solution to"],
      ["into", "từ ngoài vào trong", "walk into; move into"],
      ["out of", "từ trong ra ngoài", "walk out of; move out of"],
      ["through", "xuyên qua bên trong, thông qua quá trình/hệ thống", "through the tunnel; through the process"],
      ["across", "băng qua bề mặt", "across the street; across the country"],
      ["toward(s)", "hướng về", "toward the exit"],
      ["between", "giữa hai người/vật/thời điểm", "between A and B"],
      ["among", "giữa từ ba người/vật trở lên", "among employees"],
      ["with", "cùng với, có, sử dụng công cụ", "with a pen; with customers; agree with; comply with; satisfied with"],
      ["without", "không có, thiếu", "without permission; without delay"],
      ["of", "sở hữu, thuộc về, thành phần của, đặc điểm", "capable of; aware of; full of"],
      ["about", "về, liên quan đến", "talk about; information about; worried about"],
      ["because of", "nguyên nhân, sau là danh từ/cụm danh từ", "because of the rain"],
      ["due to", "nguyên nhân, sau là danh từ/cụm danh từ", "due to bad weather"],
      ["thanks to", "nguyên nhân tích cực, nhờ vào", "thanks to technology"],
      ["in order to", "mục đích, sau là động từ nguyên mẫu", "in order to reduce costs"],
      ["against", "chống lại, trái với", "against the law"],
      ["around", "khoảng thời gian/số lượng, xung quanh", "around 8 p.m.; around the building"],
      ["after", "sau thời điểm hoặc sự kiện", "after lunch; after the meeting"],
      ["before", "trước thời điểm hoặc sự kiện", "before noon; before the meeting"],
      ["near", "gần", "near the station"],
      ["beside", "bên cạnh", "beside the building"],
      ["opposite", "đối diện", "opposite the bank"],
      ["above", "phía trên, không chạm", "above the desk"],
      ["over", "phía trên, phủ lên trên", "over the river"],
      ["under", "bên dưới", "under the table"],
      ["below", "phía dưới mức nào đó", "below average"],
      ["behind", "phía sau", "behind the building"],
      ["in front of", "phía trước", "in front of the office"]
    ].map(([word, meaning, toeicNote]) => ({
      word,
      ipa: "",
      meaning,
      type: "preposition",
      example: toeicNote.split("; ")[0] + ".",
      viAnswers: meaning.split(", ").slice(0, 3),
      usage: `Lưu ý TOEIC: ${toeicNote}`
    }))
  ],
  "Giới từ chi tiết TOEIC": [
    ...[
      ["at", "giờ cụ thể; thời điểm; địa điểm cụ thể; sự kiện; tốc độ; giá; trình độ; hướng nhìn", "at 8:00; at noon; at night; at the station; at the meeting; at high speed; sold at $50; good at English; look at"],
      ["on", "thứ/ngày; ngày tháng; bề mặt; phương tiện công cộng; chương trình; phụ thuộc; về chủ đề", "on Monday; on July 10; on the table; on the bus; on TV; depend on; a book on marketing"],
      ["in", "tháng/năm/mùa; buổi; khoảng thời gian; bên trong; lĩnh vực; ngôn ngữ; mặc", "in June; in 2026; in summer; in the morning; in two weeks; in the office; work in finance; in English; dressed in black"],
      ["from", "điểm bắt đầu; nguồn gốc; từ...đến...; phân biệt", "from Monday; from Vietnam; from A to B; differ from"],
      ["to", "hướng đến; nơi đến; đến thời điểm; so sánh; đối tượng nhận", "go to the office; send to a client; from 9 to 5; prefer A to B; give it to me"],
      ["for", "khoảng thời gian; mục đích; dành cho; đổi lấy; bởi vì", "for two hours; for training; for customers; exchange for a refund; famous for quality"],
      ["since", "mốc thời gian, thường dùng với thì hoàn thành", "since Monday; since 2019; since last year"],
      ["during", "trong suốt một khoảng thời gian/sự kiện", "during the meeting; during the summer"],
      ["by", "trước hạn; bằng phương tiện; bởi trong bị động; cạnh; tăng/giảm theo", "by Friday; by bus; written by the manager; by the window; increase by 10 percent"],
      ["until/till", "cho đến một thời điểm", "until Friday; till noon"],
      ["within", "trong vòng", "within three days; within a week"],
      ["before", "trước thời điểm", "before noon; before the meeting"],
      ["after", "sau thời điểm", "after lunch; after the interview"],
      ["between", "giữa hai người/vật/thời điểm", "between A and B; between 9 and 10"],
      ["among", "giữa nhiều người/vật", "among employees; among several options"],
      ["over", "trên; hơn; suốt; khắp", "over the bridge; over 100 people; over the weekend; all over the country"],
      ["under", "dưới; ít hơn; dưới quyền", "under the table; under $50; under the manager's supervision"],
      ["above", "ở phía trên, không nhất thiết chạm", "above the desk; above average"],
      ["below", "ở phía dưới", "below the line; below average"],
      ["across", "ngang qua", "across the street; across the country"],
      ["through", "xuyên qua; thông qua; suốt", "through the tunnel; through the website; through the night"],
      ["into", "đi vào bên trong", "walk into the room; move into a new office"],
      ["onto", "đi lên trên bề mặt", "step onto the platform; put the box onto the shelf"],
      ["out of", "ra khỏi; hết", "out of the room; out of stock"],
      ["beside", "bên cạnh", "beside the building; beside the printer"],
      ["besides", "ngoài ra", "besides the salary; besides, the office is close"],
      ["against", "chống lại; tựa vào; đối đầu", "against the rules; lean against the wall; compete against a rival"],
      ["without", "không có", "without permission; without delay"],
      ["with", "cùng; bằng; có; kèm theo", "with customers; with a pen; with experience; with a receipt"],
      ["of", "của; thành phần; số lượng; thuộc về", "the name of the company; made of wood; a number of people; a member of the team"],
      ["about", "về; khoảng; liên quan", "talk about the plan; about 50 people; information about the product"],
      ["like", "giống như", "work like a professional; look like the original"],
      ["unlike", "không giống", "unlike the previous model; unlike other stores"],
      ["despite", "mặc dù, sau là N/V-ing", "despite the rain; despite being tired"],
      ["according to", "theo", "according to the report; according to company policy"],
      ["because of", "bởi vì", "because of the delay; because of bad weather"],
      ["due to", "do, thường dùng sau to be", "The cancellation was due to the storm."],
      ["instead of", "thay vì", "instead of calling; instead of a refund"],
      ["except", "ngoại trừ", "except Monday; except for managers"],
      ["regarding / concerning", "liên quan đến", "regarding your application; concerning the contract"]
    ].map(([word, meaning, examples]) => ({
      word,
      ipa: "",
      meaning,
      type: "preposition usage",
      example: examples.split("; ")[0] + ".",
      viAnswers: meaning.split("; ").flatMap(item => item.split(", ")).slice(0, 4),
      usage: `Ví dụ: ${examples}`
    }))
  ],
  "Cụm giới từ TOEIC": [
    ...[
      ["in charge of", "phụ trách", "prepositional phrase", "in charge of the project"],
      ["in accordance with", "phù hợp với", "prepositional phrase", "in accordance with company policy"],
      ["according to", "theo", "prepositional phrase", "according to the report"],
      ["because of", "bởi vì", "prepositional phrase", "because of the rain"],
      ["due to", "do", "prepositional phrase", "due to bad weather"],
      ["thanks to", "nhờ", "prepositional phrase", "thanks to technology"],
      ["in addition to", "ngoài ra, thêm vào", "prepositional phrase", "in addition to salary"],
      ["instead of", "thay vì", "prepositional phrase", "instead of calling"],
      ["in front of", "phía trước", "prepositional phrase", "in front of the building"],
      ["in back of", "phía sau", "prepositional phrase", "in back of the office"],
      ["in advance", "trước", "prepositional phrase", "book in advance"],
      ["in case of", "trong trường hợp", "prepositional phrase", "in case of emergency"],
      ["in response to", "để đáp lại", "prepositional phrase", "in response to your request"],
      ["in relation to", "liên quan", "prepositional phrase", "in relation to the contract"],
      ["in spite of", "mặc dù", "prepositional phrase", "in spite of the delay"],
      ["in terms of", "về mặt", "prepositional phrase", "in terms of quality"],
      ["with regard to", "liên quan", "prepositional phrase", "with regard to your application"],
      ["in favor of", "ủng hộ", "prepositional phrase", "in favor of the proposal"],
      ["on behalf of", "thay mặt", "prepositional phrase", "on behalf of the manager"],
      ["on time", "đúng giờ", "prepositional phrase", "arrive on time"],
      ["in time", "kịp lúc", "prepositional phrase", "arrive in time for the meeting"],
      ["at least", "ít nhất", "prepositional phrase", "at least ten people"],
      ["at most", "nhiều nhất", "prepositional phrase", "at most five days"],
      ["by mistake", "nhầm", "prepositional phrase", "send the file by mistake"],
      ["on purpose", "cố ý", "prepositional phrase", "delete the file on purpose"],
      ["at once", "ngay lập tức", "prepositional phrase", "reply at once"],
      ["at first", "lúc đầu", "prepositional phrase", "at first, the process seemed difficult"],
      ["for example", "ví dụ", "prepositional phrase", "for example, online orders increased"],
      ["as a result of", "do", "prepositional phrase", "as a result of the delay"],
      ["in contrast to", "trái ngược", "prepositional phrase", "in contrast to last year"],
      ["in place of", "thay thế", "prepositional phrase", "use email in place of paper forms"],
      ["with the exception of", "ngoại trừ", "prepositional phrase", "with the exception of managers"],
      ["free of charge", "miễn phí", "prepositional phrase", "available free of charge"],
      ["out of stock", "hết hàng", "prepositional phrase", "the item is out of stock"],
      ["on sale", "giảm giá", "prepositional phrase", "the product is on sale"],
      ["in stock", "còn hàng", "prepositional phrase", "the model is in stock"],
      ["by hand", "bằng tay", "prepositional phrase", "fill out the form by hand"],
      ["by email", "qua email", "prepositional phrase", "send the invoice by email"],
      ["by phone", "qua điện thoại", "prepositional phrase", "confirm the booking by phone"],
      ["by means of", "bằng cách", "prepositional phrase", "by means of online advertising"],
      ["on schedule", "đúng tiến độ", "prepositional phrase", "finish on schedule"]
    ].map(([word, meaning, type, example]) => ({
      word,
      ipa: "",
      meaning,
      type,
      example: example.charAt(0).toUpperCase() + example.slice(1) + ".",
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `${type}: ${word}`
    }))
  ],
  "Động từ + Giới từ TOEIC": [
    ...[
      ["agree with", "đồng ý với người/ý kiến", "verb + preposition", "agree with the manager"],
      ["agree to", "đồng ý với đề nghị/kế hoạch", "verb + preposition", "agree to the terms"],
      ["agree on", "thống nhất về", "verb + preposition", "agree on a price"],
      ["apply for", "nộp đơn xin", "verb + preposition", "apply for a position"],
      ["apply to", "áp dụng cho", "verb + preposition", "apply to all customers"],
      ["approve of", "tán thành", "verb + preposition", "approve of the proposal"],
      ["ask for", "yêu cầu, hỏi xin", "verb + preposition", "ask for assistance"],
      ["belong to", "thuộc về", "verb + preposition", "belong to the company"],
      ["borrow from", "mượn từ", "verb + preposition", "borrow from a colleague"],
      ["care about", "quan tâm", "verb + preposition", "care about quality"],
      ["complain about", "phàn nàn về", "verb + preposition", "complain about the service"],
      ["consist of", "bao gồm", "verb + preposition", "consist of three parts"],
      ["contribute to", "đóng góp", "verb + preposition", "contribute to the project"],
      ["deal with", "xử lý", "verb + preposition", "deal with complaints"],
      ["depend on", "phụ thuộc", "verb + preposition", "depend on the results"],
      ["differ from", "khác", "verb + preposition", "differ from the original plan"],
      ["focus on", "tập trung", "verb + preposition", "focus on customer needs"],
      ["graduate from", "tốt nghiệp", "verb + preposition", "graduate from university"],
      ["hear about", "nghe về", "verb + preposition", "hear about the new policy"],
      ["insist on", "khăng khăng", "verb + preposition", "insist on checking the details"],
      ["listen to", "nghe", "verb + preposition", "listen to the instructions"],
      ["look after", "chăm sóc", "verb + preposition", "look after the equipment"],
      ["look at", "nhìn, xem xét", "verb + preposition", "look at the chart"],
      ["look for", "tìm", "verb + preposition", "look for a solution"],
      ["look into", "điều tra", "verb + preposition", "look into the issue"],
      ["participate in", "tham gia", "verb + preposition", "participate in training"],
      ["pay for", "trả tiền", "verb + preposition", "pay for the service"],
      ["prepare for", "chuẩn bị", "verb + preposition", "prepare for the meeting"],
      ["recover from", "hồi phục", "verb + preposition", "recover from the delay"],
      ["refer to", "đề cập", "verb + preposition", "refer to the manual"],
      ["rely on", "dựa vào", "verb + preposition", "rely on the team"],
      ["respond to", "phản hồi", "verb + preposition", "respond to a request"],
      ["search for", "tìm kiếm", "verb + preposition", "search for information"],
      ["speak to", "nói với", "verb + preposition", "speak to the supervisor"],
      ["specialize in", "chuyên về", "verb + preposition", "specialize in accounting"],
      ["succeed in", "thành công", "verb + preposition", "succeed in reducing costs"],
      ["suffer from", "chịu đựng, chịu ảnh hưởng", "verb + preposition", "suffer from delays"],
      ["talk about", "nói về", "verb + preposition", "talk about the schedule"],
      ["think about", "nghĩ về", "verb + preposition", "think about the offer"],
      ["wait for", "chờ", "verb + preposition", "wait for approval"],
      ["work for", "làm việc cho", "verb + preposition", "work for a local company"],
      ["work with", "làm việc cùng", "verb + preposition", "work with international clients"]
    ].map(([word, meaning, type, example]) => ({
      word,
      ipa: "",
      meaning,
      type,
      example: example.charAt(0).toUpperCase() + example.slice(1) + ".",
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Lưu ý TOEIC: ${word}`
    }))
  ],
  "Tính từ + Giới từ TOEIC": [
    ...[
      ["afraid of", "sợ", "adjective + preposition", "afraid of making mistakes"],
      ["aware of", "nhận thức được", "adjective + preposition", "aware of the issue"],
      ["capable of", "có khả năng", "adjective + preposition", "capable of handling tasks"],
      ["certain of", "chắc chắn về", "adjective + preposition", "certain of success"],
      ["confident of", "tự tin về", "adjective + preposition", "confident of winning the contract"],
      ["conscious of", "ý thức được", "adjective + preposition", "conscious of safety rules"],
      ["proud of", "tự hào về", "adjective + preposition", "proud of the team"],
      ["tired of", "mệt mỏi vì", "adjective + preposition", "tired of waiting"],
      ["fond of", "thích", "adjective + preposition", "fond of classical music"],
      ["full of", "đầy", "adjective + preposition", "full of useful information"],
      ["independent of", "độc lập với", "adjective + preposition", "independent of outside funding"],
      ["responsible for", "chịu trách nhiệm", "adjective + preposition", "responsible for hiring"],
      ["suitable for", "phù hợp", "adjective + preposition", "suitable for beginners"],
      ["famous for", "nổi tiếng vì", "adjective + preposition", "famous for quality"],
      ["eligible for", "đủ điều kiện", "adjective + preposition", "eligible for a refund"],
      ["available for", "có sẵn cho", "adjective + preposition", "available for consultation"],
      ["prepared for", "đã chuẩn bị cho", "adjective + preposition", "prepared for the interview"],
      ["ready for", "sẵn sàng cho", "adjective + preposition", "ready for the meeting"],
      ["necessary for", "cần thiết cho", "adjective + preposition", "necessary for approval"],
      ["good at", "giỏi về", "adjective + preposition", "good at solving problems"],
      ["bad at", "kém về", "adjective + preposition", "bad at time management"],
      ["excellent at", "xuất sắc về", "adjective + preposition", "excellent at customer service"],
      ["surprised at", "ngạc nhiên về", "adjective + preposition", "surprised at the result"],
      ["angry at", "tức giận về/với", "adjective + preposition", "angry at the delay"],
      ["disappointed in", "thất vọng về", "adjective + preposition", "disappointed in the service"],
      ["interested in", "quan tâm đến", "adjective + preposition", "interested in marketing"],
      ["experienced in", "có kinh nghiệm trong", "adjective + preposition", "experienced in sales"],
      ["involved in", "liên quan/tham gia vào", "adjective + preposition", "involved in the project"],
      ["successful in", "thành công trong", "adjective + preposition", "successful in reducing costs"],
      ["rich in", "giàu/có nhiều", "adjective + preposition", "rich in detail"],
      ["different from", "khác với", "adjective + preposition", "different from the old model"],
      ["separate from", "tách biệt khỏi", "adjective + preposition", "separate from other files"],
      ["absent from", "vắng mặt khỏi", "adjective + preposition", "absent from work"],
      ["similar to", "tương tự", "adjective + preposition", "similar to the previous version"],
      ["close to", "gần với", "adjective + preposition", "close to the station"],
      ["equal to", "bằng với", "adjective + preposition", "equal to the task"],
      ["familiar with", "quen thuộc với", "adjective + preposition", "familiar with the software"],
      ["satisfied with", "hài lòng với", "adjective + preposition", "satisfied with the results"],
      ["pleased with", "hài lòng với", "adjective + preposition", "pleased with the service"],
      ["crowded with", "đông/ngập đầy", "adjective + preposition", "crowded with visitors"],
      ["popular with", "phổ biến với", "adjective + preposition", "popular with customers"],
      ["concerned about", "lo lắng/quan tâm về", "adjective + preposition", "concerned about costs"],
      ["worried about", "lo lắng về", "adjective + preposition", "worried about delays"],
      ["excited about", "hào hứng về", "adjective + preposition", "excited about the launch"]
    ].map(([word, meaning, type, example]) => ({
      word,
      ipa: "",
      meaning,
      type,
      example: example.charAt(0).toUpperCase() + example.slice(1) + ".",
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Lưu ý TOEIC: ${word}`
    }))
  ],
  "Cụm TOEIC nên thuộc": [
    ...[
      ["responsible for", "chịu trách nhiệm", "must-know TOEIC phrase", "responsible for the sales report"],
      ["participate in", "tham gia", "must-know TOEIC phrase", "participate in training"],
      ["depend on", "phụ thuộc", "must-know TOEIC phrase", "depend on the schedule"],
      ["apply for", "nộp đơn", "must-know TOEIC phrase", "apply for a job"],
      ["apply to", "áp dụng", "must-know TOEIC phrase", "apply to all purchases"],
      ["contribute to", "đóng góp", "must-know TOEIC phrase", "contribute to success"],
      ["comply with", "tuân thủ", "must-know TOEIC phrase", "comply with regulations"],
      ["deal with", "xử lý", "must-know TOEIC phrase", "deal with a problem"],
      ["focus on", "tập trung", "must-know TOEIC phrase", "focus on quality"],
      ["specialize in", "chuyên về", "must-know TOEIC phrase", "specialize in finance"],
      ["refer to", "đề cập", "must-know TOEIC phrase", "refer to the manual"],
      ["respond to", "phản hồi", "must-know TOEIC phrase", "respond to a request"],
      ["belong to", "thuộc về", "must-know TOEIC phrase", "belong to the company"],
      ["consist of", "bao gồm", "must-know TOEIC phrase", "consist of three sections"],
      ["succeed in", "thành công", "must-know TOEIC phrase", "succeed in business"],
      ["prepare for", "chuẩn bị", "must-know TOEIC phrase", "prepare for the interview"],
      ["wait for", "chờ", "must-know TOEIC phrase", "wait for confirmation"],
      ["look for", "tìm kiếm", "must-know TOEIC phrase", "look for information"],
      ["search for", "tìm", "must-know TOEIC phrase", "search for a solution"],
      ["work for", "làm việc cho", "must-know TOEIC phrase", "work for a manufacturer"],
      ["work with", "làm việc cùng", "must-know TOEIC phrase", "work with clients"],
      ["famous for", "nổi tiếng vì", "must-know TOEIC phrase", "famous for service"],
      ["suitable for", "phù hợp", "must-know TOEIC phrase", "suitable for beginners"],
      ["eligible for", "đủ điều kiện", "must-know TOEIC phrase", "eligible for a discount"],
      ["available for", "có sẵn cho", "must-know TOEIC phrase", "available for meetings"],
      ["familiar with", "quen thuộc với", "must-know TOEIC phrase", "familiar with accounting software"],
      ["satisfied with", "hài lòng với", "must-know TOEIC phrase", "satisfied with the service"],
      ["interested in", "quan tâm đến", "must-know TOEIC phrase", "interested in the position"],
      ["different from", "khác với", "must-know TOEIC phrase", "different from the sample"],
      ["similar to", "tương tự", "must-know TOEIC phrase", "similar to the original"],
      ["good at", "giỏi về", "must-know TOEIC phrase", "good at negotiation"]
    ].map(([word, meaning, type, example]) => ({
      word,
      ipa: "",
      meaning,
      type,
      example: example.charAt(0).toUpperCase() + example.slice(1) + ".",
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Nên thuộc: ${word}`
    }))
  ],
  "Cấu trúc dễ nhầm TOEIC": [
    ...[
      ["discuss + N", "thảo luận về, không dùng discuss about", "verb + object", "They discussed the new policy."],
      ["enter + N", "vào, không dùng enter into khi chỉ đi vào nơi chốn", "verb + object", "Please enter the building through the main door."],
      ["approach + N", "tiếp cận, đến gần, không dùng approach to", "verb + object", "The manager approached the customer politely."],
      ["reach + N", "đạt tới, liên hệ, không dùng reach to", "verb + object", "We reached an agreement yesterday."],
      ["marry + N", "kết hôn với, không dùng marry with", "verb + object", "She married a colleague from another branch."]
    ].map(([word, meaning, type, example]) => ({
      word,
      ipa: "",
      meaning,
      type,
      example,
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Bẫy TOEIC: ${word}`
    }))
  ],
  "Cấu trúc nên nhớ hay hỏi": [
    ...[
      ["result in + N", "dẫn đến", "verb + preposition", "The delay resulted in extra costs."],
      ["result from + N", "bắt nguồn từ", "verb + preposition", "The problem resulted from poor planning."],
      ["lead to + N", "dẫn đến", "verb + preposition", "Better training can lead to higher productivity."],
      ["contribute to + N/V-ing", "góp phần vào", "verb + preposition", "The new policy contributed to improving safety."],
      ["object to + N/V-ing", "phản đối", "verb + preposition", "Several employees objected to working overtime."],
      ["look forward to + N/V-ing", "mong chờ", "verb phrase + preposition", "We look forward to receiving your reply."],
      ["be accustomed to + N/V-ing", "quen với", "adjective + preposition", "She is accustomed to working under pressure."],
      ["be committed to + N/V-ing", "cam kết", "adjective + preposition", "The company is committed to reducing waste."],
      ["respond to + N", "phản hồi", "verb + preposition", "Please respond to the email by Friday."],
      ["refer to + N", "đề cập", "verb + preposition", "The report refers to recent market changes."],
      ["relate to + N", "liên quan", "verb + preposition", "The question relates to customer service."],
      ["belong to + N", "thuộc về", "verb + preposition", "This file belongs to the finance department."],
      ["apply for + N", "ứng tuyển", "verb + preposition", "She applied for the marketing position."],
      ["apply to + N", "áp dụng cho", "verb + preposition", "The discount applies to online orders."],
      ["comply with + N", "tuân thủ", "verb + preposition", "All staff must comply with safety rules."],
      ["deal with + N", "xử lý", "verb + preposition", "The manager deals with customer complaints."],
      ["cope with + N", "đối phó", "verb + preposition", "The team coped with the heavy workload."],
      ["consist of + N", "bao gồm", "verb + preposition", "The package consists of three documents."],
      ["participate in + N/V-ing", "tham gia", "verb + preposition", "Employees participated in planning the event."],
      ["specialize in + N/V-ing", "chuyên về", "verb + preposition", "The firm specializes in developing business software."],
      ["approve of + N/V-ing", "tán thành", "verb + preposition", "The board approved of expanding the program."]
    ].map(([word, meaning, type, example]) => ({
      word,
      ipa: "",
      meaning,
      type,
      example,
      viAnswers: meaning.split(", ").flatMap(item => item.split("/")),
      usage: `Ghi nhớ: ${word}`
    }))
  ],
  "Động từ bất quy tắc": [
    ...[
      ["be", "been", "irregular verb V3", "The order has been confirmed.", "be -> been"],
      ["become", "become", "irregular verb V3", "The process has become easier.", "become -> become"],
      ["begin", "begun", "irregular verb V3", "The meeting has begun.", "begin -> begun"],
      ["bring", "brought", "irregular verb V3", "She has brought the documents.", "bring -> brought"],
      ["build", "built", "irregular verb V3", "The company has built a new warehouse.", "build -> built"],
      ["buy", "bought", "irregular verb V3", "We have bought new equipment.", "buy -> bought"],
      ["choose", "chosen", "irregular verb V3", "They have chosen a new supplier.", "choose -> chosen"],
      ["come", "come", "irregular verb V3", "The package has come earlier than expected.", "come -> come"],
      ["do", "done", "irregular verb V3", "The work has been done carefully.", "do -> done"],
      ["find", "found", "irregular verb V3", "We have found a better solution.", "find -> found"],
      ["get", "got/gotten", "irregular verb V3", "The team has got approval for the plan.", "get -> got/gotten"],
      ["give", "given", "irregular verb V3", "The manager has given clear instructions.", "give -> given"],
      ["go", "gone", "irregular verb V3", "The director has gone to the branch office.", "go -> gone"],
      ["have", "had", "irregular verb V3", "We have had several meetings this week.", "have -> had"],
      ["keep", "kept", "irregular verb V3", "She has kept all the receipts.", "keep -> kept"],
      ["know", "known", "irregular verb V3", "This brand is known for reliable service.", "know -> known"],
      ["leave", "left", "irregular verb V3", "He has left a message for you.", "leave -> left"],
      ["make", "made", "irregular verb V3", "The decision has been made.", "make -> made"],
      ["meet", "met", "irregular verb V3", "I have met the new supervisor.", "meet -> met"],
      ["pay", "paid", "irregular verb V3", "The invoice has been paid.", "pay -> paid"],
      ["put", "put", "irregular verb V3", "The files have been put on the desk.", "put -> put"],
      ["read", "read", "irregular verb V3", "She has read the report.", "read -> read"],
      ["say", "said", "irregular verb V3", "The client has said yes to the offer.", "say -> said"],
      ["see", "seen", "irregular verb V3", "Have you seen the latest schedule?", "see -> seen"],
      ["sell", "sold", "irregular verb V3", "The product has sold well this month.", "sell -> sold"],
      ["send", "sent", "irregular verb V3", "The email has been sent.", "send -> sent"],
      ["set", "set", "irregular verb V3", "The deadline has been set for Friday.", "set -> set"],
      ["show", "shown", "irregular verb V3", "The results have shown steady growth.", "show -> shown"],
      ["speak", "spoken", "irregular verb V3", "We have spoken to the supplier.", "speak -> spoken"],
      ["spend", "spent", "irregular verb V3", "The company has spent more on training.", "spend -> spent"],
      ["take", "taken", "irregular verb V3", "The files have been taken to the office.", "take -> taken"],
      ["tell", "told", "irregular verb V3", "She has told us about the change.", "tell -> told"],
      ["think", "thought", "irregular verb V3", "We have thought about your proposal.", "think -> thought"],
      ["understand", "understood", "irregular verb V3", "The instructions have been understood.", "understand -> understood"],
      ["write", "written", "irregular verb V3", "The report has been written.", "write -> written"]
    ].map(([word, meaning, type, example, usage]) => ({
      word,
      ipa: "",
      meaning,
      type,
      example,
      viAnswers: meaning.split("/"),
      usage
    }))
  ]
};

TOPICS_DATA["Tổng hợp giới từ & cụm TOEIC"] = [
  ...TOPICS_DATA["Giới từ chi tiết TOEIC"],
  ...TOPICS_DATA["Cụm giới từ TOEIC"],
  ...TOPICS_DATA["Động từ + Giới từ TOEIC"],
  ...TOPICS_DATA["Tính từ + Giới từ TOEIC"],
  ...TOPICS_DATA["Cụm TOEIC nên thuộc"],
  ...TOPICS_DATA["Cấu trúc nên nhớ hay hỏi"],
  ...TOPICS_DATA["Cấu trúc dễ nhầm TOEIC"]
];
