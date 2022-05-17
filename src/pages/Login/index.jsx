/* eslint-disable */
import React, { useState } from 'react';

import { FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../../store/modules/user/thunks';

import {
  Container, Background, Content, AnimationContainer,
} from './styles';

import Logo from '../../assets/images/logoDesktop.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('Email inválido!').required('Campo obrigatório!'),
    password: yup.string().min(8, 'Mínimo de 8 dígitos').required('Campo obrigatório!'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Senhas diferentes').required('Campo obrigatório!'),
    terms: yup.boolean().isTrue('Você não aceitou os termos de uso!'),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(signUpThunk(data));
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section>
              <img src={Logo} alt={Logo} />
              <h2>MY PLANT</h2>
              <h3>Busque, conheça, cuide!</h3>
            </section>
            <h4>Já possui uma conta?</h4>
            <Input
              icon={FiMail}
              placeholder="Seu email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              icon={FiLock}
              placeholder="Sua senha"
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <Button type="submit">Entrar</Button>
            <p>
              Ainda não possui conta?
            </p>
            <Link to="/"><Button GreenSchema>Cadastrar</Button></Link>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
