import type { ReactNode } from 'react';
import { Header } from './header/index'
import { LayoutContainer, MainContent } from './Layout.styles';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
}