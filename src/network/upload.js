import axios from 'axios'

let request = function (config) {
  // 1 创建axios实例
  const instance = axios.create({
    baseURL: "http://kxinggs.cn:8080/web-portal/",
    timeout: 20000,
    headers: {
      'Content-Type': "multipart/form-data"
    },
  })
  // 2.1 请求拦截器
  instance.interceptors.request.use(config => {
    //config.headers.common['token'] = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : "";
    // config.headers.common['memberId'] = window.localStorage.getItem('memberId') ? window.localStorage.getItem('memberId') : ""
    return config;
  }, err => {
    console.log(err);
  })

  // 2.2 响应拦截器
  instance.interceptors.response.use(res => {
    //window.localStorage.setItem("token", res.headers.token)
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}

//上传文件
export function uploadOss(formData) {
  return request({
    url: 'upload/oss.do',
    method: 'post',
    data: formData,
    cache: false,
    processData: false,
    contentType: false,
  })
}