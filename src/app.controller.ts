import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';

interface BannerQuery {
  heihei: string;
}

@ApiTags('应用')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({ summary: '获取 banner 列表' })
  @Get('/banners')
  getBanners(@Query() BannerQuery): Record<string, unknown> {
    return this.appService.getBanners();
  }

  @ApiQuery({
    name: 'id',
    type: String,
  })
  @ApiOperation({ summary: '获取 banner 详情' })
  @Get('/banner/:id')
  getBanner(@Query('id') id): Record<string, unknown> {
    return this.appService.getBanners();
  }

  @ApiParam({
    name: 'id',
    type: String,
    description: '商品唯一标识'
  })
  @ApiOperation({ summary: '获取商品详情' })
  @Get('/goods/:id')
  getGoodsDetail(): Record<string, unknown> {
    return this.appService.getGoodsDetail();
  }
}
