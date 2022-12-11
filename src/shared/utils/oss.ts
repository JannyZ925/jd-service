// eslint-disable-next-line @typescript-eslint/no-var-requires
const OSS = require('ali-oss');
import { OSS_STORE_PREFIX } from '../constants';

export interface OssProps {
  accessKeyId: string;
  accessKeySecret: string;
  bucket: string;
  region: string;
}

export class OSSClient {
  client: any;

  constructor(ossProps: OssProps) {
    this.client = new OSS(ossProps);
  }

  get(params) {
    return this.client.get(`${OSS_STORE_PREFIX}/${params}`);
  }

  put(path: string, data) {
    const stringifiedData =
      typeof data === 'string' ? data : JSON.stringify(data);
    const fullPath = `${OSS_STORE_PREFIX}/${path}`;
    return this.client.put(fullPath, Buffer.from(stringifiedData));
  }

  list(params) {
    return this.client.list(params);
  }
}
