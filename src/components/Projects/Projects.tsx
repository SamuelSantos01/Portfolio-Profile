import {
    ProjectsSection,
    ProjectsHeader,
    TitleProjects,
    AnimationContainer,
    DescriptionProjects,
    ProjectsGrid
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
                    ProjectUrl="/projeto-tempo"
                    position={true}
                />
                
                <CardProjectsHome 
                    Title="E-commerce Plataforma"
                    Description="Plataforma de e-commerce com carrinho de compras e pagamento integrado."
                    ImageUrl="src/assets/imgs projects/ecommerce_project.png"
                    ProjectUrl="/projeto-ecommerce"
                    position={false}
                />
                
                <CardProjectsHome 
                    Title="App de Fitness"
                    Description="Aplicativo móvel para acompanhamento de exercícios e dieta com IA personalizada."
                    ImageUrl="src/assets/imgs projects/fitness_project.png"
                    ProjectUrl="/projeto-fitness"
                    position={true}
                />
                
                <CardProjectsHome 
                    Title="Dashboard Analytics"
                    Description="Dashboard interativo para visualização de dados em tempo real com gráficos dinâmicos."
                    ImageUrl="src/assets/imgs projects/dashboard_project.png"
                    ProjectUrl="/projeto-dashboard"
                    position={false}
                />
            </ProjectsGrid>
        </ProjectsSection>
    );
}