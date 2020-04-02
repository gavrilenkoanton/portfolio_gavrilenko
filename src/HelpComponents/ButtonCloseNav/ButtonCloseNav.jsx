import React from 'react';
import styles from './ButtonCloseNav.module.css';


class ButtonCloseNav extends React.Component {


    render() {
        return (
            <div>
                <button className={styles.button}>
                    <span className={styles.close}></span>
                </button>
            </div>
        );
    }
}

export default ButtonCloseNav;
