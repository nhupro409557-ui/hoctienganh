/* Các chủ đề bổ sung: từ hạn định, số và trật tự tính từ OSASCOMP. */
(function () {
  const item = (word, ipa, meaning, type, example, viAnswers) => ({
    word, ipa, meaning, type, example, viAnswers
  });

  Object.assign(TOPICS_DATA, {
    "Pre-determiner (Từ đứng trước từ hạn định)": [
      item("all", "/ɔːl/", "tất cả", "pre-determiner", "All the students passed the test.", ["tất cả"]),
      item("both", "/boʊθ/", "cả hai", "pre-determiner", "Both my sisters speak English.", ["cả hai"]),
      item("half", "/hæf/", "một nửa", "pre-determiner", "Half the class was absent.", ["một nửa", "nửa"]),
      item("double", "/ˈdʌbəl/", "gấp đôi", "pre-determiner", "We paid double the usual price.", ["gấp đôi"]),
      item("twice", "/twaɪs/", "gấp hai lần", "pre-determiner", "This room is twice the size of mine.", ["gấp hai lần", "hai lần"]),
      item("three times", "/θriː taɪmz/", "gấp ba lần", "pre-determiner", "The new hall is three times the size of the old one.", ["gấp ba lần", "ba lần"]),
      item("such", "/sʌtʃ/", "thật là, như vậy", "pre-determiner", "It was such a useful lesson.", ["thật là", "như vậy"]),
      item("what", "/wʌt/", "thật là", "pre-determiner", "What a beautiful day!", ["thật là"])
    ],
    "Mạo từ (Articles)": [
      item("a", "/ə; eɪ/", "một (trước âm phụ âm)", "article", "She bought a book.", ["một"]),
      item("an", "/ən; æn/", "một (trước âm nguyên âm)", "article", "He is an engineer.", ["một"]),
      item("the", "/ðə; ðiː/", "cái, người, những (đã xác định)", "article", "The report is on the desk.", ["cái", "người", "những"]),
      item("a few", "/ə fjuː/", "một vài (đủ dùng)", "article phrase", "I have a few questions.", ["một vài"]),
      item("a little", "/ə ˈlɪtəl/", "một ít (đủ dùng)", "article phrase", "We still have a little time.", ["một ít", "một chút"]),
      item("the same", "/ðə seɪm/", "giống nhau, cùng một", "article phrase", "We work in the same office.", ["giống nhau", "cùng một"]),
      item("the only", "/ði ˈoʊnli/", "duy nhất", "article phrase", "This is the only solution.", ["duy nhất"]),
      item("the first", "/ðə fɜːrst/", "đầu tiên", "article phrase", "She was the first person to arrive.", ["đầu tiên"])
    ],
    "Tính từ sở hữu (Possessive Adjectives)": [
      item("my", "/maɪ/", "của tôi", "possessive adjective", "My phone is new.", ["của tôi"]),
      item("your", "/jʊr; jɔːr/", "của bạn, của các bạn", "possessive adjective", "Your order is ready.", ["của bạn", "của các bạn"]),
      item("his", "/hɪz/", "của anh ấy", "possessive adjective", "His office is upstairs.", ["của anh ấy"]),
      item("her", "/hɜːr/", "của cô ấy", "possessive adjective", "Her presentation was excellent.", ["của cô ấy"]),
      item("its", "/ɪts/", "của nó", "possessive adjective", "The company changed its policy.", ["của nó"]),
      item("our", "/aʊr/", "của chúng tôi, của chúng ta", "possessive adjective", "Our team won the competition.", ["của chúng tôi", "của chúng ta"]),
      item("their", "/ðer/", "của họ, của chúng", "possessive adjective", "Their products are reliable.", ["của họ", "của chúng"]),
      item("one's", "/wʌnz/", "của một người", "possessive adjective", "One should keep one's promises.", ["của một người"])
    ],
    "Từ chỉ định (Demonstratives)": [
      item("this", "/ðɪs/", "này (số ít, ở gần)", "demonstrative", "This document is important.", ["này"]),
      item("that", "/ðæt/", "đó, kia (số ít, ở xa)", "demonstrative", "That building is our office.", ["đó", "kia"]),
      item("these", "/ðiːz/", "những cái này", "demonstrative", "These shoes are comfortable.", ["những cái này", "những"]),
      item("those", "/ðoʊz/", "những cái đó, kia", "demonstrative", "Those boxes are empty.", ["những cái đó", "những cái kia"]),
      item("such", "/sʌtʃ/", "như vậy, loại như thế", "demonstrative", "Such behavior is unacceptable.", ["như vậy", "loại như thế"]),
      item("the former", "/ðə ˈfɔːrmər/", "cái/người thứ nhất trong hai", "demonstrative", "Of tea and coffee, I prefer the former.", ["cái thứ nhất", "người thứ nhất"]),
      item("the latter", "/ðə ˈlætər/", "cái/người thứ hai trong hai", "demonstrative", "Of Monday and Tuesday, the latter is better.", ["cái thứ hai", "người thứ hai"]),
      item("the following", "/ðə ˈfɑːloʊɪŋ/", "sau đây", "demonstrative", "Please answer the following questions.", ["sau đây"])
    ],
    "Từ chỉ số lượng (Quantifiers)": [
      item("many", "/ˈmeni/", "nhiều (danh từ đếm được)", "quantifier", "Many customers prefer online shopping.", ["nhiều"]),
      item("much", "/mʌtʃ/", "nhiều (danh từ không đếm được)", "quantifier", "We do not have much time.", ["nhiều"]),
      item("a lot of", "/ə lɑːt əv/", "nhiều", "quantifier", "A lot of people attended the event.", ["nhiều"]),
      item("some", "/sʌm/", "một vài, một ít", "quantifier", "We need some information.", ["một vài", "một ít"]),
      item("any", "/ˈeni/", "bất kỳ, chút nào", "quantifier", "Do you have any questions?", ["bất kỳ", "chút nào"]),
      item("few", "/fjuː/", "rất ít, gần như không đủ", "quantifier", "Few applicants met the requirements.", ["rất ít", "ít"]),
      item("little", "/ˈlɪtəl/", "rất ít (không đếm được)", "quantifier", "There is little hope of success.", ["rất ít", "ít"]),
      item("several", "/ˈsevrəl/", "một vài, vài", "quantifier", "Several employees joined the course.", ["một vài", "vài"]),
      item("enough", "/ɪˈnʌf/", "đủ", "quantifier", "We have enough chairs for everyone.", ["đủ"]),
      item("plenty of", "/ˈplenti əv/", "nhiều, dư dả", "quantifier", "There is plenty of food.", ["nhiều", "dư dả"])
    ],
    "Số đếm (Cardinal Numbers)": [
      item("zero", "/ˈzɪroʊ/", "số không", "cardinal number", "The temperature fell to zero.", ["số không", "không"]),
      item("one", "/wʌn/", "một", "cardinal number", "I need one ticket.", ["một"]),
      item("two", "/tuː/", "hai", "cardinal number", "She has two brothers.", ["hai"]),
      item("three", "/θriː/", "ba", "cardinal number", "The meeting lasts three hours.", ["ba"]),
      item("ten", "/ten/", "mười", "cardinal number", "Ten people joined the team.", ["mười"]),
      item("twenty", "/ˈtwenti/", "hai mươi", "cardinal number", "The class has twenty students.", ["hai mươi"]),
      item("one hundred", "/wʌn ˈhʌndrəd/", "một trăm", "cardinal number", "The hall can hold one hundred guests.", ["một trăm"]),
      item("one thousand", "/wʌn ˈθaʊzənd/", "một nghìn", "cardinal number", "The company sold one thousand units.", ["một nghìn", "một ngàn"]),
      item("one million", "/wʌn ˈmɪljən/", "một triệu", "cardinal number", "The video reached one million views.", ["một triệu"])
    ],
    "Số thứ tự (Ordinal Numbers)": [
      item("first", "/fɜːrst/", "thứ nhất, đầu tiên", "ordinal number", "She finished first.", ["thứ nhất", "đầu tiên"]),
      item("second", "/ˈsekənd/", "thứ hai", "ordinal number", "Our office is on the second floor.", ["thứ hai"]),
      item("third", "/θɜːrd/", "thứ ba", "ordinal number", "This is my third attempt.", ["thứ ba"]),
      item("fourth", "/fɔːrθ/", "thứ tư", "ordinal number", "The fourth question is difficult.", ["thứ tư"]),
      item("fifth", "/fɪfθ/", "thứ năm", "ordinal number", "He came fifth in the race.", ["thứ năm"]),
      item("ninth", "/naɪnθ/", "thứ chín", "ordinal number", "Her office is on the ninth floor.", ["thứ chín"]),
      item("twelfth", "/twelfθ/", "thứ mười hai", "ordinal number", "December is the twelfth month.", ["thứ mười hai"]),
      item("twentieth", "/ˈtwentiəθ/", "thứ hai mươi", "ordinal number", "Today is their twentieth anniversary.", ["thứ hai mươi"]),
      item("hundredth", "/ˈhʌndrədθ/", "thứ một trăm", "ordinal number", "This is the hundredth order today.", ["thứ một trăm"])
    ],
    "Opinion (Tính từ chỉ ý kiến)": [
      item("beautiful", "/ˈbjuːtəfəl/", "đẹp", "adjective - opinion", "She bought a beautiful dress.", ["đẹp"]),
      item("excellent", "/ˈeksələnt/", "xuất sắc", "adjective - opinion", "They provided excellent service.", ["xuất sắc"]),
      item("wonderful", "/ˈwʌndərfəl/", "tuyệt vời", "adjective - opinion", "We had a wonderful trip.", ["tuyệt vời"]),
      item("useful", "/ˈjuːsfəl/", "hữu ích", "adjective - opinion", "This is a useful guide.", ["hữu ích"]),
      item("important", "/ɪmˈpɔːrtənt/", "quan trọng", "adjective - opinion", "It was an important decision.", ["quan trọng"]),
      item("comfortable", "/ˈkʌmftəbəl/", "thoải mái", "adjective - opinion", "He bought a comfortable chair.", ["thoải mái"]),
      item("delicious", "/dɪˈlɪʃəs/", "ngon", "adjective - opinion", "They served a delicious meal.", ["ngon", "ngon miệng"]),
      item("boring", "/ˈbɔːrɪŋ/", "nhàm chán", "adjective - opinion", "It was a boring lecture.", ["nhàm chán"])
    ],
    "Size (Tính từ chỉ kích thước)": [
      item("big", "/bɪɡ/", "to, lớn", "adjective - size", "They live in a big house.", ["to", "lớn"]),
      item("small", "/smɔːl/", "nhỏ", "adjective - size", "She carries a small bag.", ["nhỏ"]),
      item("large", "/lɑːrdʒ/", "lớn, rộng", "adjective - size", "The company has a large office.", ["lớn", "rộng"]),
      item("tiny", "/ˈtaɪni/", "rất nhỏ", "adjective - size", "A tiny insect landed on the desk.", ["rất nhỏ", "tí hon"]),
      item("huge", "/hjuːdʒ/", "khổng lồ", "adjective - size", "They built a huge warehouse.", ["khổng lồ", "rất lớn"]),
      item("tall", "/tɔːl/", "cao", "adjective - size", "He works in a tall building.", ["cao"]),
      item("short", "/ʃɔːrt/", "ngắn, thấp", "adjective - size", "We had a short meeting.", ["ngắn", "thấp"]),
      item("wide", "/waɪd/", "rộng", "adjective - size", "The room has a wide window.", ["rộng"])
    ],
    "Age (Tính từ chỉ độ tuổi)": [
      item("new", "/nuː/", "mới", "adjective - age", "She bought a new laptop.", ["mới"]),
      item("old", "/oʊld/", "cũ, già", "adjective - age", "They restored an old building.", ["cũ", "già"]),
      item("young", "/jʌŋ/", "trẻ", "adjective - age", "A young employee helped me.", ["trẻ"]),
      item("ancient", "/ˈeɪnʃənt/", "cổ xưa", "adjective - age", "We visited an ancient temple.", ["cổ xưa", "cổ đại"]),
      item("modern", "/ˈmɑːdərn/", "hiện đại", "adjective - age", "It is a modern office.", ["hiện đại"]),
      item("recent", "/ˈriːsənt/", "gần đây", "adjective - age", "A recent report confirmed the trend.", ["gần đây", "mới đây"]),
      item("brand-new", "/ˌbrænd ˈnuː/", "mới tinh", "adjective - age", "He drives a brand-new car.", ["mới tinh", "hoàn toàn mới"]),
      item("outdated", "/ˌaʊtˈdeɪtɪd/", "lỗi thời", "adjective - age", "The company replaced its outdated system.", ["lỗi thời", "cũ kỹ"])
    ],
    "Shape (Tính từ chỉ hình dạng)": [
      item("round", "/raʊnd/", "tròn", "adjective - shape", "They sat at a round table.", ["tròn"]),
      item("square", "/skwer/", "vuông", "adjective - shape", "The room has a square window.", ["vuông"]),
      item("rectangular", "/rekˈtæŋɡjələr/", "hình chữ nhật", "adjective - shape", "Use a rectangular box.", ["hình chữ nhật"]),
      item("oval", "/ˈoʊvəl/", "hình bầu dục", "adjective - shape", "She chose an oval mirror.", ["hình bầu dục"]),
      item("flat", "/flæt/", "phẳng, bẹt", "adjective - shape", "Place it on a flat surface.", ["phẳng", "bẹt"]),
      item("curved", "/kɜːrvd/", "cong", "adjective - shape", "The bridge has a curved roof.", ["cong"]),
      item("straight", "/streɪt/", "thẳng", "adjective - shape", "Draw a straight line.", ["thẳng"]),
      item("triangular", "/traɪˈæŋɡjələr/", "hình tam giác", "adjective - shape", "The sign has a triangular shape.", ["hình tam giác"])
    ],
    "Color (Tính từ chỉ màu sắc)": [
      item("black", "/blæk/", "màu đen", "adjective - color", "He wears a black suit.", ["màu đen", "đen"]),
      item("white", "/waɪt/", "màu trắng", "adjective - color", "She bought a white shirt.", ["màu trắng", "trắng"]),
      item("red", "/red/", "màu đỏ", "adjective - color", "The red button stops the machine.", ["màu đỏ", "đỏ"]),
      item("blue", "/bluː/", "màu xanh dương", "adjective - color", "They painted the wall blue.", ["màu xanh dương", "xanh dương"]),
      item("green", "/ɡriːn/", "màu xanh lá", "adjective - color", "Put the files in the green folder.", ["màu xanh lá", "xanh lá"]),
      item("yellow", "/ˈjeloʊ/", "màu vàng", "adjective - color", "She highlighted the text in yellow.", ["màu vàng", "vàng"]),
      item("brown", "/braʊn/", "màu nâu", "adjective - color", "He carries a brown leather bag.", ["màu nâu", "nâu"]),
      item("gray", "/ɡreɪ/", "màu xám", "adjective - color", "They chose a gray carpet.", ["màu xám", "xám"])
    ],
    "Origin (Tính từ chỉ nguồn gốc)": [
      item("Vietnamese", "/ˌvjetnəˈmiːz/", "thuộc Việt Nam", "adjective - origin", "We enjoyed Vietnamese food.", ["thuộc Việt Nam", "Việt Nam"]),
      item("American", "/əˈmerɪkən/", "thuộc Hoa Kỳ", "adjective - origin", "She works for an American company.", ["thuộc Hoa Kỳ", "Mỹ"]),
      item("British", "/ˈbrɪtɪʃ/", "thuộc Anh", "adjective - origin", "He has a British accent.", ["thuộc Anh", "Anh"]),
      item("French", "/frentʃ/", "thuộc Pháp", "adjective - origin", "They sell French perfume.", ["thuộc Pháp", "Pháp"]),
      item("Italian", "/ɪˈtæliən/", "thuộc Ý", "adjective - origin", "We ordered Italian food.", ["thuộc Ý", "Ý"]),
      item("Japanese", "/ˌdʒæpəˈniːz/", "thuộc Nhật Bản", "adjective - origin", "This is a Japanese camera.", ["thuộc Nhật Bản", "Nhật Bản"]),
      item("Chinese", "/ˌtʃaɪˈniːz/", "thuộc Trung Quốc", "adjective - origin", "They visited a Chinese factory.", ["thuộc Trung Quốc", "Trung Quốc"]),
      item("local", "/ˈloʊkəl/", "địa phương", "adjective - origin", "We support local businesses.", ["địa phương"])
    ],
    "Material (Tính từ chỉ chất liệu)": [
      item("wooden", "/ˈwʊdən/", "bằng gỗ", "adjective - material", "They bought a wooden table.", ["bằng gỗ", "gỗ"]),
      item("plastic", "/ˈplæstɪk/", "bằng nhựa", "adjective - material", "Use a plastic container.", ["bằng nhựa", "nhựa"]),
      item("metal", "/ˈmetəl/", "bằng kim loại", "adjective - material", "The documents are in a metal cabinet.", ["bằng kim loại", "kim loại"]),
      item("cotton", "/ˈkɑːtən/", "bằng vải bông", "adjective - material", "She wore a cotton shirt.", ["bằng vải bông", "vải bông"]),
      item("silk", "/sɪlk/", "bằng lụa", "adjective - material", "He bought a silk tie.", ["bằng lụa", "lụa"]),
      item("leather", "/ˈleðər/", "bằng da", "adjective - material", "She carries a leather bag.", ["bằng da", "da"]),
      item("glass", "/ɡlæs/", "bằng thủy tinh", "adjective - material", "The office has a glass door.", ["bằng thủy tinh", "thủy tinh"]),
      item("steel", "/stiːl/", "bằng thép", "adjective - material", "The bridge uses steel cables.", ["bằng thép", "thép"])
    ],
    "Purpose/Type (Tính từ chỉ mục đích, loại)": [
      item("sleeping", "/ˈsliːpɪŋ/", "dùng để ngủ", "adjective - purpose", "Bring a sleeping bag.", ["dùng để ngủ", "ngủ"]),
      item("running", "/ˈrʌnɪŋ/", "dùng để chạy", "adjective - purpose", "She bought running shoes.", ["dùng để chạy", "chạy bộ"]),
      item("shopping", "/ˈʃɑːpɪŋ/", "dùng để mua sắm", "adjective - purpose", "Take a shopping bag.", ["dùng để mua sắm", "mua sắm"]),
      item("dining", "/ˈdaɪnɪŋ/", "dùng để ăn uống", "adjective - purpose", "The dining table is large.", ["dùng để ăn uống", "ăn uống"]),
      item("coffee", "/ˈkɔːfi/", "dùng cho cà phê", "noun modifier - type", "Put the cups on the coffee table.", ["dùng cho cà phê", "cà phê"]),
      item("office", "/ˈɔːfɪs/", "dùng trong văn phòng", "noun modifier - type", "We need new office chairs.", ["dùng trong văn phòng", "văn phòng"]),
      item("sports", "/spɔːrts/", "thuộc thể thao", "noun modifier - type", "He drives a sports car.", ["thuộc thể thao", "thể thao"]),
      item("business", "/ˈbɪznəs/", "thuộc kinh doanh", "noun modifier - type", "She attended a business meeting.", ["thuộc kinh doanh", "kinh doanh"])
    ],
    "Trạng từ liên kết (Linking Adverbs)": [
      item("however", "/haʊˈevər/", "tuy nhiên", "linking adverb", "The plan is expensive; however, it is effective.", ["tuy nhiên"]),
      item("therefore", "/ˈðerfɔːr/", "vì vậy, do đó", "linking adverb", "Sales increased; therefore, we hired more staff.", ["vì vậy", "do đó"]),
      item("moreover", "/mɔːrˈoʊvər/", "hơn nữa", "linking adverb", "The product is affordable; moreover, it is durable.", ["hơn nữa"]),
      item("furthermore", "/ˌfɜːrðərˈmɔːr/", "hơn nữa", "linking adverb", "The course is practical; furthermore, it is free.", ["hơn nữa"]),
      item("nevertheless", "/ˌnevərðəˈles/", "tuy vậy", "linking adverb", "The deadline was tight; nevertheless, we finished on time.", ["tuy vậy", "tuy nhiên"]),
      item("otherwise", "/ˈʌðərwaɪz/", "nếu không thì", "linking adverb", "Please reply today; otherwise, we will cancel the order.", ["nếu không thì"]),
      item("meanwhile", "/ˈmiːnwaɪl/", "trong khi đó", "linking adverb", "I prepared the slides; meanwhile, she checked the data.", ["trong khi đó"]),
      item("consequently", "/ˈkɑːnsəkwentli/", "do đó, hậu quả là", "linking adverb", "Costs rose; consequently, prices increased.", ["do đó", "hậu quả là"]),
      item("in addition", "/ɪn əˈdɪʃən/", "ngoài ra", "linking adverb", "The hotel is clean; in addition, it is convenient.", ["ngoài ra"]),
      item("for example", "/fɔːr ɪɡˈzæmpəl/", "ví dụ", "linking adverb", "Some tasks can be automated; for example, data entry.", ["ví dụ"]),
      item("in contrast", "/ɪn ˈkɑːntræst/", "trái lại", "linking adverb", "The first option is cheap; in contrast, the second is faster.", ["trái lại", "ngược lại"]),
      item("as a result", "/æz ə rɪˈzʌlt/", "kết quả là", "linking adverb", "The road was closed; as a result, we arrived late.", ["kết quả là"])
    ]
  });
})();
