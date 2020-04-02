import React from 'react';
import styles from './Navigation.module.css';
import ButtonNav from "../../HelpComponents/ButtonNav/ButtonNav";
import ButtonCloseNav from "../../HelpComponents/ButtonCloseNav/ButtonCloseNav";
import PortfolioLink from "./PortfolioLinks/PortfolioLink";

class Navigation extends React.Component {


    render() {
        // debugger
        return (
            <div className={styles[this.props.class]}>
                <div className={styles.container}>
                    <div onClick={this.props.btnClick2} className={styles.btn}>
                        <div>Anton</div>
                        <ButtonCloseNav/>
                    </div>
                    <div className={styles.linksBox}>
                        <PortfolioLink nameOfLink={this.props.state.messages[this.props.state.currentLocal].businessCard}/>
                        <PortfolioLink nameOfLink={this.props.state.messages[this.props.state.currentLocal].projects}/>
                        <PortfolioLink nameOfLink={this.props.state.messages[this.props.state.currentLocal].whyMe}/>
                        <PortfolioLink nameOfLink={this.props.state.messages[this.props.state.currentLocal].feedBack}/>
                        <PortfolioLink nameOfLink={this.props.state.messages[this.props.state.currentLocal].contactMe}/>
                    </div>
                    <div className={styles.rights}>
                        {this.props.state.messages[this.props.state.currentLocal].rights}
                    </div>

                </div>
                {/*<button onClick={this.props.btnClick2}></button>*/}
            </div>
        );
    }
}

export default Navigation;
