import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Goods } from '../../goods/entities/good.entity'

export class UpdateUserDto {
    @ApiProperty()
    user: CreateUserDto;

    @ApiProperty()
    goodsId: Number;
}
