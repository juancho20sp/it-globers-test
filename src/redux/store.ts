import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { menuReducer } from './reducers/menu.reducer';


const rootReducer = combineReducers({
    menuItem: menuReducer
})

export const generateStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )

    return store;
}