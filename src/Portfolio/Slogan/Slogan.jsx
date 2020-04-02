import React from 'react';
import styles from './Slogan.module.css';
import Separator from "../../HelpComponents/Separator/Separator";


class Slogan extends React.Component {


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.separator}>
                        <Separator/>
                    </div>
                    <div className={styles.header}>
                        <h1>Чему быть, того не мариновать</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slogan;
