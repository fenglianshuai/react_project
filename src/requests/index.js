import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development';
const service = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/247541' : ''
})
// 拦截器
service.interceptors.request.use((config) => {
    console.log(config)
    return config
})
service.interceptors.request.use((resp) => {
    if (resp.code === 200) {
        return resp.data
    } else {
        // 全局处理错误
    }
})

export const getArticles = () => {
    return service.post('/api/v1/articlelist')
}
