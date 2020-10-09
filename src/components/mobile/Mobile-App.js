import React, {useState} from 'react';
import NavBar from './navbar/navbar';

const MobileApp = () => {

    const [activeNav, setActiveNav] = useState('about');
    return(
        <div>
            <NavBar setActiveNav={setActiveNav}/>
            <div style={styles.main}>
                {activeNav === 'about' ? <h1>About</h1> : null }
                {activeNav === 'portfolio' ? <h1>Portfolio</h1> : null }
                {activeNav === 'testimonials' ? <h1>Testimonials</h1> : null }
                {activeNav === 'resume' ? <h1>Resume</h1> : null }
            </div>
            <h3>Mobile Support Coming Soon. Please try a desktop or wider resolution device</h3>
        </div>
        
    )
}
const styles = {
    main: {
        display: 'flex',
        justifyContent: 'center', 
        alignSelf: 'center',
        margin: '0 2rem',
        marginTop: '50%'
    }
}
export default MobileApp;