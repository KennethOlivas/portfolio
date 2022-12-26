import React, { FC } from 'react';

type Props = {
  title: string;
  subtitle: string;
};

const Header: FC<Props> = ({ subtitle, title }) => (
  <>
    <h4 className="text-4xl font-light">{title}</h4>
    <p className="font-bold text-2xl mt-1">{subtitle}</p>
  </>
);

export default Header;
