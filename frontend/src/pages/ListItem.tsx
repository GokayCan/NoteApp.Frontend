import React from "react";

const ListItem = ({ note }) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
};

export default ListItem;
