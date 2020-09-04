import React from 'react';

import AuthContext from './context/AuthContext';

import LogIn from './pages/LogIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'João Vitor' }}>
      <LogIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
