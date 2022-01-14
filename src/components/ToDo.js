import { useState } from 'react';
import BackDrop from "./BackDrop";
import Modal from "./Modal";

function Todo(props) {

    const [showModal, setModal] = useState(false);

    function deleteHandler() {
        setModal(true);
    }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {showModal ? <Modal /> : null}
      {showModal ? <BackDrop /> : null}  
    </div>
  );
}

export default Todo;