import React from "react";
import LongB from '../Imagse/LongBan.jpg'
import styles from './navbar.module.css'

const  LongBaner = () => {
    return ( 
        <>
            <br></br>
            <div>  
                <img className={styles.lngban} src={LongB}></img>
            </div>
        </>
     );
}
 
export default LongBaner;