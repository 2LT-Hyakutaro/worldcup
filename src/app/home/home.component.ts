import { Component, inject } from '@angular/core';
import { QualificationComponent } from '../qualification/qualification.component';
import { QualificationData } from '../interfaces/qualification-data';
import { NgFor } from '@angular/common';
import { FetchQualificationDataService } from '../fetch-qualification-data.service';

@Component({
  selector: 'app-home',
  imports: [QualificationComponent, NgFor],
  template: `
    <p> This will be the splash page. </p>
    <app-qualification
    *ngFor="let qualData of qualificationDataList"
    [qualificationData] = "qualData"></app-qualification>
  `,
  styles: ``
})
export class HomeComponent {
  qualificationDataList: QualificationData[] = [];
  fetchDataService = inject(FetchQualificationDataService);

  constructor() {
    this.qualificationDataList = this.fetchDataService.getAllQualificationData();
  }
}
