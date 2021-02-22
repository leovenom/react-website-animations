import emailjs from 'emailjs-com';
import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, FormInputText } from './ContactElements';


const SignIn = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3t552xh', 'template_aky6j3h', e.target, 'user_12T6PVF5oIb4Wm6EGuEhu')
    .then((result) => {
      alert('Vielen Dank, ihre Mail wurde erfolgreich versendet!', result.status, result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
}

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>LAUENSTEIN</Icon>
          <FormContent>
            <Form onSubmit={sendEmail}>
              <FormH1>Ich freue mich über Ihre Nachricht</FormH1>
              <FormLabel htmlFor='for'>Name:</FormLabel>
                <FormInput htmlFor='nome' type="text" name='user_nome' placeholder="Ihr Name" required />
              <FormLabel htmlFor='for'>E-Mail:</FormLabel>
                <FormInput htmlFor='email' type='email' name='user_email' placeholder="kontakt@email.com" required />
              <FormLabel htmlFor='for'>Nachricht:</FormLabel>
                <FormInputText htmlFor='mensagem' name="user_message" placeholder="Ihre Nachricht" required />
              <FormButton type='submit' value='send'>Absenden</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn