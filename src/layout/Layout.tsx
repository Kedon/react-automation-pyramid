import React from "react";
import MainHeader from "./components/mainHeader/MainHeader";
import Aside from "./components/aside/Aside";
import Content from "./components/content/Content";
import GridLayout from "./styles";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <GridLayout>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </GridLayout>
    );
};

export default Layout;