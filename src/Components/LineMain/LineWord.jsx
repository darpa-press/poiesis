import React from "react";
import styled from "styled-components";
import { fontList } from "Components/Fonts/Fonts";
import {
    LineStresses,
    StressItemNormal,
    StressItemHover,
} from "./LineStresses";

export const LineWordDiv = styled.div`
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    &:hover {
        ${StressItemNormal} {
            display: none;
        }
        ${StressItemHover} {
            display: inline;
            font-size: 0.75rem;
            font-weight: 600;
            position: relative;
            top: -0.25rem;
        }
    }
`;

export const LineWordWord = styled.div`
    color: #333;
    font-family: "${(props) => props.font}";
    font-size: ${(props) =>
        fontList[props.font] ? fontList[props.font].size : "2rem"};
    font-weight: ${(props) =>
        fontList[props.font] ? fontList[props.font].fontWeight : "500"};
    line-height: 3rem;
    position: relative;
    top: ${(props) =>
        fontList[props.font] ? fontList[props.font].baselineAdjust : "1rem"};
    /* flex: 0 0 3rem; */
    white-space: pre;
`;

export const LineWord = ({
    showAnalysis,
    word,
    wordAnalysis,
    font,
    syllableCount,
}) => (
    <LineWordDiv>
        {wordAnalysis && showAnalysis && (
            <LineStresses
                syllableCount={syllableCount}
                wordAnalysis={wordAnalysis}
            />
        )}
        <LineWordWord font={font}>{word}</LineWordWord>
    </LineWordDiv>
);
