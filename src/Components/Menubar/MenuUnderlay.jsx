import React from "react";
import styled from "styled-components";

export const MenuUnderlayDiv = styled.div`
    display: block;
    z-index: 9;
    background: rgba(255, 255, 255, 0);
    width: 100%;
    height: calc(100% - 2.5em);
    position: fixed;
    top: 2.5em;
`;

export default class extends React.PureComponent {
    render() {
        const { toggleOverlay } = this.props;
        return <MenuUnderlayDiv onClick={toggleOverlay} />;
    }
}
