import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  /**
   * 联系人
   */
  @ApiProperty({
    description: '联系人',
  })
  name: string;
  /**
   * 联系电话
   */
  @ApiProperty()
  mobile: string;
}
