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
      title: "Nhận diện từ loại (noun, verb, adj, adv)",
      explanation: "Trong TOEIC, bạn cần nhận diện 4 loại từ chính:\n• Danh từ (noun): chỉ người, vật, sự việc → thường có đuôi -tion, -ment, -ness, -ity, -ance, -ence\n• Động từ (verb): chỉ hành động, trạng thái\n• Tính từ (adjective): mô tả danh từ → thường có đuôi -ful, -ive, -al, -ous, -able\n• Trạng từ (adverb): bổ nghĩa cho động từ, tính từ → thường có đuôi -ly\n\nVí dụ: invest (v) → investment (n) → financial (adj) → financially (adv)",
      structure: "Noun: -tion, -ment, -ness | Adj: -ful, -ive, -al | Adv: -ly",
      examples: [
        "The investment is very large. (investment = noun)",
        "She invests money carefully. (invests = verb, carefully = adverb)",
        "This is a financial report. (financial = adjective)"
      ],
      tips: "Nhìn đuôi từ để đoán từ loại: -ment, -tion → danh từ; -ful, -ive, -al → tính từ; -ly → trạng từ."
    },
    words: [
      {word:'money', meaning:'tiền', type:'noun', example:'I need more money.', viAnswers:['tiền','tiền bạc']},
      {word:'income', meaning:'thu nhập', type:'noun', example:'His income is high.', viAnswers:['thu nhập']},
      {word:'expense', meaning:'chi phí', type:'noun', example:'The expense is too high.', viAnswers:['chi phí','phí tổn']},
      {word:'budget', meaning:'ngân sách', type:'noun', example:'We have a small budget.', viAnswers:['ngân sách']},
      {word:'profit', meaning:'lợi nhuận', type:'noun', example:'The company made a big profit.', viAnswers:['lợi nhuận','lãi']},
      {word:'loss', meaning:'thua lỗ', type:'noun', example:'The company had a loss this year.', viAnswers:['thua lỗ','lỗ','sự mất mát']},
      {word:'invest', meaning:'đầu tư', type:'verb', example:'He wants to invest in stocks.', viAnswers:['đầu tư']},
      {word:'save', meaning:'tiết kiệm', type:'verb', example:'She saves money every month.', viAnswers:['tiết kiệm','để dành']},
      {word:'spend', meaning:'tiêu xài', type:'verb', example:'Do not spend too much money.', viAnswers:['tiêu xài','tiêu','chi tiêu']},
      {word:'loan', meaning:'khoản vay', type:'noun', example:'He got a loan from the bank.', viAnswers:['khoản vay','tiền vay']},
      {word:'debt', meaning:'nợ', type:'noun', example:'She has a lot of debt.', viAnswers:['nợ','món nợ']},
      {word:'interest', meaning:'lãi suất', type:'noun', example:'The interest rate is 5%.', viAnswers:['lãi suất','tiền lãi']},
      {word:'tax', meaning:'thuế', type:'noun', example:'Everyone must pay tax.', viAnswers:['thuế']},
      {word:'salary', meaning:'lương', type:'noun', example:'Her salary is paid monthly.', viAnswers:['lương','tiền lương']},
      {word:'wage', meaning:'tiền công', type:'noun', example:'The minimum wage went up.', viAnswers:['tiền công','tiền lương','lương']},
      {word:'revenue', meaning:'doanh thu', type:'noun', example:'The company revenue grew 10%.', viAnswers:['doanh thu']},
      {word:'fund', meaning:'quỹ', type:'noun', example:'We started a new fund.', viAnswers:['quỹ','nguồn vốn']},
      {word:'account', meaning:'tài khoản', type:'noun', example:'I opened a bank account.', viAnswers:['tài khoản']},
      {word:'balance', meaning:'số dư', type:'noun', example:'Check your account balance.', viAnswers:['số dư','cân bằng']},
      {word:'transfer', meaning:'chuyển khoản', type:'verb', example:'Please transfer the money today.', viAnswers:['chuyển khoản','chuyển']},
      {word:'withdraw', meaning:'rút tiền', type:'verb', example:'I need to withdraw some cash.', viAnswers:['rút tiền','rút']},
      {word:'deposit', meaning:'gửi tiền', type:'verb / noun', example:'She deposited money into her account.', viAnswers:['gửi tiền','tiền gửi','đặt cọc']},
      {word:'payment', meaning:'thanh toán', type:'noun', example:'The payment is due tomorrow.', viAnswers:['thanh toán','khoản thanh toán']},
      {word:'financial', meaning:'thuộc tài chính', type:'adjective', example:'This is a financial report.', viAnswers:['thuộc tài chính','tài chính']},
      {word:'economic', meaning:'thuộc kinh tế', type:'adjective', example:'The economic situation is improving.', viAnswers:['thuộc kinh tế','kinh tế']}
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
      tips: "Thấy the/a/an/my → tìm danh từ ngay sau. Nếu có 2 chỗ trống, thường là tính từ + danh từ."
    },
    words: [
      {word:'house', meaning:'nhà', type:'noun', example:'They live in a big house.', viAnswers:['nhà','ngôi nhà','căn nhà']},
      {word:'apartment', meaning:'căn hộ', type:'noun', example:'The apartment has two bedrooms.', viAnswers:['căn hộ','chung cư']},
      {word:'rent', meaning:'tiền thuê / thuê', type:'noun / verb', example:'The rent is $800 per month.', viAnswers:['tiền thuê','thuê']},
      {word:'lease', meaning:'hợp đồng thuê', type:'noun', example:'Please sign the lease.', viAnswers:['hợp đồng thuê','hợp đồng cho thuê']},
      {word:'landlord', meaning:'chủ nhà', type:'noun', example:'The landlord fixed the door.', viAnswers:['chủ nhà','chủ cho thuê']},
      {word:'tenant', meaning:'người thuê', type:'noun', example:'The tenant pays rent on time.', viAnswers:['người thuê','người thuê nhà']},
      {word:'furniture', meaning:'đồ nội thất', type:'noun', example:'We need new furniture.', viAnswers:['đồ nội thất','nội thất','đồ đạc']},
      {word:'kitchen', meaning:'nhà bếp', type:'noun', example:'She is cooking in the kitchen.', viAnswers:['nhà bếp','bếp','phòng bếp']},
      {word:'bedroom', meaning:'phòng ngủ', type:'noun', example:'The bedroom is very large.', viAnswers:['phòng ngủ']},
      {word:'bathroom', meaning:'phòng tắm', type:'noun', example:'The bathroom is clean.', viAnswers:['phòng tắm','nhà tắm']},
      {word:'garage', meaning:'nhà để xe', type:'noun', example:'He parks the car in the garage.', viAnswers:['nhà để xe','ga-ra']},
      {word:'garden', meaning:'vườn', type:'noun', example:'There are flowers in the garden.', viAnswers:['vườn','khu vườn']},
      {word:'neighborhood', meaning:'khu phố', type:'noun', example:'This is a quiet neighborhood.', viAnswers:['khu phố','hàng xóm','khu vực lân cận']},
      {word:'address', meaning:'địa chỉ', type:'noun', example:'What is your address?', viAnswers:['địa chỉ']},
      {word:'move', meaning:'chuyển nhà / di chuyển', type:'verb', example:'We will move next week.', viAnswers:['chuyển nhà','di chuyển','dọn nhà']},
      {word:'decorate', meaning:'trang trí', type:'verb', example:'She decorated the living room.', viAnswers:['trang trí']},
      {word:'repair', meaning:'sửa chữa', type:'verb', example:'He repaired the broken window.', viAnswers:['sửa chữa','sửa']},
      {word:'maintain', meaning:'bảo trì', type:'verb', example:'We maintain the building every year.', viAnswers:['bảo trì','duy trì','bảo dưỡng']},
      {word:'electricity', meaning:'điện', type:'noun', example:'The electricity bill is high.', viAnswers:['điện','điện năng']},
      {word:'water', meaning:'nước', type:'noun', example:'The water is clean and safe.', viAnswers:['nước']},
      {word:'heat', meaning:'sưởi ấm / nhiệt', type:'noun / verb', example:'Turn on the heat, please.', viAnswers:['sưởi ấm','nhiệt','nóng']},
      {word:'air', meaning:'không khí', type:'noun', example:'The air is fresh here.', viAnswers:['không khí']},
      {word:'condition', meaning:'tình trạng', type:'noun', example:'The house is in good condition.', viAnswers:['tình trạng','điều kiện']},
      {word:'property', meaning:'bất động sản / tài sản', type:'noun', example:'This property is for sale.', viAnswers:['bất động sản','tài sản']},
      {word:'mortgage', meaning:'thế chấp', type:'noun', example:'They are paying off the mortgage.', viAnswers:['thế chấp','vay thế chấp']}
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
      tips: "Nhớ: sau BE → tính từ; sau VERY → tính từ hoặc trạng từ; bổ nghĩa cho động từ → trạng từ."
    },
    words: [
      {word:'environment', meaning:'môi trường', type:'noun', example:'We must protect the environment.', viAnswers:['môi trường']},
      {word:'nature', meaning:'thiên nhiên', type:'noun', example:'I love nature very much.', viAnswers:['thiên nhiên','tự nhiên']},
      {word:'climate', meaning:'khí hậu', type:'noun', example:'The climate is changing.', viAnswers:['khí hậu']},
      {word:'weather', meaning:'thời tiết', type:'noun', example:'The weather is very hot today.', viAnswers:['thời tiết']},
      {word:'pollution', meaning:'ô nhiễm', type:'noun', example:'Air pollution is a big problem.', viAnswers:['ô nhiễm','sự ô nhiễm']},
      {word:'recycle', meaning:'tái chế', type:'verb', example:'We should recycle paper and plastic.', viAnswers:['tái chế']},
      {word:'waste', meaning:'rác thải / lãng phí', type:'noun / verb', example:'Do not waste water.', viAnswers:['rác thải','lãng phí','chất thải']},
      {word:'energy', meaning:'năng lượng', type:'noun', example:'Solar energy is very clean.', viAnswers:['năng lượng']},
      {word:'solar', meaning:'thuộc mặt trời', type:'adjective', example:'We use solar power.', viAnswers:['thuộc mặt trời','năng lượng mặt trời']},
      {word:'water', meaning:'nước', type:'noun', example:'Clean water is very important.', viAnswers:['nước']},
      {word:'forest', meaning:'rừng', type:'noun', example:'The forest is very large.', viAnswers:['rừng','khu rừng']},
      {word:'ocean', meaning:'đại dương', type:'noun', example:'The ocean is very deep.', viAnswers:['đại dương','biển']},
      {word:'protect', meaning:'bảo vệ', type:'verb', example:'We must protect wildlife.', viAnswers:['bảo vệ']},
      {word:'conserve', meaning:'bảo tồn', type:'verb', example:'We need to conserve energy.', viAnswers:['bảo tồn','giữ gìn']},
      {word:'reduce', meaning:'giảm', type:'verb', example:'Please reduce waste.', viAnswers:['giảm','giảm thiểu','giảm bớt']},
      {word:'reuse', meaning:'tái sử dụng', type:'verb', example:'You can reuse this bag.', viAnswers:['tái sử dụng']},
      {word:'global', meaning:'toàn cầu', type:'adjective', example:'Global warming is very serious.', viAnswers:['toàn cầu']},
      {word:'temperature', meaning:'nhiệt độ', type:'noun', example:'The temperature is very high.', viAnswers:['nhiệt độ']},
      {word:'carbon', meaning:'các-bon', type:'noun', example:'We must reduce carbon emissions.', viAnswers:['các-bon','carbon','cacbon']},
      {word:'green', meaning:'xanh / thân thiện môi trường', type:'adjective', example:'We need green energy.', viAnswers:['xanh','xanh lá','thân thiện môi trường']},
      {word:'clean', meaning:'sạch', type:'adjective', example:'The air here is very clean.', viAnswers:['sạch','sạch sẽ']},
      {word:'sustainable', meaning:'bền vững', type:'adjective', example:'We need sustainable development.', viAnswers:['bền vững']},
      {word:'damage', meaning:'thiệt hại / gây hại', type:'noun / verb', example:'The storm caused serious damage.', viAnswers:['thiệt hại','gây hại','hư hại']},
      {word:'resource', meaning:'tài nguyên', type:'noun', example:'Natural resources are limited.', viAnswers:['tài nguyên','nguồn tài nguyên']},
      {word:'wildlife', meaning:'động vật hoang dã', type:'noun', example:'We must protect wildlife.', viAnswers:['động vật hoang dã']}
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
      tips: "Nhớ: AT → điểm nhỏ (giờ, địa điểm); ON → bề mặt, ngày; IN → không gian lớn, tháng/năm."
    },
    words: [
      {word:'passport', meaning:'hộ chiếu', type:'noun', example:'Show your passport at the airport.', viAnswers:['hộ chiếu']},
      {word:'visa', meaning:'thị thực', type:'noun', example:'You need a visa to enter this country.', viAnswers:['thị thực','visa']},
      {word:'luggage', meaning:'hành lý', type:'noun', example:'Put your luggage on the bus.', viAnswers:['hành lý']},
      {word:'suitcase', meaning:'vali', type:'noun', example:'She packed her suitcase.', viAnswers:['vali','va li']},
      {word:'hotel', meaning:'khách sạn', type:'noun', example:'We stayed in a nice hotel.', viAnswers:['khách sạn']},
      {word:'reservation', meaning:'đặt chỗ', type:'noun', example:'I have a reservation at the hotel.', viAnswers:['đặt chỗ','sự đặt trước','đặt phòng']},
      {word:'tourist', meaning:'khách du lịch', type:'noun', example:'Many tourists visit in summer.', viAnswers:['khách du lịch','du khách']},
      {word:'guide', meaning:'hướng dẫn viên', type:'noun', example:'The guide showed us the city.', viAnswers:['hướng dẫn viên','người hướng dẫn']},
      {word:'map', meaning:'bản đồ', type:'noun', example:'Look at the map on the wall.', viAnswers:['bản đồ']},
      {word:'itinerary', meaning:'lịch trình', type:'noun', example:'Check the itinerary for the trip.', viAnswers:['lịch trình','hành trình']},
      {word:'attraction', meaning:'điểm tham quan', type:'noun', example:'This is a famous tourist attraction.', viAnswers:['điểm tham quan','điểm thu hút']},
      {word:'culture', meaning:'văn hóa', type:'noun', example:'I want to learn about the culture.', viAnswers:['văn hóa']},
      {word:'souvenir', meaning:'quà lưu niệm', type:'noun', example:'She bought a souvenir at the shop.', viAnswers:['quà lưu niệm','đồ lưu niệm']},
      {word:'currency', meaning:'tiền tệ', type:'noun', example:'What currency do they use in Japan?', viAnswers:['tiền tệ','đồng tiền','ngoại tệ']},
      {word:'exchange', meaning:'đổi / trao đổi', type:'verb / noun', example:'I need to exchange money at the bank.', viAnswers:['đổi','trao đổi','đổi tiền']},
      {word:'customs', meaning:'hải quan', type:'noun', example:'Go through customs at the airport.', viAnswers:['hải quan']},
      {word:'border', meaning:'biên giới', type:'noun', example:'We crossed the border on Monday.', viAnswers:['biên giới']},
      {word:'international', meaning:'quốc tế', type:'adjective', example:'This is an international airport.', viAnswers:['quốc tế']},
      {word:'domestic', meaning:'trong nước / nội địa', type:'adjective', example:'This is a domestic flight.', viAnswers:['trong nước','nội địa']},
      {word:'accommodation', meaning:'chỗ ở', type:'noun', example:'The accommodation is in the city center.', viAnswers:['chỗ ở','nơi ở','nơi lưu trú']},
      {word:'resort', meaning:'khu nghỉ dưỡng', type:'noun', example:'We stayed at a beach resort.', viAnswers:['khu nghỉ dưỡng','resort']},
      {word:'cruise', meaning:'du thuyền', type:'noun', example:'They went on a cruise in June.', viAnswers:['du thuyền','chuyến du ngoạn bằng tàu']},
      {word:'adventure', meaning:'cuộc phiêu lưu', type:'noun', example:'The trip was a great adventure.', viAnswers:['cuộc phiêu lưu','phiêu lưu']},
      {word:'explore', meaning:'khám phá', type:'verb', example:'We explored the old city on foot.', viAnswers:['khám phá','thám hiểm']},
      {word:'journey', meaning:'hành trình', type:'noun', example:'The journey took five hours.', viAnswers:['hành trình','chuyến đi']}
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
      tips: "FOR = cho/vì; TO = đến; FROM = từ; WITH = với/cùng."
    },
    words: [
      {word:'menu', meaning:'thực đơn', type:'noun', example:'Can I see the menu, please?', viAnswers:['thực đơn']},
      {word:'dish', meaning:'món ăn', type:'noun', example:'This dish is from Vietnam.', viAnswers:['món ăn','đĩa']},
      {word:'meal', meaning:'bữa ăn', type:'noun', example:'We had a nice meal with friends.', viAnswers:['bữa ăn']},
      {word:'breakfast', meaning:'bữa sáng', type:'noun', example:'Breakfast is ready for you.', viAnswers:['bữa sáng','ăn sáng']},
      {word:'lunch', meaning:'bữa trưa', type:'noun', example:'Let us go to lunch.', viAnswers:['bữa trưa','ăn trưa']},
      {word:'dinner', meaning:'bữa tối', type:'noun', example:'We had dinner with the team.', viAnswers:['bữa tối','ăn tối','bữa cơm tối']},
      {word:'appetizer', meaning:'món khai vị', type:'noun', example:'We ordered an appetizer for the table.', viAnswers:['món khai vị','khai vị']},
      {word:'dessert', meaning:'món tráng miệng', type:'noun', example:'I want cake for dessert.', viAnswers:['món tráng miệng','tráng miệng']},
      {word:'beverage', meaning:'đồ uống', type:'noun', example:'What beverage would you like?', viAnswers:['đồ uống','thức uống']},
      {word:'ingredient', meaning:'nguyên liệu', type:'noun', example:'This recipe uses fresh ingredients.', viAnswers:['nguyên liệu','thành phần']},
      {word:'recipe', meaning:'công thức nấu ăn', type:'noun', example:'The recipe is from my grandmother.', viAnswers:['công thức nấu ăn','công thức']},
      {word:'cook', meaning:'nấu ăn', type:'verb', example:'She cooks dinner for the family.', viAnswers:['nấu ăn','nấu','đầu bếp']},
      {word:'serve', meaning:'phục vụ', type:'verb', example:'The waiter served the food to us.', viAnswers:['phục vụ']},
      {word:'taste', meaning:'nếm / hương vị', type:'verb / noun', example:'This soup tastes delicious.', viAnswers:['nếm','hương vị','vị']},
      {word:'fresh', meaning:'tươi', type:'adjective', example:'We use fresh vegetables from the farm.', viAnswers:['tươi','tươi mới']},
      {word:'delicious', meaning:'ngon', type:'adjective', example:'The food is very delicious.', viAnswers:['ngon','thơm ngon']},
      {word:'spicy', meaning:'cay', type:'adjective', example:'This dish is too spicy for me.', viAnswers:['cay']},
      {word:'order', meaning:'gọi món / đặt hàng', type:'verb', example:'I want to order a pizza.', viAnswers:['gọi món','đặt hàng','đặt','gọi']},
      {word:'waiter', meaning:'phục vụ bàn', type:'noun', example:'The waiter brought the menu to us.', viAnswers:['phục vụ bàn','bồi bàn','người phục vụ']},
      {word:'chef', meaning:'đầu bếp', type:'noun', example:'The chef cooks with fresh ingredients.', viAnswers:['đầu bếp','bếp trưởng']},
      {word:'kitchen', meaning:'nhà bếp', type:'noun', example:'The chef works in the kitchen.', viAnswers:['nhà bếp','bếp','phòng bếp']},
      {word:'bill', meaning:'hóa đơn', type:'noun', example:'Can I have the bill, please?', viAnswers:['hóa đơn']},
      {word:'tip', meaning:'tiền boa', type:'noun', example:'I left a tip for the waiter.', viAnswers:['tiền boa','tiền tip']},
      {word:'reservation', meaning:'đặt bàn', type:'noun', example:'I have a reservation for 7 PM.', viAnswers:['đặt bàn','đặt chỗ','đặt trước']},
      {word:'vegetarian', meaning:'người ăn chay / ăn chay', type:'noun / adjective', example:'Do you have vegetarian dishes?', viAnswers:['người ăn chay','ăn chay','chay']}
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
      tips: "DURING + danh từ (sự kiện); FOR + khoảng thời gian (số giờ/ngày). Đừng nhầm lẫn!"
    },
    words: [
      {word:'movie', meaning:'phim', type:'noun', example:'We watched a movie after dinner.', viAnswers:['phim','bộ phim']},
      {word:'music', meaning:'âm nhạc', type:'noun', example:'I listen to music during lunch.', viAnswers:['âm nhạc','nhạc']},
      {word:'concert', meaning:'buổi hòa nhạc', type:'noun', example:'The concert starts at 8 PM.', viAnswers:['buổi hòa nhạc','buổi biểu diễn','concert']},
      {word:'theater', meaning:'nhà hát / rạp chiếu phim', type:'noun', example:'We went to the theater after work.', viAnswers:['nhà hát','rạp chiếu phim','rạp hát']},
      {word:'perform', meaning:'biểu diễn', type:'verb', example:'The band will perform during the festival.', viAnswers:['biểu diễn','trình diễn']},
      {word:'audience', meaning:'khán giả', type:'noun', example:'The audience clapped after the show.', viAnswers:['khán giả']},
      {word:'ticket', meaning:'vé', type:'noun', example:'Buy your ticket before the show.', viAnswers:['vé']},
      {word:'show', meaning:'buổi trình diễn', type:'noun', example:'The show starts at 7 PM.', viAnswers:['buổi trình diễn','chương trình','buổi biểu diễn']},
      {word:'festival', meaning:'lễ hội', type:'noun', example:'The music festival is in July.', viAnswers:['lễ hội','liên hoan']},
      {word:'game', meaning:'trò chơi / trận đấu', type:'noun', example:'The game is between two teams.', viAnswers:['trò chơi','trận đấu','game']},
      {word:'sport', meaning:'thể thao', type:'noun', example:'He plays sport after school.', viAnswers:['thể thao','môn thể thao']},
      {word:'play', meaning:'chơi / vở kịch', type:'verb / noun', example:'We saw a play at the theater.', viAnswers:['chơi','vở kịch']},
      {word:'enjoy', meaning:'thưởng thức', type:'verb', example:'I enjoyed the movie very much.', viAnswers:['thưởng thức','tận hưởng','thích']},
      {word:'relax', meaning:'thư giãn', type:'verb', example:'I relax after work every day.', viAnswers:['thư giãn','nghỉ ngơi']},
      {word:'hobby', meaning:'sở thích', type:'noun', example:'Reading is my favorite hobby.', viAnswers:['sở thích']},
      {word:'book', meaning:'sách / đặt', type:'noun / verb', example:'I read a book before bed.', viAnswers:['sách','đặt','quyển sách']},
      {word:'read', meaning:'đọc', type:'verb', example:'She reads magazines during lunch.', viAnswers:['đọc']},
      {word:'magazine', meaning:'tạp chí', type:'noun', example:'I bought a magazine at the store.', viAnswers:['tạp chí']},
      {word:'channel', meaning:'kênh', type:'noun', example:'What channel is the game on?', viAnswers:['kênh','kênh truyền hình']},
      {word:'broadcast', meaning:'phát sóng', type:'verb / noun', example:'The show is broadcast between 8 and 9.', viAnswers:['phát sóng','truyền hình','phát thanh']},
      {word:'stream', meaning:'phát trực tuyến', type:'verb', example:'You can stream the concert online.', viAnswers:['phát trực tuyến','xem trực tuyến','stream']},
      {word:'subscribe', meaning:'đăng ký', type:'verb', example:'Subscribe to this channel before Friday.', viAnswers:['đăng ký','theo dõi']},
      {word:'recommend', meaning:'giới thiệu / gợi ý', type:'verb', example:'I recommend this movie to you.', viAnswers:['giới thiệu','gợi ý','đề xuất']},
      {word:'review', meaning:'đánh giá', type:'noun / verb', example:'Read the review before buying the book.', viAnswers:['đánh giá','nhận xét','bài đánh giá']},
      {word:'popular', meaning:'phổ biến', type:'adjective', example:'This show is very popular.', viAnswers:['phổ biến','nổi tiếng','được yêu thích']}
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
      tips: "AND = thêm; BUT = nhưng; OR = hoặc; SO = nên. Nhớ dấu phẩy trước liên từ khi nối 2 câu."
    },
    words: [
      {word:'speak', meaning:'nói', type:'verb', example:'She speaks English and Vietnamese.', viAnswers:['nói']},
      {word:'listen', meaning:'nghe', type:'verb', example:'Please listen carefully.', viAnswers:['nghe','lắng nghe']},
      {word:'tell', meaning:'kể / nói cho', type:'verb', example:'Tell me the truth.', viAnswers:['kể','nói cho','bảo']},
      {word:'explain', meaning:'giải thích', type:'verb', example:'He explained the problem, and she understood.', viAnswers:['giải thích']},
      {word:'describe', meaning:'mô tả', type:'verb', example:'Can you describe the situation?', viAnswers:['mô tả','miêu tả']},
      {word:'express', meaning:'bày tỏ', type:'verb', example:'She expressed her opinion clearly.', viAnswers:['bày tỏ','diễn đạt','thể hiện']},
      {word:'argue', meaning:'tranh luận', type:'verb', example:'They argued, but they stayed friends.', viAnswers:['tranh luận','cãi nhau']},
      {word:'agree', meaning:'đồng ý', type:'verb', example:'I agree with your idea.', viAnswers:['đồng ý']},
      {word:'disagree', meaning:'không đồng ý', type:'verb', example:'He disagreed, but he was polite.', viAnswers:['không đồng ý']},
      {word:'negotiate', meaning:'thương lượng', type:'verb', example:'They negotiated for two hours.', viAnswers:['thương lượng','đàm phán']},
      {word:'persuade', meaning:'thuyết phục', type:'verb', example:'She persuaded him to join the team.', viAnswers:['thuyết phục']},
      {word:'present', meaning:'trình bày', type:'verb', example:'He presented the plan, and everyone agreed.', viAnswers:['trình bày','giới thiệu']},
      {word:'announce', meaning:'thông báo', type:'verb', example:'The manager announced the new policy.', viAnswers:['thông báo','công bố']},
      {word:'inform', meaning:'thông tin / báo tin', type:'verb', example:'Please inform the team about the meeting.', viAnswers:['thông tin','báo tin','cho biết']},
      {word:'respond', meaning:'phản hồi', type:'verb', example:'She did not respond, so I called again.', viAnswers:['phản hồi','đáp lại','hồi đáp']},
      {word:'reply', meaning:'trả lời', type:'verb / noun', example:'Please reply to the email today.', viAnswers:['trả lời','hồi đáp','phúc đáp']},
      {word:'complain', meaning:'phàn nàn', type:'verb', example:'He complained about the service.', viAnswers:['phàn nàn','than phiền','khiếu nại']},
      {word:'apologize', meaning:'xin lỗi', type:'verb', example:'She apologized, and he forgave her.', viAnswers:['xin lỗi']},
      {word:'suggest', meaning:'đề nghị / gợi ý', type:'verb', example:'I suggest we meet tomorrow.', viAnswers:['đề nghị','gợi ý','đề xuất']},
      {word:'recommend', meaning:'khuyến nghị', type:'verb', example:'I recommend this book to everyone.', viAnswers:['khuyến nghị','đề xuất','giới thiệu']},
      {word:'advise', meaning:'khuyên', type:'verb', example:'The doctor advised him to rest.', viAnswers:['khuyên','tư vấn','khuyên bảo']},
      {word:'warn', meaning:'cảnh báo', type:'verb', example:'She warned them, but they did not listen.', viAnswers:['cảnh báo']},
      {word:'praise', meaning:'khen ngợi', type:'verb', example:'The boss praised her work.', viAnswers:['khen ngợi','khen','ca ngợi']},
      {word:'criticize', meaning:'chỉ trích', type:'verb', example:'Do not criticize, but give advice.', viAnswers:['chỉ trích','phê bình','phê phán']},
      {word:'discuss', meaning:'thảo luận', type:'verb', example:'We need to discuss this problem.', viAnswers:['thảo luận','bàn luận','bàn bạc']}
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
      tips: "BECAUSE = vì; ALTHOUGH = mặc dù; WHEN = khi; IF = nếu. Mệnh đề phụ đầu câu → dấu phẩy."
    },
    words: [
      {word:'law', meaning:'luật', type:'noun', example:'Everyone must follow the law.', viAnswers:['luật','luật pháp','pháp luật']},
      {word:'rule', meaning:'quy tắc', type:'noun', example:'If you break the rule, you will be punished.', viAnswers:['quy tắc','quy định','nội quy']},
      {word:'regulation', meaning:'quy định', type:'noun', example:'The regulation was changed last year.', viAnswers:['quy định','điều lệ']},
      {word:'policy', meaning:'chính sách', type:'noun', example:'The company changed its policy.', viAnswers:['chính sách']},
      {word:'legal', meaning:'hợp pháp', type:'adjective', example:'This action is legal.', viAnswers:['hợp pháp','thuộc pháp lý']},
      {word:'illegal', meaning:'bất hợp pháp', type:'adjective', example:'It is illegal to drive without a license.', viAnswers:['bất hợp pháp','trái pháp luật','phi pháp']},
      {word:'court', meaning:'tòa án', type:'noun', example:'The case went to court.', viAnswers:['tòa án','tòa']},
      {word:'judge', meaning:'thẩm phán', type:'noun', example:'The judge made a decision.', viAnswers:['thẩm phán','quan tòa']},
      {word:'lawyer', meaning:'luật sư', type:'noun', example:'She hired a lawyer because she needed help.', viAnswers:['luật sư']},
      {word:'contract', meaning:'hợp đồng', type:'noun', example:'When you sign the contract, read it carefully.', viAnswers:['hợp đồng']},
      {word:'agreement', meaning:'thỏa thuận', type:'noun', example:'Both sides reached an agreement.', viAnswers:['thỏa thuận','sự đồng ý','sự thỏa thuận']},
      {word:'license', meaning:'giấy phép', type:'noun', example:'You need a license to sell food.', viAnswers:['giấy phép','bằng']},
      {word:'permit', meaning:'giấy phép / cho phép', type:'noun / verb', example:'If you have a permit, you can park here.', viAnswers:['giấy phép','cho phép']},
      {word:'violate', meaning:'vi phạm', type:'verb', example:'If you violate the law, you will be fined.', viAnswers:['vi phạm']},
      {word:'enforce', meaning:'thi hành', type:'verb', example:'The police enforce the law.', viAnswers:['thi hành','thực thi']},
      {word:'comply', meaning:'tuân thủ', type:'verb', example:'Everyone must comply with the regulations.', viAnswers:['tuân thủ','tuân theo']},
      {word:'require', meaning:'yêu cầu', type:'verb', example:'The law requires all drivers to have a license.', viAnswers:['yêu cầu','đòi hỏi']},
      {word:'prohibit', meaning:'cấm', type:'verb', example:'Smoking is prohibited in this building.', viAnswers:['cấm','ngăn cấm']},
      {word:'penalty', meaning:'hình phạt', type:'noun', example:'The penalty for speeding is a fine.', viAnswers:['hình phạt','án phạt']},
      {word:'fine', meaning:'tiền phạt / phạt', type:'noun / verb', example:'He paid a fine because he parked illegally.', viAnswers:['tiền phạt','phạt']},
      {word:'guilty', meaning:'có tội', type:'adjective', example:'The judge said he was guilty.', viAnswers:['có tội']},
      {word:'innocent', meaning:'vô tội', type:'adjective', example:'Although he was suspected, he was innocent.', viAnswers:['vô tội']},
      {word:'evidence', meaning:'bằng chứng', type:'noun', example:'The lawyer showed the evidence in court.', viAnswers:['bằng chứng','chứng cứ']},
      {word:'witness', meaning:'nhân chứng', type:'noun', example:'The witness told the truth in court.', viAnswers:['nhân chứng','người làm chứng']},
      {word:'sue', meaning:'kiện', type:'verb', example:'If they do not pay, we will sue them.', viAnswers:['kiện','khởi kiện']}
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
      tips: "Mệnh đề phụ thuộc = liên từ + S + V. Luôn cần mệnh đề chính để hoàn chỉnh câu."
    },
    words: [
      {word:'factory', meaning:'nhà máy', type:'noun', example:'The factory operates 24 hours a day.', viAnswers:['nhà máy','xưởng']},
      {word:'machine', meaning:'máy móc', type:'noun', example:'When the machine stops, call the technician.', viAnswers:['máy móc','máy','cái máy']},
      {word:'equipment', meaning:'thiết bị', type:'noun', example:'The equipment is very expensive.', viAnswers:['thiết bị','trang thiết bị']},
      {word:'tool', meaning:'dụng cụ', type:'noun', example:'Use the right tool for each task.', viAnswers:['dụng cụ','công cụ']},
      {word:'material', meaning:'nguyên liệu / vật liệu', type:'noun', example:'We need raw materials to start production.', viAnswers:['nguyên liệu','vật liệu','chất liệu']},
      {word:'produce', meaning:'sản xuất', type:'verb', example:'This factory produces 500 units a day.', viAnswers:['sản xuất']},
      {word:'manufacture', meaning:'chế tạo / sản xuất', type:'verb', example:'The company manufactures car parts.', viAnswers:['chế tạo','sản xuất']},
      {word:'assemble', meaning:'lắp ráp', type:'verb', example:'Workers assemble the products by hand.', viAnswers:['lắp ráp']},
      {word:'quality', meaning:'chất lượng', type:'noun', example:'If the quality is good, customers are happy.', viAnswers:['chất lượng']},
      {word:'defect', meaning:'lỗi / khuyết điểm', type:'noun', example:'We found a defect in the product.', viAnswers:['lỗi','khuyết điểm','lỗi sản phẩm']},
      {word:'inspect', meaning:'kiểm tra', type:'verb', example:'Before we ship, we inspect every item.', viAnswers:['kiểm tra','thanh tra']},
      {word:'standard', meaning:'tiêu chuẩn', type:'noun', example:'The product must meet safety standards.', viAnswers:['tiêu chuẩn']},
      {word:'process', meaning:'quy trình', type:'noun', example:'The manufacturing process takes three days.', viAnswers:['quy trình','quá trình']},
      {word:'output', meaning:'sản lượng', type:'noun', example:'The output increased after we got new machines.', viAnswers:['sản lượng','đầu ra']},
      {word:'efficient', meaning:'hiệu quả', type:'adjective', example:'This machine is very efficient.', viAnswers:['hiệu quả']},
      {word:'warehouse', meaning:'nhà kho', type:'noun', example:'The products are stored in the warehouse.', viAnswers:['nhà kho','kho hàng','kho']},
      {word:'inventory', meaning:'hàng tồn kho', type:'noun', example:'We check the inventory every week.', viAnswers:['hàng tồn kho','tồn kho','kiểm kê']},
      {word:'supply', meaning:'cung cấp', type:'verb / noun', example:'The company supplies parts to factories.', viAnswers:['cung cấp','nguồn cung']},
      {word:'demand', meaning:'nhu cầu', type:'noun', example:'The demand for this product is very high.', viAnswers:['nhu cầu','yêu cầu']},
      {word:'raw', meaning:'thô / chưa qua chế biến', type:'adjective', example:'We import raw materials from abroad.', viAnswers:['thô','chưa qua chế biến','nguyên liệu thô']},
      {word:'component', meaning:'linh kiện / bộ phận', type:'noun', example:'Each component is tested before assembly.', viAnswers:['linh kiện','bộ phận','thành phần']},
      {word:'automate', meaning:'tự động hóa', type:'verb', example:'We plan to automate the production line.', viAnswers:['tự động hóa']},
      {word:'operate', meaning:'vận hành', type:'verb', example:'He operates the machine every day.', viAnswers:['vận hành','hoạt động','điều hành']},
      {word:'maintain', meaning:'bảo trì', type:'verb', example:'We maintain the equipment every month.', viAnswers:['bảo trì','duy trì','bảo dưỡng']},
      {word:'safety', meaning:'an toàn', type:'noun', example:'Safety is the most important rule in the factory.', viAnswers:['an toàn','sự an toàn']}
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
      title: "Câu bị động - cấu trúc S + be + V3 (Past Participle)",
      explanation: "Câu bị động dùng khi muốn nhấn mạnh hành động hoặc đối tượng chịu tác động, thay vì người thực hiện.\n\nCấu trúc: S + BE + V3/past participle (+ by + tác nhân)\n\nSo sánh:\n• Chủ động: The company promotes the product.\n• Bị động: The product is promoted (by the company).\n\nKhi nào dùng bị động?\n1. Không biết ai làm: The ad was posted online.\n2. Không quan trọng ai làm: The survey was completed.\n3. Nhấn mạnh đối tượng: The brand is known worldwide.",
      structure: "S + be (am/is/are/was/were) + V3 (+ by + agent)",
      examples: [
        "The product is advertised on TV.",
        "The survey was completed last week.",
        "New content is created every day.",
        "The campaign was launched by the marketing team."
      ],
      tips: "Bị động = be + V3. Nhớ chia BE đúng thì: is/are (hiện tại), was/were (quá khứ)."
    },
    words: [
      {word:'advertise', meaning:'quảng cáo', type:'verb', example:'The product is advertised on TV.', viAnswers:['quảng cáo']},
      {word:'promote', meaning:'quảng bá / thăng chức', type:'verb', example:'The new phone is promoted online.', viAnswers:['quảng bá','thăng chức','xúc tiến']},
      {word:'brand', meaning:'thương hiệu', type:'noun', example:'This brand is known worldwide.', viAnswers:['thương hiệu','nhãn hiệu']},
      {word:'market', meaning:'thị trường / tiếp thị', type:'noun / verb', example:'The product is marketed to young people.', viAnswers:['thị trường','tiếp thị']},
      {word:'campaign', meaning:'chiến dịch', type:'noun', example:'The campaign was launched last month.', viAnswers:['chiến dịch']},
      {word:'target', meaning:'mục tiêu / nhắm đến', type:'noun / verb', example:'Young customers are targeted by this ad.', viAnswers:['mục tiêu','nhắm đến','đối tượng']},
      {word:'consumer', meaning:'người tiêu dùng', type:'noun', example:'Consumers are attracted by low prices.', viAnswers:['người tiêu dùng']},
      {word:'compete', meaning:'cạnh tranh', type:'verb', example:'Many companies compete in this market.', viAnswers:['cạnh tranh']},
      {word:'strategy', meaning:'chiến lược', type:'noun', example:'A new strategy was developed.', viAnswers:['chiến lược']},
      {word:'launch', meaning:'ra mắt / khởi động', type:'verb', example:'The product was launched in January.', viAnswers:['ra mắt','khởi động','tung ra']},
      {word:'survey', meaning:'khảo sát', type:'noun / verb', example:'A survey was conducted last week.', viAnswers:['khảo sát','cuộc khảo sát']},
      {word:'trend', meaning:'xu hướng', type:'noun', example:'New trends are analyzed by the team.', viAnswers:['xu hướng']},
      {word:'research', meaning:'nghiên cứu', type:'noun / verb', example:'The research was published online.', viAnswers:['nghiên cứu']},
      {word:'analyze', meaning:'phân tích', type:'verb', example:'The data is analyzed every month.', viAnswers:['phân tích']},
      {word:'attract', meaning:'thu hút', type:'verb', example:'Customers are attracted by the new design.', viAnswers:['thu hút']},
      {word:'engage', meaning:'thu hút / gắn kết', type:'verb', example:'Users are engaged through social media.', viAnswers:['thu hút','gắn kết','tương tác']},
      {word:'influence', meaning:'ảnh hưởng', type:'verb / noun', example:'Buying decisions are influenced by ads.', viAnswers:['ảnh hưởng','tác động']},
      {word:'social', meaning:'xã hội', type:'adjective', example:'Social media is used for marketing.', viAnswers:['xã hội']},
      {word:'media', meaning:'phương tiện truyền thông', type:'noun', example:'The news was reported by the media.', viAnswers:['phương tiện truyền thông','truyền thông']},
      {word:'content', meaning:'nội dung', type:'noun', example:'New content is created every week.', viAnswers:['nội dung']},
      {word:'logo', meaning:'biểu tượng', type:'noun', example:'The logo was designed by a famous artist.', viAnswers:['biểu tượng','logo']},
      {word:'slogan', meaning:'khẩu hiệu', type:'noun', example:'A new slogan was chosen for the campaign.', viAnswers:['khẩu hiệu','slogan']},
      {word:'sponsor', meaning:'tài trợ', type:'verb / noun', example:'The event is sponsored by a big company.', viAnswers:['tài trợ','nhà tài trợ']},
      {word:'distribute', meaning:'phân phối', type:'verb', example:'The products are distributed nationwide.', viAnswers:['phân phối']},
      {word:'feedback', meaning:'phản hồi', type:'noun', example:'Customer feedback is collected every day.', viAnswers:['phản hồi','ý kiến phản hồi']}
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
      title: "Bị động thì hiện tại và quá khứ đơn",
      explanation: "1) Bị động HIỆN TẠI ĐƠN: S + am/is/are + V3\n  - New employees are hired every month.\n  - The policy is reviewed every year.\n\n2) Bị động QUÁ KHỨ ĐƠN: S + was/were + V3\n  - She was promoted last month.\n  - The candidates were interviewed yesterday.\n\nCách nhận biết trong TOEIC:\n• Thấy 'last week, yesterday, in 2023' → was/were + V3\n• Thấy 'every day, usually, always' → am/is/are + V3",
      structure: "Hiện tại: S + am/is/are + V3 | Quá khứ: S + was/were + V3",
      examples: [
        "Employees are evaluated every year. (hiện tại)",
        "A new manager was hired last week. (quá khứ)",
        "Benefits are provided to all staff. (hiện tại)",
        "The training was completed yesterday. (quá khứ)"
      ],
      tips: "is/are + V3 = hiện tại bị động; was/were + V3 = quá khứ bị động. Nhìn dấu hiệu thời gian!"
    },
    words: [
      {word:'hire', meaning:'thuê / tuyển dụng', type:'verb', example:'A new employee was hired yesterday.', viAnswers:['thuê','tuyển dụng','tuyển']},
      {word:'recruit', meaning:'tuyển dụng', type:'verb', example:'New staff are recruited every year.', viAnswers:['tuyển dụng','tuyển mộ']},
      {word:'interview', meaning:'phỏng vấn', type:'verb / noun', example:'She was interviewed for the position.', viAnswers:['phỏng vấn']},
      {word:'resume', meaning:'sơ yếu lý lịch', type:'noun', example:'Please submit your resume online.', viAnswers:['sơ yếu lý lịch','hồ sơ','lý lịch']},
      {word:'qualify', meaning:'đủ điều kiện', type:'verb', example:'He is qualified for this position.', viAnswers:['đủ điều kiện','đạt tiêu chuẩn']},
      {word:'experience', meaning:'kinh nghiệm', type:'noun', example:'Five years of experience is required.', viAnswers:['kinh nghiệm']},
      {word:'benefit', meaning:'phúc lợi / lợi ích', type:'noun', example:'Health benefits are provided to all employees.', viAnswers:['phúc lợi','lợi ích']},
      {word:'insurance', meaning:'bảo hiểm', type:'noun', example:'Health insurance is offered to all staff.', viAnswers:['bảo hiểm']},
      {word:'vacation', meaning:'kỳ nghỉ', type:'noun', example:'Two weeks of vacation are given each year.', viAnswers:['kỳ nghỉ','nghỉ phép']},
      {word:'retire', meaning:'nghỉ hưu', type:'verb', example:'He retired after 30 years of work.', viAnswers:['nghỉ hưu','về hưu']},
      {word:'promote', meaning:'thăng chức', type:'verb', example:'She was promoted to manager last month.', viAnswers:['thăng chức','đề bạt']},
      {word:'transfer', meaning:'chuyển', type:'verb', example:'He was transferred to the Hanoi office.', viAnswers:['chuyển','điều chuyển','chuyển công tác']},
      {word:'evaluate', meaning:'đánh giá', type:'verb', example:'Employees are evaluated every six months.', viAnswers:['đánh giá']},
      {word:'performance', meaning:'hiệu suất', type:'noun', example:'Her performance was excellent this year.', viAnswers:['hiệu suất','kết quả làm việc','thành tích']},
      {word:'training', meaning:'đào tạo', type:'noun', example:'Training is provided for all new staff.', viAnswers:['đào tạo','huấn luyện']},
      {word:'orientation', meaning:'định hướng', type:'noun', example:'Orientation was held on Monday.', viAnswers:['định hướng','buổi giới thiệu']},
      {word:'policy', meaning:'chính sách', type:'noun', example:'Company policies are updated every year.', viAnswers:['chính sách']},
      {word:'diversity', meaning:'đa dạng', type:'noun', example:'Diversity is valued in our company.', viAnswers:['đa dạng','sự đa dạng']},
      {word:'workplace', meaning:'nơi làm việc', type:'noun', example:'The workplace is kept clean every day.', viAnswers:['nơi làm việc']},
      {word:'complaint', meaning:'lời phàn nàn', type:'noun', example:'The complaint was handled quickly.', viAnswers:['lời phàn nàn','khiếu nại','sự phàn nàn']},
      {word:'discipline', meaning:'kỷ luật', type:'noun / verb', example:'He was disciplined for being late.', viAnswers:['kỷ luật']},
      {word:'resign', meaning:'từ chức', type:'verb', example:'She resigned from her job last week.', viAnswers:['từ chức','nghỉ việc']},
      {word:'terminate', meaning:'chấm dứt', type:'verb', example:'His contract was terminated in March.', viAnswers:['chấm dứt','sa thải']},
      {word:'reference', meaning:'tham chiếu / người giới thiệu', type:'noun', example:'References are checked before hiring.', viAnswers:['tham chiếu','người giới thiệu','tài liệu tham khảo']},
      {word:'compensation', meaning:'đền bù / lương thưởng', type:'noun', example:'Fair compensation is offered to all employees.', viAnswers:['đền bù','lương thưởng','bồi thường']}
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
      title: "Bị động với will / can / must / should",
      explanation: "Khi dùng bị động với động từ khuyết thiếu (modal verbs):\n\nCấu trúc: S + modal + BE + V3\n\n• WILL: The money will be transferred tomorrow.\n• CAN: The account can be opened online.\n• MUST: The form must be signed by the customer.\n• SHOULD: The balance should be checked regularly.\n\n⚠️ SAU modal verb luôn là BE (nguyên mẫu), KHÔNG chia thành is/are/was/were.\n• ✅ The loan can be approved.\n• ❌ The loan can is approved.",
      structure: "S + will/can/must/should + BE + V3",
      examples: [
        "The money will be deposited tomorrow.",
        "A new account can be opened online.",
        "The form must be signed by the customer.",
        "The balance should be checked every day."
      ],
      tips: "Modal + BE + V3. Nhớ: sau modal → BE nguyên mẫu, không chia!"
    },
    words: [
      {word:'bank', meaning:'ngân hàng', type:'noun', example:'The bank will be closed on Sunday.', viAnswers:['ngân hàng']},
      {word:'branch', meaning:'chi nhánh', type:'noun', example:'A new branch will be opened next month.', viAnswers:['chi nhánh']},
      {word:'teller', meaning:'nhân viên giao dịch', type:'noun', example:'The teller can help you with the deposit.', viAnswers:['nhân viên giao dịch','giao dịch viên']},
      {word:'check', meaning:'séc / kiểm tra', type:'noun / verb', example:'The check must be signed before deposit.', viAnswers:['séc','kiểm tra']},
      {word:'deposit', meaning:'gửi tiền', type:'verb / noun', example:'Money can be deposited at any branch.', viAnswers:['gửi tiền','tiền gửi','đặt cọc']},
      {word:'withdraw', meaning:'rút tiền', type:'verb', example:'Cash can be withdrawn from the ATM.', viAnswers:['rút tiền','rút']},
      {word:'transfer', meaning:'chuyển khoản', type:'verb / noun', example:'The funds will be transferred today.', viAnswers:['chuyển khoản','chuyển']},
      {word:'loan', meaning:'khoản vay', type:'noun', example:'The loan must be repaid in 5 years.', viAnswers:['khoản vay','tiền vay']},
      {word:'mortgage', meaning:'thế chấp', type:'noun', example:'The mortgage can be paid monthly.', viAnswers:['thế chấp','vay thế chấp']},
      {word:'interest', meaning:'lãi suất', type:'noun', example:'Interest will be calculated monthly.', viAnswers:['lãi suất','tiền lãi']},
      {word:'credit', meaning:'tín dụng', type:'noun', example:'Your credit score should be checked.', viAnswers:['tín dụng']},
      {word:'debit', meaning:'ghi nợ', type:'noun / adjective', example:'The amount will be debited from your account.', viAnswers:['ghi nợ','thẻ ghi nợ']},
      {word:'statement', meaning:'sao kê', type:'noun', example:'Your statement can be downloaded online.', viAnswers:['sao kê','bảng sao kê']},
      {word:'balance', meaning:'số dư', type:'noun', example:'Your balance should be checked regularly.', viAnswers:['số dư','cân bằng']},
      {word:'fee', meaning:'phí', type:'noun', example:'A small fee will be charged.', viAnswers:['phí','lệ phí']},
      {word:'exchange', meaning:'trao đổi / đổi', type:'verb / noun', example:'Currency can be exchanged at the bank.', viAnswers:['trao đổi','đổi','đổi tiền']},
      {word:'currency', meaning:'tiền tệ', type:'noun', example:'Foreign currency can be bought here.', viAnswers:['tiền tệ','ngoại tệ','đồng tiền']},
      {word:'save', meaning:'tiết kiệm', type:'verb', example:'Money should be saved every month.', viAnswers:['tiết kiệm','để dành']},
      {word:'invest', meaning:'đầu tư', type:'verb', example:'Your money can be invested in stocks.', viAnswers:['đầu tư']},
      {word:'portfolio', meaning:'danh mục đầu tư', type:'noun', example:'Your portfolio should be reviewed yearly.', viAnswers:['danh mục đầu tư']},
      {word:'asset', meaning:'tài sản', type:'noun', example:'All assets must be reported.', viAnswers:['tài sản']},
      {word:'liability', meaning:'nợ phải trả / trách nhiệm', type:'noun', example:'Liabilities must be listed in the report.', viAnswers:['nợ phải trả','trách nhiệm pháp lý','trách nhiệm']},
      {word:'fraud', meaning:'gian lận', type:'noun', example:'Fraud must be reported to the police.', viAnswers:['gian lận','lừa đảo']},
      {word:'secure', meaning:'an toàn / bảo mật', type:'adjective / verb', example:'Your account must be secured with a password.', viAnswers:['an toàn','bảo mật']},
      {word:'transaction', meaning:'giao dịch', type:'noun', example:'Every transaction will be recorded.', viAnswers:['giao dịch']}
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
      title: "So sánh hơn (Comparative) & Quy tắc biến đổi tính từ",
      explanation: "So sánh hơn dùng để so sánh giữa hai đối tượng (người, vật, sự việc).\n\n**1. TÍNH TỪ NGẮN (1 âm tiết, hoặc 2 âm tiết tận cùng bằng -y, -le, -er, -ow):**\nCông thức: Adj-er + than\n- Thông thường: Thêm -er (fast -> faster, cheap -> cheaper).\n- Tận cùng bằng -e: Chỉ thêm -r (large -> larger, wide -> wider).\n- Tận cùng bằng phụ âm + -y: Đổi -y thành -i rồi thêm -er (easy -> easier, happy -> happier, busy -> busier).\n- Tận cùng dạng CVC (Phụ âm - Nguyên âm - Phụ âm): Gấp đôi phụ âm cuối rồi thêm -er (big -> bigger, hot -> hotter, thin -> thinner).\n\n**2. TÍNH TỪ DÀI (Các tính từ từ 2 âm tiết trở lên khác):**\nCông thức: More + Adj + than\n- Ví dụ: more expensive than (đắt hơn), more convenient than (tiện lợi hơn), more professional than (chuyên nghiệp hơn).\n\n**3. CÁC TRƯỜNG HỢP BẤT QUY TẮC CỰC KỲ QUAN TRỌNG:**\n- good / well -> better (tốt hơn)\n- bad / badly -> worse (tệ hơn)\n- far -> farther (xa hơn - khoảng cách địa lý) / further (xa hơn - thông tin, sâu sắc hơn)\n- many / much -> more (nhiều hơn)\n- little -> less (ít hơn)",
      structure: "Short Adj: Adj-er + than | Long Adj: More + Adj + than",
      examples: [\n        "This copier is faster than the old one. (Máy photo này nhanh hơn cái cũ.)",\n        "Online shopping is more convenient than traditional shopping. (Mua sắm trực tuyến tiện lợi hơn mua sắm truyền thống.)",\n        "Today's sales results are better than yesterday's. (Kết quả doanh số hôm nay tốt hơn hôm qua.)",\n        "The new project is much more difficult than we thought. (Dự án mới khó hơn chúng tôi nghĩ rất nhiều.)"\n      ],
      tips: "Mẹo TOEIC: Có thể nhấn mạnh so sánh hơn bằng cách thêm \"much\" hoặc \"far\" phía trước (ví dụ: much faster, far more expensive). Luôn tìm từ \"than\" để nhận biết cấu trúc so sánh hơn!"
    },
    words: [
      {word:'quality', meaning:'chất lượng', type:'noun', example:'The quality is better than before.', viAnswers:['chất lượng']},
      {word:'standard', meaning:'tiêu chuẩn', type:'noun', example:'Our standard is higher than last year.', viAnswers:['tiêu chuẩn']},
      {word:'excellent', meaning:'xuất sắc', type:'adjective', example:'The service is excellent.', viAnswers:['xuất sắc','tuyệt vời']},
      {word:'superior', meaning:'vượt trội', type:'adjective', example:'This product is superior to others.', viAnswers:['vượt trội','cao cấp hơn','ưu việt']},
      {word:'inferior', meaning:'kém hơn', type:'adjective', example:'This material is inferior to the original.', viAnswers:['kém hơn','thấp kém']},
      {word:'compare', meaning:'so sánh', type:'verb', example:'Compare the prices before buying.', viAnswers:['so sánh']},
      {word:'improve', meaning:'cải thiện', type:'verb', example:'The service improved and is better now.', viAnswers:['cải thiện','cải tiến']},
      {word:'enhance', meaning:'nâng cao', type:'verb', example:'We enhanced the product to make it more reliable.', viAnswers:['nâng cao','tăng cường']},
      {word:'upgrade', meaning:'nâng cấp', type:'verb / noun', example:'The system was upgraded to a faster version.', viAnswers:['nâng cấp']},
      {word:'maintain', meaning:'bảo trì / duy trì', type:'verb', example:'We maintain a higher standard than our competitors.', viAnswers:['bảo trì','duy trì','bảo dưỡng']},
      {word:'satisfy', meaning:'làm hài lòng', type:'verb', example:'We want to satisfy more customers.', viAnswers:['làm hài lòng','thỏa mãn']},
      {word:'reliable', meaning:'đáng tin cậy', type:'adjective', example:'This brand is more reliable than others.', viAnswers:['đáng tin cậy','tin cậy']},
      {word:'durable', meaning:'bền', type:'adjective', example:'This material is more durable than plastic.', viAnswers:['bền','bền bỉ']},
      {word:'efficient', meaning:'hiệu quả', type:'adjective', example:'The new system is more efficient than the old one.', viAnswers:['hiệu quả']},
      {word:'effective', meaning:'có hiệu lực / hiệu quả', type:'adjective', example:'This method is more effective than the old one.', viAnswers:['có hiệu lực','hiệu quả']},
      {word:'performance', meaning:'hiệu suất', type:'noun', example:'The performance is better this quarter.', viAnswers:['hiệu suất','kết quả','thành tích']},
      {word:'warranty', meaning:'bảo hành', type:'noun', example:'This product has a longer warranty.', viAnswers:['bảo hành']},
      {word:'guarantee', meaning:'bảo đảm', type:'noun / verb', example:'We guarantee better quality than before.', viAnswers:['bảo đảm','cam kết']},
      {word:'complaint', meaning:'lời phàn nàn', type:'noun', example:'There are fewer complaints than last year.', viAnswers:['lời phàn nàn','khiếu nại','sự phàn nàn']},
      {word:'resolve', meaning:'giải quyết', type:'verb', example:'We resolve problems faster than before.', viAnswers:['giải quyết']},
      {word:'professional', meaning:'chuyên nghiệp', type:'adjective', example:'Our staff is more professional now.', viAnswers:['chuyên nghiệp']},
      {word:'courteous', meaning:'lịch sự', type:'adjective', example:'Please be more courteous to customers.', viAnswers:['lịch sự','nhã nhặn']},
      {word:'prompt', meaning:'nhanh chóng / kịp thời', type:'adjective', example:'We need a prompter response to complaints.', viAnswers:['nhanh chóng','kịp thời']},
      {word:'thorough', meaning:'kỹ lưỡng', type:'adjective', example:'This inspection is more thorough than usual.', viAnswers:['kỹ lưỡng','tỉ mỉ','cẩn thận']},
      {word:'consistent', meaning:'nhất quán', type:'adjective', example:'The quality is more consistent than before.', viAnswers:['nhất quán','ổn định','kiên định']}
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
      title: "So sánh nhất (Superlative) & Quy tắc biến đổi tính từ",
      explanation: "So sánh nhất dùng để so sánh một đối tượng với toàn bộ nhóm (từ 3 đối tượng trở lên).\n\n**1. TÍNH TỪ NGẮN (1 âm tiết, hoặc 2 âm tiết tận cùng bằng -y, -le, -er, -ow):**\nCông thức: The + Adj-est\n- Thông thường: Thêm -est (fast -> the fastest, cheap -> the cheapest).\n- Tận cùng bằng -e: Chỉ thêm -st (large -> the largest, wide -> the widest).\n- Tận cùng bằng phụ âm + -y: Đổi -y thành -i rồi thêm -est (easy -> the easiest, happy -> the happiest, busy -> the busiest).\n- Tận cùng dạng CVC: Gấp đôi phụ âm cuối rồi thêm -est (big -> the biggest, hot -> the hottest).\n\n**2. TÍNH TỪ DÀI:**\nCông thức: The most + Adj\n- Ví dụ: the most expensive (đắt nhất), the most popular (phổ biến nhất), the most reliable (đáng tin cậy nhất).\n\n**3. CÁC TRƯỜNG HỢP BẤT QUY TẮC:**\n- good / well -> the best (tốt nhất)\n- bad / badly -> the worst (tệ nhất)\n- far -> the farthest / the furthest (xa nhất)\n- many / much -> the most (nhiều nhất)\n- little -> the least (ít nhất)",
      structure: "Short Adj: The + Adj-est | Long Adj: The most + Adj",
      examples: [\n        "This is the cheapest office space in the city. (Đây là mặt bằng văn phòng rẻ nhất trong thành phố.)",\n        "He is the most experienced engineer in our team. (Anh ấy là kỹ sư giàu kinh nghiệm nhất trong đội ngũ của chúng tôi.)",\n        "This is the best solution to our budget problem. (Đây là giải pháp tốt nhất cho vấn đề ngân sách của chúng tôi.)",\n        "What is the most efficient way to complete the task? (Cách hiệu quả nhất để hoàn thành nhiệm vụ là gì?)"\n      ],
      tips: "Mẹo TOEIC: Luôn phải có mạo từ \"the\" đứng trước cấu trúc so sánh nhất. Nếu thấy có \"the\" trước chỗ trống và so sánh cả nhóm, hãy chọn ngay tính từ đuôi -est hoặc most + Adj!"
    },
    words: [
      {word:'wake', meaning:'thức dậy', type:'verb', example:'I wake up at 6 AM every day.', viAnswers:['thức dậy']},
      {word:'dress', meaning:'mặc quần áo', type:'verb', example:'She dresses quickly in the morning.', viAnswers:['mặc quần áo','mặc đồ','ăn mặc']},
      {word:'commute', meaning:'đi làm / đi lại', type:'verb', example:'He has the longest commute in the office.', viAnswers:['đi làm','đi lại','doãng đường đi làm']},
      {word:'arrive', meaning:'đến nơi', type:'verb', example:'She arrives at work the earliest.', viAnswers:['đến nơi','đến','tới nơi']},
      {word:'breakfast', meaning:'bữa sáng', type:'noun', example:'Breakfast is the most important meal.', viAnswers:['bữa sáng','ăn sáng']},
      {word:'routine', meaning:'thói quen hàng ngày', type:'noun', example:'This is the best morning routine.', viAnswers:['thói quen hàng ngày','thói quen','lề thói']},
      {word:'schedule', meaning:'lịch trình', type:'noun', example:'Today is the busiest day on my schedule.', viAnswers:['lịch trình','thời gian biểu']},
      {word:'organize', meaning:'sắp xếp', type:'verb', example:'She is the most organized person I know.', viAnswers:['sắp xếp','tổ chức']},
      {word:'manage', meaning:'quản lý', type:'verb', example:'He manages his time the best.', viAnswers:['quản lý']},
      {word:'balance', meaning:'cân bằng', type:'noun / verb', example:'Finding balance is the hardest part.', viAnswers:['cân bằng','sự cân bằng']},
      {word:'priority', meaning:'ưu tiên', type:'noun', example:'Health is my highest priority.', viAnswers:['ưu tiên','sự ưu tiên']},
      {word:'errand', meaning:'việc vặt', type:'noun', example:'I run errands on the weekend.', viAnswers:['việc vặt','công việc lặt vặt']},
      {word:'chore', meaning:'việc nhà', type:'noun', example:'Doing chores is the least fun activity.', viAnswers:['việc nhà','công việc nhà']},
      {word:'grocery', meaning:'tạp hóa / đi chợ', type:'noun', example:'I go to the grocery store every Sunday.', viAnswers:['tạp hóa','đi chợ','cửa hàng tạp hóa']},
      {word:'laundry', meaning:'giặt đồ / đồ giặt', type:'noun', example:'Saturday is the best day to do laundry.', viAnswers:['giặt đồ','đồ giặt','giặt giũ']},
      {word:'clean', meaning:'dọn dẹp / sạch', type:'verb / adjective', example:'I clean the house every weekend.', viAnswers:['dọn dẹp','sạch','lau dọn']},
      {word:'cook', meaning:'nấu ăn', type:'verb', example:'She is the best cook in the family.', viAnswers:['nấu ăn','nấu']},
      {word:'exercise', meaning:'tập thể dục', type:'verb / noun', example:'Morning exercise is the most effective.', viAnswers:['tập thể dục','bài tập']},
      {word:'relax', meaning:'thư giãn', type:'verb', example:'Sunday is the most relaxing day.', viAnswers:['thư giãn','nghỉ ngơi']},
      {word:'socialize', meaning:'giao tiếp xã hội', type:'verb', example:'She socializes the most on weekends.', viAnswers:['giao tiếp xã hội','giao lưu']},
      {word:'habit', meaning:'thói quen', type:'noun', example:'Reading is one of the best habits.', viAnswers:['thói quen']},
      {word:'lifestyle', meaning:'lối sống', type:'noun', example:'A healthy lifestyle is the most important thing.', viAnswers:['lối sống','phong cách sống']},
      {word:'productive', meaning:'năng suất', type:'adjective', example:'Morning is the most productive time.', viAnswers:['năng suất','hiệu suất cao']},
      {word:'healthy', meaning:'khỏe mạnh', type:'adjective', example:'This is the healthiest breakfast option.', viAnswers:['khỏe mạnh','lành mạnh']},
      {word:'convenient', meaning:'tiện lợi', type:'adjective', example:'This is the most convenient store nearby.', viAnswers:['tiện lợi','thuận tiện']}
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
      {word:'sunny', meaning:'nắng', type:'adjective', example:'It is sunny today.', viAnswers:['nắng','có nắng']},
      {word:'cloudy', meaning:'nhiều mây', type:'adjective', example:'The sky is very cloudy.', viAnswers:['nhiều mây','có mây','mây']},
      {word:'rainy', meaning:'có mưa', type:'adjective', example:'It is a rainy day.', viAnswers:['có mưa','mưa']},
      {word:'windy', meaning:'có gió', type:'adjective', example:'It is too windy to go outside.', viAnswers:['có gió','gió','nhiều gió']},
      {word:'storm', meaning:'bão', type:'noun', example:'A big storm is coming tonight.', viAnswers:['bão','cơn bão']},
      {word:'snow', meaning:'tuyết', type:'noun / verb', example:'It is snowing outside.', viAnswers:['tuyết']},
      {word:'fog', meaning:'sương mù', type:'noun', example:'There is heavy fog this morning.', viAnswers:['sương mù']},
      {word:'temperature', meaning:'nhiệt độ', type:'noun', example:'The temperature is 30 degrees today.', viAnswers:['nhiệt độ']},
      {word:'humidity', meaning:'độ ẩm', type:'noun', example:'The humidity is very high in summer.', viAnswers:['độ ẩm']},
      {word:'forecast', meaning:'dự báo', type:'noun / verb', example:'The weather forecast says it will rain.', viAnswers:['dự báo','dự báo thời tiết']},
      {word:'season', meaning:'mùa', type:'noun', example:'Summer is the hottest season.', viAnswers:['mùa']},
      {word:'spring', meaning:'mùa xuân', type:'noun', example:'Flowers bloom in spring.', viAnswers:['mùa xuân']},
      {word:'summer', meaning:'mùa hè', type:'noun', example:'Summer is the warmest season.', viAnswers:['mùa hè','mùa hạ']},
      {word:'autumn', meaning:'mùa thu', type:'noun', example:'The leaves fall in autumn.', viAnswers:['mùa thu']},
      {word:'winter', meaning:'mùa đông', type:'noun', example:'Winter is the coldest season.', viAnswers:['mùa đông']},
      {word:'flood', meaning:'lũ lụt', type:'noun', example:'The flood damaged many houses.', viAnswers:['lũ lụt','lụt','lũ']},
      {word:'drought', meaning:'hạn hán', type:'noun', example:'The drought lasted for three months.', viAnswers:['hạn hán']},
      {word:'earthquake', meaning:'động đất', type:'noun', example:'An earthquake hit the city last night.', viAnswers:['động đất']},
      {word:'lightning', meaning:'sét / chớp', type:'noun', example:'Lightning is very dangerous.', viAnswers:['sét','chớp','tia chớp']},
      {word:'thunder', meaning:'sấm', type:'noun', example:'I heard thunder during the storm.', viAnswers:['sấm','tiếng sấm']},
      {word:'clear', meaning:'quang đãng', type:'adjective', example:'The sky is clear today.', viAnswers:['quang đãng','trong','rõ ràng']},
      {word:'mild', meaning:'ôn hòa / nhẹ', type:'adjective', example:'The weather is mild in spring.', viAnswers:['ôn hòa','nhẹ','dịu']},
      {word:'severe', meaning:'khắc nghiệt / nghiêm trọng', type:'adjective', example:'There was a severe storm last night.', viAnswers:['khắc nghiệt','nghiêm trọng']},
      {word:'tropical', meaning:'nhiệt đới', type:'adjective', example:'Vietnam has a tropical climate.', viAnswers:['nhiệt đới']},
      {word:'freeze', meaning:'đóng băng', type:'verb', example:'Water freezes at 0 degrees.', viAnswers:['đóng băng','đông lại']}
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
      {word:'news', meaning:'tin tức', type:'noun', example:'I watch the news every morning.', viAnswers:['tin tức','tin']},
      {word:'article', meaning:'bài báo', type:'noun', example:'She wrote an article about the economy.', viAnswers:['bài báo','bài viết']},
      {word:'headline', meaning:'tiêu đề', type:'noun', example:'The headline attracted many readers.', viAnswers:['tiêu đề','tít báo']},
      {word:'reporter', meaning:'phóng viên', type:'noun', example:'The reporter interviewed the president.', viAnswers:['phóng viên','nhà báo']},
      {word:'journalist', meaning:'nhà báo', type:'noun', example:'She is a famous journalist.', viAnswers:['nhà báo','ký giả']},
      {word:'editor', meaning:'biên tập viên', type:'noun', example:'The editor reviewed the article.', viAnswers:['biên tập viên','biên tập']},
      {word:'publish', meaning:'xuất bản / đăng', type:'verb', example:'The article was published yesterday.', viAnswers:['xuất bản','đăng','phát hành']},
      {word:'broadcast', meaning:'phát sóng', type:'verb / noun', example:'The news is broadcast at 7 PM.', viAnswers:['phát sóng','truyền hình','phát thanh']},
      {word:'press', meaning:'báo chí', type:'noun', example:'The press covered the event.', viAnswers:['báo chí']},
      {word:'media', meaning:'truyền thông', type:'noun', example:'Social media is very popular.', viAnswers:['truyền thông','phương tiện truyền thông']},
      {word:'interview', meaning:'phỏng vấn', type:'noun / verb', example:'The interview will be on TV tonight.', viAnswers:['phỏng vấn','buổi phỏng vấn']},
      {word:'source', meaning:'nguồn tin', type:'noun', example:'The reporter has a reliable source.', viAnswers:['nguồn tin','nguồn']},
      {word:'issue', meaning:'vấn đề / số báo', type:'noun', example:'This is an important issue.', viAnswers:['vấn đề','số báo']},
      {word:'opinion', meaning:'ý kiến', type:'noun', example:'Everyone has a different opinion.', viAnswers:['ý kiến','quan điểm']},
      {word:'editorial', meaning:'bài xã luận', type:'noun', example:'He wrote an editorial about education.', viAnswers:['bài xã luận','bài bình luận']},
      {word:'column', meaning:'cột báo / chuyên mục', type:'noun', example:'She writes a weekly column.', viAnswers:['cột báo','chuyên mục','mục']},
      {word:'magazine', meaning:'tạp chí', type:'noun', example:'I read this magazine every month.', viAnswers:['tạp chí']},
      {word:'newspaper', meaning:'báo / tờ báo', type:'noun', example:'He reads the newspaper every morning.', viAnswers:['báo','tờ báo']},
      {word:'podcast', meaning:'chương trình phát thanh số', type:'noun', example:'I listen to a news podcast every day.', viAnswers:['chương trình phát thanh số','podcast']},
      {word:'blog', meaning:'trang nhật ký điện tử', type:'noun', example:'She started a travel blog last year.', viAnswers:['trang nhật ký điện tử','blog']},
      {word:'update', meaning:'cập nhật', type:'verb / noun', example:'The website is updated every hour.', viAnswers:['cập nhật']},
      {word:'coverage', meaning:'phạm vi đưa tin', type:'noun', example:'The news coverage was excellent.', viAnswers:['phạm vi đưa tin','sự đưa tin','tin tức']},
      {word:'breaking', meaning:'nóng hổi / mới nhất', type:'adjective', example:'This is breaking news!', viAnswers:['nóng hổi','mới nhất','khẩn cấp']},
      {word:'exclusive', meaning:'độc quyền', type:'adjective', example:'The reporter got an exclusive interview.', viAnswers:['độc quyền']},
      {word:'investigate', meaning:'điều tra', type:'verb', example:'The journalist investigated the case.', viAnswers:['điều tra']}
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
      {word:'build', meaning:'xây dựng', type:'verb', example:'They are building a new school.', viAnswers:['xây dựng','xây']},
      {word:'construct', meaning:'thi công / xây dựng', type:'verb', example:'The bridge was constructed last year.', viAnswers:['thi công','xây dựng']},
      {word:'demolish', meaning:'phá dỡ', type:'verb', example:'The old building was demolished.', viAnswers:['phá dỡ','phá hủy','đập bỏ']},
      {word:'renovate', meaning:'cải tạo / sửa sang', type:'verb', example:'The hotel was renovated last summer.', viAnswers:['cải tạo','sửa sang','tu sửa']},
      {word:'foundation', meaning:'nền móng', type:'noun', example:'The foundation must be very strong.', viAnswers:['nền móng','móng']},
      {word:'structure', meaning:'cấu trúc / công trình', type:'noun', example:'The structure of the building is solid.', viAnswers:['cấu trúc','công trình','kết cấu']},
      {word:'concrete', meaning:'bê tông', type:'noun', example:'The floor is made of concrete.', viAnswers:['bê tông']},
      {word:'steel', meaning:'thép', type:'noun', example:'The building uses a lot of steel.', viAnswers:['thép']},
      {word:'brick', meaning:'gạch', type:'noun', example:'The wall is made of red brick.', viAnswers:['gạch']},
      {word:'wood', meaning:'gỗ', type:'noun', example:'The table is made of wood.', viAnswers:['gỗ']},
      {word:'architect', meaning:'kiến trúc sư', type:'noun', example:'The architect designed the new building.', viAnswers:['kiến trúc sư']},
      {word:'contractor', meaning:'nhà thầu', type:'noun', example:'The contractor will finish the work next week.', viAnswers:['nhà thầu']},
      {word:'blueprint', meaning:'bản thiết kế', type:'noun', example:'The blueprint was approved yesterday.', viAnswers:['bản thiết kế','bản vẽ']},
      {word:'site', meaning:'công trường', type:'noun', example:'Workers are busy at the construction site.', viAnswers:['công trường','công trình','địa điểm']},
      {word:'crane', meaning:'cần cẩu', type:'noun', example:'The crane lifted heavy materials.', viAnswers:['cần cẩu','cần trục']},
      {word:'scaffold', meaning:'giàn giáo', type:'noun', example:'Workers stand on the scaffold.', viAnswers:['giàn giáo']},
      {word:'plumbing', meaning:'hệ thống ống nước', type:'noun', example:'The plumbing was installed last week.', viAnswers:['hệ thống ống nước','ống nước','đường ống']},
      {word:'electrical', meaning:'thuộc điện', type:'adjective', example:'The electrical system was checked today.', viAnswers:['thuộc điện','điện']},
      {word:'insulation', meaning:'cách nhiệt / cách điện', type:'noun', example:'Good insulation keeps the house warm.', viAnswers:['cách nhiệt','cách điện','vật liệu cách nhiệt']},
      {word:'permit', meaning:'giấy phép', type:'noun', example:'A building permit is required.', viAnswers:['giấy phép']},
      {word:'inspect', meaning:'kiểm tra', type:'verb', example:'The building will be inspected tomorrow.', viAnswers:['kiểm tra','thanh tra']},
      {word:'zone', meaning:'khu vực', type:'noun', example:'This is a residential zone.', viAnswers:['khu vực','vùng']},
      {word:'develop', meaning:'phát triển', type:'verb', example:'The area is being developed quickly.', viAnswers:['phát triển']},
      {word:'expand', meaning:'mở rộng', type:'verb', example:'The company plans to expand the factory.', viAnswers:['mở rộng']},
      {word:'landscape', meaning:'cảnh quan', type:'noun / verb', example:'The landscape around the building is beautiful.', viAnswers:['cảnh quan','phong cảnh']}
    ]
  }
];
