import {
    HeroContainer,
    HeroWrapperIntro,
    HeroWrapperImg,
    TitleHero,
    DescriptionHero,
    // LinkMoreInfo
} from "./Hero.style";

import SoftwareDeveloper from "../lottiefiles/SoftwareDeveloperAnimation";

export function Hero() {
    return (
        <HeroContainer>
            <HeroWrapperIntro>
                <TitleHero>Olá, Sou Samuel Desenvolvedor de software e sistemas</TitleHero>
                <DescriptionHero>Desenvolvedor full-stack com habilidades na criação de aplicações web escaláveis a diferentes dispositivos. Tenho grande entusiasmo por desenvolver soluções inovadoras que atendem às necessidades reais do usuário e proporcinem uma experência significativa e de alto valor</DescriptionHero>
                {/* <LinkMoreInfo>Saiba Mais!</LinkMoreInfo> */}
            </HeroWrapperIntro>

            <HeroWrapperImg>
                <SoftwareDeveloper width={2000} height={700} />
            </HeroWrapperImg>
        </HeroContainer>
    );
}