import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { templateList } from "Components/Templates/templateList";

const LineStatsDiv = styled.div`
    opacity: ${props => (props.showAnalysis ? "1" : "0")};
    display: flex;
    font-size: 12px; /* use only PX values for these */
    font-weight: 600;
    flex: 0 0 6rem;
    align-items: flex-end;
    justify-content: center;
    user-select: none;

    @media screen and (max-width: 767px) {
        flex-basis: 3rem;
    }
`;

const ActualNo = styled.div`
    color: rgba(255, 72, 72, 1);
`;
const TemplateNo = styled.div`
    color: #0d9dff;
    margin-right: 1em;
`;

class LineStats extends React.Component {
    render() {
        const { index, showAnalysis, analysis, template } = this.props;

        let actualSyllables =
            analysis && analysis.noOfSyllables && analysis.noOfSyllables !== 0
                ? analysis.noOfSyllables
                : null;

        const templateLine =
            template &&
            ((templateList[template].fixedLines &&
                templateList[template].lines[index]) ||
                (!templateList[template].fixedLines &&
                    templateList[template].lines[0]));
        let templateSyllables =
            templateLine && templateLine.syllables
                ? templateLine.syllables.replace("|", "").length
                : false;

        return (
            <LineStatsDiv showAnalysis={showAnalysis}>
                <TemplateNo>{templateSyllables}</TemplateNo>
                <ActualNo>{actualSyllables}</ActualNo>
            </LineStatsDiv>
        );
    }
}

const mapStateToProps = state => ({
    template: state.options.template
});

export default connect(mapStateToProps)(LineStats);