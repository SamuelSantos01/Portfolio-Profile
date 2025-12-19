import {
    HeroContainer,
    HeroWrapperIntro,
    HeroWrapperImg,
    TitleHero,
    DescriptionHero,
    LinkMoreInfo,
    ImageHero
} from "./Hero.style";

import ImageHeroPng from '../../assets/imgs/dev.png';

export function Hero() {
    return (
        <HeroContainer>
            <HeroWrapperIntro>
                <TitleHero>Olá, Sou Samuel Desenvolvedor Fullstack</TitleHero>
                <DescriptionHero>Desenvolvedor full-stack com habilidades na criação de aplicações web escaláveis a diferentes dispositivos. Tenho grande entusiasmo por desenvolver soluções inovadoras que atendem às necessidades reais do usuário e proporcinem uma experência significativa e de alto valor</DescriptionHero>
                <LinkMoreInfo>Saiba Mais!</LinkMoreInfo>
            </HeroWrapperIntro>
            <HeroWrapperImg>
                <ImageHero src={ImageHeroPng}alt="Descrição"/>
            </HeroWrapperImg>
        </HeroContainer>
    );
}