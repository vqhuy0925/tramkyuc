# TRẠM KÝ ỨC - MẸ VIỆT NAM ANH HÙNG PHƯỜNG PHƯỚC THỚI

> **Công trình số hóa lịch sử và đền ơn đáp nghĩa** do Đoàn TNCS Hồ Chí Minh Phường Phước Thới phối hợp thực hiện.  
> Lưu giữ hình ảnh, công trạng và lòng biết ơn của thế hệ trẻ đối với **51 Bà mẹ Việt Nam Anh hùng (VNAH)** của quê hương Phước Thới, Quận Ô Môn, Thành phố Cần Thơ.

---

## 🌟 TÍNH NĂNG NỔI BẬT

1. **Âm nhạc nền trang nghiêm**: Tích hợp bài ca bất hủ *"Huyền thoại Mẹ"* (sáng tác: Trịnh Công Sơn) với nút bật/tắt đĩa than xoay nhẹ và thanh sóng nhạc sinh động.
2. **Không gian dâng hương tri ân (120% Marquee Hero Detail)**:
   - Lư hương đồng cổ kính với làn khói hương uốn lượn bay nhẹ (vẽ qua Canvas thời gian thực).
   - Nút **"Thắp nén tâm hương"** tích hợp âm thanh chuông chùa ngân trầm thanh tịnh (Web Audio API) và hiệu ứng haptic rung nhẹ trên điện thoại.
   - Bộ đếm thời gian thực số lượt thắp nến của nhân dân cả nước.
3. **Danh mục 51 Mẹ VNAH Phước Thới**:
   - Tìm kiếm nhanh tức thì theo tên Mẹ hoặc tên thân nhân là Liệt sĩ.
   - Bộ lọc phân loại: Tất cả, Có ảnh chân dung, Được truy tặng, Được phong tặng.
   - Thẻ hình ảnh chân dung và Bằng Tổ quốc ghi công trang trọng.
4. **Hồ sơ Ký ức chi tiết (Chuẩn Mobile 3-Zone Flexbox)**:
   - Header cố định, nội dung cuộn trơn tru, footer tối ưu vùng an toàn ngón tay cái (`safe-area-inset-bottom` trên iPhone).
   - Tích hợp nút *"Thắp hương dâng riêng Mẹ"*.
5. **Sổ lưu bút tri ân trực tuyến**:
   - Cho phép đoàn viên, học sinh và nhân dân khắp mọi miền gửi lời tri ân sâu sắc.
   - Hỗ trợ đồng bộ đám mây qua **Google Cloud Firestore (Miễn phí 100%)** và tự động có chế độ dự phòng **LocalStorage** chạy ngay tức thì.
6. **Trích dẫn nguồn tư liệu chính xác**:
   - *Nguồn: Sách "Bà mẹ Việt Nam Anh hùng thành phố Cần Thơ Tập II (2013 - 2020)" - Ban Tuyên giáo Thành ủy Cần Thơ; nội dung còn đang được tiếp tục cập nhật.*

---

## 🚀 HƯỚNG DẪN TRIỂN KHAI VERCEL MIỄN PHÍ 100%

### Bước 1: Đẩy mã nguồn lên GitHub
Nếu bạn chưa commit mã nguồn:
```bash
git init
git add .
git commit -m "feat: Xây dựng hoàn chỉnh website Trạm Ký Ức Mẹ VNAH Phước Thới"
git branch -M main
git remote add origin https://github.com/vqhuy0925/tramkyuc.git
git push -u origin main
```

### Bước 2: Deploy lên Vercel
1. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub của bạn.
2. Bấm nút **Add New...** $\rightarrow$ **Project**.
3. Chọn repository **`tramkyuc`** từ danh sách và bấm **Import**.
4. Giữ nguyên mọi cài đặt mặc định (Framework Preset: *Other*) và bấm **Deploy**.
5. Trong vòng 15 giây, website của bạn sẽ hoạt động chính thức tại:
   `https://tramkyuc.vercel.app` (hoặc tên miền riêng bạn muốn gán).

---

## ☁️ HƯỚNG DẪN KẾT NỐI FIREBASE FIRESTORE (MIỄN PHÍ 100%)

Nếu bạn muốn tính năng **Thắp nến** và **Sổ lưu bút** đồng bộ thời gian thực cho mọi người cùng thấy:

1. Truy cập [Firebase Console](https://console.firebase.google.com).
2. Tạo một Project mới (hoặc dùng 1 trong 6 project Firebase có sẵn của bạn).
3. Bấm vào **Build** $\rightarrow$ **Firestore Database** $\rightarrow$ **Create Database** (chọn location `asia-southeast1` ở Singapore để tốc độ nhanh nhất).
4. Vào tab **Rules** của Firestore và thiết lập cho phép đọc/ghi an toàn:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /counters/{document=**} {
      allow read, write: if true;
    }
    match /guestbook/{document=**} {
      allow read, write: if true;
    }
  }
}
```
5. Bấm vào biểu tượng bánh răng **Project Settings** $\rightarrow$ cuộn xuống mục **Your apps** $\rightarrow$ chọn biểu tượng Web (`</>`) để lấy cấu hình `firebaseConfig`.
6. Mở file `js/firebase-config.js` và dán các thông số vào:
```javascript
const FIREBASE_CONFIG = {
  apiKey: "AIzaSy...",
  authDomain: "tramkyuc-xxxx.firebaseapp.com",
  projectId: "tramkyuc-xxxx",
  storageBucket: "tramkyuc-xxxx.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};
```
7. Commit và push lên GitHub, Vercel sẽ tự động cập nhật ngay lập tức!

---

## 💻 CHẠY VÀ KIỂM TRA TRÊN MÁY TÍNH CỦA BẠN (LOCAL)

Bạn chỉ cần chạy lệnh sau trong terminal:
```bash
python3 -m http.server 8080
```
Sau đó mở trình duyệt truy cập: `http://localhost:8080`
