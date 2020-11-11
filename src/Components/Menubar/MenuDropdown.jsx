import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

export const MenuDropdownDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.3333em 0;
    &:not(:last-child) {
        border-bottom: 1px solid #e5e6e7;
    }
`;

export const MenuContent = styled.div`
    display: flex;
    padding: 0.333em 0.5em 0.333em 1.5em;
    position: relative;
    opacity: ${props => (props.disabled ? "0.5" : 1)};
    &:hover {
        background: ${props => (props.disabled ? "transparent" : "#eee")};
    }
    ::before {
        align-items: center;
        justify-content: center;
        content: "✓";
        display: ${props => (props.selected ? "flex" : "none")};
        position: absolute;
        top: 0;
        left: 0;
        width: 1.5em;
        padding-left: 0.1em;
        height: 1.8em;
    }
`;

export const MenuContentText = styled.div`
    flex: 1;
`;

export const MenuHotkey = styled.div`
    opacity: 0.5;
    margin-left: 1em;
`;

class MenuDropdown extends React.PureComponent {
    render() {
        const { section, options } = this.props;

        return (
            <MenuDropdownDiv>
                {section &&
                    section.length > 0 &&
                    section.map((item, itemIndex) => {
                        return (
                            <MenuContent
                                key={itemIndex}
                                onClick={item.action}
                                data-selected-value={item.selectedValue}
                                selected={
                                    item.selectedKey &&
                                    options[item.selectedKey] ===
                                        item.selectedValue
                                }
                            >
                                <MenuContentText>{item.title}</MenuContentText>
                                {item.hotkey && (
                                    <MenuHotkey>{item.hotkey}</MenuHotkey>
                                )}
                            </MenuContent>
                        );
                    })}
            </MenuDropdownDiv>
        );
    }
}

export default connect(state => ({
    options: state.options
}))(MenuDropdown);
