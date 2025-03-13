export interface QualificationRoundDetails {

    numberOfGroups : Number;
    teamsIn : Number;
    teamsOut: Number;
    groups : Group[];
}

interface Group {

    teams : string[];
    matches : string[];
}

interface RoundRobinGroup extends Group {

}
