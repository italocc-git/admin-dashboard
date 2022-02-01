import { AxiosResponse } from 'axios'
import {all, takeLatest, select, call, put} from 'redux-saga/effects'
import { api } from '../../../services/api'
import { addUserToList } from './actions'
import {IState} from '../../index'
type LoadInitialValuesRequest = ReturnType<typeof addUserToList>
export type userData = {
    id: number,
    name: string,
    username?: string,
    email: string
    address?: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,    
  
  }
  }

function* loadInitialValues(action : LoadInitialValuesRequest){
    /* console.log(action.payload)

    const currentList : userData[] = yield select((state : IState) => state)

    const initialValues : AxiosResponse<userData[]> = yield call(api.get,'data') */

} 


export default all([
    takeLatest('ADD_USER_TO_LIST' , loadInitialValues)
])