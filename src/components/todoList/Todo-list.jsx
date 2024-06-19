import React from "react";
import "./Todo.css";
import TodoCreate from "./Todo-create";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";

const TodoList = () => {
  return (
    <div className="todo">
      <h1>Todo List</h1>
      <TodoCreate />
      <div>
        <TodoFilter />
        <div className="task-list">
          <TodoItem title="Work" completed={true} />
          <TodoItem title="Shop" completed={false} />
          <TodoItem title="Gym" completed={false} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;