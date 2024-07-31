import PropTypes from "prop-types";
import infoStacks from "../datas/stacks";

const CardsSkills = ({ logo, nom }) => {
  return (
    <div className="card">
      <img src={logo} alt={`Logo de ${nom}`} />
      <h3>{nom}</h3>
    </div>
  );
};

CardsSkills.propTypes = {
  logo: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
};

function SkillsHome() {
  return (
    <article>
      <h2>Mes stacks techniques</h2>
      {infoStacks.map((stack, index) => (
        <CardsSkills 
          key={index}
          logo={stack.logo}
          nom={stack.nom}
        />
      ))}
    </article>
  );
}

export default SkillsHome;
