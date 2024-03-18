import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useContext } from "react";
import { FormattedMessage } from "react-intl";

import { ThemeContext } from "../../context";
import styles from "../../styles/Uses.module.css";

interface CSSPropertiesWithVars extends CSSProperties {
  "--url"?: string;
}

const hardware = [
  {
    name: 'iMac 24" 2021',
    link: "https://www.apple.com/imac-24/",
    description: "My main computer",
    image: "imac",
  },
  {
    name: 'MacBook Pro 13" 2017',
    link: "https://support.apple.com/kb/SP754?locale=en_US",
    description: "My secondary computer",
    image: "macbook13",
  },
  {
    name: "iPhone 15",
    link: "https://www.apple.com/iphone-15/",
    description: "Phone",
    image: "iphone",
  },
  {
    name: "Apple Watch Ultra",
    link: "https://www.apple.com/fi/apple-watch-ultra/",
    description: "Watch",
    image: "watch",
  },
  {
    name: "AirPods Pro",
    link: "https://www.apple.com/airpods-pro/",
    description: "Earbuds",
    image: "airpods",
  },
  {
    name: "Oura Ring",
    link: "https://ouraring.com/",
    description: "Ring",
    image: "oura",
  },
  {
    name: "Keychron K2",
    link: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
    description: "Keyboard",
    image: "key",
  },
  {
    name: "Logitech MX Master 3",
    link: "https://www.logitech.com/en-us/product/mx-master-3",
    description: "Mouse",
    image: "mouse",
  },
  {
    name: "Magic Trackpad",
    link: "https://www.apple.com/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface?fnode=4c4cb374a09aed68c2096ce82deae6ae274700d365edaf8d4e92f2503a2f783f33aedba3931b147d2c774a0d460338253648be353c15eb13e158b3f1f5fdf318647ad4a32e303f4dd81b8ca4ecaec00c85228c8e65c3ba00f3f6edf21bf60981",
    description: "Trackpad",
    image: "trackpad",
  },
  {
    name: "Geekboards Macropad",
    link: "https://drop.com/buy/geekboards-rgb-hot-swappable-macropad-v2",
    description: "Macropad",
    image: "macropad",
  },
];

const software = [
  {
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
    description: "My main code editor",
    image: "vscode",
  },
  {
    name: "Arc Browser",
    link: "https://arc.net/",
    description: "Main Browser",
    image: "arc",
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
    description: "Design tool",
    image: "figma",
  },
  {
    name: "Notion",
    link: "https://www.notion.so/",
    description: "Note taking app",
    image: "notion",
  },
  {
    name: "Amie",
    link: "https://www.amie.so/",
    description: "Task manager",
    image: "amie",
  },
  {
    name: "Obsidian",
    link: "https://obsidian.md/",
    description: "Note taking app",
    image: "obsidian",
  },
  {
    name: "Craft",
    link: "https://www.craft.do/",
    description: "Note taking app",
    image: "craft",
  },
  {
    name: "Fastmail",
    link: "https://fastmail.com/",
    description: "Email client",
    image: "fastmail",
  },
  {
    name: "Spark",
    link: "https://sparkmailapp.com/",
    description: "Email client",
    image: "spark",
  },
  {
    name: "Telegram",
    link: "https://telegram.org/",
    description: "Messaging app",
    image: "telegram",
  },
  {
    name: "Endel",
    link: "https://endel.io/",
    description: "Music app",
    image: "endel",
  },
  {
    name: "Youtube Music",
    link: "https://music.youtube.com/",
    description: "Music app",
    image: "youtube",
  },
  {
    name: "Pocket Casts",
    link: "https://www.pocketcasts.com/",
    description: "Podcast app",
    image: "pocket",
  },
  {
    name: "Bookbeat",
    link: "https://www.bookbeat.com/",
    description: "Audiobook app",
    image: "bookbeat",
  },
  {
    name: "Strava",
    link: "https://www.strava.com/athletes/42251423",
    description: "Fitness app",
    image: "strava",
  },
  {
    name: "Ivory",
    link: "https://tapbots.com/ivory/",
    description: "Mastodon client",
    image: "ivory",
  },
  {
    name: "Grammarly",
    link: "https://www.grammarly.com/",
    description: "Writing assistant",
    image: "grammarly",
  },
  {
    name: "Bitwarden",
    link: "https://bitwarden.com/",
    description: "Password manager",
    image: "bitwarden",
  },
];

const other = [
  {
    name: "Canyon Grail 7 eTap",
    link: "https://www.canyon.com/en-fi/gravel-bikes/performance/grail/al/grail-7-etap/3094.html",
    description: "Bicycle",
    image: "canyon",
  },
  {
    name: "Zwift Hub One",
    link: "https://eu.zwift.com/collections/all/products/zwift-hub-one?variant=44687355281659",
    description: "Smart trainer",
    image: "zwift",
  },
  {
    name: "Cafe du Cycliste Backpack",
    link: "https://www.cafeducycliste.com/en_roe/waterproof-backpack-blue.html",
    description: "Backpack",
    image: "cycliste",
  },
  {
    name: "Hydro Flask",
    link: "https://www.hydroflask.com/21-oz-standard-mouth",
    description: "Water bottle",
    image: "flask",
  },
  {
    name: "Owala FreeSip",
    link: "https://owalalife.com/products/freesip?variant=43048895316127",
    description: "Water bottle",
    image: "owala",
  },
  {
    name: "Productivity Daily Desk Pad",
    link: "https://www.intelligentchange.com/products/productivity-daily-desk-pad",
    description: "Daily planner",
    image: "deskpad",
  },
  {
    name: "Moleskine x Kaweco Fountain Pen",
    link: "https://www.moleskine.com/shop/writing-tools/kaweco/kaweco-fountain-pen/fountain-pen-black-8056598854909.html",
    description: "Fountain pen",
    image: "moleskine",
  },
];

export default function Uses() {
  const theme = useContext(ThemeContext);

  const renderList = (
    items: { name: string; link: string; description: string; image: string }[]
  ) => {
    return items.map((item) => (
      <li
        key={item.name}
        style={
          {
            "--url": `url("/uses/${item.image}.webp")`,
          } as CSSPropertiesWithVars
        }
        translate="no"
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
          alt="Workplace - laptop, external monitor, lamp, pens, notebook, etc."
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
}
