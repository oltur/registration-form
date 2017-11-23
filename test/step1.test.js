import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import { MemoryRouter } from 'react-router';

import { Step1 } from '../app/containers/Step1';

const props = {
    userName: 'Test User',
    userAge: 99,
    onSaveUserName: sinon.spy(),
    onSaveUserAge: sinon.spy(),
    onHistoryPush: sinon.spy(),
};

function setup() {
    const wrapper = mount(<MemoryRouter store={props}><Step1 {...props} /></MemoryRouter>, props);

    return wrapper;
}

describe('Test for Step1', () => {
    it('should display user name', () => {
        const wrapper = setup();
        const userName = wrapper.find('#userName');

        expect(userName).to.have.value(props.userName);
    });

    it('should dispatch action when changing user name', () => {
        const wrapper = setup();
        wrapper.find('#userName').simulate('change', {target: {value: 'David'}});
        expect(props.onSaveUserName.calledOnce).to.equal(true);
    });
});

