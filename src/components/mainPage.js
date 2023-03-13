import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../App.module.css";

const MainPage = ({ list, setActivated, setList }) => {
  // let date = new Date().toLocaleString();
  // const [time, setTime] = useState(
  //   () => localStorage.getItem("savedTime") || new Date().toString()
  // );

  // useEffect(() => {
  //   localStorage.setItem("savedTime", time);
  // }, [time]);

  const handleDelete = (noteObj) => {
    setList(list.filter((item) => item.id !== noteObj));
  };

  // const [time, setTime] = useState([] || new Date().toLocaleTimeString());
  // const [time1, setTime1] = useState([]);
  // const timeObj = {
  //   time: time,
  // };
  // setTime1([...time, timeObj.time]);

  // useEffect(() => {
  //   localStorage.setItem("savedTime", time);
  // }, [time, list]);

  return (
    <div className={styles.main}>
      <h2>Notes..</h2>

      <button onClick={() => setActivated("active")}>Write a note</button>
      <button>Review a notes</button>
      {list.map((note) => {
        return (
          <div key={note.id}>
            <h3>{note.note.noteTitle}</h3>
            <div>{note.note.noteDes}</div>
            <div>{note.note.timestamp}</div>
            <button
              // onClick={() => handleDelete(note.id)}
              onClick={handleDelete.bind(undefined, note.id)}
              type="submit"
            >
              Delete
            </button>
            <button
              // onClick={() => handleDelete(note.id)}
              // onClick={handleDelete.bind(undefined, note.id)}
              type="submit"
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MainPage;
