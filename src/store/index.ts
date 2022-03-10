import { applyMiddleware, createStore} from 'redux'
import rootReducer from './modules/rootReducer'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userData} from '../types'
export interface IState {
    users : userData[]
}
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
  )

 /*  sagaMiddleware.run(rootSaga) */
  
export default store