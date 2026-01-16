import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToAnchor() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            // Pequeno delay para garantir que o DOM da nova página carregou
            const timer = setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else {
            // Se mudar de página sem hash, vai para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash, pathname]);
}