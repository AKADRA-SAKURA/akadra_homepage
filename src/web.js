import React from 'react';
import { Link } from 'react-router-dom';
import './background.css';

function web () {
        return (
            <div>
                web!!!
                <br/>
                <Link to="/">Go To home</Link>
            </div>
        );
    }

export default web;