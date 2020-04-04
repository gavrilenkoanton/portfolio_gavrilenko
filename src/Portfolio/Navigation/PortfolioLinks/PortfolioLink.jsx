import React from 'react';
import styles from './PortfolioLink.module.css';


class PortfolioLink extends React.Component {


    render() {
        return (
            <div className={styles.wrapper} onClick={this.props.scroll}>
                <div className={styles.separator}>
                    <div className={styles.theme}>
                    </div>
                </div>
                <div className={styles.id}>{this.props.nameOfLink}</div>

            </div>
        );
    }
}

export default PortfolioLink;
