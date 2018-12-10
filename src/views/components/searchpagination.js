import React from "react";
import { Pagination } from 'antd';

export default class SearchResultPagination extends React.Component {
    render() {
        return (
            <Pagination
                showQuickJumper 
                total={this.props.total}
                onChange={this.props.onChange}
                defaultPageSize={this.props.pageSize}
                className="searchresult-pagination" 
            />
        );
    }
}