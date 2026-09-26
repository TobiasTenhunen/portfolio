import { Link } from "react-router-dom"
import "./CategorySelect.css"

export default function CategorySelect() {
    return (
        <section className="category-buttons">
            <Link className="choice-web choice-button" to={"/web-projecten"}>
                <span>Web</span>
            </Link>
            <Link className="choice-design choice-button" to={"/design-projects"}>
                <span>Design</span>
            </Link>
        </section>
    )
}
