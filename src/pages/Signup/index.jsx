/* eslint-disable */
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  AnimationContainer, Background, Container, Content,
} from './styles';
import  signUpThunk from '../../store/modules/userSignUp/thunks';
import Logo from '../../assets/images/logoDesktop.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Signup() {
  const [error, setError] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('Email inválido!').required('Campo obrigatório!'),
    password: yup
      .string()
      .min(8, 'Mínimo de 8 dígitos')
      .required('Campo obrigatório!'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas diferentes')
      .required('Campo obrigatório!'),
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

  const onSubmit = (registerData) => {
    dispatch(signUpThunk(registerData));
  };

  const route = () => {
    history.push('/login');
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section>
              <Link to="/login">
                <img src={Logo} alt={Logo} />
              </Link>
              <h2>MY PLANT</h2>
              <h3>Cadastro</h3>
            </section>
            <Input
              icon={FiUser}
              placeholder="Seu nome"
              name="name"
              register={register}
              error={errors.name?.message}
            />
            <Input
              icon={FiMail}
              placeholder="Seu melhor email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              icon={FiLock}
              placeholder="Uma senha bem segura"
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <Input
              icon={FiLock}
              placeholder="Confirmação da senha"
              type="password"
              name="passwordConfirm"
              register={register}
              error={errors.passwordConfirm?.message}
            />
            <div>
              <input type="checkbox" {...register('terms')} />
              <p>
                Eu li e aceito os
                {' '}
                <Link to="/login">termos de uso</Link>
              </p>
            </div>
            <span>{errors.terms?.message}</span>
            <Button type="submit">Cadastrar</Button>
            <p>
              Já tem uma conta?
              <Link to="/login">Entrar</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Signup;
