import {
  request
} from './request'

//分页查询文章评论(已完成)
export function findPage(data) {
  return request({
    url: 'articleComment/findPage.do',
    method: 'get',
    params: {
      articleId: data.articleId, //文章id
      orderBy: data.orderBy, //0为降序，1为升序
      commentPage: data.commentPage, //评论的页数
      commentSize: data.commentSize, //评论的每页显示数量
      replyPage: data.replyPage, //回复的页数
      replySize: data.replySize //回复的每页显示数量
    }
  })
}

//文章回复分页查询(已完成)
export function replyFindPage(data) {
  return request({
    url: 'articleCommentReply/findPage.do',
    method: 'get',
    params: {
      commentId: data.commentId, //评论id
      page: data.page,
      size: data.size
    }
  })
}