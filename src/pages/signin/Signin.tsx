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