import {
    CardProjectsHomeSection,
    CardContainer,
    ImageContainer,
    CardProjectsHomeImage,
    InfoContainer,
    CardProjectsHomeTitle,
    CardProjectsHomeDescription,
    CardProjectsHomeLink,
    CardDiv,
    CardProjectsHomelogo
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
        <CardProjectsHomeSection $position={position}>
            <CardContainer $position={position}>
                <ImageContainer>
                    <CardProjectsHomeImage
                        src={ImageUrl}
                        alt={Title}
                    />
                </ImageContainer>

                <InfoContainer>
                    <CardProjectsHomeTitle>{Title}</CardProjectsHomeTitle>
                    <CardProjectsHomeDescription>{Description}</CardProjectsHomeDescription>

                    <CardDiv as="a" href={ProjectUrl} target="_blank" rel="noopener noreferrer">
                        <CardProjectsHomelogo src='src/assets/imgs/githubgenericname.png' />
                        <CardProjectsHomeLink>GitHub</CardProjectsHomeLink>
                    </CardDiv>
                </InfoContainer>
            </CardContainer>
        </CardProjectsHomeSection>
    );
}