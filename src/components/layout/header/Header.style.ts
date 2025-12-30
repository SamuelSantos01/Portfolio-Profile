import styled from 'styled-components';

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
  
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}40; 
  
  box-shadow: ${({ $withShadow, $isScrolled, theme }) =>
    $isScrolled
      ? `0 4px 20px ${theme.colors.text}15`
      : $withShadow
        ? `0 2px 10px ${theme.colors.text}10`
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
  padding: 0 ${({ theme }) => theme.spacings.large};
  
  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacings.medium};
  }
  
  @media (max-width: 480px) {
    padding: 0 ${({ theme }) => theme.spacings.small};
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
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.primary};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.large};
  
  @media (max-width: 768px) {
    display: none; 
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacings.medium};
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
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.accent : theme.colors.text)};
  text-decoration: none;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  font-size: 1rem;
  padding: ${({ theme }) => `${theme.spacings.small} ${theme.spacings.medium}`};
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.secondary}20;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $isActive }) => ($isActive ? '24px' : '0')};
    height: 3px;
    background: ${({ theme }) => theme.colors.accent};
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
  padding: ${({ theme }) => theme.spacings.small};
  color: ${({ theme }) => theme.colors.text};
  
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
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 999;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.large};
  box-shadow: 0 10px 25px ${({ theme }) => theme.colors.text}15;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MobileNavLink = styled.a<NavLinkProps>`
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.accent : theme.colors.text)};
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  padding: ${({ theme }) => theme.spacings.medium};
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.medium};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}20;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ActionMobileContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
`;

export const ActionMobileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.small};
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacings.medium};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}15;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;