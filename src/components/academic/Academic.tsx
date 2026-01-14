import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Code } from 'lucide-react';
import { useTheme } from 'styled-components';

import * as S from './Academic.style';

const Academic: React.FC = () => {
  const theme = useTheme();

  return (
    <S.AcademicSection>
      <S.AcademicTitle>Carreira acadêmica</S.AcademicTitle>

      <S.TimelineWrapper>
        <VerticalTimeline lineColor={theme.colors.secondary + '50'}>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Presente"
            iconStyle={{ background: theme.colors.primary, color: '#fff' }}
            icon={<Code />}
          >
            <S.Title>Graduação em Engenharia de Software</S.Title>
            <S.InstitutionName> <a href="https://fucapi.edu.br/" target='blank'>FUCAPI - Fundação Centro de Análise, Pesquisa e Inovação Tecnológica</a> </S.InstitutionName>
            <S.Description>
              <strong>Principais Atividades:</strong> Atualmente cursando Engenharia de Software, onde aplico conceitos teóricos em projetos práticos de desenvolvimento de sistemas. Minha rotina acadêmica envolve desde a análise de arquitetura e lógica de programação até o gerenciamento de bancos de dados e colaboração em equipes multidisciplinares seguindo padrões de engenharia de alta performance.
              <br />
              <strong>Habilidades Técnicas Adquiridas:</strong> Paradgma Orientado a Objetos, Estruturas de Dados, Algoritmos, Desenvolvimento Web, Banco de Dados, Metodologias Ágeis, Engenharia de Requisitos, Testes de Software.

            </S.Description>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </S.TimelineWrapper>
    </S.AcademicSection>
  );
};

export default Academic;