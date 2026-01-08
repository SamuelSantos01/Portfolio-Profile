import { Hero } from "../../components/hero/index"
import { Experience } from "../../components/experience/index"
import { ExperienceContainer } from "./HomePage.styled";
import { Tools } from "../../components/Tools/Tools";

export default function HomePage() {
    return (
        <ExperienceContainer>
            <Hero />
            <Experience />
            <Tools />
        </ExperienceContainer>
    );
}