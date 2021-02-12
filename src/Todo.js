import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const renderItem = (title, status, updateItemsHandler, nextStatus, click,id) => (
  <li className="text-left" >
    <div className=" d-flex justify-content-between align-items-center  ">
    
    <div className="task_box  "    >
      { title }
      </div>
<br/>
     <div>
     <button 
      className="btn2" 
      onClick={() => updateItemsHandler(nextStatus)}
      ><FontAwesomeIcon icon={faCheckCircle} /> </button>
      <button className="btn3" 
      onClick={() => click (id)}
     ><FontAwesomeIcon icon={faTrash} />  </button>
    </div>
</div>


  </li>

);

const Todo = (props) => {
  const { input, updateItemsHandler, requiredStatus, nextStatus, click, id  } = props;
  const { title, status } = input;

  return (
    <div>

      {status === requiredStatus
        ? renderItem(title, status, updateItemsHandler, nextStatus, click, id)
        : null}
    </div>
  );
};

export default Todo;
