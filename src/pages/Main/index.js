import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton, Title } from './styles';

export default function Main() {
  return (
    <Container>
      <Title>
        <FaGithubAlt />
        Repositórios
      </Title>
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Pesquisar repositório" />
        <SubmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
