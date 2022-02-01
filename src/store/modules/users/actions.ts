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