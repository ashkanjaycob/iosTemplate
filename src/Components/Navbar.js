import React, { Component } from "react";
import styles from './navbar.module.css'
import vid from '../Imagse/Logo.jpg'


class Navbar extends Component {
    state = {}
    render() {
        return (
            <>
                <header>
                    <div className={styles.header}>
                        <div className={styles.container}>
                            <div className={styles.leftnav}>
                                <ul className={styles.list}>
                                    <li>Home</li>
                                    <li>Shop</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className={styles.rightnav}>
                                <img src={vid}></img>
                            </div>
                        </div>

                    </div>
                </header>
            </>
        );
    }
}

export default Navbar;