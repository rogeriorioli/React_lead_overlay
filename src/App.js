import React from 'react';
import GlobalStyle from './styles/global'
import Overlay from './Components/Overlay';
import Main from './Components/Main';

function App() {
  return (
    <>
      <Overlay>
        <Main />
      </Overlay>
      <GlobalStyle/>
    </>
  );
}

export default App;
