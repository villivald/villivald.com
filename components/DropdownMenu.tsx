import { useState } from "react";
import Link from "next/link";

import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "../styles/Dropdown.module.css";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className={styles.dropdownMenu}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        className={styles.innerMenuComponent}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link href="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/books">Books</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/contact">Contact</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/koripallopaikat">Koripallopaikat</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/projects">Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/study">Study</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/uses">Uses</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
