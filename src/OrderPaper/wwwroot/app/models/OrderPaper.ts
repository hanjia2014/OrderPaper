import { Status } from './constants';
import { MotionSection } from './Section';

export class OrderPaper {
    FrontPage: boolean;
    Include: boolean;
    OrderType: string;
    Details: string;
    Speeches: string;
    Sections: Array<MotionSection>;
}