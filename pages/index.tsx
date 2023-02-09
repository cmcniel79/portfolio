import Image from 'next/image';
import Link from 'next/link'
import s from './index.module.css';
import utilStyles from '../styles/utils.module.css';
import { Button } from '../components/common';
import classNames from 'classnames';

export default function Home() {
  return (
    <section className={utilStyles.staticPageSection}>
      <h2 className={classNames(s.greeting, utilStyles.headingLg)}>Yá'át'ééh!</h2>
      <h1 className={utilStyles.heading3Xl}>My name is Chase McNiel.</h1>
      <h3 className={classNames(utilStyles.headingMd, s.subheading)}>
        I am an experienced mechanical and robotics engineer, passionate about utilizing
        my skills to work on innovative applications in the areas of climate, aerospace, and autonomous vehicles.
        My experience includes mechanical design, robotics, simulation, and optimal control.
      </h3>
      <h3 className={classNames(utilStyles.headingMd, s.subheading)}>
        I am also an experienced software developer and entrepreneur, having co-founded From The People,
        a specialty e-commerce and technology platform for Indigenous artists, during the COVID-19 pandemic.
      </h3>
      <Button className={s.resumeButton}>
        View My Resume Here!
      </Button>
    </section>
  )
}