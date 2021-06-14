import React, { Component } from 'react';
import "./Nav.css";
import logo from "./../../images/logo.png";
export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nave_blocks">
                    <img src={logo}></img>
                </div>
                <div className="nav_bloks"></div>
                <div className="nav_blocks"></div>
            </div>
        );
    }
}