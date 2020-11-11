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
    const font = useSelector((state) => state.options.font);
    const isProseMode = useSelector((state) => state.options.isProseMode);
    const lines = useSelector((state) => state.lines);
    const linesAnalysis = useSelector((state) => state.analysis);
    const template = useSelector((state) => state.options.template);
    const showAnalysis = useSelector((state) => state.options.showAnalysis);

    return (
        <MainDiv>
            <Wrapper>
                {!isProseMode && (
                    <Lines>
                        {lines.map((line, index) => (
                            <Line
                                key={index}
                                index={index}
                                line={line}
                                analysis={linesAnalysis[index]}
                                font={font}
                                showAnalysis={showAnalysis}
                                template={template}
                            />
                        ))}
                    </Lines>
                )}
                <TextEditor />
            </Wrapper>
        </MainDiv>
    );
};

export default Main;
