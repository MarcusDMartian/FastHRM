# Quản lý Lương (Payroll Management)

Module **Lương & Phúc lợi** dành cho bộ phận Quản trị và Nhân sự để thực hiện các nghiệp vụ tính toán lương hàng tháng cho toàn thể công viên.

## Chức năng chính dành cho HR/Admin

### 1. Quản lý Bảng lương theo kỳ
Tại đây, quản trị viên có thể xem danh sách tất cả nhân viên kèm theo số liệu lương chi tiết cho tháng hiện tại hoặc quá khứ.

### 2. Xử lý Lương (Process Payroll)
Hệ thống tự động tổng hợp dữ liệu từ:
* Lương cơ bản trong Hồ sơ nhân sự.
* Dữ liệu chấm công và giờ làm thực tế.
* Các định mức thuế và bảo hiểm theo quy định hiện hành của Việt Nam.

### 3. Duyệt và Thanh toán
* **Duyệt lương**: Sau khi kiểm tra, nhấn **Duyệt tất cả** để chốt số liệu.
* **Xuất file Ngân hàng**: Hỗ trợ xuất dữ liệu sang định dạng Excel/CSV tương thích với các phần mềm ngân hàng để thực hiện chi trả lương hàng loạt.

## Bảo mật và Phân quyền (RBAC)
* **Admin/HR**: Xem toàn bộ dữ liệu công ty.
* **Manager**: Chỉ xem danh sách và thực nhận của nhân viên thuộc phòng ban mình quản lý.
* **Công cụ tuân thủ**: Hệ thống hiển thị Checklist tuân thủ (Mức lương tối thiểu vùng, Giảm trừ gia cảnh 11M) để đảm bảo HR luôn làm đúng luật lao động.

## Lưu ý nghiệp vụ
> [!WARNING]
> Việc thay đổi trạng thái kỳ lương sang **Chốt lương** sẽ khóa toàn bộ dữ liệu để đảm bảo tính nhất quán trước khi chi trả.

---
Để xem giao diện cá nhân nhân viên, vui lòng tham khảo [Phiếu lương của tôi](my-payroll.md).
