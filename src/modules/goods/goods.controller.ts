import { Body, Controller, Get, Put, Param, Query } from '@nestjs/common';
import { GoodsService } from './goods.service';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { GetGoodsListResponse, GoodsDetail } from './entities/good.entity';
import { UpdateGoodsDto } from './dto/update-good.dto';

@ApiTags('商品')
@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) { }

  @ApiOperation({ summary: '分页获取商品列表' })
  @ApiQuery({
    name: 'cid',
    type: Number,
    description: '分类id',
    required: false
  })
  @ApiQuery({
    name: 'keyword',
    type: String,
    description: '关键词',
    required: false,
  })
  @ApiQuery({
    name: 'isNew',
    type: Boolean,
    description: '是否为新品',
    required: false,
  })
  @ApiQuery({
    name: 'pageNum',
    type: Number,
    description: '当前页码',
    required: false,
  })
  @ApiQuery({
    name: 'pageSize',
    type: Number,
    description: '每页显示数据条数',
    required: false,
  })
  @ApiOkResponse({
    description: '商品列表',
    type: GetGoodsListResponse,
  })
  @Get()
  getGoodsList(@Query('cid') cid: number=-1,
    @Query('keyword') keyword: string='',
    @Query('isNew') isNew: boolean,
    @Query('pageNum') pageNum: number=1,
    @Query('pageSize') pageSize: number=15) {
    return this.goodsService.getGoodsList({ cid, keyword, isNew, pageNum, pageSize });
  }


  @ApiOperation({
    summary: '根据关键词搜索商品',
  })
  @ApiQuery({
    name: 'keyword',
    type: String,
    description: '关键词',
  })
  @ApiOkResponse({
    description: '商品列表',
    type: GetGoodsListResponse,
  })
  @Get(':keyword')
  getGoodsByKeyword(@Query('keyword') keyword: string) {
    return this.goodsService.getGoodsByKeyword(keyword);
  }



  @ApiOperation({
    summary: '根据id获取商品详情',
  })
  @ApiParam({
    name: 'goodsId',
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
