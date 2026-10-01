/**
 * TRẠM KÝ ỨC - CẤU HÌNH CLOUD FIRESTORE & DỰ PHÒNG LOCALSTORAGE
 * 
 * Hướng dẫn cấu hình Firebase Firestore Miễn Phí (Spark Plan):
 * 1. Truy cập https://console.firebase.google.com và chọn dự án (hoặc tạo dự án mới "tramkyuc")
 * 2. Bật Firestore Database (chế độ Test Mode hoặc cấu hình rules cho phép đọc/ghi)
 * 3. Điền thông tin firebaseConfig vào bên dưới:
 */

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Kiểm tra xem người dùng đã cấu hình Firebase thật hay chưa
const isFirebaseConfigured = () => {
  return FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";
};

// Dữ liệu mẫu lưu bút ban đầu (chuẩn trang nghiêm, ý nghĩa lịch sử)
const INITIAL_GUESTBOOK_ENTRIES = [
  {
    id: "init-1",
    author: "Nguyễn Minh Thắng",
    org: "Bí thư Đoàn Thanh niên Phường Phước Thới",
    content: "Đời đời ghi nhớ công ơn trời biển của các Mẹ Việt Nam Anh hùng! Tuổi trẻ Phước Thới nguyện ra sức phấn đấu, học tập và cống hiến để xứng đáng với sự hy sinh cao cả của các Mẹ và các anh hùng liệt sĩ.",
    createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString()
  },
  {
    id: "init-2",
    author: "Lê Ngọc Trúc",
    org: "Chi đoàn Trường THCS Phước Thới",
    content: "Mỗi nén tâm hương thắp lên là một lời tri ân sâu sắc gửi đến các Mẹ. Những người mẹ anh hùng đã dâng hiến những người con thân yêu nhất cho nền độc lập tự do của non sông Đất Nước.",
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString()
  },
  {
    id: "init-3",
    author: "Trần Hoàng Nam",
    org: "Đoàn viên Chi đoàn Khu vực Thới Hòa",
    content: "Kính cẩn nghiêng mình trước anh linh các Mẹ VNAH Phước Thới. Chúng con mãi mãi tự hào và khắc ghi trong tim ngọn lửa kiên trung, bất khuất của quê hương Ô Môn anh hùng!",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
  }
];

class MemoryStationService {
  constructor() {
    this.useFirebase = isFirebaseConfigured();
    this.candleCount = 1954; // Con số khởi đầu mang ý nghĩa lịch sử (Năm 1954 Chiến thắng Điện Biên Phủ)
    this.listeners = [];
  }

  // Khởi tạo dịch vụ
  async init() {
    if (this.useFirebase && window.firebaseApp) {
      console.log("Đã kết nối Firebase Cloud Firestore thành công.");
      this.initFirestore();
    } else {
      console.log("Đang vận hành chế độ Lưu trữ Cục bộ (LocalStorage Fallback). Điền Firebase Config để đồng bộ đám mây.");
      this.initLocalStorage();
    }
  }

  initLocalStorage() {
    const savedCandles = localStorage.getItem("tramkyuc_candle_count");
    if (savedCandles) {
      this.candleCount = parseInt(savedCandles, 10);
    } else {
      localStorage.setItem("tramkyuc_candle_count", this.candleCount.toString());
    }

    const savedEntries = localStorage.getItem("tramkyuc_guestbook");
    if (!savedEntries) {
      localStorage.setItem("tramkyuc_guestbook", JSON.stringify(INITIAL_GUESTBOOK_ENTRIES));
    }
  }

  // Lấy tổng số nén tâm hương đã thắp
  async getCandleCount() {
    if (this.useFirebase && window.db) {
      try {
        const docRef = window.doc(window.db, "counters", "candles");
        const docSnap = await window.getDoc(docRef);
        if (docSnap.exists()) {
          return docSnap.data().count || this.candleCount;
        }
      } catch (err) {
        console.warn("Lỗi đọc Firestore, chuyển sang LocalStorage:", err);
      }
    }
    const val = localStorage.getItem("tramkyuc_candle_count");
    return val ? parseInt(val, 10) : this.candleCount;
  }

  // Thắp nến tri ân
  async lightCandle() {
    let newCount = this.candleCount + 1;
    if (this.useFirebase && window.db) {
      try {
        const docRef = window.doc(window.db, "counters", "candles");
        await window.setDoc(docRef, { count: window.increment(1) }, { merge: true });
      } catch (err) {
        console.warn("Lỗi ghi Firestore, ghi vào LocalStorage:", err);
      }
    }
    
    const cur = localStorage.getItem("tramkyuc_candle_count");
    newCount = (cur ? parseInt(cur, 10) : this.candleCount) + 1;
    localStorage.setItem("tramkyuc_candle_count", newCount.toString());
    this.candleCount = newCount;
    return newCount;
  }

  // Lấy danh sách sổ lưu bút
  async getGuestbookEntries() {
    if (this.useFirebase && window.db) {
      try {
        const q = window.query(
          window.collection(window.db, "guestbook"),
          window.orderBy("createdAt", "desc"),
          window.limit(40)
        );
        const querySnapshot = await window.getDocs(q);
        const entries = [];
        querySnapshot.forEach((doc) => {
          entries.push({ id: doc.id, ...doc.data() });
        });
        if (entries.length > 0) return entries;
      } catch (err) {
        console.warn("Lỗi đọc lưu bút Firestore:", err);
      }
    }

    const saved = localStorage.getItem("tramkyuc_guestbook");
    return saved ? JSON.parse(saved) : INITIAL_GUESTBOOK_ENTRIES;
  }

  // Gửi một lời lưu bút mới
  async addGuestbookEntry(author, org, content) {
    const newEntry = {
      id: "entry-" + Date.now(),
      author: author.trim(),
      org: org ? org.trim() : "Nhân dân / Đoàn viên",
      content: content.trim(),
      createdAt: new Date().toISOString()
    };

    if (this.useFirebase && window.db) {
      try {
        await window.addDoc(window.collection(window.db, "guestbook"), newEntry);
      } catch (err) {
        console.warn("Lỗi ghi lưu bút Firestore:", err);
      }
    }

    const currentEntries = await this.getGuestbookEntries();
    const updated = [newEntry, ...currentEntries];
    localStorage.setItem("tramkyuc_guestbook", JSON.stringify(updated));
    return updated;
  }
}

// Khởi tạo instance toàn cục
window.memoryService = new MemoryStationService();
