import Banner from "../../components/Banner/Banner";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./Projects.css"

// Project images
import bakkieBewust from "../../assets/project-showcases/bakkie-bewust.webp"
import bauhaus from "../../assets/project-showcases/bauhaus.webp"

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
                <ProjectTile
                    projectName="Bauhaus Parallax Effect"
                    imageUrl={bauhaus}
                    description="Een school opdracht waarbij we een site moesten maken met een parallax effect."
                />
            </section>
        </>
    )
}