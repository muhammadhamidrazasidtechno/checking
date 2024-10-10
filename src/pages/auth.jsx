import React from 'react';
import useAuth from '../hooks/useAuth';
import AuthForm from '../components/auth-form';

const AuthPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isRegister,
    setIsRegister,
    handleAuth,
  } = useAuth();

  return (
    <AuthForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isRegister={isRegister}
      setIsRegister={setIsRegister}
      handleAuth={handleAuth}
    />
  );
};

export default AuthPage;
