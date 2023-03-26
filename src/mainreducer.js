import { combineReducers } from "redux";
import Basiclist from "./basicreducer";
import Experiencelist from "./experiencereducer";
import Contactlist from "./contactreducer";

const MainReducer = combineReducers({
    Basiclist, Experiencelist, Contactlist
})
export default MainReducer;