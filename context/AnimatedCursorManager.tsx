import { useState, createContext } from "react";

// To be used in calling context with useContext Hooks
export const AnimatedCursorContext = createContext({
  cursorType: "cursor",
  cursorStyleHandler: (cursorType: string) => {},
});

// To be wrapped around the root component

interface Props {
  children: React.ReactNode;
}
const AnimatedCursorProvider = ({ children }: Props) => {
  const [cursorType, setCursorType] = useState("cursor");

  const cursorStyleHandler = (newCursor: string) => {
    setCursorType(newCursor);
  };

  return (
    <AnimatedCursorContext.Provider
      value={{
        cursorType: cursorType,
        cursorStyleHandler: cursorStyleHandler,
      }}>
      {children}
    </AnimatedCursorContext.Provider>
  );
};

export default AnimatedCursorProvider;
