import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import { formatDate } from '../tools/dateFormatter';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const userName = (state = '', action) => {
    switch (action.type) {
        case types.USER_NAME:
            return action.userName;
        default:
            return state;
    }
};

const userAge = (state = 0, action) => {
    switch (action.type) {
        case types.USER_AGE:
            return action.userAge;
        default:
            return state;
    }
};

const userBirthday = (state = formatDate(new Date(1900, 1, 1)), action) => {
    switch (action.type) {
        case types.USER_BIRTHDAY:
            return action.userBirthday;
        default:
            return state;
    }
};

const userGender = (state = '', action) => {
    switch (action.type) {
        case types.USER_GENDER:
            return action.userGender;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    filter,
    userName,
    userAge,
    userBirthday,
    userGender,
    routing
});

export default rootReducer;
