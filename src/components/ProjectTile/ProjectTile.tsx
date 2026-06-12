import "./ProjectTile.css"

type Props = {
    projectName: string,
    imageUrl: string,
    description: string,
    projectUrl: string,
}

export default function ProjectTile({projectName, imageUrl, description, projectUrl}: Props) {
    return (
        <div className="project-tile">
            <h3>{projectName}</h3>
            <a href={projectUrl} target="_blank"><img src={imageUrl} alt={projectName}></img></a>
            <p>{description}</p>
        </div>
    )
}
