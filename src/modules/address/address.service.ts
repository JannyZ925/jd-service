import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService {
  findAll() {
    return {
      id: 'o2ohewofjsd',
      userName: 'zl',
      mobile: '18782992335',
      address: '广东省深圳市宝安区壹方城3栋',
    };
  }
}
