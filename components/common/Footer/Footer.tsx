import Link from 'next/link';
import s from './Footer.module.css';
import utilStyles from '../../../styles/utils.module.css';
import { SocialMedia } from '../../';

export default function Footer() {

  return (
    <footer className={s.root}>
      <SocialMedia />
      <div className={s.organization}>
        <Link href={"https://github.com"}>
          Designed and Built by Chase McNiel
        </Link>
      </div>
    </footer>
  );
}