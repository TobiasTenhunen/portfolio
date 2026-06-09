import { useEffect, useState } from "react"

type Props = {
    text: string
}

export default function Heading({text}: Props) {
    const [active, setActive] = useState(false)
    useEffect(() => {
        setActive(true)
    })
    
    return <h1 className={active ? "heading active" : "heading"}>{text}</h1>
}
