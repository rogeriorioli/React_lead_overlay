import React from 'react';
import useClipboard from "react-use-clipboard";
import { Container } from './styles';
const redirectTo = (_link) => {
    

    
    setTimeout(function () {
      const url = 'https://www.zerezes.com.br/?utm_source=shopback&utm_medium=cpc&utm_campaign=shopback&utm_term=overlay'  
      
      window.top.location = url;
      
    }, 800);
    
  };
  
  const Thanx = ({hide}) => {
    const [isCopied, setCopied] = useClipboard("10OFFZRZS");
    
  return( 
  <Container>
    <p className={`${hide}`}>Use o Cupom.</p> 
     
   <div className={`${hide}`}>
    <h2 className={`${hide}`} onClick={setCopied}>10OFFZRZS</h2>
          {isCopied ? <span className={`${hide  } tip copied`}>Copiado com sucesso! boas compras :D </span> : <span className={`${hide } tip`}>Clique no cupom acima para copiar</span> }  
      </div> 
    <p className={`${hide}`}>e tenha 10% de desconto na hora :).</p> 
    <button className={`${hide}`} onClick={() => redirectTo(window.top.location.href)}>continuar compra</button>
  </Container>

)};

export default Thanx;

