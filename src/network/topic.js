import {
  request
} from './request'

//查询所有帖子分类(已完成)
export function findByDelFlag() {
  return request({
    url: 'topic/findByDelFlag.do',
    method: 'get',
  })
}