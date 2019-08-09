import request from '@/util/request'

export function getAllUser () {
  return request({
    url: '/User/getAllUser',
    method: 'GET'
  })
}
