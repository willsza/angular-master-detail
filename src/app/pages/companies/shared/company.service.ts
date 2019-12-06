import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

import { Company } from './company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseResourceService<Company> {

  constructor(protected injector: Injector) {
    super('api/companies', injector, Company.fromJson);
  }
}
