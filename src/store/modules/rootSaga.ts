import {all} from 'redux-saga/effects'

import user from './users/sagas'

export default function* rootSaga(){
    yield all([
        user,
   ])
 }