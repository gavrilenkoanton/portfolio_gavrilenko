import React from 'react';
import styles from './Projects.module.css';
import Separator from "../../HelpComponents/Separator/Separator";


class Projects extends React.Component {


    render() {
        return (
            <div className={styles.container} id='item-2'>
                <div className={styles.wrapper}>
                    <div className={styles.separator}>
                        <Separator componentName={this.props.state.messages[this.props.state.currentLocal].projects}/>
                    </div>
                    <div className={styles.header}>
                        <h1>{this.props.state.messages[this.props.state.currentLocal].projects}</h1>
                    </div>
                    <div className={styles.text}>
                        {this.props.state.messages[this.props.state.currentLocal].projectsDescription}
                    </div>
                    <div className={styles.projectsGrid}>
                        <div className={styles.projectOne}>
                            <a href="https://gavrilenkoanton.github.io/wild_gunman/" target="_blank">
                                <div className={styles.wildGunman}/>
                            </a>
                        </div>
                        <div className={styles.projectTwo}>
                            <a href="https://gavrilenkoanton.github.io/social_network/" target="_blank">
                                <div className={styles.social}/>
                            </a>
                        </div>
                        <div className={styles.projectThree}>
                            <a href="https://gavrilenkoanton.github.io/start_google_page/" target="_blank">
                                <div className={styles.google}/>
                            </a>
                        </div>
                        <div className={styles.projectFour}>
                            <a href="https://gavrilenkoanton.github.io/calculator/" target="_blank">
                                <div className={styles.calculator}/>
                            </a>
                        </div>
                        {/*<div className={styles.projectFive}>*/}
                        {/*    Проект5*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
