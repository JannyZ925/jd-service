import { Module } from '@nestjs/common';
import { GoodsModule } from './modules/goods/goods.module';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';
import { AddressModule } from './modules/address/address.module';
import { UserModule } from './modules/user/user.module';
import { HomeModule } from './modules/home/home.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    GoodsModule,
    CartModule,
    OrderModule,
    AddressModule,
    UserModule,
    HomeModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class EntryModule {}
