import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultantDetailsComponent } from './consultant-details/consultant-details.component';
import { ConsultantDetailComponent } from './consultant-details/consultant-detail/consultant-detail.component';
import { ConsultantDetailListComponent } from './consultant-details/consultant-detail-list/consultant-detail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultantDetailService } from './shared/consultant-detail.service';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CompanymasterComponent } from './Company/companymaster/companymaster.component';
import { CompanymasterlistComponent } from './Company/companymasterlist/companymasterlist.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ExtraComponent } from './extra/extra.component';

export function tokenGetter() {
  return localStorage.getItem('logintoken');
}

@NgModule({
  declarations: [
    AppComponent,
    ConsultantDetailsComponent,
    ConsultantDetailComponent,
    ConsultantDetailListComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    HeaderComponent,
    CompanymasterComponent,
    CompanymasterlistComponent,
    ContactFormComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:44392'],
        blacklistedRoutes: []
      }
    }),
    BrowserAnimationsModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [ConsultantDetailService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
