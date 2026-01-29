import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Employee } from '../types/employee';
import { INSURANCE_RATES } from '../constants';

export interface PayrollRecord {
    id: string;
    employeeId: string;
    employeeName: string;
    email: string;
    period: string; // YYYY-MM
    baseSalary: number;
    otPay: number;
    allowances: number;
    empIns: number;
    taxable: number;
    pit: number;
    net: number;
    status: 'Draft' | 'Approved' | 'Paid';
    processedDate?: string;
}

interface PayrollState {
    records: PayrollRecord[];
    generateMonthlyPayroll: (period: string, employees: Employee[]) => void;
    updateRecordStatus: (id: string, status: PayrollRecord['status']) => void;
    getPersonalHistory: (email: string) => PayrollRecord[];
}

export const usePayrollStore = create<PayrollState>()(
    persist(
        (set, get) => ({
            records: [],

            generateMonthlyPayroll: (period, employees) => {
                const existing = get().records.some(r => r.period === period);
                if (existing) return;

                const newRecords: PayrollRecord[] = employees.map(emp => {
                    const base = emp.baseSalary;
                    const otHours = Math.floor(Math.random() * 15);
                    const otPay = otHours * (base / 192) * 1.5;
                    const allowances = 500000;
                    const gross = base + otPay + allowances;

                    const insBase = Math.min(gross, 2340000 * 20);
                    const empIns = insBase * INSURANCE_RATES.EMPLOYEE;
                    const taxable = Math.max(0, gross - empIns - 11000000);
                    const pit = taxable > 0 ? taxable * 0.05 : 0;
                    const net = gross - empIns - pit;

                    return {
                        id: `${emp.id}-${period}`,
                        employeeId: emp.id,
                        employeeName: emp.fullName,
                        email: emp.email,
                        period,
                        baseSalary: base,
                        otPay,
                        allowances,
                        empIns,
                        taxable,
                        pit,
                        net,
                        status: 'Approved',
                        processedDate: new Date().toISOString().split('T')[0]
                    };
                });

                set(state => ({ records: [...state.records, ...newRecords] }));
            },

            updateRecordStatus: (id, status) => {
                set(state => ({
                    records: state.records.map(r => r.id === id ? { ...r, status } : r)
                }));
            },

            getPersonalHistory: (email) => {
                return get().records
                    .filter(r => r.email === email)
                    .sort((a, b) => b.period.localeCompare(a.period));
            }
        }),
        {
            name: 'fast-hrm-payroll'
        }
    )
);
