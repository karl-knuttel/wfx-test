import React from 'react';
import { shallow, mount } from 'enzyme';
import SinglePost from './single-post';
import wait from 'waait';

// const deleteButtonClick = jest.fn();

const entity = {
    id: 2,
    title: 'Barcelona',
    content:
        'Barcelona is the capital and largest city of Catalonia with a population of 1.6 million within city limits.',
    lat: '41.3851',
    long: '2.1734',
    image_url:
        'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2017/05/17/15/barcelona-skyline.jpg',
    created_at: '2019-08-29T15:29:25.451Z',
    updated_at: '2019-08-29T15:29:25.451Z'
};

// describe('<SinglePost/>', () => {
//     const wrapper = shallow(<SinglePost entity={entity} />);

//     console.log(wrapper.debug());

//     it('renders as expected', () => {
//         wrapper;
//     });

// it('renders table rows from the entities', () => {
//     expect(wrapper.find('tbody tr').length).toBe(3);
// });

// it('simulates a button click', async () => {
//     const tag = wrapper
//         .find('tbody tr')
//         .first()
//         .find('button');
//     console.log(tag.debug());
//     tag.simulate('click');
//     await wait(600);
//     expect(deleteButtonClick).toBeCalled();
// });
// });
