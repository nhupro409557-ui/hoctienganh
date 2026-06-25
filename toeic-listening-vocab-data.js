const TOEIC_LISTENING_VOCAB = [
  {
    id: "part1",
    part: "Part 1",
    title: "Mô tả tranh",
    focus: "Hành động của người, trạng thái của vật, vị trí, bối cảnh trong bức ảnh.",
    grammar: {
      overview: "TOEIC Listening Part 1 gồm 6 câu hỏi miêu tả tranh vẽ. Bạn sẽ xem một bức tranh, nghe 4 câu mô tả A, B, C, D và chọn câu miêu tả đúng nhất. Tranh thường chia thành hai loại: tranh có người (chiếm đa số) và tranh chỉ có vật/cảnh quan.",
      structures: [
        {
          title: "Hiện tại tiếp diễn (Chủ động - Hành động người)",
          formula: "S + am/is/are + V-ing + O",
          example: "A man is leaning against the railing. (Một người đàn ông đang dựa vào lan can.)",
          explanation: "Dùng để mô tả hành động đang xảy ra của người trong tranh tại thời điểm chụp ảnh."
        },
        {
          title: "Bị động của Hiện tại tiếp diễn (Hành động tác động lên vật)",
          formula: "S + am/is/are + being + V3/ed",
          example: "The documents are being printed. (Tài liệu đang được in.)",
          explanation: "Diễn tả hành động đang tác động lên một vật thể. Cực kỳ lưu ý: Tranh phải có người đang thực hiện hành động đó thì câu này mới đúng."
        },
        {
          title: "Bị động của Hiện tại đơn / Hiện tại hoàn thành (Trạng thái tĩnh của vật)",
          formula: "S + am/is/are + V3/ed  HOẶC  S + have/has + been + V3/ed",
          example: "Some chairs are stacked in the corner. (Một số chiếc ghế được xếp chồng ở trong góc.)",
          explanation: "Mô tả trạng thái của đồ vật sau khi hành động đã hoàn thành, không quan trọng có sự xuất hiện của người hay không."
        },
        {
          title: "Cấu trúc giới từ chỉ vị trí và tư thế",
          formula: "S + is/are + Giới từ + Noun",
          example: "A ladder is leaning against the wall. (Một chiếc thang đang tựa vào bức tường.)",
          explanation: "Các giới từ vị trí quan trọng: against (tựa vào), next to (bên cạnh), between (ở giữa 2 vật), among (giữa nhiều vật), along (dọc theo), under (ở dưới), on top of (trên đỉnh)."
        }
      ],
      traps: [
        {
          name: "Bẫy từ 'BEING' (Bị động tiếp diễn)",
          description: "Phương án sử dụng cấu trúc 'being + V3/ed' để tả hành động tác động lên vật, nhưng trong tranh hoàn toàn không có người nào đang thực hiện hành động đó.",
          example: "Tranh vẽ một chiếc ô tô đỗ bên đường trống không, phương án đọc: 'A car is being parked.' -> SAI vì không có người lái xe.",
          tip: "Nếu tranh không có người, lập tức LOẠI BỎ các câu chứa 'being' (Ngoại lệ duy nhất: 'is/are being displayed' - đang được trưng bày, có thể đúng khi nói về trạng thái tĩnh của sản phẩm hàng hóa)."
        },
        {
          name: "Bẫy từ phát âm gần giống (Homophones / Sound-alike)",
          description: "Sử dụng các từ có phát âm tương tự các từ liên quan đến tranh để đánh lừa tai người nghe.",
          example: "Tranh có người đi bộ trên đường (walk), phương án đọc: 'They are working in the office.' -> Nhầm lẫn giữa 'walk' và 'work'.",
          tip: "Tập trung nghe rõ âm đuôi (ending sounds) và xem xét nghĩa của cả câu xem có phù hợp với ngữ cảnh thực tế của bức tranh hay không."
        },
        {
          name: "Bẫy sai đối tượng hoặc sai vị trí",
          description: "Câu mô tả dùng đúng động từ hành động trong tranh nhưng lại ghép sai chủ ngữ hoặc sai vị trí địa lý của đồ vật.",
          example: "Người phụ nữ đang mở cửa tủ. Phương án đọc: 'The woman is opening the window.' -> Sai đối tượng 'window'.",
          tip: "Một phương án đúng phải đúng 100% tất cả các phần: Chủ ngữ + Động từ + Tân ngữ + Trạng từ chỉ vị trí."
        }
      ],
      tips: [
        "Xem kỹ tranh trước khi nghe (khoảng 5 giây): Xác định tranh có người hay chỉ có vật, hành động nổi bật là gì, đồ vật phân bố ra sao.",
        "Sử dụng đầu bút chì: Đặt bút chì vào câu A, B, C, D trên tờ đề. Nếu nghe thấy câu sai rõ ràng, hãy loại trừ ngay. Nếu phân vân, giữ nguyên bút chì ở đó.",
        "Tranh chỉ có vật: Chú ý đến các động từ trạng thái như: 'be parked' (đỗ xe), 'be displayed' (trưng bày), 'be stacked' (xếp chồng), 'be hanging' (treo)."
      ]
    },
        sets: [
      {
        name: "Con người & Đi lại",
        words: [
          { word: "man", ipa: "/mæn/", meaning: "đàn ông", type: "noun", example: "A man is walking in the park.", viAnswers: ["đàn ông"] },
          { word: "woman", ipa: "/ˈwʊmən/", meaning: "phụ nữ", type: "noun", example: "A woman is reading a book.", viAnswers: ["phụ nữ"] },
          { word: "person", ipa: "/ˈpɜːsn/", meaning: "người", type: "noun", example: "One person is standing near the table.", viAnswers: ["người"] },
          { word: "people", ipa: "/ˈpiːpl/", meaning: "mọi người", type: "noun", example: "People are gathered in the room.", viAnswers: ["mọi người"] },
          { word: "customer", ipa: "/ˈkʌstəmər/", meaning: "khách hàng", type: "noun", example: "A customer is paying for the items.", viAnswers: ["khách hàng"] },
          { word: "employee", ipa: "/ɪmˈplɔɪiː/", meaning: "nhân viên", type: "noun", example: "An employee is working at the desk.", viAnswers: ["nhân viên"] },
          { word: "worker", ipa: "/ˈwɜːkər/", meaning: "công nhân", type: "noun", example: "Workers are building a wall.", viAnswers: ["công nhân"] },
          { word: "passenger", ipa: "/ˈpæsɪndʒər/", meaning: "hành khách", type: "noun", example: "Passengers are boarding the bus.", viAnswers: ["hành khách"] },
          { word: "pedestrian", ipa: "/pəˈdestriən/", meaning: "người đi bộ", type: "noun", example: "Pedestrians are crossing the street.", viAnswers: ["người đi bộ"] },
          { word: "driver", ipa: "/ˈdraɪvər/", meaning: "tài xế", type: "noun", example: "The driver is sitting in the car.", viAnswers: ["tài xế"] },
          { word: "cyclist", ipa: "/ˈsaɪklɪst/", meaning: "người đi xe đạp", type: "noun", example: "A cyclist is riding on the path.", viAnswers: ["người đi xe đạp", "xe đạp"] },
          { word: "group", ipa: "/ɡruːp/", meaning: "nhóm", type: "noun", example: "A group of people is standing outside.", viAnswers: ["nhóm"] },
          { word: "couple", ipa: "/ˈkʌpl/", meaning: "cặp đôi", type: "noun", example: "A couple is sitting on the bench.", viAnswers: ["cặp đôi"] },
          { word: "walk", ipa: "/wɔːk/", meaning: "đi bộ", type: "verb", example: "They are walking along the sidewalk.", viAnswers: ["đi bộ"] },
          { word: "run", ipa: "/rʌn/", meaning: "chạy", type: "verb", example: "A runner is running on the track.", viAnswers: ["chạy"] }
        ]
      },
      {
        name: "Tư thế & Động tác cơ bản",
        words: [
          { word: "stand", ipa: "/stænd/", meaning: "đứng", type: "verb", example: "A man is standing next to the vehicle.", viAnswers: ["đứng"] },
          { word: "sit", ipa: "/sɪt/", meaning: "ngồi", type: "verb", example: "She is sitting at the computer.", viAnswers: ["ngồi"] },
          { word: "climb", ipa: "/klaɪm/", meaning: "leo, trèo", type: "verb", example: "A worker is climbing a ladder.", viAnswers: ["leo", "trèo"] },
          { word: "bend", ipa: "/bend/", meaning: "cúi, gập người", type: "verb", example: "He is bending over the table.", viAnswers: ["cúi", "gập người"] },
          { word: "kneel", ipa: "/niːl/", meaning: "quỳ gối", type: "verb", example: "A man is kneeling on the floor.", viAnswers: ["quỳ", "quỳ gối"] },
          { word: "lean", ipa: "/liːn/", meaning: "dựa, tựa", type: "verb", example: "She is leaning against the railing.", viAnswers: ["dựa", "tựa"] },
          { word: "reach", ipa: "/riːtʃ/", meaning: "với tới", type: "verb", example: "A woman is reaching for a shelf.", viAnswers: ["với tới"] },
          { word: "hold", ipa: "/hoʊld/", meaning: "cầm, nắm", type: "verb", example: "He is holding a cup of coffee.", viAnswers: ["cầm", "nắm"] },
          { word: "carry", ipa: "/ˈkæri/", meaning: "mang, vác, xách", type: "verb", example: "She is carrying a briefcase.", viAnswers: ["mang", "vác", "xách"] },
          { word: "lift", ipa: "/lɪft/", meaning: "nhấc lên", type: "verb", example: "A man is lifting a box.", viAnswers: ["nhấc lên", "nhấc"] },
          { word: "push", ipa: "/pʊʃ/", meaning: "đẩy", type: "verb", example: "He is pushing a shopping cart.", viAnswers: ["đẩy"] },
          { word: "pull", ipa: "/pʊl/", meaning: "kéo", type: "verb", example: "She is pulling a suitcase.", viAnswers: ["kéo"] },
          { word: "open", ipa: "/ˈoʊpən/", meaning: "mở", type: "verb", example: "A man is opening a door.", viAnswers: ["mở"] },
          { word: "close", ipa: "/kloʊz/", meaning: "đóng", type: "verb", example: "The store is closed for the day.", viAnswers: ["đóng"] },
          { word: "smile", ipa: "/smaɪl/", meaning: "mỉm cười", type: "verb", example: "They are smiling at each other.", viAnswers: ["mỉm cười"] }
        ]
      },
      {
        name: "Quan sát & Làm việc",
        words: [
          { word: "look at", ipa: "/lʊk æt/", meaning: "nhìn vào", type: "verb", example: "They are looking at the screen.", viAnswers: ["nhìn vào", "nhìn"] },
          { word: "watch", ipa: "/wɑːtʃ/", meaning: "quan sát, xem", type: "verb", example: "She is watching a performance.", viAnswers: ["quan sát", "xem"] },
          { word: "read", ipa: "/riːd/", meaning: "đọc", type: "verb", example: "He is reading a document.", viAnswers: ["đọc"] },
          { word: "write", ipa: "/raɪt/", meaning: "viết", type: "verb", example: "A woman is writing on a notepad.", viAnswers: ["viết"] },
          { word: "type", ipa: "/taɪp/", meaning: "gõ bàn phím", type: "verb", example: "She is typing on a keyboard.", viAnswers: ["gõ bàn phím", "gõ"] },
          { word: "use", ipa: "/juːz/", meaning: "sử dụng", type: "verb", example: "He is using some office equipment.", viAnswers: ["sử dụng", "dùng"] },
          { word: "operate", ipa: "/ˈɒpəreɪt/", meaning: "vận hành, sử dụng máy", type: "verb", example: "The operator is operating a machine.", viAnswers: ["vận hành", "sử dụng"] },
          { word: "repair", ipa: "/rɪˈpeər/", meaning: "sửa chữa", type: "verb", example: "A technician is repairing a copier.", viAnswers: ["sửa", "sửa chữa"] },
          { word: "clean", ipa: "/kliːn/", meaning: "lau dọn, làm sạch", type: "verb", example: "She is cleaning the window.", viAnswers: ["lau dọn", "lau chùi", "dọn dẹp"] },
          { word: "wash", ipa: "/wɒtʃ/", meaning: "rửa", type: "verb", example: "A man is washing his hands.", viAnswers: ["rửa"] },
          { word: "paint", ipa: "/peɪnt/", meaning: "sơn", type: "verb", example: "He is painting the wall.", viAnswers: ["sơn"] },
          { word: "cook", ipa: "/kʊk/", meaning: "nấu ăn", type: "verb", example: "The chef is cooking a meal.", viAnswers: ["nấu", "nấu ăn"] },
          { word: "serve", ipa: "/sɜːv/", meaning: "phục vụ", type: "verb", example: "A waiter is serving food.", viAnswers: ["phục vụ"] },
          { word: "pour", ipa: "/pɔːr/", meaning: "rót, đổ nước", type: "verb", example: "He is pouring coffee into a cup.", viAnswers: ["rót", "đổ"] },
          { word: "cut", ipa: "/kʌt/", meaning: "cắt", type: "verb", example: "She is cutting some paper.", viAnswers: ["cắt"] }
        ]
      },
      {
        name: "Ăn uống & Bị động Phổ biến",
        words: [
          { word: "eat", ipa: "/iːt/", meaning: "ăn", type: "verb", example: "They are eating lunch.", viAnswers: ["ăn"] },
          { word: "drink", ipa: "/drɪŋk/", meaning: "uống", type: "verb", example: "She is drinking water from a bottle.", viAnswers: ["uống"] },
          { word: "point", ipa: "/pɔɪnt/", meaning: "chỉ vào", type: "verb", example: "A man is pointing at a chart.", viAnswers: ["chỉ vào", "chỉ"] },
          { word: "shake hands", ipa: "/ʃeɪk hændz/", meaning: "bắt tay", type: "phrase", example: "They are shaking hands.", viAnswers: ["bắt tay"] },
          { word: "parked", ipa: "/pɑːkt/", meaning: "được đỗ (xe)", type: "verb/adj", example: "Cars are parked along the street.", viAnswers: ["được đỗ", "đỗ xe"] },
          { word: "displayed", ipa: "/dɪˈspleɪd/", meaning: "được trưng bày", type: "verb/adj", example: "Merchandise is displayed in the window.", viAnswers: ["được trưng bày", "trưng bày"] },
          { word: "arranged", ipa: "/əˈreɪndʒd/", meaning: "được sắp xếp", type: "verb/adj", example: "Chairs are arranged in a circle.", viAnswers: ["được sắp xếp", "sắp xếp"] },
          { word: "stacked", ipa: "/stækt/", meaning: "được xếp chồng", type: "verb/adj", example: "Boxes are stacked on the floor.", viAnswers: ["được xếp chồng", "xếp chồng"] },
          { word: "placed", ipa: "/pleɪst/", meaning: "được đặt, để", type: "verb/adj", example: "A laptop is placed on the desk.", viAnswers: ["được đặt", "được để"] },
          { word: "lined", ipa: "/laɪnd/", meaning: "được xếp thành hàng", type: "verb/adj", example: "Shoes are lined up on the shelf.", viAnswers: ["xếp hàng", "được xếp hàng"] },
          { word: "covered", ipa: "/ˈkʌvərd/", meaning: "được bao phủ", type: "verb/adj", example: "The table is covered with a cloth.", viAnswers: ["được bao phủ", "bao phủ"] },
          { word: "attached", ipa: "/əˈtætʃt/", meaning: "được gắn, đính kèm", type: "verb/adj", example: "A notice is attached to the wall.", viAnswers: ["được gắn", "gắn"] },
          { word: "hung", ipa: "/hʌŋ/", meaning: "được treo", type: "verb/adj", example: "Pictures are hung in a row.", viAnswers: ["được treo", "treo"] },
          { word: "folded", ipa: "/ˈfoʊldɪd/", meaning: "được gấp, xếp", type: "verb/adj", example: "Clothes are folded on the bed.", viAnswers: ["được gấp", "gấp"] },
          { word: "loaded", ipa: "/ˈloʊdɪd/", meaning: "được chất lên (xe)", type: "verb/adj", example: "Boxes are loaded onto the truck.", viAnswers: ["chất lên", "được chất lên"] }
        ]
      },
      {
        name: "Giới từ chỉ vị trí - Nhóm 1",
        words: [
          { word: "in", ipa: "/ɪn/", meaning: "trong, ở trong", type: "preposition", example: "The keys are in the box.", viAnswers: ["trong", "ở trong"] },
          { word: "on", ipa: "/ɒn/", meaning: "trên, ở trên", type: "preposition", example: "A cup is on the table.", viAnswers: ["trên", "ở trên"] },
          { word: "at", ipa: "/æt/", meaning: "tại, ở tại", type: "preposition", example: "He is standing at the door.", viAnswers: ["tại", "ở tại"] },
          { word: "above", ipa: "/əˈbʌv/", meaning: "phía trên (không chạm)", type: "preposition", example: "A lamp hangs above the table.", viAnswers: ["phía trên", "ở trên"] },
          { word: "below", ipa: "/bɪˈloʊ/", meaning: "phía dưới", type: "preposition", example: "The shoes are below the shelf.", viAnswers: ["phía dưới", "bên dưới"] },
          { word: "under", ipa: "/ˈʌndər/", meaning: "bên dưới, dưới gầm", type: "preposition", example: "A cat is sleeping under the chair.", viAnswers: ["dưới", "bên dưới"] },
          { word: "over", ipa: "/ˈoʊvər/", meaning: "phía trên, vượt qua", type: "preposition", example: "A bridge goes over the river.", viAnswers: ["phía trên", "vượt qua"] },
          { word: "behind", ipa: "/bɪˈhaɪnd/", meaning: "phía sau, đằng sau", type: "preposition", example: "The parking lot is behind the building.", viAnswers: ["phía sau", "đằng sau"] },
          { word: "in front of", ipa: "/ɪn frʌnt ɒv/", meaning: "phía trước, đằng trước", type: "preposition", example: "A car is parked in front of the house.", viAnswers: ["phía trước", "đằng trước"] },
          { word: "beside", ipa: "/bɪˈsaɪd/", meaning: "bên cạnh", type: "preposition", example: "She is standing beside her desk.", viAnswers: ["bên cạnh"] },
          { word: "next to", ipa: "/nekst tuː/", meaning: "kế bên, sát bên", type: "preposition", example: "The printer is next to the computer.", viAnswers: ["kế bên", "sát bên"] },
          { word: "between", ipa: "/bɪˈtwiːn/", meaning: "ở giữa (hai vật)", type: "preposition", example: "The chair is between the desk and the window.", viAnswers: ["ở giữa"] },
          { word: "among", ipa: "/əˈmʌŋ/", meaning: "ở giữa (nhiều vật)", type: "preposition", example: "He is walking among the trees.", viAnswers: ["ở giữa", "giữa"] },
          { word: "near", ipa: "/nɪər/", meaning: "gần", type: "preposition", example: "The park is near the station.", viAnswers: ["gần"] },
          { word: "around", ipa: "/əˈraʊnd/", meaning: "xung quanh", type: "preposition", example: "People are gathered around the table.", viAnswers: ["xung quanh"] }
        ]
      },
      {
        name: "Giới từ vị trí & Đồ văn phòng",
        words: [
          { word: "along", ipa: "/əˈlɒŋ/", meaning: "dọc theo", type: "preposition", example: "Trees are planted along the road.", viAnswers: ["dọc theo"] },
          { word: "across from", ipa: "/əˈkrɒs frɒm/", meaning: "đối diện", type: "preposition", example: "The store is across from the station.", viAnswers: ["đối diện"] },
          { word: "inside", ipa: "/ɪnˈsaɪd/", meaning: "bên trong", type: "preposition", example: "Passengers are waiting inside the terminal.", viAnswers: ["bên trong"] },
          { word: "outside", ipa: "/ˌaʊtˈsaɪd/", meaning: "bên ngoài", type: "preposition", example: "Several tables are set up outside.", viAnswers: ["bên ngoài"] },
          { word: "on top of", ipa: "/ɒn tɒp ɒv/", meaning: "trên đỉnh, trên cùng", type: "preposition", example: "A book is on top of the cabinet.", viAnswers: ["trên đỉnh", "trên cùng"] },
          { word: "desk", ipa: "/desk/", meaning: "bàn làm việc", type: "noun", example: "The desk is clean.", viAnswers: ["bàn làm việc", "bàn"] },
          { word: "chair", ipa: "/tʃeər/", meaning: "ghế", type: "noun", example: "He is sitting on an office chair.", viAnswers: ["ghế"] },
          { word: "table", ipa: "/ˈteɪbl/", meaning: "bàn", type: "noun", example: "Cups are placed on the table.", viAnswers: ["bàn"] },
          { word: "computer", ipa: "/kəmˈpjuːtər/", meaning: "máy tính", type: "noun", example: "She is working at her computer.", viAnswers: ["máy tính"] },
          { word: "laptop", ipa: "/ˈlæptɒp/", meaning: "máy tính xách tay", type: "noun", example: "A laptop is open on the desk.", viAnswers: ["máy tính xách tay", "laptop"] },
          { word: "keyboard", ipa: "/ˈkiːbɔːd/", meaning: "bàn phím", type: "noun", example: "His hands are on the keyboard.", viAnswers: ["bàn phím"] },
          { word: "monitor", ipa: "/ˈmɒnɪtər/", meaning: "màn hình máy tính", type: "noun", example: "He is looking at the monitor.", viAnswers: ["màn hình"] },
          { word: "printer", ipa: "/ˈprɪntər/", meaning: "máy in", type: "noun", example: "The printer is out of paper.", viAnswers: ["máy in"] },
          { word: "telephone", ipa: "/ˈtelɪfoʊn/", meaning: "điện thoại", type: "noun", example: "A telephone is on the desk.", viAnswers: ["điện thoại"] },
          { word: "document", ipa: "/ˈdɒkjʊmənt/", meaning: "tài liệu, văn kiện", type: "noun", example: "She is reading a document.", viAnswers: ["tài liệu", "văn kiện"] }
        ]
      },
      {
        name: "Văn phòng & Nhà bếp (Đồ vật)",
        words: [
          { word: "paper", ipa: "/ˈpeɪpər/", meaning: "giấy, tờ giấy", type: "noun", example: "Sheets of paper are on the table.", viAnswers: ["giấy", "tờ giấy"] },
          { word: "pen", ipa: "/pen/", meaning: "bút viết", type: "noun", example: "A pen is next to the notebook.", viAnswers: ["bút", "bút viết"] },
          { word: "file", ipa: "/faɪl/", meaning: "hồ sơ, tệp tin", type: "noun", example: "Files are stored in the cabinet.", viAnswers: ["hồ sơ", "tệp tin"] },
          { word: "folder", ipa: "/ˈfoʊldər/", meaning: "bìa hồ sơ, thư mục", type: "noun", example: "She is holding a blue folder.", viAnswers: ["bìa hồ sơ", "thư mục"] },
          { word: "cabinet", ipa: "/ˈhæbɪnət/", meaning: "tủ đựng tài liệu/đồ bếp", type: "noun", example: "The filing cabinet is closed.", viAnswers: ["tủ", "tủ tài liệu"] },
          { word: "shelf", ipa: "/ʃelf/", meaning: "kệ, giá đỡ", type: "noun", example: "Books are arranged on the shelf.", viAnswers: ["kệ", "giá"] },
          { word: "plate", ipa: "/pleɪt/", meaning: "cái đĩa", type: "noun", example: "Food is served on a large plate.", viAnswers: ["đĩa", "cái đĩa"] },
          { word: "bowl", ipa: "/boʊl/", meaning: "cái bát, cái tô", type: "noun", example: "A bowl of soup is on the table.", viAnswers: ["bát", "tô", "cái bát"] },
          { word: "cup", ipa: "/kʌp/", meaning: "cái tách, cái cốc", type: "noun", example: "There are cups on the counter.", viAnswers: ["cốc", "tách", "cái cốc"] },
          { word: "glass", ipa: "/ɡlæs/", meaning: "ly thủy tinh, cốc thủy tinh", type: "noun", example: "He is drinking from a glass.", viAnswers: ["ly", "cốc thủy tinh", "ly thủy tinh"] },
          { word: "bottle", ipa: "/ˈbɒtl/", meaning: "chai nước, lọ", type: "noun", example: "Water bottles are lined up.", viAnswers: ["chai", "lọ", "chai nước"] },
          { word: "fork", ipa: "/fɔːk/", meaning: "cái nĩa", type: "noun", example: "A fork is next to the plate.", viAnswers: ["nĩa", "cái nĩa"] },
          { word: "knife", ipa: "/naɪf/", meaning: "con dao", type: "noun", example: "He is using a knife to cut the meat.", viAnswers: ["dao", "con dao"] },
          { word: "spoon", ipa: "/spuːn/", meaning: "cái muỗng, thìa", type: "noun", example: "A spoon is in the bowl.", viAnswers: ["thìa", "muỗng", "cái thìa"] },
          { word: "tray", ipa: "/treɪ/", meaning: "cái khay", type: "noun", example: "A waiter is carrying a tray of drinks.", viAnswers: ["khay", "cái khay"] }
        ]
      },
      {
        name: "Nhà bếp & Cảnh quan ngoài trời",
        words: [
          { word: "menu", ipa: "/ˈmenjuː/", meaning: "thực đơn", type: "noun", example: "The customer is looking at the menu.", viAnswers: ["thực đơn"] },
          { word: "sink", ipa: "/sɪŋk/", meaning: "bồn rửa", type: "noun", example: "Dishes are stacked in the sink.", viAnswers: ["bồn rửa"] },
          { word: "faucet", ipa: "/ˈfoʊsɪt/", meaning: "vòi nước", type: "noun", example: "Water is running from the faucet.", viAnswers: ["vòi nước"] },
          { word: "stove", ipa: "/stoʊv/", meaning: "bếp nấu, bếp ga/điện", type: "noun", example: "A pot is on the stove.", viAnswers: ["bếp", "bếp nấu"] },
          { word: "oven", ipa: "/ˈʌvn/", meaning: "lò nướng", type: "noun", example: "She is putting bread in the oven.", viAnswers: ["lò nướng"] },
          { word: "refrigerator", ipa: "/rɪˈfrɪdʒəreɪtər/", meaning: "tủ lạnh", type: "noun", example: "The refrigerator door is open.", viAnswers: ["tủ lạnh"] },
          { word: "road", ipa: "/roʊd/", meaning: "đường đi", type: "noun", example: "Cars are traveling on the road.", viAnswers: ["đường", "đường đi"] },
          { word: "street", ipa: "/striːt/", meaning: "đường phố", type: "noun", example: "The street is wet from the rain.", viAnswers: ["phố", "đường phố"] },
          { word: "sidewalk", ipa: "/ˈsaɪdwɔːk/", meaning: "vỉa hè", type: "noun", example: "People are walking on the sidewalk.", viAnswers: ["vỉa hè"] },
          { word: "bridge", ipa: "/brɪdʒ/", meaning: "cây cầu", type: "noun", example: "A bridge spans the river.", viAnswers: ["cầu", "cây cầu"] },
          { word: "park", ipa: "/pɑːk/", meaning: "công viên", type: "noun", example: "Children are playing in the park.", viAnswers: ["công viên"] },
          { word: "garden", ipa: "/ˈɡɑːdn/", meaning: "khu vườn", type: "noun", example: "Flowers are blooming in the garden.", viAnswers: ["vườn", "khu vườn"] },
          { word: "tree", ipa: "/triː/", meaning: "cây cối", type: "noun", example: "Trees are planted along the walkway.", viAnswers: ["cây", "cây cối"] },
          { word: "grass", ipa: "/ɡræs/", meaning: "bãi cỏ", type: "noun", example: "A worker is mowing the grass.", viAnswers: ["cỏ", "bãi cỏ"] },
          { word: "flower", ipa: "/ˈflaʊər/", meaning: "bông hoa", type: "noun", example: "The garden is full of colorful flowers.", viAnswers: ["hoa", "bông hoa"] }
        ]
      },
      {
        name: "Thiên nhiên & Công trình",
        words: [
          { word: "river", ipa: "/ˈrɪvər/", meaning: "dòng sông", type: "noun", example: "Boats are traveling down the river.", viAnswers: ["sông", "dòng sông"] },
          { word: "lake", ipa: "/lake/", meaning: "hồ nước", type: "noun", example: "The building overlooks the lake.", viAnswers: ["hồ", "hồ nước"] },
          { word: "beach", ipa: "/biːtʃ/", meaning: "bãi biển", type: "noun", example: "People are walking on the beach.", viAnswers: ["bãi biển"] },
          { word: "sky", ipa: "/skaɪ/", meaning: "bầu trời", type: "noun", example: "The sky is clear today.", viAnswers: ["bầu trời"] },
          { word: "building", ipa: "/ˈbɪldɪŋ/", meaning: "tòa nhà", type: "noun", example: "The building has many windows.", viAnswers: ["tòa nhà"] },
          { word: "office", ipa: "/ˈɒfɪs/", meaning: "văn phòng làm việc", type: "noun", example: "The office is unoccupied.", viAnswers: ["văn phòng"] },
          { word: "store", ipa: "/stɔːr/", meaning: "cửa hàng", type: "noun", example: "Customers are entering the store.", viAnswers: ["cửa hàng"] },
          { word: "factory", ipa: "/ˈfæktri/", meaning: "nhà máy, xưởng", type: "noun", example: "Workers are busy in the factory.", viAnswers: ["nhà máy"] },
          { word: "warehouse", ipa: "/ˈweəhaʊs/", meaning: "nhà kho", type: "noun", example: "Stock is kept in the warehouse.", viAnswers: ["nhà kho", "kho"] },
          { word: "station", ipa: "/ˈsteɪʃn/", meaning: "nhà ga, trạm", type: "noun", example: "Train station is crowded.", viAnswers: ["nhà ga", "trạm"] },
          { word: "airport", ipa: "/ˈeəpɔːt/", meaning: "sân bay", type: "noun", example: "The plane is landing at the airport.", viAnswers: ["sân bay"] },
          { word: "hotel", ipa: "/hoʊˈtel/", meaning: "khách sạn", type: "noun", example: "The hotel lobby is empty.", viAnswers: ["khách sạn"] },
          { word: "restaurant", ipa: "/ˈrestrɒnt/", meaning: "nhà hàng", type: "noun", example: "Tables are set up outside the restaurant.", viAnswers: ["nhà hàng"] },
          { word: "hospital", ipa: "/ˈhɒspɪtl/", meaning: "bệnh viện", type: "noun", example: "A security guard is at the hospital entrance.", viAnswers: ["bệnh viện"] },
          { word: "car", ipa: "/kɑːr/", meaning: "xe ô tô", type: "noun", example: "A car is parked by the building.", viAnswers: ["xe hơi", "ô tô", "xe ô tô"] }
        ]
      },
      {
        name: "Phương tiện & Vật dụng",
        words: [
          { word: "truck", ipa: "/trʌk/", meaning: "xe tải", type: "noun", example: "A truck is carrying goods.", viAnswers: ["xe tải"] },
          { word: "bus", ipa: "/bʌs/", meaning: "xe buýt", type: "noun", example: "People are waiting for the bus.", viAnswers: ["xe buýt"] },
          { word: "van", ipa: "/væn/", meaning: "xe tải nhỏ", type: "noun", example: "The delivery van is parked outside.", viAnswers: ["xe tải nhỏ", "xe bán tải"] },
          { word: "bicycle", ipa: "/ˈbaɪsɪkl/", meaning: "xe đạp", type: "noun", example: "A bicycle is leaning against the wall.", viAnswers: ["xe đạp"] },
          { word: "motorcycle", ipa: "/ˈmoʊtərˌsaɪkəl/", meaning: "xe máy", type: "noun", example: "A motorcycle is parked on the street.", viAnswers: ["xe máy"] },
          { word: "train", ipa: "/treɪn/", meaning: "tàu hỏa, xe lửa", type: "noun", example: "The train is arriving at the platform.", viAnswers: ["tàu hỏa", "xe lửa"] },
          { word: "airplane", ipa: "/ˈeəpleɪn/", meaning: "máy bay", type: "noun", example: "The airplane is on the runway.", viAnswers: ["máy bay"] },
          { word: "boat", ipa: "/boʊt/", meaning: "thuyền, ca nô", type: "noun", example: "A small boat is docked at the harbor.", viAnswers: ["thuyền", "tàu nhỏ"] },
          { word: "ship", ipa: "/ʃɪp/", meaning: "tràu thủy lớn", type: "noun", example: "A cargo ship is on the water.", viAnswers: ["tàu", "tàu thủy"] },
          { word: "box", ipa: "/bɒks/", meaning: "cái hộp, thùng cát tông", type: "noun", example: "A worker is closing a cardboard box.", viAnswers: ["hộp", "cái hộp", "thùng"] },
          { word: "package", ipa: "/ˈpækɪdʒ/", meaning: "kiện hàng, bưu phẩm", type: "noun", example: "Packages are stacked in a pile.", viAnswers: ["kiện hàng", "bưu kiện", "bưu phẩm"] },
          { word: "bag", ipa: "/bæɡ/", meaning: "túi xách, bao bì", type: "noun", example: "A woman is holding a shopping bag.", viAnswers: ["túi", "bao", "túi xách"] },
          { word: "basket", ipa: "/ˈbɑːskɪt/", meaning: "cái giỏ, cái rổ", type: "noun", example: "The basket is filled with fruit.", viAnswers: ["giỏ", "rổ", "cái giỏ"] },
          { word: "cart", ipa: "/kɑːt/", meaning: "xe đẩy hàng", type: "noun", example: "The cart is full of groceries.", viAnswers: ["xe đẩy"] },
          { word: "suitcase", ipa: "/ˈsuːtkeɪs/", meaning: "va li", type: "noun", example: "He is carrying a suitcase.", viAnswers: ["vali", "va li"] }
        ]
      },
      {
        name: "Đồ vật trong nhà & Trạng thái",
        words: [
          { word: "umbrella", ipa: "/ʌmˈbrelə/", meaning: "cái ô, cái dù", type: "noun", example: "An open umbrella shades the table.", viAnswers: ["ô", "dù", "cái ô"] },
          { word: "sign", ipa: "/saɪn/", meaning: "biển hiệu, biển báo", type: "noun", example: "A road sign is next to the tree.", viAnswers: ["biển báo", "biển hiệu"] },
          { word: "clock", ipa: "/klɒk/", meaning: "đồng hồ treo tường", type: "noun", example: "A clock is mounted on the wall.", viAnswers: ["đồng hồ"] },
          { word: "lamp", ipa: "/læmp/", meaning: "cây đèn", type: "noun", example: "A desk lamp is turned on.", viAnswers: ["đèn", "cây đèn"] },
          { word: "window", ipa: "/ˈwɪndoʊ/", meaning: "cửa sổ", type: "noun", example: "The window overlooks the garden.", viAnswers: ["cửa sổ"] },
          { word: "door", ipa: "/dɔːr/", meaning: "cửa ra vào", type: "noun", example: "A man is opening the door.", viAnswers: ["cửa", "cửa ra vào"] },
          { word: "curtain", ipa: "/ˈkɜːtn/", meaning: "rèm cửa, màn", type: "noun", example: "Curtains are drawn to the side.", viAnswers: ["rèm", "rèm cửa", "màn cửa"] },
          { word: "mirror", ipa: "/ˈmɪrər/", meaning: "cái gương", type: "noun", example: "She is looking at her reflection in the mirror.", viAnswers: ["gương", "cái gương"] },
          { word: "empty", ipa: "/ˈempti/", meaning: "trống, không có người/vật", type: "adjective", example: "The conference room is empty.", viAnswers: ["trống", "trống rỗng"] },
          { word: "full", ipa: "/fʊl/", meaning: "đầy, chứa đầy", type: "adjective", example: "The glass is full of water.", viAnswers: ["đầy"] },
          { word: "crowded", ipa: "/ˈkraʊdɪd/", meaning: "đông đúc, đông người", type: "adjective", example: "The train station is crowded with travelers.", viAnswers: ["đông", "đông đúc"] },
          { word: "busy", ipa: "/ˈbɪzi/", meaning: "nhộn nhịp, bận rộn", type: "adjective", example: "The street is busy with traffic.", viAnswers: ["bận", "nhộn nhịp"] },
          { word: "available", ipa: "/əˈveɪləbl/", meaning: "có sẵn, trống lịch", type: "adjective", example: "No rooms are available tonight.", viAnswers: ["có sẵn", "trống"] },
          { word: "occupied", ipa: "/ˈɒkjʊpaɪd/", meaning: "đang được sử dụng, có người", type: "adjective", example: "All of the desks are occupied.", viAnswers: ["có người", "bị chiếm"] },
          { word: "broken", ipa: "/ˈbroʊkən/", meaning: "bị hỏng, bị vỡ", type: "adjective", example: "The printer is broken.", viAnswers: ["hỏng", "bị hỏng"] }
        ]
      },
      {
        name: "Cụm từ mô tả hay gặp",
        words: [
          { word: "surrounded", ipa: "/səˈraʊndɪd/", meaning: "được bao quanh", type: "verb/adj", example: "The pool is surrounded by trees.", viAnswers: ["bao quanh", "được bao quanh"] },
          { word: "be standing", ipa: "/biː ˈstændɪŋ/", meaning: "đang đứng", type: "phrase", example: "Several people are standing in line.", viAnswers: ["đang đứng"] },
          { word: "be sitting", ipa: "/biː ˈsɪtɪŋ/", meaning: "đang ngồi", type: "phrase", example: "Guests are sitting at tables.", viAnswers: ["đang ngồi"] },
          { word: "be walking", ipa: "/biː ˈwɔːkɪŋ/", meaning: "đang đi bộ", type: "phrase", example: "A pedestrian is walking along the path.", viAnswers: ["đang đi bộ"] },
          { word: "be holding", ipa: "/biː ˈhoʊldɪŋ/", meaning: "đang cầm, nắm", type: "phrase", example: "She is holding a cup of tea.", viAnswers: ["đang cầm", "đang nắm"] },
          { word: "be carrying", ipa: "/biː ˈkæriɪŋ/", meaning: "đang mang, xách, chở", type: "phrase", example: "He is carrying a box on his shoulder.", viAnswers: ["đang mang", "đang xách"] },
          { word: "be looking at", ipa: "/biː ˈlʊkɪŋ æt/", meaning: "đang nhìn vào", type: "phrase", example: "The coworker is looking at the screen.", viAnswers: ["đang nhìn"] },
          { word: "be reading", ipa: "/biː ˈriːdɪŋ/", meaning: "đang đọc", type: "phrase", example: "The customer is reading the menu.", viAnswers: ["đang đọc"] },
          { word: "be writing", ipa: "/biː ˈraɪtɪŋ/", meaning: "đang viết", type: "phrase", example: "He is writing some notes on the pad.", viAnswers: ["đang viết"] },
          { word: "be typing", ipa: "/biː ˈtaɪpɪŋ/", meaning: "đang gõ phím", type: "phrase", example: "The operator is typing on the computer.", viAnswers: ["đang gõ phím", "đang gõ"] },
          { word: "be working", ipa: "/biː ˈwɜːkŋ/", meaning: "đang làm việc", type: "phrase", example: "Mechanics are working in the garage.", viAnswers: ["đang làm việc"] },
          { word: "be parked", ipa: "/biː pɑːkt/", meaning: "đang được đỗ (xe)", type: "phrase", example: "Vehicles are parked in a row.", viAnswers: ["đang đỗ", "đang được đỗ"] },
          { word: "be displayed", ipa: "/biː dɪˈspleɪd/", meaning: "đang được trưng bày", type: "phrase", example: "Products are displayed on the shelves.", viAnswers: ["được trưng bày", "đang được trưng bày"] },
          { word: "be arranged", ipa: "/biː əˈreɪndʒd/", meaning: "đang được sắp xếp", type: "phrase", example: "Flowers are arranged in a vase.", viAnswers: ["đang được sắp xếp", "được sắp xếp"] },
          { word: "be lined up", ipa: "/biː laɪnd ʌp/", meaning: "đang xếp thành hàng", type: "phrase", example: "Cars are lined up at the gate.", viAnswers: ["đang xếp hàng", "xếp thành hàng"] }
        ]
      }
    ]
  },
  {
    id: "part2",
    part: "Part 2",
    title: "Hỏi đáp ngắn",
    focus: "Từ hỏi (Wh-), trợ động từ, cụm trả lời ngắn và phản hồi gián tiếp.",
    grammar: {
      overview: "Mục tiêu 600 TOEIC: Part 2 có thể làm theo một bộ mẹo cố định bao phủ gần như toàn bộ các dạng câu hỏi thường gặp giúp bạn tối ưu phản xạ nghe mà không cần học hàng nghìn từ.",
      structures: [
        {
          title: "I. Mẹo 1: Nghe từ đầu tiên (Wh- questions)",
          formula: "Từ để hỏi -> Đáp án mong đợi",
          example: "<table style='width:100%; border-collapse:collapse; margin-top:8px; font-size:12px; background:rgba(15,23,42,0.3);'><thead><tr style='background:rgba(255,255,255,0.05);'><th style='border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:left;'>Nghe thấy</th><th style='border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:left;'>Chọn đáp án là</th></tr></thead><tbody><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>Where</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Địa điểm</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>When</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Thời gian</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>Who</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Người</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>Why</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Lý do</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>What</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Thông tin</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>Which</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Lựa chọn</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>Whose</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Chủ sở hữu</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>How much</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Giá tiền</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>How many</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Số lượng</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>How long</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Khoảng thời gian</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>How often</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Tần suất</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>How far</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Khoảng cách</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'><b>How soon</b></td><td style='border:1px solid rgba(255,255,255,0.1); padding:6px;'>Thời điểm</td></tr></tbody></table>",
          explanation: "Tập trung tối đa nghe từ đầu tiên để nhận diện từ để hỏi và loại ngay các đáp án Yes/No."
        },
        {
          title: "II. Mẹo 2: Câu hỏi Yes/No & Trợ động từ",
          formula: "Do/Does/Did | Is/Are/Was/Were | Have/Has/Had",
          example: "1) <b>Do/Does/Did</b> -> Yes / No / Not yet / I already did / I haven't yet / I think so / Probably not. <br/> 2) <b>Is/Are/Was/Were</b> -> Yes / No / It is / It isn't / I believe so. <br/> 3) <b>Have/Has/Had</b> -> Yes / Not yet / Already / I have / I haven't.",
          explanation: "Đáp án có thể trả lời trực tiếp bằng Yes/No hoặc bằng các câu phản hồi gián tiếp."
        },
        {
          title: "III & IV. Mẹo 3 & 4: Đề nghị (Request) & Xin phép (Permission)",
          formula: "Can/Could/Would you... | May/Can/Could I...",
          example: "1) <b>Đề nghị</b> -> Certainly / Sure / Of course / No problem / I'd be happy to / Sorry, I can't. <br/> 2) <b>Xin phép</b> -> Certainly / Go ahead / Of course / Please do.",
          explanation: "Lời đề nghị hoặc xin phép thường nhận được sự đồng ý nhanh hoặc lời từ chối khéo."
        },
        {
          title: "V & VI. Mẹo 5 & 6: Lời mời (Invitation) & Gợi ý (Suggestion)",
          formula: "Would you like... / Do you want... / How about... / Let's... / Shall we... / Why don't we...",
          example: "1) <b>Lời mời</b> -> I'd love to / Sounds great / Maybe next time / Thanks, but I can't. <br/> 2) <b>Gợi ý</b> -> Good idea / Sounds great / Let's / Sure.",
          explanation: "Đặc trưng là các câu đồng ý hoặc từ chối lịch sự."
        },
        {
          title: "XIII & XIV. Mẹo 13 & 14: Câu phủ định & Câu lựa chọn",
          formula: "Didn't you... / Isn't... | A or B?",
          example: "1) <b>Didn't you sign the lease?</b> -> Yes, I did. / No, not yet. <br/> 2) <b>Tea or coffee?</b> -> Coffee / Neither / Either is fine.",
          explanation: "Câu phủ định không trả lời ngược theo tiếng Việt. Câu lựa chọn thường lặp lại một phương án hoặc chọn Either/Neither."
        }
      ],
      traps: [
        {
          name: "Mẹo 9 & 18.1: Bẫy lặp từ (Word Match)",
          description: "Phương án nhiễu sử dụng từ lặp lại giống hệt từ trong câu hỏi.",
          example: "Hỏi: 'Where is the printer?' -> A. 'The printer is new.' (Sai) | B. 'Beside the window.' (Đúng).",
          tip: "Tránh chọn các đáp án lặp từ trừ phi đó là câu trả lời trực tiếp và logic."
        },
        {
          name: "Mẹo 18.2: Bẫy từ đồng âm (Sound-alike)",
          description: "Phương án nhiễu chứa từ phát âm gần giống hoặc dễ gây nhầm lẫn.",
          example: "Hỏi: 'When did you leave?' -> A. 'I left my keys.' (Sai - nhầm leave/left) | B. 'Last Friday.' (Đúng).",
          tip: "Loại bỏ ngay các từ đồng âm mà sai ngữ cảnh câu hỏi."
        },
        {
          name: "Mẹo 18.3: Bẫy đồng nghĩa (Synonyms)",
          description: "Đáp án đúng sử dụng từ đồng nghĩa với từ trong câu hỏi.",
          example: "buy ↔ purchase | start ↔ begin | finish ↔ complete | car ↔ vehicle | help ↔ assist",
          tip: "Mẹo 11: Nhớ rằng 'When will it begin?' và 'It starts at two' liên kết với nhau bằng begin = start."
        },
        {
          name: "Mẹo 10 & 18.4: Bẫy trả lời gián tiếp (Indirect responses)",
          description: "Trả lời gián tiếp không chứa từ khóa trực diện hoặc không có Yes/No.",
          example: "Hỏi: 'Have you finished the report?' -> Đáp: 'I sent it yesterday.' (Đã hoàn thành).",
          tip: "Cần nghe hiểu nghĩa của cả câu thay vì máy móc tìm Yes/No."
        }
      ],
      tips: [
        "🎯 **XIX. Chiến thuật làm bài cực nhanh**:",
        "1. Nghe **từ đầu tiên** (Wh- Word) và nghe **1–2 từ khóa chính** (Mẹo 12: Động từ chính & danh từ chính).",
        "2. Xác định **loại đáp án cần tìm** (Địa điểm, người, thời gian...) và loại ngay các đáp án không đúng loại.",
        "3. **Mẹo 15: Đừng dịch**: Nghe thấy *Where* -> phản xạ tìm địa điểm ngay trong đầu, không dịch sang tiếng Việt để tránh chậm nhịp.",
        "4. Nếu không chắc chắn, hãy **loại trừ rồi đoán nhanh trong 2–3 giây** và chuyển sự tập trung sang câu tiếp theo.",
        "💡 **XX. BẢNG THẦN THÁNH NÊN HỌC THUỘC**:",
        "<table style='width:100%; border-collapse:collapse; margin-top:8px; font-size:12px; background:rgba(15,23,42,0.3); border:1px solid rgba(255,255,255,0.1);'><thead><tr style='background:rgba(255,255,255,0.05);'><th style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Nghe thấy</th><th style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Não nghĩ ngay</th><th style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Nghe thấy</th><th style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Não nghĩ ngay</th></tr></thead><tbody><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Where</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Địa điểm</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>When</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Thời gian</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Who</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Người</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Why</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Lý do</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>What</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Thông tin</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Which</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Lựa chọn</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>How much</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Tiền</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>How many</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Số lượng</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>How long</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Khoảng thời gian</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>How often</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Tần suất</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Can/Could</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Giúp đỡ/Đề nghị</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Would you like</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Lời mời</td></tr><tr><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Let's</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Gợi ý</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>May I</td><td style='border:1px solid rgba(255,255,255,0.1); padding:4px;'>Xin phép</td></tr></tbody></table>",
        "💡 **MẸO 16: Các cụm từ phản hồi cực kỳ phổ biến**:",
        "* **Mẹo 7 (Đồng ý/Chấp thuận)**: Certainly (Chắc chắn), Sure (Được thôi), Of course (Dĩ nhiên), No problem (Không vấn đề gì), That's fine (Được thôi), Sounds great (Nghe tuyệt đấy), I'd love to (Rất sẵn lòng).",
        "* **Mẹo 8 (Từ chối lịch sự)**: I'm afraid not (E là không), Sorry (Xin lỗi), Maybe later (Có lẽ sau), Not today (Không phải hôm nay), I can't (Tôi không thể), Probably not (Có lẽ là không).",
        "* **Tránh trả lời trực tiếp (Không chắc chắn)**: I'm not sure (Tôi không chắc), Let me check (Để tôi kiểm tra), I'll ask (Tôi sẽ hỏi), I'll call back (Tôi sẽ gọi lại), I think so (Tôi nghĩ vậy), Probably (Có lẽ).",
        "⚠️ **Lưu ý nhỏ nhưng rất quan trọng**: Đừng học thuộc các mẹo như những quy tắc tuyệt đối. TOEIC có thể đưa ra câu trả lời gián tiếp hoặc không dùng đúng mẫu bạn mong đợi. Hãy xem các mẹo trên là cách để **thu hẹp lựa chọn** và **tăng tốc độ xử lý**. Với mục tiêu **600 TOEIC**, chỉ cần áp dụng tốt các mẹo này kết hợp luyện khoảng **300–500 câu Part 2**, bạn sẽ cải thiện rõ rệt điểm số."
      ]
    },
    sets: [
      {
        name: "1. Từ để hỏi",
        words: [
          { word: "who", ipa: "/huː/", meaning: "ai", type: "pronoun", example: "Who is the manager of this branch?", viAnswers: ["ai"] },
          { word: "what", ipa: "/wɒt/", meaning: "cái gì", type: "pronoun", example: "What is the deadline for this project?", viAnswers: ["cái gì"] },
          { word: "which", ipa: "/wɪtʃ/", meaning: "cái nào", type: "pronoun", example: "Which train should I take to get to Boston?", viAnswers: ["cái nào"] },
          { word: "where", ipa: "/weər/", meaning: "ở đâu", type: "adverb", example: "Where is the new printer located?", viAnswers: ["ở đâu"] },
          { word: "when", ipa: "/wen/", meaning: "khi nào", type: "adverb", example: "When will the presentation begin?", viAnswers: ["khi nào"] },
          { word: "why", ipa: "/waɪ/", meaning: "tại sao", type: "adverb", example: "Why did you reschedule the meeting?", viAnswers: ["tại sao"] },
          { word: "how", ipa: "/haʊ/", meaning: "như thế nào", type: "adverb", example: "How do you commute to work every day?", viAnswers: ["như thế nào", "bằng cách nào"] },
          { word: "how long", ipa: "/haʊ lɒŋ/", meaning: "bao lâu", type: "phrase", example: "How long will the construction last?", viAnswers: ["bao lâu"] },
          { word: "how often", ipa: "/haʊ ˈɒfn/", meaning: "bao lâu một lần", type: "phrase", example: "How often do you inspect the warehouse?", viAnswers: ["bao lâu một lần"] },
          { word: "how many", ipa: "/haʊ ˈmeni/", meaning: "bao nhiêu (số lượng)", type: "phrase", example: "How many copies of the report do we need?", viAnswers: ["bao nhiêu"] },
          { word: "how much", ipa: "/haʊ mʌtʃ/", meaning: "bao nhiêu (tiền/lượng)", type: "phrase", example: "How much does it cost to repair the screen?", viAnswers: ["bao nhiêu"] },
          { word: "how far", ipa: "/haʊ fɑːr/", meaning: "bao xa", type: "phrase", example: "How far is the airport from here?", viAnswers: ["bao xa"] },
          { word: "whose", ipa: "/huːz/", meaning: "của ai", type: "pronoun", example: "Whose coat is hanging on the chair?", viAnswers: ["của ai"] }
        ]
      },
      {
        name: "2. Trợ động từ",
        words: [
          { word: "do", ipa: "/duː/", meaning: "có... không?", type: "verb", example: "Do you have the key to the conference room?", viAnswers: ["có không"] },
          { word: "does", ipa: "/dʌz/", meaning: "có... không?", type: "verb", example: "Does Mr. Patel work in the accounting division?", viAnswers: ["có không"] },
          { word: "did", ipa: "/dɪd/", meaning: "đã... chưa?", type: "verb", example: "Did you sign the contract yesterday?", viAnswers: ["đã chưa", "có không"] },
          { word: "is", ipa: "/ɪz/", meaning: "có phải là...?", type: "verb", example: "Is the manager available to talk right now?", viAnswers: ["có phải là", "phải không"] },
          { word: "are", ipa: "/ɑːr/", meaning: "có phải là...?", type: "verb", example: "Are we going to attend the training today?", viAnswers: ["có phải là", "phải không"] },
          { word: "was", ipa: "/wɒz/", meaning: "đã từng...?", type: "verb", example: "Was the package delivered this morning?", viAnswers: ["đã từng", "đã", "phải không"] },
          { word: "were", ipa: "/wɜːr/", meaning: "đã từng...?", type: "verb", example: "Were you in the office when the power cut happened?", viAnswers: ["đã từng", "đã", "phải không"] },
          { word: "have", ipa: "/hæv/", meaning: "đã...?", type: "verb", example: "Have you received the invoice yet?", viAnswers: ["đã", "có không"] },
          { word: "has", ipa: "/hæz/", meaning: "đã...?", type: "verb", example: "Has the director signed the approval form?", viAnswers: ["đã", "có không"] },
          { word: "had", ipa: "/hæd/", meaning: "đã...?", type: "verb", example: "Had they finished the budget before the deadline?", viAnswers: ["đã"] },
          { word: "can", ipa: "/kæn/", meaning: "có thể...?", type: "verb", example: "Can you help me move these boxes to the closet?", viAnswers: ["có thể"] },
          { word: "could", ipa: "/kʊd/", meaning: "có thể...?", type: "verb", example: "Could you tell me where the cafeteria is?", viAnswers: ["có thể"] },
          { word: "will", ipa: "/wɪl/", meaning: "sẽ...?", type: "verb", example: "Will the guest arrive by taxi or bus?", viAnswers: ["sẽ"] },
          { word: "would", ipa: "/wʊd/", meaning: "có thể...?", type: "verb", example: "Would you like me to book a hotel room?", viAnswers: ["có thể", "muốn"] },
          { word: "should", ipa: "/ʃʊd/", meaning: "nên...?", type: "verb", example: "Should we submit the feedback form now?", viAnswers: ["nên"] },
          { word: "may", ipa: "/meɪ/", meaning: "có thể...?", type: "verb", example: "May I borrow your calculator for a moment?", viAnswers: ["có thể"] }
        ]
      },
      {
        name: "3. Động từ thông dụng",
        words: [
          { word: "arrive", ipa: "/əˈraɪv/", meaning: "đến", type: "verb", example: "The flight is scheduled to arrive at noon.", viAnswers: ["đến", "đến nơi"] },
          { word: "leave", ipa: "/liːv/", meaning: "rời đi", type: "verb", example: "What time will the train leave the station?", viAnswers: ["rời đi", "rời khỏi", "đi"] },
          { word: "return", ipa: "/rɪˈtɜːn/", meaning: "quay lại", type: "verb", example: "When do you plan to return from vacation?", viAnswers: ["quay lại", "trở về", "hoàn trả"] },
          { word: "attend", ipa: "/əˈtend/", meaning: "tham dự", type: "verb", example: "Did you attend the seminar yesterday?", viAnswers: ["tham dự", "dự"] },
          { word: "call", ipa: "/kɔːl/", meaning: "gọi", type: "verb", example: "I will call you back as soon as I can.", viAnswers: ["gọi", "gọi điện"] },
          { word: "answer", ipa: "/ˈɑːnsər/", meaning: "trả lời", type: "verb", example: "Who is going to answer the phone?", viAnswers: ["trả lời", "đáp"] },
          { word: "reply", ipa: "/rɪˈplaɪ/", meaning: "hồi đáp", type: "verb", example: "She didn't reply to my message yet.", viAnswers: ["hồi đáp", "trả lời"] },
          { word: "send", ipa: "/send/", meaning: "gửi", type: "verb", example: "Please send the file to my email address.", viAnswers: ["gửi"] },
          { word: "receive", ipa: "/rɪˈsiːv/", meaning: "nhận", type: "verb", example: "Did you receive the shipment yesterday?", viAnswers: ["nhận", "nhận được"] },
          { word: "order", ipa: "/ˈɔːdər/", meaning: "đặt hàng", type: "verb / noun", example: "We need to order more office supplies.", viAnswers: ["đặt hàng", "đơn hàng"] },
          { word: "reserve", ipa: "/rɪˈzɜːv/", meaning: "đặt chỗ", type: "verb", example: "I would like to reserve a table for four.", viAnswers: ["đặt chỗ", "đặt trước"] },
          { word: "cancel", ipa: "/ˈkænsl/", meaning: "hủy", type: "verb", example: "They had to cancel the outdoor event.", viAnswers: ["hủy", "hủy bỏ"] },
          { word: "postpone", ipa: "/pəʊˈspəʊn/", meaning: "hoãn", type: "verb", example: "The match has been postponed until next week.", viAnswers: ["hoãn", "trì hoãn"] },
          { word: "approve", ipa: "/əˈpruːv/", meaning: "phê duyệt", type: "verb", example: "The director approved our budget proposal.", viAnswers: ["phê duyệt", "tán thành"] },
          { word: "confirm", ipa: "/kənˈfɜːm/", meaning: "xác nhận", type: "verb", example: "Please confirm your flight details.", viAnswers: ["xác nhận"] },
          { word: "sign", ipa: "/saɪn/", meaning: "ký", type: "verb / noun", example: "Please sign your name on the bottom line.", viAnswers: ["ký", "ký tên"] },
          { word: "submit", ipa: "/səbˈmɪt/", meaning: "nộp", type: "verb", example: "You must submit the report by Friday.", viAnswers: ["nộp", "đệ trình"] },
          { word: "prepare", ipa: "/rɪˈpeər/", meaning: "chuẩn bị", type: "verb", example: "How are you preparing for the interview?", viAnswers: ["chuẩn bị"] },
          { word: "finish", ipa: "/ˈfɪnɪʃ/", meaning: "hoàn thành", type: "verb", example: "I want to finish this task before lunch.", viAnswers: ["hoàn thành", "xong"] },
          { word: "start", ipa: "/stɑːt/", meaning: "bắt đầu", type: "verb", example: "The seminar is scheduled to start at 9 AM.", viAnswers: ["bắt đầu", "khởi động"] },
          { word: "discuss", ipa: "/dɪˈskʌs/", meaning: "thảo luận", type: "verb", example: "We will discuss the strategy tomorrow.", viAnswers: ["thảo luận", "bàn luận"] },
          { word: "explain", ipa: "/ɪkˈspleɪn/", meaning: "giải thích", type: "verb", example: "Let me explain how this machine works.", viAnswers: ["giải thích"] },
          { word: "pay", ipa: "/peɪ/", meaning: "thanh toán", type: "verb", example: "You can pay with a credit card.", viAnswers: ["thanh toán", "trả tiền"] },
          { word: "buy", ipa: "/baɪ/", meaning: "mua", type: "verb", example: "Where did you buy that computer?", viAnswers: ["mua"] },
          { word: "sell", ipa: "/sel/", meaning: "bán", type: "verb", example: "They sell high-quality furniture here.", viAnswers: ["bán"] },
          { word: "deliver", ipa: "/dɪˈlɪvər/", meaning: "giao", type: "verb", example: "When will you deliver the package?", viAnswers: ["giao", "giao hàng"] },
          { word: "repair", ipa: "/rɪˈpeər/", meaning: "sửa", type: "verb", example: "We need someone to repair the copier.", viAnswers: ["sửa", "sửa chữa"] },
          { word: "replace", ipa: "/rɪˈpleɪs/", meaning: "thay thế", type: "verb", example: "We should replace the office lightbulbs.", viAnswers: ["thay thế"] },
          { word: "check", ipa: "/tʃek/", meaning: "kiểm tra", type: "verb", example: "Let me check the flight schedule.", viAnswers: ["kiểm tra"] },
          { word: "help", ipa: "/help/", meaning: "giúp", type: "verb / noun", example: "Would you like me to help you?", viAnswers: ["giúp", "giúp đỡ"] }
        ]
      },
      {
        name: "4. Danh từ văn phòng",
        words: [
          { word: "meeting", ipa: "/ˈmiːtɪŋ/", meaning: "cuộc họp", type: "noun", example: "The meeting will be held in the board room.", viAnswers: ["cuộc họp", "họp"] },
          { word: "appointment", ipa: "/əˈpɔɪntmənt/", meaning: "cuộc hẹn", type: "noun", example: "I have an appointment with the doctor at 3 PM.", viAnswers: ["cuộc hẹn", "hẹn"] },
          { word: "interview", ipa: "/ˈɪntəvjuː/", meaning: "phỏng vấn", type: "noun / verb", example: "The candidate has a job interview today.", viAnswers: ["phỏng vấn", "cuộc phỏng vấn"] },
          { word: "report", ipa: "/rɪˈpɔːt/", meaning: "báo cáo", type: "noun / verb", example: "I am writing the quarterly sales report.", viAnswers: ["báo cáo", "bản báo cáo"] },
          { word: "schedule", ipa: "/ˈʃedjuːl/", meaning: "lịch trình", type: "noun / verb", example: "Please check the conference schedule.", viAnswers: ["lịch trình", "thời gian biểu"] },
          { word: "deadline", ipa: "/ˈdedlaɪn/", meaning: "hạn chót", type: "noun", example: "The deadline for the application is Friday.", viAnswers: ["hạn chót", "hạn cuối"] },
          { word: "project", ipa: "/ˈprɒdʒekt/", meaning: "dự án", type: "noun", example: "He is the manager of the new design project.", viAnswers: ["dự án"] },
          { word: "document", ipa: "/ˈdɒkjʊmənt/", meaning: "tài liệu", type: "noun", example: "Please print this document for me.", viAnswers: ["tài liệu", "văn bản"] },
          { word: "contract", ipa: "/ˈkɒntrækt/", meaning: "hợp đồng", type: "noun", example: "They signed a three-year contract.", viAnswers: ["hợp đồng"] },
          { word: "proposal", ipa: "/prəˈpəʊzl/", meaning: "đề xuất", type: "noun", example: "We submitted a proposal for the project.", viAnswers: ["đề xuất", "bản đề xuất"] },
          { word: "presentation", ipa: "/ˌpreznˈteɪʃn/", meaning: "bài thuyết trình", type: "noun", example: "Her presentation was very informative.", viAnswers: ["bài thuyết trình", "thuyết trình"] },
          { word: "budget", ipa: "/ˈbʌdʒɪt/", meaning: "ngân sách", type: "noun / verb", example: "The marketing department has a small budget.", viAnswers: ["ngân sách"] },
          { word: "invoice", ipa: "/ˈɪnvɔɪ/", meaning: "hóa đơn", type: "noun", example: "Please pay the invoice by the end of the month.", viAnswers: ["hóa đơn"] },
          { word: "receipt", ipa: "/rɪˈsiːt/", meaning: "biên lai", type: "noun", example: "Keep your receipt in case you want a refund.", viAnswers: ["biên lai", "hóa đơn"] },
          { word: "payment", ipa: "/ˈpeɪmənt/", meaning: "thanh toán", type: "noun", example: "The monthly payment is due next week.", viAnswers: ["thanh toán", "khoản thanh toán"] }
        ]
      },
      {
        name: "5. Người",
        words: [
          { word: "manager", ipa: "/ˈmænɪdʒər/", meaning: "quản lý", type: "noun", example: "The project manager approved the design.", viAnswers: ["quản lý", "người quản lý"] },
          { word: "supervisor", ipa: "/ˈsuːpəvaɪzər/", meaning: "giám sát", type: "noun", example: "Ask your supervisor for permission.", viAnswers: ["giám sát", "người giám sát"] },
          { word: "director", ipa: "/dɪˈrektər/", meaning: "giám đốc", type: "noun", example: "The director is visiting our branch today.", viAnswers: ["giám đốc"] },
          { word: "assistant", ipa: "/əˈsɪstənt/", meaning: "trợ lý", type: "noun", example: "Her assistant handles all the phone calls.", viAnswers: ["trợ lý"] },
          { word: "secretary", ipa: "/ˈsekrətri/", meaning: "thư ký", type: "noun", example: "The secretary arranged the meeting room.", viAnswers: ["thư ký"] },
          { word: "accountant", ipa: "/əˈkaʊntənt/", meaning: "kế toán", type: "noun", example: "Our accountant is checking the tax documents.", viAnswers: ["kế toán", "nhân viên kế toán"] },
          { word: "engineer", ipa: "/ˌendʒɪˈnɪər/", meaning: "kỹ sư", type: "noun", example: "The software engineer fixed the network bug.", viAnswers: ["kỹ sư"] },
          { word: "technician", ipa: "/tekˈnɪʃn/", meaning: "kỹ thuật viên", type: "noun", example: "A technician came to fix the air conditioner.", viAnswers: ["kỹ thuật viên"] },
          { word: "receptionist", ipa: "/rɪˈsepʃənɪst/", meaning: "lễ tân", type: "noun", example: "Ask the receptionist at the lobby desk.", viAnswers: ["lễ tân", "nhân viên lễ tân"] },
          { word: "customer", ipa: "/ˈkʌstəmər/", meaning: "khách hàng", type: "noun", example: "The customer is asking for a discount.", viAnswers: ["khách hàng"] },
          { word: "client", ipa: "/ˈklaɪənt/", meaning: "khách hàng", type: "noun", example: "We have a meeting with an important client.", viAnswers: ["khách hàng", "đối tác"] },
          { word: "supplier", ipa: "/səˈplaɪər/", meaning: "nhà cung cấp", type: "noun", example: "We order raw materials from a local supplier.", viAnswers: ["nhà cung cấp"] },
          { word: "colleague", ipa: "/ˈkɒliːɡ/", meaning: "đồng nghiệp", type: "noun", example: "I got this suggestion from a colleague.", viAnswers: ["đồng nghiệp"] }
        ]
      },
      {
        name: "6. Địa điểm",
        words: [
          { word: "office", ipa: "/ˈɒfɪs/", meaning: "văn phòng", type: "noun", example: "The office is closed on public holidays.", viAnswers: ["văn phòng"] },
          { word: "meeting room", ipa: "/ˈmiːtɪŋ ruːm/", meaning: "phòng họp", type: "noun", example: "Let's gather in the main meeting room.", viAnswers: ["phòng họp"] },
          { word: "station", ipa: "/ˈsteɪʃn/", meaning: "nhà ga", type: "noun", example: "The train station is crowded in the morning.", viAnswers: ["nhà ga", "trạm"] },
          { word: "airport", ipa: "/ˈeəpɔːt/", meaning: "sân bay", type: "noun", example: "I am driving to the airport to pick up a client.", viAnswers: ["sân bay"] },
          { word: "restaurant", ipa: "/ˈrestrɒnt/", meaning: "nhà hàng", type: "noun", example: "We had dinner at an Italian restaurant.", viAnswers: ["nhà hàng"] },
          { word: "warehouse", ipa: "/ˈweəhaʊs/", meaning: "nhà kho", type: "noun", example: "The inventory is stored in the warehouse.", viAnswers: ["nhà kho", "kho"] },
          { word: "factory", ipa: "/ˈfæktri/", meaning: "nhà máy", type: "noun", example: "The factory produces car parts.", viAnswers: ["nhà máy", "xưởng"] },
          { word: "downtown", ipa: "/ˌdaʊnˈtaʊn/", meaning: "trung tâm", type: "noun / adverb", example: "Our headquarters is located downtown.", viAnswers: ["trung tâm", "trung tâm thành phố"] },
          { word: "upstairs", ipa: "/ˌʌpˈsteəz/", meaning: "tầng trên", type: "adverb", example: "The executive offices are upstairs.", viAnswers: ["tầng trên", "ở tầng trên"] },
          { word: "downstairs", ipa: "/ˌdaʊnˈsteəz/", meaning: "tầng dưới", type: "adverb", example: "The cafeteria is downstairs on the ground floor.", viAnswers: ["tầng dưới", "ở tầng dưới"] },
          { word: "here", ipa: "/hɪər/", meaning: "ở đây", type: "adverb", example: "Please sign your name here.", viAnswers: ["ở đây"] },
          { word: "there", ipa: "/ðeər/", meaning: "ở đó", type: "adverb", example: "The copier is over there near the window.", viAnswers: ["ở đó", "ở kia"] },
          { word: "nearby", ipa: "/ˌnɪəˈbaɪ/", meaning: "gần đây", type: "adverb / adjective", example: "Is there a coffee shop nearby?", viAnswers: ["gần đây", "gần"] }
        ]
      },
      {
        name: "7. Thời gian",
        words: [
          { word: "today", ipa: "/təˈdeɪ/", meaning: "hôm nay", type: "noun / adverb", example: "The report must be completed today.", viAnswers: ["hôm nay"] },
          { word: "tomorrow", ipa: "/təˈmɒrəʊ/", meaning: "ngày mai", type: "noun / adverb", example: "The presentation is scheduled for tomorrow.", viAnswers: ["ngày mai"] },
          { word: "yesterday", ipa: "/ˈjestədeɪ/", meaning: "hôm qua", type: "noun / adverb", example: "The package was delivered yesterday.", viAnswers: ["hôm qua"] },
          { word: "tonight", ipa: "/təˈnaɪt/", meaning: "tối nay", type: "noun / adverb", example: "We are holding a retirement dinner tonight.", viAnswers: ["tối nay"] },
          { word: "this morning", ipa: "/ðɪs ˈmɔːnɪŋ/", meaning: "sáng nay", type: "phrase", example: "I received the email this morning.", viAnswers: ["sáng nay"] },
          { word: "this afternoon", ipa: "/ðɪs ˌɑːftəˈnuːn/", meaning: "chiều nay", type: "phrase", example: "The meeting will start this afternoon.", viAnswers: ["chiều nay"] },
          { word: "next week", ipa: "/nekst wiːk/", meaning: "tuần sau", type: "phrase", example: "We will launch the product next week.", viAnswers: ["tuần sau"] },
          { word: "last month", ipa: "/lɑːst mʌnθ/", meaning: "tháng trước", type: "phrase", example: "Sales were lower last month.", viAnswers: ["tháng trước"] },
          { word: "soon", ipa: "/suːn/", meaning: "sớm", type: "adverb", example: "The train should be arriving soon.", viAnswers: ["sớm"] },
          { word: "later", ipa: "/ˈleɪtər/", meaning: "sau", type: "adverb", example: "I will review the proposal later.", viAnswers: ["sau", "sau đó"] },
          { word: "immediately", ipa: "/ɪˈmiːdiətli/", meaning: "ngay lập tức", type: "adverb", example: "Please reply to this email immediately.", viAnswers: ["ngay lập tức", "ngay"] },
          { word: "recently", ipa: "/ˈriːsntli/", meaning: "gần đây", type: "adverb", example: "The company recently hired a new director.", viAnswers: ["gần đây"] }
        ]
      },
      {
        name: "8. Email & Điện thoại",
        words: [
          { word: "email", ipa: "/ˈiːmeɪl/", meaning: "email", type: "noun / verb", example: "I sent you the agenda via email.", viAnswers: ["email", "thư điện tử"] },
          { word: "attachment", ipa: "/əˈtætʃmənt/", meaning: "tệp đính kèm", type: "noun", example: "Please open the PDF attachment.", viAnswers: ["tệp đính kèm", "phần đính kèm"] },
          { word: "message", ipa: "/ˈmesɪdʒ/", meaning: "tin nhắn/lời nhắn", type: "noun", example: "Would you like to leave a message?", viAnswers: ["tin nhắn", "lời nhắn"] },
          { word: "subject", ipa: "/ˈsʌbdʒɪkt/", meaning: "tiêu đề", type: "noun", example: "What is the subject of the meeting?", viAnswers: ["tiêu đề", "chủ đề"] },
          { word: "recipient", ipa: "/rɪˈsɪpiənt/", meaning: "người nhận", type: "noun", example: "Enter the email address of the recipient.", viAnswers: ["người nhận"] },
          { word: "reply", ipa: "/rɪˈplaɪ/", meaning: "trả lời", type: "verb / noun", example: "He wrote a quick reply to the client.", viAnswers: ["trả lời", "hồi đáp"] },
          { word: "forward", ipa: "/ˈfɔːwəd/", meaning: "chuyển tiếp", type: "verb", example: "Could you forward that email to me?", viAnswers: ["chuyển tiếp"] },
          { word: "call", ipa: "/kɔːl/", meaning: "gọi", type: "verb / noun", example: "Please call extension 304.", viAnswers: ["gọi", "gọi điện", "cuộc gọi"] },
          { word: "voicemail", ipa: "/ˈvɔɪsmeɪl/", meaning: "hộp thư thoại", type: "noun", example: "He left a message on my voicemail.", viAnswers: ["hộp thư thoại", "tin nhắn thoại"] },
          { word: "line", ipa: "/laɪn/", meaning: "đường dây", type: "noun", example: "The phone line is busy right now.", viAnswers: ["đường dây"] },
          { word: "extension", ipa: "/ɪkˈstenʃn/", meaning: "số máy lẻ", type: "noun", example: "Our phone extension is 201.", viAnswers: ["số máy lẻ", "số máy nhánh"] }
        ]
      },
      {
        name: "9. Tiền",
        words: [
          { word: "price", ipa: "/praɪs/", meaning: "giá", type: "noun", example: "What is the price of the ticket?", viAnswers: ["giá", "giá cả"] },
          { word: "cost", ipa: "/kɒst/", meaning: "chi phí", type: "noun / verb", example: "The cost of materials is increasing.", viAnswers: ["chi phí", "giá cả"] },
          { word: "bill", ipa: "/bɪl/", meaning: "hóa đơn", type: "noun", example: "Have you paid the electricity bill yet?", viAnswers: ["hóa đơn"] },
          { word: "fee", ipa: "/fiː/", meaning: "phí", type: "noun", example: "There is an entry fee for the exhibition.", viAnswers: ["phí", "lệ phí"] },
          { word: "discount", ipa: "/ˈdɪskaʊnt/", meaning: "giảm giá", type: "noun / verb", example: "We offer a discount for bulk orders.", viAnswers: ["giảm giá", "sự giảm giá"] },
          { word: "refund", ipa: "/ˈriːfʌnd/", meaning: "hoàn tiền", type: "noun / verb", example: "She received a full refund for the broken item.", viAnswers: ["hoàn tiền", "tiền hoàn lại"] },
          { word: "purchase", ipa: "/ˈpɜːtʃəs/", meaning: "việc mua", type: "noun / verb", example: "Thank you for your purchase.", viAnswers: ["việc mua", "mua", "mua sắm"] },
          { word: "sale", ipa: "/seɪl/", meaning: "đợt giảm giá", type: "noun", example: "These jackets are on sale this week.", viAnswers: ["đợt giảm giá", "giảm giá"] }
        ]
      },
      {
        name: "10. Giao thông",
        words: [
          { word: "bus", ipa: "/bʌs/", meaning: "xe buýt", type: "noun", example: "The bus arrives every fifteen minutes.", viAnswers: ["xe buýt"] },
          { word: "train", ipa: "/treɪn/", meaning: "tàu", type: "noun", example: "He takes the morning train to work.", viAnswers: ["tàu", "tàu hỏa"] },
          { word: "taxi", ipa: "/ˈtæksi/", meaning: "taxi", type: "noun", example: "I took a taxi to the conference hall.", viAnswers: ["taxi"] },
          { word: "flight", ipa: "/flaɪt/", meaning: "chuyến bay", type: "noun", example: "My flight is delayed by two hours.", viAnswers: ["chuyến bay"] },
          { word: "ticket", ipa: "/ˈtɪkɪt/", meaning: "vé", type: "noun", example: "Show your ticket before boarding.", viAnswers: ["vé"] },
          { word: "platform", ipa: "/ˈplætfɔːm/", meaning: "sân ga", type: "noun", example: "The train departs from platform 3.", viAnswers: ["sân ga"] },
          { word: "passenger", ipa: "/ˈpæsɪndʒər/", meaning: "hành khách", type: "noun", example: "Passengers should remain seated.", viAnswers: ["hành khách"] },
          { word: "delay", ipa: "/dɪˈleɪ/", meaning: "trì hoãn", type: "noun / verb", example: "Traffic caused a long delay.", viAnswers: ["trì hoãn", "sự trì hoãn", "chậm trễ"] }
        ]
      },
      {
        name: "11. Cụm trả lời hay gặp",
        words: [
          { word: "Certainly.", ipa: "/ˈsɜːtənli/", meaning: "Chắc chắn.", type: "phrase", example: '\"Could you sign this?\" - \"Certainly.\"', viAnswers: ["Chắc chắn"] },
          { word: "Of course.", ipa: "/ɒv kɔːs/", meaning: "Tất nhiên.", type: "phrase", example: '\"Can I borrow your pen?\" - \"Of course.\"', viAnswers: ["Tất nhiên"] },
          { word: "Sure.", ipa: "/ʃɔːr/", meaning: "Được thôi.", type: "phrase", example: '\"Would you like some tea?\" - \"Sure.\"', viAnswers: ["Được thôi", "Chắc chắn"] },
          { word: "No problem.", ipa: "/nəʊ ˈprɒbləm/", meaning: "Không vấn đề gì.", type: "phrase", example: '\"Thanks for the help.\" - \"No problem.\"', viAnswers: ["Không vấn đề gì"] },
          { word: "I'd be happy to.", ipa: "/aɪd bi ˈhæpi tuː/", meaning: "Rất sẵn lòng.", type: "phrase", example: '\"Could you lead the tour?\" - \"I\'d be happy to.\"', viAnswers: ["Rất sẵn lòng"] },
          { word: "That's fine.", ipa: "/ðæts faɪn/", meaning: "Được thôi.", type: "phrase", example: '\"I will call you tomorrow.\" - \"That\'s fine.\"', viAnswers: ["Được thôi"] },
          { word: "I'm afraid not.", ipa: "/aɪm əˈfreɪd nɒt/", meaning: "E là không.", type: "phrase", example: '\"Are the reports ready?\" - \"I\'m afraid not.\"', viAnswers: ["E là không"] },
          { word: "Not yet.", ipa: "/nɒt jet/", meaning: "Chưa.", type: "phrase", example: '\"Have you sent the email?\" - \"Not yet.\"', viAnswers: ["Chưa"] },
          { word: "Maybe later.", ipa: "/ˈmeɪbi ˈleɪtər/", meaning: "Có lẽ sau.", type: "phrase", example: '\"Should we discuss it now?\" - \"Maybe later.\"', viAnswers: ["Có lẽ sau"] },
          { word: "I'm not sure.", ipa: "/aɪm nɒt ʃɔːr/", meaning: "Tôi không chắc.", type: "phrase", example: '\"Where is Mr. Kim?\" - \"I\'m not sure.\"', viAnswers: ["Tôi không chắc"] },
          { word: "I have no idea.", ipa: "/aɪ hæv nəʊ aɪˈdɪə/", meaning: "Tôi không biết.", type: "phrase", example: '\"When does the flight arrive?\" - \"I have no idea.\"', viAnswers: ["Tôi không biết"] },
          { word: "Let me check.", ipa: "/let mi tʃek/", meaning: "Để tôi kiểm tra.", type: "phrase", example: '\"Is the room available?\" - \"Let me check.\"', viAnswers: ["Để tôi kiểm tra", "Để tôi xem"] },
          { word: "I'll ask.", ipa: "/aɪl ɑːsk/", meaning: "Tôi sẽ hỏi.", type: "phrase", example: '\"Where should we park?\" - \"I\'ll ask.\"', viAnswers: ["Tôi sẽ hỏi"] },
          { word: "I'll call back.", ipa: "/aɪl kɔːl bæk/", meaning: "Tôi sẽ gọi lại.", type: "phrase", example: '\"The line is busy.\" - \"I\'ll call back.\"', viAnswers: ["Tôi sẽ gọi lại"] },
          { word: "I think so.", ipa: "/aɪ θɪŋk səʊ/", meaning: "Tôi nghĩ vậy.", type: "phrase", example: '\"Is the office open today?\" - \"I think so.\"', viAnswers: ["Tôi nghĩ vậy"] },
          { word: "I don't think so.", ipa: "/aɪ dəʊnt θɪŋk səʊ/", meaning: "Tôi không nghĩ vậy.", type: "phrase", example: '\"Will it rain today?\" - \"I don\'t think so.\"', viAnswers: ["Tôi không nghĩ vậy"] },
          { word: "That depends.", ipa: "/ðæt dɪˈpendz/", meaning: "Còn tùy.", type: "phrase", example: '\"Are you going to attend?\" - \"That depends.\"', viAnswers: ["Còn tùy", "Tùy thuộc"] }
        ]
      },
      {
        name: "12. Cụm nghe nhiều",
        words: [
          { word: "on time", ipa: "/ɒn taɪm/", meaning: "đúng giờ", type: "phrase", example: "The train arrived right on time.", viAnswers: ["đúng giờ"] },
          { word: "in advance", ipa: "/ɪn ədˈvɑːns/", meaning: "trước", type: "phrase", example: "Please book your tickets in advance.", viAnswers: ["trước", "sớm", "đặt trước"] },
          { word: "right away", ipa: "/raɪt əˈweɪ/", meaning: "ngay lập tức", type: "phrase", example: "I will send you the document right away.", viAnswers: ["ngay lập tức", "ngay"] },
          { word: "as soon as possible", ipa: "/æz suːn æz ˈpɒsəbl/", meaning: "càng sớm càng tốt", type: "phrase", example: "Please reply to my email as soon as possible.", viAnswers: ["càng sớm càng tốt"] },
          { word: "by mistake", ipa: "/baɪ mɪsˈteɪk/", meaning: "nhầm", type: "phrase", example: "I sent the invoice to the wrong person by mistake.", viAnswers: ["nhầm", "vô tình"] },
          { word: "on sale", ipa: "/ɒn seɪl/", meaning: "đang giảm giá", type: "phrase", example: "Are these items on sale?", viAnswers: ["đang giảm giá", "giảm giá"] },
          { word: "out of stock", ipa: "/aʊt ɒv stɒk/", meaning: "hết hàng", type: "phrase", example: "I'm sorry, but that computer model is out of stock.", viAnswers: ["hết hàng"] },
          { word: "available", ipa: "/əˈveɪləbl/", meaning: "có sẵn", type: "adjective", example: "Is the manager available to talk?", viAnswers: ["có sẵn", "rảnh"] },
          { word: "in charge of", ipa: "/ɪn tʃɑːdʒ ɒv/", meaning: "phụ trách", type: "phrase", example: "Who is in charge of this project?", viAnswers: ["phụ trách"] },
          { word: "take care of", ipa: "/teɪk keər ɒv/", meaning: "xử lý/chăm sóc", type: "phrase", example: "I will take care of that problem.", viAnswers: ["xử lý", "chăm sóc"] }
        ]
      }
    ]
  },
  {
    id: "part3",
    part: "Part 3",
    title: "Đoạn hội thoại",
    focus: "Chủ đề (topics), cụm từ cố định (collocations) và các dạng câu hỏi thường gặp.",
    grammar: {
      overview: "Mục tiêu 600 TOEIC: Part 3 kiểm tra khả năng nghe hiểu theo mạch câu chuyện. Bên cạnh từ đơn lẻ, việc nắm được các chủ đề (topics) và cụm từ cố định (collocations) xuất hiện lặp đi lặp lại là chìa khóa để đạt điểm cao.",
      structures: [
        {
          title: "Các dạng câu hỏi thường gặp",
          formula: "Dạng câu hỏi -> Dấu hiệu nghe / từ khóa",
          example: "Chủ đề: What talk about? | Mục đích: Why call? | Nhân vật: Who is the woman? | Địa điểm: Where take place?",
          explanation: "Đọc trước câu hỏi giúp định hình thông tin cần tìm. Chú ý các dạng: Vấn đề (What problem?), Giải pháp (What suggest?), Bước tiếp theo (What do next?)."
        },
        {
          title: "Các chủ đề thường gặp (Ưu tiên học)",
          formula: "Mức độ ưu tiên -> Chủ đề",
          example: "⭐⭐⭐⭐⭐ Văn phòng, Cuộc họp, Email, Điện thoại, Giao hàng, Lịch trình. | ⭐⭐⭐⭐ Mua sắm, Nhà hàng, Khách sạn, Du lịch, Bảo trì.",
          explanation: "Luyện nghe theo từng chủ đề để quen với các mẫu diễn đạt lặp đi lặp lại."
        }
      ],
      traps: [
        {
          name: "Bẫy từ trùng khớp (Word Match)",
          description: "Phương án chứa từ giống hệt trong bài nhưng sai nghĩa hoặc sai ngữ cảnh.",
          example: "Nghe thấy 'projector is broken' -> Chọn phương án nhiễu 'buy a projector' -> SAI.",
          tip: "Tránh chọn máy móc từ nghe thấy. Hãy chú ý đến ý nghĩa của cả cụm từ đồng nghĩa (paraphrase)."
        },
        {
          name: "Bẫy thay đổi thông tin phút chót",
          description: "Các nhân vật thảo luận và thay đổi phương án đã chọn ở cuối đoạn hội thoại.",
          example: "Đồng ý gặp thứ Ba, nhưng sau đó đổi sang thứ Năm vì bận.",
          tip: "Nghe đến hết cuộc đối thoại, đặc biệt chú ý các từ: But, However, Actually, Unfortunately."
        }
      ],
      tips: [
        "MỤC TIÊU 600 TOEIC - CÁC CHỦ ĐỀ CÓ THỂ BỎ QUA:",
        "💡 Không cần học sâu các chủ đề hiếm gặp: Bảo hiểm, Chứng khoán, Pháp lý, Bất động sản, Sản xuất chuyên sâu, Marketing chuyên ngành.",
        "🎯 Đào tạo & Tuyển dụng & Sự kiện (⭐⭐⭐): Chỉ cần nắm từ vựng cơ bản.",
        "⚡ Lời khuyên vàng: Hãy nghe theo cụm từ (Collocations) thay vì từ đơn lẻ, giúp nhận diện thông tin nhanh gấp 2 lần."
      ]
    },
    sets: [
      {
        name: "1. Collocations hay gặp",
        words: [
          { word: "attend a meeting", ipa: "/əˈtend ə ˈmiːtɪŋ/", meaning: "tham dự cuộc họp", type: "phrase", example: "All managers must attend a meeting tomorrow.", viAnswers: ["tham dự cuộc họp", "họp"] },
          { word: "hold a meeting", ipa: "/həʊld ə ˈmiːtɪŋ/", meaning: "tổ chức cuộc họp", type: "phrase", example: "We will hold a meeting in the conference room.", viAnswers: ["tổ chức cuộc họp", "tổ chức họp"] },
          { word: "schedule a meeting", ipa: "/ˈʃedjuːl ə ˈmiːtɪŋ/", meaning: "lên lịch họp", type: "phrase", example: "Let's schedule a meeting for next Monday.", viAnswers: ["lên lịch họp", "lên lịch cuộc họp"] },
          { word: "cancel a meeting", ipa: "/ˈkænsl ə ˈmiːtɪŋ/", meaning: "hủy họp", type: "phrase", example: "The director had to cancel a meeting.", viAnswers: ["hủy họp", "hủy cuộc họp"] },
          { word: "postpone a meeting", ipa: "/pəʊˈspəʊn ə ˈmiːtɪŋ/", meaning: "hoãn họp", type: "phrase", example: "They decided to postpone a meeting until next week.", viAnswers: ["hoãn họp", "hoãn cuộc họp"] },
          { word: "make an appointment", ipa: "/meɪk ən əˈpɔɪntmənt/", meaning: "đặt lịch hẹn", type: "phrase", example: "I need to make an appointment with the client.", viAnswers: ["đặt lịch hẹn", "đặt hẹn"] },
          { word: "keep an appointment", ipa: "/kiːp ən əˈpɔɪntmənt/", meaning: "giữ cuộc hẹn", type: "phrase", example: "Please make sure you keep an appointment.", viAnswers: ["giữ cuộc hẹn", "giữ hẹn"] },
          { word: "miss an appointment", ipa: "/mɪs ən əˈpɔɪntmənt/", meaning: "lỡ cuộc hẹn", type: "phrase", example: "I am sorry that I missed an appointment.", viAnswers: ["lỡ cuộc hẹn", "lỡ hẹn"] },
          { word: "submit a report", ipa: "/səbˈmɪt ə rɪˈpɔːt/", meaning: "nộp báo cáo", type: "phrase", example: "Please submit a report by Friday afternoon.", viAnswers: ["nộp báo cáo"] },
          { word: "prepare a report", ipa: "/prɪˈpeər ə rɪˈpɔːt/", meaning: "chuẩn bị báo cáo", type: "phrase", example: "He is preparing a report on the sales budget.", viAnswers: ["chuẩn bị báo cáo"] },
          { word: "review a report", ipa: "/rɪˈvjuː ə rɪˈpɔːt/", meaning: "xem báo cáo", type: "phrase", example: "Let's review a report together.", viAnswers: ["xem báo cáo", "xem lại báo cáo", "đánh giá báo cáo"] },
          { word: "sign a contract", ipa: "/saɪn ə ˈkɒntrækt/", meaning: "ký hợp đồng", type: "phrase", example: "They are ready to sign a contract.", viAnswers: ["ký hợp đồng"] },
          { word: "receive an email", ipa: "/rɪˈsiːv ən ˈiːmeɪl/", meaning: "nhận email", type: "phrase", example: "Did you receive an email from the supplier?", viAnswers: ["nhận email", "nhận thư điện tử"] },
          { word: "send an email", ipa: "/send ən ˈiːmeɪl/", meaning: "gửi email", type: "phrase", example: "I will send an email with the details.", viAnswers: ["gửi email", "gửi thư điện tử"] },
          { word: "reply to an email", ipa: "/rɪˈplaɪ tuː ən ˈiːmeɪl/", meaning: "trả lời email", type: "phrase", example: "Please reply to an email as soon as possible.", viAnswers: ["trả lời email", "hồi đáp email"] },
          { word: "place an order", ipa: "/pleɪs ən ˈɔːdər/", meaning: "đặt hàng", type: "phrase", example: "You can place an order on our website.", viAnswers: ["đặt hàng", "đặt đơn hàng"] },
          { word: "receive an order", ipa: "/rɪˈsiːv ən ˈɔːdər/", meaning: "nhận đơn hàng", type: "phrase", example: "We just received an order from a new customer.", viAnswers: ["nhận đơn hàng", "nhận hàng"] },
          { word: "deliver a package", ipa: "/dɪˈlɪvər ə ˈpækɪdʒ/", meaning: "giao kiện hàng", type: "phrase", example: "The courier will deliver a package today.", viAnswers: ["giao kiện hàng", "giao hàng", "giao bưu phẩm"] },
          { word: "make a payment", ipa: "/meɪk ə ˈpeɪmənt/", meaning: "thanh toán", type: "phrase", example: "You must make a payment by the due date.", viAnswers: ["thanh toán", "trả tiền"] },
          { word: "issue an invoice", ipa: "/ˈɪʃuː ən ˈɪnvɔɪ/", meaning: "xuất hóa đơn", type: "phrase", example: "We will issue an invoice for the service.", viAnswers: ["xuất hóa đơn", "gửi hóa đơn"] }
        ]
      },
      {
        name: "2. Cụm thời gian",
        words: [
          { word: "next Monday", ipa: "/nekst ˈmʌndeɪ/", meaning: "thứ Hai tới", type: "phrase", example: "The training will begin next Monday.", viAnswers: ["thứ Hai tới", "thứ Hai tuần sau"] },
          { word: "by Friday", ipa: "/baɪ ˈfraɪdeɪ/", meaning: "trước thứ Sáu", type: "phrase", example: "All reports must be submitted by Friday.", viAnswers: ["trước thứ Sáu"] },
          { word: "at 2 p.m.", ipa: "/æt tuː piː em/", meaning: "lúc 2 giờ chiều", type: "phrase", example: "The client will arrive at 2 p.m.", viAnswers: ["lúc 2 giờ chiều", "lúc 2 giờ"] },
          { word: "in the morning", ipa: "/ɪn ðə ˈmɔːnɪŋ/", meaning: "buổi sáng", type: "phrase", example: "We have a brief meeting in the morning.", viAnswers: ["buổi sáng", "vào buổi sáng"] },
          { word: "during the meeting", ipa: "/ˈdjʊərɪŋ ðə ˈmiːtɪŋ/", meaning: "trong cuộc họp", type: "phrase", example: "Please turn off your phones during the meeting.", viAnswers: ["trong cuộc họp", "trong họp"] },
          { word: "after lunch", ipa: "/ˈɑːftər lʌntʃ/", meaning: "sau bữa trưa", type: "phrase", example: "I will review the contract after lunch.", viAnswers: ["sau bữa trưa", "sau ăn trưa"] },
          { word: "before noon", ipa: "/bɪˈfɔːr nuːn/", meaning: "trước buổi trưa", type: "phrase", example: "We should finish this task before noon.", viAnswers: ["trước buổi trưa", "trước trưa"] },
          { word: "as soon as possible", ipa: "/æz suːn æz ˈpɒsəbl/", meaning: "càng sớm càng tốt", type: "phrase", example: "Please send me the files as soon as possible.", viAnswers: ["càng sớm càng tốt"] },
          { word: "right away", ipa: "/raɪt əˈweɪ/", meaning: "ngay lập tức", type: "phrase", example: "I will call the technician right away.", viAnswers: ["ngay lập tức", "ngay"] }
        ]
      },
      {
        name: "3. Cụm chỉ địa điểm",
        words: [
          { word: "at the office", ipa: "/æt ðə ˈɒfɪs/", meaning: "ở văn phòng", type: "phrase", example: "She is currently working at the office.", viAnswers: ["ở văn phòng"] },
          { word: "in the lobby", ipa: "/ɪn ðə ˈlɒbi/", meaning: "ở sảnh", type: "phrase", example: "Please wait for me in the lobby.", viAnswers: ["ở sảnh", "ở sảnh chờ"] },
          { word: "on the second floor", ipa: "/ɒn ðə ˈsekənd flɔːr/", meaning: "tầng hai", type: "phrase", example: "The meeting room is on the second floor.", viAnswers: ["tầng hai", "ở tầng hai"] },
          { word: "in the warehouse", ipa: "/in ðə ˈweəhaʊs/", meaning: "trong kho", type: "phrase", example: "We keep all extra inventory in the warehouse.", viAnswers: ["trong kho", "trong nhà kho"] },
          { word: "at the front desk", ipa: "/æt ðə frʌnt desk/", meaning: "quầy lễ tân", type: "phrase", example: "Leave the key at the front desk.", viAnswers: ["quầy lễ tân", "tại quầy lễ tân"] },
          { word: "at the airport", ipa: "/æt ðə ˈeəpɔːt/", meaning: "sân bay", type: "phrase", example: "I am picking up the director at the airport.", viAnswers: ["sân bay", "ở sân bay"] },
          { word: "in the parking lot", ipa: "/in ðə ˈpɑːkɪŋ lɒt/", meaning: "bãi đỗ xe", type: "phrase", example: "Park your vehicle in the parking lot.", viAnswers: ["bãi đỗ xe", "trong bãi đỗ xe"] }
        ]
      },
      {
        name: "4. Động từ cực hay gặp",
        words: [
          { word: "remind", ipa: "/rɪˈmaɪnd/", meaning: "nhắc nhở, nhắc", type: "verb", example: "Please remind me to send the invoice.", viAnswers: ["nhắc nhở", "nhắc"] },
          { word: "recommend", ipa: "/ˌrekəˈmend/", meaning: "đề nghị, giới thiệu", type: "verb", example: "Which restaurant do you recommend?", viAnswers: ["đề nghị", "khuyên", "giới thiệu"] },
          { word: "suggest", ipa: "/səˈdʒest/", meaning: "gợi ý", type: "verb", example: "What do you suggest we do next?", viAnswers: ["gợi ý", "đề xuất"] },
          { word: "mention", ipa: "/ˈmenʃn/", meaning: "đề cập", type: "verb", example: "He mentioned that the budget was approved.", viAnswers: ["đề cập", "nói đến"] },
          { word: "notice", ipa: "/ˈnəʊtɪs/", meaning: "nhận thấy", type: "verb", example: "Did you notice the change in the schedule?", viAnswers: ["nhận thấy", "chú ý"] },
          { word: "reserve", ipa: "/rɪˈzɜːv/", meaning: "đặt chỗ", type: "verb", example: "We should reserve a flight ticket early.", viAnswers: ["đặt chỗ", "đặt trước"] },
          { word: "install", ipa: "/ɪnˈstɔːl/", meaning: "lắp đặt", type: "verb", example: "A technician will install the new software.", viAnswers: ["lắp đặt", "cài đặt"] },
          { word: "update", ipa: "/ˌʌpˈdeɪt/", meaning: "cập nhật", type: "verb", example: "Please update the customer database.", viAnswers: ["cập nhật"] },
          { word: "print", ipa: "/prɪnt/", meaning: "in", type: "verb", example: "I need to print ten copies of this report.", viAnswers: ["in"] },
          { word: "copy", ipa: "/ˈkɒpi/", meaning: "sao chép", type: "verb", example: "Could you copy these documents for me?", viAnswers: ["sao chép", "photo", "chép"] },
          { word: "borrow", ipa: "/ˈbɒrəʊ/", meaning: "mượn", type: "verb", example: "Can I borrow your calculator for a moment?", viAnswers: ["mượn"] },
          { word: "lend", ipa: "/lend/", meaning: "cho mượn", type: "verb", example: "Could you lend me your pen?", viAnswers: ["cho mượn"] },
          { word: "collect", ipa: "/kəˈlekt/", meaning: "thu thập", type: "verb", example: "We need to collect feedback from the users.", viAnswers: ["thu thập", "thu gom"] },
          { word: "deliver", ipa: "/dɪˈlɪvər/", meaning: "giao", type: "verb", example: "They will deliver the package tomorrow.", viAnswers: ["giao", "giao hàng"] }
        ]
      },
      {
        name: "5. Tính từ hay gặp",
        words: [
          { word: "available", ipa: "/əˈveɪləbl/", meaning: "có sẵn, rảnh", type: "adjective", example: "Is the conference room available today?", viAnswers: ["có sẵn", "rảnh"] },
          { word: "busy", ipa: "/ˈbɪzi/", meaning: "bận", type: "adjective", example: "The manager is very busy with the audit.", viAnswers: ["bận", "bận rộn"] },
          { word: "late", ipa: "/leɪt/", meaning: "muộn", type: "adjective", example: "Why was the flight late today?", viAnswers: ["muộn", "trễ"] },
          { word: "early", ipa: "/ˈɜːli/", meaning: "sớm", type: "adjective", example: "We should arrive early to prepare.", viAnswers: ["sớm"] },
          { word: "full", ipa: "/fʊl/", meaning: "đầy", type: "adjective", example: "The parking lot is completely full.", viAnswers: ["đầy"] },
          { word: "empty", ipa: "/ˈempti/", meaning: "trống", type: "adjective", example: "The meeting room was empty.", viAnswers: ["trống", "rỗng"] },
          { word: "ready", ipa: "/ˈredi/", meaning: "sẵn sàng", type: "adjective", example: "Are the documents ready for the client?", viAnswers: ["sẵn sàng"] },
          { word: "broken", ipa: "/ˈbrəʊkən/", meaning: "hỏng", type: "adjective", example: "The photocopy machine is broken again.", viAnswers: ["hỏng", "bị hỏng"] },
          { word: "necessary", ipa: "/ˈnesəsəri/", meaning: "cần thiết", type: "adjective", example: "It is necessary to sign this lease today.", viAnswers: ["cần thiết"] },
          { word: "urgent", ipa: "/ˈɜːdʒənt/", meaning: "khẩn cấp", type: "adjective", example: "I have an urgent message for the director.", viAnswers: ["khẩn cấp", "gấp"] }
        ]
      },
      {
        name: "6. Trạng từ hay gặp",
        words: [
          { word: "already", ipa: "/ɔːlˈredi/", meaning: "đã", type: "adverb", example: "He has already left the office.", viAnswers: ["đã", "đã... rồi"] },
          { word: "yet", ipa: "/jet/", meaning: "chưa", type: "adverb", example: "The package has not arrived yet.", viAnswers: ["chưa", "vẫn chưa"] },
          { word: "still", ipa: "/stɪl/", meaning: "vẫn", type: "adverb", example: "We are still waiting for the approval.", viAnswers: ["vẫn", "vẫn còn"] },
          { word: "recently", ipa: "/ˈriːsntli/", meaning: "gần đây", type: "adverb", example: "They recently updated the software.", viAnswers: ["gần đây", "mới đây"] },
          { word: "probably", ipa: "/ˈprɒbəbli/", meaning: "có lẽ", type: "adverb", example: "She will probably attend the seminar.", viAnswers: ["có lẽ"] },
          { word: "immediately", ipa: "/ɪˈmiːdiətli/", meaning: "ngay lập tức", type: "adverb", example: "Please contact the client immediately.", viAnswers: ["ngay lập tức", "ngay"] },
          { word: "finally", ipa: "/ˈfaɪnəli/", meaning: "cuối cùng", type: "adverb", example: "The project was finally completed.", viAnswers: ["cuối cùng"] }
        ]
      }
    ]
  },
  {
    id: "part4",
    part: "Part 4",
    title: "Bài nói ngắn",
    focus: "Tin nhắn thoại, thông báo, quảng cáo, bài phát biểu, hướng dẫn, thời tiết, sự kiện.",
    grammar: {
      overview: "Mục tiêu 600 TOEIC: Part 4 chỉ có 1 người nói (độc thoại). Khoảng 80–90% từ vựng của Part 4 trùng với Part 3, do đó bạn chỉ cần học các từ/cụm từ đặc trưng của Part 4 và tập trung luyện nghe theo từng dạng bài.",
      structures: [
        {
          title: "Các dạng bài nghe đặc trưng",
          formula: "Dạng bài -> Dấu hiệu mở đầu",
          example: "Thông báo ga/sân bay: 'Attention, passengers...' | Quảng cáo: 'Don't miss...' | Tin nhắn thoại: 'You've reached...'",
          explanation: "Nhận biết dạng bài ngay từ 1-2 câu đầu tiên giúp bạn định hình bối cảnh nhanh chóng."
        },
        {
          title: "Các dạng bài nghe bổ sung",
          formula: "Dạng bài -> Dấu hiệu mở đầu",
          example: "Hướng dẫn: 'Please follow...' | Giới thiệu sự kiện: 'Welcome to...' | Thời tiết: 'Here's today's weather forecast...'",
          explanation: "Chú ý nghe các thông tin chính: ai nói, nói cho ai, vấn đề là gì, hành động tiếp theo."
        }
      ],
      traps: [
        {
          name: "Bẫy số liệu gây nhiễu",
          description: "Đề cập đến nhiều con số hoặc mốc thời gian khác nhau để gây nhầm lẫn.",
          example: "Mở cửa lúc 8h, sự kiện bắt đầu lúc 9h, bài phát biểu lúc 10h. Hỏi sự kiện bắt đầu khi nào.",
          tip: "Ghi nhớ mối liên kết giữa con số và danh từ đi kèm để chọn chính xác thông tin được hỏi."
        },
        {
          name: "Bẫy từ đồng nghĩa (Paraphrasing)",
          description: "Đáp án đúng dùng từ đồng nghĩa hoặc cách nói khác với từ khóa nghe được.",
          example: "Nghe 'reduce prices by 20%' -> Chọn đáp án 'offer a discount'.",
          tip: "Tập trung nâng cao vốn từ đồng nghĩa thay vì chỉ nghe bắt từ khóa giống hệt."
        }
      ],
      tips: [
        "MẸO LÀM BÀI PART 4 HIỆU QUẢ:",
        "💡 Không học lại từ trùng: Bỏ qua các từ đã học ở Part 3 như meeting, manager, schedule, report, invoice...",
        "🎯 Luyện nghe theo dạng bài: Tập trung nghe riêng từng thể loại (voicemail, announcement, weather...) sau khi đã nắm vững từ vựng.",
        "⚡ Tận dụng 1-2 câu đầu: Thường chứa thông tin trả lời cho câu hỏi đầu tiên (chủ đề hoặc người nói)."
      ]
    },
    sets: [
      {
        name: "1. Thông báo (Announcements)",
        words: [
          { word: "announcement", ipa: "/əˈnaʊnsmənt/", meaning: "thông báo", type: "noun", example: "Please listen to the following announcement.", viAnswers: ["thông báo"] },
          { word: "attention", ipa: "/əˈtenʃn/", meaning: "chú ý", type: "noun", example: "May I have your attention, please?", viAnswers: ["chú ý"] },
          { word: "boarding", ipa: "/ˈbɔːdɪŋ/", meaning: "lên máy bay", type: "noun", example: "Boarding will begin at gate 15.", viAnswers: ["lên máy bay", "lên tàu"] },
          { word: "gate", ipa: "/ɡeɪt/", meaning: "cổng lên máy bay", type: "noun", example: "Please proceed to gate 4 immediately.", viAnswers: ["cổng", "cổng lên máy bay"] },
          { word: "departure", ipa: "/dɪˈpɑːtʃər/", meaning: "khởi hành", type: "noun", example: "Check the departure board for flight times.", viAnswers: ["khởi hành", "sự khởi hành"] },
          { word: "arrival", ipa: "/əˈraɪvl/", meaning: "đến", type: "noun", example: "The scheduled arrival time is 10:30 AM.", viAnswers: ["đến", "sự đến nơi"] },
          { word: "terminal", ipa: "/ˈtɜːmɪnl/", meaning: "nhà ga/sân bay", type: "noun", example: "The flight departs from terminal 2.", viAnswers: ["nhà ga", "nhà ga sân bay"] },
          { word: "route", ipa: "/ruːt/", meaning: "tuyến đường", type: "noun", example: "The bus route has changed recently.", viAnswers: ["tuyến đường", "lộ trình"] },
          { word: "destination", ipa: "/ˌdestɪˈneɪʃn/", meaning: "điểm đến", type: "noun", example: "We will reach our destination in two hours.", viAnswers: ["điểm đến", "nơi đến"] },
          { word: "delay", ipa: "/dɪˈleɪ/", meaning: "trì hoãn", type: "noun / verb", example: "We apologize for the flight delay.", viAnswers: ["trì hoãn", "sự trì hoãn"] },
          { word: "cancellation", ipa: "/ˌkænsəˈleɪʃn/", meaning: "hủy chuyến", type: "noun", example: "The train cancellation caused many problems.", viAnswers: ["hủy chuyến", "sự hủy bỏ"] },
          { word: "schedule change", ipa: "/ˈʃedjuːl tʃeɪndʒ/", meaning: "thay đổi lịch trình", type: "phrase", example: "We will notify you of any schedule change.", viAnswers: ["thay đổi lịch trình", "đổi lịch"] }
        ]
      },
      {
        name: "2. Quảng cáo (Advertisements)",
        words: [
          { word: "promotion", ipa: "/prəˈməʊʃn/", meaning: "chương trình khuyến mãi", type: "noun", example: "This promotion is valid for three days.", viAnswers: ["khuyến mãi", "khuyến mại"] },
          { word: "special offer", ipa: "/ˈspeʃl ˈɒfər/", meaning: "ưu đãi đặc biệt", type: "phrase", example: "Take advantage of our special offer today.", viAnswers: ["ưu đãi đặc biệt", "khuyến mãi đặc biệt"] },
          { word: "limited-time offer", ipa: "/ˌlɪmɪtɪd ˈtaɪm ˈɒfər/", meaning: "ưu đãi có thời hạn", type: "phrase", example: "This is a limited-time offer, so act fast.", viAnswers: ["ưu đãi có thời hạn", "khuyến mãi giới hạn"] },
          { word: "warranty", ipa: "/ˈwɒrənti/", meaning: "bảo hành", type: "noun", example: "The TV comes with a two-year warranty.", viAnswers: ["bảo hành", "giấy bảo hành"] },
          { word: "guarantee", ipa: "/ˌɡærənˈtiː/", meaning: "bảo đảm", type: "verb", example: "We guarantee customer satisfaction.", viAnswers: ["bảo đảm", "cam kết"] },
          { word: "feature", ipa: "/ˈfiːtʃər/", meaning: "tính năng", type: "noun", example: "What is the key feature of this product?", viAnswers: ["tính năng", "đặc trưng"] },
          { word: "brand", ipa: "/brænd/", meaning: "thương hiệu", type: "noun", example: "This brand is famous for quality.", viAnswers: ["thương hiệu", "nhãn hiệu"] },
          { word: "model", ipa: "/ˈmɒdl/", meaning: "mẫu sản phẩm", type: "noun", example: "This model is currently out of stock.", viAnswers: ["mẫu", "mẫu sản phẩm", "kiểu"] },
          { word: "quality", ipa: "/ˈkwɒlɪti/", meaning: "chất lượng", type: "noun", example: "We focus on high quality products.", viAnswers: ["chất lượng"] },
          { word: "latest", ipa: "/ˈleɪtɪst/", meaning: "mới nhất", type: "adjective", example: "Here is the latest version of the app.", viAnswers: ["mới nhất"] },
          { word: "satisfaction", ipa: "/ˌsætɪsˈfækʃn/", meaning: "sự hài lòng", type: "noun", example: "Customer satisfaction is our priority.", viAnswers: ["hài lòng", "sự hài lòng"] }
        ]
      },
      {
        name: "3. Tin nhắn thoại (Voice Messages)",
        words: [
          { word: "voicemail", ipa: "/ˈvɔɪsmeɪl/", meaning: "hộp thư thoại", type: "noun", example: "Please leave a message on my voicemail.", viAnswers: ["hộp thư thoại", "tin nhắn thoại"] },
          { word: "reach", ipa: "/riːtʃ/", meaning: "liên hệ được", type: "verb", example: "You can reach me at extension 405.", viAnswers: ["liên hệ", "liên lạc"] },
          { word: "unavailable", ipa: "/ˌʌnəˈveɪləbl/", meaning: "không có mặt", type: "adjective", example: "The manager is currently unavailable.", viAnswers: ["không có mặt", "bận"] },
          { word: "contact", ipa: "/ˈkɒntækt/", meaning: "liên hệ", type: "verb", example: "Please contact me for details.", viAnswers: ["liên hệ", "liên lạc"] },
          { word: "extension", ipa: "/ɪkˈstenʃn/", meaning: "số máy lẻ", type: "noun", example: "Call me at extension 203.", viAnswers: ["số máy lẻ", "số máy nhánh"] },
          { word: "operator", ipa: "/ˈɒpəreɪtər/", meaning: "tổng đài viên", type: "noun", example: "Wait for the operator to transfer you.", viAnswers: ["tổng đài viên", "người vận hành"] }
        ]
      },
      {
        name: "4. Bài phát biểu (Speeches)",
        words: [
          { word: "audience", ipa: "/ˈɔːdiəns/", meaning: "khán giả", type: "noun", example: "The audience clapped after the speech.", viAnswers: ["khán giả", "thính giả"] },
          { word: "speaker", ipa: "/ˈspiːkər/", meaning: "diễn giả", type: "noun", example: "Our next speaker is Dr. Evans.", viAnswers: ["diễn giả", "người nói"] },
          { word: "session", ipa: "/ˈseʃn/", meaning: "phiên họp", type: "noun", example: "The morning session begins at 9 AM.", viAnswers: ["phiên họp", "buổi họp", "phiên"] },
          { word: "ceremony", ipa: "/ˈserəməni/", meaning: "buổi lễ", type: "noun", example: "The award ceremony was very exciting.", viAnswers: ["buổi lễ", "nghi lễ"] },
          { word: "opening remarks", ipa: "/ˈoʊpənɪŋ rɪˈmɑːks/", meaning: "lời phát biểu khai mạc", type: "phrase", example: "The director gave the opening remarks.", viAnswers: ["phát biểu khai mạc", "lời khai mạc"] },
          { word: "closing remarks", ipa: "/ˈkloʊzɪŋ rɪˈmɑːks/", meaning: "lời phát biểu kết thúc", type: "phrase", example: "The host delivered the closing remarks.", viAnswers: ["phát biểu kết thúc", "lời bế mạc"] }
        ]
      },
      {
        name: "5. Hướng dẫn (Instructions)",
        words: [
          { word: "instruction", ipa: "/ɪnˈstrʌkʃn/", meaning: "hướng dẫn", type: "noun", example: "Follow the instructions on the manual.", viAnswers: ["hướng dẫn", "sự hướng dẫn"] },
          { word: "procedure", ipa: "/prəˈsiːdʒər/", meaning: "quy trình", type: "noun", example: "What is the standard safety procedure?", viAnswers: ["quy trình", "thủ tục"] },
          { word: "guideline", ipa: "/ˈɡaɪdlaɪn/", meaning: "hướng dẫn", type: "noun", example: "Here are some guidelines for the project.", viAnswers: ["hướng dẫn"] },
          { word: "requirement", ipa: "/rɪˈkwaɪərmənt/", meaning: "yêu cầu", type: "noun", example: "Clean code is a basic requirement here.", viAnswers: ["yêu cầu"] },
          { word: "safety", ipa: "/ˈseɪfti/", meaning: "an toàn", type: "noun", example: "Safety is our number one priority.", viAnswers: ["an toàn", "sự an toàn"] },
          { word: "emergency", ipa: "/ɪˈmɜːdʒənsi/", meaning: "khẩn cấp", type: "noun", example: "In case of emergency, use the exit.", viAnswers: ["khẩn cấp", "sự khẩn cấp"] },
          { word: "exit", ipa: "/ˈeksɪt/", meaning: "lối thoát", type: "noun", example: "The emergency exit is clearly marked.", viAnswers: ["lối thoát", "lối ra"] },
          { word: "entrance", ipa: "/ˈentrəns/", meaning: "lối vào", type: "noun", example: "The main entrance is currently locked.", viAnswers: ["lối vào", "cổng vào"] }
        ]
      },
      {
        name: "6. Thời tiết (Weather)",
        words: [
          { word: "forecast", ipa: "/ˈfɔːkɑːst/", meaning: "dự báo", type: "noun", example: "Let's check the weather forecast.", viAnswers: ["dự báo"] },
          { word: "temperature", ipa: "/ˈtemprətʃər/", meaning: "nhiệt độ", type: "noun", example: "The temperature will drop tonight.", viAnswers: ["nhiệt độ"] },
          { word: "sunny", ipa: "/ˈsʌni/", meaning: "nắng", type: "adjective", example: "It will be sunny and warm tomorrow.", viAnswers: ["nắng", "có nắng"] },
          { word: "cloudy", ipa: "/ˈklaʊdi/", meaning: "nhiều mây", type: "adjective", example: "The sky is very cloudy today.", viAnswers: ["nhiều mây", "có mây"] },
          { word: "rainy", ipa: "/ˈreɪni/", meaning: "mưa", type: "adjective", example: "The rainy season starts next month.", viAnswers: ["mưa", "có mưa"] },
          { word: "storm", ipa: "/stɔːm/", meaning: "bão", type: "noun", example: "The severe storm caused a power outage.", viAnswers: ["bão", "cơn bão"] },
          { word: "windy", ipa: "/ˈwɪndi/", meaning: "nhiều gió", type: "adjective", example: "It was a windy afternoon at the beach.", viAnswers: ["nhiều gió", "có gió"] },
          { word: "humidity", ipa: "/hjuːˈmɪdəti/", meaning: "độ ẩm", type: "noun", example: "The humidity is very high today.", viAnswers: ["độ ẩm"] }
        ]
      },
      {
        name: "7. Sự kiện (Events)",
        words: [
          { word: "exhibition", ipa: "/ˌeksɪˈbɪʃn/", meaning: "triển lãm", type: "noun", example: "We visited an art exhibition yesterday.", viAnswers: ["triển lãm", "cuộc triển lãm"] },
          { word: "seminar", ipa: "/ˈsemɪnɑːr/", meaning: "hội thảo", type: "noun", example: "I will attend a sales seminar today.", viAnswers: ["hội thảo"] },
          { word: "workshop", ipa: "/ˈwɜːkʃɒp/", meaning: "buổi đào tạo", type: "noun", example: "The training workshop starts at 10 AM.", viAnswers: ["buổi đào tạo", "hội thảo"] },
          { word: "convention", ipa: "/kənˈvenʃn/", meaning: "hội nghị lớn", type: "noun", example: "The annual convention is in Chicago.", viAnswers: ["hội nghị", "hội nghị lớn"] },
          { word: "registration", ipa: "/ˌredʒɪˈstreɪʃn/", meaning: "đăng ký", type: "noun", example: "Registration is required for this event.", viAnswers: ["đăng ký", "sự đăng ký"] },
          { word: "admission", ipa: "/ədˈmɪʃn/", meaning: "vé vào cửa/quyền vào", type: "noun", example: "Admission is free for all members.", viAnswers: ["vé vào cửa", "quyền vào"] },
          { word: "attendee", ipa: "/əˌtenˈdiː/", meaning: "người tham dự", type: "noun", example: "Each attendee will receive a badge.", viAnswers: ["người tham dự"] },
          { word: "venue", ipa: "/ˈvenjuː/", meaning: "địa điểm tổ chức", type: "noun", example: "What is the venue for the concert?", viAnswers: ["địa điểm", "địa điểm tổ chức"] }
        ]
      },
      {
        name: "8. Cụm từ hay gặp",
        words: [
          { word: "on behalf of", ipa: "/ɒn bɪˈhɑːf ɒv/", meaning: "thay mặt", type: "phrase", example: "I am writing on behalf of the company.", viAnswers: ["thay mặt", "đại diện cho"] },
          { word: "open to the public", ipa: "/ˈəʊpən tuː ðə ˈpʌblɪk/", meaning: "mở cửa cho công chúng", type: "phrase", example: "The exhibition is open to the public.", viAnswers: ["mở cửa cho công chúng", "mở cửa tự do"] },
          { word: "free of charge", ipa: "/friː ɒv tʃɑːdʒ/", meaning: "miễn phí", type: "phrase", example: "The service is provided free of charge.", viAnswers: ["miễn phí"] },
          { word: "for further information", ipa: "/fɔːr ˈfɜːðər ˌɪnfəˈmeɪʃn/", meaning: "để biết thêm thông tin", type: "phrase", example: "Please visit our website for further information.", viAnswers: ["để biết thêm thông tin"] },
          { word: "thank you for your patience", ipa: "/θæŋk juː fɔːr jɔːr ˈpeɪʃns/", meaning: "cảm ơn sự kiên nhẫn của bạn", type: "phrase", example: "Thank you for your patience during the delay.", viAnswers: ["cảm ơn sự kiên nhẫn của bạn", "cảm ơn bạn đã kiên nhẫn"] },
          { word: "we apologize for the inconvenience", ipa: "/wiː əˈpɒlədʒaɪz fɔːr ðə ˌɪnkənˈviːniəns/", meaning: "xin lỗi vì sự bất tiện", type: "phrase", example: "We apologize for the inconvenience caused.", viAnswers: ["xin lỗi vì sự bất tiện", "xin lỗi vì bất tiện"] },
          { word: "please remain seated", ipa: "/pliːz rɪˈmeɪn ˈsiːtɪd/", meaning: "vui lòng tiếp tục ngồi", type: "phrase", example: "Please remain seated until the bus stops.", viAnswers: ["vui lòng tiếp tục ngồi", "xin vui lòng ngồi yên"] },
          { word: "please proceed to", ipa: "/pliːz prəˈsiːd tuː/", meaning: "vui lòng di chuyển đến", type: "phrase", example: "Please proceed to gate 10 now.", viAnswers: ["vui lòng di chuyển đến", "hãy đi đến"] },
          { word: "due to bad weather", ipa: "/djuː tuː bæd ˈweðər/", meaning: "do thời tiết xấu", type: "phrase", example: "The flight was delayed due to bad weather.", viAnswers: ["do thời tiết xấu", "vì thời tiết xấu"] },
          { word: "until further notice", ipa: "/ʌnˈtɪl ˈfɜːðər ˈnəʊtɪs/", meaning: "cho đến khi có thông báo mới", type: "phrase", example: "The office is closed until further notice.", viAnswers: ["cho đến khi có thông báo mới", "cho đến khi có thông báo"] }
        ]
      }
    ]
  }
];
