import {Input  , Form  , notification} from 'antd'
import { ButtonComponent } from '../../components/Button'
import {UserAddOutlined , CloseOutlined} from '@ant-design/icons'
import {useHistory} from 'react-router-dom'
import {  Rule } from 'antd/lib/form'
import {Container , Content , Footer , ContentTitle} from '../styles/stylesPage'
import { addUserToList } from '../../store/modules/users/actions';
import { useDispatch } from 'react-redux'


export function CreatePage() {
    const [form] = Form.useForm()
    const {Item} = Form
    const history = useHistory()
    const dispatch = useDispatch()
    


    const requiredRule: Rule = {
        required: true,
        message: 'Field is required.'
      }
    const emailRule : Rule = {
        type:'email',
        message:'Enter a valid e-mail address'
    }  
      
    const handleCancel = () => {
        form.resetFields()
        history.goBack()
    }

    const handleSubmit = () => {
        const data = form.getFieldsValue()
        
         dispatch(addUserToList(data)) 
         notification.success({
            message:'User created'
        })
         history.push('/') 
        
    }

    return (
        <Container>
            <Form
                id='userForm'
                name='userForm'
                form={form}
                onFinish={handleSubmit}
                requiredMark={false}
                layout='vertical'
                
            >
                <Content>
                <ContentTitle> Create User Page </ContentTitle>
                    <Item label='Name :' name='name'  rules={[requiredRule]}>
                        <Input name='name'  />
                    </Item>
                    <Item label='Email :' name='email' rules={[requiredRule , emailRule]}>
                        <Input name='email' />
                    </Item>
                    
                </Content>
                <Footer>
                    <ButtonComponent onClick={handleCancel} name='Cancel' 
                    icon={<CloseOutlined />}>
                        
                    </ButtonComponent>
                    <ButtonComponent onClick={form.submit} type='primary' 
                       icon={<UserAddOutlined/>} name='Submit'>
                        
                    </ButtonComponent>
                </Footer>
            </Form>
        </Container>
    )
}