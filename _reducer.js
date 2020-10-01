export const initialState = {
  user: null,
  signupform: { email: null, password: "" },
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
        signupform: {
          ...state.signupform,
          email: action.email,
        },
      };

    case "SET_SIGNUP_PASSWORD":
      return {
        ...state,
        signupform: {
          ...state.signupform,
          password: action.password,
        },
      };

    default:
      return state;
  }
};
