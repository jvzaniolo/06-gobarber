import React, { useEffect } from 'react';
import {
  FiInfo, FiCheckCircle, FiXCircle, FiTrash2,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/Toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: Record<string, unknown>;
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  const icons = {
    info: <FiInfo size={24} />,
    error: <FiXCircle size={24} />,
    success: <FiCheckCircle size={24} />,
  };

  return (
    <Container style={style} type={message.type}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button type="button" onClick={() => removeToast(message.id)}>
        <FiTrash2 size={18} />
      </button>
    </Container>
  );
};

export default Toast;
