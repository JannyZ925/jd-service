import { Controller, Get, Param } from '@nestjs/common';
import { GoodsService } from './goods.service';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { GetGoodsListResponse, GoodsDetail } from './entities/good.entity';

@ApiTags('商品')
@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @ApiOperation({ summary: '获取商品列表' })
  @ApiOkResponse({
    description: '商品列表',
    type: GetGoodsListResponse,
  })
  @Get()
  findAll() {
    return this.goodsService.findAll();
  }

  @ApiOperation({
    summary: '根据id获取商品详情',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: '商品id',
  })
  @ApiOkResponse({
    description: '商品详情',
    type: GoodsDetail,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodsService.findOne(+id);
  }
}
