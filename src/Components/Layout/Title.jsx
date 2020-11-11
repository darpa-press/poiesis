import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

class PoemTitle extends React.PureComponent {
    render() {
        const { lines } = this.props;
        return <Helmet title={lines.join(" / ").slice(0, 36) || "Poiesis"} />;
    }
}

const mapStateToProps = state => ({
    lines: state.lines
});

export const PoemTitleConnected = connect(mapStateToProps)(PoemTitle);
