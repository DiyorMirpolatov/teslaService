import React, { useState } from "react";

const List = () => {
    const todo = [
      "Tez xizmat - ishimizni aytilgan vaqtgacha amalga oshirmiz!",
      "dd",
    ];
    const [todos] = useState(todo)

  
    console.log(todos);
  return (
    <>
      <ul>{todos.map((list, index) => {
        return (
            <li key={index}>{index}) {list}</li>
        )
      })}</ul>
    </>
  );
};

export default List;
