import React from 'react';
import {
  FiInfo, FiCheckCircle, FiXCircle, FiTrash2,
} from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  const icons = {
    error: (<FiXCircle size={20} />),
    success: (<FiCheckCircle size={20} />),
  };

  return (
    <Container>
      <Toast>
        <FiInfo size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>
        <button type="button">
          <FiTrash2 size={18} />
        </button>
      </Toast>

      <Toast type="error">
        <FiInfo size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>
        <button type="button">
          <FiTrash2 size={18} />
        </button>
      </Toast>

      <Toast type="success">
        <FiInfo size={20} />
        <div>
          <strong>Tudo certo</strong>
        </div>
        <button type="button">
          <FiTrash2 size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
