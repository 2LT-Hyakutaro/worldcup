import { MatchData } from "./match-data";

export interface QualificationRoundDetails {

    numberOfGroups : Number;
    teamsIn : Number;
    teamsOut: Number;
    groups : Group[];
}

export interface Group {
    groupName : string;
    teams : string[];
}

export interface RoundRobinGroup extends Group {
    matches : MatchData[];
}

export interface KnockoutGroup extends Group {

    // the knockout tree is an array of arrays of Matches organized as follows
    // the outer collection has as many elements as there are knockout rounds (final, semifinal, etc...)
    // each element of the outer array is an array of MatchData, with as many elements as matches in that knockout stage (1 for final, 2 for semifinal etc..)
    matches : MatchData[][];
}