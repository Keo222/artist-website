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
  text-transform: uppercase;
  color: #eee;
  margin-top: 15rem;
`;

const LoginForm = styled.form`
  /* display: flex; */
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
