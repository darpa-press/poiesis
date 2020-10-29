import React from "react";
import { connect } from "react-redux";
import { handleFileInput } from "actions";

class FileInput extends React.PureComponent {
    render() {
        const { handleFileInput } = this.props;
        return (
            <input
                style={{ display: "none" }}
                type="file"
                id="file-chooser"
                accept=".txt,text/*"
                onChange={handleFileInput}
            />
        );
    }
}

export default connect(
    null,
    { handleFileInput: e => handleFileInput(e) }
)(FileInput);
