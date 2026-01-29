# Quản lý Phân quyền (Settings)

Đây là module quan trọng nhất dành riêng cho **Super Admin** để cấu hình và giám sát luồng truy cập dữ liệu trong toàn hệ thống Fast HRM.

## Ma trận Phân quyền (RBAC Matrix)

Trong giao diện Cấu hình, Admin có thể kiểm soát quyền truy cập của mỗi vai trò đối với từng module:

| Chức năng | Super Admin | HR Manager | Trainer | Employee |
| :--- | :---: | :---: | :---: | :---: |
| Bảng điều khiển | ✓ | ✓ | ✓ | ✓ |
| Hồ sơ 360° | ✓ | ✓ | ✓ | - |
| Quản lý Lương | ✓ | ✓ | - | - |
| Phiếu lương của tôi | ✓ | ✓ | ✓ | ✓ |
| Cấu hình hệ thống | ✓ | - | - | - |

## Cách điều chỉnh quyền
1. Vào trang **Quản lý Phân quyền**.
2. Tìm module cần cấu hình trong bảng Ma trận.
3. Sử dụng Nút gạt (**Switch**) để Bật/Tắt quyền truy cập cho vai trò tương ứng.

## Danh sách Người dùng & Vai trò
Phần dưới của trang hiển thị toàn bộ tài khoản trong hệ thống. Admin có thể thay đổi vai trò (Role) của bất kỳ nhân viên nào (Ví dụ: Chuyển một nhân viên lên làm Quản lý phòng ban).

> [!CAUTION]
> Quyền **Super Admin** là quyền cao nhất và không thể tự tắt module **Cấu hình hệ thống** của chính mình để tránh tình trạng "khóa chết" hệ thống.
