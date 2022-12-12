import { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
`;

const InputEl = styled.input.attrs(({ placeholder, type }) => ({
  type: type || "password",
  placeholder: placeholder,
}))`
  display: block;
  width: 100%;
  padding: 11px 14px;
  font-size: 14px;
  line-height: 18px;
  color: #9a9c9c;
  border: 1px solid #e3e1e1;
  border-radius: 8px;
  outline: none;
  margin-bottom: 32px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.3px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 5px;
`;

const InputPassword = ({ labelText, placeholder, type, value, onChange }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <>
      <Label>{labelText}</Label>
      <InputContainer>
        <InputEl
          placeholder={placeholder}
          type={passwordShown ? "text" : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <svg
          onClick={() => setPasswordShown(!passwordShown)}
          style={{
            position: "absolute",
            top: 13,
            right: 12,
            cursor: "pointer",
          }}
          width="20"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4" clipPath="url(#clip0_8115_45136)">
            <path
              d="M7.99984 3C4.6665 3 1.81984 5.07333 0.666504 8C1.81984 10.9267 4.6665 13 7.99984 13C11.3332 13 14.1798 10.9267 15.3332 8C14.1798 5.07333 11.3332 3 7.99984 3ZM7.99984 11.3333C6.15984 11.3333 4.6665 9.84 4.6665 8C4.6665 6.16 6.15984 4.66667 7.99984 4.66667C9.83984 4.66667 11.3332 6.16 11.3332 8C11.3332 9.84 9.83984 11.3333 7.99984 11.3333ZM7.99984 6C6.89317 6 5.99984 6.89333 5.99984 8C5.99984 9.10667 6.89317 10 7.99984 10C9.1065 10 9.99984 9.10667 9.99984 8C9.99984 6.89333 9.1065 6 7.99984 6Z"
              fill="#141A18"
              fillOpacity="0.6"
            />
          </g>
          <defs>
            <clipPath id="clip0_8115_45136">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </InputContainer>
    </>
  );
};

export default InputPassword;
