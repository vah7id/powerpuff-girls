import React from 'react';
import { shallow } from 'enzyme';
import DetailsCard from '../modules/program/components/DetailsCard';

// test cases
const propsMocks = [{
    name: 'Powerpuff Girls 1',
    summary: 'summary bla bla...',
    image: null
}, {
    name: 'Powerpuff Girls 2',
    summary: '<p>summary bla bla...</p>',
    image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
        original: 'http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg'
    }
}];

describe('DetailsCard component rendering', () => {

    it('should match the snapshot', () => {
        const container = shallow(<DetailsCard {...propsMocks[0]} />);
        expect(container.html()).toMatchSnapshot();
    });

    it('should render all the required fields with placeholder image', () => {
        const wrapper = shallow(<DetailsCard {...propsMocks[0]} />);
        expect(wrapper.find('h2').text()).toEqual(propsMocks[0].name);
        expect(wrapper.find('p').html()).toEqual(`<p>${propsMocks[0].summary}</p>`);
        expect(wrapper.find('img').props().src).toEqual('placeholder.png');
    });

    it('should render all the required fields with original image', () => {
        const wrapper = shallow(<DetailsCard {...propsMocks[1]} />);
        expect(wrapper.find('h2').text()).toEqual(propsMocks[1].name);
        expect(wrapper.find('p').html()).toEqual(`<p>${propsMocks[1].summary}</p>`);
        expect(wrapper.find('img').props().src).toEqual(propsMocks[1].image.medium);
    });
});
