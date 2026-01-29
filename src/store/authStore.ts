import { create } from 'zustand';

export type UserRole = 'SUPER_ADMIN' | 'HR_MANAGER' | 'TRAINER' | 'EMPLOYEE';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    department: string;
    departmentId: string;
    avatar: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, role: UserRole) => void;
    logout: () => void;
    canAccess: (moduleKey: string) => boolean;
}

const STORAGE_KEY = 'fast-hrm-auth';

// Define the permissions matrix
const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
    SUPER_ADMIN: [
        'dashboard', 'employees', 'recruitment', 'onboarding', 'leave',
        'attendance', 'payroll', 'performance', 'training', 'offboarding', 'settings', 'my_payroll'
    ],
    HR_MANAGER: [
        'dashboard', 'employees', 'recruitment', 'onboarding', 'leave',
        'attendance', 'payroll', 'performance', 'training', 'offboarding', 'my_payroll'
    ],
    TRAINER: [
        'dashboard', 'employees', 'onboarding', 'performance', 'training', 'my_payroll'
    ],
    EMPLOYEE: [
        'dashboard', 'onboarding', 'leave', 'attendance', 'my_payroll', 'training', 'offboarding'
    ]
};

const getInitialUser = (): User | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
};

export const useAuthStore = create<AuthState>((set, get) => ({
    user: getInitialUser(),
    isAuthenticated: !!getInitialUser(),
    login: (email, role) => {
        let name = 'Quản trị viên';
        let department = 'Ban Giám đốc';
        let departmentId = 'ALL';
        let avatar = 'https://i.pravatar.cc/150?u=admin';

        if (role === 'HR_MANAGER') {
            name = 'Lưu Thị Hồng';
            department = 'Phòng Nhân sự';
            departmentId = 'HR';
            avatar = 'https://i.pravatar.cc/150?u=hr';
        } else if (role === 'TRAINER') {
            name = 'Trần Văn Huấn';
            department = 'Trung tâm Đào tạo';
            departmentId = 'TRAIN';
            avatar = 'https://i.pravatar.cc/150?u=trainer';
        } else if (role === 'EMPLOYEE') {
            name = 'Nguyễn Công Tứ';
            department = 'Phòng Kinh doanh';
            departmentId = 'SALES';
            avatar = 'https://i.pravatar.cc/150?u=sales';
        }

        const newUser: User = {
            id: role.toLowerCase(),
            name,
            email,
            role,
            department,
            departmentId,
            avatar,
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
        set({ user: newUser, isAuthenticated: true });
    },
    logout: () => {
        localStorage.removeItem(STORAGE_KEY);
        set({ user: null, isAuthenticated: false });
    },
    canAccess: (moduleKey) => {
        const user = get().user;
        if (!user) return false;
        return ROLE_PERMISSIONS[user.role]?.includes(moduleKey) || false;
    },
}));
