import React, { Component } from 'react';
import styles from './navbar.module.css'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            kala: ""
        }
    }
    changeHandler =  e => {
        this.setState({
            kala: e.target.value
        })
    }

    render() {
        return (
            <div className={styles.searchArea}>
                <h2>What Are You Looking For ? </h2>
                <h3>Im looking for a <b className={styles.kala}> {this.state.kala} </b></h3>
                <input placeholder='Type Here ...' type="text" value={this.state.kala} onChange={this.changeHandler} />
            </div>
        );
    }
}

export default Search;