import React from 'react';
import styles from './ButtonNav.module.css';


class ButtonNav extends React.Component {


    render() {
        return (
            <div>
                <button className={styles.button}>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                </button>
            </div>
        );
    }
}

export default ButtonNav;
