import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  collectedStoreCount: string;

  @ApiProperty()
  collectedGoodsCount: string;

  @ApiProperty()
  followingGoods: string;

  @ApiProperty()
  footPrint: string;
}
