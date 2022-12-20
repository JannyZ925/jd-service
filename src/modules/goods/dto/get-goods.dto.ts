import { ApiProperty } from '@nestjs/swagger';

export class GetGoodsDto {
  @ApiProperty()
  cid: number;
  @ApiProperty()
  keyword: string;
  @ApiProperty()
  isNew: boolean;
  @ApiProperty()
  pageNum: number;
  @ApiProperty()
  pageSize: number;
}
