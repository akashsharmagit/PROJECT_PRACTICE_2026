import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentComponent } from './pages/student/student.component';
import { RegisterComponent } from './pages/register/register.component';
import { CompetitionComponent } from './pages/competition/competition.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
     {
        path:'home',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
      {
        path:'dashboard',
        component:DashboardComponent
    },
      {
        path:'student',
        component:StudentComponent
    },
     {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'competition',
        component:CompetitionComponent
    },
    
    
];
