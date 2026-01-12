import styled from "styled-components";

interface CardContainerProps {
  $position: boolean;
}

export const CardProjectsHomeSection = styled.section<CardContainerProps>`
  background-color: ${({ theme }) => theme.colors.expirenceBackground};
  padding: ${({ theme }) => theme.spacings.large} 0;
  width: 100%;
`;

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: ${({ $position }) => $position ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.large};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings.large};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const CardProjectsHomeImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacings.medium};

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const CardProjectsHomeTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CardProjectsHomeDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CardProjectsHomeLink = styled.span`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CardProjectsHomelogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;  

export const CardDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #303030;
  border-radius: 15px;
  padding: 8px 16px;
  gap: 10px; 
  text-decoration: none;
  color: inherit; 
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #404040;
  }
`;