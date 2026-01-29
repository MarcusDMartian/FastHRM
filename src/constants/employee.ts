
import { Employee, Department, EmployeeStatus } from '../types';

export const MOCK_EMPLOYEES: Employee[] = [
    {
        id: 'EMP001',
        fullName: 'Nguyễn Văn A',
        role: 'Tài xế Giao nhận',
        department: Department.LOGISTICS,
        status: EmployeeStatus.ACTIVE,
        email: 'nva@247express.vn',
        phone: '0901234567',
        startDate: '2024-01-15',
        avatar: 'https://picsum.photos/seed/emp1/200',
        baseSalary: 12000000,
    },
    {
        id: 'EMP002',
        fullName: 'Trần Thị B',
        role: 'Giám sát Kho',
        department: Department.WAREHOUSE,
        status: EmployeeStatus.ACTIVE,
        email: 'ttb@247express.vn',
        phone: '0907654321',
        startDate: '2023-11-20',
        avatar: 'https://picsum.photos/seed/emp2/200',
        baseSalary: 15000000,
    },
    {
        id: 'EMP003',
        fullName: 'Lê Văn C',
        role: 'Nhân viên Kinh doanh',
        department: Department.SALES,
        status: EmployeeStatus.PROBATION,
        email: 'lvc@247express.vn',
        phone: '0911223344',
        startDate: '2026-01-05',
        avatar: 'https://picsum.photos/seed/emp3/200',
        baseSalary: 10000000,
    },
];
