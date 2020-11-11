import React from "react";
import { connect } from "react-redux";
import { updateLines, compareLines } from "actions";
import { TextArea } from "./TextAreaStyle";

const handleKeyPress = (event, ref, updateLines) => {
    if (event.key === "Tab") {
        event.preventDefault();
        const start = event.target.selectionStart,
            end = event.target.selectionEnd;
        const newString = `${event.target.value.slice(
            0,
            start
        )}    ${event.target.value.slice(end)}`;
        event.target.value = newString;
        ref.current.selectionStart = start + 4;
        ref.current.selectionEnd = start + 4;
        updateLines(event.target.value.split("\n")); // gotta fire manually
    }
};

class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proseModeScrollHeight: 360,
        };
    }
    componentDidUpdate(prevProps) {
        if (
            JSON.stringify(prevProps.lines) !== JSON.stringify(this.props.lines)
        ) {
            this.props.compareLines(
                prevProps.lines,
                prevProps.analysis,
                this.props.lines
            );
        }
    }

    calculateHeightInProseMode(e) {
        this.setState({ proseModeScrollHeight: e.target.scrollHeight });
    }

    render() {
        const {
            font,
            isProseMode,
            lines,
            loadingPrefill,
            placeholder,
            showAnalysis,
            updateLines,
        } = this.props;
        const { proseModeScrollHeight } = this.state;

        const textareaRef = React.createRef();
        return (
            <TextArea
                autoFocus
                font={font}
                noOfLines={lines.length}
                onChange={(e) => updateLines(e.target.value.split("\n"))}
                onKeyDown={(e) => {
                    if (isProseMode) {
                        this.calculateHeightInProseMode(e);
                    }
                    handleKeyPress(e, textareaRef, updateLines);
                }}
                placeholder={loadingPrefill ? "Conjuring..." : placeholder}
                proseModeScrollHeight={proseModeScrollHeight}
                ref={textareaRef}
                showPlaceholder={lines.join("") === ""}
                showText={isProseMode}
                spellCheck={showAnalysis}
                value={lines.join("\n")}
                wordWrap={isProseMode}
                wrap={isProseMode ? "on" : "off"}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    analysis: state.analysis,
    font: state.options.font,
    isProseMode: state.options.isProseMode,
    lines: state.lines,
    loadingPrefill: state.loading.loadingPrefill,
    placeholder: state.placeholder,
    showAnalysis: state.options.showAnalysis,
});

const mapDispatchToProps = {
    compareLines: (oldLines, oldAnalysis, newLines) =>
        compareLines(oldLines, oldAnalysis, newLines),
    updateLines: (lines) => updateLines(lines),
};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
