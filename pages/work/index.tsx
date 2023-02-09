import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import classNames from 'classnames';
import { Button } from '../../components/common';
import getPositionData from '../../lib/PositionData';
import s from './index.module.css';
import utilStyles from '../../styles/utils.module.css';

const beginDate = new Date(2018, 5);
const endDate = new Date();

export async function getStaticProps() {
  const positions = getPositionData(beginDate.getTime(), endDate.getTime());
  return {
    props: {
      positions,
    },
  };
}

export default function Work({ positions }) {
  const [currPositionIndex, setCurrPositionIndex] = useState(0);

  const maxHeight = 1500;
  const ms_per_pixel = (endDate.getTime() - beginDate.getTime()) / maxHeight;

  const dateStringOptions = { year: 'numeric', month: 'long' };

  const currPosition = positions[currPositionIndex];
  const currPositionStartDate = new Date(currPosition.start);
  const currPositionEndDate = new Date(currPosition.end);

  const endDateTime = endDate.getTime();

  const positionDetails = (
    <div className={s.positionDetailsPanel}>
      <h3 className={classNames(s.positionHeading, utilStyles.headingMd)}>
        {currPosition.position} <span className={s.positionCompany}>| {currPosition.company}</span>
      </h3>
      <h4 className={s.positionDate}>
        {currPositionStartDate.toLocaleDateString(undefined, dateStringOptions)}
        &nbsp;- {currPositionEndDate.toLocaleDateString(undefined, dateStringOptions)}
      </h4>
      <ul>
        {currPosition.description.map((line, i) => (
          <li key={i}>
            <p>{line}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const positionButtons = (
    <div className={s.positionButtonsContainer}>
      {positions.map((p, i) => (
        <Button
          key={i}
          className={s.positionButton}
          onClick={() => setCurrPositionIndex(p.index)}
          style={{ borderColor: p.color }}
        >
          <span style={{ color: p.color }}>{p.tag}</span>
        </Button>
      ))}
    </div>
  );

  const timeline = (
    <div className={s.timelineContainer}>
      <div className={s.timeline} />
      {positions.map(entry => (
        <div
          key={entry.tag}
          className={s.timelinePosition}
          onMouseEnter={() => setCurrPositionIndex(entry.index)}
          style={{
            backgroundColor: entry.color,
            top: Math.round((endDateTime - entry.end) / ms_per_pixel),
            height: Math.round((entry.end - entry.start) / ms_per_pixel),
            width: Math.round((entry.end - entry.start) / (ms_per_pixel * 5))
          }}>
          <h2
            className={classNames(s.timelineTag, utilStyles.headingLg)}
            style={{
              left: Math.round((entry.end - entry.start) / (ms_per_pixel * 5)),
              backgroundColor: entry.color,
            }}
          >
            {entry.tag}
          </h2>
        </div>
      )
      )}
      {positionDetails}
    </div>
  );

  console.log(currPositionIndex);

  return (
    <div className={utilStyles.staticPageSection}>
      <h1 className={utilStyles.heading2Xl}>
        Experience
      </h1>
      {positionButtons}
      <h2 className={classNames(s.timelineDate, utilStyles.headingLg)}>
        {endDate.toLocaleDateString(undefined, dateStringOptions)}
      </h2>
      {timeline}
      <h2 className={classNames(s.timelineDate, utilStyles.headingLg)}>
        {beginDate.toLocaleDateString(undefined, dateStringOptions)}
      </h2>
    </div>
  )
}