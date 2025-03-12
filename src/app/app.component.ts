import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, NgFor],
  template: `
    <nav>
      <h3> This is the top of page nav </h3>
      <a *ngFor="let tournamentYear of tournamentYearList" [routerLink]="tournamentYear" routerLinkActive="active" ariaCurrentWhenActive="page">
      {{tournamentYear}}
      </a>
      </nav>
      <hr>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';

  tournamentYearList : string[] = ["1930", "1934", "1938", "1950", "1954", "1958", "1962", "1966", "1970", "1974", "1978", "1982", "1986", "1990", 
                                    "1994", "1998", "2002", "2006", "2010", "2014", "2018", "2022", "2026"];
}
