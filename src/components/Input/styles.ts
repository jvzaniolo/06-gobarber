import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  hasContent: boolean;
  hasError: boolean;
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

  ${(props) => props.hasError && css`
    border-color: #C53030;
  `}

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

export const Error = styled(Tooltip)`
  display: flex;
  margin-left: 12px;

  svg {
    margin: 0;
  }

  span {
    background: #C53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
