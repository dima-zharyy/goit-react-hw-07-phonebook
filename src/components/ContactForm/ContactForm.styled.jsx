import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 20px;
  padding: 16px;

  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

export const InnerFormContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const FormLabel = styled.label`
  min-width: 70px;

  font-weight: 600;
`;

export const FormInput = styled.input`
  width: 100%;
  padding-left: 6px;
  border-bottom: 1px solid #505050;

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  margin: 0 auto;
  padding: 0;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.87;

  color: #ffffff;

  background-color: #188ae8a6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;
