import React from 'react';
import styles from './Navigation.module.css';
import ButtonNav from "../../HelpComponents/ButtonNav/ButtonNav";
import ButtonCloseNav from "../../HelpComponents/ButtonCloseNav/ButtonCloseNav";
import PortfolioLink from "./PortfolioLinks/PortfolioLink";

class Navigation extends React.Component {

    scrollTo = (i) => {
        let offset = document.getElementById("item-" + i).offsetTop
        // console.log(offset)
        let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
        if (isSafari) {
            if ((offset - document.body.scrollTop) > 0) {
                var call = setInterval(function() {
                    if ((offset - document.body.scrollTop) > 0) {
                        document.body.scrollTop += 10
                    } else {
                        clearInterval(call)
                    }
                }, 1)
            }
            if ((offset - document.body.scrollTop) < 0) {
                var call = setInterval(function() {
                    if ((offset - document.body.scrollTop) < 0) {
                        document.body.scrollTop -= 10
                    } else {
                        clearInterval(call)
                    }
                }, 1)
            }
        } else {
            // console.log(document.documentElement.scrollTop)
            if ((offset - document.documentElement.scrollTop) > 0) {

                var call = setInterval(function() {

                    if ((offset - document.documentElement.scrollTop) > 0) {
                        document.documentElement.scrollTop += 10

                        //document.body.scrollTop += 10
                    } else {
                        clearInterval(call)
                    }
                }, 1)
            }
            if ((offset - document.documentElement.scrollTop) < 0) {
                var call = setInterval(function() {
                    if ((offset - document.documentElement.scrollTop) < 0) {
                        document.documentElement.scrollTop -= 10
                        //document.body.scrollTop += 10
                    } else {
                        clearInterval(call)
                    }
                }, 1)
            }
        }

    };

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
                        <PortfolioLink nameOfLink={this.props.state.messages[this.props.state.currentLocal].businessCard} scroll={()=>this.scrollTo(0)}/>
                        <PortfolioLink nameOfLink={this.props.state.messages[this.props.state.currentLocal].skills} scroll={()=>this.scrollTo(1)}/>
                        <PortfolioLink nameOfLink={this.props.state.messages[this.props.state.currentLocal].projects} scroll={()=>this.scrollTo(2)}/>
                        <PortfolioLink nameOfLink={this.props.state.messages[this.props.state.currentLocal].whyMe}  scroll={()=>this.scrollTo(3)}/>
                        <PortfolioLink nameOfLink={this.props.state.messages[this.props.state.currentLocal].feedBack} scroll={()=>this.scrollTo(4)}/>
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
