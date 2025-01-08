import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/calci.jpg';
import fitLift from '../../assets/task.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://yuvraj252122.github.io/Band_Kit/"
          h3="Music"
          p="Feel the music"
        />
        <ProjectCard
          src={freshBurger}
          link="https://ritik15tiwari.github.io/Restaurant_web/"
          h3="Fresh Meal"
          p="Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://incomparable-piroshki-f7942c.netlify.app/"
          h3="Mac OS Calci"
          p="Calculator"
        />
        <ProjectCard
          src={fitLift}
          link="https://yuvraj252122.github.io/ToDoList_Work_Professional/"
          h3="Task List"
          p="Streaming Task"
        />
      </div>
    </section>
  );
}

export default Projects;
