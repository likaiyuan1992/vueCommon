import request from '@/utils/request'

export function moodEssay(query) {
  return request({
    url: '/moodEssay',
    method: 'get',
    params: query
  })
}

export function addMoodEssay(data) {
  return request({
    url: '/addMoodEssay',
    method: 'post',
    data
  })
}

