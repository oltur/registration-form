import { expect } from 'chai';

import * as actions from '../app/actions';
import * as types from '../app/actions/types';

describe('actions', () => {
    it('should create an action to save a user', () => {
        const userName = 'John Smith';
        const expectedAction = {
            type: types.USER_NAME,
            userName
        };
        expect(actions.saveUserName(userName)).to.eql(expectedAction);
    });
})
;
