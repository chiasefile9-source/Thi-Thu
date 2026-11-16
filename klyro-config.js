// klyro-config.js
const KLYRO_CONFIG = {
  brand: {
    name: "Klyro",
    domain: "https://ww.klyro.gt.tc",
    email: "chiasefile9@gmail.com",
    facebook: "https://facebook.com", // Thay bằng link Fanpage Klyro của bạn
    credit: "Thiết kế bởi Klyro"
  },
  
  // Link Web App từ Google Apps Script của bạn
  apiEndpoint: "https://script.google.com/macros/s/AKfycbz_93ounv3q-aEx4jnSK6Qt4CWFwMGzKlqqwT82vKhFQtXqziRr_rK6djw2ZidcYgLL/exec",

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
      price: 25000,
      originalPrice: 35000,
      badge: "Tiết kiệm",
      description: "Phù hợp bài thuyết trình nhóm ngắn, báo cáo môn học cơ bản.",
      features: [
        "Từ 6 - 10 slides chuẩn bố cục, dễ nhìn",
        "Phối màu & font chữ đồng bộ chủ đề",
        "Bàn giao file PowerPoint (.pptx) & PDF",
        "Hỗ trợ chỉnh sửa 1 lần miễn phí",
        "Hoàn thành trong 24h - 36h"
      ]
    },
    {
      id: "pro",
      name: "Gói Chuyên Nghiệp (Pro)",
      price: 49000,
      originalPrice: 70000,
      badge: "Được chọn nhiều nhất",
      popular: true,
      description: "Hiệu ứng chuyển cảnh mượt mà, giúp bài thuyết trình nổi bật.",
      features: [
        "Từ 12 - 18 slides thiết kế sáng tạo",
        "Hiệu ứng Morph & Animation chuyên sâu",
        "Tặng kèm bộ icon & hình ảnh sắc nét",
        "Hỗ trợ chỉnh sửa 3 lần miễn phí",
        "Ưu tiên hoàn thành trong 24h"
      ]
    },
    {
      id: "vip",
      name: "Gói Toàn Diện (VIP)",
      price: 89000,
      originalPrice: 120000,
      badge: "Trọn gói A-Z",
      description: "Dành cho bài dự thi, đồ án lớn cần đầu tư chỉn chu nhất.",
      features: [
        "Từ 20 - 30 slides thiết kế độc bản",
        "Hỗ trợ tóm tắt & biên tập lại nội dung thô",
        "Thiết kế biểu đồ, infographic trực quan",
        "Chỉnh sửa không giới hạn đến khi ưng ý",
        "Bàn giao siêu tốc trong 12h - 24h"
      ]
    }
  ],

  // Danh sách mã giảm giá (Giftcode) kiểm tra nhanh ở Frontend
  giftcodes: {
    "KLYRO5": { discount: 5000, minOrder: 25000, desc: "Giảm 5.000đ cho mọi đơn hàng" },
    "KLYRO10": { discount: 10000, minOrder: 45000, desc: "Giảm 10.000đ cho đơn từ 45k" },
    "KLYRO15": { discount: 15000, minOrder: 80000, desc: "Giảm 15.000đ cho đơn từ 80k" }
  }
};
