import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services/base.service';
import { GetGoodsDto } from './dto/get-goods.dto';

@Injectable()
export class GoodsService extends BaseService {

  async getGoodsList(queryObj: GetGoodsDto) {   
    const result = await this.store.get(`goods/goodsList.json`);
    const data = JSON.parse(result.res.data.toString());
    const goodsList = data.filter((item, index) => {
      // 先找出符合条件的商品
      if(Number(queryObj.cid) !== 0) return item.catId === Number(queryObj.cid)
      if(queryObj.keyword !== "") return item.goodsName.indexOf(queryObj.keyword) !== -1
      if(Boolean(queryObj.isNew) === true) return item.isNew === true
    }).filter((item, index) => {
      // 再分页显示
      return index >= (queryObj.pageNum - 1) * queryObj.pageSize && index < queryObj.pageNum * queryObj.pageSize;
    })
    return goodsList;
  }

  findOne(id: number) {
    return {
      id,
      imgUrl: '',
      price: '',
      goodsName: '',
      goodsDetail: '',
    };
  }
}
