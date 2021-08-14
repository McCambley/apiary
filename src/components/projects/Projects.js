/* eslint-disable react/prop-types */
import React from 'react';
import './Projects.css';
import floppyHat from '../../images/floppy-hat.png';
import {
  webDevProjects,
  dataAnalysisProjects,
  dataScienceProjects,
} from '../../arrays/delegate-tasks';
import Project from '../project/Project.js';

export default function Projects({ title, subtitle, defaultDisplay, displayCourseButtons }) {
  const [focusedCourse, setCourse] = React.useState(defaultDisplay);
  const [displayedProjects, setProjects] = React.useState([]);
  const [isExpanded, setExpanded] = React.useState(false);
  const [isShowMoreHidden, setHideShowMoreButton] = React.useState(false);
  const displayLimit = 2;

  React.useEffect(() => {
    setCourse(defaultDisplay);
  }, [defaultDisplay]);

  React.useEffect(() => {
    setCourse(webDevProjects);
  }, []);

  React.useEffect(() => {
    setProjects(focusedCourse.slice(0, displayLimit));
  }, [focusedCourse]);

  React.useEffect(() => {
    if (focusedCourse.length > displayLimit) {
      setHideShowMoreButton(false);
    } else {
      setHideShowMoreButton(true);
    }
  }, [focusedCourse]);

  function updateCourse(course) {
    setCourse(course);
  }

  function showMore() {
    if (!isExpanded) {
      setProjects(focusedCourse);
    } else {
      setProjects(focusedCourse.slice(0, displayLimit));
    }
    setExpanded(!isExpanded);
  }

  // const title = 'Delegate tasks to those who enjoy them';
  // const subtitle =
  //   'Check out the projects our students have done for companies in the USA and beyond';
  return (
    <section className="projects">
      <div className="projects__content">
        <div className="projects__hero">
          <div className="projects__hero-text">
            <h2 className="projects__title">{title}</h2>
            <h3 className="projects__subtitle">{subtitle}</h3>
          </div>
          <img src={floppyHat} alt="Developer with a floppy hat" className="projects__hero-image" />
        </div>
        {displayCourseButtons && (
          <div className="projects__buttons">
            <button
              type="button"
              className={`projects__button ${
                focusedCourse === webDevProjects && 'projects__button_active'
              }`}
              onClick={() => updateCourse(webDevProjects)}
            >
              Web developement
            </button>
            <button
              type="button"
              className={`projects__button ${
                focusedCourse === dataAnalysisProjects && 'projects__button_active'
              }`}
              onClick={() => updateCourse(dataAnalysisProjects)}
            >
              Data analysis
            </button>
            <button
              type="button"
              className={`projects__button ${
                focusedCourse === dataScienceProjects && 'projects__button_active'
              }`}
              onClick={() => updateCourse(dataScienceProjects)}
            >
              Data science
            </button>
          </div>
        )}
        <ul className="projects__list">
          {displayedProjects.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </ul>
        <div className="projects__buttons projects__buttons_position_end">
          <button
            type="button"
            className={`projects__button ${isShowMoreHidden && 'projects__button_hidden'}`}
            onClick={showMore}
          >
            {!isExpanded ? 'More projects...' : 'Less projects..'}
          </button>
          <button
            type="button"
            className={`projects__button projects__button_active ${
              isShowMoreHidden && 'projects__button_center'
            }`}
            onClick={() => {
              console.log('Delegating...');
            }}
          >
            Delegate a task
          </button>
        </div>
      </div>
    </section>
  );
}
