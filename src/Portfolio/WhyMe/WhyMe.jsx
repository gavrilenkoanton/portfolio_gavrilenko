import React from 'react';
import styles from './WhyMe.module.css';
import Separator from "../../HelpComponents/Separator/Separator";
import WhyMeSkill from "./WhyMeSkills/WhyMeSkill";


class WhyMe extends React.Component {


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.separator}>
                        <Separator componentName={this.props.state.messages[this.props.state.currentLocal].whyMe}/>
                    </div>
                    <div className={styles.header}>
                        <h1>{this.props.state.messages[this.props.state.currentLocal].whyMe}</h1>

                    </div>
                    <WhyMeSkill skill={this.props.state.messages[this.props.state.currentLocal].school} description={this.props.state.messages[this.props.state.currentLocal].schoolDescription} />
                    <WhyMeSkill skill={this.props.state.messages[this.props.state.currentLocal].university} description={this.props.state.messages[this.props.state.currentLocal].universityDescription} />
                    <WhyMeSkill skill={this.props.state.messages[this.props.state.currentLocal].engineer} description={this.props.state.messages[this.props.state.currentLocal].engineerDescription} />
                    <WhyMeSkill skill={this.props.state.messages[this.props.state.currentLocal].quest} description={this.props.state.messages[this.props.state.currentLocal].questDescription} />
                    <WhyMeSkill skill={this.props.state.messages[this.props.state.currentLocal].businessman} description={this.props.state.messages[this.props.state.currentLocal].businessmanDescription} />
                    <WhyMeSkill skill={this.props.state.messages[this.props.state.currentLocal].developer} description={this.props.state.messages[this.props.state.currentLocal].developerDescription} />

                </div>
            </div>
        );
    }
}

export default WhyMe;
