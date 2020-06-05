import {
  request
} from './request'

//帖子回复分页查询(已完成)
export function findPage(data) {
  return request({
    url: 'tieziCommentReply/findPage.do',
    method: 'get',
    params: {
      commentId: data.commentId,
      page: data.page,
      size: data.size
    }
  })
}
//分页查询帖子评论(已完成)
export function CommentfindPage(data) {
  return request({
    url: 'tieziComment/findPage.do',
    method: 'get',
    params: {
      tieziId: data.tieziId, //帖子id
      orderBy: data.orderBy, //0为降序 1为升序
      commentPage: data.commentPage,
      commentSize: data.commentSize,
      replyPage: data.replyPage,
      replySize: data.replySize
    }
  })
}