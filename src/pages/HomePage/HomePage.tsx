import { Hero } from "../../components/hero/index"
import { Experience } from "../../components/experience/index"
import { ExperienceContainer } from "./HomePage.styled";

export default function HomePage() {
    return (
        <ExperienceContainer>
            <Hero />
            <Experience />
        </ExperienceContainer>
    );
}