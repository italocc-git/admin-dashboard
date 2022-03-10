import React from 'react'
import { Table as TableAntd, Button , Popconfirm , notification  } from 'antd';
import {   useDispatch, useSelector } from 'react-redux';
import  { useHistory } from 'react-router-dom'
import { IState } from '../../store';
import { deleteUserFromList, loadUsersFromApi  } from '../../store/modules/users/actions';
import {Header , HeaderTitle} from './styles'
import {getUsersDataList} from './services'
import {userData} from '../../types'
/* Amanhã refatorar e usar o princípio do sagax */


export const Table = () => {
  const history = useHistory()

  const dispatch = useDispatch()
  const users = useSelector<IState, userData[]>(state =>  state.users)
  
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
              return <Button key={row.id}  type='primary' onClick={() => handleEdit(row.id)}>EDIT</Button>
            
          }
        },
        {
            title: 'Delete',
            key: 'delete',
            render : (row : any) => {
               return (
               <Popconfirm  key={row.id}  title='Do you wanna remove ?' onConfirm={() => handleDelete(row.id)}>
                  <Button danger >DELETE</Button> 
               </Popconfirm>
               
               )
              }
          },
      ];

      React.useEffect(() => {
        async function load() {
          const data = await getUsersDataList()
          
            if(users.length === 0 && data){
              const dataFormatted = data.map((item : userData) => (
                {
                 id: item.id ,
                 name: item.name,
                 username: item.username,
                 city: item.address?.city,
                 email: item.email,
               }
               )) 
              dispatch(loadUsersFromApi(dataFormatted))
            }
            
        }
        load()
      },[dispatch])

  
    return (
        <>
                <Header >
                    <HeaderTitle>Users list</HeaderTitle>
                    <Button type='primary' onClick={() => {history.push('/createUser')}}>Add New User</Button>
                </Header>
                <TableAntd  columns={columns}  dataSource={users} pagination={false} locale={{emptyText : 'No User Found'  }}/> 
        </>
    )
}