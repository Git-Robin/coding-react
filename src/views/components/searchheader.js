import React from "react";

export default class SearchResultHeader extends React.Component {
    render() {
        return (
            <div>
                <span className="result-count">{this.props.total} Results </span>
                <span className="for"> for </span> 
                <span className="result-count"> {this.props.queryString}</span>
            </div>
        )
    }
}