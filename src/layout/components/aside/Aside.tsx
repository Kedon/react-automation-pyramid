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
                    <MenuItemLink href="/products">
                        Products
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