import React, { Component } from 'react'
import ErrorBoundry from './errorboundry';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const AUTHORQUERY = gql`
  query Description($id: Int!){
    Description(id: $id) {
      description
    }
  }
`;

export default class viewauthor extends Component {
  render() {
    return (
      <ErrorBoundry>
        <Query
          query={AUTHORQUERY}
          variables={{ id: this.props.id }}
          fetchPolicy="cache-and-network"
          errorPolicy="all"
          ssr={false}>
          {({ data, loading, error, refetch }) => {
            if (loading) {
              return (
                <div>Loading...</div>
              );
            }

            let authData = error? "" : data.Description;

            return(
              <div>
                {
                  authData.description ?
                  <div dangerouslySetInnerHTML={{ __html: authData.description }} />
                  : <div dangerouslySetInnerHTML={{ __html: "" }} />
                  }
              </div>
            );
          }}
        </Query>
      </ErrorBoundry>
    )
  }
}
