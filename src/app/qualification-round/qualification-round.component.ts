import { Component, Input } from '@angular/core';
import { QualificationRoundDetails } from '../interfaces/qualification-round-details';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-qualification-round',
  imports: [NgFor],
  templateUrl:'./qualification-round.component.html',
  styles: `
    .flex-container {
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
    align-items: center;
    flex-wrap: wrap;
}
    table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
  `
})
export class QualificationRoundComponent {
  @Input() roundDetails!: QualificationRoundDetails;
}
