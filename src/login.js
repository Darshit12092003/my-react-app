import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  background-image: url('https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 90%;
  max-width: 400px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 10px;
`;

const AgreementText = styled.span`
  color: #FF5733;
`;

const ChangePasswordText = styled.p`
  text-align: left;
  margin-top: 10px;
`;

const Components = styled.div`
  display: flex;
  align-items: flex-start;
`;

function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleAgree = () => {
    setAgree(!agree);
  };

  return (
    <LoginContainer>
      <LoginForm>
        <FormHeader>Login</FormHeader>
        <FormInput type="text" placeholder="Username" />
        <FormInput type="password" placeholder="Password" />
        <Components>
           <div>
          <CheckboxContainer>
            <RememberMeCheckbox
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Remember Me
          </CheckboxContainer>
          <CheckboxContainer>
            <label>
              <RememberMeCheckbox
                type="checkbox"
                checked={agree}
                onChange={handleAgree}
              />
              I Agree to the <AgreementText>Terms and Conditions</AgreementText>
            </label>
          </CheckboxContainer>
          </div>
        </Components>
        <ChangePasswordText><AgreementText>Change Password</AgreementText></ChangePasswordText>
        <FormButton>Login</FormButton>
        <p>
          Don't have an account? <AgreementText>Sign up</AgreementText>
        </p>
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginPage;
