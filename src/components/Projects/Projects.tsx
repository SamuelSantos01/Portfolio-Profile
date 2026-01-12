import {
    ProjectsSection,
    ProjectsHeader,
    TitleProjects,
    AnimationContainer,
    DescriptionProjects,
    ProjectsGrid,
    LinkMoreInfo
} from "./Projects.style";

import { CardProjectsHome } from "../CardProjectsHome";
import GradientInfiniteSign from "../lottiefiles/GradientInfiniteSign";

export function Projects() {
    return (
        <ProjectsSection>
            <ProjectsHeader>
                <TitleProjects>Meus Projetos</TitleProjects>
                
                <AnimationContainer>
                    <GradientInfiniteSign 
                        width="100%" 
                        height="100%"
                    />
                </AnimationContainer>
                
                <DescriptionProjects>
                    De ideias abstratas a projetos bem-sucedidos, aqui estão alguns dos meus trabalhos mais recentes
                </DescriptionProjects>
            </ProjectsHeader>

            <ProjectsGrid>
                <CardProjectsHome 
                    Title="Sistema de Gestão Tempo"
                    Description="Um sistema completo para gestão de tempo e produtividade com relatórios detalhados."
                    ImageUrl="src/assets/imgs projects/tempo_project.png"
                    ProjectUrl="https://github.com/SamuelSantos01/Previsao-do-tempo"
                    position={true}
                />
                
                <CardProjectsHome 
                    Title="Tela de Login"
                    Description="Página feita em Html e css, apenas para demonstrar habilidades no desenvolvimento frontend.."
                    ImageUrl="src/assets/imgs projects/login_projetc.png"
                    ProjectUrl="https://github.com/SamuelSantos01/Tela-de-login"
                    position={false}
                />
                
                <CardProjectsHome 
                    Title="Portifolio Pessoal"
                    Description="Aplicativo móvel para acompanhamento de exercícios e dieta com IA personalizada."
                    ImageUrl="src/assets/imgs projects/portifolio2.png"
                    ProjectUrl="https://github.com/SamuelSantos01/Portifolio"
                    position={true}
                />
            </ProjectsGrid>

            <LinkMoreInfo href="https://github.com/SamuelSantos01?tab=repositories">Mais projetos!</LinkMoreInfo>

        </ProjectsSection>
    );
}