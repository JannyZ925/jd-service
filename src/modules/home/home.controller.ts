import { Controller, Get, Put, Query, Body, Post } from '@nestjs/common';
import { HomeService } from './home.service';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Banner, Menu, Floor, GetHomeResponse } from './entities/home.entity';

@ApiTags('首页')
@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @ApiOperation({ summary: '获取首页轮播图数据' })
  @ApiOkResponse({
    description: '获取首页轮播图数据',
    type: Banner
  })
  @Get('/bannerList')
  getBannerList() {
    return this.homeService.getBannerList();
  }

  @ApiOperation({ summary: '获取首页分类导航数据' })
  @ApiOkResponse({
    description: '获取首页分类导航数据',
    type: Menu
  })
  @Get('/menuList')
  getMenuList() {
    return this.homeService.getMenuList();
  }

  @ApiOperation({ summary: '获取首页瀑布流数据' })
  @ApiOkResponse({
    description: '获取首页瀑布流数据',
    type: Floor
  })
  @Get('/floorList')
  getFloorList() {
    return this.homeService.getFloorList();
  }
}
