import styles from "./result.module.scss";
import ReactMarkdown from "react-markdown";
import { useContext } from "react";
import editorContext from "../../editorContext";

const Result = () => {
  const { markdownText } = useContext(editorContext);

  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      <ReactMarkdown>{markdownText}</ReactMarkdown>{" "}
    </div>
  );
};

export default Result;
