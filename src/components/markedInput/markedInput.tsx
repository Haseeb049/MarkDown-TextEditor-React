import { ChangeEvent, useContext } from "react";
import editorContext from "../../editorContext";
import styles from "./markedInput.module.scss";

const MarkedInput = () => {
  const { setMarkdownText } = useContext(editorContext);

  const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      <textarea onChange={onInputChange} className={styles.textArea}></textarea>
    </div>
  );
};

export default MarkedInput;
