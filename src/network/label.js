import {
  request
} from './request'

//查询文章标签
export function findByIds(data) {
  return request({
    url: 'label/findByIds.do',
    method: 'get',
    params: {
      labels: data.labels //用 , 隔开 例如:1,2,3
    }
  })
}