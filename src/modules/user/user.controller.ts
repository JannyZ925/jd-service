import { Controller, Get, Query, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOkResponse, ApiOperation, ApiTags, ApiQuery, ApiBody } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UpdateUserDto, AddToCartDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';


@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '用户登录' })
  @ApiBody({
    type: CreateUserDto,
    description: '用户信息',
  })
  @ApiOkResponse({
    description: '响应信息',
    type: String,
  })
  @Post('/login')
  userLogin(@Body() user: CreateUserDto) {    
    return this.userService.userLogin(user);
  }


  @ApiOperation({ summary: '收藏商品' })
  @ApiBody({
    type: UpdateUserDto,
    description: '用户和商品信息',
  })
  @ApiOkResponse({
    description: '响应信息',
    type: String,
  })
  @Put('/store')
  storeUpGoods(@Body() userInfo: UpdateUserDto) {
    return this.userService.storeUpGoods(userInfo);
  }


  @ApiOperation({ summary: '取消收藏商品' })
  @ApiBody({
    type: UpdateUserDto,
    description: '用户和商品信息',
  })
  @ApiOkResponse({
    description: '响应信息',
    type: String,
  })
  @Delete('/cancelStore')
  cancelStoreUpGoods(@Body() userInfo: UpdateUserDto) {
    return this.userService.cancelStoreUpGoods(userInfo);
  }


  @ApiOperation({ summary: '添加浏览记录' })
  @ApiBody({
    type: UpdateUserDto,
    description: '用户和商品信息',
  })
  @ApiOkResponse({
    description: '响应信息',
    type: String,
  })
  @Put('/addLooked')
  addLookedGoods(@Body() userInfo: UpdateUserDto) {
    return this.userService.addLookedGoods(userInfo);
  }


  @ApiOperation({ summary: '添加商品到购物车' })
  @ApiBody({
    type: UpdateUserDto,
    description: '用户和商品信息',
  })
  @ApiOkResponse({
    description: '响应信息',
    type: String,
  })
  @Put('/addToCart')
  addToCart(@Body() userInfo: AddToCartDto) {
    return this.userService.addToCart(userInfo);
  }


  @ApiOperation({ summary: '获取用户详情' })
  @ApiOkResponse({
    description: '用户详情',
    type: User,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
