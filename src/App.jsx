import React from "react";
import { connect } from "react-redux";
import { fetchPrefill } from "actions";
import Layout from "Components/Layout/Layout";

class App extends React.Component {
    componentDidMount() {
        this.props.fetchPlaceholder();
    }

    render() {
        return <Layout />;
    }
}

const mapDispatchToProps = {
    fetchPlaceholder: () => fetchPrefill(true)
};

export default connect(
    null,
    mapDispatchToProps
)(App);
