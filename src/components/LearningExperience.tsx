import React from 'react';
import style from '../style/LearningExperience.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faSass,
  faGitAlt,
  faBootstrap,
  faReact,
  faNode,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
export interface LearningExperienceProps {}

const LearningExperience: React.SFC<LearningExperienceProps> = () => {
  AOS.init();
  return (
    <>
      <h1 className={style.mainText}></h1>
      <div className={style.flex}>
        <div className={style.flexColumn}>
          <div
            className={style.firstContainer}
            data-aos='fade-right'
            data-aos-duration='1500'
          >
            <FontAwesomeIcon icon={faHtml5} className={style.html} />
            <FontAwesomeIcon icon={faCss3Alt} className={style.css} />

            <p>
              layout, animation, typography, colors, gradients, transformation,
              attribute selectors etc
            </p>
            <p>
              Responsive design principles, grid, flexbox, semantic approach
            </p>
          </div>
          <div
            className={style.firstContainer}
            data-aos='fade-right'
            data-aos-duration='1500'
          >
            <FontAwesomeIcon icon={faSass} className={style.sass} />
            <FontAwesomeIcon icon={faBootstrap} className={style.bootstrap} />
            <p>SCSS variable, nesting, mixin, modules</p>
            <p>know bootstrap and tailwind classes</p>
          </div>
          <div
            className={style.firstContainer}
            data-aos='fade-right'
            data-aos-duration='1500'
          >
            <FontAwesomeIcon icon={faGitAlt} className={style.git} />
            <p>Git, debugging, npm </p>
          </div>
        </div>
        <div className={style.verticalLine}>
          <div className={`${style.dot} ${style.dotOne}`}></div>
          <div className={`${style.dot} ${style.dotTwo}`}></div>
          <div className={`${style.dot} ${style.dotThree}`}></div>
          <div className={`${style.dot} ${style.dotFour}`}></div>
          <div className={`${style.dot} ${style.dotFive}`}></div>
          <div className={`${style.dot} ${style.dotSix}`}></div>
        </div>
        <div className={style.flexColumnTwo}>
          <div
            className={style.secondContainer}
            data-aos='fade-left'
            data-aos-duration='1500'
          >
            <FontAwesomeIcon icon={faJs} className={style.js} />
            <p>
              Language fundamentals, DOM manipulation, events, oop, asynchronous
              programming, working with api, es6 and higher, error handling etc
            </p>
          </div>
          <div
            className={style.secondContainer}
            data-aos='fade-left'
            data-aos-duration='1500'
          >
            <FontAwesomeIcon icon={faReact} className={style.react} />
            <p>
              State, props, jsx, react router, class component, functional
              component, hooks, redux for state management. Also have experience
              using typescript and react native
            </p>
          </div>
          <div
            className={style.secondContainer}
            data-aos='fade-left'
            data-aos-duration='1500'
          >
            <p>
              Also have good theoretical knowledge about node, express and mongo
              db
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningExperience;
