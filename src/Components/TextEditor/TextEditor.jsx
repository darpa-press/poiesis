import React, { useState, useEffect } from "react";
import usePrevious from "@hooks/previous";
import { connect, useSelector } from "react-redux";
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

const TextEditor = ({ updateLines }) => {
    const analysis = useSelector((state) => state.analysis);
    const lines = useSelector((state) => state.lines);
    const loadingPrefill = useSelector((state) => state.loading.loadingPrefill);
    const placeholder = useSelector((state) => state.placeholder);
    const showAnalysis = useSelector((state) => state.options.showAnalysis);
    const font = useSelector((state) => state.options.font);
    const isProseMode = useSelector((state) => state.options.isProseMode);

    const [proseModeScrollHeight, setProseModeScrollHeight] = useState(360);

    const prevLines = usePrevious(lines);
    const prevAnalysis = usePrevious(analysis);

    useEffect(() => {
        if (prevLines && prevAnalysis) {
            compareLines(prevLines, prevAnalysis, lines);
        }
    }, [lines, prevLines, prevAnalysis]);

    const calculateHeightInProseMode = (e) => {
        setProseModeScrollHeight(e.target.scrollHeight);
    };

    const textareaRef = React.createRef();
    return (
        <TextArea
            autoFocus
            font={font}
            noOfLines={lines.length}
            onChange={(e) => updateLines(e.target.value.split("\n"))}
            onKeyDown={(e) => {
                if (isProseMode) {
                    calculateHeightInProseMode(e);
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
};

const mapStateToProps = (state) => ({
    analysis: state.analysis,
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
