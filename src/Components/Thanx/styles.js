import styled from 'styled-components';

export const Container = styled.div `
  p {
      text-align :center;
      font-size: 18px;
      color : #fff;
      padding : 15px;
      margin : 10px 0;
    &.hide {
          display : none;
        }
  }
  h2{
    text-transform : uppercase;
    color : #fff;
    text-align : center;
    font-size : 40px;
    font-family: 'Libre Baskerville', serif;
    cursor : copy;
    &.hide {
          display : none;
        }
  }
  .tip {
    display : block ;
    padding : 5px;
    border : 1px solid #333;
    text-align : center;
    color : #fff;
    transition : all 0.5s;
    &.copied  {
      color : green;
      border : 1px solid green;
      transition : all 0.5s;
    }
    &.hide {
          display : none;
        }
  }
  button {
    background-color: transparent;
          border : 1px solid #fff;
          color : #fff;
          width : 90%;
          padding : 15px 0;
          margin : auto;
          display : block;
          cursor : pointer;
          position: relative;
          font-family: 'Libre Baskerville', serif;
          text-transform: uppercase;
          &.hide {
          display : none;
      }
  }
`;