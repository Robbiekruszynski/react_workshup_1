import React from 'react';
import ReactDOM from "react-dom";
import faker from "faker";

const CommentDetail= () => {

return(
<div className="comment">
    <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
    </a>
    <div className="content">
        <a href="/" className="author">
        Robbie
        </a>
        <div className="metadata">
        <span className="data">Today at 6:00P.M.</span>
        </div>
        <div className="text"> Nice post!</div>
    </div>
    </div>
);
};

export default CommentDetail;