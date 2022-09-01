import { useState } from "react";

function Home() {
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
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="To Do"
          value={text}
          onChange={onChange}
        />
        <button>입력</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
