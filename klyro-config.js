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

  // Danh sách các gói dịch vụ thiết kế Slide (Đã tối ưu giá trị và thời gian)
  packages: [
    {
      id: "basic",
      name: "Gói Tiêu Chuẩn (Standard)",
      price: 45000,
      originalPrice: 60000,
      badge: "Phổ biến",
      description: "Phù hợp bài thuyết trình nhóm, báo cáo môn học cần sự gọn gàng, nghiêm túc.",
      features: [
        "Từ 10 - 15 slides bố cục chuẩn mực",
        "Phối màu & font chữ đồng bộ chuyên nghiệp",
        "Bàn giao file PowerPoint (.pptx) & PDF",
        "Hỗ trợ chỉnh sửa 2 lần miễn phí",
        "Thời gian giao: 2 ngày (Không nhận gấp)"
      ]
    },
    {
      id: "pro",
      name: "Gói Chuyên Nghiệp (Pro)",
      price: 85000,
      originalPrice: 120000,
      badge: "Khuyên dùng",
      popular: true,
      description: "Đầu tư hình ảnh, hiệu ứng chuyển cảnh mượt mà để ghi điểm tuyệt đối.",
      features: [
        "Từ 15 - 22 slides thiết kế sáng tạo, độc bản",
        "Hiệu ứng Morph & Animation chuyên sâu",
        "Tặng kèm bộ icon & hình ảnh minh họa cao cấp",
        "Hỗ trợ chỉnh sửa 3 lần miễn phí",
        "Thời gian giao: 2 - 3 ngày"
      ]
    },
    {
      id: "vip",
      name: "Gói Đồ Án / Cao Cấp (VIP)",
      price: 139000,
      originalPrice: 180000,
      badge: "Đầu tư chỉn chu",
      description: "Dành cho đồ án tốt nghiệp, bài thuyết trình quan trọng cần chiều sâu nội dung.",
      features: [
        "Từ 25 - 35 slides thiết kế cao cấp A-Z",
        "Hỗ trợ tóm tắt & biên tập lại nội dung thô",
        "Thiết kế biểu đồ, infographic trực quan",
        "Chỉnh sửa không giới hạn đến khi hoàn thiện",
        "Thời gian giao: 3 - 4 ngày"
      ]
    }
  ],

  // Danh sách mã giảm giá (Giftcode)
  giftcodes: {
    "KLYRO10": { discount: 10000, minOrder: 50000, desc: "Giảm 10.000đ cho đơn từ 50k" },
    "KLYRO20": { discount: 20000, minOrder: 100000, desc: "Giảm 20.000đ cho đơn từ 100k" }
  }
};
