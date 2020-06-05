import {
  request
} from './request'


//分页查询热榜(已完成)
export function hotFindPage(data) {
  return request({
    url: 'hot/findPage.do',
    method: 'get',
    params: {
      page: data.page,
      size: data.size
    }
  })
}