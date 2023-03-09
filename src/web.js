import React, { useEffect, useState }  from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './background.css';
import './box_container.css';
import './web.css';

function web () {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://script.google.com/macros/s/AKfycby3qqVTyFrLBo5bVsUxCkm-rOH-mWhSkLTXEjy3PBdUGmRRZU1Dv7_qFwP76zjfuaIgdA/exec')
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

        return (
            <div>
                web!!!
                <br/>
            </div>
        );
    }

export default web;