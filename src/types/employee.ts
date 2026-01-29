
export enum EmployeeStatus {
    ACTIVE = 'Đang làm việc',
    PROBATION = 'Thử việc',
    SUSPENDED = 'Tạm hoãn',
    LEFT = 'Đã nghỉ việc'
}

export enum Department {
    LOGISTICS = 'Logistics & Vận chuyển',
    WAREHOUSE = 'Kho bãi',
    SALES = 'Kinh doanh',
    HR = 'Nhân sự',
    FINANCE = 'Tài chính',
    IT = 'Công nghệ thông tin'
}

export interface Employee {
    id: string;
    fullName: string;
    role: string;
    department: Department;
    status: EmployeeStatus;
    email: string;
    phone: string;
    startDate: string;
    avatar: string;
    baseSalary: number;
}
