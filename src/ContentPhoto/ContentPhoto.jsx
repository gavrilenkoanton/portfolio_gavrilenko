import React from 'react';
import styles from './ContentPhoto.module.css';


class ContentPhoto extends React.Component {


    render() {
        return (
            <div className={styles.photo}>
                <div className={styles.photo2}></div>
                <div className={styles.photo3}>
                    <div className={styles.button}>
                        <button onClick={(e) => {
                            this.props.changeLocal('en')
                        }}>en
                        </button>
                        <button onClick={(e) => {
                            this.props.changeLocal('ru')
                        }}>ru
                        </button>
                    </div>
                    <div className={styles.socialLinksBlock}>
                        <a href="https://www.instagram.com/gavrilenkoanton/" target="_blank"><img src={require('./../images/instagram.svg')}/></a>
                        <a href="https://www.linkedin.com/in/gavrilenkoanton" target="_blank"><img src={require('./../images/linkedin.svg')}/></a>
                        <a href="tg://resolve?domain=gavrilenko_anton" target="_blank"><img src={require('./../images/telegram.svg')}/></a>
                        <a href="https://github.com/gavrilenkoanton" target="_blank"><img src={require('./../images/github.svg')}/></a>
                    </div>
                    <div
                        className={styles.myName}>{this.props.state.messages[this.props.state.currentLocal].secondName}</div>

                </div>
            </div>
        );
    }
}

export default ContentPhoto;
