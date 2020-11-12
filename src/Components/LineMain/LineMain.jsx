import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { LineWord } from "./LineWord";

const LineMainDiv = styled.div`
    display: flex;
    flex: 1 1 100%;
`;

const LineWords = styled.div`
    display: flex;
    position: relative;
`;

const LineMain = ({ index }) => {
    const font = useSelector((state) => state.options.font);
    const showAnalysis = useSelector((state) => state.options.showAnalysis);
    const analysis = useSelector((state) => state.analysis.lines[index]);
    const line = useSelector((state) => state.lines[index]);

    // 'line' is the string of the line
    let wordArray = line.match(/[^\s-–—_]+[\s-–—_]*/g);

    // add start spaces if they exist
    const startSpaces = line.match(/^[\s-–—_]+/);
    let actualWordIndex = 0;
    let syllableCount = 0;

    return (
        <LineMainDiv>
            <LineWords>
                {startSpaces && startSpaces[0] && (
                    <LineWord font={font} word={startSpaces[0]} />
                )}

                {wordArray &&
                    wordArray.map((word, wordIndex) => {
                        const space = word.match(/[\s-–—_]+/);

                        const hasAlphanumeric = word.match(/[a-zA-Z0-9]/);

                        const wordAnalysis =
                            hasAlphanumeric &&
                            analysis &&
                            analysis.words &&
                            analysis.words[actualWordIndex] &&
                            analysis.words[actualWordIndex].stress;

                        if (wordAnalysis) {
                            actualWordIndex++;
                        }

                        if (
                            wordAnalysis &&
                            analysis.words[actualWordIndex - 1]
                        ) {
                            syllableCount =
                                syllableCount +
                                analysis.words[actualWordIndex - 1].stress
                                    .length;
                        }

                        return (
                            <React.Fragment key={wordIndex}>
                                <LineWord
                                    syllableCount={syllableCount}
                                    word={word.match(/[^\s-–—_]+/)[0]}
                                    showAnalysis={showAnalysis}
                                    wordAnalysis={wordAnalysis}
                                    font={font}
                                />
                                {space && space[0] && (
                                    <LineWord font={font} word={space[0]} />
                                )}
                            </React.Fragment>
                        );
                    })}
            </LineWords>
        </LineMainDiv>
    );
};

export default LineMain;
