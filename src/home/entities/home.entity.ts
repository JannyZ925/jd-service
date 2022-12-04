import { ApiProperty } from '@nestjs/swagger';

export class Menu {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  icon: string;

  @ApiProperty()
  link: string;
}

export class Banner {
  @ApiProperty()
  id: string;

  @ApiProperty()
  imgUrl: string;
}

export class Floor {
  @ApiProperty()
  id: string;

  @ApiProperty()
  layoutType: 1 | 2;

  @ApiProperty()
  icon: string;

  @ApiProperty()
  link: string;
}

export class GetHomeResponse {
  @ApiProperty()
  menus: Menu[];

  @ApiProperty()
  banners: Banner[];

  @ApiProperty()
  floors: Floor[];

  @ApiProperty()
  refresh: 0 | 1;
}
