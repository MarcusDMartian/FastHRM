# Đăng nhập & Vai trò

Fast HRM sử dụng hệ thống Phân quyền dựa trên vai trò (RBAC) để đảm bảo mỗi người dùng chỉ truy cập vào các module và dữ liệu phù hợp với trách nhiệm của mình.

## Hướng dẫn Đăng nhập
1. Truy cập trang Đăng nhập của ứng dụng.
2. Nhập Email và Mật khẩu.
3. Nhấp **Đăng nhập**.

## Các vai trò người dùng (Roles)
Hệ thống được thiết kế với 4 vai trò chính:

| Vai trò | Phạm vi Quyền hạn |
| :--- | :--- |
| **Super Admin** | Toàn quyền hệ thống, cấu hình phân quyền (Settings). |
| **HR Manager** | Quản lý toàn bộ nghiệp vụ nhân sự, tuyển dụng và bảng lương công ty. |
| **Trainer** | Phụ trách đào tạo và đánh giá hiệu suất nhân viên. |
| **Employee** | Xem lương cá nhân, đăng ký nghỉ phép và chấm công. |

## Bảo mật Thông tin
Dữ liệu nhạy cảm (như lương, số điện thoại cá nhân) được bảo mật theo quy tắc:
* **Cá nhân**: Chỉ thấy dữ liệu của chính mình.
* **Quản lý**: Thấy dữ liệu của team quản lý.
* **HR/Admin**: Thấy dữ liệu toàn công ty.

> [!TIP]
> Nếu bạn không thấy một module nào đó trên Menu, có thể tài khoản của bạn chưa được cấp quyền truy cập. Vui lòng liên hệ Admin để được hỗ trợ.
