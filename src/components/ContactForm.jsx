import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { StyledButton } from './Button';
import { ReactComponent as Warning } from 'assets/images/form/worning.svg';

const Error = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  margin-top: 2px;
  color: red;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  margin-top: 22px;
  height: 45px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;
const Input = styled(Field)`
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  line-height: 1.4;
  background-color: ${({ theme }) => theme.colorBackground};
  color: ${({ theme }) => theme.colorFormText};
  border: 1px solid ${({ theme }) => theme.colorBorderForm};
  &:hover,
  &:focus,
  &:active {
    outline: ${({ theme }) => theme.colorGreenBackground} solid 1px;
  }
  &:focus + label,
  &:hover + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-40px);
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
const Label = styled.label`
  position: absolute;
  left: 8px;
  top: 30%;
  font-size: 16px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colorFormText};
  transform: translateY(-30%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    transform: translateY(-40px);
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled(StyledButton)`
  width: 100%;
  height: 42px;
  margin-top: 35px;
  color: ${({ theme }) => theme.colorSecondFont};
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.colorGreenBackground};
    color: ${({ theme }) => theme.colorSecondFont};
  }
  @media screen and (min-width: 768px) {
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1360px) {
    margin-top: 60px;
  }
`;

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!'),
  email: Yup.string()
    .email('Invalid email')
    .required('This is a required field'),
});
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function ContactForm() {
  return (
    <Formik
      initialValues={{ email: '', name: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...values }),
        })
          .then(() => {
            alert('Success!');
            actions.resetForm({
              values: {
                email: '',
                name: '',
              },
            });
          })
          .catch(error => alert(error));
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <input type="hidden" name="form-name" value="contact" />
          <InputWrapper>
            <Input type="text" name="name" placeholder=" " />
            <Label htmlFor="name">Enter your name</Label>
            {errors.name && touched.name ? <Error>{errors.name}</Error> : null}
          </InputWrapper>
          <InputWrapper>
            <Input type="email" name="email" placeholder=" " />
            <Label htmlFor="email">Enter email*</Label>
            {errors.email && touched.email ? (
              <Error>
                <Warning />
                {errors.email}
              </Error>
            ) : null}
          </InputWrapper>

          <Button
            type="submit"
            color="colorGreenBackground"
            disabled={isSubmitting}
          >
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
}
