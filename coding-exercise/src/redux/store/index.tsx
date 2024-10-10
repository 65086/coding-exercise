import { createStore, applyMiddleware, Store } from 'redux'
import { thunk } from 'redux-thunk'
import appCommonState, { IappCommonState } from '../reducers/appReducer'
import { Action, DispatchType } from '../actions'

const store: Store<IappCommonState, Action> & {
  dispatch: DispatchType
} = createStore(appCommonState, applyMiddleware(thunk))

export default store

