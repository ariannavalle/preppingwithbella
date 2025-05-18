import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/RecipeDetail.css';
import { recipes } from "../data/recipes.ts";
import { translations, recipeTranslations } from "../data/translations";
import { useLanguage } from '../context/LanguageContext';
import ImageCarousel from './ImageCarousel';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const recipe = recipes[id || ''];

  if (!recipe) {
    return <div className="recipe-not-found">Recipe not found</div>;
  }

  const recipeTranslation = recipeTranslations[id || ''];
  const translatedTitle = recipeTranslation?.title[language] || recipe.title;
  const translatedDescription = recipeTranslation?.description[language] || recipe.description;
  const translatedIngredients = recipeTranslation?.ingredients?.[language] || recipe.ingredients;
  const translatedInstructions = recipeTranslation?.instructions?.[language] || recipe.instructions;

  return (
    <div className="recipe-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        {translations['recipe.backButton'][language]}
      </button>
      
      <div className="recipe-header">
        <h1>{translatedTitle}</h1>
        <div className="recipe-header-content">
          <div className="recipe-info">
            <div className="recipe-description">
              <p>{translatedDescription}</p>
            </div>
            <div className="recipe-meta">
              <div className="meta-item">
                <span className="label">{translations['recipe.prepTime'][language]}:</span>
                <span className="value">{recipe.prepTime}</span>
              </div>
              <div className="meta-item">
                <span className="label">{translations['recipe.cookTime'][language]}:</span>
                <span className="value">{recipe.cookTime}</span>
              </div>
              <div className="meta-item">
                <span className="label">{translations['recipe.servings'][language]}:</span>
                <span className="value">{recipe.servings}</span>
              </div>
            </div>
          </div>
          <div className="recipe-image">
            <ImageCarousel images={recipe.images} alt={translatedTitle} />
          </div>
        </div>
      </div>
      
      <div className="recipe-content">
        <div className="ingredients">
          <h2>{translations['recipe.ingredients'][language]}</h2>
          <ul>
            {translatedIngredients.map((ingredient: string, index: number) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="instructions">
          <h2>{translations['recipe.instructions'][language]}</h2>
          <ol>
            {translatedInstructions.map((instruction: string, index: number) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail; 