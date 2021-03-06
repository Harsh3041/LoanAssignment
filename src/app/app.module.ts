import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BusinessLoanComponent } from './business-loan/business-loan.component';
import { PersonalLoanComponentComponent } from './personal-loan-component/personal-loan-component.component';
import { HouseLoanComponentComponent } from './house-loan-component/house-loan-component.component';
import { DefaultcomponentComponent } from './defaultcomponent/defaultcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessLoanComponent,
    PersonalLoanComponentComponent,
    HouseLoanComponentComponent,
    DefaultcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
