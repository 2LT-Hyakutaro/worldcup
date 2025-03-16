import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchComponent } from '../match/match.component';
import { MatchData } from '../interfaces/match-data';
import { QualificationFormat } from '../interfaces/qualification-format';
import { Group, QualificationRoundDetails, RoundRobinGroup } from '../interfaces/qualification-round-details';
import { NgFor } from '@angular/common';
import { QualificationRoundComponent } from '../qualification-round/qualification-round.component';

@Component({
  selector: 'app-confederation-qualification',
  imports: [NgFor, QualificationRoundComponent],
  templateUrl: './confederation-qualification.component.html',
  styles: ``
})
export class ConfederationQualificationComponent {

  route : ActivatedRoute = inject(ActivatedRoute);
  @Input() confederationName! : string;
  @Input() year! : Number;
  exMatch : MatchData;
  qualificationFormat : QualificationFormat;

  constructor() {
    this.year = Number(this.route.snapshot.params['year']);
    this.confederationName = this.route.snapshot.params['confederation'];

    // building a toy match fro testing
    this.exMatch = {homeTeam : 'Brazil', awayTeam : 'Italy', homeAndAway : true, game1Result : [4, 0], game2Result: [0,1]};

    // more toy data

    let group1 : RoundRobinGroup = {
      groupName : "Group 1",
      matches : [this.exMatch],
      teams : ["Peru", "Bolivia", "Argentina"]
    };

    let group2 : RoundRobinGroup = {
      groupName : "Group 2",
      matches : [this.exMatch],
      teams : ["Brazil", "Paraguay", "Colombia", "Venezuela"]
    };

    let group3 : RoundRobinGroup = {
      groupName : "Group 3",
      matches : [this.exMatch],
      teams : [ "Uruguay", "Chile", "Ecuador"]
    };

    let qualRound : QualificationRoundDetails = {
      numberOfGroups: 3,
      groups : [group1, group2, group3],
      teamsIn : 10,
      teamsOut: 3
    };

    this.qualificationFormat = {
      numberOfRounds: 2, 
      rounds: [qualRound, qualRound],
      numberOfTeams : 10,
      berths : 3,
      numberOfQualifiedTeams : 3,
      qualifiedTeams : ["Peru", "Brazil", "Uruguay"],
      teams : ["Peru", "Bolivia", "Argentina", "Brazil", "Paraguay", "Colombia", "Venezuela", "Uruguay", "Chile", "Ecuador"]
    };
  }
}
