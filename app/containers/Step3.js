import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { step, inputText } from '../styles/step.scss';
import { push } from 'react-router-redux';
import { reset } from '../actions';
import { sendData } from '../api';

const Step3 = ({userName, userAge, userBirthday, userGender, onReset, onHistoryPush}) => {
    sendData({userName, userAge, userBirthday, userGender})
    .then((data) => {
        alert('Server response: ' + JSON.stringify(data));
    })
    .catch((error)=>{
        alert('Server error: ' + JSON.stringify(error));
    });

    return (
    <div className={step}>
        <h1>User</h1>
        <div>
        <div className={inputText}>
                <label htmlFor="userName">Name: </label>
                <input id="userName" readOnly disabled
                    type="text"
        	        value={userName}
                    />
            </div>
            <div className={inputText}>
                <label htmlFor="userAge">Age: </label>
                <input id="userAge" readOnly disabled
                    type="text"
        	        value={userAge}
                    />
            </div>
            <div className={inputText}>
                <label htmlFor="userBirthday">Date of birth: </label>
                <input id="userBirthday" readOnly disabled
                    type="text"
        	        value={userBirthday}
                    />
            </div>
            <div className={inputText}>
                <label htmlFor="userGender">Gender: </label>
                <input id="userGender" readOnly disabled
                    type="text"
        	        value={userGender}
                    />
            </div>
            <a href="#" onClick={() => {onReset(); onHistoryPush('/step1'); return false;}}>Register another user</a>
        </div>
    </div>);
};

Step3.propTypes = {
    userName: PropTypes.string,
    userAge: PropTypes.number,
    userBirthday: PropTypes.string,
    userGender: PropTypes.string,
    onReset: PropTypes.func,
    onHistoryPush: PropTypes.func,
};

const mapStateToProps = (state) => {
    console.log('State:', state);
    return {
        userName: state.userName,
        userAge: state.userAge,
        userBirthday: state.userBirthday,
        userGender: state.userGender,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onReset: () => dispatch(reset()),
        onHistoryPush: path => dispatch(push(path)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Step3);
