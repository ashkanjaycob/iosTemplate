import React, { Component } from "react";
import styles from './navbar.module.css'
import LocMap from '../Imagse/MapLoc.JPG'
class Footer extends Component {
    state = {}
    render() {
        return (
            <>
                <footer className={styles.footer}>
                    <div className={styles.mainfooter}>
                        <div className={styles.leftfoot}>
                            <ul className={styles.listfoot}>
                                <li className={styles.listfootli}>About us </li>
                                <li className={styles.listfootli}>Read articles </li>
                                <li className={styles.listfootli}>Company support</li>
                                <li className={styles.listfootli}>Human resurces Mangement</li>
                            </ul>
                        </div>
                        <div className={styles.centerfoot}>
                            <ul className={styles.listfoot}>
                                <li className={styles.listfootli}>Terms & Policies</li>
                                <li className={styles.listfootli}>Send Up Hiring Request</li>
                                <li className={styles.listfootli}>OBJECTIONAL Suppliment</li>
                            </ul>
                        </div>
                        <div className={styles.rightfoot}>
                            <h3 className={styles.listfootli}>Live Location :</h3>
                            <img src={LocMap} className={styles.maploc}></img>
                        </div>
                    </div>

                </footer>
            </>
        );
    }
}

export default Footer;