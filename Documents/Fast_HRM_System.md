# HỆ THỐNG QUẢN LÝ NHÂN SỰ (HRM)

**Báo Cáo Chi Tiết Định Nghĩa Tính Năng**

**Ngày Chuẩn Bị:** Tháng 1 năm 2026
**Phiên Bản:** 1.0
**Trạng Thái:** Sẵn Sàng Triển Khai

---

## TÓM TẮT ĐIỀU HÀNH

Báo cáo này định nghĩa chi tiết các tính năng, mô-đun, và kiến trúc cho hệ thống Quản Lý Nhân Sự (HRM) toàn diện dành cho FastYear. Hệ thống này sẽ quản lý toàn bộ vòng đời nhân viên - từ lúc tuyển dụng, onboarding, phát triển sự nghiệp, quản lý hiệu suất, cho đến offboarding.

### Mục Tiêu Chính

1. **Tự động hóa 80%** quy trình HR hiện tại (giảm từ Excel/giấy tờ)
2. **Tuân thủ 100%** luật lao động Việt Nam (lương tối thiểu, BHXH, BHYT, HĐ)
3. **Cải thiện thời gian onboarding** từ 3 tuần xuống 5 ngày
4. **Giảm 30%** dòng nhân viên không mong muốn (turnover)
5. **Cung cấp dữ liệu real-time** cho quản lý (dashboard, báo cáo)
6. **Hỗ trợ đầy đủ** cho đội sân (tài xế, kho hàng) qua mobile app

### Khuyến Nghị Nền Tảng

- **Zoho People** - Chi phí thấp, mobile tốt, tuân thủ Việt Nam
- **Quy mô:** 250-300 nhân viên lúc bắt đầu, khả năng mở rộng 500+
- **Timeline:** 12-16 tuần triển khai

---

## I. VÒNG ĐỜI NHÂN VIÊN

### 1.1 Bảy Giai Đoạn Chính

| Giai Đoạn | Thời Gian | Mục Tiêu | KPI Chính |
|----------|----------|---------|----------|
| Tuyển Dụng & Lựa Chọn | 1-2 tuần | Tìm ứng cử viên, đánh giá, ra lời mời | Thời gian tuyển dụng, Tỷ lệ chuyển đổi |
| Onboarding & Định Hướng | 1-2 tuần | Chuẩn bị nhân viên, tích hợp văn hóa | Hoàn thành checklist, Đánh giá onboarding |
| Ramp-up & Tích Hợp | 3 tháng | Xây dựng kỹ năng, hiểu vai trò | Đánh giá 30/60/90 ngày, Năng suất |
| Phát Triển Liên Tục | Năm 1+ | Xây dựng kỹ năng, lập kế hoạch sự nghiệp | Tham gia đào tạo %, Skill advancement |
| Quản Lý Hiệu Suất | Hàng quý/năm | Đánh giá hiệu suất, phản hồi | Hoàn thành appraisals, Phân phối xếp hạng |
| Chuyển Đổi Vai Trò | Khi cần | Nâng cao, chuyển nhượng, phát triển sự nghiệp | Internal fill rate, Retention rate |
| Offboarding & Exit | 2-4 tuần | Chuyển giao kiến thức, khôi phục tài sản | Hoàn thành checklist, Knowledge transfer |

### 1.2 Lợi Ích Của HRM Được Cấu Trúc Tốt

- **↓ 30%** trong dòng chảy (turnover) không mong muốn
- **↑ 50%** tốc độ onboarding (3 tuần → 5 ngày)
- **↑ 25%** hiệu suất (do rõ ràng về mục tiêu và phản hồi)
- **↓ 40%** chi phí tuyển dụng (do giữ lại tốt hơn)
- **↓ 60%** thời gian quản lý (do tự động hóa)

---

## II. CÁC MÔ-ĐUN HRM CHI TIẾT

### MÔ-ĐUN 1: QUẢN LÝ CƠ SỞ DỮ LIỆU NHÂN VIÊN & HỒNG SƠ

**Mục Tiêu:** Cung cấp một "Hồ Sơ 360°" của mỗi nhân viên

#### Tính Năng Chính

