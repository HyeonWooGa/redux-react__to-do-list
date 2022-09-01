import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionAdd } from "../store";

function Home() {
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(actionAdd(text));
    setText("");
  };
  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="To Do"
          value={text}
          onChange={onChange}
        />
        <button>입력</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </>
  );
}

/* function mapStateToProps(state) {
  return { toDos: state };
} */

export default Home;
