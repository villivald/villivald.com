import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ThemeContext } from "../../context";
import styles from "../../styles/Dropdown.module.css";

export default function DropdownMenu() {
  const theme = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const intl = useIntl();
  const pathname = usePathname();

  const menuItems = [
    "blog",
    "books",
    "contact",
    "cycling",
    "now",
    "old",
    "photobooth",
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
    if (e.key === "Escape") {
      setMenuOpen(false);
    }
  };

  return (
    <div
      className={styles.dropdown}
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
        aria-controls="dropdown-menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span>
          <FormattedMessage id="menu" />
        </span>
      </button>
      <ul
        id="dropdown-menu"
        role="menu"
        aria-hidden={!menuOpen}
        className={theme === "dark" ? styles.darkMenu : styles.lightMenu}
        data-open={menuOpen}
      >
        {menuItems.map((item) => (
          <li
            key={item}
            role="menuitem"
            data-active={
              pathname === `/${item}` ||
              (pathname === "/statistics" && item === "books")
            }
          >
            <Link
              href={`/${item}`}
              aria-current={
                pathname === `/${item}` ||
                (pathname === "/statistics" && item === "books")
                  ? "page"
                  : undefined
              }
            >
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
