const initialState = {
  user: {
    name: "Prashant",
    age: 20,
    address: "New York",
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_USER_DETAILS":
      return { ...state, user: payload };

    default:
      return state;
  }
};
