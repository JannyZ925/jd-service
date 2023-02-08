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
    let res = {
      user: {},
      message: ''
    }
    userArray.forEach(item => {
      if (item.phone === user.phone) {
        // 用户存在则判断密码是否正确
        flag = true;
        if (item.password !== user.password) {
          res.message = '密码错误！';
        }
        else {
          res.message = '登录成功！';
          res.user = item;
        }
      }
    });
    // 用户不存在则将其加入用户数据中
    if (!flag) {
      userArray.push(user);
      this.store.put(`user.json`, userArray);
      res.message = '登录成功！';
      res.user = user;
    }
    return res;
  }

  // 收藏商品
  async storeUpGoods({ user, goodsId }) {
    const userData = await this.store.get(`user.json`);
    const userArray = JSON.parse(userData.res.data.toString());
    const goodsData = await this.store.get(`goods/goodsList.json`);
    const goodsArray = JSON.parse(goodsData.res.data.toString());
    let goods;
    let result;
    // 找到当前商品
    goodsArray.forEach((item) => {
      if (item.goodsId === Number(goodsId)) {
        goods = item;
      }
    });
    userArray.forEach((item) => {
      // 将当前商品信息加入用户的商品收藏数组
      if (item.phone === user.phone) {
        if (item.hasOwnProperty('storedGoods')) {
          item.storedGoods.unshift(goods);
          result = item;
        } else {
          item.storedGoods = [goods];
          result = item;
        }
      }
    });
    // 更新oss数据
    this.store.put(`user.json`, userArray);
    return result;
  }

  // 取消收藏商品
  async cancelStoreUpGoods({ user, goodsId }) {
    const userData = await this.store.get(`user.json`);
    const userArray = JSON.parse(userData.res.data.toString());
    let result;
    userArray.forEach((userItem, index) => {
      // 将当前商品信息从用户的商品收藏数组中删除
      if (userItem.phone === user.phone) {
        userItem.storedGoods.forEach((goodsItem, index) => {
          if (goodsItem.goodsId === Number(goodsId)) {
            userItem.storedGoods.splice(index, 1);
            result = userItem;
          }
        });
      }
    });
    this.store.put(`user.json`, userArray);
    return result;
  }


  // 添加浏览记录（足迹）
  async addLookedGoods({ user, goodsId }) {
    const userData = await this.store.get(`user.json`);
    const userArray = JSON.parse(userData.res.data.toString());
    const goodsData = await this.store.get(`goods/goodsList.json`);
    const goodsArray = JSON.parse(goodsData.res.data.toString());
    let goods;
    let result;
    // 找到当前商品
    goodsArray.forEach((item) => {
      if (item.goodsId === Number(goodsId)) {
        goods = item;
      }
    });
    userArray.forEach((userItem) => {
      if (userItem.phone === user.phone) {
        if (userItem.hasOwnProperty('lookedGoods')) {
          userItem.lookedGoods.forEach((goodsItem, index) => {
            if(goodsItem.goodsId === Number(goodsId)) {
              userItem.lookedGoods.splice(index, 1);
            }
          });
          userItem.lookedGoods.unshift(goods);
          result = userItem;
        } else {
          userItem.lookedGoods = [goods];
          result = userItem;
        }
      }
    });
    this.store.put(`user.json`, userArray);
    return result;
  }


  // 加入购物车
  async addToCart({ user, goods }) {
    const userData = await this.store.get(`user.json`);
    const userArray = JSON.parse(userData.res.data.toString());
    let result;
    userArray.forEach((userItem) => {
      if (userItem.phone === user.phone) {
        if (userItem.hasOwnProperty('cart')) {
          userItem.cart.forEach((cartItem, index) => {
            if(cartItem.goodsId === Number(goods.goodsId)) {
              goods.goodsCount = cartItem.goodsCount + 1;
              userItem.cart.splice(index, 1);
            }
          });
          userItem.cart.unshift(goods);
          result = userItem;
        } else {
          userItem.cart = [goods];
          result = userItem;
        }
      }
    });
    this.store.put(`user.json`, userArray);
    return result;
  }


  // 修改购物车中商品数量
  async updateGoodsCountInCart({ user, goods }) {
    const userData = await this.store.get(`user.json`);
    const userArray = JSON.parse(userData.res.data.toString());
    let result;
    userArray.forEach((userItem) => {
      if (userItem.phone === user.phone) {
          userItem.cart.forEach((cartItem, index) => {
            if(cartItem.goodsId === Number(goods.goodsId)) {
              cartItem.goodsCount = goods.goodsCount
            }
          });
          result = userItem;
      }
    });
    this.store.put(`user.json`, userArray);
    return result;
  }


  // 修改购物车中商品状态
  async updateGoodsStateInCart({ user, goods }) {
    const userData = await this.store.get(`user.json`);
    const userArray = JSON.parse(userData.res.data.toString());
    let result;
    userArray.forEach((userItem) => {
      if (userItem.phone === user.phone) {
        userItem.cart.forEach((cartItem, index) => {
          if(cartItem.goodsId === Number(goods.goodsId)) {
            cartItem.goodsState = goods.goodsState;
          }
        });
        result = userItem
      }
    });
    this.store.put(`user.json`, userArray);
    return result;
  }


  // 修改购物车中商品的全选状态
  async updateAllGoodsStateInCart({ user, isAllChecked}) {
    const userData = await this.store.get(`user.json`);
    const userArray = JSON.parse(userData.res.data.toString());
    let result;
    userArray.forEach((userItem) => {
      if (userItem.phone === user.phone) {
        userItem.cart.forEach(cartItem => {
          cartItem.goodsState = !isAllChecked
        });
        result = userItem;
      }
    });
    this.store.put(`user.json`, userArray);
    return result;
  }


  // 修改用户的收货地址
  async updateShippingAddress({ user, address }) {
    const userData = await this.store.get(`user.json`);
    const userArray = JSON.parse(userData.res.data.toString());
    let result;
    userArray.forEach((userItem) => {
      if (userItem.phone === user.phone) {
        userItem.shippingAddress = address
        result = userItem;
      }
    });
    this.store.put(`user.json`, userArray);
    return result;
  }


  // 修改用户的账户余额
  async updateSurplus({ user, money }) {
    const userData = await this.store.get(`user.json`);
    const userArray = JSON.parse(userData.res.data.toString());
    let result;
    userArray.forEach((userItem) => {
      if (userItem.phone === user.phone) {
        if(userItem.surplus === null || userItem.surplus === undefined) {
          userItem.surplus = 0
        }        
        userItem.surplus += Number(money)
        result = userItem;
      }
    });
    this.store.put(`user.json`, userArray);
    return result;
  }


  // 添加订单
  async addOrder({ user, order }) {
    const userData = await this.store.get(`user.json`);
    const userArray = JSON.parse(userData.res.data.toString());
    let result;
    userArray.forEach((userItem) => {
      if (userItem.phone === user.phone) {
        if (userItem.hasOwnProperty('orders')) {
          userItem.orders.unshift(order);
          userItem.surplus -= order.totalPrice;
          result = userItem;
        } else {
          userItem.orders = [order];
          result = userItem;
        }
      }
    });
    this.store.put(`user.json`, userArray);
    return result;
  }
}
