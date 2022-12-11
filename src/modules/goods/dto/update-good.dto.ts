import { ApiProperty } from '@nestjs/swagger';

export class UpdateGoodsDto {
  @ApiProperty()
  id: number;
}
