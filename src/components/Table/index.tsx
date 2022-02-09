import React from 'react'
import { Table as TableAntd, Button , Popconfirm , notification  } from 'antd';
import {   useDispatch, useSelector } from 'react-redux';
import  { useHistory } from 'react-router-dom'
import { IState } from '../../store';
import { deleteUserFromList  } from '../../store/modules/users/actions';
import {Header , HeaderTitle} from './styles'
import {getUsersDataList} from './services'



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


export const Table = () => {
  const history = useHistory()

  const dispatch = useDispatch()
  const users = useSelector<IState, userData[]>(state =>  state.users)
  const [dataUsers, setDataUsers] = React.useState<userData[]>([])  
  
    const handleEdit= (idUser : number) => {
      history.push(`editUser/${idUser}`)
    }
    
    const handleDelete = (id : number) => {
        dispatch(deleteUserFromList(id))
        notification.success({
          message: 'User deleted',
        })
    }

    
    
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
        {
          title: 'Edit',
          key: 'edit',
          render : (row : any) => {
              return <Button key={row.id} disabled={row.ableToEdit === undefined} type='primary' onClick={() => handleEdit(row.id)}>EDIT</Button>
            
          }
        },
        {
            title: 'Delete',
            key: 'delete',
            render : (row : any) => {
               return (
               <Popconfirm disabled={row.ableToEdit === undefined} key={row.id}  title='Do you wanna remove ?' onConfirm={() => handleDelete(row.id)}>
                  <Button disabled={row.ableToEdit === undefined} type='ghost' >DELETE</Button> 
               </Popconfirm>
               
               )
              }
          },
      ];

      React.useEffect(() => {
        async function load() {
          const data = await getUsersDataList()
          const dataFormatted = data.map((item : userData) => ({...item , city: item.address?.city}))
          setDataUsers([...dataFormatted , ...users])
        }
        load()
      },[users])

  
    return (
        <>
                <Header >
                    <HeaderTitle>User list</HeaderTitle>
                    <Button type='primary' onClick={() => {history.push('/createUser')}}>Add New User</Button>
                </Header>
                <TableAntd  columns={columns}  dataSource={dataUsers} pagination={false} locale={{emptyText : 'No User Found'  }}/> 
        </>
    )
}