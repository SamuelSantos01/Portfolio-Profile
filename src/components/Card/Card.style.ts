import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.cardBackground};
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 8px;
    max-width: 7rem; 
    width: 100%;
    overflow: hidden; 
    box-sizing: border-box; 

    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
    }
`;

export const Titlecard = styled.h2`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    text-align: center;
    font-weight: 400;
    
    width: 100%;
    word-wrap: break-word; 
    overflow-wrap: break-word;
    margin-bottom: 0.5rem;
`;

export const Photo = styled.img`
    width: 100%; 
    max-width: 60px; 
    height: auto;  
    
    object-fit: contain;
    border-radius: 8px;
`;