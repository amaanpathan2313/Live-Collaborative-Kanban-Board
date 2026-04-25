
import React, { useState } from "react";
import "./Todo.css";
import {
  addTodo,
  changeTodoStatus,
  deleteTodo,
} from "../../features/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import useDebounce from "../../hooks/useDebounce";

const Todo = () => {
  const dispatch = useDispatch();

  const todosArray = useSelector((state) => state.todos.items);

  const [todoObj, setTodoObj] = useState({
    title: "",
    description: "",
    status: false,
    tag: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  function handelChange(e) {
    const { name, value } = e.target;
    setTodoObj((prev) => ({ ...prev, [name]: value }));
  }

  function handelSubmit(e) {
    e.preventDefault();

    const tagsArray = todoObj.tag
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    const newTodo = {
      ...todoObj,
      id: Date.now().toString(),
      tagsArray,
    };

    dispatch(addTodo(newTodo));

    setTodoObj({
      title: "",
      description: "",
      status: false,
      tag: "",
    });
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  function drag(e, id) {
    e.dataTransfer.setData("todoId", id);
  }

  function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("todoId");

    dispatch(changeTodoStatus(id));
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

   const filteredTodos = todosArray.filter((todo) => {
    if (!debouncedSearch) return true;

    return todo.tagsArray?.some((tag) =>
      tag.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  });

  const pendingTodos = filteredTodos.filter(
    (t) => t.status === false
  );

  const completedTodos = filteredTodos.filter(
    (t) => t.status === true
  );

  return (
    <>
      <h1>Todo App</h1>

      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="title"
          value={todoObj.title}
          placeholder="Enter Title"
          onChange={handelChange}
          required
        />

        <textarea
          name="description"
          value={todoObj.description}
          onChange={handelChange}
          placeholder="Enter your task"
          required
        />

        <input
          type="text"
          name="tag"
          value={todoObj.tag}
          onChange={handelChange}
          placeholder="Enter tags (comma separated)"
        />

        <button type="submit">Add Task</button>
      </form>

      {/* -------- SEARCH -------- */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search task by tags"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="Box-1">
        <div
          className="todo-column"
          onDrop={drop}
          onDragOver={allowDrop}
        >
          <h2>Pending</h2>

          {pendingTodos.length === 0 && <p>No tasks found</p>}

          {pendingTodos.map((ele) => (
            <div
              key={ele.id}
              className="todo-card"
              draggable
              onDragStart={(e) => drag(e, ele.id)}
            >
              <h3>{ele.title}</h3>
              <p>{ele.description}</p>

              <div className="tag-container">
                {ele.tagsArray?.map((tag, index) => (
                  <span key={index} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => dispatch(deleteTodo(ele.id))}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* -------- COMPLETED -------- */}
        <div
          className="todo-column"
          onDrop={drop}
          onDragOver={allowDrop}
        >
          <h2>Completed</h2>

          {completedTodos.length === 0 && <p>No tasks found</p>}

          {completedTodos.map((ele) => (
            <div
              key={ele.id}
              className="todo-card"
              draggable
              onDragStart={(e) => drag(e, ele.id)}
            >
              <h3>{ele.title}</h3>
              <p>{ele.description}</p>

              <div className="tag-container">
                {ele.tagsArray?.map((tag, index) => (
                  <span key={index} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => dispatch(deleteTodo(ele.id))}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
