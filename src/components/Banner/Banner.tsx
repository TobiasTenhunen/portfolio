import { useEffect, useState, useRef } from "react"
import "./Banner.css"

type Props = {
    text: string,
    verticalMargin?: String,
    children?: React.ReactNode,
}

export default function Banner({text, verticalMargin = "", children}: Props) {
    let sectionRef = useRef<HTMLElement>(null);
    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(true)
        if (verticalMargin && sectionRef.current) {
            sectionRef.current.style.margin = `${verticalMargin} 0`
        }

    }, [])

    return (
            <section ref={sectionRef} className="banner">
                <h1 className={active ? "heading active" : "heading"}>{text}</h1>
                {children}
            </section>
    )

}
