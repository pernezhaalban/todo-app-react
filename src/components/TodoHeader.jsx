import React, { useState } from "react";

const TodoHeader = ({ setTodos }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length !== 0) {
      setTodos((prev) => [
       
        {
          key: "todo-" + Math.random(),
          text,
          isCompleted: false,
        },
        ...prev,
      ]);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>+Add</button>
      </form>
    </div>
  );
};

export default TodoHeader;
