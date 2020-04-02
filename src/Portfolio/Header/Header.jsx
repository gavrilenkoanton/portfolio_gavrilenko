import React from 'react';
import styles from './Header.module.css';
import Navigation from "../Navigation/Navigation";
import ButtonNav from "../../HelpComponents/ButtonNav/ButtonNav";


class Header extends React.Component {

    butClick = () => {
        this.setState({class: "navWrapper2"})
    };
    butClick2 = () => {
        this.setState({class: "navWrapper"})
    };

    state = {
        class: "navWrapper"
    };

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.button} onClick={this.butClick}>
                        <ButtonNav onClick={this.butClick}/>
                    </div>
                    {/*<button className={styles.button} onClick={this.butClick}>*/}
                    {/*    <span className={styles.circle}></span>*/}
                    {/*    <span className={styles.circle}></span>*/}
                    {/*    <span className={styles.circle}></span>*/}
                    {/*</button>*/}
                    <Navigation class={this.state.class} btnClick2={this.butClick2} state={this.props.state}/>
                </div>
            </div>
        );
    }
}

export default Header;
