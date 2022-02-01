import 'antd/dist/antd.css'
import {
    createGlobalStyle,
    DefaultTheme,
    GlobalStyleComponent
  } from 'styled-components'
  
  
  type GlobalStylesProps = {
    any?: string
  }
  
  const GlobalStyles: GlobalStyleComponent<
    GlobalStylesProps,
    DefaultTheme
  > = createGlobalStyle`
 
  
  * {
      margin: 0;
      padding: 2px;
      border: 0;
      outline: 0;
      text-decoration: none;
      box-sizing: border-box;
  }
  
      body {
        h1 {
          color:#fff;
          font-family: 'Calibri Arial Black';
          font-size : 2rem;
          font-weight : bold;
        }
        color: #fff;
        background: linear-gradient(
          to top right,
          rgba(0, 31, 70, 1) 0%,
          rgba(0, 70, 100, 1) 99%
        );
        background-repeat: no-repeat;
        background-attachment: fixed;
        }
        
     .ant-form-item-required {
        color:#fff;
     }   
  `
  
  export default GlobalStyles
  