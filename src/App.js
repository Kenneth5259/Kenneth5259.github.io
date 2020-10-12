import React, {useState, useEffect} from 'react';
import DesktopApp from './components/desktop/Desktop-App';
import MobileApp from './components/mobile/Mobile-App';

function App() {

  const [isDesktop, toggleDesktop] = useState(true);

  const updatePredicate = () => {
    toggleDesktop(window.innerWidth > 1024);
  }

  useEffect(() => {
    updatePredicate()
    window.addEventListener("resize", updatePredicate);
  }, [])
  
  return (
    isDesktop ? <DesktopApp/> : <MobileApp/>
  );
}

export default App;
