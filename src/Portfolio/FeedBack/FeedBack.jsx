import React from 'react';
import styles from './FeedBack.module.css';
import Separator from "../../HelpComponents/Separator/Separator";
import Button from "../../HelpComponents/Button/Button";


class FeedBack extends React.Component {


    render() {
        return (
            <div className={styles.container} id='item-4'>
                <div className={styles.wrapper}>
                    <div className={styles.separator}>
                        <Separator componentName={this.props.state.messages[this.props.state.currentLocal].feedBack}/>
                    </div>
                    <div className={styles.header}>
                        <h1>{this.props.state.messages[this.props.state.currentLocal].feedBack}</h1>
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores deserunt dicta,
                        dignissimos, eos excepturi harum hic natus nostrum perferendis perspiciatis quae quas quibusdam
                        repellendus sequi sunt ut voluptatum.
                    </div>
                    <form action="" className={styles.formSize}>
                        <div className={styles.sendData}>
                            <input type="texttexttext" placeholder={this.props.state.messages[this.props.state.currentLocal].name}/>
                            <input type="texttexttext" placeholder={this.props.state.messages[this.props.state.currentLocal].mail}/>
                        </div>
                        <div className={styles.messages}>
                            <textarea name="" id="" cols="10" rows="2" placeholder={this.props.state.messages[this.props.state.currentLocal].subject}></textarea>
                            <textarea name="" id="" cols="10" rows="7" placeholder={this.props.state.messages[this.props.state.currentLocal].message}></textarea>
                        </div>
                    </form>
                    <div className={styles.button}>
                        <Button text={this.props.state.messages[this.props.state.currentLocal].contactMe}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedBack;
