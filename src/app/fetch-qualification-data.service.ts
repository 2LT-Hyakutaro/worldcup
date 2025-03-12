import { Injectable } from '@angular/core';
import { QualificationData } from './qualification-data';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FetchQualificationDataService {

  qualificationDataList: QualificationData[] = [
    {
      id: "WORLD1934",
      format: "1934 weird qual format",
      name: '1934 FIFA World Cup Qualification',
      teams: ['Sweden', 'Estonia', 'Lithuania', 'etc.'],
      teamsQualified: ['Sweden', 'Spain', 'Italy', 'etc.'],
      year: 1934,
    },
    {
      id: "UEFA2022",
      format: "UEFA22",
      name: '2022 UEFA Qualification',
      teams: ['Italy', 'Spain', 'etc.'],
      teamsQualified: ['Germany', 'France', 'not Italy'],
      year: 2022,
    },
    {
      id: "UEFA2022",
      format: "UEFA22",
      name: '2018 UEFA Qualification',
      teams: ['Italy', 'Spain', 'etc.'],
      teamsQualified: ['Germany', 'France', 'not Italy'],
      year: 2018,
    },
  ];

  constructor() { }

  getAllQualificationData() : QualificationData[] {
    return this.qualificationDataList;
  }

  getQualificationDataById(id : string) {
    return this.qualificationDataList.find((qualData) => qualData.id === id);
  }
}
