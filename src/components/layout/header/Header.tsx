import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
    HeaderContainer,
    HeaderWrapper,
    HeaderLogo,
    LogoText,
    HeaderNav,
    NavList,
    NavItem,
    NavLink,
    MobileMenuButton,
    MobileMenuOverlay,
    MobileNavList,
    MobileNavLink,
} from './Header.style';

import DeveloperAnimation from "../../lottiefiles/WebDeveloper";

export function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: 'home', label: 'Início', path: '/' },
        { id: 'experience', label: 'Experiência', path: '/experien' },
        { id: 'projects', label: 'Projetos', path: '/projects' },
        { id: 'education', label: 'Formação', path: '/education' },
        { id: 'contact', label: 'Contato', path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const handleNavigation = (path: string) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <HeaderContainer $withShadow $isScrolled={isScrolled}>
                <HeaderWrapper>
                    {/* Logo */}
                    <HeaderLogo onClick={() => handleNavigation('/')}>
                        <LogoText>&lt;Samuel Teixeira/&gt;</LogoText>
                        <DeveloperAnimation width="100px" height="90px" />
                    </HeaderLogo>

                    {/* Navegação Desktop */}
                    <HeaderNav>
                        <NavList>
                            {navItems.map((item) => (
                                <NavItem key={item.id}>
                                    <NavLink
                                        href={item.path}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation(item.path);
                                        }}
                                        $isActive={location.pathname === item.path}
                                    >
                                        {item.label}
                                    </NavLink>
                                </NavItem>
                            ))}
                        </NavList>
                    </HeaderNav>

                    {/* Botão Menu Mobile */}
                    <MobileMenuButton
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </MobileMenuButton>
                </HeaderWrapper>
            </HeaderContainer>

            {/* Menu Mobile */}
            <MobileMenuOverlay $isOpen={isMobileMenuOpen}>
                <MobileNavList>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <MobileNavLink
                                href={item.path}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(item.path);
                                }}
                                $isActive={location.pathname === item.path}
                            >
                                {item.label}
                            </MobileNavLink>
                        </li>
                    ))}
                </MobileNavList>
            </MobileMenuOverlay>
        </>
    );
}