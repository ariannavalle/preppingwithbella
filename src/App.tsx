import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import tuscanChicken from './assets/tuscan-chicken.jpg';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { translations } from './data/translations';
import './App.css';

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage, setLanguage } = useLanguage();

  // Determine if the current route is Spanish
  const isSpanish = location.pathname.startsWith('/es');
  const isHomePage = location.pathname === '/' || location.pathname === '/es';

  // Set language based on route
  useEffect(() => {
    if (isSpanish && language !== 'es') {
      setLanguage('es');
    } else if (!isSpanish && language !== 'en') {
      setLanguage('en');
    }
    // eslint-disable-next-line
  }, [isSpanish]);

  // Language toggle should update the URL
  const handleToggleLanguage = () => {
    if (isSpanish) {
      // Switch to English
      const newPath = location.pathname.replace(/^\/es/, '') || '/';
      navigate(newPath + location.search, { replace: true });
    } else {
      // Switch to Spanish
      navigate('/es' + (location.pathname === '/' ? '' : location.pathname) + location.search, { replace: true });
    }
    // toggleLanguage will be handled by useEffect
  };

  return (
    <div className="app">
      <button className="language-toggle" onClick={handleToggleLanguage}>
        {translations['language.toggle'][language]}
      </button>

      {isHomePage && (
        <div className="banner">
          <div className="banner-image-wrapper">
            <img src={tuscanChicken} alt="Meal Prep Food" className="banner-image" />
          </div>
          <div className="banner-content">
            <h1 className="banner-title">{translations['banner.title'][language]}</h1>
            <p className="banner-description">
              {translations['banner.description'][language]}
            </p>
          </div>
        </div>
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/es" element={<RecipeList />} />
          <Route path="/es/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
};

export default App;
