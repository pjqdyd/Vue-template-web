import axios from 'axios'
import { createError } from './util'
import { Message } from 'element-ui';

//const ip = 'http://localhost:8080'; //baseUrl
const ip = 'https://www.easy-mock.com/mock/5c8dd97d6fe7c7611499c703'

// 统一配置请求
const HTTP_REQUEST = axios.create({
    baseURL: ip,
    responseType: 'json',
    validateStatus(status) {
        // 200 外的状态码都认定为失败
        return status === 200
    }
})

// 统一拦截请求
HTTP_REQUEST.interceptors.request.use((config) => {
    // 有 token就带上
    // if (this.$store.state.token) {
    //   config.headers.Authentication = store.state.token
    // }
    return config
}, (error) => {
    return Promise.reject(error)
});

// 统一拦截响应
HTTP_REQUEST.interceptors.response.use((config) => {
    return config
}, (error) => {
    //TODO
    return Promise.reject(error)
});

//定义异步请求方法,(如果返回有异常就提示信息,并抛出异常)
const doRequest = async (request) => {
    try {
      const resp = await request;
      const data = resp.data;
      if (!data) {
        if (resp.status === 201 || resp.status === 203 || resp.status === 204) {
          return ''
        }
      } else {
        return data
      }
    } catch (err) {
      const errResp = err.response;
      console.log('---------------', err);
      if (errResp.status === 404) {
        Message.error('错误, 未找到数据');
        throw createError(errResp.status, "错误, 未找到数据");
      } else if (errResp.status === 401) {
        Message.error('错误, 您无权访问');
        throw createError(errResp.status, '错误, 您无权访问');
      } else {
        Message.error(errResp.message);
        throw err;
      }
    }
  }


/**
 * 功能描述：全局 API请求集合
 */
const globalRequest = {

    //测试1
    test(name, age) {
      return doRequest(HTTP_REQUEST.get(`/test?name=${name}&age=${age}`))
    },

    //测试2
    test2(name, params) {
        return doRequest(HTTP_REQUEST.get(`/test2?name=${name}`, params, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}))
    },

    //测试3
    test3(name, bodyData) {
        return doRequest(HTTP_REQUEST.post(`/test3?name=${name}`, bodyData, {headers: {'Content-Type': 'application/json'}}))
    },

    //测试4
    test4(id) {
        return doRequest(HTTP_REQUEST.get(`/test/userinfo?id=${id}`, {headers: {'Content-Type': 'application/json'}}))
    }
  
  }

  /**
 * 功能描述：用户 API请求集合
 */
const userRequest = {

    //登录
    login(username, password) {
      return doRequest(HTTP_REQUEST.post(`/login?username=${username}&password=${password}`))
    }
  
  }


//导出所有请求
  export default{

    globalRequest,

    userRequest

  }
