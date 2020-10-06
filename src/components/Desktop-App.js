import React from 'react';

import Sidebar from './sidebar/sidebar';
import About from './about/about';

const DesktopApp = () => {
    return(
        <div className="container">
            <Sidebar/>
            <About/>
		</div>
    )
}
export default DesktopApp;