import React from 'react';
import AvatarImage from '../image/2020-05-25 09.00.14.jpg';
import style from '../style/Avatar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTelegram,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
export interface AvatarProps {}

const Avatar: React.SFC<AvatarProps> = () => {
  return (
    <div className={style.containerFluid}>
      <div className={style.container}>
        <img src={AvatarImage} alt='avatar' className={style.image} />

        <div className={style.secondContainer}>
          <div className={style.message}>Hello</div>
          <h2>I'm Aleksandr Sekker</h2>
          <h1>Looking for junior Front End developer position</h1>
          <hr className={style.throwLine} />
          <div className={style.flexbox}>
            <div className={style.flexboxOne}>
              <p>AGE</p>
              <p>Location</p>
              <p>E-Maile</p>
              <p>PHONE</p>
            </div>
            <div className={style.flexboxTwo}>
              <p>23</p>
              <p>Ukraine, Kryvyi Rih</p>
              <p>aleksandr.sekker@gmail.com</p>
              <p>0686902733</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerSocialMedia}>
        <div className={style.socialMediaCenter}>
          <a href='https://github.com/AleksandrSekker'>
            <FontAwesomeIcon icon={faGithub} className={style.icons} />
          </a>
          <a href='https://www.linkedin.com/in/aleksandr-sekker-521352161/'>
            <FontAwesomeIcon icon={faLinkedin} className={style.icons} />
          </a>
          <a href='https://join.skype.com/invite/ne1fLrVxBoC4'>
            <FontAwesomeIcon icon={faSkype} className={style.icons} />
          </a>
          <a href='https://t.me/sekk_er'>
            <FontAwesomeIcon icon={faTelegram} className={style.icons} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
