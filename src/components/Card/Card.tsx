import React from 'react';
import { CardContainer, Titlecard, Photo } from "./Card.style";

interface CardProps {
  title: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <CardContainer>
      <Titlecard>{title}</Titlecard>
      <Photo src={imageUrl} alt={title} />
    </CardContainer>
  );
}