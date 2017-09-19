import React, { Component } from 'react'

const styles = {
    footerStyles: {
        background: "darkgrey",
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "150px",
    }

};


export default class Footer extends Component {
    render() {
        return (
            <div style={styles.footerStyles}>
                <footer>I am the Footer</footer>
            </div>
        );
    }
}
