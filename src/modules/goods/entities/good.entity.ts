import { ApiProperty } from '@nestjs/swagger';

export class GoodsDetail {
  @ApiProperty()
  id: string;

  @ApiProperty()
  imgUrl: string;

  @ApiProperty()
  price: string;

  @ApiProperty()
  goodsName: string;

  @ApiProperty()
  goodsDetail: string;
}

export class GetGoodsListResponse {
  @ApiProperty()
  list: GoodsDetail[];

  @ApiProperty()
  total: number;
}
