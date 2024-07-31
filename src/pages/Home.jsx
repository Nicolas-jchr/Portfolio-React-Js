import CourseHome from "../components/CourseHome";
import Footer from "../components/Footer";
import ProjectsHome from "../components/ProjectsHome";
import SkillsHome from "../components/SkillsHome";
import Avatar from "../assets/nico.jpg"
import LogoLinkedin from "../assets/linkedin.svg";
import LogoGithub from "../assets/github.svg";

function Home() {

    return (
        <>
        <header>
            <img src={Avatar} alt="avatar nico J" />
            <h1>Nicolas JUCHEREAU</h1>
            <h2>Développeur Web / Web mobile FULLSTACK junior</h2>
            <h3>Actuellement à la recherche d'une alternance pour septembre ou novembre 2024</h3>
            <section>
                Retrouvez moi ici :
                <article>
                    <img src={LogoLinkedin} alt="Linkedin" />
                </article>
                <article>
                <img src={LogoGithub} alt="Github" />
                </article>
            </section>
        </header>
        <main>
            <section>
                <ProjectsHome />
            </section>
            <section>
                <SkillsHome />
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Home;
