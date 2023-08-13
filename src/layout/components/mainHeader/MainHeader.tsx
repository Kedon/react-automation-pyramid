import React, { useState } from "react";
import {Container, Profile } from "./styles";
import { useTheme } from "../../../hooks/theme";
import Toggle from "../../../components/toggle/Toggle";

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
    
    return (
        <Container>
            <Toggle 
            labelLeft="Light"
            labelRight="Dark"
            onChange={toggleTheme} 
            defaultChecked={true} />

            <Profile>
                Olá, Admin
            </Profile>
        </Container>
    );
};

export default MainHeader;