import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { step, inputText, inputButton } from '../styles/step.scss';
import { saveUserBirthday, saveUserGender } from '../actions';
import { push } from 'react-router-redux';

const Step2 = ({userBirthday, userGender, onSaveUserBirthday, onSaveUserGender, onHistoryPush}) => {
    let userBirthdayNode;
    let userGenderNode;

    function isFormValid() {
        const result = (!!userBirthdayNode && userBirthdayNode.validity.valid) && (!!userGenderNode && userGenderNode.validity.valid);
        return result;
    }

    function onSubmit() {
        if(isFormValid()) {
            onHistoryPush('/step3');
        }
        return false;
    }

    function onBackToStep1() {
        if(isFormValid()) {
            onHistoryPush('/step1');
        }
        return false;
    }

    return (
    <div className={step}>
        <h1>Step 2</h1>
        <div>
            <div className={inputText}>
                <label htmlFor="userBirthday">Date of birth: </label>
                <input id="userBirthday"
                    type="date" placeholder="Date of birth" required
        	        value={userBirthday}
                	ref={node => {userBirthdayNode = node;}}
                    onChange={() => onSaveUserBirthday(userBirthdayNode.value)}/>
            </div>
            <div className={inputText}>
                <label htmlFor="userGender">Gender (male or female): </label>
                <input id="userGender"
                    type="text" placeholder="Gender" required pattern="male|female"
        	        value={userGender}
                	ref={node => {userGenderNode = node;}}
                    onChange={() => onSaveUserGender(userGenderNode.value)}/>
                <datalist id="userGender">
                    <option value="male"/>
                    <option value="female"/>
                    </datalist>
            </div>
            <div className={inputButton}>
                <button onClick={onSubmit}>Submit</button>
            </div>
            <div className={inputButton}>
                <a href="#" onClick={onBackToStep1}>Get back to Step 1</a>
            </div>
        </div>
    </div>);
};

Step2.propTypes = {
    userBirthday: PropTypes.string,
    userGender: PropTypes.string,
    onSaveUserBirthday: PropTypes.func,
    onSaveUserGender: PropTypes.func,
    onHistoryPush: PropTypes.func,
};

const mapStateToProps = (state) => {
    console.log('State:', state);
    return {
        userBirthday: state.userBirthday,
        userGender: state.userGender
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveUserBirthday: userName => dispatch(saveUserBirthday(userName)),
        onSaveUserGender: userGender => dispatch(saveUserGender(userGender)),
        onHistoryPush: path => dispatch(push(path)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Step2);
