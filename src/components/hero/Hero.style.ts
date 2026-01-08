import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.large};
  padding: 0 ${({ theme }) => theme.spacings.large};
  max-width: 1900px
  margin: 0;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 6rem;
  @media (max-width: 968px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 100px;
  }
`;

export const HeroWrapperIntro = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacings.medium};
  display: flex;
  flex-direction: column;
  
  @media (max-width: 968px) {
    align-items: center;
  }
`;

export const HeroWrapperImg = styled.div`
  flex: 1;
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacings.medium};
  overflow: hidden;
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.primary}20;
    filter: blur(100px);
    z-index: -1;
  }
`;

export const TitleHero = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  
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

export const DescriptionHero = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 1.4rem;
  text-align: justify;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacings.large};
  opacity: 0.85;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LinkMoreInfo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.small};
  max-width: fit-content;
  
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.colors.primary} 0%, 
    ${({ theme }) => theme.colors.accent} 100%
  );
  color: ${({ theme }) => theme.colors.white};
  
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  box-shadow: 0 4px 15px ${({ theme }) => theme.colors.primary}40;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.colors.primary}60;
    filter: brightness(1.1);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &::after {
    content: '→';
    transition: transform 0.3s ease;
    font-size: 1.2rem;
  }
  
  &:hover::after {
    transform: translateX(5px);
  }
`;