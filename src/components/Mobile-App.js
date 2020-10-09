import React from 'react';

const MobileApp = () => {
    return(
        <div style={styles.main}>
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