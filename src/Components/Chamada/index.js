import React from 'react';

import { Container } from './styles';

const Chamada = ({hide}) => (
  
  <Container>
    <p className={`${hide}`}>
      Que tal garantir um desconto especial?
      <span>
      Você ganhou <strong>10% OFF </strong> para aproveitar na sua <strong> 1ª compra! </strong>
      Deixe seu contato e fique por dentro das novidades!
      </span>
    </p>
  </Container>
  
 ) ;

export default Chamada;
