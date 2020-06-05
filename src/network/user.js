import {
  request
} from './request'
//登陆(已完成)
export function login(data) {
  return request({
    url: 'login.do',
    method: 'post',
    data: {
      account: data.username,
      password: data.password
    }
  })
}
//获取登陆用户数据
export function getuserdata() {
  return request({
    baseURL: '/json/userdata.json',
    method: 'get'
  })
}