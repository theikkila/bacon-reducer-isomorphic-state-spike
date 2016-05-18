
import React from 'react'

import {initial, appState} from './store'

const App = React.createClass({
    getInitialState () {
      return {color:1}
    },
    componentDidMount () {
      appState.changes().onValue((state) => this.setState(state))
    },
    childContextTypes: {
      appState: React.PropTypes.object
    },
    getChildContext: function() {
      return {appState: appState};
    },
    render: function() {

        return <div>
                {this.state.color}
                <h1>Äppylä</h1>
                {this.props.children}</div>;
    }
});


export default App;
