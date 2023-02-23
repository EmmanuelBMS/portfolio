import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';

export const PortfolioContext = createContext({});

export default function PortfolioContextProvider({ children }) {
  const [screenWidth, setscreenWidth] = useState(0);

  function handleResize() {
    useEffect(() => {
      function updatescreenWidth() {
        setscreenWidth(window.innerWidth);
      }
      window.addEventListener('resize', updatescreenWidth);
      updatescreenWidth();
      return () => window.removeEventListener('resize', updatescreenWidth);
    }, []);
    return screenWidth > 800 ? <NavBar /> : <MobileNavBar />;
  }
  const valueToProvide = useMemo(() => ({
    screenWidth,
    handleResize,
  }));

  return (
    <PortfolioContext.Provider value={valueToProvide}>
      {children}
    </PortfolioContext.Provider>
  );
}

PortfolioContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
