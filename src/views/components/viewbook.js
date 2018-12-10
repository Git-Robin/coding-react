import React, { Component } from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Query } from "react-apollo";
import ErrorBoundry from "./errorboundry";
import "../../../public/css/prud.css";
import "antd/dist/antd.css";

import gql from 'graphql-tag';

const BOOK_QUERY = gql`
    query Book($id: Int!) { 
        Book(id: $id) {
            cc
            py
            description
        }
    }
`;

export default class ViewBook extends Component {
    render() {
        return (
            <ErrorBoundry>
                <Query
                    query={BOOK_QUERY}
                    variables={{ id: this.props.book.id }}
                    fetchPolicy="cache-and-network"
                    errorPolicy="all"
                    ssr={false}>
                    {({ data, loading, error, refetch }) => {
                        if (loading) {
                            return (
                                <div>Loading...</div>
                            );
                        }

                        if (error) {
                            return (
                                <div>{error}</div>
                            );
                        }

                        var bookProps = this.props.book;
                        var bookAll = error ? [] : data.Book;

                        return (
                            <div id="viewbookid" className="viewbook">
                                <Card
                                    style={{ width: "100%" }}
                                    type="inner"
                                    hoverable
                                    cover={<div className="viewbook-image"><img alt="example" src={bookProps.cover} /></div>}
                                >
                                    <Meta
                                        title={bookProps.name}
                                        description={
                                            bookAll.description ?
                                                <div dangerouslySetInnerHTML={{ __html: bookAll.description }} />
                                                : <div dangerouslySetInnerHTML={{ __html: "" }} />
                                        }
                                    />
                                    <p>
                                        <span>
                                            <span className="viewbook-header"> Author:</span>
                                            <span className="viewbook-value">{bookProps.author}</span>
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            <span className="viewbook-header"> Rating:</span>
                                            <span className="viewbook-value">{bookProps.rating}</span>
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            <span className="viewbook-header"> Country:</span>
                                            <span className="viewbook-value">{bookAll.cc}</span>
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            <span className="viewbook-header"> Reviews:</span>
                                            <span className="viewbook-value">{bookProps.reviews}</span>
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            <span className="viewbook-header"> Publishing year:</span>
                                            <span className="viewbook-value">{bookAll.py}</span>
                                        </span>
                                    </p>
                                </Card>
                            </div>
                        );
                    }}
                </Query>
            </ErrorBoundry>
        )
    }
}