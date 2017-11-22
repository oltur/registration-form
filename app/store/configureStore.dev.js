import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import reduxReset from 'redux-reset';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    const result = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(middleware),
            applyMiddleware(sagaMiddleware),
            reduxReset(),  // Will use 'RESET' as default action.type to trigger reset
            DevTools.instrument()
        )
    );
    // then run the saga
    sagaMiddleware.run(mySaga);

    return result;
}
