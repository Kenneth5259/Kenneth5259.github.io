import React, {useState} from 'react';

import Sidebar from './sidebar/sidebar';
import About from './about/about';
import Portfolio from './portfolio/portfolio';

const DesktopApp = () => {
    const [activeNav, setActiveNav] = useState('portfolio');
    return(
        <div className="container">
            <Sidebar activeNav={activeNav} setActiveNav={setActiveNav}/>
            { activeNav === 'about' ? <About/> : null}
            { activeNav === 'portfolio' ? <Portfolio/> : null}
            { activeNav === 'resume' ? null : null}
            { activeNav === 'services' ? null : null}
		</div>
    )
}
export default DesktopApp;