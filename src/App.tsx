import React from 'react';

import { AuthProvider } from './hooks/AuthContext';

import LogIn from './pages/LogIn';
// import SignUp from './pages/SignUp';

import ToastContainer from './components/ToastContainer';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <LogIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
