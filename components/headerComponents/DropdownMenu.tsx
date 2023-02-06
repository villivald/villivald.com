import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

import { useTheme } from "@mui/material/styles";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { colors } from "../../utils/colors";

import styles from "../../styles/Dropdown.module.css";

const DropdownMenu = () => {
  const theme = useTheme().palette.mode;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

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
    <div className={styles.dropdownMenu}>
      <Button
        className={styles.dropdownButton}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: theme === "dark" ? colors.white : colors.dark }}
      >
        <span>MENU</span>
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        className={
          theme === "dark"
            ? styles.darkMenuComponent
            : styles.innerMenuComponent
        }
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.id}>
            <Link href={`/${item.id}`}>
              <Image
                src={`/emojis/${item.emoji}.svg`}
                width={24}
                height={24}
                alt={item.id}
              />
              <FormattedMessage id={item.id} />
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownMenu;
