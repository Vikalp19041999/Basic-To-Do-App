import { useState } from "react";
import BackDrop from "./BackDrop";
import Modal from "./Modal";

function Todo(props) {
  const [showModal, setModal] = useState(false);

  function deleteHandler() {
    setModal(true);
  }

  function closeHandler() {
    setModal(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal ? (
        <Modal onCancel={closeHandler} onConfirm={closeHandler} />
      ) : null}
      {showModal ? <BackDrop onClick={closeHandler} /> : null}
    </div>
  );
}

export default Todo;
