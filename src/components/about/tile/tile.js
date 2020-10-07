import React from 'react';

import './assets/tile.css';

const Tile = (props) => {
    return(
        <div className="about__lower__tile">
            <div className="about__lower__tile__icons">{props.icons}</div>
            <p className="about__lower__tile__title">{props.title}</p>
            <p className="about__lower__tile__desc">{props.description}</p>
        </div>
    )
}

export default Tile;