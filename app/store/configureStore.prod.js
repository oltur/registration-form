import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
// import createSagaMiddleware from 'redux-saga';
// import mySaga from '../sagas';

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    const result = createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleware),
        //applyMiddleware(sagaMiddleware),
    );

    // then run the saga
    // sagaMiddleware.run(mySaga);

    return result;
}
