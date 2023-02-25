import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

import { ThemeContext } from "../../context";
import { colors } from "../../utils/colors";

import styles from "../../styles/Dropdown.module.css";

const DropdownMenu = () => {
  const theme = useContext(ThemeContext);

  const menuItems = [
    {
      id: "about",
      emoji: "bike",
    },
    {
      id: "blog",
      emoji: "pen",
    },
    {
      id: "contact",
      emoji: "phone",
    },
    {
      id: "koripallopaikat",
      emoji: "basketball",
    },
    {
      id: "books",
      emoji: "books",
    },
    {
      id: "projects",
      emoji: "coding",
    },
    {
      id: "study",
      emoji: "student",
    },
    {
      id: "uses",
      emoji: "tools",
    },
    {
      id: "old",
      emoji: "old",
    },
  ];

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownButton}
        aria-haspopup="true"
        data-theme={theme}
        style={{ color: theme === "dark" ? colors.white : colors.dark }}
      >
        <span>MENU</span>
      </button>
      <ul className={theme === "dark" ? styles.darkMenu : styles.lightMenu}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={`/${item.id}`}>
              <Image
                src={`/emojis/${item.emoji}.svg`}
                data-name={item.emoji}
                width={24}
                height={24}
                alt={item.id}
              />
              <FormattedMessage id={item.id} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
