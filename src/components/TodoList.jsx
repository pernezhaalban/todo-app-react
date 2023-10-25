import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.reverse().map((todo) => (
        <TodoItem key={todo.key} item={todo} />
      ))}
    </div>
  );
};

export default TodoList;
