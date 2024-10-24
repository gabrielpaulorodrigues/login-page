import React, { useState, useEffect } from 'react';
import styles from './RandomImage.module.css';

import imagem1 from './images/image1.png';
import imagem2 from './images/image2.png';
import imagem3 from './images/image3.png';
import imagem4 from './images/image4.png';

const RandomImage = () => {
   
    const [randomImage, setRandomImage] = useState('');

    const images = [imagem1, imagem2, imagem3, imagem4];

    useEffect(() => {
        const getRandomImage = () => {
            const randomIndex = Math.floor(Math.random() * images.length);
            return images[randomIndex];
        };

        setRandomImage(getRandomImage());
    }, []); 

    return (
        <div className={styles.imagemContainer}>
            <img src={randomImage} alt="Imagem Aleatória" />
        </div>
    );
};

export default RandomImage;