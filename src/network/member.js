import {
  request
} from './request'
//通过id查询用户(已完成)
export function memberFindById(data) {
  return request({
    url: 'member/findById.do',
    method: 'get',
    params: {
      memberId: data.memberId
    }
  })
}