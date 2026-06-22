/* ====================================================
   FORMULAS_DATA.JS - Cong thuc ngu phap cho cac tu vung dac biet
   ==================================================== */
const FORMULAS_DATA = {
  // Specific words lookup
  words: {
    // Tense signals & 2-clause markers
    "before": {
      title: "Cấu trúc với BEFORE (2 vế hành động)",
      formula: "• <b>Quá khứ:</b> Before + S + V(quá khứ đơn), S + V(quá khứ hoàn thành)<br>" +
               "• <b>Tương lai:</b> Before + S + V(hiện tại đơn), S + V(tương lai hoàn thành)<br>" +
               "• <b>Rút gọn chủ ngữ:</b> Before + V-ing, S + V"
    },
    "after": {
      title: "Cấu trúc với AFTER (2 vế hành động)",
      formula: "• <b>Quá khứ:</b> After + S + V(quá khứ hoàn thành), S + V(quá khứ đơn)<br>" +
               "• <b>Tương lai:</b> S + V(tương lai đơn) + after + S + V(hiện tại hoàn thành / hiện tại đơn)<br>" +
               "• <b>Rút gọn chủ ngữ:</b> After + V-ing, S + V"
    },
    "by the time": {
      title: "Cấu trúc với BY THE TIME (Vào lúc...)",
      formula: "• <b>Quá khứ:</b> By the time + S + V(quá khứ đơn), S + V(quá khứ hoàn thành)<br>" +
               "• <b>Tương lai:</b> By the time + S + V(hiện tại đơn), S + V(tương lai hoàn thành)"
    },
    "when": {
      title: "Cấu trúc với WHEN (Khi mà...)",
      formula: "• <b>Xen vào (Quá khứ):</b> When + S + V(quá khứ đơn), S + V(quá khứ tiếp diễn) (Hành động đang xảy ra thì hành động khác xen vào)<br>" +
               "• <b>Nối tiếp (Quá khứ):</b> When + S + V(quá khứ đơn), S + V(quá khứ đơn) (Hai hành động liên tiếp)<br>" +
               "• <b>Hoàn thành trước:</b> When + S + V(quá khứ đơn), S + V(quá khứ hoàn thành)<br>" +
               "• <b>Tương lai:</b> When + S + V(hiện tại đơn), S + V(tương lai đơn)"
    },
    "while": {
      title: "Cấu trúc với WHILE (Trong khi...)",
      formula: "• <b>Song song (Quá khứ):</b> While + S + V(quá khứ tiếp diễn), S + V(quá khứ tiếp diễn)<br>" +
               "• <b>Xen vào (Quá khứ):</b> While + S + V(quá khứ tiếp diễn), S + V(quá khứ đơn)<br>" +
               "• <b>Rút gọn chủ ngữ:</b> While + V-ing, S + V"
    },
    "since": {
      title: "Cấu trúc với SINCE (Kể từ khi / Vì)",
      formula: "• <b>Thì (Thời gian):</b> S + V(hiện tại hoàn thành) + since + S + V(quá khứ đơn)<br>" +
               "• <b>Liên từ chỉ nguyên nhân (Bởi vì):</b> Since + S + V, S + V (Tương tự Because)"
    },

    // Conjunctions (Liên từ)
    "because": {
      title: "Cấu trúc với BECAUSE (Bởi vì)",
      formula: "• <b>Công thức:</b> Because + S + V, S + V  (hoặc S + V because + S + V)<br>" +
               "• <b>Rút gọn sang cụm danh từ:</b> Because of / Due to + Noun / V-ing, S + V"
    },
    "although": {
      title: "Cấu trúc với ALTHOUGH / EVEN THOUGH / THOUGH (Mặc dù)",
      formula: "• <b>Công thức:</b> Although / Even though / Though + S + V, S + V  (hoặc S + V although + S + V)<br>" +
               "• <b>Rút gọn sang cụm danh từ:</b> Despite / In spite of + Noun / V-ing, S + V"
    },
    "even though": {
      title: "Cấu trúc với ALTHOUGH / EVEN THOUGH / THOUGH (Mặc dù)",
      formula: "• <b>Công thức:</b> Although / Even though / Though + S + V, S + V<br>" +
               "• <b>Rút gọn sang cụm danh từ:</b> Despite / In spite of + Noun / V-ing, S + V"
    },
    "though": {
      title: "Cấu trúc với ALTHOUGH / EVEN THOUGH / THOUGH (Mặc dù)",
      formula: "• <b>Công thức:</b> Although / Even though / Though + S + V, S + V<br>" +
               "• <b>Rút gọn sang cụm danh từ:</b> Despite / In spite of + Noun / V-ing, S + V"
    },
    "unless": {
      title: "Cấu trúc với UNLESS (Trừ khi / Nếu không)",
      formula: "• <b>Công thức:</b> Unless + S + V (khẳng định), S + V<br>" +
               "• <b>Quy đổi:</b> Tương đương với <i>If + S + do/does/did not + V, S + V</i>"
    },
    "if": {
      title: "Cấu trúc với IF (Câu điều kiện)",
      formula: "• <b>Loại 1 (Có thể xảy ra ở hiện tại/tương lai):</b> If + S + V(hiện tại đơn), S + will/can/may + V(nguyên thể)<br>" +
               "• <b>Loại 2 (Trái thực tế ở hiện tại):</b> If + S + V(quá khứ đơn/were), S + would/could + V(nguyên thể)<br>" +
               "• <b>Loại 3 (Trái thực tế ở quá khứ):</b> If + S + V(quá khứ hoàn thành), S + would/could + have + V3/ed"
    },
    "as soon as": {
      title: "Cấu trúc với AS SOON AS (Ngay sau khi)",
      formula: "• <b>Quá khứ:</b> As soon as + S + V(quá khứ đơn), S + V(quá khứ đơn)<br>" +
               "• <b>Tương lai:</b> As soon as + S + V(hiện tại đơn/hoàn thành), S + V(tương lai đơn)"
    },
    "so that": {
      title: "Cấu trúc với SO THAT / IN ORDER THAT (Để mà...)",
      formula: "• <b>Công thức:</b> S + V + so that / in order that + S + can/could/will/would + V(nguyên thể)"
    },
    "in order that": {
      title: "Cấu trúc với SO THAT / IN ORDER THAT (Để mà...)",
      formula: "• <b>Công thức:</b> S + V + so that / in order that + S + can/could/will/would + V(nguyên thể)"
    },

    // Pronouns & Determiners (Đại từ & Từ hạn định)
    "other": {
      title: "Cấu trúc với OTHER (Khác)",
      formula: "• <b>Công thức:</b> Other + Noun số nhiều / Noun không đếm được (chỉ những người/vật khác)<br>" +
               "• <b>Ví dụ:</b> other employees (các nhân viên khác), other information (thông tin khác)"
    },
    "others": {
      title: "Cấu trúc với OTHERS (Đại từ)",
      formula: "• <b>Công thức:</b> Others đóng vai trò như danh từ số nhiều (Làm S hoặc O). Không có Noun theo sau.<br>" +
               "• <b>Quy đổi:</b> Others = Other + Noun số nhiều. (Ví dụ: Some work, others play.)"
    },
    "the other": {
      title: "Cấu trúc với THE OTHER (Còn lại)",
      formula: "• <b>Số ít:</b> The other + Noun số ít (cái/người còn lại cuối cùng trong nhóm 2 cái/người)<br>" +
               "• <b>Số nhiều:</b> The other + Noun số nhiều (những cái/người còn lại cuối cùng trong một nhóm)"
    },
    "the others": {
      title: "Cấu trúc với THE OTHERS (Đại từ)",
      formula: "• <b>Công thức:</b> The others đóng vai trò như danh từ (Làm S hoặc O, thay thế cho những cái/người còn lại). Không có Noun theo sau.<br>" +
               "• <b>Quy đổi:</b> The others = The other + Noun số nhiều."
    },
    "another": {
      title: "Cấu trúc với ANOTHER (Một cái khác/Thêm nữa)",
      formula: "• <b>Một cái khác:</b> Another + Noun số ít (chưa xác định, thêm vào một cái cùng loại)<br>" +
               "• <b>Thêm nữa:</b> Another + Số đếm + Noun số nhiều (Ví dụ: another 3 days - thêm 3 ngày nữa)"
    },

    // Prepositions (Giới từ cụ thể)
    "at": {
      title: "Cấu trúc Giới từ AT",
      formula: "• <b>Thời gian:</b> at + giờ cụ thể / thời điểm cụ thể / dịp lễ (at 8 a.m., at noon, at Christmas)<br>" +
               "• <b>Nơi chốn:</b> at + địa điểm cụ thể / địa chỉ nhà / vị trí chính xác (at the airport, at 10 Main Street)"
    },
    "in": {
      title: "Cấu trúc Giới từ IN",
      formula: "• <b>Thời gian:</b> in + tháng / năm / mùa / thế kỷ / buổi trong ngày (in July, in 2026, in the afternoon)<br>" +
               "• <b>Nơi chốn:</b> in + bên trong không gian khép kín / tòa nhà / thành phố / quốc gia (in the drawer, in Hanoi, in Vietnam)"
    },
    "on": {
      title: "Cấu trúc Giới từ ON",
      formula: "• <b>Thời gian:</b> on + thứ trong tuần / ngày cụ thể / ngày lễ có từ 'Day' (on Monday, on October 20th, on Christmas Day)<br>" +
               "• <b>Nơi chốn:</b> on + bề mặt vật lý / số tầng lầu / tên đường phố (on the table, on the 5th floor, on Wall Street)"
    },
    "during": {
      title: "Cấu trúc Giới từ DURING (Trong suốt)",
      formula: "• <b>Công thức:</b> During + Noun (chỉ một sự kiện, kỳ nghỉ, cuộc họp, thời kỳ diễn ra sự việc)<br>" +
               "• <b>Phân biệt:</b> Không dùng với khoảng thời gian số đếm (dùng <i>For</i>)."
    },
    "for": {
      title: "Cấu trúc Giới từ FOR",
      formula: "• <b>Thời gian:</b> for + khoảng thời gian có số đếm (for 3 years, for a long time)<br>" +
               "• <b>Mục đích/Lợi ích:</b> for + Noun / V-ing (dành cho ai, vì cái gì, để làm gì)"
    },
    "until": {
      title: "Cấu trúc Giới từ/Liên từ UNTIL / TILL (Cho đến khi)",
      formula: "• <b>Công thức:</b> Until / Till + mốc thời gian / danh từ / mệnh đề (S + V)<br>" +
               "• <b>Ý nghĩa:</b> Hành động diễn ra liên tục cho tới mốc thời gian đó."
    },
    "till": {
      title: "Cấu trúc Giới từ/Liên từ UNTIL / TILL (Cho đến khi)",
      formula: "• <b>Công thức:</b> Until / Till + mốc thời gian / danh từ / mệnh đề (S + V)<br>" +
               "• <b>Ý nghĩa:</b> Hành động diễn ra liên tục cho tới mốc thời gian đó."
    },
    "by": {
      title: "Cấu trúc Giới từ BY (Trước / Bằng / Cạnh)",
      formula: "• <b>Thời gian:</b> by + mốc thời gian (trước hoặc muộn nhất là lúc đó)<br>" +
               "• <b>Phương tiện:</b> by + phương tiện giao thông (by car, by bus - không có a/the)<br>" +
               "• <b>Bị động:</b> by + tác nhân thực hiện (by the team)<br>" +
               "• <b>Nơi chốn:</b> by + N (bên cạnh. Ví dụ: by the river)"
    },
    "within": {
      title: "Cấu trúc Giới từ WITHIN (Trong vòng)",
      formula: "• <b>Thời gian:</b> within + khoảng thời gian (không vượt quá thời hạn đó. Ví dụ: within 5 days)<br>" +
               "• <b>Phạm vi:</b> within + khoảng cách / giới hạn (Ví dụ: within 1 mile, within budget)"
    },
    "throughout": {
      title: "Cấu trúc Giới từ THROUGHOUT (Khắp / Suốt cả)",
      formula: "• <b>Không gian:</b> throughout + địa điểm (khắp mọi ngóc ngách. Ví dụ: throughout the building)<br>" +
               "• <b>Thời gian:</b> throughout + khoảng thời gian (xuyên suốt toàn bộ thời kỳ. Ví dụ: throughout the year)"
    },
    "over": {
      title: "Cấu trúc Giới từ OVER (Hơn / Qua / Trong suốt)",
      formula: "• <b>Thời gian:</b> over + khoảng thời gian (trong suốt khoảng. Ví dụ: over the last week)<br>" +
               "• <b>Số lượng:</b> over + số đếm (nhiều hơn. Tương đương <i>more than</i>)<br>" +
               "• <b>Nơi chốn:</b> over + N (vượt lên trên, đi qua)"
    },
    "between": {
      title: "Cấu trúc Giới từ BETWEEN (Giữa 2 đối tượng)",
      formula: "• <b>Công thức:</b> Between + N1 + and + N2  (hoặc Between + N số nhiều chỉ 2 đối tượng)<br>" +
               "• <b>Ví dụ:</b> between you and me, between the two choices"
    },
    "among": {
      title: "Cấu trúc Giới từ AMONG (Giữa nhiều đối tượng)",
      formula: "• <b>Công thức:</b> Among + N số nhiều (từ 3 đối tượng trở lên)<br>" +
               "• <b>Ví dụ:</b> among the candidates (trong số các ứng viên)"
    },
    "into": {
      title: "Cấu trúc Giới từ INTO (Vào trong)",
      formula: "• <b>Chuyển động:</b> Verb (chỉ hướng đi) + into + Noun (đi xuyên vào không gian kín)<br>" +
               "• <b>Biến đổi:</b> change / turn / convert + into + N"
    },
    "onto": {
      title: "Cấu trúc Giới từ ONTO (Lên trên bề mặt)",
      formula: "• <b>Chuyển động:</b> Verb (chỉ hướng đi) + onto + Noun (lên trên bề mặt tiếp xúc của vật)<br>" +
               "• <b>Ví dụ:</b> climb onto the roof, step onto the platform"
    },
    "out of": {
      title: "Cấu trúc Giới từ OUT OF (Ra khỏi / Hết)",
      formula: "• <b>Chuyển động:</b> out of + N (ra khỏi. Ví dụ: walk out of the room)<br>" +
               "• <b>Trạng thái:</b> out of + N (không còn, hỏng hóc. Ví dụ: out of stock, out of order, out of control)"
    },
    "toward": {
      title: "Cấu trúc Giới từ TOWARD / TOWARDS (Hướng về)",
      formula: "• <b>Công thức:</b> Toward/Towards + Noun (di chuyển hoặc hướng sự chú ý về phía đối tượng)<br>" +
               "• <b>Ví dụ:</b> walk toward the exit, attitude toward work"
    },
    "towards": {
      title: "Cấu trúc Giới từ TOWARD / TOWARDS (Hướng về)",
      formula: "• <b>Công thức:</b> Toward/Towards + Noun (di chuyển hoặc hướng sự chú ý về phía đối tượng)<br>" +
               "• <b>Ví dụ:</b> walk toward the exit, attitude toward work"
    },
    "away from": {
      title: "Cấu trúc Giới từ AWAY FROM (Tránh xa / Rời xa)",
      formula: "• <b>Công thức:</b> away from + Noun (tránh xa khỏi người/vật/vị trí địa lý)<br>" +
               "• <b>Ví dụ:</b> keep away from children, 5 miles away from here"
    },
    "against": {
      title: "Cấu trúc Giới từ AGAINST (Tựa vào / Chống lại)",
      formula: "• <b>Vị trí:</b> against + Noun (tựa sát, dựa lưng vào. Ví dụ: lean against the wall)<br>" +
               "• <b>Đối kháng:</b> against + Noun (phản đối, chống lại, đấu với. Ví dụ: against the proposal, play against the champions)"
    },
    "to": {
      title: "Cấu trúc Giới từ TO (Đến / Đối với)",
      formula: "• <b>Chuyển động:</b> go / travel / move + to + địa điểm<br>" +
               "• <b>Nhận đối tượng:</b> send / give / explain + something + to + somebody<br>" +
               "• <b>Mục đích:</b> to + V(nguyên thể) (để làm gì)"
    },
    "from": {
      title: "Cấu trúc Giới từ FROM (Từ)",
      formula: "• <b>Nguồn gốc:</b> from + địa điểm / người / mốc thời gian (bắt đầu từ)<br>" +
               "• <b>Ví dụ:</b> travel from Hanoi, a letter from my parents, from 9 a.m. to 5 p.m."
    },
    "with": {
      title: "Cấu trúc Giới từ WITH (Cùng với / Bằng)",
      formula: "• <b>Đồng hành:</b> with + người/vật (cùng với. Ví dụ: work with a team)<br>" +
               "• <b>Công cụ:</b> with + công cụ / bộ phận (bằng cách dùng. Ví dụ: cut with a knife, sign with a pen)<br>" +
               "• <b>Đặc điểm:</b> a girl with blue eyes (cô gái có đôi mắt xanh)"
    },
    "about": {
      title: "Cấu trúc Giới từ ABOUT (Về / Khoảng)",
      formula: "• <b>Nội dung:</b> talk / think / write / ask + about + N (về chủ đề gì)<br>" +
               "• <b>Xấp xỉ:</b> about + con số / mốc thời gian (khoảng chừng. Ví dụ: about $100, about 3 p.m.)"
    },
    "of": {
      title: "Cấu trúc Giới từ OF (Của / Về)",
      formula: "• <b>Sở hữu:</b> N1 + of + N2 (N1 thuộc về N2. Ví dụ: the key of the room)<br>" +
               "• <b>Thành phần:</b> made of + chất liệu (làm bằng gì)<br>" +
               "• <b>Trong số:</b> one of + N số nhiều (một trong những)"
    }
  },

  // Fallback types mapping
  types: {
    "preposition": {
      title: "Công thức Giới từ (Tổng quát)",
      formula: "• <b>Công thức chung:</b> Giới từ + Noun / Pronoun / V-ing (Động từ thêm -ing)<br>" +
               "• <b>Lưu ý:</b> Tránh dùng giới từ đứng trước một mệnh đề trực tiếp (S + V) mà không có liên từ nối."
    },
    "pronoun": {
      title: "Cấu trúc Đại từ (Đại từ phản thân / bất định)",
      formula: "• <b>Đại từ phản thân:</b> S + V + Reflexive Pronoun (tự tác động) hoặc by + Reflexive Pronoun (tự mình làm)<br>" +
               "• <b>Đại từ bất định:</b> Động từ theo sau chia số ít (Indefinite Pronoun + V-số ít); Tính từ đứng sau đại từ (something interesting)"
    }
  },

  // Fallback categories mapping
  categories: {
    "Động từ + Đại từ phản thân": {
      title: "Cấu trúc Động từ + Đại từ phản thân",
      formula: "• <b>Công thức:</b> S + Verb + Reflexive Pronoun (myself / himself / herself / themselves...)<br>" +
               "• <b>Ý nghĩa:</b> Chủ ngữ tự thực hiện hành động lên chính mình.<br>" +
               "• <b>Ví dụ:</b> She behaves herself. (Cô ấy cư xử đúng mực.) / He blamed himself. (Anh ấy tự trách mình.)"
    },
    "Đại từ bất định": {
      title: "Cấu trúc với Đại từ bất định",
      formula: "• <b>Công thức 1 (Số ít):</b> Indefinite Pronoun + V (chia ở số ít). Ví dụ: <i>Someone is singing.</i><br>" +
               "• <b>Công thức 2 (Tính từ ghép):</b> Indefinite Pronoun + Adjective. Ví dụ: <i>nothing special</i> (không có gì đặc biệt)<br>" +
               "• <b>Công thức 3 (Phủ định):</b> Dùng <i>any-</i> trong câu phủ định/nghi vấn, dùng <i>some-</i> trong câu khẳng định."
    }
  }
};

// Global formula lookup function
function getWordFormula(word, type, category) {
  if (!word) return null;
  const wLower = word.toLowerCase().trim();
  const tLower = type ? type.toLowerCase().trim() : '';
  const cLower = category ? category.trim() : '';

  // 1. Match specific word
  if (FORMULAS_DATA.words[wLower]) {
    return FORMULAS_DATA.words[wLower];
  }
  
  // 2. Match specific category
  if (cLower && FORMULAS_DATA.categories[cLower]) {
    return FORMULAS_DATA.categories[cLower];
  }

  // 3. Fallback to general type matches
  if (tLower.includes('preposition') && FORMULAS_DATA.types['preposition']) {
    return FORMULAS_DATA.types['preposition'];
  }
  if (tLower.includes('pronoun') && FORMULAS_DATA.types['pronoun']) {
    return FORMULAS_DATA.types['pronoun'];
  }

  return null;
}
