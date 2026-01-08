import styled from 'styled-components';

export const ToolsContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: fit-content;
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: ${({ theme }) => theme.colors.background};

`;


export const TitleTools = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.colors.primary} 0%, 
    ${({ theme }) => theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.large};
  padding: 2rem 10rem 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;  