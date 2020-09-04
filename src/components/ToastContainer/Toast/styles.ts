import styled, { css, keyframes } from 'styled-components';
import { animated } from 'react-spring';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ContainerProps {
  type?: 'success' | 'error';
}

const toastTypeVariations = {
  info: css`
    color: #ebf8ff;
    background: #3172b7;
  `,
  success: css`
    color: #e6fffa;
    background: #2e656a;
  `,
  error: css`
    color: #fddede;
    background: #c53030;
  `,
};

export const Container = styled(animated.div) <ContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 2px 12px 0 0;
  }

  > div {
    flex: 1;

    > p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    top: 8px;
    border: 0;
    right: 8px;
    opacity: 0.6;
    color: inherit;
    position: absolute;
    background: transparent;
  }
`;
