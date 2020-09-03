import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  hasContent: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: #666360;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  width: 100%;
  display: flex;
  padding: 0 16px;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) => props.isFocused && css`
    color: #FF9000;
    border-color: #FF9000;
  `}

  ${(props) => props.hasContent && css`
    color: #FF9000;
  `}

  input {
    flex: 1;
    border: 0;
    color: #F4EDE8;
    padding: 16px 0;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 12px;
  }
`;
