import React from 'react';
import './Projects.css';
import floppyHat from '../../images/floppy-hat.png';
import {
  webDevProjects,
  dataAnalysisProjects,
  dataScienceProjects,
} from '../../arrays/delegate-tasks';
import Project from '../project/Project.js';

export default function Projects() {
  const [focusedCourse, setCourse] = React.useState([]);
  const [displayedProjects, setProjects] = React.useState([]);
  const [isExpanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    setCourse(webDevProjects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setProjects(focusedCourse.slice(0, 2));
  }, [focusedCourse]);

  function updateCourse(course) {
    setCourse(course);
  }

  function showMore() {
    if (!isExpanded) {
      setProjects(focusedCourse);
    } else {
      setProjects(focusedCourse.slice(0, 2));
    }
    setExpanded(!isExpanded);
  }

  const title = 'Delegate tasks to those who enjoy them';
  const subtitle =
    'Check out the projects our students have done for companies in the USA and beyond';
  return (
    <section className="projects">
      <div className="projects__hero">
        <div className="projects__hero-text">
          <h2 className="projects__title">{title}</h2>
          <h3 className="projects__subtitle">{subtitle}</h3>
        </div>
        <img src={floppyHat} alt="Developer with a floppy had" className="projects__hero-image" />
      </div>
      <div className="projects__buttons">
        <button
          type="button"
          className="projects__button"
          onClick={() => updateCourse(webDevProjects)}
        >
          Web developement
        </button>
        <button
          type="button"
          className="projects__button"
          onClick={() => updateCourse(dataAnalysisProjects)}
        >
          Data analysis
        </button>
        <button
          type="button"
          className="projects__button"
          onClick={() => updateCourse(dataScienceProjects)}
        >
          Data science
        </button>
      </div>
      <ul className="projects__list">
        {displayedProjects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </ul>
      <div className="projects__end-buttons">
        <button type="button" className="projects__end-button" onClick={showMore}>
          {!isExpanded ? 'More projects...' : 'Less projects..'}
        </button>
        <button
          type="button"
          className="projects__end-button"
          onClick={() => {
            console.log('Delegating...');
          }}
        >
          Delegate a task
        </button>
      </div>
    </section>
  );
}
