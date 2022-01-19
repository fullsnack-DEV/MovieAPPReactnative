import { ADDTOFAV, DELETEFAV } from "./ActionType";

//creating aIntial State
const INTIALSTATE = {
  Cart: [],
};

export const mainreducer = (state = INTIALSTATE, action) => {
  console.log(state.Cart);
  switch (action.type) {
    case ADDTOFAV:
      return {
        ...state,
        Cart: state.Cart.concat({
          title: action.title || action.name,
          img: action.img,
          id: action.id,
        }),
      };

    case DELETEFAV: 
      return {
        ...state,
        Cart: state.Cart.filter((item) => item.id != action.id),
      };

    default:
      return state;
  }
};
