import { ApiProperty } from '@nestjs/swagger';

export class AddressItem {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  mobile: string;
}

export class GetAddressListResponse {
  list: AddressItem[];
}
