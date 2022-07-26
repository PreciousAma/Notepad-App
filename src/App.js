import React from "react";
import Notepad from "./components/Notepad.js";
import styles from  './App.module.css';

function App() {
  return (
    <div className={styles["App"]}>
      <Notepad />
    </div>
  );
}

export default App;
