import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from './navbar.module.css'


import mac1 from '../Imagse/mac1.webp'
import mac2 from '../Imagse/mac2.webp'
import mac3 from '../Imagse/mac3.webp'
import mac4 from '../Imagse/mac4.webp'
import mac5 from '../Imagse/mac5.webp'
import mac6 from '../Imagse/mac6.webp'
import mac7 from '../Imagse/mac7.webp'


let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;

function Owl() {


    return (
        <>
            <div className={styles.owlTxt}>
                <h3>MacBook Air is all you  - </h3>
                <p className={styles.container}>pick your size, pick your color, then go. Whichever model you choose, it’s built with the planet in mind, with a durable 100 percent recycled aluminum enclosure. And a fanless design means it stays silent even under intense workloads.</p>
            </div>
            <OwlCarousel autoplay className='owl-theme' items="5" loop touchDrag dots>
                <div class='item' className={styles.item}>
                    <img src={mac1} className={styles.owlimg}></img>
                </div>
                <div class='item' className={styles.item}>
                    <img src={mac2} className={styles.owlimg}></img>
                </div>
                <div class='item' className={styles.item}>
                    <img src={mac3} className={styles.owlimg}></img>
                </div>
                <div class='item' className={styles.item}>
                    <img src={mac4} className={styles.owlimg}></img>
                </div>
                <div class='item' className={styles.item}>
                    <img src={mac5} className={styles.owlimg}></img>
                </div>
                <div class='item' className={styles.item}>
                    <img src={mac6} className={styles.owlimg}></img>
                </div>
                <div class='item' className={styles.item}>
                    <img src={mac7} className={styles.owlimg}></img>
                </div>
                <div class='item' className={styles.item}>
                    <img src={mac3} className={styles.owlimg}></img>
                </div>
            </OwlCarousel>
        </>
    );
}

export default Owl;


