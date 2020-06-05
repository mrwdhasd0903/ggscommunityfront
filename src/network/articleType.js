import {
  request
} from './request'


//文章分页查询分类(搞定)
export function findPage(data) {
  return request({
    url: 'articleType/findPage.do',
    method: 'get',
    params: {
      page: data.page,
      size: data.size
    }
  })
}