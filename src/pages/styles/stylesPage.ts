import styled from 'styled-components'

export const Container = styled.div`
    height:100vh;
    display:flex;
    flex-direction : column;
    justify-content: center;
    align-items:center;
`

export const Content = styled.div`
    label {
        color:#fff;
        font-weight:bold;
    }
    width:500px;
`

export const Footer = styled.div`

    display: flex;
    align-items : center;
    justify-content : end;
    gap: 1rem;

    button:first-child {
        
        background: rgba(255,0,0,0.7);
        color:#fff;
        border: 0;

        &:hover {
            background : rgba(255,0,0);
        }
        
    }
`

export const ContentTitle = styled.h1`
    display: flex;
    justify-content:center;

`