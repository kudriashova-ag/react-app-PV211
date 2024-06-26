import React from "react";
import "./Todo.css";
import TodoCreate from "./Todo-create";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import { taskList } from "./taskList";


const TodoList = () => {
  return (
    <div className="todo">
      <h1>Todo List</h1>
      <TodoCreate />
      <div>
        <TodoFilter />
        <div className="task-list">
          {taskList.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
