import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  border: 0;
  height: 56px;
  background: #FF9000;
  border-radius: 10px;
  padding: 0 16px;
  color: #312E28;
  width: 100%;
  margin-top: 16px;
  font-weight: 500;
  transition: background-color 200ms;

  &:hover {
    background: ${shade(0.2, '#FF9000')}
  }
`;
