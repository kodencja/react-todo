import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    //when it's a function not class 'return' works as 'render()' method
    return (
        <header style={headerStyle}>
            <h1>Todo List connected with database (by kodencja)</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#142190',
    color: '#f1f1f1',
    textAlign: 'center',
    padding: '15px 10px'
}

const linkStyle = {
    color: "#fff",
    textDecoration: 'none'
}

export default Header;