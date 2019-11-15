import React from 'react';
import {MdClose} from 'react-icons/md'
import { Container } from './styles';

const Fechar = () => (
  <Container>
    <button onClick={() => window.top.spl.close()}>
     <MdClose size={20} color="#fff" />
    </button>
  </Container>
);

export default Fechar;
