import request from '@/util/request'

export function getLineInfo (query) {
  return request({
    url: '/main/getLineInfo',
    method: 'GET',
    params: query
  })
}
