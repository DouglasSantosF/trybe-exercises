import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

//verifica se tem uma label com o texto Email e se o botão referente a ele é do tipo email.
test('Se na tela tem uma Label com o texto "Email"', () => {
   render(<App />);
  const inputEmail = screen.getByLabelText('Email');

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

// (getByRole) serve apenas pra encontrar um botão, como tem dois na tela ele dá erro
/* test('Verificando se existe um botão', () => {
  const { getByRole } = render(<App />);
  const btn = getByRole('button');
  expect(btn).toBeInTheDocument();
}); */

//serve pra pesquisar mais de um botão, ele poe todos os elementos do tipo pesquisado em um array
//No caso abaixo estamos testando se existe apenas dois botões, utilizando o tamanho do array(2).
test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2);
});

// acha o elemento atrav[es do data-testid="id-send" e depois verificamos se ele está na tela e se é um botão com o texto Enviar .
test('Verificando se existe um botão de enviar', () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar');
});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
