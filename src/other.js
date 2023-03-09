import React from 'react';
import { Link } from 'react-router-dom';
import './background.css';

function other () {
        return (
            <div>
                other!!!
                <br/>
                <Link to="/">Go To home</Link>
            </div>
        );
    }

export default other;