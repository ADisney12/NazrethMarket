import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const GoToOriginal = () => {
    //navigate('/Martin Luther King Way');
  };

  const GoToLakeCity = () => {
    //navigate('/Lake City');
  };

  return (
    <>
      {isMobile ? (
        <MobileView GoToOriginal={GoToOriginal} GoToLakeCity={GoToLakeCity} />
      ) : (
        <DesktopView GoToOriginal={GoToOriginal} GoToLakeCity={GoToLakeCity} />
      )}
    </>
  );
}

export default App;

