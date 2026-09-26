import "./CategorySelect.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function CategorySelect() {
    const [active, setActive] = useState(false)
    useEffect(() => {
        setActive(true)
    }, [])

    return (
        <section className="category-buttons">
            <Link className={`choice-web choice-button ${active ? "active" : ""}`} to={"/web-projecten"}>
                <span>Web</span>
            </Link>
            <Link className={`choice-design choice-button ${active ? "active" : ""}`} to={"/design-projecten"}>
                <span>Design</span>
            </Link>
        </section>
    )
}
