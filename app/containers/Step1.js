import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { step, inputText, inputButton } from '../styles/step.scss';
import { saveUserName, saveUserAge } from '../actions';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

const Step1 = ({userName, userAge, onSaveUserName, onSaveUserAge, onHistoryPush}) => {
    let userNameNode;
    let userAgeNode;

    function isFormValid() {
        const result = (!!userNameNode && userNameNode.validity.valid) && (!!userAgeNode && userAgeNode.validity.valid);
        return result;
    }

    function onNext() {
        if(isFormValid()) {
            onHistoryPush('/step2');
        }
        return false;
    }

    return (
    <div className={step}>
        <h1>Step 1</h1>
        <div>
            <div className={inputText}>
                <label htmlFor="userName">Name: </label>
                <input id="userName"
                    type="text" placeholder="User name" required
        	        value={userName}
                	ref={node => {userNameNode = node;}}
                    onChange={() => onSaveUserName(userNameNode.value)}/>
            </div>
            <div className={inputText}>
                <label htmlFor="userAge">Age: </label>
                <input id="userAge"
                    type="number" placeholder="Age" maxLength="3" required
        	        value={userAge}
                	ref={node => {userAgeNode = node;}}
                    onChange={() => onSaveUserAge(parseInt(userAgeNode.value, 10))}/>
            </div>
            <div className={inputButton}>
                <button onClick={onNext} disabled={isFormValid()}>Next</button>
            </div>
        </div>
    </div>);
};

Step1.propTypes = {
    userName: PropTypes.string,
    userAge: PropTypes.number,
    onSaveUserName: PropTypes.func,
    onSaveUserAge: PropTypes.func,
    onHistoryPush: PropTypes.func
};

const mapStateToProps = (state) => {
    console.log('State:', state);
    return {
        userName: state.userName,
        userAge: state.userAge,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveUserName: userName => dispatch(saveUserName(userName)),
        onSaveUserAge: userAge => dispatch(saveUserAge(userAge)),
        onHistoryPush: path => dispatch(push(path)),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Step1));
