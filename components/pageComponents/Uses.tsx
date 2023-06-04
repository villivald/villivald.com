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
    name: 'iMac 24" 2021',
    link: "https://www.apple.com/imac-24/",
    description: "My main computer",
    image: "https://picsum.photos/200/300",
  },
  {
    name: 'MacBook Pro 13" 2017',
    link: "https://support.apple.com/kb/SP754?locale=en_US",
    description: "My secondary computer",
    image: "https://picsum.photos/200/300",
  },
  {
    name: 'MacBook Pro 16" 2023',
    link: "https://support.apple.com/kb/SP890?locale=en_US",
    description: "My work computer",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "iPhone 11",
    link: "https://www.apple.com/iphone-11/",
    description: "Phone",
    image: "https://picsum.photos/200/300",
  },
  {
    name: 'iPad 10.2" 2019',
    link: "https://support.apple.com/kb/SP807?locale=en_US",
    description: "Tablet",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Apple Watch Ultra",
    link: "https://www.apple.com/fi/apple-watch-ultra/",
    description: "Watch",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Marshall Major IV",
    link: "https://www.marshallheadphones.com/major-iv",
    description: "Headphones",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Jaybird Vista 2",
    link: "https://www.jaybirdsport.com/fi-fi/vista2.985-000934.html",
    description: "Earbuds",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Keychron K2",
    link: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
    description: "Keyboard",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Logitech MX Master 3",
    link: "https://www.logitech.com/en-us/product/mx-master-3",
    description: "Mouse",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Magic Trackpad",
    link: "https://www.apple.com/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface?fnode=4c4cb374a09aed68c2096ce82deae6ae274700d365edaf8d4e92f2503a2f783f33aedba3931b147d2c774a0d460338253648be353c15eb13e158b3f1f5fdf318647ad4a32e303f4dd81b8ca4ecaec00c85228c8e65c3ba00f3f6edf21bf60981",
    description: "Trackpad",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Geekboards Macropad",
    link: "https://drop.com/buy/geekboards-rgb-hot-swappable-macropad-v2",
    description: "Macropad",
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
    name: "Arc Browser",
    link: "https://arc.net/",
    description: "Main Browser",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Brave",
    link: "https://brave.com/",
    description: "Secondary Browser",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
    description: "Design tool",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Notion",
    link: "https://www.notion.so/",
    description: "Note taking app",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Things",
    link: "https://culturedcode.com/things/",
    description: "Task manager",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Obsidian",
    link: "https://obsidian.md/",
    description: "Note taking app",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Craft",
    link: "https://www.craft.do/",
    description: "Note taking app",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "ProtonMail",
    link: "https://protonmail.com/",
    description: "Email client",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Spark",
    link: "https://sparkmailapp.com/",
    description: "Email client",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Telegram",
    link: "https://telegram.org/",
    description: "Messaging app",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Endel",
    link: "https://endel.io/",
    description: "Music app",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "YouTube Music",
    link: "https://music.youtube.com/",
    description: "Music app",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Pocket Casts",
    link: "https://www.pocketcasts.com/",
    description: "Podcast app",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Bookbeat",
    link: "https://www.bookbeat.com/",
    description: "Audiobook app",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Strava",
    link: "https://www.strava.com/athletes/42251423",
    description: "Fitness app",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Ivory",
    link: "https://tapbots.com/ivory/",
    description: "Mastodon client",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Grammarly",
    link: "https://www.grammarly.com/",
    description: "Writing assistant",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Bitwarden",
    link: "https://bitwarden.com/",
    description: "Password manager",
    image: "https://picsum.photos/200/300",
  },
];

const other = [
  {
    name: "Canyon Grail 7 eTap",
    link: "https://www.canyon.com/en-fi/gravel-bikes/performance/grail/al/grail-7-etap/3094.html",
    description: "Bicycle",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Cafe du Cycliste Backpack",
    link: "https://www.cafeducycliste.com/en_roe/waterproof-backpack-blue.html",
    description: "Backpack",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Hydro Flask",
    link: "https://www.hydroflask.com/21-oz-standard-mouth",
    description: "Water bottle",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Productivity Daily Desk Pad",
    link: "https://www.intelligentchange.com/products/productivity-daily-desk-pad",
    description: "Daily planner",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Moleskine x Kaweco Fountain Pen",
    link: "https://www.moleskine.com/shop/writing-tools/kaweco/kaweco-fountain-pen/fountain-pen-black-8056598854909.html",
    description: "Fountain pen",
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
