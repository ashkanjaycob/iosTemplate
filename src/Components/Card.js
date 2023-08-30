import React, { Component } from "react";
import styles from './navbar.module.css'

class Card extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    upHandler = () => {
        this.setState(pervState => ({
            count: pervState.count + 1,
        }))
    }

    downHandler = () => {
        if (this.state.count >= 1) {
            this.setState(pervState => ({
                count: pervState.count - 1,
            }))
        }
    }

    render() {
        return (
            <>
                <div className={styles.card}>
                    <img src={this.props.image}></img>
                    <h1>
                        {this.props.name}
                    </h1>
                    <span>{this.props.text}</span>
                    <div className={styles.counter}>
                        <span className={styles.updown} onClick={this.downHandler}>-</span>
                        <h5 >{this.state.count}</h5>
                        <span className={styles.updown} onClick={this.upHandler}>+</span>
                    </div>
                </div>

            </>
        );
    }
}

export default Card;