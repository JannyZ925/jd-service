import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  findOne(id: number) {
    return {
      id,
      collectedStoreCount: 14,
      collectedGoodsCount: 54,
      followingGoods: 71,
      footPrint: 1095,
    };
  }
}
