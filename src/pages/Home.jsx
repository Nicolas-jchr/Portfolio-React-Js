import CourseHome from "../components/CourseHome";
import ProjectsHome from "../components/ProjectsHome";
import SkillsHome from "../components/SkillsHome";

function Home() {

    return (
        <>
        <header>
            <img src={""} alt="avatar nico J" />
            <h1>Nicolas JUCHEREAU</h1>
            <h2>Développeur Web / Web mobile FULLSTACK junior</h2>
            <h3>Actuellement à la recherche d'une alternance pour septembre ou novembre 2024</h3>
            <section>
                Retrouvez moi ici :
                <article>Logo github</article>
                <article>Logo linkedin</article>
            </section>
        </header>
        <main>
            <section>
                <ProjectsHome />
            </section>
            <section>
                <SkillsHome />
            </section>
            <section>
                <CourseHome />
            </section>
        </main>
        </>
    )
}

export default Home;
