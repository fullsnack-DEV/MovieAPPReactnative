import { createStore } from "redux";
import { mainreducer } from "./Reducers";

export const Store = createStore(mainreducer);
