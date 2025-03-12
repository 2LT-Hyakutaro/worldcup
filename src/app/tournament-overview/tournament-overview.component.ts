import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tournament-overview',
  imports: [ RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './tournament-overview.component.html',
  styleUrl: './tournament-overview.component.css'
})
export class TournamentOverviewComponent implements OnInit
{
  route : ActivatedRoute = inject(ActivatedRoute);
  tournamentYear = 0;

  
  constructor() {
    this.tournamentYear = Number(this.route.snapshot.params['year']);
  }

  
  ngOnInit() {

  // this is to update tournament year (and load the correct data) when a link from the nav is clicked
   this.route.paramMap.subscribe(
    (params) => this.tournamentYear = Number(params.get('year'))
  );

  // we will also want to load different data based on tournament year
  }
}

