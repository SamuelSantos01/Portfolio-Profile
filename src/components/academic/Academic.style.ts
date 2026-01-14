import styled from 'styled-components';

export const AcademicSection = styled.section`
  background-color:${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacings.large} 0;
  width: 100%;
  height: fit-content;
`;

export const AcademicTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  margin-bottom: ${({ theme }) => theme.spacings.large};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TimelineWrapper = styled.div`
  .vertical-timeline::before {
    background: ${({ theme }) => theme.colors.secondary}50;
  }

  .vertical-timeline-element-content {
    background: ${({ theme }) => theme.colors.secondary}15 !important;
    color: ${({ theme }) => theme.colors.text} !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2) !important;
    border: 1px solid ${({ theme }) => theme.colors.secondary}30;
    border-radius: 12px !important;
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid ${({ theme }) => theme.colors.secondary}80 !important;
  }

  .vertical-timeline-element-date {
    color: ${({ theme }) => theme.colors.text} !important;
    font-weight: 600;
    opacity: 0.8;
  }

  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary}, 
                inset 0 2px 0 rgba(0,0,0,.08), 
                0 3px 0 4px rgba(0,0,0,.05) !important;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
`;

export const InstitutionName = styled.h4`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  font-size: 0.95rem;
  opacity: 0.9;
`;