import { Controller, Get, Query } from '@nestjs/common';
import { HomeService } from './home.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetHomeResponse } from './entities/home.entity';

@ApiTags('首页')
@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @ApiOperation({ summary: '获取首页瀑布流数据' })
  @ApiOkResponse({
    description: '获取首页瀑布流数据',
    type: GetHomeResponse,
  })
  @Get()
  findAll(@Query('refresh') refresh: 0 | 1) {
    return this.homeService.findAll(refresh);
  }
}
