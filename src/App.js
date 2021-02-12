import React, { useState } from "react";
import Todo from "./Todo";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const App = () => {
  const [inputName, setInputName] = useState(" ");
  const [itemsList, setItemsList] = useState([]);
  // const [nameError, setNameError] = useState(" ");

  const itemEvent = (event) => {
    event.preventDefault();

    const name = event.target.value.substr(0, 16);
    setInputName(name);
  };

  const addItemHandler = (event) => {
    // if ( inputName === " " ) return;
    if (inputName.trim()) {
      const tempArr = [...itemsList];
      tempArr.push({
        title: inputName,
        status: "todo"
      });
      setItemsList(tempArr);
      setInputName("");
    }
  };

  const updateItemsHandler = (index, status) => {
    console.log("index", index);
    console.log("status", status);

    const newList = [...itemsList];
    newList[index].status = status;
    console.log(status);
    setItemsList(newList);
  };

  const deleteItemHandler = (id) => {
    console.log(id);
    const tempArr = [...itemsList];
    tempArr.splice(id, 1);
    setItemsList(tempArr);
  };

  return (
    <div className="App ">
      <br />
      <h1 className="font-weight-bold">To-Do-List</h1>
      <br />
      <input
        className="text-uppercase"
        type="text"
        placeholder="Add An Items"
        value={inputName}
        onChange={itemEvent}
      />

      <button
        className="btn btn-primary ml-2  btn-lg btn1"
        onClick={addItemHandler}
      >
        Add
      </button>
      <br />
      <br />

      <div
        className={
          "d-flex flex-row flex-wrap justify-content-center  text-uppercase"
        }
      >
        <div className="Task_List  border border-danger">
          <h4 className="font-weight-bold"> Task added </h4>
          <ol>
            {itemsList.map((itemval, index) => (
              <Todo
                key={index}
                id={index}
                input={itemval}
                requiredStatus="todo"
                nextStatus="inprogress"
                updateItemsHandler={(status) =>
                  updateItemsHandler(index, status)
                }
                click={(status) => deleteItemHandler(index, status)}
              />
            ))}
          </ol>
        </div>

        <br />
        <br />

        <div className="Task1_List border border-warning">
          <h4 className="font-weight-bold"> Tasks Inprogress </h4>
          <ol>
            {itemsList.map((itemval, index) => (
              <Todo
                key={index}
                id={index}
                input={itemval}
                requiredStatus="inprogress"
                nextStatus="done"
                updateItemsHandler={(status) =>
                  updateItemsHandler(index, status)
                }
                click={(status) => deleteItemHandler(index, status)}
              />
            ))}
          </ol>
        </div>

        <br />
        <br />

        <div className="Task2_List border border-success ">
          <h4 className="font-weight-bold"> Tasks Complited </h4>
          <ol>
            {itemsList.map((itemval, index) => (
              <Todo
                key={index}
                id={index}
                input={itemval}
                requiredStatus="done"
                nextStatus="todo"
                updateItemsHandler={(status) =>
                  updateItemsHandler(index, status)
                }
                click={(status) => deleteItemHandler(index, status)}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
