import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};

    border-bottom: solid 1px ${props => props.theme.colors.gray};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
    margin-right: 1rem;
    white-space: nowrap;
    font-size: 15px;
    display: flex;
    font-weight: 400;
`;