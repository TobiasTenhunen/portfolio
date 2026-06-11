import "./ProjectTile.css"

type Props = {
    projectName: string,
    imageUrl: string,
    description: string
}

export default function ProjectTile({projectName, imageUrl, description}: Props) {
    return (
        <div className="project-tile">
            <h3>{projectName}</h3>
            <img src={imageUrl}></img>
            <p>{description}</p>
        </div>
    )
}
