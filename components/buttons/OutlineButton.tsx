import type { FC, MouseEventHandler } from "react";
import styles from "./outlinebutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const OutlineButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.outlineButton} text-white px-6 py-3 cursor-pointer  bg-transparent rounded-md relative z-20 overflow-hidden transition-all duration-400 text-xl`}>
      {children}
    </button>
  );
};

export default OutlineButton;
