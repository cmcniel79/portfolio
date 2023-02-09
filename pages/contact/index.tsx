import Image from 'next/image';
import Link from 'next/link';
import s from './index.module.css';
import utilStyles from '../../styles/utils.module.css';
import monumentPic from '../../public/images/mv-1.jpg';

export default function Contact() {
  return (
    <div className={utilStyles.staticPageSection}>
      <h1 className={utilStyles.heading2Xl}>
        Contact
      </h1>
      <div className={s.contactPageImage}>
        <Image
          className={s.monumentImage}
          fill={true}
          src={monumentPic}
          alt='Monument Valley'
          priority={true}
        />
      </div>
    </div>
  )
}