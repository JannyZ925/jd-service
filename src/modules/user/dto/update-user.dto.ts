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


export class UpdateCartDto {
    @ApiProperty()
    user: CreateUserDto;
    
    @ApiProperty()
    goods: CartItem
}

export class updateAllGoodsStateDto {
    @ApiProperty()
    user: CreateUserDto;
    
    @ApiProperty()
    isAllChecked: Boolean
}

export class Address {
    @ApiProperty()
    userName: string;

    @ApiProperty()
    telNumber: string;
    
    @ApiProperty()
    addressStr: string;
}

export class UpdateAddressDto {
    @ApiProperty()
    user: CreateUserDto;
    
    @ApiProperty()
    address: Address;
}


export class UpdateSurplusDto {
    @ApiProperty()
    user: CreateUserDto;
    
    @ApiProperty()
    money: Number;
}
