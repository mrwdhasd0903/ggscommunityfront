import {
  request
} from './request'

//分页帖子列表(已完成)
export function findPage(data) {
  return request({
    url: 'tiezi/findPage.do',
    method: 'get',
    params: {
      page: data.page,
      size: data.size
    }
  })
}

export function findById(data) {
  return request({
    url: 'tiezi/findById.do',
    method: 'get',
    params: {
      id: data.id
    }
  })
}

//查询用户发布的帖子(已完成)
export function findPageByUid(data) {
  return request({
    url: 'tiezi/findPageByUid.do',
    method: 'get',
    params: {
      userId: data.userId,
      page: data.page,
      size: data.size
    }
  })
}