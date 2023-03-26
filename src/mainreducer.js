import { combineReducers } from "redux";
import Basiclist from "./basicreducer";
import Experiencelist from "./experiencereducer";
// import Productlist from "./productreducer";
// import Apilist from "./apireducer";

const MainReducer = combineReducers({
    Basiclist, Experiencelist
    //, Productlist, Apilist
})
export default MainReducer;