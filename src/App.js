import { React, useEffect, useState } from "react";
import MainPage from "./components/mainPage";
import CreateTodo from "./components/createTodo";
import styles from "./App.module.css";

const locallyStoredNotes = JSON.parse(localStorage.getItem("note"));

const App = () => {
  const [input, setInput] = useState("");
  const [textArea, setTextArea] = useState("");
  const [list, setList] = useState(locallyStoredNotes || []);
  let [activated, setActivated] = useState("");

  function noteSaved() {
    let noteObj = {
      id: Math.random(),
      note: {
        noteTitle: input,
        noteDes: textArea,
        timestamp: new Date().toLocaleString(),
      },
    };
    if (!noteObj.note.noteTitle || !noteObj.note.noteDes) {
      setActivated("");
      return;
    }

    setList([...list, noteObj]);
    setInput("");
    setTextArea("");
    setActivated("");
  }

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <Timer />
      <MainPage list={list} setActivated={setActivated} setList={setList} />
      {activated === "active" && (
        <CreateTodo
          noteSaved={noteSaved}
          setInput={setInput}
          setTextArea={setTextArea}
          input={input}
          textArea={textArea}
          // handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{currentTime.toLocaleTimeString()}</div>;
}

export default App;
