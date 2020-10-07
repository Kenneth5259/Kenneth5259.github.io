import React from 'react';

import Tile from './tile';

import angularImage from './assets/angularjs.svg';
import cppImage from './assets/c++.svg';
import cImage from './assets/c.svg';
import javascriptImage from './assets/javascript.svg';
import linuxImage from './assets/linux.png';
import macOsImage from './assets/mac-os.svg';
import nodeImage from './assets/nodejs.svg';
import pythonImage from './assets/python.svg';
import reactNativeImage from './assets/react-native.svg';
import win10 from './assets/windows-10.svg';

const tileInfo =[
    {
        icons: [javascriptImage],
        title: "Vanilla JavaScript",
        description: "With a strong understanding of vanilla javascript, I can add a large array of advance functionality to your website."
    },
    {
        icons: [angularImage, reactNativeImage],
        title: "Angular & React",
        description: "Having built applications in both, I can work in SPA's using either or make recommendations for which best fits new projects." 
    },
    {
        icons: [nodeImage],
        title: " Node.js",
        description: "Through building scalable microservices and lean middleware I can engineer the solution right for your project."
    },
    {
        icons: [pythonImage],
        title: "Python & Keras",
        description: "With an undergrad thesis in Neural Networks and pursuing a Master's focused in Machine Learning, I can turn you data it a powerful tool "
    },
    {
        icons: [cImage, cppImage],
        title: "C & C++",
        description: "Experienced testing and developing realt time control systems and software for multiple Aerospace and Defence projects, including GE and NASA "
    },
    {
        icons: [linuxImage, macOsImage, win10],
        title: "Operating Systems",
        description: "Years of work in all three major ecosystems, including compiling custom linux images, virtualization and cross platform development"
    }

];

const TileContainer = () => {
    return(
        <div className="about__lower">
            {
                tileInfo.map((tile) => {

                    return <Tile 
                                title={tile.title} 
                                description={tile.description}
                                key={Math.random()}
                                icons={tile.icons.map(icon => {
                                    return <img src={icon} key={Math.random()}/>
                                })}
                            />
                })
            }
        </div>
    );
}

export default TileContainer;