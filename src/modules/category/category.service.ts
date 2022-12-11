import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const superagent = require('superagent');

@Injectable()
export class CategoryService {
  async findAll() {
    const res = await superagent.get(
      'https://lexmin.oss-cn-hangzhou.aliyuncs.com/apis/service-data/category.json',
    );
    const data = res.body;
    return data;
  }
}
