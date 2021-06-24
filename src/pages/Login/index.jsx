import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../style/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>Lorem Ipsum</Title>
      <Paragrafo>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
        laborum reiciendis impedit minima sunt quam blanditiis eveniet tempora,
        rem quisquam, perferendis magni non magnam distinctio! Iste quisquam at
        iure. Tempore.
      </Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
