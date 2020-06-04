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
                        <a href="https://jobs.tut.by/resume/dad5876eff07f874c90039ed1f6c464661466d" className={styles.download}>
                            <Button text={this.props.state.messages[this.props.state.currentLocal].cv}/>
                        </a>
                    </div>
                </div>
            </div>
    );
    }
    }

    export default BusinessCard;
