import { combineReducers } from "redux";
import Basiclist from "./basicreducer";
// import Productlist from "./productreducer";
// import Apilist from "./apireducer";

const MainReducer = combineReducers({
    Basiclist
    //, Productlist, Apilist
})
export default MainReducer;