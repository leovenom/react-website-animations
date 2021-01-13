import emailjs from 'emailjs-com';
import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, FormInputText } from './ContactElements'

const SignIn = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wyz50yt', 'template_pxi9lbh', e.target, 'user_12T6PVF5oIb4Wm6EGuEhu')
    .then((result) => {
      alert('E-mail enviado com sucesso.', result.status, result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
}

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>HAJO</Icon>
          <FormContent>
            <Form onSubmit={sendEmail}>
              <FormH1>Fale conosco</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput htmlFor='nome' name='user_nome' placeholder="Your name" required />
              <FormLabel htmlFor='for'>E-mail</FormLabel>
                <FormInput htmlFor='email' type='email' name='user_email' placeholder="contact@email.com" required />
              <FormLabel htmlFor='for'>Message</FormLabel>
                <FormInputText htmlFor='mensagem' name="user_message" placeholder="Your messagem heree" required />
              <FormButton type='submit' value='send'>Send</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn