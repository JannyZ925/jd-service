import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
    @ApiProperty()
    user: CreateUserDto;

    @ApiProperty()
    goodsId: Number;
}


export class CartItem {
    @ApiProperty()
    goodsId: number;

    @ApiProperty()
    goodsName: string;

    @ApiProperty()
    goodsPrice: number;

    @ApiProperty()
    goodsSmallLogo: string;

    @ApiProperty()
    goodsCount: number;

    @ApiProperty()
    goodsState: boolean;
}


export class AddToCartDto {
    @ApiProperty()
    user: CreateUserDto;
    
    @ApiProperty()
    goods: CartItem
}
