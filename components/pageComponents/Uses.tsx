import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Uses.module.css";

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
        The following is a list of the tools and software that I use on a daily
        basis. This page was inspired by Wes Bos and his project -{" "}
        <Link href="https://uses.tech/">uses.tech</Link>.
      </p>
      <div>
        <div>
          <h1>Hardware</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div>
          <h1>Software</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div>
          <h1>Other</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Uses;
