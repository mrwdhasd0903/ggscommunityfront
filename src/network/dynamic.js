import {
  request
} from './request'

//分页查询用户动态
export function findPageByUid(data) {
  return request({
    url: 'dynamic/findPageByUid.do',
    method: 'get',
    params: {
      uid: data.uid,
      page: data.page,
      size: data.size
    }
  })
}