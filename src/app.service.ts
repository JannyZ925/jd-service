import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBanners(): Record<string, unknown> {
    return {
      code: 200,
      data: {
        banners: [
          {
            id: '2hgowdso',
            url: 'https://www.baidu.com',
          },
        ],
      },
    };
  }

  getGoodsDetail() {
    return {
      id: '9892ygwehfsjdo',
      mainPic: '',
      name: '格力电风扇 GF0913',
    }
  }
}
