import { styled } from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  }
`

export const HeroWrapperIntro = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 0.5rem;
  heigh: 100vh;

`

export const HeroWrapperImg = styled.div`
  flex: 1;
  border-radius: 16px;
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

/**
 * Estilizações de componentes internos de HeroWrapperIntro
 */
export const TitleHero = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

export const DescriptionHero = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const LinkMoreInfo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(5px);
  }
`

/**
 * Estilizações de componentes internos de HeroWrapperImg
 */
export const ImageHero = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media (max-width: 768px) {
    max-height: 300px;
  }
`