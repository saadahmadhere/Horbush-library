const initialState = {
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")) ?? {
    firstName: "",
    lastName: "",
    email: "",
    likes: [],
    history: [],
    playlists: [],
    watchlater: [],
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("token", action.payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(action.payload.foundUser));
      return {
        ...state,
        token: action.payload.encodedToken,
        user: {
          ...state.user,
          firstName: action.payload.foundUser.firstName,
          lastName: action.payload.foundUser.lastName,
          email: action.payload.foundUser.email,
          likes: action.payload.foundUser.likes,
          history: action.payload.foundUser.history,
          playlists: action.payload.foundUser.playlists,
          watchlater: action.payload.foundUser.watchlater,
        },
      };
    }

    case "LOGOUT": {
      localStorage.clear();
      return initialState;
    }

    default:
      return initialState;
  }
};

export { initialState, authReducer };
