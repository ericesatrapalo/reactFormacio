import React, {Component} from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: false
        };
    }

    toggleEnabled() {
        this.setState({enabled: !this.state.enabled})
    }

    render() {
        let btnState = this.state.enabled ? 'btn-primary' : 'btn-warning';
        return (
            <div>
                <h1>Hello Laura Cookie {this.props.name}</h1>
                <div className={"btn " + btnState}></div>
                <button onClick={(event) => this.toggleEnabled()}>Press me</button>
            </div>
        );
    }
}

export default Title;