**A. Hồng Sơ Nhân Viên Toàn Diện**
- Thông tin cá nhân (Tên, Ngày sinh, Địa chỉ, SĐT, Email, Ảnh)
- Thông tin việc làm (ID, Vị trí, Bộ phận, Trực thuộc, Ngày bắt đầu)
- Thông tin tài chính (TK ngân hàng, CMND, MST)
- Thông tin pháp lý (Loại HĐ, Ngày ký, Ngày kết thúc, Điều khoản)

**B. Lịch Sử Công Việc**
- Lịch sử vị trí (vai trò trước, ngày chuyển, lý do)
- Lịch sử bộ phận (chuyển vị trí, tạm thời giao)
- Mức lương (lịch sử tăng lương, điều chỉnh)
- Tiến thăng & Hợp đồng (ngày hiệu lực, số tiền)

**C. Tài Liệu & Tệp Phụ Lục**
- Hợp đồng lao động (bản scan, kiểm tra hết hạn tự động)
- Chứng chỉ & Bằng cấp (ngành, ngày hết hạn)
- Quy trình tuyển dụng (CV, thư, phỏng vấn)
- Các tài liệu khác (BHXH, bảo mật, NDA)

**D. Kỷ Lục Kỷ Luật & Khen Thưởng**
- Cảnh báo/Kỷ luật (mục, ngày, lý do, tác dụng)
- Khen Thưởng/Công Nhân (bức thư, ngày, giá trị)

**E. Thẻ Gắn & Phân Khúc**
- Phân Loại Nhân Viên (VIP, Nhân tài, Cứng Đầu, Tiêu chuẩn)
- Khía Cạnh Công Việc (Tài xế, Kho Hàng, Quản lý)
- Trạng Thái (Hoạt động, Tạm Dừng, Rời Đi, Tuyển Dụng)

#### Yêu Cầu Kỹ Thuật

- Cơ sở dữ liệu tập trung
- Kiểm soát truy cập dựa trên vai trò (RBAC)
- Tìm kiếm & Lọc nhanh
- Lịch sử thay đổi được ghi lại
- Xuất dữ liệu (Excel, PDF, CSV)

---

### MÔ-ĐUN 2: TUYỂN DỤNG & THEO DÕI ỨNG CỬ VIÊN (ATS)

**Mục Tiêu:** Tự động hóa quy trình tuyển dụng, giảm thời gian từ 30 ngày xuống 15 ngày

#### Tính Năng Chính

**A. Quản Lý Công Việc & Đăng Tin**
- Mẫu công việc (Mô tả, Yêu cầu, Trách nhiệm, Lương)
- Quy trình tuyển dụng tùy chỉnh
- Đăng trên nhiều trang (LinkedIn, Indeed, CareerLink, Việc làm.vn)
- Hỗ trợ tiếng Việt
- Hết hạn công việc tự động (sau 30 ngày)

**B. Theo Dõi Ứng Cử Viên (ATS)**
- Đường ống trực quan (Kéo/Thả để cập nhật giai đoạn)
- Nhập CV tự động (phân tích lạm dụng)
- Tìm kiếm ứng cử viên (từ khóa, kỹ năng, vị trí)
- Đánh giá ứng cử viên (1-5 điểm)
- Bộ sưu tập tài năng (lưu ứng cử viên tốt)

**C. Lập Lịch Phỏng Vấn**
- Gửi email mời phỏng vấn tự động
- Xác nhận từ ứng cử viên
- Nhắc nhở phỏng vấn
- Ghi chú phỏng vấn (điểm mạnh, yếu)

**D. Quá Trình Lựa Chọn & Lời Mời**
- Quyết định điều kiện tiên quyết (Kiểm tra lý lịch, Tâm lý)
- Tạo lề lợi (mẫu, mức lương, ngày bắt đầu)
- E-Sign tích hợp
- Chấp nhận lề → Tạo hồng sơ tự động

**E. Phân Tích & Báo Cáo**
- Thời gian tuyển dụng trung bình
- Chi phí trên hire
- Tỷ lệ chuyển đổi từng giai đoạn
- Nguồn tuyển dụng
- Thời gian của các giai đoạn

