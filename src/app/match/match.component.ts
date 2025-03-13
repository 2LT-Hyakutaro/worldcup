import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatchData } from '../interfaces/match-data';

@Component({
  selector: 'app-match',
  imports: [NgIf],
  template: `
     <table>
  <tr>
    <td>{{matchData.homeTeam}}</td>
    <td>{{matchData.game1Result[0]}}</td>
    <td *ngIf="matchData.homeAndAway">{{matchData.game2Result[0]}}</td>
  </tr>
  <tr>
    <td>{{matchData.awayTeam}}</td>
    <td>{{matchData.game1Result[1]}}</td>
    <td *ngIf="matchData.homeAndAway">{{matchData.game2Result[1]}}</td>
  </tr>
</table> 
  `,
  styles: `
    table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
  `
})
export class MatchComponent {

  @Input() matchData : MatchData;

  constructor() {
    this.matchData = {homeTeam : 'XXX', awayTeam: 'YYY', homeAndAway: false, game1Result: [99,99], game2Result: [99,99]}
  }
}
