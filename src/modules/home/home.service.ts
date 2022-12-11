import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services/base.service';

@Injectable()
export class HomeService extends BaseService {
  async findAll(refresh: 0 | 1) {
    const result = await this.store.get(`home.json`);
    const data = JSON.parse(result.res.data.toString());
    data.refresh = refresh;
    return data;
  }

  async updateData(data: any) {
    await this.store.put(`home.json`, data);
    return true;
  }
}
