import React from 'react';
import Home from './src/main';

const App = () => {
  return (
    <>
      <StateContextProvider>
    <StyleContextProvider>
      <Home />
    </StyleContextProvider>
  </StateContextProvider>
    </>
  );
};

export default App;
