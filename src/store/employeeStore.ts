import { create } from 'zustand';
import { Employee, EmployeeStatus, Department } from '../types/employee';
import { MOCK_EMPLOYEES } from '../constants/employee';

interface EmployeeState {
    employees: Employee[];
    addEmployee: (employee: Employee) => void;
    updateEmployee: (id: string, updates: Partial<Employee>) => void;
    deleteEmployee: (id: string) => void;
    setEmployees: (employees: Employee[]) => void;
}

export const useEmployeeStore = create<EmployeeState>((set) => ({
    employees: MOCK_EMPLOYEES,
    addEmployee: (employee) =>
        set((state) => ({ employees: [employee, ...state.employees] })),
    updateEmployee: (id, updates) =>
        set((state) => ({
            employees: state.employees.map((emp) =>
                emp.id === id ? { ...emp, ...updates } : emp
            ),
        })),
    deleteEmployee: (id) =>
        set((state) => ({
            employees: state.employees.filter((emp) => emp.id !== id),
        })),
    setEmployees: (employees) => set({ employees }),
}));
