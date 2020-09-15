import styled from "styled-components";

export const Form = styled.form`
  padding: 16px 20px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  padding: 18px 0;
  text-align: center;
`;

export const Error = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: red;
  text-align: center;
`;
