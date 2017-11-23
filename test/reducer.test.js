import { expect } from 'chai';

import reducer from '../app/reducers';
import * as types from '../app/actions/types';

describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).to.eql(
            {
                'userName': '',
                'userAge': 0,
                'userBirthday': '1900-02-01',
                'userGender': '',
                'routing':
                {
                    'location': null
                }
            }
        );
    });

    it('should handle USER_AGE', () => {
        expect(
      reducer([], {
          type: types.USER_AGE,
          userAge: 99
      })
    ).to.eql(
            {
                'userName': '',
                'userAge': 99,
                'userBirthday': '1900-02-01',
                'userGender': '',
                'routing':
                {
                    'location': null
                }
            }
    );
    });
})
;
