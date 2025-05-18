import tuscanChickenImg from "../assets/tuscan-chicken.jpg";
import chiliImg from "../assets/chili.jpg";
import macAndCheeseImg from "../assets/mac-and-cheese.jpg";
import japchaeImg from "../assets/japchae.jpg";
import burgerImg from "../assets/burger.jpg";
import turkeyMeatballsImg from "../assets/turkey-meatballs.webp";
import meatballsImg from "../assets/cocktail-meatballs.jpg";
import meatloafImg from "../assets/meatloaf.jpg";
import layeredDipImg from "../assets/6-layer-dip.webp";
import picadilloImg from "../assets/picadillo.jpg";
import beefStewImg from "../assets/beef-stew.jpg";
import tallarinesVerdesImg from "../assets/tallarines-verdes.jpg";
import marinaraImg from "../assets/marinara.jpg";
import chickenSouffleImg from "../assets/chicken-souffle.JPEG";
import { recipeTranslations } from './translations';

interface Recipe {
    id: string;
    title: string;
    images: string[];
    description: string;
    ingredients: string[];
    instructions: string[];
    prepTime: string;
    cookTime: string;
    servings: string;
}

interface RecipeListItem {
    id: string;
    title: string;
    images: string[];
    description: string;
}

// this determines the order
export const recipeList: RecipeListItem[] = [
    {
        id: 'tuscan-chicken',
        title: recipeTranslations['tuscan-chicken'].title.en,
        images: [tuscanChickenImg],
        description: recipeTranslations['tuscan-chicken'].description.en
    },
    {
        id: 'tallarines-verdes',
        title: recipeTranslations['tallarines-verdes'].title.en,
        images: [tallarinesVerdesImg],
        description: recipeTranslations['tallarines-verdes'].description.en
    },
    {
        id: 'mac-and-cheese',
        title: recipeTranslations['mac-and-cheese'].title.en,
        images: [macAndCheeseImg],
        description: recipeTranslations['mac-and-cheese'].description.en
    },
    {
        id: 'seven-layer-dip',
        title: recipeTranslations['seven-layer-dip'].title.en,
        images: [layeredDipImg],
        description: recipeTranslations['seven-layer-dip'].description.en
    },
    {
        id: 'japchae',
        title: recipeTranslations['japchae'].title.en,
        images: [japchaeImg],
        description: recipeTranslations['japchae'].description.en
    },
    {
        id: 'burger-fries',
        title: recipeTranslations['burger-fries'].title.en,
        images: [burgerImg],
        description: recipeTranslations['burger-fries'].description.en
    },
    {
        id: 'turkey-meatballs',
        title: recipeTranslations['turkey-meatballs'].title.en,
        images: [turkeyMeatballsImg],
        description: recipeTranslations['turkey-meatballs'].description.en
    },
    {
        id: 'cocktail-meatballs',
        title: recipeTranslations['cocktail-meatballs'].title.en,
        images: [meatballsImg],
        description: recipeTranslations['cocktail-meatballs'].description.en
    },
    {
        id: 'chicken-souffle',
        title: recipeTranslations['chicken-souffle'].title.en,
        images: [chickenSouffleImg],
        description: recipeTranslations['chicken-souffle'].description.en
    },
    {
        id: 'meatloaf',
        title: recipeTranslations['meatloaf'].title.en,
        images: [meatloafImg],
        description: recipeTranslations['meatloaf'].description.en
    },
    {
        id: 'classic-chili',
        title: recipeTranslations['classic-chili'].title.en,
        images: [chiliImg],
        description: recipeTranslations['classic-chili'].description.en
    },
    {
        id: 'mexican-picadillo',
        title: recipeTranslations['mexican-picadillo'].title.en,
        images: [picadilloImg],
        description: recipeTranslations['mexican-picadillo'].description.en
    },
    {
        id: 'instant-pot-beef-stew',
        title: recipeTranslations['instant-pot-beef-stew'].title.en,
        images: [beefStewImg],
        description: recipeTranslations['instant-pot-beef-stew'].description.en
    },
    {
        id: 'homemade-marinara',
        title: recipeTranslations['homemade-marinara'].title.en,
        images: [marinaraImg],
        description: recipeTranslations['homemade-marinara'].description.en
    }
];

