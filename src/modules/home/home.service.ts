import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services/base.service';

@Injectable()
export class HomeService extends BaseService {

  async getBannerList() {
    const result = await this.store.get(`home/bannerList.json`);
    const data = JSON.parse(result.res.data.toString());
    return data;
  }

  async getMenuList() {
    const result = await this.store.get(`home/menuList.json`);
    const data = JSON.parse(result.res.data.toString());
    return data;
  }

  async getFloorList() {
    const result = await this.store.get(`home/floorList.json`);
    const data = JSON.parse(result.res.data.toString());
    return data;
  }
}
