GÓI PWA OFFLINE - VBA SAFEVIEW

Bản 2026-06-03-03

Chức năng chính:
- Đọc/sửa/xuất mã VBA offline.
- Xem Sheet Excel, Word, PowerPoint offline.
- Tab Kiểm tra file: phân tích tĩnh dấu hiệu nguy hại, không chạy macro.
- Nút Ẩn điều khiển và Ẩn thanh bên để nhường khung hiển thị nội dung.
- Cài PWA và kiểm tra cập nhật thủ công qua Service Worker.

Chạy PWA:
1) Giải nén toàn bộ gói.
2) Mở terminal tại thư mục gói.
3) Chạy: python -m http.server 8080
4) Mở: http://localhost:8080/

Mở trực tiếp index.html bằng file:// vẫn dùng được phần đọc/xem/sửa, nhưng Service Worker/PWA/kiểm tra cập nhật cần http://localhost hoặc HTTPS.


Bản 2026-06-03-05:
- Chuyển tiêu đề, mô tả, nút Cài PWA và Kiểm tra cập nhật vào thanh bên trái.
- Bỏ phần đầu trang để vùng xem chính có thêm chiều cao.
- Khi ẩn thanh bên, vùng xem chính vẫn mở rộng toàn màn hình như bản trước.


Bản 2026-06-03-06: thêm tab Xem Text/Script, đọc .txt/.csv/.vbs/.vbe/.bat/.cmd/.ps1/.reg/.js offline, giải mã tĩnh VBE/Base64/Hex/URL/HTML entities/PowerShell EncodedCommand và xuất ZIP các bản giải mã.


CẬP NHẬT 2026.06.03-pwa-08-desktop-mobile
- Sửa lỗi giao diện PWA trên điện thoại tự chuyển sang bố cục mobile khác máy tính.
- Thêm nút "Giao diện Mobile/Giao diện PC" ở thanh bên để đổi nhanh.
- Mặc định trên màn hình nhỏ/PWA dùng bố cục PC: thanh trái + vùng xem phải như desktop, có thể cuộn ngang/phóng to.
- Tăng CACHE_NAME của Service Worker để điện thoại nhận bản mới khi bấm Kiểm tra cập nhật.