---

### MÔ-ĐUN 3: ONBOARDING & ĐỊNH HƯỚNG

**Mục Tiêu:** Đảm bảo nhân viên mới sẵn sàng trong 5 ngày, không phải 3 tuần

#### Tính Năng Chính

**A. Pre-Boarding (Trước Ngày Đầu)**
- Thư chào mừng tự động
- Danh sách chuẩn bị (Công ty, IT, Quản lý, Kho hàng)
- Xác nhận hoàn thành
- Thông báo manager khi không hoàn thành

**B. Định Hướng (Tuần 1)**
- Mô-đun video tương tác
- Tờ rơi vị trí cụ thể
- Lịch định hướng sống động
- Ghi chú từng giai đoạn

**C. Gán Mentor/Buddy**
- Ghép đôi tự động
- Quyển Buddy (hướng dẫn)
- Nhắc nhở hàng ngày
- Check-in Buddy (sau 1 tuần)

**D. Cài Đặt Mục Tiêu & Đánh Giá Thử Nghiệm**
- Mục tiêu 30/60/90 ngày
- Đánh giá 30, 60, 90 ngày
- Xác nhận thường trực

**E. Phần Mềm Onboarding**
- Danh sách kiểm tra
- Tự động gửi hoạt động tiếp theo
- Báo cáo tiến độ

---

### MÔ-ĐUN 4: QUẢN LÝ CHẤM CÔNG & THỜI GỜI LÀM VIỆC

**Mục Tiêu:** Theo dõi chính xác giờ làm việc, tự động hóa lương, tuân thủ luật Việt Nam

#### Tính Năng Chính

**A. Chấm Công (Time Attendance)**
- Phương thức chấm công linh hoạt:
  - Máy chấm thẻ (NFC, vân tay, khuôn mặt)
  - Ứng dụng di động (GPS xác nhận)
  - Thủ công (Manager nhập)
  - Tích hợp CRM (chuyển đổi từ giao hàng)
- Chặn chấm công trùng lặp
- Chấm công ngoài giờ (tính giờ tăng)
- Phê duyệt chấm công

**B. Quản Lý Lịch Làm Việc**
- Mẫu ca làm việc (Sáng, Tối, Ban đêm)
- Giao ca làm việc
- Tuân thủ giờ làm việc Việt Nam:
  - 8 giờ/ngày tiêu chuẩn
  - 48 giờ/tuần
  - Đình chỉ 30 phút
  - Giờ kết thúc ≥ giờ bắt đầu + 8 giờ
- Cảnh báo vi phạm

**C. Quản Lý Ngày Làm Thêm (Overtime)**
- Theo dõi giờ làm thêm
- Tính lương làm thêm tự động:
  - Ngày bình thường: 150%
  - Thứ 7: 200%
  - Ngày lễ: 300%
- Phê duyệt làm thêm
- Báo cáo tóm tắt

**D. Tuân Thủ Luật Lao Động Việt Nam**
- Cảnh báo vi phạm giờ làm việc
- Buộc thực hiện giờ nghỉ
- Báo cáo sẵn sàng

---

### MÔ-ĐUN 5: QUẢN LÝ NGHỈ PHÉP & VẮNG MẶT

**Mục Tiêu:** Theo dõi các loại nghỉ phép, tuân thủ luật Việt Nam

#### Tính Năng Chính

**A. Các Loại Nghỉ Phép**
- Phép năm (15 ngày + Thứ 7 = 20 ngày)
- Nghỉ ốm (Giấy phép bệnh)
- Nghỉ hôn nhân (3 ngày)
- Nghỉ tang lễ (3 ngày cha mẹ, 1 ngày anh chị em)
- Nghỉ thai sản (120 ngày)
- Nghỉ không lương
- Làm việc từ nhà

**B. Quản Lý Phép Năm**
- Dành trích hàng tháng (2.5 ngày × 12 = 30 ngày)
- Tích lũy phép (đến 2 ngày vào năm tiếp theo)
- Hoàn lại phép khi rời đi
- Hết hạn phép với cảnh báo
- Đặt lưới ngắm

