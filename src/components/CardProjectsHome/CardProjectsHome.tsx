import {
    CardProjectsHomeSection,
    CardContainer,
    ImageContainer,
    CardProjectsHomeImage,
    InfoContainer,
    CardProjectsHomeTitle,
    CardProjectsHomeDescription,
    CardProjectsHomeLink
} from './CardProjectsHome.style';

interface CardProjectsHomeProps {
    Title: string;
    Description: string;
    ImageUrl: string;
    ProjectUrl: string;
    position: boolean;
}

export function CardProjectsHome({
    Title,
    Description,
    ImageUrl,
    ProjectUrl,
    position
}: CardProjectsHomeProps) {
    return (
        <CardProjectsHomeSection position={position}>
            <CardContainer position={position}>
                <ImageContainer>
                    <CardProjectsHomeImage
                        src={ImageUrl}
                        alt={Title}
                    />
                </ImageContainer>

                <InfoContainer>
                    <CardProjectsHomeTitle>{Title}</CardProjectsHomeTitle>
                    <CardProjectsHomeDescription>{Description}</CardProjectsHomeDescription>

                    <CardProjectsHomeLink
                        href={ProjectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver Projeto
                    </CardProjectsHomeLink>
                </InfoContainer>
            </CardContainer>
        </CardProjectsHomeSection>
    );
}