import { useState } from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

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
          <Link href="/about">
            <FormattedMessage id="about" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/books">
            <FormattedMessage id="books" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/contact">
            <FormattedMessage id="contact" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/koripallopaikat">
            <FormattedMessage id="koripallopaikat" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/projects">
            <FormattedMessage id="projects" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/study">
            <FormattedMessage id="study" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/uses">
            <FormattedMessage id="uses" />
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
