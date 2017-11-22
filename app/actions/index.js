import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function saveUserName(userName) {
    return {
        type: types.USER_NAME,
        userName
    };
}

export function saveUserAge(userAge) {
    return {
        type: types.USER_AGE,
        userAge
    };
}

export function saveUserBirthday(userBirthday) {
    return {
        type: types.USER_BIRTHDAY,
        userBirthday
    };
}

export function saveUserGender(userGender) {
    return {
        type: types.USER_GENDER,
        userGender
    };
}

export function reset() {
    return {
        type: 'RESET'
    };
}
