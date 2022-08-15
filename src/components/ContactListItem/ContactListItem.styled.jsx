import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;

  :not(:last-child) {
    margin-bottom: 6px;

    border-bottom: 1px solid #5050503b;
  }
`;

export const ContactTextWrapper = styled.div`
  display: flex;
`;

export const ContactName = styled.span`
  min-width: 140px;
  font-weight: 600;
`;

export const Button = styled.button`
  width: 60px;
  height: 30px;
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
