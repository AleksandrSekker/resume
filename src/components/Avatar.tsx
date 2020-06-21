import React, { useState } from 'react';
import AvatarImage from '../image/2020-05-25 09.00.14.jpg';

import style from '../style/Avatar.module.css';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTelegram,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import '../assets/main.css';
import '../style/Avatar.module.css';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import EnglishFlag from '../svg/uk.svg';
import UkraineFlag from '../svg/ukraine.svg';
import { light, dark, selectLanguage } from '../redux/languageSlice';
export interface AvatarProps {}

const Avatar: React.SFC<AvatarProps> = () => {
  let [flag, setflag] = useState(EnglishFlag);
  const [theme, settheme] = useState(faSun);
  const [hello, sethello] = useState('Hello');
  const [name, setname] = useState("I'm Aleksandr Sekker");
  const [age, setage] = useState('AGE');
  const [location, setlocation] = useState('CITY');
  const [locationName, setlocationName] = useState('Ukraine, Kryvyi Rih');
  const [email, setemail] = useState('EMAIL');
  const [phone, setphone] = useState('PHONE');
  const [themeBg, setthemeBg] = useState(style.light);
  const [trueorfalse, settrueorfalse] = useState(true);
  const dispatch = useDispatch();
  const languageHandler = () => {
    flag === EnglishFlag ? setflag(UkraineFlag) : setflag(EnglishFlag);
    hello === 'Hello' ? sethello('Привіт') : sethello('Hello');
    name === "I'm Aleksandr Sekker"
      ? setname('Олександр Секкер')
      : setname("I'm Aleksandr Sekker");
    age === 'AGE' ? setage('ВІК') : setage('AGE');
    location === 'CITY' ? setlocation('МІСТО') : setlocation('CITY');
    locationName === 'Ukraine, Kryvyi Rih'
      ? setlocationName('Україна, Кривий Ріг')
      : setlocationName('Ukraine, Kryvyi Rih');
    email === 'EMAIL' ? setemail('Електронна пошта') : setemail('EMAIL');
    phone === 'PHONE' ? setphone('Номер телефону') : setphone('PHONE');
  };
  const themeHandler = () => {
    theme === faSun ? settheme(faMoon) : settheme(faSun);
    if (trueorfalse === true) {
      dispatch(dark());
      settrueorfalse(false);
    } else {
      dispatch(light());
      settrueorfalse(true);
    }
  };
  return (
    <div className={style.containerFluid}>
      <div className={style.buttons}>
        <div onClick={languageHandler}>
          <img src={flag} alt='' className={style.flag} />
        </div>
        <FontAwesomeIcon
          icon={theme}
          className={style.themeSun}
          onClick={themeHandler}
        />
      </div>

      <div className={style.container}>
        <img src={AvatarImage} alt='avatar' className={style.image} />

        <div className={style.secondContainer}>
          <div className={style.message}>{hello}</div>
          <h2>{name}</h2>
          <h1>Front End developer</h1>
          <hr className={style.throwLine} />
          <div className={style.flexbox}>
            <div className={style.contText}>
              <p className={style.textFirst}>{age}</p>
              <p className={style.textSecond}>23</p>
            </div>
            <div className={style.contText}>
              <p className={style.textFirst}>{location}</p>
              <p className={style.textSecond}>{locationName}</p>
            </div>
            <div className={style.contText}>
              <p className={style.textFirst}>{email}</p>
              <p className={style.textSecond}>aleksandr.sekker@gmail.com</p>
            </div>
            <div className={style.contText}>
              <p className={style.textFirst}>{phone}</p>
              <p className={style.textSecond}>0686902733</p>
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
