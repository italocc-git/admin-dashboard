import {api} from '../services/api'

export type userData = {
        id: number,
        name: string,
        username: string,
        email: string
        address: {
          street: string,
          suite: string,
          city: string,
          zipcode: string,    
    
    }
}
const globalservices = {
     getUsersDataList() {
        return api.get<userData[]>('data').then(response => response.data)
    },
    getUserById(id : number){
        return api.get(`data?id=${id}`)
    },
    createDataUser(){
        /* return api.post('/posts') */
    },
    editDataUser(){
        
    }
}

export default globalservices