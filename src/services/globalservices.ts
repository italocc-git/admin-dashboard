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
        return api.get('data').then(response => response.data)
    }
   
}

export default globalservices