import React, {useState} from 'react';

import Sidebar from './sidebar/sidebar';
import About from './about/about';
import Portfolio from './portfolio/portfolio';
import Resume from './resume/resume';
import Testimonial from './testimonial/testimonial';

const DesktopApp = () => {
    const [activeNav, setActiveNav] = useState('about');
    return(
        <div className="container">
            <Sidebar activeNav={activeNav} setActiveNav={setActiveNav}/>
            { activeNav === 'about' ? <About setActiveNav={setActiveNav}/> : null}
            { activeNav === 'portfolio' ? <Portfolio/> : null}
            { activeNav === 'resume' ? <Resume /> : null}
            { activeNav === 'testimonials' ? <Testimonial /> : null}
		</div>
    )
}
export default DesktopApp;