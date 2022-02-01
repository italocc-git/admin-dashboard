import {Input , Button , Form  } from 'antd'
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
      
    const handleCancel = () => {
        form.resetFields()
        history.goBack()
    }

    const handleSubmit = () => {
        const data = form.getFieldsValue()
        
         dispatch(addUserToList(data)) 
        
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
                    <Item label='Email :' name='email' rules={[requiredRule]}>
                        <Input name='email' />
                    </Item>
                    
                </Content>
                <Footer>
                    <Button onClick={handleCancel} >
                        Cancel
                    </Button>
                    <Button onClick={form.submit} type='primary'>
                        Submit
                    </Button>
                </Footer>
            </Form>
        </Container>
    )
}