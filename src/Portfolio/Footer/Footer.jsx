import React from 'react';
import styles from './Footer.module.css';


class Footer extends React.Component {


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <p className={styles.rights}>{this.props.state.messages[this.props.state.currentLocal].rights}</p>
                </div>
            </div>
        );
    }
}

export default Footer;
