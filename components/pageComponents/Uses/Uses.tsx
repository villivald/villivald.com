import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Uses.module.css";
import hardware from "./data/hardware.json";
import other from "./data/other.json";
import software from "./data/software.json";

interface CSSPropertiesWithVars extends CSSProperties {
  "--url"?: string;
}

type UsesDataCollection = {
  name: string;
  link: string;
  description: string;
  image: string;
};

export default function Uses() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  const dataToRender: { [key: string]: UsesDataCollection[] }[] = [
    hardware,
    software,
    other,
  ];

  const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;

    target.style.setProperty("--mouse-x", `${event.clientX}px`);
    target.style.setProperty("--mouse-y", `${event.clientY}px`);
  };

  const renderList = (items: UsesDataCollection[]) => {
    return items.map((item: UsesDataCollection) => (
      <li
        key={item.name}
        style={
          {
            "--url": `url("/uses/${item.image}.avif")`,
          } as CSSPropertiesWithVars
        }
        translate="no"
        onMouseMove={handleMouseMove}
      >
        <Link href={item.link} target="_blank" rel="noopener noreferrer">
          {item.name}
        </Link>
      </li>
    ));
  };

  return (
    <div className={styles.mainContainer}>
      <figure>
        <Image
          src="/images/uses.avif"
          alt="My workplace - laptop, external monitor, lamp, pens, notebook, etc."
          width={500}
          height={300}
          useMap="#workmap"
        />
        {/* <map name="workmap">
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
        </map> */}
      </figure>
      <p data-theme={theme}>
        <FormattedMessage id="usesText" />
        <Link href="https://uses.tech/">uses.tech</Link>.
      </p>
      <p data-theme={theme}>
        <Image
          src="/emojis/calendar.svg"
          alt={intl.formatMessage({ id: "alt.calendar" })}
          width={32}
          height={32}
        />
        <FormattedMessage id="lastUpdated" />
        <time dateTime="2025-06-19">19.06.2025</time>
      </p>
      <div data-theme={theme}>
        {dataToRender.map((item) => {
          return (
            <div key={Object.keys(item)[0]}>
              <h1>
                <FormattedMessage id={Object.keys(item)[0]} />
              </h1>
              <ul>{renderList(Object.values(item)[0])}</ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
