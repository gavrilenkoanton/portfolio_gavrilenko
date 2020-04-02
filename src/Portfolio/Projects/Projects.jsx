import React from 'react';
import styles from './Projects.module.css';
import Separator from "../../HelpComponents/Separator/Separator";


class Projects extends React.Component {


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.separator}>
                        <Separator componentName={this.props.state.messages[this.props.state.currentLocal].projects}/>
                    </div>
                    <div className={styles.header}>
                        <h1>{this.props.state.messages[this.props.state.currentLocal].projects}</h1>
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae quam ullam.
                        Consequuntur
                        dicta, enim harum labore minus mollitia nesciunt! Aliquid amet asperiores doloremque incidunt
                        inventore, laudantium quas quasi vitae!
                    </div>
                    <div className={styles.projectsGrid}>
                        <div className={styles.projectOne}>
                            Проект1
                        </div>
                        <div className={styles.projectTwo}>
                            Проект2
                        </div>
                        <div className={styles.projectThree}>
                            Проект3
                        </div>
                        <div className={styles.projectFour}>
                            Проект4
                        </div>
                        <div className={styles.projectFive}>
                            Проект5
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
