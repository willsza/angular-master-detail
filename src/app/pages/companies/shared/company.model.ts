import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Company extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): Company {
    return Object.assign(new Company(), jsonData);
  }
}
