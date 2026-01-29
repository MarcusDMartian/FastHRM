import { create } from 'zustand';
import { Candidate } from '../types/recruitment';
import { MOCK_CANDIDATES } from '../constants/recruitment';

interface RecruitmentState {
    candidates: Candidate[];
    addCandidate: (candidate: Candidate) => void;
    updateCandidateStage: (id: string, newStage: string) => void;
    deleteCandidate: (id: string) => void;
    setCandidates: (candidates: Candidate[]) => void;
}

export const useRecruitmentStore = create<RecruitmentState>((set) => ({
    candidates: MOCK_CANDIDATES,
    addCandidate: (candidate) =>
        set((state) => ({ candidates: [candidate, ...state.candidates] })),
    updateCandidateStage: (id, newStage) =>
        set((state) => ({
            candidates: state.candidates.map((can) =>
                can.id === id ? { ...can, stage: newStage as any } : can
            ),
        })),
    deleteCandidate: (id) =>
        set((state) => ({
            candidates: state.candidates.filter((can) => can.id !== id),
        })),
    setCandidates: (candidates) => set({ candidates }),
}));
