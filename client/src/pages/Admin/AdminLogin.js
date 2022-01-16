import React from "react";
import styled from "styled-components";

import { Heading } from "../../StyledElements/typography";

const AdminLoginPage = styled.div`
  text-align: center;
  background: #444;
  height: 100vh;
`;

const Logo = styled(Heading)`
  display: block;
  font-size: 8rem;
  margin-top: 0;
`;

const AdminHeading = styled.h1`
  font-size: 3rem;
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  color: #eee;
  margin-top: 5rem;
`;

const LoginForm = styled.form`
  margin-top: 8rem;
`;

const LoginLabel = styled.label`
  color: #eee;
  font-size: 1.6rem;
  margin-right: 1rem;
`;

const LoginInput = styled.input`
  margin-right: 3rem;
  background: #eee;
  border: none;
  border-radius: 3px;

  &:focus {
    box-sizing: border-box;
    outline: none;
    outline: 2px solid yellowgreen;
    box-shadow: 0 3px 8px 5px rgba(0, 0, 0, 0.2);
  }
`;

const AdminLogin = () => {
  return (
    <AdminLoginPage>
      <Logo>FW</Logo>
      <AdminHeading>Admin Login</AdminHeading>
      <LoginForm>
        <LoginLabel>Username:</LoginLabel>
        <LoginInput type="text" />
        <LoginLabel>Password:</LoginLabel>
        <LoginInput type="password" />
      </LoginForm>
    </AdminLoginPage>
  );
};

export default AdminLogin;
