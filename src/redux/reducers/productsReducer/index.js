const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_TO_CART": {
      return { ...state, cart: [...state.cart, payload] };
    }
    default:
      return state;
  }
};

export default productReducer;