**C. Yêu Cầu & Phê Duyệt Nghỉ Phép**
- Yêu cầu tự phục vụ
- Quản lý phê duyệt
- Chứng thực (tập tin đính kèm)
- Lịch công ty (tích hợp)
- Thông báo tự động

**D. Báo Cáo & Phân Tích**
- Tóm tắt phép năm
- Báo cáo vắng mặt
- Chi phí vắng mặt
- Cảnh báo vắng mặt không phê duyệt

---

### MÔ-ĐUN 6: QUẢN LÝ LƯƠNG & CHI TRẢ

**Mục Tiêu:** Tính lương chính xác, tuân thủ luật Việt Nam

#### Tính Năng Chính

**A. Cấu Hình Lương Cơ Bản**
- Mức lương tối thiểu (Theo vùng từ 1/1/2026)
  - Vùng 1 (TP.HCM, BD, ĐN): VND 2,340,000/tháng
  - Vùng 2 (Hà Nội, Hải Phòng): VND 2,100,000/tháng
  - Vùng 3: VND 1,860,000/tháng
  - Vùng 4: VND 1,800,000/tháng
- Phụ cấp (Kỹ năng +7%, Nơi làm việc +5%)
- Thưởng (Hiệu suất, Dự án, Năm)
- Khấu trừ (Vay, Tiền cược)

**B. Tính Toán Bảo Hiểm Xã Hội (BHXH)**
- Góp phần Công ty: 19% (Hưu 16% + Bệnh 2% + Thất nghiệp 1%)
- Góp phần Nhân viên: 10% (Hưu 8% + Bệnh 1.5% + Thất nghiệp 0.5%)
- Lương tính BHXH: Min = Vùng, Max = 20x Vùng

**C. Tính Toán Bảo Hiểm Y Tế (BHYT) & Thất Nghiệp (BUI)**
- BHYT: Công ty 3%, Nhân viên 1.5%
- BUI: Công ty 1%, Nhân viên 0.5%

**D. Tính Thuế Thu Nhập Cá Nhân (TNCN)**
- Mức miễn trừ: VND 11,000,000/tháng
- Công thức: (Tổng - 11M) × 5%
- Tự động khấu trừ

**E. Tính Toán Lương Cuối Cùng**
- Lương = Cơ bản + Phụ cấp + Thưởng - Khấu trừ - BHXH - BHYT - BUI - Thuế TNCN
- Tự động tính, không cần công thức

**F. Bảng Lương & Chứng Thực**
- Tạo bảng lương (danh sách)
- Chứng thực (Manager → HR → Kế toán)
- Xuất Excel
- Phiếu lương cá nhân

**G. Thanh Toán Lương**
- Chuyển khoản ngân hàng
- Chứng minh chi trả
- Lịch sử thanh toán

**H. Báo Cáo Tuân Thủ**
- Tóm tắt chi phí lương
- Báo cáo BHXH hàng tháng
- Báo cáo Thuế TNCN hàng năm
- Báo cáo giờ làm việc

---

### MÔ-ĐUN 7: QUẢN LÝ HIỆU SUẤT & ĐÁNH GIÁ

**Mục Tiêu:** Đặt mục tiêu rõ ràng, cung cấp phản hồi, đánh giá khách quan

#### Tính Năng Chính

**A. Đặt Mục Tiêu (Goal Setting)**
- Mục tiêu SMART (Cụ Thể, Đo Được, Đạt Được, Liên Quan, Có Thời Hạn)
- Căn chỉnh mục tiêu (Cá nhân → Nhóm → Công ty)
- Theo dõi tiến độ (hàng tháng)
- Điều chỉnh khi cần

**B. Phản Hồi Liên Tục (Continuous Feedback)**
- Phản hồi tức thời (ghi chú trên app)
- Phản hồi hàng tuần (check-in 15 phút)
- Phản hồi hàng quý
- Công khai công khai (khen thưởng công khai)

