import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.expirenceBackground};
  padding: ${({ theme }) => theme.spacings.large} 0 ${({ theme }) => theme.spacings.large} 0;
  width: 100%;
`;

export const ProjectsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacings.medium};
`;

export const TitleProjects = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }
`;

export const AnimationContainer = styled.div`
  margin: -50px 0 -25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2000px;
  height: 200px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 150px;
    height: 120px;
    margin: -40px 0 -20px 0;
  }
`;

export const DescriptionProjects = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  max-width: 800px;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 ${({ theme }) => theme.spacings.small};
    margin-top: ${({ theme }) => theme.spacings.small};
  }
`;

export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.large};
  width: 100%;
  max-width: 1200px;
  padding: 0 ${({ theme }) => theme.spacings.medium};
  margin-top: ${({ theme }) => theme.spacings.medium};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacings.large};
    padding: 0 ${({ theme }) => theme.spacings.small};
  }
`;

export const ProjectsHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.small};
  width: 100%;
`;