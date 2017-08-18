'use strict';

import * as types from '../action-types';

const initialState = {
    catalog: ['offer-1','offer-2'],
};

const catalogReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_CATALOG_SUCCESS:
            return Object.assign({}, state, { catalog: action.data });
    }
    return state;
}

export default catalogReducer;