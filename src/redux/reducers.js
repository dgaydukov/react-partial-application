'use strict';

/*
 * Redux reducers combiner
 */

import { combineReducers } from 'redux';
import profileReducer from './reducers/profile-reducer';
import catalogReducer from './reducers/catalog-reducer';

// Combine Reducers
const reducers = combineReducers({
    profileState: profileReducer,
    catalogState: catalogReducer,
});

export default reducers;