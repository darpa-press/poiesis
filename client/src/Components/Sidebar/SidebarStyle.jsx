import styled from "styled-components";

export const SidebarDiv = styled.div`
    background: white;
    border-left: 1px solid #dedfe0;
    display: flex;
    flex-direction: column;
    font-size: 16px; /* hard-coded to allow for general font size changes */
    height: 100%;
    max-width: 21em;
    overflow: auto;
    padding: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 100;
`;
export const SidebarTitle = styled.div`
    height: 2.5em;
    display: flex;
    align-items: center;
    padding: 0 1em;
    user-select: none;
`;

export const SidebarContent = styled.div`
    padding: 0 1em 1em;
    display: flex;
    flex: 1;
    flex-direction: column;
    font-weight: 400;
    line-height: 1.5;
    font-variant-numeric: tabular-nums;

    a {
        color: #555;
        &:hover {
            color: black;
        }
    }

    dl {
        display: flex;
        margin: 0 0 0.5em;
    }

    dt {
        flex: 0 0 16px;
        padding-right: 0.5em;
    }
    dd {
        margin-left: 0;
    }
`;

export const SidebarClose = styled.span`
    cursor: pointer;
    color: #555;
    margin-left: auto;
    &:hover {
        color: black;
    }
`;
