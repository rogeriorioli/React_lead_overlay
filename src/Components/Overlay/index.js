import React from 'react';
import { Container } from './styles';

// const redirectTo = (_link) => {
    
//     // const click = window.top.spl.click_only(_link);
//     // const cookie = window.top.spl.set_cookie('_spl_tr', 11143, 720);

//     setTimeout(function () {
//         const url = 'https://www.onodera.com.br/?utm_source=shopback&utm_medium=cpc&utm_campaign=shopback&utm_term=overlay'  

//         window.top.location = url;

//     }, 800);

// };

const Overlay = ({children}) => (

  <Container > 
      {children}
  </Container>

);


export default Overlay;
