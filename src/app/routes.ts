import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TournamentOverviewComponent } from './tournament-overview/tournament-overview.component';
import { ConfederationQualificationComponent } from './confederation-qualification/confederation-qualification.component';

const routeConfig: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: ':year/:confederation',
      component: ConfederationQualificationComponent,
      title: 'XXXX qualification',
    },
    {
      path: ':year',
      component: TournamentOverviewComponent,
      title: 'XXXX qualification',
    },
    
  ];
  export default routeConfig;