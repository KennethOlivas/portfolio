import { FC } from 'react';
import { Icon } from 'types';

import TechnologyIcon from './TechnologyIcon';

/**
 * It takes an array of icons and returns a div with a flexbox layout containing a TechnologyIcon
 * component for each icon in the array
 * @param  - FC<Props> - This is the type of component we're creating. FC stands for "Function
 * Component".
 * @returns An array of TechnologyIcon components.
 */

type Props = {
  icons: Array<Icon>;
};

const TechnologyList: FC<Props> = ({ icons }) => {
  return (
    <div className="flex space-x-2 my-2">
      {icons.map((item) => (
        <TechnologyIcon key={item.key} icon={item.icon} />
      ))}
    </div>
  );
};

export default TechnologyList;
