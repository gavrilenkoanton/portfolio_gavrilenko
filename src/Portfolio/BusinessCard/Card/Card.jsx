import React from 'react';
import styles from './Card.module.css';


class Card extends React.Component {


    render() {
        return (
            <div className={styles.cardWrapper}>
                <div className={styles.cardRow}>
                    <div className={styles.cardPoint}>
                        <span>{this.props.state.messages[this.props.state.currentLocal].name}</span>
                        <p>{this.props.state.messages[this.props.state.currentLocal].gavrilenko}</p>
                    </div>
                    <div className={styles.cardPoint}>
                        <span>{this.props.state.messages[this.props.state.currentLocal].mail}</span>
                        <a target="_blank" href="mailto:gavrilenko7732@gmail.com" className={styles.mail}>gavrilenko7732@gmail.com</a>
                    </div>
                    <div className={styles.cardPoint}>
                        <span>{this.props.state.messages[this.props.state.currentLocal].age}</span>
                        <span>28</span>
                    </div>
                </div>
                <div className={styles.cardRow}>
                    <div className={styles.cardPoint}>
                        <span>{this.props.state.messages[this.props.state.currentLocal].phone}</span>
                        <a href="tel:+375293916645" className={styles.mail}>+375293916645</a>
                    </div>
                    <div className={styles.cardPoint}>
                        <span>{this.props.state.messages[this.props.state.currentLocal].job}</span>
                        <p>Front-end developer</p>
                    </div>
                    <div className={styles.cardPoint}>
                        <span>{this.props.state.messages[this.props.state.currentLocal].from}</span>
                        <p>{this.props.state.messages[this.props.state.currentLocal].from1}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Card;
