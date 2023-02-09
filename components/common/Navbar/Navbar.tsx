import { FC, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import s from './Navbar.module.css';
import MenuIcon from './MenuIcon';
import { Modal } from '../';
import utilStyles from '../../../styles/utils.module.css';
import classNames from 'classnames';
import { SocialMedia } from '../../';
import { IconLogo } from '../../icons';

interface Props {
}

const Navbar: FC<Props> = () => {
  const [showModal, setShowModal] = useState(false);

  const links = [
    {
      'href': '/',
      'name': 'Home'
    },
    {
      'href': '/about',
      'name': 'About Me'
    },
    {
      'href': '/work',
      'name': 'Experience'
    },
    {
      'href': '/projects',
      'name': 'Projects'
    },
    {
      'href': '/contact',
      'name': 'Contact'
    }
  ];

  const desktopLinks = (
    <div className={s.navLinksContainer}>
      {links.map(entry => (
        entry.href !== '/' ? (
          <Link key={entry.name} href={entry.href}>
            <h2 className={s.navLink}>{entry.name}</h2>
          </Link>) : null
      ))}
    </div>
  );

  const mobileLinks = (
    <div className={s.mobileLinksContainer}>
      {links.map(entry => (
        <Link key={entry.name} href={entry.href} onClick={() => setShowModal(false)}>
          <h1 className={classNames(utilStyles.headingLg, s.mobileLinks)}>{entry.name}</h1>
        </Link>
      ))}
      <SocialMedia className={s.socialMedia} />
    </div>
  );

  const logoLink = (
    <Link href='/'>
      <IconLogo className={s.logo} />
    </Link>
  )

  return (
    <nav className={s.root}>
      {logoLink}
      {desktopLinks}
      <button
        className={s.menu}
        onClick={() => setShowModal(true)}
      >
        <MenuIcon className={s.menuIcon} />
      </button>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        {mobileLinks}
      </Modal>
    </nav>
  );
};

export default Navbar;