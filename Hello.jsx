import React from 'react'
import { Link } from 'react-router'
const Hello = React.createClass({
    render: function() {
        return <div>Hello, haters! <Link to="/well">Well!</Link></div>;
    }
});


export default Hello;
