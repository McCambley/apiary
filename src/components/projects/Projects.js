import React from 'react';
import './Projects.css';
import floppyHat from '../../images/floppy-hat.png';
import {
  webDevProjects,
  dataAnalysisProjects,
  dataScienceProjects,
} from '../../arrays/delegate-tasks';

export default function Projects() {
  const [focusedCourse, setCourse] = React.useState([]);
  const [displayedProjects, setProjects] = React.useState([]);
  // console.table(webDevProjects, dataAnalysisProjects, dataScienceProjects);
  console.log(displayedProjects);

  React.useEffect(() => {
    setCourse(webDevProjects);
    setProjects(focusedCourse.slice(0, 2));
  }, []);

  function updateCourse(course) {
    setCourse(course);
  }

  function showMore() {
    setProjects(focusedCourse);
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
        <button type="button" className="projects__button">
          Web developement
        </button>
        <button type="button" className="projects__button">
          Data analysis
        </button>
        <button type="button" className="projects__button">
          Data science
        </button>
        {displayedProjects.map((project) => {
          <Project data={project} />;
        })}
      </div>
    </section>
  );
}
