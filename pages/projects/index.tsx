import Image from 'next/image';
import Link from 'next/link'
import s from './index.module.css';
import utilStyles from '../../styles/utils.module.css'
import classNames from 'classnames';

export default function Projects() {
  return (
    <section className={utilStyles.staticPageSection}>
      <h1 className={utilStyles.heading2Xl}>
        Projects
      </h1>
      <div className={s.buttonsContainer}>
        <Link
          className={classNames(s.projectButton, utilStyles.linkButton)}
          href='/'
        >
          <p>View More Academic</p>
        </Link>
        <Link
          className={classNames(s.projectButton, utilStyles.linkButton)}
          href='/'>
          <p>View More Professional</p>
        </Link>
      </div>
    </section>
  )
}