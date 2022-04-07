import styles from "./DropdownItem.module.css";

export interface DropdownItemProps {
  name: string;
  isActive: boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ name, isActive }) => {
  return (
    <div className={styles.container}>
      <span
        className={styles.itemName}
        style={{
          backgroundColor: isActive ? "#0054a8" : "transparent",
        }}
      >
        {name}
      </span>
    </div>
  );
};

export default DropdownItem;
