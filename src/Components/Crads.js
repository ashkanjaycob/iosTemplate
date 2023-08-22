import React, { Component } from "react";
import styles from './navbar.module.css'
import Card from "./Card";
import image1 from '../Imagse/Iphone14.jpg'
import image2 from '../Imagse/Iphone15.jpg'
import image3 from '../Imagse/Iphone11.jpeg'

class Cards extends Component {
    state = {}
    render() {
        return (
            <>
                <br></br>
                <div className={styles.owlTxt}>
                    <h2>Iphone for Live Better -</h2>
                    <p className={styles.container}>pick your size, pick your color, then go. Whichever model you choose, it’s built with the planet in mind, with a durable 100 percent recycled aluminum enclosure. And a fanless design means it stays silent even under intense workloads.</p>
                </div>
                <div className={styles.cardcontainer}>
                    <Card name="Iphone14Pro" text="Released in 2021" image={image1} />
                    <Card name="Iphone 15" text="Released in 2023" image={image2} />
                    <Card name="Iphone 11" text="Released in 2019" image={image3} />
                    <Card name="Iphone 11Pro" text="Released in 2019" image={image3} />
                </div>
            </>
        );
    }
}

export default Cards;