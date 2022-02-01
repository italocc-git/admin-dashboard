import { createStore} from 'redux'
import rootReducer from './modules/rootReducer'

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
export interface IState {
    users : userData[]
}

const store = createStore(rootReducer)


export default store