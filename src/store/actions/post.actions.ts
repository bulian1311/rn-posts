import * as types from "../types";
import { DATA } from "../../data";

export const loadPosts = () => {
  return {
    type: types.LOAD_POSTS,
    payload: DATA
  };
};

export const toggleBooked = id => {
  return {
    type: types.TOGGLE_BOOKED,
    payload: id
  };
};

export const removePost = id => {
  return {
    type: types.DELETE_POST,
    payload: id
  };
};

export const createPost = post => {
  const id = Date.now().toString();
  post.id = id;
  return {
    type: types.CREATE_POST,
    payload: post
  };
};
