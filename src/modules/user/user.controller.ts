import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOkResponse, ApiOperation, ApiTags, ApiQuery, ApiBody } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';


@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '添加用户' })
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
