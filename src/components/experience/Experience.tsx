import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code } from 'lucide-react';
import { useTheme } from 'styled-components';

import * as S from './Expirience.style';

const Experience: React.FC = () => {
  const theme = useTheme();

  return (
    <S.ExperienceSection id="experience">
      <S.ExperienceTitle>Minha Experiência</S.ExperienceTitle>

      <S.TimelineWrapper>
        <VerticalTimeline lineColor={theme.colors.secondary + '50'}>

          {/*Experiência 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - Presente"
            iconStyle={{ background: theme.colors.primary, color: '#fff' }}
            icon={<Code />}
          >
            <S.JobTitle>Desenvolvedor Front-end Junior</S.JobTitle>
            <S.CompanyName>SALCOMP Industrial Eletrônica da Amazonia Ltda</S.CompanyName>
            <S.Description>
              <strong>Principais Responsabilidades:</strong> Desenvolvi e mantive tanto o back-end quanto o front-end de aplicações web. Fui responsável pela criação de APIs RESTful e pela implementação de interfaces de usuário responsivas, garantindo a integração completa entre os sistemas.
              <br />
              <strong>Habilidades Técnicas Adquiridas:</strong> Aprofundei minhas habilidades em desenvolvimento fullstack, usando Nest.js para o back-end e React com Material UI para o front-end. Ganhei experiência com banco de dados SQLserver e com a construção de REST APIs.

            </S.Description>
          </VerticalTimelineElement>

          {/* Experiência 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025/5 - presente"
            iconStyle={{ background: theme.colors.accent, color: '#fff' }}
            icon={<Briefcase />}
          >
            <S.JobTitle>Desenvolvedor FullStack/Web Junior</S.JobTitle>
            <S.CompanyName>Graest/UEA - Laboratório de Robótica e Automação Industrial</S.CompanyName>
            <S.Description>
              <strong>Principais Responsabilidades:</strong> Desenvolvi e mantive tanto o back-end quanto o front-end de aplicações web. Fui responsável pela criação de APIs RESTful e pela implementação de interfaces de usuário responsivas, garantindo a integração completa entre os sistemas.
              <br />
              <strong>Habilidades Técnicas Adquiridas:</strong> Aprofundei minhas habilidades em desenvolvimento fullstack, usando Python para o back-end e React com Material UI para o front-end. Ganhei experiência com banco de dados PostgreSQL e com a construção de REST APIs.
            </S.Description>
          </VerticalTimelineElement>

          {/* Experiência 3*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2025/03 - 2025/4"
            iconStyle={{ background: theme.colors.secondary, color: '#fff' }}
            icon={<Code />}
          >
            <S.JobTitle>Pesquisador</S.JobTitle>
            <S.CompanyName>ITEGAM - Instituto de Tecnologia e Educação Galileo da Amazônia</S.CompanyName>
            <S.Description>
              <strong>Validação Técnica:</strong> Garanti a conformidade de submissões com os padrões da revista, validando a qualidade e a integridade dos dados apresentados.
              <br />
              <strong>Gestão de Fluxo de Trabalho:</strong> Otimizei o processo de publicação, da submissão à aprovação, para garantir eficiência e cumprimento de prazos.
              <br />
              <strong>Coordenação de Equipes:</strong> Gerenciei a comunicação e o processo de revisão entre autores e pareceristas, assegurando um ciclo de feedback ágil e produtivo.
            </S.Description>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </S.TimelineWrapper>
    </S.ExperienceSection>
  );
};

export default Experience;