import Link from 'next/link';
import React from 'react'

const FooterButtons = () => {
  return (
    <div className="pt-5">
      <Link href="#about">
        <button className="button">About</button>
      </Link>
      <Link href="#experience">
        <button className="button">Experience</button>
      </Link>
      <Link href="#skills">
        <button className="button">Skills</button>
      </Link>
      <Link href="#projects">
        <button className="button">Projects</button>
      </Link>
    </div>
  );
}

export default FooterButtons
