import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchComponent } from '../match/match.component';
import { MatchData } from '../match-data';

@Component({
  selector: 'app-confederation-qualification',
  imports: [MatchComponent],
  template: `

    <h1> {{confederationName}} qualification of {{year}} </h1>
    <hr>
    <p>
      confederation-qualification works!
    </p>
    <app-match [homeTeam]="this.exMatch.homeTeam" [awayTeam]="this.exMatch.awayTeam" [homeAndAway]="this.exMatch.homeAndAway" [game1Result]="this.exMatch.game1Result" [game2Result]="this.exMatch.game2Result"/>
  `,
  styles: ``
})
export class ConfederationQualificationComponent {

  route : ActivatedRoute = inject(ActivatedRoute);
  @Input() confederationName! : string;
  @Input() year! : Number;
  exMatch : MatchData;

  constructor() {
    this.year = Number(this.route.snapshot.params['year']);
    this.confederationName = this.route.snapshot.params['confederation'];

    // building a toy match fro testing
    this.exMatch = {homeTeam : "Brazil", awayTeam : "Italy", homeAndAway : true, game1Result : [4, 0], game2Result: [0,1]};
  }
}
