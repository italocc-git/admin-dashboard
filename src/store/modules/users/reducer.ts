import { Reducer } from 'redux'
import {UserData} from './types'

const INITIAL_STATE : UserData[] = []

const users : Reducer<UserData[]>=  (state = INITIAL_STATE, action : any) =>{
    

    switch(action.type){
        case 'LOAD_USERS': {
            const {userList} = action.payload

            return [...state , ...userList]
        }
        case 'ADD_USER_TO_LIST' : {
            const {user} = action.payload
            console.log(user)
            
            return [
                ...state,
                {
                    ...user,
                    id : state.length+1
                }
            ]
        }


        case 'EDIT_USER_FROM_LIST' : {
            const {user} = action.payload
            
            const newList = state.map(item => item.id === user.id ? user : item)
            
            return newList
        }

        case 'DELETE_USER_FROM_LIST' : {
            
            const {idUser} = action.payload
            const newList = state.filter(item => item.id !== idUser)

            return newList
        }

        default : {
            return state
        }       
    }
    
}

export default users