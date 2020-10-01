export const initialState = {
  user: null,
  signupform: { email: null, password: null },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "CLEAR_USER":
      return {
        ...state,
        user: null,
      };

    case "SET_SIGNUP_EMAIL":
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        },
      };

    case "SET_SIGNUP_PASSWORD":
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        },
      };

    default:
      return state;
  }
  console.log("at reducer", state);
};
