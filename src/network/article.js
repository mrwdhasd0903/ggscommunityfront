import {
  request
} from './request'

//通过某用户的id获取用户的文章(已完成)
export function findPageByUid(data) {
  return request({
    url: 'article/findPageByUid.do',
    method: 'get',
    params: {
      page: data.page,
      size: data.size,
      userId: data.userId
    }
  })
}

//分页查询文章列表(已完成)
export function findPage(data) {
  return request({
    url: 'article/findPage.do',
    method: 'get',
    params: {
      page: data.page,
      size: data.size
    }
  })
}
//通过文章id查看详情(已完成)
export function findById(data) {
  return request({
    url: 'article/findById.do',
    method: 'get',
    params: {
      articleId: data.articleId
    }
  })
}

//推荐文章(已完成)
export function findPageByRecommend(data) {
  return request({
    url: 'article/findPageByRecommend.do',
    method: 'get',
    params: {
      page: data.page,
      size: data.size
    }
  })
}