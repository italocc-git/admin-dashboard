import {userData} from '../../../types'
export function loadUsersFromApi(userList: userData[]){
    return {
        type:'LOAD_USERS',
        payload : {
            userList,
        }
    }
}
export function addUserToList(user : userData){
    return {
        type:'ADD_USER_TO_LIST',
        payload : {
            user,
        }
    }
}

export function editUserFromList(user : userData){
    return {
        type:'EDIT_USER_FROM_LIST',
        payload : {
            user,
        }
    }
}

export function deleteUserFromList(idUser : number){
    return {
        type:'DELETE_USER_FROM_LIST',
        payload : {
            idUser,
        }
    }
}