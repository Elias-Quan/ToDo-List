import React from "react";
import styles from "../App.module.css";

const CreateTodo = ({ setInput, input, setTextArea, textArea, noteSaved }) => {
  return (
    <div className={styles.createTodo}>
      <h3>What do you want to do..?</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="Title"
        name="title"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <br />
      <textarea
        className={styles.textarea}
        name="title"
        placeholder="type here..."
        onChange={(e) => {
          setTextArea(e.target.value);
        }}
        value={textArea}
      />
      <button type="submit" onClick={noteSaved}>
        Save
      </button>
    </div>
  );
};

export default CreateTodo;
