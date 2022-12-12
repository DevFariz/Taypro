import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Popup } from "../../components/popup/Popup";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
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

const PolicyText = styled.div`
  font-size: 12px;
  line-height: 150%;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: rgba(0, 0, 0, 0.87);
`;

const PolicyLink = styled.a.attrs({
  href: "/policy",
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

const LoginLink = styled(Link).attrs({ to: "/login" })`
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;
  color: #14b890;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUp = () => {
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonClickable, setIsButtonClickable] = useState(false);

  useEffect(() => {
    if (companyName && password && email) {
      setIsButtonClickable(true);
    } else {
      setIsButtonClickable(false);
    }
  }, [companyName, password, email]);

  return (
    <Wrapper>
      <Popup style={{ marginBottom: 16 }}>
        <form>
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
            value={companyName}
            onChange={setCompanyName}
          />
          <Input
            labelText="E-mail"
            placeholder="Введите E-mail"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <InputPassword
            labelText="Пароль"
            placeholder="Введите пароль"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <Button
            disabled={!isButtonClickable}
            onClick={() => {
              console.log(`Company ${companyName}`);
              console.log(`Email ${email}`);
              console.log(`Password ${password}`);
            }}
            style={{ marginBottom: 16 }}
          >
            Зарегистрироваться
          </Button>
          <PolicyText>
            Нажимая на кнопку, вы соглашаетесь с{" "}
            <PolicyLink>Политикой обработки персональных данных</PolicyLink>
          </PolicyText>
        </form>
      </Popup>
      <Text>
        Уже есть аккаунт? <LoginLink>Войти</LoginLink>
      </Text>
    </Wrapper>
  );
};

export default SignUp;
