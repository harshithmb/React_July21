export const getProducts = (payload) => ({
  type: "GET_PRODUCTS",
  payload,
});

export const addProductToCart = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload,
  };
};
