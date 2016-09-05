export class Section {
    Sequence: number;
    Type: string;
    Title: string;
    IsGroup: boolean;
    HasLine: boolean;
}

export class MotionSection extends Section {
    Date: Date;
    Summary: string;
    Member: string;
    Speeches: string;
    Motion: string;
    constructor() {
        super();
        this.Type = "Motion";
    }
}

export class BillSection extends Section {
    Number: string;
    Member: string;
    Stage: string;
    IsCurrentSittingWeek: boolean;
    IsFollowingSittingWeek: boolean;
    IsMajorityAmendments: boolean;
    IsExtendedSittingHours: boolean;
    Speeches: string;
    LatestEvent: string;

    constructor() {
        super();
        this.Type = "Bill";
    }
}

export class ReportSection extends Section {
    Shoulder: string;
    Committee: string;
    LatestEvent: string;
    constructor() {
        super();
        this.Type = "Report";
    }
}