import Header from '@components/WorkExperience/Header';
import JavascriptIcon from '@icons/JavascriptIcon';
import SvelteIcon from '@icons/SvelteIcon';
import TailwindIcon from '@icons/TailwindIcon';
import { Icon } from 'types';

import CompanyImage from './CompanyImage';
import SumaryList from './SumaryList';
import TechnologyList from './TechnologyList';

const Icons: Array<Icon> = [
  {
    key: 'JavascriptIcon',
    icon: <JavascriptIcon />,
  },
  {
    key: 'SvelteIcon',
    icon: <SvelteIcon />,
  },
  {
    key: 'TailwindIcon',
    icon: <TailwindIcon />,
  },
];

const Sumary: Array<string> = [
  'Sumary Points',
  'Sumary Points',
  'Sumary Points',
  'Sumary Points',
];

const ExperienceCard = () => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <CompanyImage src="/jobitx.jpg" />
      <div className="px-0 md:px-10">
        <Header title="Frontend Developer" subtitle="Subtitle" />
        <TechnologyList icons={Icons} />
        <p className="uppercase py-5 text-gray-300">
          Started work... -- Ended....
        </p>
        <SumaryList list={Sumary} />
      </div>
    </article>
  );
};

export default ExperienceCard;
