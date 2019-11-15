import React , { useState } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios'
import Chamada from '../Chamada'
import Thanx from '../Thanx'
import { Container } from './styles';


export default function Form() {
   const [ getLead , setGetLead ] = useState({
     visible : true,  
     
   })
       
     
      const sendFormLead = async (e) => {
        e.preventDefault(); 
        setGetLead(getLead.visible !== true)
        await axios.post(`add your service`, 
        `nome=${getLead.nome}&email=${getLead.email}&telefone=${getLead.telefone}` )
        console.log(getLead)
      }   

      function inputChange(e) {
        e.persist();      
        setGetLead(getLead => ({...getLead, [e.target.name] : e.target.value }))
      }

  return (
   <Container >
         <Chamada hide={getLead.visible !== true ? 'hide' : 'show'}/>
         <Thanx hide={getLead.visible !== true ? 'show' : 'hide'}/>
         <form className={getLead.visible !== true ? 'hide' : 'show'} onSubmit={sendFormLead}>
            <input type="text" placeholder="Nome" name="nome" onChange={inputChange} required
            autoComplete="off"/>
            <input type="email" name="email" placeholder="E-mail" onChange={inputChange}  required
            autoComplete="off"/>
            <InputMask mask="(99)99999-99999" placeholder="Telefone" name="telefone" maskChar={null} onChange={inputChange} 
            autoComplete="off"/> 
            <button type="submit">Enviar</button> 
            
         </form>  
   </Container>
  );
}
