import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './index.module.css';
import utilStyles from '../../styles/utils.module.css';
import mePic from '../../public/images/chase-1.jpg';
import { Button } from '../../components/common';

export default function About() {

  const [isOnRegular, toggleButton] = useState(true);

  const bioContainerClasses = isOnRegular ? s.regularBio : s.traditionalBio;
  const regularButtonClasses = isOnRegular ? s.isToggled : s.isNotToggled;
  const traditionalButtonClasses = !isOnRegular ? s.isToggled : s.isNotToggled;

  function handleClick(isRegularButtonClicked: boolean) {
    if (isRegularButtonClicked) {
      if (isOnRegular) {
        return null;
      } else {
        toggleButton(true);
        return;
      }
    } else {
      if (isOnRegular) {
        toggleButton(false);
        return;
      } else {
        return null;
      }
    }
  }

  return (
    <div className={utilStyles.staticPageSection}>
      <h1 className={utilStyles.heading2Xl}>
        About Me
      </h1>
      <div className={s.aboutPageContentContainer}>
        <Image className={s.aboutPageImage} src={mePic} alt='Group Outside' />
        <div className={bioContainerClasses}>
          {isOnRegular ?
            <p>
              As a highly educated Mechanical Engineer with a B.S. from Stanford University and an M.Eng.
              from the University of California - Berkeley, I bring a unique blend of theoretical and
              practical experience to the table. My focus on Control of Robotic and Autonomous Systems
              has honed my skills in programming and design, as demonstrated in my work on a graduate
              capstone project where I programmed a Model Predictive Control module and developed a
              non-linear global planner. My hands-on experience extends to co-founding a specialty online
              marketplace and consumer technology development company, where I made technical decisions
              and implemented web development solutions. My previous experience as a mechanical engineer
              has seen me design mechanical parts and systems for various programs, as well as interning
              at an aerospace company and working on hardware-in-the-loop testing platforms. I am confident
              that my well-rounded background and passion for engineering make me a valuable asset to any team.
            </p>
            : <p>
              Shí éí Honágháanii nishłį̨́ dóó Bilagáana báshíshchíín.
              Bit'ahnii dashicheii dóó Bilagáana dashinálí. Chase McNiel yinishyé.
              Shí éí Na'nízhoozhídę́ę́' naashá'. K'ad éí Seattledi shighan. Shí éí Stanforddi dóó Berkeleydi ííníshta'.
              Mechanical Engineering baa ííníshta'. Ákót'éego Diné Hastiin nishłį́.
            </p>
          }
        </div>
      </div>
      <div className={s.bioSelection}>
        <Button
          className={regularButtonClasses}
          onClick={() => handleClick(true)}
        >
          Regular
        </Button>
        <Button
          className={traditionalButtonClasses}
          onClick={() => handleClick(false)}
        >
          Traditional
        </Button>
      </div>
    </div>
  )
}