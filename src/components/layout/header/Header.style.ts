import styled from 'styled-components';

// Interface para props opcionais
interface HeaderContainerProps {
  $withShadow?: boolean;
  $isScrolled?: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  
  box-shadow: ${({ $withShadow, $isScrolled }) =>
    $isScrolled
      ? '0 4px 20px rgba(0, 0, 0, 0.08)'
      : $withShadow
        ? '0 2px 10px rgba(0, 0, 0, 0.05)'
        : 'none'};
  
  transition: all 0.3s ease;
  height: 80px;
  
  @media (max-width: 768px) {
    height: 70px;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

export const LogoText = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none; 
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  position: relative;
`;

interface NavLinkProps {
  $isActive?: boolean;
}

export const NavLink = styled.a<NavLinkProps>`
  color: ${({ $isActive }) => ($isActive ? '#3b82f6' : '#4b5563')};
  text-decoration: none;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: #3b82f6;
    background-color: #f3f4f6;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $isActive }) => ($isActive ? '24px' : '0')};
    height: 3px;
    background: #3b82f6;
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 24px;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #4b5563;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface MobileMenuOverlayProps {
  $isOpen: boolean;
}

export const MobileMenuOverlay = styled.div<MobileMenuOverlayProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 999;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MobileNavLink = styled.a<NavLinkProps>`
  color: ${({ $isActive }) => ($isActive ? '#3b82f6' : '#4b5563')};
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f3f4f6;
    color: #3b82f6;
  }
`;

export const ActionMobileContainer = styled.div`
margin-top: auto;
display: flex;
flex-direction: column;
gap: 1rem;
`
export const ActionMobileButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
background: none;
border: 1px solid  #e5e7eb;
padding: 1rem;
border-radius: '0.5rem;
color: '#4b5563;
cursor: pointer;
`
