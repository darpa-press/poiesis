import React from "react";
import styled from "styled-components";

import LineStats from "Components/LineStats/LineStats";
import LineMain from "Components/LineMain/LineMain";
import LineRhyme from "Components/LineRhyme/LineRhyme";

const LineDiv = styled.div`
    border-bottom: 1px solid rgba(255, 72, 72, 0.25);
    border-bottom-color: ${props =>
        props.showAnalysis ? "rgba(41,137,252,.25)" : "transparent"};
    display: flex;
    flex-direction: row;
    height: 4rem;
    width: 100%;
    padding-right: 6rem;
    position: relative;
    user-select: none;
`;

class Line extends React.PureComponent {
    render() {
        const {
            index,
            line,
            analysis,
            showAnalysis,
            font,
            template
        } = this.props;
        return (
            <LineDiv className="main-line" showAnalysis={showAnalysis}>
                <LineStats
                    index={index}
                    analysis={analysis}
                    showAnalysis={showAnalysis}
                />
                <LineMain
                    line={line}
                    analysis={analysis}
                    showAnalysis={showAnalysis}
                    font={font}
                />
                {template && <LineRhyme index={index} />}
            </LineDiv>
        );
    }
}

export default Line;
