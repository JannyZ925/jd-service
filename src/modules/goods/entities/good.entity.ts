import { ApiProperty } from '@nestjs/swagger';


export class Pic {
  @ApiProperty()
  picsId: number;

  @ApiProperty()
  goodsId: number;

  @ApiProperty()
  picsBig: string;

  @ApiProperty()
  picsMid: string;

  @ApiProperty()
  picsSmall: string;
}


export class GetGoodsDetailResponse {
  @ApiProperty()
  goodsId: number;

  @ApiProperty()
  goodsName: string;

  @ApiProperty()
  goodsPrice: number;

  @ApiProperty()
  goodsIntroduce: string;

  @ApiProperty()
  goodsCarriage: number;

  @ApiProperty()
  isStored: boolean;

  @ApiProperty()
  pics: Pic[];
}

export class Goods {
  @ApiProperty()
  goodsId: number;

  @ApiProperty()
  catId: number;

  @ApiProperty()
  goodsName: string;

  @ApiProperty()
  goodsPrice: number;

  @ApiProperty()
  goodsSmallLogo: string;

  @ApiProperty()
  isNew: boolean;
}

export class GetGoodsListResponse {
  @ApiProperty()
  list: Goods[];
}
