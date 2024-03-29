import { COLOR_CHANGED, STATUS_CHANGED } from './actionTypes'

export const statusChanged = (status) => {
  return {
    type: STATUS_CHANGED,
    payload: status,
  }
}

export const colorChanged = (color, chnageType) => {
  return {
    type: COLOR_CHANGED,
    payload: { color, chnageType },
  }
}
