import styled from "styled-components";
import { fontList } from "Components/Fonts/Fonts";

export const TextArea = styled.textarea`
    -webkit-text-fill-color: ${(props) =>
        props.showPlaceholder || props.showText ? "auto" : "rgba(0,0,0,0)"};
    align-items: flex-end;
    background: transparent;
    border: none;
    box-shadow: none;
    /* display: flex; */
    font-family: "${(props) => props.font}";
    font-size: ${(props) => fontList[props.font].size};
    font-weight: ${(props) =>
        fontList[props.font] ? fontList[props.font].fontWeight : "500"};
    line-height: ${(props) => (props.wordWrap ? "2.5rem" : "4rem")};
    height: ${(props) =>
        props.wordWrap ? `inherit` : `${props.noOfLines * 4}rem`};
    margin: 0;
    max-width: ${(props) => (props.wordWrap ? "45rem" : "none")};
    outline: none !important;
    overflow: visible !important;
    padding: 0;
    position: absolute;
    padding-left: 6rem;
    resize: none;
    top: 1.5rem;
    top: ${(props) =>
        fontList[props.font]
            ? `calc(0.5rem + ${fontList[props.font].baselineAdjust})`
            : "1.5rem"};
    flex: 1 0 100%;
    white-space: ${(props) => (props.wordWrap ? "normal" : "pre")};
    width: 100%;

    &::placeholder {
        color: #ccc;
    }

    @media screen and (max-width: 767px) {
        padding-left: 3rem; /* linked to other component, change in both spots. */
    }
`;
