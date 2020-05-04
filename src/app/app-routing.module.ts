import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ConsultantDetailListComponent } from './consultant-details/consultant-detail-list/consultant-detail-list.component';
import { ConsultantDetailComponent } from './consultant-details/consultant-detail/consultant-detail.component';
import { CompanymasterComponent } from './Company/companymaster/companymaster.component';
import { CompanymasterlistComponent } from './Company/companymasterlist/companymasterlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtraComponent } from './extra/extra.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  // { path: 'blogpost/:id', component: ConsultantDetailComponent },
  { path: 'consultant/add', component: ConsultantDetailComponent },
  { path: 'consultantlist', component: ConsultantDetailListComponent },
  { path: 'consultant/edit/:id', component: ConsultantDetailComponent },
  { path: 'company/add', component: CompanymasterComponent },
  { path: 'companylist', component: CompanymasterlistComponent },
  { path: 'company/edit/:id', component: CompanymasterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'extra', component: ExtraComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '/' }
  // { path: '', component: ConsultantDetailListComponent, pathMatch: 'full' },
  // { path: 'consultant', component: ConsultantDetailComponent },
  // { path: 'consultantlist', component: ConsultantDetailListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
