import React from "react";
import { hotkeys } from "react-keyboard-shortcuts";
import { connect } from "react-redux";
import { toggleOption, handleSave, fetchPrefill } from "actions";

class HotKeys extends React.Component {
    hot_keys = {
        "ctrl+a": {
            priority: 1000,
            handler: this.props.toggleAnalysis,
        },
        "ctrl+n": {
            priority: 1000,
            handler: this.props.fetchPrefill,
        },
        "meta+s": {
            priority: 1000,
            handler: (e) => {
                e.preventDefault();
                this.props.handleSave(this.props.lines);
            },
        },
    };

    render() {
        return <></>;
    }
}

export default connect(
    (state) => ({
        lines: state.lines,
    }),
    {
        toggleAnalysis: (e) => {
            e.preventDefault();
            return toggleOption("showAnalysis");
        },
        fetchPrefill: (e) => {
            e.preventDefault();
            return fetchPrefill(false);
        },
        handleSave: (saveLines) => handleSave(saveLines),
    }
)(hotkeys(HotKeys));
