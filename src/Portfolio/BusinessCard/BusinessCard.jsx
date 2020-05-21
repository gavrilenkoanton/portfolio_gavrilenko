import React from 'react';
import styles from './BusinessCard.module.css';
import Card from "./Card/Card";
import Separator from "../../HelpComponents/Separator/Separator";
import Button from "../../HelpComponents/Button/Button";


class BusinessCard extends React.Component {


    render() {
        return (
            <div className={styles.container} id='item-0'>
                <div className={styles.businessCardWrapper}>
                    <div className={styles.separator}>
                        <Separator
                            componentName={this.props.state.messages[this.props.state.currentLocal].businessCard}/>
                    </div>
                    <h2 className={styles.myName}>{this.props.state.messages[this.props.state.currentLocal].myname}</h2>
                    <div className={styles.text}>
                        {this.props.state.messages[this.props.state.currentLocal].aboutMe}
                    </div>
                    <div>
                        <Card state={this.props.state}/>
                    </div>
                    <div className={styles.button}>
                        <a href="https://jobs.tut.by/resume_converter/%D0%93%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%90%D0%BD%D1%82%D0%BE%D0%BD%20%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=6a4dcb96ff07f7c0ad0039ed1f305043504150&type=pdf&hhtmSource=resume_view&hhtmFrom=" className={styles.download}>
                            <Button text={this.props.state.messages[this.props.state.currentLocal].cv}/>
                        </a>
                    </div>
                </div>
            </div>
    );
    }
    }

    export default BusinessCard;
