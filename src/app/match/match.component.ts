import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-match',
  imports: [NgIf],
  template: `
     <table>
  <tr>
    <td>{{homeTeam}}</td>
    <td>{{game1Result[0]}}</td>
    <td *ngIf="homeAndAway">{{game2Result[0]}}</td>
  </tr>
  <tr>
    <td>{{awayTeam}}</td>
    <td>{{game1Result[1]}}</td>
    <td *ngIf="homeAndAway">{{game2Result[1]}}</td>
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

  @Input() homeTeam! : string;
  @Input() awayTeam! : string;
  @Input() homeAndAway! : boolean;
  @Input() game1Result! : Number[];
  @Input() game2Result : Number[];

  constructor() {
    this.game2Result = [99,99];
  }
}
