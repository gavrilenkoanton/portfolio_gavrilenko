import React from 'react';
import styles from './App.module.css';
import messages_ru from './translation/ru'
import messages_en from './translation/en'
import ContentPhoto from "./ContentPhoto/ContentPhoto";
import Portfolio from "./Portfolio/Portfolio";


class App extends React.Component {

    state = {
        currentLocal: 'en',
        messages: {
            'ru': messages_ru,
            'en': messages_en
        }
    };

    changeLocal = (e) => {
        if (e === 'en') {
            this.setState({currentLocal: 'en'}
            )
        } else {
            this.setState({currentLocal: 'ru'})
        }
    };

    render() {
        return (
            <div className={styles.mainWrapper}>

                {/*<span>{this.state.messages[this.state.currentLocal].testMessage}</span>*/}
                <div className={styles.contentPhoto}>
                    {/*<button onClick={(e)=> {this.changeLocal('en')}}>en</button>*/}
                    {/*<button onClick={(e)=> {this.changeLocal('ru')}}>ru</button>*/}
                    <ContentPhoto changeLocal={this.changeLocal} state={this.state}/>
                </div>
                <div className={styles.portfolio}>
                    <Portfolio state={this.state}/>
                </div>
            </div>
        );
    }
}

export default App;
