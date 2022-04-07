import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { fakeItems } from "../../mock/fakeItems";
import styles from "./Dropdown.module.css";
import DropdownButton from "./DropdownButton/DropdownButton";
import DropdownDialog from "./DropdownDialog/DropdownDialog";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className={styles.container} ref={dropdownRef}>
      <DropdownButton setIsOpen={setIsOpen} />
      <DropdownDialog isOpen={isOpen} items={fakeItems} />
    </div>
  );
};

export default Dropdown;
