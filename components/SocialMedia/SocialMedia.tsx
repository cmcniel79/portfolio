import { FC } from 'react'
import Link from 'next/link';
import s from './SocialMedia.module.css'
import classNames from 'classnames';
import {
  IconSocialMediaGitHub,
  IconSocialMediaLinkedIn,
  IconSocialMediaMastodon,
  IconSocialMediaYouTube
} from '../icons';

interface Props {
  className?: string
}

const SocialMedia: FC<Props> = ({ className }) => {

  const socialMediaLinks = [
    { site: "GitHub", href: "https://github.com/cmcniel79", icon: <IconSocialMediaGitHub className={s.socialMediaIcon} /> },
    { site: "LinkedIn", href: "https://www.linkedin.com/in/chase-mcniel/", icon: <IconSocialMediaLinkedIn className={s.socialMediaIcon} /> },
    { site: "Mastodon", href: "https://mastodon.social", icon: <IconSocialMediaMastodon className={s.socialMediaIcon} /> },
    { site: "YouTube", href: "https://youtube.com", icon: <IconSocialMediaYouTube className={s.socialMediaIcon} /> },
  ];

  return (
    <div className={classNames(className, s.root)}>
      {socialMediaLinks.map(entry => (
        <Link
          key={"Link to Chase's " + entry.site}
          href={entry.href}
          className={s.socialMediaIcon}
        >
          {entry.icon}
        </Link>
      ))}
    </div>
  )
};

export default SocialMedia;
