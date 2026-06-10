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
    })

    return (
        <header>
            <Link className="header-logo" to="/">
                <div>
                    <svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.99 126.2">
                        <path ref={pathRef} d="M180.99 0v8.6l-38.6 4v105.6l-13.4 8V12.6H52v113.6l-13.4-8V12.6L0 8.6V0z"></path>
                    </svg>
                </div>
            </Link>
            <nav className="nav-bar">
            <ul>
                <a href="/projecten">
                Projecten
                </a>
                <a>
                Projecten
                </a>
            </ul>
            </nav>
        </header>
    )
}
