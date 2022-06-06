import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <nav>
                <Link to={'/pages/1'}>Page 1</Link>
                <Link to={'/pages/2'}>Page 2</Link>
                <Link to={'/pages/3'}>Page 3</Link>
                <Link to={'/pages/4'}>Page 4</Link>
            </nav>
        );
    }
}
