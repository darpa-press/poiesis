import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
    toggleOption,
    changeOption,
    fetchPrefill,
    handleSave,
    handleOpen
} from "actions";

// NB. Use only EM units in Menubar.

import MenubarHelp from "./MenubarHelp";
import MenuUnderlay from "./MenuUnderlay";
import MenuSection, { MenuSectionDiv, MenuSectionTitle } from "./MenuSection";
import menubarMap from "./MenubarMap";

export const MenubarDiv = styled.div`
    background: white;
    border-bottom: 1px solid #dedfe0;
    align-items: center;
    display: flex;
    font-size: 16px; /* hard-coded to allow for general font size changes */
    height: 2.5em;
    position: fixed;
    padding: 0 1.25em 0 0.625em;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    user-select: none;
`;

class Menubar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: -1,
            isMenuOpen: false
        };
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.menu = menubarMap(props);
    }

    handleClick(e) {
        this.setState({
            activeIndex: Number(e.currentTarget.getAttribute("data-index")),
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    handleHover(e) {
        if (this.state.isMenuOpen) {
            this.setState({
                activeIndex: Number(e.currentTarget.getAttribute("data-index"))
            });
        }
    }

    // TODO move isMenuOpen and activeIndex into redux

    toggleOverlay() {
        this.setState({ isMenuOpen: false });
    }

    render() {
        const { activeIndex, isMenuOpen } = this.state;
        return (
            <MenubarDiv>
                <MenuSectionDiv primary={true} as="a" href="/">
                    <MenuSectionTitle>Poiesis</MenuSectionTitle>
                </MenuSectionDiv>

                {this.menu.map((menu, menuIndex) => {
                    return (
                        <MenuSection
                            isMenuOpen={activeIndex === menuIndex && isMenuOpen}
                            key={menuIndex}
                            menuIndex={menuIndex}
                            title={menu.title}
                            sections={menu.sections}
                            handleOpen={this.handleClick}
                            handleHover={this.handleHover}
                            closeMenu={() =>
                                this.setState({ isMenuOpen: false })
                            }
                        />
                    );
                })}
                <MenubarHelp />
                {isMenuOpen && (
                    <MenuUnderlay toggleOverlay={this.toggleOverlay} />
                )}
            </MenubarDiv>
        );
    }
}

const mapStateToProps = state => ({
    font: state.options.font,
    lines: state.lines,
    showSidebar: state.options.showSidebar,
    showAnalysis: state.options.showAnalysis
});

const mapDispatchToProps = {
    changeOption: (option, setting) => changeOption(option, setting),
    changeFont: e =>
        changeOption(
            "font",
            e.currentTarget.getAttribute("data-selected-value")
        ),
    changeTemplate: e =>
        changeOption(
            "template",
            e.currentTarget.getAttribute("data-selected-value")
        ),
    toggleAnalysis: () => toggleOption("showAnalysis"),
    toggleSidebar: () => toggleOption("showSidebar"),
    toggleProse: () => toggleOption("isProseMode"),
    fetchPrefill: () => fetchPrefill(false),
    handleSave: lines => handleSave(lines),
    handleOpen: () => handleOpen(document.getElementById("file-chooser"))
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menubar);
