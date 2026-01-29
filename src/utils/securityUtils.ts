import { User } from '../store/authStore';
import { Employee, Department } from '../types/employee';

/**
 * Lọc danh sách nhân viên dựa trên vai trò và phòng ban của người dùng hiện tại
 */
export const filterEmployees = (user: User | null, employees: Employee[]): Employee[] => {
    if (!user) return [];

    // Admin và HR Manager thấy tất cả
    if (user.role === 'SUPER_ADMIN' || user.role === 'HR_MANAGER') {
        return employees;
    }

    // Trainer thấy nhân viên trong phòng ban của mình (để đánh giá)
    if (user.role === 'TRAINER') {
        return employees.filter(emp => emp.department === user.department);
    }

    // Nhân viên thông thường chỉ thấy chính mình trong danh sách chi tiết (nhưng có thể thấy Directory cơ bản)
    // Trong demo này, chúng ta cho phép thấy Directory nhưng ẩn thông tin nhạy cảm ở bước sau
    return employees;
};

/**
 * Kiểm tra xem người dùng có quyền xem thông tin nhạy cảm (lương, sđt) của một nhân viên không
 */
export const canViewSensitiveInfo = (user: User | null, employee: Employee): boolean => {
    if (!user) return false;
    if (user.role === 'SUPER_ADMIN' || user.role === 'HR_MANAGER') return true;

    // Cá nhân tự xem thông tin của mình
    if (user.email === employee.email) return true;

    return false;
};

/**
 * Lọc dữ liệu lương (Payroll)
 */
export const filterPayrollData = (user: User | null, payrollData: any[]): any[] => {
    if (!user) return [];
    if (user.role === 'SUPER_ADMIN' || user.role === 'HR_MANAGER') return payrollData;

    // Nhân viên chỉ thấy phiếu lương của chính mình
    return payrollData.filter(p => p.email === user.email);
};

/**
 * Lọc yêu cầu nghỉ phép
 */
export const filterLeaveRequests = (user: User | null, requests: any[]): any[] => {
    if (!user) return [];
    if (user.role === 'SUPER_ADMIN' || user.role === 'HR_MANAGER') return requests;

    // Quản lý/Trainer thấy yêu cầu của phòng ban (nếu mở rộng thêm logic)
    // Hiện tại: Nhân viên chỉ thấy của mình
    return requests.filter(r => r.userId === user.id || r.email === user.email);
};
