import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2177638Reducer from '../features/SignIn2177638/redux/reducers'
import SignIn2176399Reducer from '../features/SignIn2176399/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2177638: SignIn2177638Reducer,
SignIn2176399: SignIn2176399Reducer,

});