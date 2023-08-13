/*
  Sign In Component
  This component represents the user login screen of the application. It provides a form for users to input their email and password and authenticate themselves.

  The component includes:
  - State management for login fields (email and password) using the useState hook.
  - Access to the authentication context through the useAuth hook to handle user sign-in.
  - Event handlers for input changes and form submission.
  - Rendering of input fields (email and password) and a submit button.

  Example Usage:
  This component is used to display a login form where users can enter their credentials to access the application.
*/

import React, {useState} from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import { useAuth } from '../../hooks/auth';

import {
    Container,
    Logo,
    Form,
    FormTitle,
} from './styles';

type LoginFields = {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const [loginFields, setLoginFields] = useState<LoginFields>({
        email: 'admin@admin.com',
        password: '123'
    });

    const { signIn } = useAuth();
    const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginFields({
            ...loginFields,
            [name]: value
        })
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = loginFields;
        signIn(email, password)
    }

    return (
        <Container>
            <Logo>
                <h2>Automation Pyramid</h2>
            </Logo>

            <Form onSubmit={handleSubmitForm}>
                <FormTitle>Log in</FormTitle>

                <Input 
                    type="email"
                    name="email"
                    placeholder="Type your e-mail"
                    required
                    value={loginFields.email}
                    onChange={onChangeField} 
                    />
                <Input 
                    type="password"
                    name="password"
                    placeholder="Type your password"
                    value={loginFields.password}
                    required
                    onChange={onChangeField} 
                    />

                <Button type="submit">Enter</Button>
            </Form>
        </Container>
    );
}

export default SignIn;