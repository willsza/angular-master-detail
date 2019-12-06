import { Component } from '@angular/core';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

import { Company } from '../shared/company.model';
import { CompanyService } from './../shared/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent extends BaseResourceListComponent<Company> {

  constructor(private companyService: CompanyService) {
    super(companyService);
  }

}
