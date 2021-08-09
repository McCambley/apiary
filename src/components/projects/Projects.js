import './Projects.css';
import floppyHat from '../../images/floppy-hat.png';

export default function Projects() {
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
      </div>
    </section>
  );
}
