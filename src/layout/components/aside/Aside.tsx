import React from "react";
import {Container, MenuContainer, MenuItemLink, MenuItemButton, Header} from "./styles";

import { useAuth } from "../../../hooks/auth";

const Aside: React.FC = () => {

    const { signOut } = useAuth()
    return (
        <Container>
            <aside>
                <Header>Automation Pyramid</Header>
                <MenuContainer>
                    <MenuItemLink href="/dashboard">
                        Dashboard
                    </MenuItemLink>
                    <MenuItemLink href="/list/entry-balance">
                        Entradas
                    </MenuItemLink>
                    <MenuItemLink href="/list/exit-balance">
                        Saídas
                    </MenuItemLink>
                    <MenuItemButton onClick={signOut}>
                        Sair
                    </MenuItemButton>
                </MenuContainer>
            </aside>
        </Container>
    );
};

export default Aside;