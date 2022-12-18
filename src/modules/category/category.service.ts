import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services/base.service';

@Injectable()
export class CategoryService extends BaseService{

  async getCategoryList() {
    const result = await this.store.get(`categoryList.json`);
    const data = JSON.parse(result.res.data.toString());
    return data;
  }

}
