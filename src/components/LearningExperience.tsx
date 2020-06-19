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
export interface LearningExperienceProps {}

const LearningExperience: React.SFC<LearningExperienceProps> = () => {
  return (
    <>
      <h1 className={style.mainText}>Learning Experience</h1>
      <div className={style.flex}>
        <div className={style.flexColumn}>
          <div className={style.firstContainer}>
            <FontAwesomeIcon icon={faHtml5} className={style.html} />
            <FontAwesomeIcon icon={faCss3Alt} className={style.css} />

            <p>layout, animation, typography, colors</p>
            <p>
              Responsive design, grid, flexbox, semantic approach and media
              queries
            </p>
          </div>
          <div className={style.firstContainer}>
            <FontAwesomeIcon icon={faSass} className={style.sass} />
            <FontAwesomeIcon icon={faBootstrap} className={style.bootstrap} />
            <FontAwesomeIcon icon={faGitAlt} className={style.git} />
            <FontAwesomeIcon icon={faTerminal} className={style.terminal} />
            <p>asdfsdf</p>
          </div>
          <div className={style.firstContainer}>
            <p>
              Also sometimes i use typescript, few times coding on react native
              (using api) for test projects. Actually almost didn't use back end
              technology, but understand how work node, express and mongo db
            </p>
          </div>
        </div>
        <div className={style.verticalLine}>
          <div className={`${style.dot} ${style.dotOne}`}></div>
          <div className={`${style.dot} ${style.dotTwo}`}></div>
          <div className={`${style.dot} ${style.dotThree}`}></div>
          <div className={`${style.dot} ${style.dotFour}`}></div>
          <div className={`${style.dot} ${style.dotFive}`}></div>
        </div>
        <div className={style.flexColumnTwo}>
          <div className={style.secondContainer}>
            <FontAwesomeIcon icon={faJs} className={style.js} />
            <p>Start from basic: Variables, Types, function, loops, objects </p>
            <p>
              DOM tree, start building project, timer, clock, quize, quizzes
              etc. Learn es6, work with APIs
            </p>
          </div>
          <div className={style.secondContainer}>
            <FontAwesomeIcon icon={faReact} className={style.react} />
            <p>
              Start learn react, react router, hooks. For learning react build
              small thing like counter, todolist, slider, filterable list,
              random quote machine etc. Later start using redux for state
              managment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningExperience;
