import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleOption } from "actions";

export const MenubarHelpDiv = styled.div`
    margin-left: auto;
    letter-spacing: 1px;
    color: #555;
    cursor: pointer;
    &:hover {
        color: black;
    }
`;

class MenubarHelp extends React.PureComponent {
    render() {
        const { toggleOption } = this.props;
        return <MenubarHelpDiv onClick={toggleOption}>???</MenubarHelpDiv>;
    }
}

export default connect(
    null,
    {
        toggleOption: () => toggleOption("showSidebar")
    }
)(MenubarHelp);
