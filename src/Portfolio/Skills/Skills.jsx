import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";
import Separator from "../../HelpComponents/Separator/Separator";
import html from './../../images/html-5.svg'
import css from './../../images/css.svg'
import react from './../../images/react.svg'
import tScript from './../../images/typescript.svg'
import js from './../../images/javascript.svg'
import redux from './../../images/redux.svg'


class Skills extends React.Component {


    render() {
        return (
            <div className={styles.container} id='item-1'>
                <div className={styles.wrapper}>
                    <div className={styles.separator}>
                        <Separator componentName={this.props.state.messages[this.props.state.currentLocal].skills}/>
                    </div>
                    <div className={styles.header}>
                        <h1>{this.props.state.messages[this.props.state.currentLocal].skills}</h1>
                    </div>
                    <div className={styles.text}>
                        {this.props.state.messages[this.props.state.currentLocal].skillsDescription}
                    </div>
                    <div className={styles.skillsNav}>
                        <Skill picture={html} id={"01"} title={"HTML"}/>
                        <Skill picture={css} id={"02"} title={"CSS"}/>
                        <Skill picture={tScript} id={"03"} title={"TypeScript"}/>
                        <Skill picture={js} id={"04"} title={"JavaScript"}/>
                        <Skill picture={react} id={"05"} title={"React"}/>
                        <Skill picture={redux} id={"06"} title={"Redux"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
