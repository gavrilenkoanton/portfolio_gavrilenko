import React from 'react';
import styles from './Button.module.css';


class Button extends React.Component {


    render() {
        return (
            <div className={`${styles.btn} ${styles.btnPrimary}`}>
                {this.props.text}
            </div>
        );
    }
}

export default Button;
