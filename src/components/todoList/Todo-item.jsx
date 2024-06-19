import React from "react";

const TodoItem = ({ title, completed }) => {
  return (
    <div className="task-item">
      <input type="checkbox" defaultChecked={completed} />
      <span>{title}</span>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
