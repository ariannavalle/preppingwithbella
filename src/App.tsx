import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import tallarinesVerdes from './assets/tallarines-verdes.jpg';
import tuscanChicken from './assets/tuscan-chicken.jpg';
import './App.css';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app">
      {isHomePage && (
        <div className="banner">
          <div className="banner-image-wrapper">
            <img src={tuscanChicken} alt="Meal Prep Food" className="banner-image" />
          </div>
          <div className="banner-content">
            <h1 className="banner-title">Meal Prep Recipes</h1>
            <p className="banner-description">
              Welcome to Meal Prep with Bella! Here you'll find a curated collection of my favorite meal prep recipes, gathered over the last few years. My goal is to make your week easier, tastier, and more organized with delicious, tried-and-true recipes perfect for prepping ahead.
            </p>
          </div>
        </div>
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
