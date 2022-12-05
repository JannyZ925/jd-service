import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { GetAddressListResponse } from './entities/address.entity';

@ApiTags('收货地址')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @ApiOperation({ summary: '获取收货地址列表' })
  @ApiOkResponse({
    description: '收货地址列表',
    type: GetAddressListResponse,
  })
  @Get()
  findAll() {
    return this.addressService.findAll();
  }
}
