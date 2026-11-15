/* =====================================================================
   KLYRO — CẤU HÌNH DUY NHẤT
   1) scriptUrl: URL Apps Script (/exec). Đổi ở đây, không cần sửa index.html.
   2) content: thông tin thật hiển thị trên trang. Để trống thì mục đó tự ẩn,
      trang sẽ không hiện chữ giữ chỗ nào.
   ===================================================================== */
window.KLYRO_CONFIG = {
  scriptUrl: 'https://script.google.com/macros/s/AKfycbyYzyTO0CcwaIfmZV1-Vt3pIHlfxll-jsgL6V6PkIIrtxOYgk5L-OHSix3Gt7AXMMzv/exec',
  content: {
    phone: '',     // ví dụ '0901 234 567' -> hiện số + nút "Gọi ngay"
    zalo: '',      // ví dụ 'https://zalo.me/0901234567' -> nút "Nhắn Zalo"
    address: '',   // địa chỉ (nếu có)
    hours: '',     // ví dụ 'Trả lời email trong ngày, 8h–22h'
    story: '',     // 1–2 câu kể vì sao bạn làm Klyro (viết bằng giọng của bạn)
    founder: { name: '', role: '', bio: '', photo: '' },   // photo: 'anh-toi.jpg' (tải ảnh thật lên cùng thư mục)
    reviews: []    // [{ name:'Minh', role:'sinh viên K22', text:'...' }]  chỉ dùng đánh giá thật, đã được khách đồng ý
  }
};
