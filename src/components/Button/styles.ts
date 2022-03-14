import styled from "styled-components";
import {Button as ButtonAntd} from 'antd'

type ButtonProps = {
    marginTop?: string
}

export const Button = styled(ButtonAntd)<ButtonProps>`
    margin-top : ${(props) => props.marginTop};
    display: flex;
    justify-content:space-between;
    align-items : center;
    svg{
        width:1.2rem;
        height:1.2rem;
    }
`