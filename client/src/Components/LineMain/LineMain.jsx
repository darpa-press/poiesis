import React from "react";
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

class LineMain extends React.PureComponent {
    render() {
        const { font, showAnalysis, analysis, line } = this.props;
        let wordArray = line.match(/[^\s-–—_]+[\s-–—_]*/g);
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
                            const wordAnalysis =
                                analysis &&
                                analysis.stresses &&
                                analysis.stresses[actualWordIndex];
                            actualWordIndex++;
                            if (
                                wordAnalysis &&
                                analysis.stresses[actualWordIndex - 1]
                            ) {
                                syllableCount =
                                    syllableCount +
                                    analysis.stresses[actualWordIndex - 1]
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
    }
}

export default LineMain;
