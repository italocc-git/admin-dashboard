import { Button } from './styles'
import {ButtonProps} from 'antd'
interface Props extends ButtonProps {
    icon?: React.ReactNode
    name: string
    mt?: string
}

export const ButtonComponent = ({icon, mt , name, ...rest}: Props) => {

    return (
        <Button marginTop={mt} {...rest}>
            {icon && icon}
            <span>{name}</span>
        </Button>
    )
}