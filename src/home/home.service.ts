import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const superagent = require('superagent');

@Injectable()
export class HomeService {
  async findAll(refresh: 0 | 1) {
    const res = await superagent.get(
      'https://lexmin.oss-cn-hangzhou.aliyuncs.com/apis/service-data/home.json',
    );
    const data = res.body;
    data.refresh = refresh;
    return data;
  }
}
