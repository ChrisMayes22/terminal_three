import React from "react";
import { Link } from "react-router-dom";
import './navigation.css';

const navigation = () => {
    return (
        <nav>
            <div className='nav-bar-button'>
                <Link to="/">
                    Home
                </Link>
            </div>
        </nav>
    )
}

export default navigation;