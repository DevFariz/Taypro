import styled from "styled-components";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Popup } from "../../components/popup/Popup";
import { Wrapper } from "../../components/popup/Wrapper";
import Input from "../../components/inputs/Input";
import InputPassword from "../../components/inputs/InputPassword";

import { FcGoogle } from "react-icons/fc";

const LoginGoogle = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  padding: 11px 16px;
  color: rgba(20, 184, 144, 1);
  background: none;
  border: 1px solid rgba(20, 184, 144, 1);
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: 0.2s;

  &:hover {
    color: #fff;
    background: rgba(20, 184, 144, 0.8);
    border: 1px solid rgba(20, 184, 144, 0.8);
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #9a9c9c;
  margin-bottom: 24px;
`;

const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ForgotPassBtn = styled.a.attrs({
  href: "/forgot-pass",
})`
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginLink = styled.a.attrs({ href: "/login" })`
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;
  color: #14b890;

  &:hover{
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <Wrapper>
      <Popup style={{ marginBottom: 16 }}>
        <Title>Авторизация</Title>
        <LoginGoogle>
          <span style={{ marginRight: 8 }}>Войти с помощью</span>
          <FcGoogle size={16} />
        </LoginGoogle>
        <Text>Или с помощью почты и пароля</Text>
        <Input labelText="E-mail" placeholder="Введите E-mail" type="email" />
        <InputPassword
          labelText="Пароль"
          placeholder="Введите пароль"
          type="password"
        />
        <BtnsContainer>
          <Button style={{ marginRight: 28 }}>Войти</Button>
          <ForgotPassBtn>Забыли пароль?</ForgotPassBtn>
        </BtnsContainer>
      </Popup>
      <Text>
        У вас нет аккаунта? <LoginLink>Зарегистрироваться</LoginLink>
      </Text>
    </Wrapper>
  );
};

export default Login;
