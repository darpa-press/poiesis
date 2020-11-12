import React from "react";
import styled from "styled-components";

import stressNotSure from "./stressBreak.svg";
import stressSoft from "./stressSoft.svg";
import stressStrong from "./stressStrong.svg";

const StressIconsDiv = styled.div`
    align-items: flex-end;
    color: rgba(255, 72, 72, 1);
    display: flex;
    flex: 0 0 1rem;
    overflow: hidden;
    padding-right: 1rem;
    position: absolute;
    top: 1.25rem;
    user-select: none;
    width: 100%;
    @media screen and (max-width: 767px) {
        top: 1rem;
    }
`;

export const StressItemNormal = styled.span``;
export const StressItemHover = styled.span``;

const StressItem = styled.div`
    flex: 1;
    z-index: 2;
    ${StressItemHover} {
        display: none;
    }
`;

export class LineStresses extends React.PureComponent {
    render() {
        const { wordAnalysis } = this.props;
        let { syllableCount } = this.props;
        syllableCount = syllableCount - (wordAnalysis.length - 1); // props syllable count includes number of syllables in this word
        return (
            <StressIconsDiv>
                {wordAnalysis.map((stress, stressIndex) => {
                    return (
                        <StressItem key={stressIndex}>
                            <StressItemNormal>
                                {stress && (
                                    <img
                                        alt=""
                                        src={
                                            stress === "P" || stress === "S"
                                                ? stressStrong
                                                : stress === "U"
                                                ? stressSoft
                                                : stressNotSure
                                        }
                                        height="16"
                                        width="16"
                                    />
                                )}
                            </StressItemNormal>
                            <StressItemHover>{syllableCount++}</StressItemHover>
                        </StressItem>
                    );
                })}
            </StressIconsDiv>
        );
    }
}
