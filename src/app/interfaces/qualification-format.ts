// brainstorming phase: write down what you think is necessary to render a confederation qualification on screen
import { QualificationRoundDetails } from "./qualification-round-details";

export interface QualificationFormat {

    numberOfRounds : Number;
    rounds : QualificationRoundDetails[];
    numberOfTeams : Number;
    berths : Number;
    numberOfQualifiedTeams : number;
    teams : string[];
    qualifiedTeams : string[];
}
