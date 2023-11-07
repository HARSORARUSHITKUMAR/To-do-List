import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoreducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="add-icon"
              title="Add Items"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            >
              <FontAwesomeIcon icon={faPlus} />
            </i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <i
                    className="delete-icon"
                    title="Delete Item"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </i>
                </div>
              );
            })}
          </div>

          <div className="show-Items">
            <button
              className="btn effect 04"
              data-sm-link-text="remove All"
              onClick={() => dispatch(removeTodo())}
            >
              <span className="remove-all">Remove All</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
