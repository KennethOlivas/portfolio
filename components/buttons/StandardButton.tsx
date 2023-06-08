import { MouseEventHandler } from "react";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const StandardButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-base font-semibold leading-none rounded-md bg-black px-8 py-4 text-white shadow-lg
      hover:bg-white hover:text-black transition-colors duration-200
      ">
      {children}
    </button>
  );
};
