import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
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

class Main extends React.PureComponent {
    render() {
        const {
            font,
            isProseMode,
            lines,
            linesAnalysis,
            showAnalysis,
            template
        } = this.props;
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
    }
}

const mapStateToProps = state => ({
    lines: state.lines,
    linesAnalysis: state.analysis,
    font: state.options.font,
    template: state.options.template,
    showAnalysis: state.options.showAnalysis,
    isProseMode: state.options.isProseMode
});

export default connect(mapStateToProps)(Main);
