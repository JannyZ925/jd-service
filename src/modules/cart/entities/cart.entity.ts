import { ApiProperty } from '@nestjs/swagger';

export class CartItem {
  @ApiProperty()
  id: string;

  @ApiProperty()
  imgUrl: string;

  @ApiProperty()
  goodsName: string;

  @ApiProperty()
  price: string;

  @ApiProperty()
  count: string;
}

export class GetCartResponse {
  @ApiProperty()
  list: CartItem[];
}
