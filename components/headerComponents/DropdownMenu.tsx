import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";

import { ThemeContext } from "../../context";

import styles from "../../styles/Dropdown.module.css";

export default function DropdownMenu() {
  const theme = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "about",
    "blog",
    "contact",
    "koripallopaikat",
    "books",
    "projects",
    "study",
    "uses",
    "old",
  ];

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (e.relatedTarget === null) {
      setMenuOpen(false);
    }
  };

  return (
    <div
      className={styles.dropdown}
      onClick={() => setMenuOpen(!menuOpen)}
      onBlur={handleBlur}
    >
      <button
        className={styles.dropdownButton}
        aria-haspopup="true"
        data-theme={theme}
        data-open={menuOpen}
      >
        <span>
          <FormattedMessage id="menu" />
        </span>
      </button>
      <ul
        className={theme === "dark" ? styles.darkMenu : styles.lightMenu}
        data-open={menuOpen}
      >
        {menuItems.map((item) => (
          <li key={item}>
            <Link href={`/${item}`}>
              <Image
                src={`/emojis/${item}.svg`}
                data-name={item}
                width={24}
                height={24}
                alt={`${item} emoji`}
              />
              <FormattedMessage id={item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
