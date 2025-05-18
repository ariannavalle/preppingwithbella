import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/RecipeCard.css';

interface RecipeCardProps {
  id: string;
  title: string;
  images: string[];
  description: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, images, description }) => {
  const { language } = useLanguage();
  const to = language === 'es' ? `/es/recipe/${id}` : `/recipe/${id}`;
  return (
    <Link to={to} className="recipe-card">
      <div className="recipe-card-image">
        <img src={images[0]} alt={title} />
      </div>
      <div className="recipe-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default RecipeCard; 