**C. Đánh Giá Hiệu Suất (Performance Appraisal)**
- KPI định lượng (con số):
  - Tài xế: Giao/ngày, Tỷ lệ đúng hạn, NPS khách, Tai nạn
  - Kho hàng: Đơn/giờ, Tỷ lệ lỗi
  - Bán hàng: Doanh số, Số hợp đồng, Tỷ lệ chuyển đổi
  - Quản lý: Doanh thu nhóm, Tỷ lệ giữ lại
- KPI định tính (hành vi):
  - Giao tiếp, Cộng tác, Chủ động, Học hỏi
- Hàng năm (đánh giá 360°)
- Tính điểm cuối (Manager 40%, Bạn 30%, Self 30%)

**D. Xếp Hạng Buộc (Forced Ranking)**
- Phân loại: 10% Hành động, 20% Cao, 50% Tiêu chuẩn, 15% Cần cải, 5% Khẩn cấp
- Sử dụng cho quyết định lương/thăng chức

**E. Phỏng Vấn Đánh Giá**
- Thảo luận kết quả
- Xác định nhu cầu phát triển
- Kế hoạch phát triển
- Quyết định lương/thưởng

**F. Theo Dõi Nhân Tài & Kế Thừa**
- Xác định High Potentials
- Lập kế hoạch phát triển
- Kế hoạch kế thừa

#### KPI Cụ Thể cho FastYear

| Vai Trò | KPI | Q1 Target | Q2 Target |
|---------|-----|-----------|-----------|
| Tài Xế Giao | Giao/ngày | 20 | 22 |
| | Tỷ lệ đúng hạn (%) | 85% | 90% |
| | NPS khách (10) | 7.5 | 8.0 |
| | Sự cố | ≤2 | ≤1 |
| Kho Hàng | Đơn/giờ | 25 | 28 |
| | Tỷ lệ lỗi (%) | ≤2% | ≤1% |
| Bán Hàng | Doanh số (tỷ VND) | 1.0 | 1.3 |
| | Số HĐ mới | 10 | 12 |
| | Tỷ lệ thắng (%) | 30% | 35% |
| Quản Lý VO | Doanh thu (tỷ) | 5.0 | 5.5 |
| | Tỷ lệ giữ lại (%) | 85% | 90% |

---

### MÔ-ĐUN 8: ĐÀO TẠO & PHÁT TRIỂN

**Mục Tiêu:** Xác định kỹ năng thiếu, cung cấp đào tạo, phát triển sự nghiệp

#### Tính Năng Chính

**A. Danh Mục Kỹ Năng**
- Kỹ năng theo vai trò
- Cấp độ kỹ năng (Chưa bắt đầu, Sơ cấp, Trung cấp, Nâng cao, Chuyên gia)
- Đánh giá nhân viên
- Xác định kỹ năng cần thiết

**B. Kế Hoạch Phát Triển Cá Nhân (IDP)**
- Xác định kỹ năng thiếu
- Lập kế hoạch (Khóa học, Mentor, Thực hành)
- Theo dõi tiến độ
- Tái đánh giá

**C. Danh Mục Khóa Học & Đào Tạo**
- Khóa bắt buộc (An toàn, Luật, Chính sách)
- Khóa tùy chọn (Lập kế hoạch, Dịch vụ, Quản lý)
- Xếp hàng người chưa hoàn thành
- Giới thiệu dựa trên vai trò

**D. Học Viện Video & Tài Liệu**
- Nội dung video
- Tài liệu PDF
- Kiểm tra sau video

**E. Mentoring & Coaching**
- Ghép cặp Mentor-Mentee
- Lịch check-in
- Ghi chú Mentor
- Đánh giá hiệu quả

**F. Kế Hoạch Sự Nghiệp & Lộ Trình**
- Lộ trình sự nghiệp (Tài xế → Trưởng ca → Giám sát → Quản lý)
- Yêu cầu mỗi cấp độ
- Kế hoạch lộ trình cá nhân

---

### MÔ-ĐUN 9: OFFBOARDING & QUẢN LÝ EXIT

**Mục Tiêu:** Đảm bảo thoát mượt mà, chuyển giao kiến thức

#### Tính Năng Chính

**A. Quá Trình Exit (Exit Process)**
- Báo cáo từ chức/sa thải
- Thông báo bên liên quan
- Phân công người thay thế
- Lịch trình exit

