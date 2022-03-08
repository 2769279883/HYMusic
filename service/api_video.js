import hyRequest from './index'

export function getTopMVs(offset, limit = 10) {
  return hyRequest.get("/top/mv", {
    offset,
    limit
  })
}