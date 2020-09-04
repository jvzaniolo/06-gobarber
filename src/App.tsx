import React from 'react';

import { AuthProvider } from './context/AuthContext';

import LogIn from './pages/LogIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <LogIn />
    </AuthProvider>
    {/* styles */}
    <GlobalStyle />
  </>
);

export default App;
