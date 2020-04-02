import React from 'react';
import styles from './WhyMeSkill.module.css';


class WhyMeSkill extends React.Component {


    render() {
        return (
            <div className={styles.skills}>
                <div className={styles.skillWrapper}>
                    <div className={styles.skill}>{this.props.skill}</div>
                </div>
                <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                    {this.props.description}
                </div>
                </div>
            </div>
        );
    }
}

export default WhyMeSkill;
