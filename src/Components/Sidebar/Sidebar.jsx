import React from "react";
import { connect } from "react-redux";
import { toggleOption } from "actions";

import {
    SidebarDiv,
    SidebarTitle,
    SidebarClose,
    SidebarContent
} from "./SidebarStyle";
import SidebarContentText from "./SidebarContentText";

const mapStateToProps = state => ({
    showSidebar: state.options.showSidebar
});

const mapDispatchToProps = {
    toggleOption: option => toggleOption(option)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(({ showSidebar, toggleOption }) => {
    return showSidebar ? (
        <SidebarDiv>
            <SidebarTitle>
                <SidebarClose
                    onClick={() => toggleOption("showSidebar", false)}
                >
                    Close
                </SidebarClose>
            </SidebarTitle>
            <SidebarContent>
                <SidebarContentText />
            </SidebarContent>
        </SidebarDiv>
    ) : (
        false
    );
});
