import React, { Component } from "react";
import styles from './navbar.module.css'

class Card extends Component {
    state = {}
    render() {
        return (
            <>
                <div className={styles.card}>
                    <img src={this.props.image}></img>
                    <h1>
                        {this.props.name}
                    </h1>
                    <span>{this.props.text}</span>
                </div>

            </>
        );
    }
}

export default Card;