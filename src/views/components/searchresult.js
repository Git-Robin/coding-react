import React from "react";
import { Row, Col } from 'antd';
import ObjectUid from "./objectuid";
import "antd/dist/antd.css";

export default class SearchResult extends React.Component {
    render() {
        var self = this;
        if (this.props.result.length > 0) {
            return (
                    <div ref="terms">
                        {_.map(_.compact(this.props.result || []), function (term, i) {
                            return (
                                <Row key={i}>
                                    <Col xs={24} md={24}>
                                        <div className="search-result">
                                            <h4>
                                                <ObjectUid term={term} history={self.props.history} openBook={self.props.openBook}/>
                                            </h4>
                                        </div>
                                    </Col>
                                </Row>
                            );
                        })}                  
                </div>
            );
        } else if (this.props.result.length == 0) {
            return (
                <div className="no-searchresult-message">No books found</div>
            );
        } 
        return null;
    }
}