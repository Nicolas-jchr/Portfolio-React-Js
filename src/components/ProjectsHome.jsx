import PropTypes from "prop-types";
import infoProjects from "../datas/projects";

const CardsProjects = ({ image, titre }) => {
  return (
    <div className="card-home-projects">
      <img src={image} alt={`Logo du projet ${titre}`} />
      <h3>{titre}</h3>
      <div className="overlay-home-projects">Cliquer pour voir le projet</div>
    </div>
  );
};

CardsProjects.propTypes = {
  image: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
};

function ProjectsHome() {
  return (
    <article>
      <h2>Mes projets réalisés</h2>
      {infoProjects.map((project, index) => (
        <CardsProjects 
          key={index}
          image={project.image}
          titre={project.titre}
        />
      ))}
    </article>
  );
}

export default ProjectsHome;
