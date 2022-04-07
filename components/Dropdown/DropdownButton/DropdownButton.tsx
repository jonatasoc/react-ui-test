import { Dispatch, SetStateAction } from "react";
import styles from "./DropdownButton.module.css";

interface DropdownButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ setIsOpen }) => {
  return (
    <div
      className={styles.container}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  );
};

export default DropdownButton;
