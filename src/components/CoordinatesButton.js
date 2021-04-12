import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    constructor(props) {
        super(props)
        this.onReceiveCoordinates = props.onReceiveCoordinates
    }

    handleClickButton = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.handleClickButton}/>
        )
    }
}