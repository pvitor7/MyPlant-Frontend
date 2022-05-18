/* eslint-disable */
import React from 'react';
import Container from './styles';

function Button({ children, GreenSchema = false, ...rest }) {
  return (
    <Container GreenSchema={GreenSchema} type="button" {...rest}>
      {children}
    </Container>
  );
}

export default Button;
