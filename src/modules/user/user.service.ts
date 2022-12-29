import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services/base.service';

@Injectable()
export class UserService extends BaseService {

  // 用户登录
  async userLogin(user) {
    const data = await this.store.get(`user.json`);
    const userArray = JSON.parse(data.res.data.toString());
    // 标记用户是否存在
    let flag = false;
    // 返回的信息
    let message = ""
    userArray.forEach(item => {
      if (item.phone === user.phone) {
        // 用户存在则判断密码是否正确
        flag = true;
        if(item.password !== user.password) message = "密码错误！"
        else message = "登录成功！"
      }
    });
    // 用户不存在则将其加入用户数据中
    if (!flag) {
      userArray.push(user);
      this.store.put(`user.json`, userArray)
      message = "登录成功！"
    }
    return message;
  }

  findOne(id: number) {
    return {
      id,
      collectedStoreCount: 14,
      collectedGoodsCount: 54,
      followingGoods: 71,
      footPrint: 1095,
    };
  }
}
