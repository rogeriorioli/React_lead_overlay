import styled from 'styled-components';

export const Container = styled.div `
      width : 367px;
      form {
        padding : 0 10px;
        input {
          width : 70% ;
          display : block ;
          padding : 10px;
          background-color: transparent;
          outline: none;
          border : none;
          margin : 10px auto;
          border-bottom : 1px solid #fff;
          color : #fff;
          position : relative;
          &:focus{
            outline : none;
            background : none;
          }   
          &::placeholder {
            color : #fff;
            text-align : center;
            text-transform : uppercase;
          }
        }
        button {
          background-color: transparent;
          border : 1px solid #fff;
          color : #fff;
          width : 70%;
          padding : 15px 0;
          margin : auto;
          display : block;
          cursor : pointer;
          position: relative;
          font-family: 'Libre Baskerville', serif;
          text-transform: uppercase;
        }
        &.hide {
            display : none ;
          }
      }

`;