import React, {useState, useEffect} from 'react';
import DesktopApp from './components/Desktop-App';
import MobileApp from './components/Mobile-App';

function App() {

  const [isDesktop, toggleDesktop] = useState(true);

  const updatePredicate = () => {
    toggleDesktop(window.innerWidth > 1285);
  }

  useEffect(() => {
    updatePredicate()
    window.addEventListener("resize", updatePredicate);
  }, [])
  console.log(isDesktop);
  return (
    isDesktop ? <DesktopApp/> : <MobileApp/>
  );
}

export default App;
