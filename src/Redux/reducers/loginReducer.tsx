import { LOGINUSER } from '../actions'
import { AnyAction } from 'redux';

export const loginReducer = (state = [], action: AnyAction) => {
    switch (action.type) {
        case LOGINUSER:
            return [ ...state, action.payload ];
        default:
            return state
    }
};
