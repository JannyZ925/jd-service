import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './goods/goods.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { AddressModule } from './address/address.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GoodsModule, CartModule, OrderModule, AddressModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
