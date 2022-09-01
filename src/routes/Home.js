import { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  //console.log(props);
  const [text, setText] = useState();
  const onChange = (event) => {
    setText(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
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
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
