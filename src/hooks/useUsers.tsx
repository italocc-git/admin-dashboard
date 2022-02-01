import React from 'react'

import {api} from '../services/api'

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

type UsersContextData = {
    dataUsers : userData[]
    setDataUsers : (users: userData[]) => void
    handleDelete : (id : number) => void
    /* getUsersDataList : () => Promise<userData[]> */
    getUserById : (id : number) => Promise<userData>
    createUser : (user : userData) => void
    editUser : (idUser : number) => void

}
interface UsersProviderInterface {
    children : React.ReactNode
}

const UsersContext = React.createContext({} as UsersContextData)

export function UsersProvider(props : UsersProviderInterface) {
    const [dataUsers , setDataUsers] = React.useState<userData[]>([])

    const handleDelete = (id : number) => {
        setDataUsers(dataUsers.filter(data => data.id !== id))
        
      }

   /*  const getUsersDataList = () => {
        return api.get('data').then((response ) => response.data)
    } */
    const getUserById = (id:number) =>  {
        return api.get(`data?id=${id}`).then(resp => resp.data)
    }

    const createUser = (user : userData) => {
        
        const userFound = dataUsers.find(item => item.name === user.name)
        if(userFound){
            return /* User already created */
        }
        const newUser = {
            id : dataUsers.length+1,
            name : user.name,
            email : user.email, 

        }
        setDataUsers([...dataUsers , newUser])
    }

    const editUser = (idUser : number) => {
        const userFound = dataUsers.find(item => item.id === idUser) 

        if(userFound){
            setDataUsers(dataUsers.map(item => item.id === idUser ? userFound : item))
        }
    }


    /* React.useEffect(() => {
        const loadData = async() => {
          try {    
               const data =   await getUsersDataList()
               setDataUsers(data.map((item : userData) => (
               {...item , city : item.address?.city}
               )))
               
               
          } 
          catch(error){
              console.log(error)
              
          }
       }
       loadData()
   },[])  */

    return(
        <UsersContext.Provider 
        value={{createUser,
            setDataUsers,
            dataUsers,
            handleDelete,
            /* getUsersDataList, */
            getUserById,
            editUser,
            }} >
            {props.children}
        </UsersContext.Provider>
    )
}

export function useUsers(){
    const context = React.useContext(UsersContext)

    return context
}