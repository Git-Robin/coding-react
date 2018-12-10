import React from "react";
import { withRouter } from "react-router-dom";
import { message } from 'antd';
import SearchResult from "./searchresult";
import SearchResultHeader from "./searchheader";
import SearchResultPagination from "./searchpagination";
import BOOKS_QUERY from "../graphql/books.graphql";
import gql from "graphql-tag";

class SearchSide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: undefined,
            total: 0,
            pageSize: 20
        }

        this.fetchBooks = this.fetchBooks.bind(this);

        this.fetchBooks(this.props.match.params.query);

        message.config({
            top: 200,
            duration: 3
        });
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.match.params.query != nextprops.match.params.query) {
            this.setState({ result: undefined, total: undefined });
            this.fetchBooks(nextprops.match.params.query);
        }
    }

    fetchBooks(queryString) {
        let query = gql`${BOOKS_QUERY}`;;
        let self = this;
        return new Promise((resolve) => {
            self.props.client.query({
                query: query,
                variables: {query: queryString, page: 1}
            }).then(function (data) {
                let booksData = data.data.Books;
                let size = booksData.end - booksData.start + 1;
                self.setState({ total: booksData.total, result: booksData.books, queryString: queryString, pageSize: size });
            }).catch(function (error) {
                message.error("Error: " + JSON.stringify(error));
            });
        });
    }

    onChange = (page) => {
        let query = gql`${BOOKS_QUERY}`;;
        let self = this;
        return new Promise((resolve) => {
            self.props.client.query({
                query: query,
                variables: {query: this.state.queryString, page: page}
            }).then(function (data) {
                let booksData = data.data.Books;
                self.setState({ result: booksData.books });
            }).catch(function (error) {
                message.error("Error: " + JSON.stringify(error));
            });
        });
    }

    render() {
        if (this.state.result != undefined) {
            return (
                <div className="searchresultsdiv" className="searchresults">
                    {
                        this.state.result.length > 0 
                        ?
                        <div>
                            <SearchResultHeader 
                            total={this.state.total} 
                            queryString={this.state.queryString} />
                            <SearchResult
                                result={this.state.result}
                                history={this.props.history}
                                openBook={this.props.openBook}
                            />
                            <SearchResultPagination 
                                total={this.state.total} 
                                pageSize={this.state.pageSize} 
                                onChange={this.onChange} />
                        </div>
                        :
                        <SearchResult
                            result={this.state.result}
                            history={this.props.history}
                            openBook={this.props.openBook}
                        />
                    }
                </div>
            );
        } 
        return null;
    }
}

export default withRouter(SearchSide);