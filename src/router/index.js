// 存放路由表
import Vue from "vue"
import VueRouter from "vue-router"


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    // 重定向
    redirect: '/major'
  }, {
    path: '/tools',
    component: () => import("views/mainTools/MainTools")
  }, {
    path: '/profile',
    component: () => import("views/mainProfile/MainProfile"),
    children: [{
      path: '',
      redirect: "list"
    }, {
      path: 'update',
      component: () => import("views/profileUpdate/ProfileUpdate")
    }, {
      path: 'list',
      component: () => import("views/profileList/ProfileList"),
      children: [{
        path: '',
        redirect: 'message'
      }, {
        path: 'message',
        component: () => import("views/listMessage/ListMessage")
      }, {
        path: 'star',
        component: () => import("views/listStar/ListStar")
      }, {
        path: 'bbs',
        component: () => import("views/listBbs/ListBbs")
      }, {
        path: 'article',
        component: () => import("views/listArticle/ListArticle")
      }, {
        path: 'dynamic',
        component: () => import("views/listDynamic/ListDynamic")
      }, {
        path: 'myfan',
        component: () => import("views/listMyfan/ListMyfan")
      }, {
        path: 'myfocus',
        component: () => import("views/listMyfocus/ListMyfocus")
      }, ]
    }]
  }, {
    path: '/major',
    component: () => import("views/mainMajor/MainMajor"),
    children: [{
      path: '',
      redirect: "read"
    }, {
      path: 'bbsdetails/:id',
      component: () => import('views/majorBbsdetails/MajorBbsdetails')
    }, {
      path: 'articledetails/:id',
      component: () => import('views/majorArticledetails/MajorArticledetails')
    }, {
      path: 'noticedetails/:id',
      component: () => import("views/majorNoticedetails/MajorNoticedetails")
    }, {
      path: 'wtbbs',
      component: () => import("views/majorWtbbs/MajorWtbbs")
    }, {
      path: 'wtarticle',
      component: () => import("views/majorWtarticle/MajorWtarticle")
    }, {
      path: 'wtdynamic',
      component: () => import("views/majorWtdynamic/MajorWtdynamic")
    }, {
      path: 'notice',
      component: () => import("views/majorNotice/MajorNotice"),
    }, {
      path: 'guide',
      component: () => import("views/majorGuide/MajorGuide"),
    }, {
      path: 'read',
      component: () => import("views/majorRead/MajorRead"),
      children: [{
        path: '',
        redirect: 'hot'
      }, {
        path: 'hot',
        component: () => import("views/readHot/ReadHot"),
      }, {
        path: 'myfocus',
        component: () => import("views/readMyfocus/ReadMyfocus"),
      }, {
        path: 'recommend',
        component: () => import("views/readRecommend/ReadRecommend")
      }, {
        path: 'bbs',
        component: () => import("views/readBbs/ReadBbs"),
        children: [{
          path: "",
          redirect: 'divide'
        }, {
          path: 'divide',
          component: () => import('views/bbsDivide/BbsDivide')
        }]
      }, {
        path: 'article',
        component: () => import("views/readArticle/ReadArticle"),
        children: [{
          path: '',
          redirect: 'divide'
        }, {
          path: 'divide',
          component: () => import("views/articleDivide/ArticleDivide")
        }]
      }]
    }]
  }, {
    path: '/refresh',
    component: () => import('utlis/Refresh')
  }],
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  //全局导航守卫
  //from跳转前的route
  //to跳转后的route
  //放行
  next()
})
router.afterEach((to, from) => {
  //全局导航守卫(放行之后)
  //from跳转前的route
  //to跳转后的route

})

export default router