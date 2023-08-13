import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.black};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    > h2 {
        color: ${props => props.theme.colors.white}; 
        margin-left: 7px;
        font-weight: 400;
        font-size: 22px;
    }

    > img {
        width: 40px;
        height: 40px;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;

    padding: 30px;

    border-radius: 0px;

    background-color: ${props => props.theme.colors.tertiary};

    border: 1px solid ${props => props.theme.colors.gray};
`;

export const FormTitle = styled.h1`
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 22px;
    color: ${props => props.theme.colors.white}; 
    text-align: center;
`;

