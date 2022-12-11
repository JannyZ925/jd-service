import { Injectable } from '@nestjs/common';

@Injectable()
export class GoodsService {
  findAll() {
    return {
      list: [
        {
          id: '1202tuwef',
          imgUrl: '',
          price: '',
          goodsName: '',
          goodsDetail: '',
        },
      ],
    };
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
