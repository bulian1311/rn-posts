import * as types from "../types";

const initialState = {
  allPosts: [],
  bookedPosts: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter(p => p.booked)
      };
    case types.TOGGLE_BOOKED:
      const allPosts = state.allPosts.map(post => {
        if (post.id === action.payload) {
          post.booked = !post.booked;
        }
        return post;
      });

      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter(p => p.booked)
      };

    case types.DELETE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter(p => p.id !== action.payload),
        bookedPosts: state.bookedPosts.filter(p => p.id !== action.payload)
      };
    case types.CREATE_POST:
      return {
        ...state,
        allPosts: [{ ...action.payload }, ...state.allPosts]
      };
    default:
      return state;
  }
};

export default postReducer;
