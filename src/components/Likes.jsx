import React from "react";
import { connect } from "react-redux";
import { likesActionCreator, dislikesActionCreator } from "./../redux/actions";

function Likes(props) {
  return (
    <div className="button-controls">
      <button onClick={props.likeHandler}>👍{props.likes}</button>
      <button onClick={props.dislikeHandler}>👎</button>
    </div>
  );
}

function mapStateToProps(state) {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    likeHandler: () => {
      return dispatch(likesActionCreator());
    },
    dislikeHandler: () => {
      return dispatch(dislikesActionCreator());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
