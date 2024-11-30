import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-profile">
        <img src={post.author.avatar} alt={post.author.name} className="post-avatar"/>
        <div className="post-details">
            <h5>{post.author.name}</h5>
            <p>{post.author.job}</p>
        </div>
      </div>
      <div className="post-content">
        <div>
            <img src={post.image} alt={post.title} className="post-image"/>
        </div>
      </div>
        <div className="post-buttons">
            <div className="btn btn-primary">S'inscrire en ligne</div>
            <div className="btn btn-primary">S'inscrire en présentiel</div>
        </div>
    </div>
  );
};

export default PostCard;