import { useState } from "react";

import { PostDetail } from "./PostDetail";
import { useQuery } from "react-query";
import axios  from "axios";
const maxPostPage = 10;

async function fetchPosts() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );
  return response.data;
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const { data, isError, isLoading, error } = useQuery("posts", fetchPosts)

  // replace with useQuery
  //const data = [];

  if (isLoading) return <h3>"Loading ......."</h3>;
  if (isError) return <div>
    <h3>Oops, Something went wrong!</h3>
    <p>{ error.toString()}</p>
  </div>

  return (
    <>
      <ul>
        {data?.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
