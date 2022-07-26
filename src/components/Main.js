import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import styles from "./Main.module.css";
// import Notepad from "./Notepad";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      id: activeNote.id,
      [key]: value,
      lastModified: Date.now(),
    });
  };


  if (Object.keys(activeNote).length < 1)
    return <div className={styles["no-active-note"]}>No note selected</div>;

  return (
    <div className={styles["app-main"]}>
      <div className={styles["app-main-edit"]}>
        <input
          type="text"
          id="title"
          value={activeNote?.title || ""}
          onChange={(event) => onEditField("title", event.target.value)}
          autoFocus
        />

        <textarea
          placeholder="write your note here..."
          value={activeNote?.body || ""}
          id="body"
          onChange={(event) => onEditField("body", event.target.value)}
        />
      </div>

      <div className={styles["app-main-note-preview"]}>
        <h1 className={styles["preview-title"]}>{activeNote.title}</h1>
        <ReactMarkdown className={styles["markdown-preview"]}>{activeNote.body}</ReactMarkdown>
      </div>
    </div>
  );
};

Main.propTypes = {
  activeNote: PropTypes.object.isRequired,
  onUpdateNote: PropTypes.func.isRequired
}

export default Main;
