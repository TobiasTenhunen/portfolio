import Banner from "../../components/Banner/Banner";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import "./WebProjects.css"

// Project images
import bakkieBewust from "../../assets/project-showcases/bakkie-bewust.webp"
import bauhaus from "../../assets/project-showcases/bauhaus.webp"
import nature from "../../assets/project-showcases/nature.webp"

export default function WebProjects() {
    return (
        <>
            <Banner text="Websites" />
            <section className="web-projects">
                <ProjectTile
                    projectName="Bakkie Bewust"
                    imageUrl={bakkieBewust}
                    projectUrl="https://bakkiebewust.tobiastenhunen.com"
                    description="Een fictief bedrijf voor duurzame koffie."
                />
                <ProjectTile
                    projectName="Bauhaus Parallax Effect"
                    imageUrl={bauhaus}
                    projectUrl="https://bauhaus.tobiastenhunen.com"
                    description="Een school opdracht waarbij we een site moesten maken met een parallax effect."
                />
                <ProjectTile
                    projectName="Natuur"
                    imageUrl={nature}
                    projectUrl="https://nature.tobiastenhunen.com"
                    description="Een simpele site over natuur."
                />
            </section>
        </>
    )
}