import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "Small" | "Medium" | "Large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "Medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "storybookButtonPrimary" : "storybookButtonSecondary";
  return (
    <button
      type="button"
      className={[
        styles.storybookButton,
        styles[mode],
        styles[`storybookButton${size}`],
      ].join(" ")}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
