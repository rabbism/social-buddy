import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Posts from "./Posts";
import Comments from "./Comments";

function PostDetail(props) {
  let { id } = useParams();
  const [postDetail, setPostDetail] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const filteredPostUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(filteredPostUrl)
      .then((res) => res.json())
      .then((result) => setPostDetail(result));
  }, []);
  useEffect(() => {
    const filteredCommentsurl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(filteredCommentsurl)
      .then((res) => res.json())
      .then((result) => setComment(result));
  }, []);

  return (
    <div>
      <Posts title={postDetail.title} body={postDetail.body} show={false} />
      <div style={{ textAlign: "center" }}>
        <h1>Comments</h1>
      </div>
      {comment.map((commentData) => (
        <Comments
          key={commentData.id}
          name={commentData.name}
          body={commentData.body}
          email={commentData.email}
        />
      ))}
    </div>
  );
}

export default PostDetail;
