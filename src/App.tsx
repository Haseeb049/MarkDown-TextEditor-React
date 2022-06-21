import { useState } from "react";
import styles from "./App.module.scss";
import MarkedInput from "./components/markedInput";
import Result from "./components/result";
import EditorContext from "./editorContext";
function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };
  return (
    <EditorContext.Provider value={contextValue}>
      {" "}
      <div className={styles.appContainer}>
        <div className={styles.title}>MarkDown Editor</div>
        <div className={styles.editorContainer}>
          <MarkedInput />
          <Result />
        </div>
      </div>
    </EditorContext.Provider>
  );
}

export default App;
