import React from 'react';
import styles from './Portfolio.module.css';
import BusinessCard from "./BusinessCard/BusinessCard";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/Slogan";
import FeedBack from "./FeedBack/FeedBack";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";
import WhyMe from "./WhyMe/WhyMe";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";


class Portfolio extends React.Component {


    render() {
        return (
            <div>
                <div className={styles.dots}>

                </div>
            <div className={styles.mainWrapper}>
                <div className={styles.portfolioWrapper}>
                    {/*<Navigation/>*/}
                    <Header state={this.props.state}/>
                    <BusinessCard state={this.props.state}/>
                    <Skills state={this.props.state}/>
                    <Projects state={this.props.state}/>
                    {/*<Slogan/>*/}
                    <WhyMe state={this.props.state}/>
                    <FeedBack state={this.props.state}/>
                    <Footer state={this.props.state}/>
                </div>
            </div>
            </div>
        );
    }
}

export default Portfolio;