**B. Danh Sách Kiểm Tra Offboarding**
- Chuyên môn (Chuyển giao dự án, Cập nhật tài liệu)
- IT (Vô hiệu hóa email, Lấy lại laptop)
- Công ty (Lấy lại thẻ, Hướng dẫn, Bộ bảo vệ)
- Tài chính (Lương cuối, Hoàn phép, Severance)
- Quy trình (Ký biên bản, Thỏa thuận bí mật)

**C. Chuyển Giao Kiến Thức (Knowledge Transfer)**
- Định danh kỹ năng chính
- Tác vụ chính
- Liên hệ quan trọng
- Tài liệu & quy trình
- Buổi giao hàng (5 ngày)

**D. Phỏng Vấn Exit**
- Câu hỏi chuẩn
- Ghi âm trả lời
- Tính NPS

**E. Tính Lương Cuối Cùng & Severance**
- Lương tháng cuối
- Hoàn trả phép chưa dùng
- Severance (0.5-2x lương dựa trên năm dịch vụ)
- Tính toán tự động
- Thanh toán trước ngày cuối

**F. Bàn Giao Tài Sản**
- Kiểm kê tài sản
- Xác nhận khi nhận
- Tìm kiếm thiệt hại

**G. Duy Trì Quan Hệ Alumni**
- Danh sách cựu nhân viên
- Liên hệ định kỳ
- Mạng Alumni
- Tái tuyển dụng

---

## III. KIẾN TRÚC HỆ THỐNG HRM

### 3.1 Kiến Trúc Lớp

```
Lớp Trình Bày
├─ Web Portal (HR Staff)
└─ Mobile App (Employees)
       ↓
Lớp Ứng Dụng
├─ Recruitment
├─ Onboarding
├─ Performance Management
├─ Payroll Processing
└─ Offboarding
       ↓
Lớp Tích Hợp
├─ CRM (FastYear)
├─ Payroll System
├─ Bank Transfer
├─ Time Clock
├─ Tax Authority
└─ Email/SMS
       ↓
Lớp Dữ Liệu
├─ Employee Database
├─ Payroll Records
├─ Leave Accrual
├─ Performance Data
├─ Training Records
└─ Documents
```

### 3.2 Hợp Tác Với CRM

**Dữ Liệu Chảy Hai Chiều:**
- **CRM → HRM:** Nhân viên mới trong CRM → Nhập HRM
- **HRM → CRM:** KPI mới trong HRM → Cập nhật CRM
- **Thời gian:** Chấm công → Cập nhật CRM

**Ví Dụ Ngày Tài Xế:**
1. 6:00 AM: Chấm công (HRM ghi nhận)
2. 6:15 AM: Gán đơn hàng (CRM)
3. 9:00 AM: Giao hàng xong (CRM cập nhật)
4. 17:00 PM: Chấm công kết thúc (HRM tính lương)
5. Cuối ngày: Tính KPI (CRM cập nhật)

---

## IV. SO SÁNH CÁC NỀN TẢNG HRM

### Khuyến Nghị: Zoho People

#### Lý Do Chọn

1. **Hỗ Trợ Mobile & Offline** - Tài xế cần chấm công từ điện thoại, có mode ngoại tuyến
2. **Giá Cả Cạnh Tranh** - $14-52/người/tháng, rẻ hơn BambooHR
3. **Hệ Sinh Thái Zoho** - Tích hợp liền mạch với Zoho CRM
4. **Tùy Chỉnh Linh Hoạt** - Cho phép tùy chỉnh rộng, tuân thủ Việt Nam
5. **Tiếng Việt** - Giao diện & hỗ trợ tiếng Việt

#### Nhược Điểm & Cách Khắc Phục

| Nhược Điểm | Khắc Phục |
|-----------|----------|
| Hỗ trợ khách chậm | Mua gói Priority support |
| Không có Payroll Việt Nam | Tích hợp phần mềm lương riêng |
| AI yếu | Tập trung vào nhu cầu cốt lõi |

---

## V. LỘ TRÌNH TRIỂN KHAI (12-16 TUẦN)

