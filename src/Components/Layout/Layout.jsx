import React from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import { PoemTitleConnected } from "./Title";
import { PreloadFonts } from "Components/Fonts/Fonts";
import Main from "Components/Main/Main";
import Menubar from "Components/Menubar/Menubar";
import Sidebar from "Components/Sidebar/Sidebar";
import FileInput from "Components/FileInput/FileInput";
import HotKeys from "Components/HotKeys/HotKeys";

import "Components/Fonts/fonts.css";

const LayoutDiv = styled.div`
    -webkit-font-smoothing: antialiased;
    background: white;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    left: 0;
    overflow: auto;
    top: 0;
    min-width: 100%;
`;

class Layout extends React.PureComponent {
    render() {
        return (
            <>
                <>
                    <GlobalStyles />
                    <PreloadFonts />
                    <HotKeys />
                    <PoemTitleConnected />
                </>
                <LayoutDiv>
                    <Menubar />
                    <Main />
                    <Sidebar />
                </LayoutDiv>
                <>
                    <FileInput />
                </>
            </>
        );
    }
}

export default Layout;
