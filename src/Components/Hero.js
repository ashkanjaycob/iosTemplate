import React, { Component } from "react";
import styles from './navbar.module.css'

class Hero extends Component {
    state = {}
    render() {
        return (
            <>  
            <div className={styles.herobg}>
                <div className={styles.herotext}>
                    <h1>
                        Just React
                    </h1>
                </div>
            </div>
            </>
        );
    }
}

export default Hero;