| Giai Đoạn | Tuần | Hoạt Động | Kết Quả |
|----------|------|----------|--------|
| **Lập Kế Hoạch** | 1-2 | Mục tiêu, Nhóm, Dự toán | Giáo trình dự án |
| **Yêu Cầu** | 3-4 | Phỏng vấn, Quy trình, Yêu cầu | Tài liệu yêu cầu |
| **Chuẩn Bị Dữ Liệu** | 5-6 | Kiểm toán, Làm sạch, Ánh xạ | Dữ liệu sạch |
| **Cấu Hình** | 7-10 | Setup, Tùy chỉnh, Nhập dữ liệu | HRM sẵn sàng |
| **Thử Nghiệm** | 11-12 | Đào tạo nhóm, Kiểm tra | Danh sách vấn đề |
| **Triển Khai** | 13-16 | Đào tạo, Hỗ trợ, Tối ưu | HRM sống động |

---

## VI. CHI PHÍ & ROI

### Chi Phí Triển Khai (Năm 1)

| Mục | Chi Phí |
|-----|---------|
| Phần Mềm Zoho People | $81,000 |
| Triển Khai & Tùy Chỉnh | $15,000-25,000 |
| Dữ Liệu & Di Chuyển | $3,000-5,000 |
| Đào Tạo | $3,000-5,000 |
| Tuân Thủ PDPL | $1,000-2,000 |
| Hỗ Trợ Sau | $3,000-5,000 |
| **Tổng** | **$106,000-122,000** |

### Chi Phí Hàng Năm (Năm 2+)

| Mục | Chi Phí |
|-----|---------|
| Phần Mềm | $81,000 |
| Hỗ Trợ & Bảo Trì | $2,000-3,000 |
| Nâng Cấp & Tùy Chỉnh | $2,000-3,000 |
| **Tổng** | **$85,000-87,000** |

### ROI Năm 1

**Lợi Ích:**
- Tiết kiệm lương (Tự động hóa): USD 7,000
- Giảm Turnover: USD 1,200
- Tăng Hiệu Suất: USD 100,000
- Giảm Chi Phí: USD 300
- **Tổng Lợi Ích: USD 108,500**

**Chi Phí:** USD 106,000-122,000

**Kết Luận:** Hòa vốn hoặc lợi nhỏ trong năm 1; ROI cao từ năm 2+ (do giảm turnover, tăng hiệu suất)

---

## VII. RỦI RO VÀ GIẢM THIỂU

| Rủi Ro | Khả Năng | Tác Động | Giảm Thiểu |
|--------|---------|---------|-----------|
| Chỉ Tiêu Người Dùng Thấp | Cao | Không sử dụng HRM | Đào tạo, Quản lý tuyên truyền |
| Chất Lượng Dữ Liệu | Cao | Lương sai, Báo cáo sai | Quy tắc nhập, Xác thực tự động |
| Vi Phạm PDPL | Trung Bình | Phạt 5% doanh thu | DPO, DPIA, TIA |
| Tích Hợp CRM Thất Bại | Trung Bình | Dữ liệu không đồng bộ | Lập kế hoạch sớm, Kiểm tra API |

---

## VIII. DANH SÁCH KIỂM TRA TUÂN THỦ PDPL/LƯƠNG

### Tuân Thủ Luật Việt Nam

- ☑ Lương Tối Thiểu: Không có nhân viên < lương tối thiểu vùng
- ☑ Hợp Đồng: 100% nhân viên có hợp đồng ký trong 1 tháng
- ☑ BHXH/BHYT: Đăng ký với cơ quan, báo cáo hàng tháng
- ☑ Giờ Làm Việc: Không vượt quá 8h/ngày, 48h/tuần
- ☑ Phép Năm: Dành trích 2.5 ngày/tháng, thanh toán nếu không dùng
- ☑ Severance: Tính toán chính xác dựa trên năm dịch vụ

---

## IX. HỢP ĐỒNG MẪU

### Hợp Đồng Lao Động Xác Định Thời Hạn

