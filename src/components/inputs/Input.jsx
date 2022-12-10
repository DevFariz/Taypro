import styled from "styled-components";

const InputEl = styled.input.attrs(({placeholder, type}) => ({
  type: type || "text",
  placeholder: placeholder
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
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.3px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 5px;
`;

const Input = ({labelText, placeholder, type}) => {
  return (
    <>
      <Label>{labelText}</Label>
      <InputEl placeholder={placeholder} type={type}/>
    </>
  );
};

export default Input;
