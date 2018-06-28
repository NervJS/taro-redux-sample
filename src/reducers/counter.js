import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import { ADD, MINUS } from '../constants/counter'

export default createReducer(fromJS({
  num: 0
}),{
  [ADD]: (state) => {
    const counterState = state.toJS()
    return state.merge({
      num: counterState.num + 1
    })
  },
  [MINUS]: (state) => {
    const counterState = state.toJS()
    return state.merge({
      num: counterState.num - 1
    })
  }
})
