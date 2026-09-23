import { useRef, useEffect } from "react"
import "./Header.css"
import { Link } from "react-router-dom"

export default function Header() {
    const pathRef = useRef<SVGPathElement>(null)
    
    useEffect(() => {
        const path = pathRef.current
        if (!path) return

        const length = path?.getTotalLength()

        path.style.strokeDasharray = length.toString()
        path.style.strokeDashoffset = length.toString()
    }, [])

    return (
        <header>
            <Link className="header-logo" to="/">
                <div>
                    <svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183.82 130.11">
                        <path ref={pathRef} d="M128.99 15.44L54.83 15.44L54.83 130.11L38.6 120.42L38.6 15.3L0 11.3L0 0L183.82 0L183.82 11.3L145.22 15.3L145.22 120.42L128.99 130.11L128.99 15.44z"></path>
                    </svg>
                </div>
            </Link>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to={"/projecten"}>Mijn werk</Link>
                    </li>
                    <li>
                        <a id="contact" href="#footer">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
