import {api} from '../../services/api'

export const getUsersDataList = () => {
    return api.get('data').then((response ) => response.data)
}