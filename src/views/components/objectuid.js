import React from "react";

export default class ObjectUid extends React.Component {
    constructor(props) {
        super(props);
        this.openBook = this.openBook.bind(this);
    }

    openBook(event) {
        this.props.openBook(this.props.term);
    }

    render() {
        let term = this.props.term;
        return (
            <a id={term.id} onClick={this.openBook}>
                {term.name}
            </a>
        );
    }
}