import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ThemeContext } from "../../../context";
import styles from "../../../styles/Uses.module.css";

import { hardware } from "./data/hardware.json";
import { software } from "./data/software.json";
import { other } from "./data/other.json";

interface CSSPropertiesWithVars extends CSSProperties {
  "--url"?: string;
}

export default function Uses() {
  const theme = useContext(ThemeContext);
  const intl = useIntl();

  const dataToRender: {
    [key: string]: {
      name: string;
      link: string;
      description: string;
      image: string;
    }[];
  }[] = [{ hardware }, { software }, { other }];

  const renderList = (
    items: { name: string; link: string; description: string; image: string }[]
  ) => {
    return items.map((item) => (
      <li
        key={item.name}
        style={
          {
            "--url": `url("/uses/${item.image}.avif")`,
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
          src="/images/uses.avif"
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
      <p data-theme={theme}>
        <Image
          src="/emojis/calendar.svg"
          alt={intl.formatMessage({ id: "alt.calendar" })}
          width={32}
          height={32}
        />
        <FormattedMessage id="lastUpdated" />
        <time dateTime="2024-07-06">06.07.2024</time>
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
