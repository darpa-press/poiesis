import React from "react";
import MenuDropdown, { MenuContent, MenuDropdownDiv } from "./MenuDropdown";
import styled from "styled-components";

export const MenuContents = styled.div`
    background: white;
    border-top: 1px solid #f1f2f3;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
    display: none;
    flex-direction: column;
    position: absolute;
    top: 2.47em;
    left: 0em;
    width: 17em;
    z-index: 10;
`;

export const MenuSectionTitle = styled.div`
    height: 2.5em;
    line-height: 2.5em;
    padding: 0 0.625em;
`;

export const MenuSectionDiv = styled.div`
    cursor: ${props => (props.disabled ? "not-allowed" : "default")};
    color: #444;
    font-weight: ${props => (props.primary ? "600" : "400 ")};
    margin-left: ${props => (props.flush ? "auto" : "0")};
    position: relative;

    @media screen and (max-width: 767px) {
        display: ${props => (props.disabled ? "none" : "inherit")};
    }

    @media screen and (max-width: 375px) {
        display: ${props => (props.primary ? "none" : "block")};
    }

    ${MenuContents} {
        display: ${props => (props.open ? "flex" : "none")};
    }

    ${MenuSectionTitle} {
        background: ${props => (props.open ? "#eee" : "transparent")};
    }
`;

export default class extends React.PureComponent {
    render() {
        const {
            menuIndex,
            isMenuOpen,
            title,
            sections,
            handleOpen,
            handleHover,
            closeMenu
        } = this.props;

        return (
            <MenuSectionDiv open={isMenuOpen} data-index={menuIndex}>
                <MenuSectionTitle
                    onClick={handleOpen}
                    onMouseEnter={handleHover}
                    data-index={menuIndex}
                >
                    {title}
                </MenuSectionTitle>
                <MenuContents onClick={closeMenu}>
                    {sections.length === 0 && (
                        <MenuDropdownDiv>
                            <MenuContent disabled={true}>∞</MenuContent>
                        </MenuDropdownDiv>
                    )}
                    {sections.map((section, sectionIndex) => (
                        <MenuDropdown section={section} key={sectionIndex} />
                    ))}
                </MenuContents>
            </MenuSectionDiv>
        );
    }
}