export const recipes: { [key: string]: Recipe } = {
    'tuscan-chicken': {
        id: 'tuscan-chicken',
        title: recipeTranslations['tuscan-chicken'].title.en,
        images: [tuscanChickenImg],
        description: recipeTranslations['tuscan-chicken'].description.en,
        ingredients: recipeTranslations['tuscan-chicken'].ingredients.en,
        instructions: recipeTranslations['tuscan-chicken'].instructions.en,
        prepTime: '10 minutes',
        cookTime: '20 minutes',
        servings: '10 servings'
    },
    'chicken-souffle': {
        id: 'chicken-souffle',
        title: recipeTranslations['chicken-souffle'].title.en,
        images: [chickenSouffleImg],
        description: recipeTranslations['chicken-souffle'].description.en,
        ingredients: recipeTranslations['chicken-souffle'].ingredients.en,
        instructions: recipeTranslations['chicken-souffle'].instructions.en,
        prepTime: '30 minutes',
        cookTime: '55 minutes',
        servings: '6 servings'
    },
    'classic-chili': {
        id: 'classic-chili',
        title: recipeTranslations['classic-chili'].title.en,
        images: [chiliImg],
        description: recipeTranslations['classic-chili'].description.en,
        ingredients: recipeTranslations['classic-chili'].ingredients.en,
        instructions: recipeTranslations['classic-chili'].instructions.en,
        prepTime: '15 minutes',
        cookTime: '35 minutes',
        servings: '6 servings'
    },
    'mac-and-cheese': {
        id: 'mac-and-cheese',
        title: recipeTranslations['mac-and-cheese'].title.en,
        images: [macAndCheeseImg],
        description: recipeTranslations['mac-and-cheese'].description.en,
        ingredients: recipeTranslations['mac-and-cheese'].ingredients.en,
        instructions: recipeTranslations['mac-and-cheese'].instructions.en,
        prepTime: '15 minutes',
        cookTime: '20 minutes',
        servings: '8 servings'
    },
    'japchae': {
        id: 'japchae',
        title: recipeTranslations['japchae'].title.en,
        images: [japchaeImg],
        description: recipeTranslations['japchae'].description.en,
        ingredients: recipeTranslations['japchae'].ingredients.en,
        instructions: recipeTranslations['japchae'].instructions.en,
        prepTime: '30 minutes',
        cookTime: '20 minutes',
        servings: '4 servings'
    },
    'burger-fries': {
        id: 'burger-fries',
        title: recipeTranslations['burger-fries'].title.en,
        images: [burgerImg],
        description: recipeTranslations['burger-fries'].description.en,
        ingredients: recipeTranslations['burger-fries'].ingredients.en,
        instructions: recipeTranslations['burger-fries'].instructions.en,
        prepTime: '15 minutes',
        cookTime: '30 minutes',
        servings: '4 servings'
    },
    'turkey-meatballs': {
        id: 'turkey-meatballs',
        title: recipeTranslations['turkey-meatballs'].title.en,
        images: [turkeyMeatballsImg],
        description: recipeTranslations['turkey-meatballs'].description.en,
        ingredients: recipeTranslations['turkey-meatballs'].ingredients.en,
        instructions: recipeTranslations['turkey-meatballs'].instructions.en,
        prepTime: '15 minutes',
        cookTime: '25 minutes',
        servings: '4 servings'
    },
    'cocktail-meatballs': {
        id: 'cocktail-meatballs',
        title: recipeTranslations['cocktail-meatballs'].title.en,
        images: [meatballsImg],
        description: recipeTranslations['cocktail-meatballs'].description.en,
        ingredients: recipeTranslations['cocktail-meatballs'].ingredients.en,
        instructions: recipeTranslations['cocktail-meatballs'].instructions.en,
        prepTime: '20 minutes',
        cookTime: '30 minutes',
        servings: '6 servings'
    },
    'meatloaf': {
        id: 'meatloaf',
        title: recipeTranslations['meatloaf'].title.en,
        images: [meatloafImg],
        description: recipeTranslations['meatloaf'].description.en,
        ingredients: recipeTranslations['meatloaf'].ingredients.en,
        instructions: recipeTranslations['meatloaf'].instructions.en,
        prepTime: '20 minutes',
        cookTime: '70 minutes',
        servings: '8 servings'
    },
    'seven-layer-dip': {
        id: 'seven-layer-dip',
        title: recipeTranslations['seven-layer-dip'].title.en,
        images: [layeredDipImg],
        description: recipeTranslations['seven-layer-dip'].description.en,
        ingredients: recipeTranslations['seven-layer-dip'].ingredients.en,
        instructions: recipeTranslations['seven-layer-dip'].instructions.en,
        prepTime: '20 minutes',
        cookTime: '0 minutes',
        servings: '12 servings'
    },
    'mexican-picadillo': {
        id: 'mexican-picadillo',
        title: recipeTranslations['mexican-picadillo'].title.en,
        images: [picadilloImg],
        description: recipeTranslations['mexican-picadillo'].description.en,
        ingredients: recipeTranslations['mexican-picadillo'].ingredients.en,
        instructions: recipeTranslations['mexican-picadillo'].instructions.en,
        prepTime: '15 minutes',
        cookTime: '30 minutes',
        servings: '4 servings'
    },
    'instant-pot-beef-stew': {
        id: 'instant-pot-beef-stew',
        title: recipeTranslations['instant-pot-beef-stew'].title.en,
        images: [beefStewImg],
        description: recipeTranslations['instant-pot-beef-stew'].description.en,
        ingredients: recipeTranslations['instant-pot-beef-stew'].ingredients.en,
        instructions: recipeTranslations['instant-pot-beef-stew'].instructions.en,
        prepTime: '20 minutes',
        cookTime: '45 minutes',
        servings: '6 servings'
    },
    'tallarines-verdes': {
        id: 'tallarines-verdes',
        title: recipeTranslations['tallarines-verdes'].title.en,
        images: [tallarinesVerdesImg],
        description: recipeTranslations['tallarines-verdes'].description.en,
        ingredients: recipeTranslations['tallarines-verdes'].ingredients.en,
        instructions: recipeTranslations['tallarines-verdes'].instructions.en,
        prepTime: '20 minutes',
        cookTime: '25 minutes',
        servings: '4 servings'
    },
    'homemade-marinara': {
        id: 'homemade-marinara',
        title: recipeTranslations['homemade-marinara'].title.en,
        images: [marinaraImg],
        description: recipeTranslations['homemade-marinara'].description.en,
        ingredients: recipeTranslations['homemade-marinara'].ingredients.en,
        instructions: recipeTranslations['homemade-marinara'].instructions.en,
        prepTime: '10 minutes',
        cookTime: '30 minutes',
        servings: '6 servings'
    },
};
