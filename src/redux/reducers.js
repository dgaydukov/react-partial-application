
import { combineReducers } from 'redux';

// Reducers
import profileReducer from './reducers/profile-reducer';

// Combine Reducers
const reducers = combineReducers({
    profileState: profileReducer,
});

export default reducers;