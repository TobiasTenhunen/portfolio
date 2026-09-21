import "./Skills.css"
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { SiJavascript, SiTypescript } from "react-icons/si"

export default function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skills-icons">
                <FaHtml5 color="#E34F26"></FaHtml5>
                <FaCss3Alt color="#1572B6"></FaCss3Alt>
                <FaReact color="#61DAFB"></FaReact>
                <SiJavascript color="#F7DF1E"></SiJavascript>
                <SiTypescript color="#3178C6"></SiTypescript>
            </div>
        </section>
    )
}