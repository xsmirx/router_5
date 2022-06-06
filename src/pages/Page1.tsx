import React, {Component} from 'react';
import {Prompt, RouteComponentProps} from "react-router-dom";

type IPage1Props = RouteComponentProps<{ any: string }>;

export class Page1 extends Component<IPage1Props> {
    render() {
        return (
            <div>
                <h2>Page 1</h2>
                <p>any = {this.props.match.params.any || "undefined"}</p>
                <Prompt message={"Are you sure you want to leave?"}/>
            </div>
        );
    }
}
