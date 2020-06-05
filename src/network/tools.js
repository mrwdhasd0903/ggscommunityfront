import axios from 'axios'
//解决跨域sessionId问题
// axios.defaults.withCredentials = true
function request(config) {
  // 1 创建axios实例
  const instance = axios.create({
    baseURL: "http://47.113.92.137:8080/",
    timeout: 20000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
  })
  // 2 axios拦截器
  // 2.1 请求拦截器
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })

  // 2.2 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}

//成绩查询(已完成)
export function getScore(stuData) {
  return request({
    url: 'score',
    method: 'get',
    params: {
      u: stuData.u,
      p: stuData.p
    }
  })
}