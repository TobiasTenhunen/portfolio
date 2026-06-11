import { useEffect, useState } from "react"
import "./Banner.css"

type Props = {
    text: string,
    children?: React.ReactNode
}

export default function Banner({text, children}: Props) {
    const [active, setActive] = useState(false)
    useEffect(() => {
        setActive(true)
    }, [])
    
    return (
            <section className="banner">
                <h1 className={active ? "heading active" : "heading"}>{text}</h1>
                {children}
            </section>
    )

}
