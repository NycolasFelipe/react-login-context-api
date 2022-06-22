import React from 'react';
import GlobalStyle from './styles/global';
import { RoutesApp } from './routes';
import { AuthProvider } from './contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
}
