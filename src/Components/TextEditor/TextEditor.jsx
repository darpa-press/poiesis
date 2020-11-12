import React, { useEffect, useRef } from "react";
import usePrevious from "@hooks/previous";
import { useSelector, useDispatch } from "react-redux";
import { updateLines, fetchStats, compareLines } from "actions";
import { TextArea } from "./TextAreaStyle";

const handleKeyPress = (event, ref, updateLines, dispatch, lines) => {
    if (event.key === " " || event.key === "Enter") {
        dispatch(fetchStats(lines.join("\n")));
    }

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
        dispatch(updateLines(event.target.value.split("\n"))); // gotta fire manually
    }
};

const TextEditor = () => {
    const analysis = useSelector((state) => state.analysis.lines);
    const lines = useSelector((state) => state.lines);
    const loadingPrefill = useSelector((state) => state.loading.loadingPrefill);
    const placeholder = useSelector((state) => state.placeholder);
    const showAnalysis = useSelector((state) => state.options.showAnalysis);
    const font = useSelector((state) => state.options.font);
    const isProseMode = useSelector((state) => state.options.isProseMode);

    const dispatch = useDispatch();

    const prevLines = usePrevious(lines);
    const prevAnalysis = usePrevious(analysis);

    useEffect(() => {
        if (prevLines && prevAnalysis) {
            dispatch(compareLines(prevLines, prevAnalysis, lines));
        } else {
            dispatch(
                compareLines(
                    lines.map((line) => []),
                    lines.map((line) => []),
                    lines
                )
            );
        }
    }, [lines, prevLines, prevAnalysis, dispatch]);

    const textareaRef = useRef();

    useEffect(() => {
        if (!isProseMode) {
            textareaRef.current.removeAttribute("style");
        } else {
            textareaRef.current.style.height = "0px";
            const scrollHeight = Number(textareaRef.current.scrollHeight);
            textareaRef.current.style.height = `calc(${scrollHeight}px + 3.8rem)`;
        }
    }, [isProseMode, textareaRef]);

    const calculateHeightInProseMode = () => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = Number(textareaRef.current.scrollHeight);
        textareaRef.current.style.height = `calc(${scrollHeight}px + 3.8rem)`;
    };

    return (
        <TextArea
            autoFocus
            font={font}
            noOfLines={isProseMode ? null : lines.length}
            onChange={(e) => dispatch(updateLines(e.target.value.split("\n")))}
            onKeyDown={(e) => {
                if (isProseMode) {
                    calculateHeightInProseMode(e);
                }
                handleKeyPress(e, textareaRef, updateLines, dispatch, lines);
            }}
            placeholder={loadingPrefill ? "Conjuring..." : placeholder}
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

export default TextEditor;
