import { Body, Controller, Get, Put, Param } from '@nestjs/common';
import { GoodsService } from './goods.service';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { GetGoodsListResponse, GoodsDetail } from './entities/good.entity';
import { UpdateGoodsDto } from './dto/update-good.dto';

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

  @ApiOperation({
    summary: '根据商品id和型号id获取指定型号的商品详情',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: '商品id',
  })
  @ApiParam({
    name: 'skuId',
    type: String,
    description: '型号id',
    required: false,
  })
  @ApiOkResponse({
    description: '商品详情',
    type: GoodsDetail,
  })
  @Get(':id/:skuId')
  findGoodsDetail(@Param('id') id: string, @Param('skuId') skuId: string) {
    console.log('id', id);
    console.log('skuId', skuId);
    return this.goodsService.findOne(+id);
  }

  @ApiOperation({ summary: '更新商品数据' })
  @ApiBody({
    description: '商品数据',
    type: UpdateGoodsDto,
  })
  @Put(':id')
  updateGoods(@Body() updateGoodsDto: UpdateGoodsDto) {
    return this.goodsService.findOne(updateGoodsDto.id);
  }
}
