import { useState, useEffect } from "react";
export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => {
          return (
            <li>
              Title : {post.title} <br /> Body : {post.body}
            </li>
          );
        })}
      </ul>
    </>
  );
};
