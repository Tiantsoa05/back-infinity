import React,{useState} from "react";
import PostCard from "./PostCard/PostCard.jsx";
import "./Post.css";
import PostImage  from "../../../../assets/post.png"

const Post = () => {
    const [post, setPost] = useState([
        {
            id: 1,
            title: "Mon premier post",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, purus sed semper pulvinar, ex mauris finibus lectus, at condimentum turpis nisi vel ligula.",
            author: {
                id: 1,
                name: "John Doe",
                avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
                job: "Développeur front-end"
            },
            image:PostImage
        },
        /* {
            id: 2,
            title: "Mon second post",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, purus sed semper pulvinar, ex mauris finibus lectus, at condimentum turpis nisi vel ligula.",
            author: {
                id: 2,
                name: "Jane Doe",
                avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
                job: "Développeuse back-end"
            },
            image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        } */
    ]);
    return (
        <>
            {
                post.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </>
    )
}

export default Post;