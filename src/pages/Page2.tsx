import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";

type TPage2Props = Partial<RouteComponentProps<{any: 'test1' | 'test2'}>>

@(withRouter as any)
export class Page2 extends Component<TPage2Props> {

    render() {
        return (
            <div>
                <h2>Page 2</h2>
                <p>any = {this.props.match?.params.any}</p>
            </div>
        );
    }
}
