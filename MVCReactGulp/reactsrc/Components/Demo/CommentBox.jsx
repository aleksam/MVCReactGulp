import React, { Component } from 'react';
import CommentButton from './CommentButton'

export default class CommentBox extends React.Component {

    constructor(props) {
        super(props);
    }

    handleOnClick = (event) => {
        alert('handleonClick');
    }

    render() {
        return (
            <div className="commentBox">
                <h1>CommentBox Works! <CommentButton handleOnClick={this.handleOnClick} /></h1>                
            </div>
        );
    }
};

