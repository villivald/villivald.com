import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import styles from "../../styles/Uses.module.css";

const hardware = [
  {
    name: "iMac",
    link: "https://www.apple.com/imac-24/",
    description: "My main computer",
  },
  {
    name: "MacBook Pro",
    link: "https://www.apple.com/macbook-pro-13/",
    description: "My secondary computer",
  },
  {
    name: "iPhone 11",
    link: "https://www.apple.com/iphone-11/",
    description: "My main phone",
  },
  {
    name: "iPad",
    link: "https://www.apple.com/ipad/",
    description: "My main tablet",
  },
  {
    name: "Apple Watch Ultra",
    link: "https://www.apple.com/apple-watch/",
    description: "My main watch",
  },
  {
    name: "Marshall Majot IV",
    link: "https://www.marshallheadphones.com/major-iv",
    description: "My main headphones",
  },
  {
    name: "Logitech MX Master 3",
    link: "https://www.logitech.com/en-us/product/mx-master-3",
    description: "My main mouse",
  },
  {
    name: "Keychron K2",
    link: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
    description: "My main keyboard",
  },
  {
    name: "Magic Trackpad",
    link: "https://www.apple.com/magic-trackpad-2/",
    description: "My main trackpad",
  },
];

const software = [
  {
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
    description: "My main code editor",
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
    description: "My main design tool",
  },
  {
    name: "Notion",
    link: "https://www.notion.so/",
    description: "My main note taking app",
  },
];

const other = [
  {
    name: "Apple AirPods Pro",
    link: "https://www.apple.com/airpods-pro/",
    description: "My main earphones",
  },
  {
    name: "Apple AirPods Max",
    link: "https://www.apple.com/airpods-max/",
    description: "My main headphones",
  },
  {
    name: "Apple Magic Keyboard",
    link: "https://www.apple.com/magic-keyboard/",
    description: "My main keyboard",
  },
];

const Uses = () => {
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
      <p>
        <FormattedMessage id="usesText" />
        <Link href="https://uses.tech/">uses.tech</Link>.
      </p>
      <div>
        <div>
          <h1>Hardware</h1>
          <ul>
            {hardware.map((item) => (
              <li key={item.name}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Software</h1>
          <ul>
            {software.map((item) => (
              <li key={item.name}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Other</h1>
          <ul>
            {other.map((item) => (
              <li key={item.name}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Uses;
