import React from 'react';
import { shallow, mount } from 'enzyme';
import LocationsTable from './locations-table';
import wait from 'waait';

const deleteButtonClick = jest.fn();

const entities = [
    {
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
    },
    {
        id: 3,
        title: 'Berlin',
        content:
            'Berlin is the capital and the largest city of Germany as well as one of its 16 constituent states. With a population of approximately 3.7 million, Berlin is the second...',
        lat: '52.5065133',
        long: '13.1445548',
        image_url:
            'https://lonelyplanetwp.imgix.net/2015/12/brandenburg-gate-berlin-GettyRF-1500-cs.jpg',
        created_at: '2019-08-29T15:29:25.456Z',
        updated_at: '2019-08-29T15:29:25.456Z'
    },
    {
        id: 4,
        title: 'Madrid',
        content: 'blah blah',
        lat: '40.41678',
        long: '-3.70379',
        image_url:
            'https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg',
        created_at: '2019-09-21T15:08:30.277Z',
        updated_at: '2019-09-21T15:08:30.277Z'
    }
];

describe('<LocationsTable/>', () => {
    const wrapper = mount(
        <LocationsTable
            deleteButtonClick={deleteButtonClick}
            entities={entities}
        />
    );

    it('renders as expected', () => {
        wrapper;
    });

    it('renders table rows from the entities', () => {
        expect(wrapper.find('tbody tr').length).toBe(3);
    });

    it('simulates a button click', async () => {
        const tag = wrapper
            .find('tbody tr')
            .first()
            .find('button');
        console.log(tag.debug());
        tag.simulate('click');
        await wait(600);
        expect(deleteButtonClick).toBeCalled();
    });
});
