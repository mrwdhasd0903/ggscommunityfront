import axios from 'axios'
//解决跨域sessionId问题
// axios.defaults.withCredentials = true
export function request(config) {
  // 1 创建axios实例
  const instance = axios.create({
    baseURL: "http://kxinggs.cn:8080/web-portal/",
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
    //携带token
    config.headers.common['token'] = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : "";
    config.headers.common['memberId'] = window.localStorage.getItem('memberId') ? window.localStorage.getItem('memberId') : ""
    return config;
  }, err => {
    console.log(err);
  })

  // 2.2 响应拦截器
  instance.interceptors.response.use(res => {
    // if (res.data.data) {
    //   return res.data.data
    // } else {
    window.localStorage.setItem("token", res.headers.token)
    return res.data
    // }
  }, err => {
    console.log(err);
  })
  // 3发送真正的网络请求
  return instance(config)
}