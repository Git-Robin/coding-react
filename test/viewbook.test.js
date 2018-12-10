jest.unmock("../src/views/components/viewbook");

import React from 'react';
import gql from 'graphql-tag';

import ViewBook from "../src/views/components/viewbook";
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from "react-test-renderer";

const mocks = [
    {
        request: {
            query: gql`query { 
                    Book(id: $id) {
                        isbn
                        cc
                        py
                        description
                    }
                }`,
            variables: {
                id: 3,
            },
        },
        result: {
            data: {
                errors: [],
                Book: {
                    isbn: 439554934,
                    cc: "IN",
                    py: "1997",
                    description: "Harry Potter"
                },
            },
        },
    },
];
describe('Book api to get book data', function () {
    it('renders without error', () => {
        let val = `{
            id: 3,
            name: "Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)",
            author: "J.K. Rowling",
            rating: 5626509,
            cover: "https://images.gr-assets.com/books/1474154022m/3.jpg"
        }`;
        renderer.create(
          <MockedProvider mocks={mocks}>
            <ViewBook book={val} />
          </MockedProvider>,
        );
      });
});
