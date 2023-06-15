import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      .then(response => setComments(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div className="blog-container">
      <div className="post-list">
        <h2>Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id} onClick={() => handlePostClick(post)}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
      {selectedPost && (
        <div className="post-details">
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.body}</p>
          <h4>Comments</h4>
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>
                <p className="commenter">{comment.name}</p>
                <p className="comment-body">{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Blog;