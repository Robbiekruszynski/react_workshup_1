import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        authorAvatar={faker.image.avatar()}
        author="Sam"
        commentMark="Hi"
        timeAgo="Today at 2:45pm"
      />
      <CommentDetail
        authorAvatar={faker.image.avatar()}
        author="Alex"
        commentMark="TMI, nobody cares Sam"
        timeAgo="Today at 5:15pm"
      />
      <CommentDetail
        authorAvatar={faker.image.avatar()}
        author="Kate"
        commentMark="Hey, be nice Alex"
        timeAgo="Today at 6:30pm"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
