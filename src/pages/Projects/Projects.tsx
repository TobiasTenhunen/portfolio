import Banner from "../../components/Banner/Banner";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./Projects.css"

// Project images
import bakkieBewust from "../../assets/project-showcases/bakkie-bewust.webp"

export default function Projects() {
    return (
        <>
            <Banner text="Projecten" />
            <section className="web-projects">
                <ProjectTile
                    projectName="Bakkie Bewust"
                    imageUrl={bakkieBewust}
                    description="Een fictief bedrijf voor duurzame koffie."
                />
            </section>
        </>
    )
}