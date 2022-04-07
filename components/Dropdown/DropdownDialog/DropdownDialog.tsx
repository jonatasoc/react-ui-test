import DropdownItem, { DropdownItemProps } from "../DropdownItem/DropdownItem";
import styles from "./DropdownDialog.module.css";

interface DropdownDialogProps {
  items: DropdownItemProps[];
  isOpen: boolean;
}

const DropdownDialog: React.FC<DropdownDialogProps> = ({ items, isOpen }) => {
  return (
    <div
      className={styles.container}
      style={{
        display: isOpen ? "initial" : "none",
      }}
    >
      {items.map(({ name, isActive }) => (
        <DropdownItem key={name} name={name} isActive={isActive} />
      ))}
    </div>
  );
};

export default DropdownDialog;
