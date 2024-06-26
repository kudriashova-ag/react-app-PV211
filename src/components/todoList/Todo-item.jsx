import React from "react";

const TodoItem = ({ task }) => {
  return (
    <div className="task-item">
      <input type="checkbox" defaultChecked={task.completed} />
      <span>{task.title}</span>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
