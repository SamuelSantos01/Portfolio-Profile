import { Hero } from "../../components/hero/index"
import { Experience } from "../../components/experience/index"
import { ExperienceContainer } from "./HomePage.styled";
import { Tools } from "../../components/Tools/Tools";
import { Projects } from "../../components/Projects";
import { Academic } from "../../components/academic";
import { Contact } from "../../components/contact/Contact";

export default function HomePage() {
    return (
        <ExperienceContainer>
            <section id="home"><Hero /></section>
            <section id="experience"><Experience /></section>
            <Tools />
            <section id="projects"><Projects /></section>
            <section id="education"><Academic /></section>
            <section id="contact"><Contact /></section>
        </ExperienceContainer>
    );
}