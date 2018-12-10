jest.unmock("../src/views/components/objectuid");

import React from 'react';
import { shallow } from 'enzyme';

import ObjectUid from "../src/views/components/objectuid";

describe('Book link render', function () {
    it('renders the component ', () => {

        const wrapper = shallow(<ObjectUid term={{id: 3, name: "Harry"}}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
