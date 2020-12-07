export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      const updatedBasket = state.basket.filter(
        (product) => product.id !== action.payload
      );
      // const newBasket = [...state.basket];
      // const index = newBasket.findIndex(
      //   (basketItem) => basketItem.id === action.payload
      // );
      // newBasket.splice(index, 1);
      return {
        ...state,
        basket: updatedBasket,
        // basket: newBasket
      };
    default:
      return state;
  }
};

export default reducer;
