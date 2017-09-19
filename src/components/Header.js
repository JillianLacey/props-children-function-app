import React, { Component } from 'react'

const styles = {
    headerStyles: {
        background: "darkgrey",
        position: "fixed",
        top: "0",
        width: "100%",
        padding: "20px"

    }
};



export default class Header extends Component {
    render() {
        return (
            <div style={styles.headerStyles} >
                <nav>I am the Navigation Bar</nav>
            </div>
        );
    }
}