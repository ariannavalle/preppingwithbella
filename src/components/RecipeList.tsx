import React from 'react';
import Masonry from 'react-masonry-css';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css';
import { recipeList } from "../data/recipes.ts";
import { recipeTranslations } from "../data/translations";
import { useLanguage } from '../context/LanguageContext';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const RecipeList: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="recipe-list">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="recipe-masonry-grid"
        columnClassName="recipe-masonry-grid_column"
      >
        {recipeList.map(recipe => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipeTranslations[recipe.id]?.title[language] || recipe.title}
            image={recipe.image}
            description={recipeTranslations[recipe.id]?.description[language] || recipe.description}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default RecipeList; 