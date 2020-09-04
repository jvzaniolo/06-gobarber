import React from 'react';
import {
  FiInfo, FiCheckCircle, FiXCircle, FiTrash2,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../hooks/Toast';

import { Container, Toast } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  const icons = {
    error: (<FiXCircle size={20} />),
    success: (<FiCheckCircle size={20} />),
  };

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} type={message.type}>
          {message.type ? icons[message.type] : <FiInfo size={20} />}
          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>
          <button type="button" onClick={() => removeToast(message.id)}>
            <FiTrash2 size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
