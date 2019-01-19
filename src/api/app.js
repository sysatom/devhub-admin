import request from '@/utils/request'

export function getQueueJobs(params) {
  return request({
    url: `/admin/queue_jobs`,
    method: 'get',
    params: params
  })
}

export function getSites(params) {
  return request({
    url: `/admin/sites`,
    method: 'get',
    params: params
  })
}

export function getWiki(params) {
  return request({
    url: `/admin/wiki`,
    method: 'get',
    params: params
  })
}

export function getLinks(params) {
  return request({
    url: `/admin/links`,
    method: 'get',
    params: params
  })
}

export function getNews(params) {
  return request({
    url: `/admin/news`,
    method: 'get',
    params: params
  })
}

export function getArticles(params) {
  return request({
    url: `/admin/articles`,
    method: 'get',
    params: params
  })
}

export function getRepos(params) {
  return request({
    url: `/admin/repos`,
    method: 'get',
    params: params
  })
}

export function switchRepos(params) {
  return request({
    url: `/admin/repos/switch`,
    method: 'post',
    data: params
  })
}

export function editRepos(params) {
  return request({
    url: `/admin/repos/edit`,
    method: 'post',
    data: params
  })
}

export function getDevelopers(params) {
  return request({
    url: `/admin/developers`,
    method: 'get',
    params: params
  })
}

export function switchDeveloper(params) {
  return request({
    url: `/admin/developer/switch`,
    method: 'post',
    data: params
  })
}

export function editDeveloper(params) {
  return request({
    url: `/admin/developer/edit`,
    method: 'post',
    data: params
  })
}
