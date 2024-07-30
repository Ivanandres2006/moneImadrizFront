
import React from 'react';
import { AuthProvider } from './APIrequests/AuthContext';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>React Authentication with Spring Boot</h1>
        <Register />
        <Login />
      </div>
    </AuthProvider>
  );
}

export default App;
