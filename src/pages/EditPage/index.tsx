import React from 'react'
import {Input , Button , Form } from 'antd'
import {useHistory, useParams} from 'react-router-dom'
import {  Rule } from 'antd/lib/form'
import {Container , Content , Footer} from './style'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../store';
import { editUserFromList } from '../../store/modules/users/actions'

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
type params  = {
    id : string
}

export function EditPage() {
    const [form] = Form.useForm()
    const {Item} = Form
    const history = useHistory()
    const {id} = useParams<params>()

  
    const requiredRule: Rule = {
        required: true,
        message: 'Field is required.'
      }
    const dispatch = useDispatch()
    
    const users = useSelector<IState, userData[]>(state => state.users)

    const handleCancel = () => {
        form.resetFields()
        history.goBack()
    }

    const handleSubmit = () => {
        
        const submitData = {
            ...form.getFieldsValue(),
            id : Number(id)
        }
        dispatch(editUserFromList(submitData))
        
        history.push('/')
    }
    React.useEffect(() => {
        async function getUserData(){
            const data = users.find(item => item.id === Number(id))
             if(data){
                form.setFieldsValue({...data , city : data.address?.city})
 
             }

        }
            getUserData()
    },[id])

    return (
        <Container>
            <Form
                id='userForm'
                name='userForm'
                form={form}
                onFinish={handleSubmit}

            >
                <Content>
                    <Item label='Name' name='name'  rules={[requiredRule]}>
                        <Input name='name'  />
                    </Item>
                    <Item label='Username' name='username' >
                        <Input name='username' />
                    </Item>
                    <Item label='City' name='city' >
                        <Input name='city' />
                    </Item>
                    <Item label='Email' name='email' rules={[requiredRule]}>
                        <Input name='email' />
                    </Item>
                    
                </Content>
                <Footer>
                    <Button onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={form.submit}>
                        Submit
                    </Button>
                </Footer>
            </Form>
        </Container>
    )
}