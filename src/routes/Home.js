import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actinoDelete, actionAdd } from "../store";

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

  const onClick = (event) => {
    //console.log(event.target.parentNode.id);
    dispatch(actinoDelete(event.target.parentNode.id));
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
        {toDos.map((toDo) => {
          return (
            <li id={toDo.id} key={toDo.id}>
              {toDo.text}&nbsp;&nbsp;
              <button onClick={onClick}>❌</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/* function mapStateToProps(state) {
  return { toDos: state };
} */

export default Home;
