import React from 'react';
import styles from './Skill.module.css';


class Skill extends React.Component {

    // constructor(props) {
    //     debugger
    //     super(props);
    // }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.leftPart}>
                    <img src={this.props.picture} alt=""/>
                    <span>{this.props.id}</span>
                </div>
                <div className={styles.rightPart}>
                    <span className={styles.title}>{this.props.title}</span>
                    <span>{this.props.description}</span>
                </div>
            </div>
        );
    }
}

export default Skill;
