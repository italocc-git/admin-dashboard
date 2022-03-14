import React from 'react'
import { Table as TableAntd , Popconfirm , notification , Image, TablePaginationConfig  } from 'antd';
import {UserDeleteOutlined , UserSwitchOutlined, UserAddOutlined, LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import {   useDispatch, useSelector } from 'react-redux';
import  { useHistory } from 'react-router-dom'
import { IState } from '../../store';
import { deleteUserFromList, loadUsersFromApi  } from '../../store/modules/users/actions';
import {Header , HeaderTitle} from './styles'
import {getUsersDataList} from './services'
import {userData} from '../../types'
import UsersImg from '../../assets/users.svg'
import { ButtonComponent } from '../../components/Button'
/* Amanhã refatorar e usar o princípio do sagax */
/* Criar um botão padrão e atribuir um ícone */

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
          width:'8%',
          render : (row : any) => {
              return <ButtonComponent key={row.id}  type='primary' 
              name='EDIT'
              icon={<UserSwitchOutlined />}
              onClick={() => handleEdit(row.id)}/>
            
          }
        },
        {
            title: 'Delete',
            key: 'delete',
            width:'8%',
            render : (row : any) => {
               return (
               <Popconfirm  key={row.id}  title='Do you wanna remove ?' onConfirm={() => handleDelete(row.id)}>
                  <ButtonComponent icon={<UserDeleteOutlined />} danger name='DELETE'/> 
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

      const styleConfig : React.CSSProperties ={
        color: '#fff',
        fontSize:'1.2rem'
      }

      const paginationConfig : TablePaginationConfig = {
        defaultPageSize:10 ,
        prevIcon: <LeftCircleOutlined style={styleConfig} />,
        nextIcon: <RightCircleOutlined style={styleConfig}/>,
        position: ['bottomCenter'],
        responsive: true,
      }
  
    return (
        <>
                <Header >
                    <HeaderTitle>Dashboard - Users list</HeaderTitle>
                    <Image src={UsersImg} alt='users' preview={false} height={48} width={48} />
                    <ButtonComponent type='primary' onClick={() => {history.push('/createUser')}}
                    name='Add New User' icon={<UserAddOutlined />}/>
                </Header>
                <TableAntd 
                  columns={columns}
                  bordered
                  tableLayout='auto'
                  
                  dataSource={users}
                  pagination={paginationConfig}
                  locale={{emptyText : 'No User Found'  }}/> 
        </>
    )
}