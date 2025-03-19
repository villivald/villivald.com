import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ThemeContext } from "../../context";
import styles from "../../styles/Dropdown.module.css";

export default function DropdownMenu() {
  const theme = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const intl = useIntl();

  const menuItems = [
    "about",
    "blog",
    "books",
    "contact",
    "cycling",
    "now",
    "old",
    "projects",
    "uses",
    "workandstudy",
  ];

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (e.relatedTarget === null) {
      setMenuOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Prevent default behavior to avoid quick toggle
      setMenuOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={styles.dropdown}
      onClick={() => setMenuOpen((prev) => !prev)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      role="menu"
      tabIndex={-1}
    >
      <button
        className={styles.dropdownButton}
        aria-haspopup="true"
        aria-expanded={menuOpen}
        data-theme={theme}
        data-open={menuOpen}
        aria-label={intl.formatMessage({ id: "menu" })}
      >
        <span>
          <FormattedMessage id="menu" />
        </span>
      </button>
      <ul
        role="menu"
        aria-hidden={!menuOpen}
        className={theme === "dark" ? styles.darkMenu : styles.lightMenu}
        data-open={menuOpen}
      >
        {menuItems.map((item) => (
          <li
            key={item}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                window.location.href = `/${item}`;
              }
            }}
            data-active={
              usePathname() === `/${item}` ||
              (usePathname() === "/statistics" && item === "books")
            }
          >
            <Link href={`/${item}`} tabIndex={-1}>
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
