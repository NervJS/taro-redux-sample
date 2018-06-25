import { ADD, MINUS } from '../constants/counter'
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'

export const counter = createReducer(fromJS({
  num: 0
}),{
  [ADD]: (state, action) => {
    const counter = state.toJS()
    return state.merge({
      num: counter.num + 1
    })
  },
  [MINUS]: (state, action) => {
    const counter = state.toJS()
    return state.merge({
      num: counter.num - 1
    })
  }
})
