/**
 * Created by diman on 05.06.17.
 */

import * as types from "./action-types";


export function getProfileSuccess(data) {
    return{
        type: types.GET_PROFILE_SUCCESS,
        data
    }
}