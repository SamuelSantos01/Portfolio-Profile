import styled from 'styled-components';

export const ContactSection = styled.section`
  background-color:${({ theme }) => theme.colors.expirenceBackground};
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 3rem;
`;

export const GroupTop = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ContactTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContactDescription = styled.p`
 color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 400;
  opacity: 0.9;
`;

export const ContactP = styled.p`
 color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  font-size: 1.1rem;
  opacity: 0.9;
font-weight: 600;
`;

export const ContactImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-bottom: 2rem;
`;
