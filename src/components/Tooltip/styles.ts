import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #FF9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: all 200ms;

    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, 0);

    color: #312E28;

    &::before {
      content: '';
      top: 100%;
      left: 50%;
      position: absolute;
      border-style: solid;
      border-color: #FF9000 transparent;
      transform: translateX(-50%);
      border-width: 6px 6px 0 6px;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -12px);
  }
`;
