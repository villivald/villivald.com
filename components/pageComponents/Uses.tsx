import { CSSProperties, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import styles from "../../styles/Uses.module.css";
import { ThemeContext } from "../../context";

interface CSSPropertiesWithVars extends CSSProperties {
  "--url"?: string;
}

const hardware = [
  {
    name: "iMac",
    link: "https://www.apple.com/imac-24/",
    description: "My main computer",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "MacBook Pro",
    link: "https://www.apple.com/macbook-pro-13/",
    description: "My secondary computer",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "iPhone 11",
    link: "https://www.apple.com/iphone-11/",
    description: "My main phone",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "iPad",
    link: "https://www.apple.com/ipad/",
    description: "My main tablet",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Apple Watch Ultra",
    link: "https://www.apple.com/apple-watch/",
    description: "My main watch",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Marshall Majot IV",
    link: "https://www.marshallheadphones.com/major-iv",
    description: "My main headphones",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Logitech MX Master 3",
    link: "https://www.logitech.com/en-us/product/mx-master-3",
    description: "My main mouse",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Keychron K2",
    link: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
    description: "My main keyboard",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Magic Trackpad",
    link: "https://www.apple.com/magic-trackpad-2/",
    description: "My main trackpad",
    image: "https://picsum.photos/200/300",
  },
];

const software = [
  {
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
    description: "My main code editor",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
    description: "My main design tool",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Notion",
    link: "https://www.notion.so/",
    description: "My main note taking app",
    image: "https://picsum.photos/200/300",
  },
];

const other = [
  {
    name: "Apple AirPods Pro",
    link: "https://www.apple.com/airpods-pro/",
    description: "My main earphones",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Apple AirPods Max",
    link: "https://www.apple.com/airpods-max/",
    description: "My main headphones",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Apple Magic Keyboard",
    link: "https://www.apple.com/magic-keyboard/",
    description: "My main keyboard",
    image: "https://picsum.photos/200/300",
  },
];

const Uses = () => {
  const theme = useContext(ThemeContext);

  const renderList = (
    items: { name: string; link: string; description: string; image: string }[]
  ) => {
    return items.map((item) => (
      <li
        key={item.name}
        style={{ "--url": `url("${item.image}")` } as CSSPropertiesWithVars}
      >
        <Link href={item.link}>{item.name}</Link>
      </li>
    ));
  };

  return (
    <div className={styles.mainContainer}>
      <figure>
        <Image
          src="/images/uses.webp"
          alt="Image of my workspace"
          width={500}
          height={300}
          useMap="#workmap"
        />
        <map name="workmap">
          <area
            shape="rect"
            coords="34,44,270,350"
            alt="Computer"
            href="computer.htm"
          />
          <area
            shape="rect"
            coords="290,172,333,250"
            alt="Phone"
            href="phone.htm"
          />
          <area
            shape="circle"
            coords="337,300,44"
            alt="Cup of coffee"
            href="coffee.htm"
          />
        </map>
      </figure>
      <p data-theme={theme}>
        <FormattedMessage id="usesText" />
        <Link href="https://uses.tech/">uses.tech</Link>.
      </p>
      <div data-theme={theme}>
        <div>
          <h1>
            <FormattedMessage id="hardware" />
          </h1>
          <ul>{renderList(hardware)}</ul>
        </div>
        <div>
          <h1>
            <FormattedMessage id="software" />
          </h1>
          <ul>{renderList(software)}</ul>
        </div>
        <div>
          <h1>
            <FormattedMessage id="other" />
          </h1>
          <ul>{renderList(other)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Uses;
