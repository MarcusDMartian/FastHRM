
export interface Candidate {
    id: string;
    fullName: string;
    position: string;
    stage: 'Applied' | 'Interview' | 'Technical' | 'Offer' | 'Hired' | 'Rejected';
    appliedDate: string;
    score: number;
    avatar?: string;
}
