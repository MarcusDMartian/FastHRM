import { create } from 'zustand';

export interface LeaveRequest {
    id: number;
    type: string;
    start: string;
    end: string;
    days: number;
    status: string;
    reason: string;
}

interface LeaveState {
    leaveRequests: LeaveRequest[];
    addLeaveRequest: (request: LeaveRequest) => void;
    updateLeaveStatus: (id: number, status: string) => void;
}

export const useLeaveStore = create<LeaveState>((set) => ({
    leaveRequests: [
        { id: 1, type: 'Nghỉ phép năm', start: '2026-02-10', end: '2026-02-12', days: 3, status: 'Đã duyệt', reason: 'Nghỉ gia đình' },
        { id: 2, type: 'Nghỉ ốm', start: '2026-01-15', end: '2026-01-15', days: 1, status: 'Đã duyệt', reason: 'Bị sốt' },
        { id: 3, type: 'Nghỉ phép năm', start: '2026-03-05', end: '2026-03-05', days: 1, status: 'Đang chờ', reason: 'Việc cá nhân' },
    ],
    addLeaveRequest: (request) =>
        set((state) => ({ leaveRequests: [request, ...state.leaveRequests] })),
    updateLeaveStatus: (id, status) =>
        set((state) => ({
            leaveRequests: state.leaveRequests.map((req) =>
                req.id === id ? { ...req, status } : req
            ),
        })),
}));
