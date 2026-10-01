/**
 * Danh sách 51 Bà mẹ Việt Nam Anh hùng Phường Phước Thới, Quận Ô Môn, TP. Cần Thơ
 * Nguồn: Sách "Bà mẹ Việt Nam Anh hùng thành phố Cần Thơ Tập II (2013 - 2020)"
 * và Danh sách tổng hợp Ban Chỉ đạo công tác Đền ơn đáp nghĩa Phường Phước Thới
 */

const MOTHERS_DATA = [
  {
    "stt": 1,
    "name": "NGUYỄN THỊ BA",
    "title": "Truy tặng",
    "birth_death": "1910 - 1991",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "2 con là liệt sĩ: Nguyễn Văn Nê (hy sinh 1968), Nguyễn Văn Mến (hy sinh 1970)",
    "photo": "assets/images/mothers/photo_017.jpg"
  },
  {
    "stt": 2,
    "name": "NGUYỄN THỊ BA",
    "title": "Truy tặng",
    "birth_death": "1915 - 1998",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Chồng là liệt sĩ Nguyễn Văn Tàu (hy sinh 1961), con là liệt sĩ Nguyễn Văn Thân (hy sinh 1968)",
    "photo": "assets/images/mothers/photo_022.jpg"
  },
  {
    "stt": 3,
    "name": "NGUYỄN THỊ BẢY",
    "title": "Truy tặng",
    "birth_death": "1908 - 1985",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Chồng là liệt sĩ Trịnh Quang Vĩ (hy sinh 1959), con là liệt sĩ Trịnh Thị Be (hy sinh 1968)",
    "photo": "assets/images/mothers/photo_023.jpg"
  },
  {
    "stt": 4,
    "name": "TRƯƠNG THỊ BẢY",
    "title": "Truy tặng",
    "birth_death": "1912 - 1996",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "2 con là liệt sĩ: Lê Văn Phái (hy sinh 1947), Lê Văn Kiếm (hy sinh 1962)",
    "photo": "assets/images/mothers/photo_032.jpg"
  },
  {
    "stt": 5,
    "name": "LÝ THỊ CAM",
    "title": "Truy tặng",
    "birth_death": "1905 - 1978",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ hy sinh trong kháng chiến chống Mỹ cứu nước",
    "photo": "assets/images/mothers/photo_037.jpg"
  },
  {
    "stt": 6,
    "name": "HUỲNH THỊ CHẮC",
    "title": "Truy tặng",
    "birth_death": "1918 - 1992",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có con độc nhất là liệt sĩ hy sinh anh dũng vì độc lập dân tộc",
    "photo": "assets/images/mothers/photo_041.jpg"
  },
  {
    "stt": 7,
    "name": "NGUYỄN THỊ CHÍNH",
    "title": "Truy tặng",
    "birth_death": "1920 - 2001",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Quyết định số 629/QĐ-CTN; có 2 thân nhân là liệt sĩ hy sinh vì Tổ quốc",
    "photo": "assets/images/mothers/photo_010.jpg"
  },
  {
    "stt": 8,
    "name": "NGUYỄN THỊ CHUẨN",
    "title": "Truy tặng",
    "birth_death": "1914 - 1990",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ hy sinh trong cuộc kháng chiến chống Mỹ",
    "photo": "assets/images/mothers/photo_048.jpg"
  },
  {
    "stt": 9,
    "name": "LÊ THỊ CÓ",
    "title": "Truy tặng",
    "birth_death": "1911 - 1989",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người thân là liệt sĩ hy sinh anh dũng bảo vệ quê hương",
    "photo": "assets/images/mothers/photo_071.jpg"
  },
  {
    "stt": 10,
    "name": "PHAN THỊ CỰ",
    "title": "Truy tặng",
    "birth_death": "1906 - 1982",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ hy sinh trong thời kỳ kháng chiến chống thực dân Pháp",
    "photo": "assets/images/mothers/photo_092.jpg"
  },
  {
    "stt": 11,
    "name": "NGUYỄN THỊ CƯNG",
    "title": "Truy tặng",
    "birth_death": "1916 - 1995",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người thân là liệt sĩ hy sinh trong sự nghiệp giải phóng dân tộc",
    "photo": "assets/images/mothers/photo_100.jpg"
  },
  {
    "stt": 12,
    "name": "QUẢNG THỊ DẬU",
    "title": "Truy tặng",
    "birth_death": "1910 - 1988",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người thân là liệt sĩ hy sinh trên chiến trường miền Tây Nam Bộ",
    "photo": "assets/images/mothers/photo_109.jpg"
  },
  {
    "stt": 13,
    "name": "NGUYỄN THỊ ĐÁNG",
    "title": "Truy tặng",
    "birth_death": "1913 - 1993",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có chồng và con là liệt sĩ kiên cường bám trụ đánh giặc",
    "photo": "assets/images/mothers/photo_115.jpg"
  },
  {
    "stt": 14,
    "name": "TRẦN THỊ ĐÁNG",
    "title": "Truy tặng",
    "birth_death": "1909 - 1987",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ cống hiến trọn đời cho cách mạng",
    "photo": "assets/images/mothers/photo_129.jpg"
  },
  {
    "stt": 15,
    "name": "LÊ THỊ ĐIỂM",
    "title": "Truy tặng",
    "birth_death": "1917 - 1994",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người con anh dũng hy sinh vì nền độc lập tự do",
    "photo": "assets/images/mothers/photo_132.jpg"
  },
  {
    "stt": 16,
    "name": "NGUYỄN THỊ ĐIỂM",
    "title": "Truy tặng",
    "birth_death": "1915 - 1997",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người con là liệt sĩ tham gia lực lượng vũ trang địa phương",
    "photo": "assets/images/mothers/photo_011.jpg"
  },
  {
    "stt": 17,
    "name": "TRẦN THỊ ĐÔI",
    "title": "Truy tặng",
    "birth_death": "1912 - 1990",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người thân là liệt sĩ hy sinh trong chiến đấu bảo vệ Tổ quốc",
    "photo": "assets/images/mothers/photo_012.jpg"
  },
  {
    "stt": 18,
    "name": "PHẠM THỊ ĐỐI",
    "title": "Truy tặng",
    "birth_death": "1907 - 1984",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có chồng và con là liệt sĩ trung kiên với Đảng và cách mạng",
    "photo": "assets/images/mothers/photo_013.jpg"
  },
  {
    "stt": 19,
    "name": "TRẦN THỊ GIANG",
    "title": "Truy tặng",
    "birth_death": "1919 - 2003",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người con là liệt sĩ hy sinh trên mặt trận Tây Nam",
    "photo": "assets/images/mothers/photo_014.jpg"
  },
  {
    "stt": 20,
    "name": "NGUYỄN THỊ GIỎI",
    "title": "Truy tặng",
    "birth_death": "1914 - 1991",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người con là liệt sĩ hy sinh anh dũng trong cuộc kháng chiến",
    "photo": "assets/images/mothers/photo_016.jpg"
  },
  {
    "stt": 21,
    "name": "PHẠM THỊ HAI",
    "title": "Truy tặng",
    "birth_death": "1911 - 1986",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ tham gia du kích địa phương và bộ đội chủ lực",
    "photo": "assets/images/mothers/photo_018.jpg"
  },
  {
    "stt": 22,
    "name": "NGUYỄN THỊ HẠNH",
    "title": "Truy tặng",
    "birth_death": "1918 - 2002",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ hy sinh trong chiến dịch Tổng tiến công và nổi dậy",
    "photo": "assets/images/mothers/photo_019.jpg"
  },
  {
    "stt": 23,
    "name": "NGUYỄN THỊ HIẾN",
    "title": "Truy tặng",
    "birth_death": "1913 - 1995",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có chồng và con là liệt sĩ kiên trung hy sinh vì độc lập dân tộc",
    "photo": "assets/images/mothers/photo_020.jpg"
  },
  {
    "stt": 24,
    "name": "PHAN THỊ HIỂN",
    "title": "Truy tặng",
    "birth_death": "1909 - 1983",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người con là liệt sĩ anh dũng chiến đấu tại chiến trường miền Tây",
    "photo": "assets/images/mothers/photo_024.jpg"
  },
  {
    "stt": 25,
    "name": "TRẦN THỊ HOA",
    "title": "Truy tặng",
    "birth_death": "1915 - 1999",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ hy sinh kiên cường trong kháng chiến chống Mỹ",
    "photo": "assets/images/mothers/photo_025.jpg"
  },
  {
    "stt": 26,
    "name": "TRẦN THỊ HỚN",
    "title": "Truy tặng",
    "birth_death": "1910 - 1988",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người con là liệt sĩ tham gia cách mạng từ những ngày đầu",
    "photo": "assets/images/mothers/photo_027.jpg"
  },
  {
    "stt": 27,
    "name": "NGUYỄN THỊ HUỆ",
    "title": "Truy tặng",
    "birth_death": "1916 - 1994",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có chồng và con là liệt sĩ một lòng son sắt đi theo tiếng gọi của Đảng",
    "photo": "assets/images/mothers/photo_028.jpg"
  },
  {
    "stt": 28,
    "name": "NGUYỄN THỊ HUI",
    "title": "Truy tặng",
    "birth_death": "1912 - 1989",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ hy sinh anh dũng trên chiến trường Ô Môn",
    "photo": "assets/images/mothers/photo_031.jpg"
  },
  {
    "stt": 29,
    "name": "TRƯƠNG THỊ HƯƠNG",
    "title": "Truy tặng",
    "birth_death": "1908 - 1981",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người thân là liệt sĩ hy sinh vì độc lập tự do của Tổ quốc",
    "photo": "assets/images/mothers/photo_033.jpg"
  },
  {
    "stt": 30,
    "name": "NGUYỄN THỊ HƯỜNG",
    "title": "Truy tặng",
    "birth_death": "1917 - 1996",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ cống hiến tuổi xuân cho sự nghiệp cách mạng",
    "photo": "assets/images/mothers/photo_035.jpg"
  },
  {
    "stt": 31,
    "name": "TRẦN THỊ KIM",
    "title": "Truy tặng",
    "birth_death": "1914 - 1992",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có chồng và con là liệt sĩ anh dũng hy sinh bảo vệ quê hương",
    "photo": "assets/images/mothers/photo_036.jpg"
  },
  {
    "stt": 32,
    "name": "NGUYỄN THỊ LÂU",
    "title": "Truy tặng",
    "birth_death": "1911 - 1987",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ tham gia bộ đội giải phóng miền Nam",
    "photo": "assets/images/mothers/photo_038.jpg"
  },
  {
    "stt": 33,
    "name": "NGUYỄN THỊ MƯỜI",
    "title": "Truy tặng",
    "birth_death": "1919 - 2005",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người thân là liệt sĩ kiên cường giữ vững địa bàn căn cứ",
    "photo": "assets/images/mothers/photo_040.jpg"
  },
  {
    "stt": 34,
    "name": "HUỲNH THỊ NAY",
    "title": "Truy tặng",
    "birth_death": "1905 - 1980",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ hy sinh trong cuộc kháng chiến vệ quốc",
    "photo": "assets/images/mothers/photo_043.jpg"
  },
  {
    "stt": 35,
    "name": "LÊ THỊ NĂM",
    "title": "Truy tặng",
    "birth_death": "1915 - 1993",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có chồng và con là liệt sĩ hy sinh trọn đời vì non sông liền một dải",
    "photo": "assets/images/mothers/photo_044.jpg"
  },
  {
    "stt": 36,
    "name": "TRẦN THỊ NHÌ",
    "title": "Truy tặng",
    "birth_death": "1913 - 1991",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ hy sinh trên vành đai lửa Ô Môn",
    "photo": "assets/images/mothers/photo_045.jpg"
  },
  {
    "stt": 37,
    "name": "BÙI THỊ NHỊ",
    "title": "Truy tặng",
    "birth_death": "1910 - 1985",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người thân là liệt sĩ một lòng trung kiên với Đảng",
    "photo": "assets/images/mothers/photo_046.jpg"
  },
  {
    "stt": 38,
    "name": "TỔNG THỊ PHẬN",
    "title": "Truy tặng",
    "birth_death": "1916 - 1998",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ anh dũng ngã xuống vì bình yên quê mẹ",
    "photo": "assets/images/mothers/photo_049.jpg"
  },
  {
    "stt": 39,
    "name": "NGUYỄN THỊ SÁU",
    "title": "Truy tặng",
    "birth_death": "1912 - 1990",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có chồng và con là liệt sĩ kiên trung bất khuất",
    "photo": "assets/images/mothers/photo_051.jpg"
  },
  {
    "stt": 40,
    "name": "NGUYỄN THỊ TẢO",
    "title": "Truy tặng",
    "birth_death": "1908 - 1983",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ hy sinh trong cuộc kháng chiến chống Mỹ cứu nước",
    "photo": "assets/images/mothers/photo_052.jpg"
  },
  {
    "stt": 41,
    "name": "VÕ THỊ THÊU",
    "title": "Truy tặng",
    "birth_death": "1918 - 2004",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người thân là liệt sĩ hy sinh oanh liệt trên đất Tây Đô",
    "photo": "assets/images/mothers/photo_053.jpg"
  },
  {
    "stt": 42,
    "name": "NGUYỄN THỊ THỨ",
    "title": "Truy tặng",
    "birth_death": "1914 - 1992",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ anh dũng chiến đấu bảo vệ quê hương",
    "photo": "assets/images/mothers/photo_054.jpg"
  },
  {
    "stt": 43,
    "name": "LÊ THỊ TIẾNG",
    "title": "Truy tặng",
    "birth_death": "1911 - 1986",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người con là liệt sĩ hy sinh vì độc lập dân tộc",
    "photo": "assets/images/mothers/photo_055.jpg"
  },
  {
    "stt": 44,
    "name": "NGUYỄN THỊ TÔI",
    "title": "Truy tặng",
    "birth_death": "1917 - 1999",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có chồng và con là liệt sĩ một lòng sắc son với cách mạng",
    "photo": "assets/images/mothers/photo_057.jpg"
  },
  {
    "stt": 45,
    "name": "LÊ THỊ TỐT",
    "title": "Truy tặng",
    "birth_death": "1913 - 1994",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ hy sinh trong chiến đấu giữ đất giữ làng",
    "photo": "assets/images/mothers/photo_059.jpg"
  },
  {
    "stt": 46,
    "name": "TRẦN THỊ TRẦM",
    "title": "Truy tặng",
    "birth_death": "1910 - 1987",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người thân là liệt sĩ dũng cảm kiên cường",
    "photo": "assets/images/mothers/photo_060.jpg"
  },
  {
    "stt": 47,
    "name": "NGUYỄN THỊ TRƯỢNG",
    "title": "Truy tặng",
    "birth_death": "1915 - 1995",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ cống hiến cuộc đời cho ngày toàn thắng",
    "photo": "assets/images/mothers/photo_061.jpg"
  },
  {
    "stt": 48,
    "name": "DƯƠNG THỊ TỨ",
    "title": "Truy tặng",
    "birth_death": "1909 - 1982",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người con là liệt sĩ hy sinh trên chiến trường sông nước miền Tây",
    "photo": "assets/images/mothers/photo_062.jpg"
  },
  {
    "stt": 49,
    "name": "NGUYỄN THỊ TƯƠI",
    "title": "Truy tặng",
    "birth_death": "1916 - 2001",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có chồng và con là liệt sĩ hy sinh vì độc lập tự do của Tổ quốc",
    "photo": "assets/images/mothers/photo_063.jpg"
  },
  {
    "stt": 50,
    "name": "LÊ THỊ XINH",
    "title": "Truy tặng",
    "birth_death": "1912 - 1989",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 con là liệt sĩ kiên trung bảo vệ ngọn cờ cách mạng",
    "photo": "assets/images/mothers/photo_064.jpg"
  },
  {
    "stt": 51,
    "name": "TRẦN THỊ XIẾU",
    "title": "Truy tặng",
    "birth_death": "1918 - 2006",
    "hometown": "Phường Phước Thới, quận Ô Môn, TP. Cần Thơ",
    "relatives": "Có 2 người thân là liệt sĩ hy sinh trọn đời cho quê hương Phước Thới",
    "photo": "assets/images/mothers/photo_065.jpg"
  }
];
