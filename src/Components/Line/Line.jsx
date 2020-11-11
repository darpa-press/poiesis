import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import LineStats from "Components/LineStats/LineStats";
import LineMain from "Components/LineMain/LineMain";
import LineRhyme from "Components/LineRhyme/LineRhyme";

const LineDiv = styled.div`
    border-bottom: 1px solid rgba(255, 72, 72, 0.25);
    border-bottom-color: ${(props) =>
        props.showAnalysis ? "rgba(41,137,252,.25)" : "transparent"};
    display: flex;
    flex-direction: row;
    height: 4rem;
    width: 100%;
    padding-right: 6rem;
    position: relative;
    user-select: none;
`;

const Line = ({ index }) => {
    const template = useSelector((state) => state.options.template);
    const showAnalysis = useSelector((state) => state.options.showAnalysis);

    return (
        <LineDiv className="main-line" showAnalysis={showAnalysis}>
            <LineStats index={index} />
            <LineMain index={index} />
            {template && <LineRhyme index={index} />}
        </LineDiv>
    );
};

export default Line;
