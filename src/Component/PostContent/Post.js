import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        <article className="post">
            <h2>{props.title}</h2>
            <div>
                <p>{props.body}</p>
            </div>
        </article>
    )

}
export default Post;