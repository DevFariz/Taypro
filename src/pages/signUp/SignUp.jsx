import styled from "styled-components";

import { Popup } from "../../components/Popup";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import Input from "../../components/inputs/Input";
import InputPassword from "../../components/inputs/InputPassword";

import { FcGoogle } from "react-icons/fc";

const Wrapper = styled.div`
  background: #e3e3e3;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
    border: 1px solid rgba(20, 184, 144, 0ю8);
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #9a9c9c;
  margin-bottom: 24px;
`;

const PolicyText = styled.div`
  font-size: 12px;
  line-height: 150%;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: rgba(0, 0, 0, 0.87);
`;

const PolicyLink = styled.a.attrs({
  href: "/12",
})`
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.3px;
  color: #9a9c9c;

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

const SignUp = () => {
  return (
    <Wrapper>
      <Popup style={{ marginBottom: 16 }}>
        <Title>Регистрация компании</Title>
        <LoginGoogle>
          <span style={{ marginRight: 8 }}>Зарегистрироваться с помощью</span>
          <FcGoogle size={16} />
        </LoginGoogle>
        <Text>Или с помощью формы</Text>
        <Input
          labelText="Название"
          placeholder="Введите название компании"
          type="text"
        />
        <Input labelText="E-mail" placeholder="Введите E-mail" type="email" />
        <InputPassword
          labelText="Пароль"
          placeholder="Введите пароль"
          type="password"
        />
        <Button style={{ marginBottom: 16 }}>Зарегистрироваться</Button>
        <PolicyText>
          Нажимая на кнопку, вы соглашаетесь с{" "}
          <PolicyLink>Политикой обработки персональных данных</PolicyLink>
        </PolicyText>
      </Popup>
      <Text>
        Уже есть аккаунт? <LoginLink>Войти</LoginLink>
      </Text>
    </Wrapper>
  );
};

export default SignUp;
