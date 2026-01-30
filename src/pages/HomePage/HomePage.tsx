import { Hero } from "../../components/hero";
import { Experience } from "../../components/experience";
import { Tools } from "../../components/Tools/Tools";
import { Projects } from "../../components/Projects";
import { Academic } from "../../components/academic";
import { Contact } from "../../components/contact/Contact";
import { PageContainer } from "./HomePage.styled";

export default function HomePage() {
    return (
        <PageContainer>
            <section id="home"><Hero /></section>
            <section id="experience"><Experience /></section>
            <Tools />
            <section id="projects"><Projects /></section>
            <section id="education"><Academic /></section>
            <section id="contact"><Contact /></section>
        </PageContainer>
    );
}