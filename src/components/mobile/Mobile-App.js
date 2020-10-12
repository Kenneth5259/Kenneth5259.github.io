import React, {useState} from 'react';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import About from './about/about';

const MobileApp = () => {

    const [activeNav, setActiveNav] = useState('about');
    return(
        <div>
            <NavBar setActiveNav={setActiveNav}/>
            <div style={styles.main}>
                {activeNav === 'about' ?  <About />: null }
                {activeNav === 'portfolio' ? <h1>Portfolio</h1> : null }
                {activeNav === 'testimonials' ? <h1>Testimonials</h1> : null }
                {activeNav === 'resume' ? <h1>Resume</h1> : null }
            </div>
            <Footer style={{alignSelf: 'flex-end'}}/>
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