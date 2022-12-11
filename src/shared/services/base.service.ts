import { Injectable } from '@nestjs/common';
import { OSSClient } from 'src/shared/utils/oss';
import {
  OSS_ACCESS_KEY,
  OSS_ACCESS_KEY_SECRET,
  OSS_BUCKET,
  OSS_REGION,
} from '../constants';

@Injectable()
export class BaseService {
  store: any;

  constructor() {
    const defaultOptions = {
      accessKeyId: OSS_ACCESS_KEY,
      accessKeySecret: OSS_ACCESS_KEY_SECRET,
      bucket: OSS_BUCKET,
      region: OSS_REGION,
    };
    this.store = new OSSClient(defaultOptions);
  }
}
