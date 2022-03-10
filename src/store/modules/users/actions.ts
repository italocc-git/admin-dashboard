export type userData = {
    id: number,
    name: string,
    username?: string,
    email: string
    ableToEdit ?: boolean
    address?: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,    
  }
    isLoaded: boolean
  }
export function loadUsersFromApi(userList: userData[]){
    return {
        type:'LOAD_USERS',
        payload : {
            userList,
            isLoaded : true,
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