import React from "react";
import { useState, useEffect } from "react";

const SingleComment = ({ data }) => {
  const [textComment, setTextComment] = useState("");
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setTextComment(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  return (
    <form className="comments-item">
      <div className="comments-delete">&times;</div>
      <input type="text" value={textComment} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
