import { ApiProperty } from '@nestjs/swagger';

export class Menu {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  imageUrl: string;
}

export class Banner {
  @ApiProperty()
  goodsId: string;

  @ApiProperty()
  imageUrl: string;
}

export class FloorTitle {
  @ApiProperty()
  name: string;

  @ApiProperty()
  imageUrl: string;
}

export class Product {
  @ApiProperty()
  name: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  imageWidth: string;

  @ApiProperty()
  link: string;
}

export class Floor {
  @ApiProperty()
  floorTitle: FloorTitle;

  @ApiProperty()
  productList: Product[];
}

export class GetHomeResponse {
  @ApiProperty()
  menus: Menu[];

  @ApiProperty()
  banners: Banner[];

  @ApiProperty()
  floors: Floor[];
}
