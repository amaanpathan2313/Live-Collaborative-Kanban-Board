import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todoObj, setTodoObj] = useState({
    title: "",
    description: "",
    status: false,
    tag: "",
  });

  const [todoArray, setTodoArray] = useState([]);

  function handelChange(e) {
    let { value, name } = e.target;

    setTodoObj((previous) => ({ ...previous, [name]: value }));
  } // handelChange

  function handelSubmit(e) {
    e.preventDefault();

    let tagsArray = todoObj.tag.split(",").map((tag) => tag.trim());
    console.log("t : ", tagsArray);
    const newTodo = {
      ...todoObj,
      id: Date.now().toString(),
      tagsArray,
    };
    console.log(newTodo);
    setTodoArray([...todoArray, newTodo]);

    setTodoObj({
      title: "",
      description: "",
      status: false,
      tag: "",
    });
  } // handel Submit

  // ---------------------------------------    Drag function

  function allowDrop(e) {
    e.preventDefault();
  }

  function drag(e) {
    // console.log("I am ID  :::", e.target.id)

    e.dataTransfer.setData("todoId", e.target.id);
  }

  function drop(e) {
    e.preventDefault();

    const id = e.dataTransfer.getData("todoId");

    const updatedArray = todoArray.map((ele) => {
      if (ele.id === id) {
        return { ...ele, status: !ele.status };
      }
      return ele;
    });

    setTodoArray(updatedArray);
    console.log(updatedArray);
  }

  //  -------------------------------------

  return (
    <>
      <h1>Todo App </h1>

      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="title"
          value={todoObj.title}
          placeholder="Enter Title"
          onChange={handelChange}
        />

        <textarea
          name="description"
          value={todoObj.description}
          onChange={handelChange}
          placeholder="Enter your task in detail"
        ></textarea>

        <input
          type="text"
          placeholder="Enter your tag and separate it using ,"
          name="tag"
          value={todoObj.tag}
          onChange={handelChange}
        />

        <button type="submit">Add Task</button>
      </form>

      <div className="search-box">
        <input type="text" placeholder="Search task by tags " />
      </div>

      <div className="Box-1">
        <div
          className="todo-column"
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        >
          <h2>Pending Tasks</h2>
          <div className="pending-todo">
            {Array.isArray(todoArray) &&
              todoArray
                .filter((ele) => ele.status == false)
                .map((ele) => (
                  <div
                    className="todo-card"
                    draggable="true"
                    onDragStart={(e) => drag(e)}
                    id={ele.id}
                  >
                    <h3>Title : {ele.title}</h3>
                    <p>{ele.description}</p>

                    <div className="tag-container">
                      <h4>Tags:</h4>
                      {ele.tagsArray &&
                        ele.tagsArray.map((tag, index) => (
                          <span key={index} className="tag-chip">
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div
          className="todo-column"
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        >
          <h2>Completed</h2>
          <div className="pending-todo">
            {Array.isArray(todoArray) &&
              todoArray
                .filter((ele) => ele.status == true)
                .map((ele) => (
                  <div
                    className="todo-card"
                    draggable="true"
                    onDragStart={(e) => drag(e)}
                    id={ele.id}
                  >
                    <h3>{ele.title}</h3>
                    <p>{ele.description}</p>

                    <div className="tag-container">
                      <h4>Tags:</h4>
                      {ele.tagsArray &&
                        ele.tagsArray.map((tag, index) => (
                          <span key={index} className="tag-chip">
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
