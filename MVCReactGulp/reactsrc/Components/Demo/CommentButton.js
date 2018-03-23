import React, { Component } from 'react';

export default class CommentButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.handleOnClick}> Click! </button>
        );
    }
};
