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

    // AJUSTE: Agora os caminhos incluem a barra '/' para indicar que as seções estão na Home
    const navItems = [
        { id: 'home', label: 'Início', path: '/#home' },
        { id: 'experience', label: 'Experiência', path: '/#experience' },
        { id: 'projects', label: 'Projetos', path: '/#projects' },
        { id: 'education', label: 'Formação', path: '/#education' },
        { id: 'contact', label: 'Contato', path: '/#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    // Lógica de Navegação Ajustada
    const handleNavigation = (path: string) => {
        setIsMobileMenuOpen(false);

        if (path.includes('#')) {
            const [route, hash] = path.split('#');
            
            // Se eu já estiver na Home, apenas faço o scroll
            if (location.pathname === route || (location.pathname === '/' && route === '')) {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Se estiver em outra página, navego para a Home + Hash
                navigate(path);
            }
        } else {
            // Navegação normal para páginas sem #
            navigate(path);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <HeaderContainer $withShadow $isScrolled={isScrolled}>
                <HeaderWrapper>
                    {/* Logo - Clicar volta para o topo da Home */}
                    <HeaderLogo onClick={() => handleNavigation('/#home')}>
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
                                        // Verifica se o hash atual é o mesmo do item para destacar o menu
                                        $isActive={location.hash === `#${item.id}`}
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
                                $isActive={location.hash === `#${item.id}`}
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