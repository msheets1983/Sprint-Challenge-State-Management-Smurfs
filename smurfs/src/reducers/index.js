const initialState = {
  smurfs: [],
  ifFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
