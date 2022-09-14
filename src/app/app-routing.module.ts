import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserComponent } from './user/user.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AuthGuard } from './user/auth.guard';
const routes: Routes = [
  { path: '', component:UserComponent},
  { path: 'home',canActivate:[AuthGuard], component: LandingPageComponent,children:[
    { path: '', component:HomeComponent},
  ] },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
