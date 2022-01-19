import { ADDTOFAV, DELETEFAV } from "./ActionType";

//creating a actions creators

export const addtofav = (title, img, id) => ({
  type: ADDTOFAV,
  title: title,
  img: img,
  id: id,
});

export const deletefav = (id) => ({
  type: DELETEFAV,
  id: id,
});

//What is Action Creators ?
// Actions will tell the store that the change is needed / required.

//// Cycle of Redux /////

// Store --> State --> UI --> Actions --> Reducer --> Store

// Store contains a State ==> State defines UI ==> UI will trigger a Action ==> Action will be passed to the Reducers ==> Reducers will update the state in the store

// this action creators we will pass to our Reducers and according  to the action.type
// The Responssible Reducer will be invoked. Action creators will also carry some data that will
// be used to modifify the  state using Reducers
