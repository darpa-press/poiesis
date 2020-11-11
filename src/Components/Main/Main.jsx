import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Line from "Components/Line/Line";
import TextEditor from "Components/TextEditor/TextEditor";

const MainDiv = styled.div`
    padding-top: 4.5rem;
    padding-bottom: 5.5rem;
    position: relative;
`;

const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    min-width: 100%;
`;

const Lines = styled.div`
    flex: 1 1 100%;
`;

const Main = () => {
    const isProseMode = useSelector((state) => state.options.isProseMode);
    const lines = useSelector((state) => state.lines);
    return (
        <MainDiv>
            <Wrapper>
                {!isProseMode && (
                    <Lines>
                        {lines.map((line, index) => (
                            <Line key={index} index={index} />
                        ))}
                    </Lines>
                )}
                <TextEditor />
            </Wrapper>
        </MainDiv>
    );
};

export default Main;
