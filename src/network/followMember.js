import {
  request
} from './request'
//查询我关注的人/关注我的人()
export function findPageByMemberId(data) {
  return request({
    url: 'followMember/findPageByMemberId.do',
    method: 'get',
    params: {
      memberId: data.memberId, //用户id
      flag: data.flag, //0为查询我关注的人；1为查询关注我的人(粉丝)
      page: data.page,
      size: data.size
    }
  })
}

//关注页面(已完成)
export function findPageFollow(data) {
  return request({
    url: 'followMember/findPageFollow.do',
    method: 'get',
    params: {
      memberId: data.memberId, //用户id
      page: data.page,
      size: data.size
    }
  })
}