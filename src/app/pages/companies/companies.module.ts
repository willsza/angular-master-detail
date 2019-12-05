import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';

@NgModule({
  declarations: [CompanyFormComponent, CompanyListComponent],
  imports: [
    SharedModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