```
HỢP ĐỒNG LAO ĐỘNG

Bên A (Công Ty): FastYear VIỆT NAM
Địa Chỉ: [Địa chỉ công ty]

Bên B (Nhân Viên): [Tên]
Địa Chỉ: [Địa chỉ nhân viên]
CMND: [Số]

VĂN BẢN HỢP ĐỒNG:

1. Vị Trí Công Việc: [Chức vụ]
2. Bộ Phận: [Bộ phận]
3. Địa Điểm Làm Việc: [Địa điểm]
4. Ngày Bắt Đầu: [Ngày]
5. Loại Hợp Đồng: Xác Định Thời Hạn 12 tháng
6. Mức Lương: VND [số]
7. Phụ Cấp: [Chi tiết]
8. Làm Việc Thêm: Tuỳ theo nhu cầu công ty
9. BHXH/BHYT: Công ty đăng ký, 100% theo quy định

QUY TẮC:
- Giờ làm việc: 8 giờ/ngày, 48 giờ/tuần
- Phép năm: 15 ngày/năm
- Kỷ luật: Theo quy định công ty
- Chấm dứt: 45 ngày thông báo sau thử việc

KỲ HẠN: 12 tháng (Có thể gia hạn)

Lương lệnh:

Ngày ký: ___________
[Ký tên nhân viên]          [Ký tên Giám đốc]
```

---

## X. DANH SÁCH KIỂM TRA ONBOARDING

```
☐ Pre-Boarding (Trước Ngày Đầu)
  ☐ Gửi email chào mừng
  ☐ Chuẩn bị IT (Email, Laptop, Điện thoại)
  ☐ Chuẩn bị không gian làm việc
  ☐ Gán mentor/buddy
  ☐ Chuẩn bị tài liệu onboarding

☐ Ngày 1
  ☐ Chào mừng & Giới thiệu quản lý
  ☐ Hướng dẫn công ty (Sứ mệnh, Lịch sử, Giá trị)
  ☐ Khám phá cơ sở vật chất & Gặp mặt nhóm
  ☐ Thiết lập tài khoản hệ thống
  ☐ Nhận đầy đủ tài liệu

☐ Tuần 1
  ☐ Đào tạo an toàn lao động
  ☐ Đào tạo hệ thống HR
  ☐ Hiểu quy trình công việc
  ☐ Giao dự án đầu tiên
  ☐ Check-in với mentor

☐ Tháng 1
  ☐ Đánh giá 30 ngày (Manager & Nhân viên)
  ☐ Phản hồi từ quản lý
  ☐ Điều chỉnh mục tiêu nếu cần
  ☐ Xác nhận tiếp tục thử việc

☐ Tháng 2
  ☐ Đánh giá 60 ngày
  ☐ Kiểm tra hiệu suất

☐ Tháng 3
  ☐ Đánh giá 90 ngày
  ☐ Xác nhận thường trực
  ☐ Đặt mục tiêu năm
```

---

## XI. BƯỚC TIẾP THEO (4-6 TUẦN)

**Tuần 1:**
- Thiết lập nhóm lãnh đạo HRM
- Tạo giáo trình dự án chi tiết

**Tuần 2-3:**
- Phỏng vấn bộ phận (HR, Tài xế, Kho hàng, Quản lý)
- Tài liệu quy trình hiện tại

**Tuần 4:**
- Bắt đầu Zoho People thử miễn phí
- Xác thực yêu cầu

**Tuần 5-6:**
- Chuẩn bị kinh phí chính thức
- Chỉ định DPO cho PDPL

---

## KẾT LUẬN

Báo cáo này cung cấp một bản thiết kế chi tiết để xây dựng hệ thống HRM mạnh mẽ, tuân thủ pháp luật và tối ưu hóa hoạt động HR cho FastYear trong 3 năm tới.

**Khuyến nghị chính:**
- Chọn **Zoho People** làm nền tảng
- Bắt đầu triển khai trong **Tháng 2 năm 2026**
- Hoàn thành vào **Tháng 5 năm 2026**
- Tiếp tục cải thiện dựa trên phản hồi người dùng

---

**Phiên Bản:** 1.0
**Ngày Cập Nhật:** Tháng 1 năm 2026
**Tác Giả:** Product & Strategy Team - FastYear