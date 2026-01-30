import { 
    PageContainer,
    Title,
    ProjectsWrapper
} from './Projects.style';

import { CardProject } from '../../components/CardProject';

export function Projects() {
    return (
        <PageContainer>
                <Title>Projetos</Title>
                <ProjectsWrapper>
                    <CardProject></CardProject>
                </ProjectsWrapper>
        </PageContainer>
    );
}