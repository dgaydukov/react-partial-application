/**
 * Created by diman on 05.06.17.
 */


import * as types from '../action-types';

const profileReducer = function(state = {profile: {}}, action) {
    switch(action.type) {
        case types.GET_PROFILE_SUCCESS:
            return Object.assign({}, state, { profile: action.data });
    }
    return state;
}

export default profileReducer;