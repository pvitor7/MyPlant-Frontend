/* eslint-disable */

import { WISH_DELETE, WISH_LIST } from "./actionsTypes";


export default function myWishList (state = [], action){
    console.log(action.type);
    switch(action.type){

        case WISH_LIST:
            const newWishList = [...action.myWishList];
            console.log(newWishList)
            return newWishList;

        case WISH_DELETE:
            return action.myWishList;

        default:
            return state;
    }
        
}