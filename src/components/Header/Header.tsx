import React from 'react';
import './style.scss'

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light starbucks-nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="" alt="" width="30" height="24"
                         className="d-inline-block align-text-top"/>
                        Package Request
                </a>
            </div>
        </nav>
    );
};

export default Header;
