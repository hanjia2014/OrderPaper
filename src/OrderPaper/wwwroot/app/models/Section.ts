export class SectionBase {
    Sequence: number;
    Type: string;
    Title: string;
    IsGroup: boolean;
    HasLine: boolean;
}

export class MotionSection extends SectionBase {
    Date: Date;
    Summary: string;
    Member: string;
    Speeches: string;
    Motion: string;
}