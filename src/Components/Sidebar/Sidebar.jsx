import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleOption } from "actions";

import {
    SidebarDiv,
    SidebarTitle,
    SidebarClose,
    SidebarContent,
} from "./SidebarStyle";
import SidebarContentText from "./SidebarContentText";

const Sidebar = () => {
    const showSidebar = useSelector((state) => state.options.showSidebar);
    const dispatch = useDispatch();

    return showSidebar ? (
        <SidebarDiv>
            <SidebarTitle>
                <SidebarClose
                    onClick={() => dispatch(toggleOption("showSidebar", false))}
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
};

export default Sidebar;
