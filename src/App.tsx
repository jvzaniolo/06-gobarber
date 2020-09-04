import React from 'react';

import AppProvider from './hooks';

import LogIn from './pages/LogIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <LogIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
