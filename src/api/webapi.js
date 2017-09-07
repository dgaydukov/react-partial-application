'use strict';

/*
 * API functions for getting data
 */


import store from "../redux/store";
import {getProfileSuccess, getCatalogSuccess} from "../redux/action-creators";

/**
 imitate auth
 */
export function login(){
    setTimeout(()=>{
        store.dispatch(getProfileSuccess({id: 1}));
        getCatalog();
    }, 100)
}

/**
 imitate catalog request
 */
export function getCatalog(){
    setTimeout(()=>{
        store.dispatch(getCatalogSuccess(["offer-3", "offer-4", "offer-5"]));
    }, 100)
}