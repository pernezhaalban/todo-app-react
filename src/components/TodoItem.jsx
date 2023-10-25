import React from "react";

const TodoItem = ({ item }) => {
  return <div>
    { item.isCompleted ? <s>{item.text}</s> : item.text}
    
    </div>;
};

export default TodoItem;
