import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Tasks Todo</h1>
            <Link style={linkStlye} to="/">Home</Link> | <Link style={linkStlye} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: rgb (38, 169, 224),
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }

const linkStlye = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;