import React from 'react'

import { Link } from 'react-router'

let appstream_dispose

const Wello = React.createClass({
    contextTypes: {
      appState: React.PropTypes.object
    },
    getInitialState() {
      return {color: 1}
    },
    componentDidMount () {
      appstream_dispose = this.context.appState.changes().onValue((state) => this.setState(state));
    },
    componentWillUnmount () {
      appstream_dispose()
    },
    render: function() {
        const color = this.state.color;
        return <div>Well, well, well! {color} got to <Link to="/hello">hello!</Link></div>;
    }
});


export default Wello;
