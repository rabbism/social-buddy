import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Comp/Header";
import Posts from "./Comp/Posts";
import NotFound from "./Comp/NotFound";
import PostDetail from "./Comp/PostDetail";

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((result) => setPost(result));
  }, []);
  return (
    <div>
      <Router>
        {/*  */}

       <Header />
        <Switch>
          <Route exact path="/">
            {post.map((postData, index) => (
              <Posts
                key={postData.id}
                show={true}
                title={postData.title}
                body={postData.body}
                id={postData.id}
                index={index}
              />
            ))}
          </Route>
          <Route exact path="/posts/:id">
            <PostDetail />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;