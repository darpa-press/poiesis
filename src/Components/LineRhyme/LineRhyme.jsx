import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { templateList } from "Components/Templates/templateList";

const LineRhymeDiv = styled.div`
    align-items: flex-end;
    bottom: 0;
    color: #0d9dff;
    display: flex;
    flex: 0 0 2rem;
    font-size: 12px;
    font-weight: 600;
    justify-content: center;
    position: absolute;
    right: 2em;
    user-select: none;
`;

class LineRhyme extends React.PureComponent {
    render() {
        const { index, template } = this.props;
        const hasRhymes =
            templateList[template].rhymed &&
            templateList[template].lines[index];
        return hasRhymes ? (
            <LineRhymeDiv>
                {templateList[template].lines[index].rhyme}
            </LineRhymeDiv>
        ) : null;
    }
}

const mapStateToProps = state => ({
    template: state.options.template
});

export default connect(mapStateToProps)(LineRhyme);
