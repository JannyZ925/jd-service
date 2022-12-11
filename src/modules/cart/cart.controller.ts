import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { GetCartResponse } from './entities/cart.entity';

@ApiTags('购物车')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({
    summary: '获取购物车列表',
  })
  @ApiOkResponse({
    description: '购物车列表',
    type: GetCartResponse,
  })
  @Get()
  findAll() {
    return this.cartService.findAll();
  }
}
