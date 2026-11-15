// klyro-config.js
const KLYRO_CONFIG = {
  brand: {
    name: "Klyro",
    domain: "https://ww.klyro.gt.tc",
    email: "chiasefile9@gmail.com",
    facebook: "https://facebook.com", // Thay bằng link Fanpage Klyro của bạn
    credit: "Thiết kế bởi Klyro"
  },
  
  // Link Web App từ Google Apps Script (Mã.gs) của bạn
  apiEndpoint: "THAY_LINK_WEB_APP_GOOGLE_APPS_SCRIPT_CUA_BAN_VAO_DAY",

  // Thông tin nhận thanh toán (Dùng để tạo VietQR tự động)
  payment: {
    bankId: "MB", // Mã ngân hàng (VD: MB, VCB, TCB, ACB, BIDV...)
    accountNo: "0123456789", // Số tài khoản của bạn
    accountName: "NGUYEN VAN A", // Tên chủ tài khoản (viết hoa không dấu)
    template: "compact2"
  },

  // Danh sách các gói dịch vụ thiết kế Slide
  packages: [
    {
      id: "basic",
      name: "Gói Cơ Bản (Basic)",
      price: 35000,
      originalPrice: 50000,
      badge: "Tiết kiệm",
      description: "Phù hợp cho bài thuyết trình nhóm ngắn, báo cáo nhanh.",
      features: [
        "Tối đa 10 - 12 slides chuẩn bố cục",
        "Chỉnh sửa màu sắc & font chữ đồng bộ",
        "Bàn giao file PowerPoint (.pptx) & PDF",
        "Hỗ trợ chỉnh sửa 1 lần miễn phí",
        "Thời gian hoàn thành: 24h - 48h"
      ]
    },
    {
      id: "pro",
      name: "Gói Chuyên Nghiệp (Pro)",
      price: 65000,
      originalPrice: 90000,
      badge: "Phổ biến nhất",
      popular: true,
      description: "Thiết kế sáng tạo, hiệu ứng mượt mà giúp gây ấn tượng mạnh.",
      features: [
        "Tối đa 18 - 22 slides thiết kế độc quyền",
        "Hiệu ứng Morph & Animation chuyên sâu",
        "Tặng kèm bộ icon & hình ảnh chất lượng cao",
        "Hỗ trợ chỉnh sửa 3 lần miễn phí",
        "Thời gian hoàn thành: 24h (Ưu tiên)"
      ]
    },
    {
      id: "premium",
      name: "Gói Toàn Diện (VIP)",
      price: 110000,
      originalPrice: 150000,
      badge: "Trọn gói A-Z",
      description: "Dành cho đồ án, cuộc thi lớn hoặc thuyết trình quan trọng.",
      features: [
        "Không giới hạn số lượng slides (tối đa 35)",
        "Hỗ trợ tóm tắt & biên tập lại nội dung",
        "Thiết kế biểu đồ, infographic trực quan",
        "Hỗ trợ chỉnh sửa không giới hạn đến khi ưng ý",
        "Bàn giao siêu tốc trong 12h - 24h"
      ]
    }
  ],

  // Danh sách mã giảm giá (Giftcode) kiểm tra nhanh ở Frontend
  giftcodes: {
    "KLYRO10": { discount: 10000, minOrder: 30000, desc: "Giảm 10.000đ cho đơn từ 30k" },
    "KLYRO20": { discount: 20000, minOrder: 50000, desc: "Giảm 20.000đ cho đơn từ 50k" },
    "SINHVIEN": { discount: 15000, minOrder: 50000, desc: "Ưu đãi học sinh/sinh viên giảm 15k" }
  }
};
