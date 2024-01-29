import request from 'superagent'

const rootUrl = '/api/v1'

export function getWork(): Promise<string[]> {
  return request.get(rootUrl + '/work').then((res) => {
    return res.body.work
  })
}
