import infoProjects from "../datas/projects";

const CardsProjects = ({ image, titre }) => {
  return (
    <div>
      <img src={image} alt={`Logo du projet ${titre}`} />
      <h3>{titre}</h3>
    </div>
  );
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
