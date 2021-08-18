/* eslint-disable react/prop-types */
import React from 'react';
import './Projects.css';
import floppyHat from '../../images/floppy-hat.png';
// import {
//   webDevProjects,
//   dataAnalysisProjects,
//   dataScienceProjects,
// } from '../../arrays/delegate-tasks';
import Project from '../project/Project.js';

export default function Projects({
  title,
  subtitle,
  displayCourseButtons,
  onCourseClick,
  projectCollection,
  isProjectCollectionLoading,
}) {
  // const [projectCollection, setCourse] = React.useState(defaultDisplay); REPLACED BY UPDATING PRIMARY QUERY
  // from projects collection, displays a truncated list based on limit
  const [displayedProjects, setDisplayedProjects] = React.useState([]);
  // should the project list be expanded to show all projects
  const [isExpanded, setExpanded] = React.useState(false);
  // should the 'show more' button be hidden (project list is <= limit)
  const [isShowMoreHidden, setHideShowMoreButton] = React.useState(false);
  const displayLimit = 2;

  // React.useEffect(() => {
  //   setCourse(defaultDisplay);
  // }, [defaultDisplay]);

  // React.useEffect(() => {
  //   setCourse(webDevProjects);
  // }, []);

  React.useEffect(() => {
    console.log(projectCollection);
    setDisplayedProjects(projectCollection.slice(0, displayLimit));
  }, [projectCollection]);

  React.useEffect(() => {
    if (projectCollection.length > displayLimit) {
      setHideShowMoreButton(false);
    } else {
      setHideShowMoreButton(true);
    }
  }, [projectCollection]);

  // function updateCourse(course) {
  //   setCourse(course);
  // }

  function showMore() {
    if (!isExpanded) {
      setDisplayedProjects(projectCollection);
    } else {
      setDisplayedProjects(projectCollection.slice(0, displayLimit));
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
                !isProjectCollectionLoading &&
                projectCollection[0].course === 'Web Development' &&
                'projects__button_active'
              }`}
              onClick={() => onCourseClick('web')}
            >
              Web development
            </button>
            <button
              type="button"
              className={`projects__button ${
                !isProjectCollectionLoading &&
                projectCollection[0].course === 'Data Analysis' &&
                'projects__button_active'
              }`}
              onClick={() => onCourseClick('analysis')}
            >
              Data analysis
            </button>
            <button
              type="button"
              className={`projects__button ${
                !isProjectCollectionLoading &&
                projectCollection[0].course === 'Data Science' &&
                'projects__button_active'
              }`}
              onClick={() => onCourseClick('science')}
            >
              Data science
            </button>
          </div>
        )}
        <ul className="projects__list">
          {isProjectCollectionLoading ? (
            <div className="loading" />
          ) : (
            displayedProjects.map((project) => <Project key={project.id} data={project} />)
          )}
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
