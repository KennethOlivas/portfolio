import { FC, ReactElement } from 'react';

/**
 * `TechnologyIcon` is a function component that takes a ReactElement as a prop and returns a div with
 * the icon inside
 * @param  - FC<Props> - This is the type of component we're creating. In this case, it's a functional
 * component.
 * @returns A div with a class of h-10 w-10 p-1 rounded-full and the icon prop.
 */

type Props = {
  icon: ReactElement;
};

const TechnologyIcon: FC<Props> = ({ icon }) => {
  return <div className="h-10 w-10 p-1 rounded-full">{icon}</div>;
};

export default TechnologyIcon;
