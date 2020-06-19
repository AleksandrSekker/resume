import * as React from 'react';
import style from '../style/Hobbies.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCode } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
export interface HobbiesProps {}

const Hobbies: React.SFC<HobbiesProps> = () => {
  return (
    <div>
      <h1 className={style.text}>Interest</h1>
      <div className={style.hobbyContainer}>
        <FontAwesomeIcon icon={faBook} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faCode} />
      </div>
    </div>
  );
};

export default Hobbies;
