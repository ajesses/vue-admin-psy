import request from '@/utils/request'

export function getCityList(query) {
  return request({
    url: '/city/list',
    method: 'get',
    params: query
  })
}

export function fetchCity(id) {
  return request({
    url: '/city/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/city/pv',
    method: 'get',
    params: { pv }
  })
}

export function createCity(data) {
  return request({
    url: '/city/create',
    method: 'post',
    data
  })
}

export function updateCity(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
