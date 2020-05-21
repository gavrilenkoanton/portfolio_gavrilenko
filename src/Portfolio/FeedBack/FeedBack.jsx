import React from 'react';
import styles from './FeedBack.module.css';
import Separator from "../../HelpComponents/Separator/Separator";
import Button from "../../HelpComponents/Button/Button";
import axios from 'axios'


class FeedBack extends React.Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        sent: false
    };

    currentName = (e) => {
        this.setState({name: e.currentTarget.value})
    };
    currentEmail = (e) => {
        this.setState({email: e.currentTarget.value})
    };
    currentSubject = (e) => {
        this.setState({subject: e.currentTarget.value})
    };
    currentMessage = (e) => {
        this.setState({message: e.currentTarget.value})
    };


    // async onSubmit() {
    //     try {
    //         let response = await this.sendMail()
    //     } catch (error) {
    //         console.log('Login error:', error)
    //     }
    // }
    //
    // onError(error) {
    //     console.log('Error happened:', error)
    // }
    //
    // async sendMail() {
    //     let html = ''
    //     // html += "<p><strong>Имя: </strong>" + this.state.name + "</p>"
    //     // html += "<p><strong>Email: </strong>" + this.state.email + "</p>"
    //     // html += "<p><strong>Тема: </strong>" + this.state.subject + "</p>"
    //     // html += "<p><strong>Сообщение: </strong>" + this.state.message + "</p>"
    //     html += "<p><strong>Отправлено: </strong>" + new Date().toLocaleString() + "</p>"
    //     // html += "<p><strong>Страница: </strong>" + window.location + "</p>"
    //
    //     // await axios.get('http://localhost:3000/sendmail');
    //     let response = await axios.post('http://localhost:3000/sendmail/index', {
    //         html: html
    //     })
    //         .catch()
    //         .then((res) => {
    //             // this.form.sended = 'Ваша заявка успешно отправлена! '
    //             // this.form.name = ''
    //             // this.form.secondname = ''
    //             // this.form.email = ''
    //             // this.form.tel = ''
    //             // this.form.mes = ''
    //             // this.form.agree = false
    //             // this.isChecked = false
    //             console.log("test")
    //         })
    // }

    formSubmit = (e) => {
        e.preventDefault()
        console.log("pushed")

        // this.setState({
        //     buttonText: '...sending'
        // })

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            subject: this.state.subject
        }

        axios.post('http://localhost:3010/mail', {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            subject: this.state.subject
        })
            .then( res => {
                this.setState({ sent: true })
            })
            .catch( () => {
                console.log('Message not sent')
            })
    }

    render() {
        return (
            <div className={styles.container} id='item-4'>
                <div className={styles.wrapper}>
                    <div className={styles.separator}>
                        <Separator componentName={this.props.state.messages[this.props.state.currentLocal].feedBack}/>
                    </div>
                    <div className={styles.header}>
                        <h1>{this.props.state.messages[this.props.state.currentLocal].feedBack}</h1>
                    </div>
                    <div className={styles.text}>
                        {this.props.state.messages[this.props.state.currentLocal].feedBackDescription}
                    </div>
                    <form className={styles.formSize} onSubmit={ (e) => this.formSubmit(e)}>
                        <div className={styles.sendData}>
                            <input type="texttexttext"
                                   placeholder={this.props.state.messages[this.props.state.currentLocal].name}
                                   onChange={this.currentName}
                            />
                            <input type="texttexttext"
                                   placeholder={this.props.state.messages[this.props.state.currentLocal].mail}
                                   onChange={this.currentEmail}
                            />
                        </div>
                        <div className={styles.messages}>
                            <textarea name="" id="" cols="10" rows="2"
                                      placeholder={this.props.state.messages[this.props.state.currentLocal].subject}
                            onChange={this.currentSubject}/>
                            <textarea name="" id="" cols="10" rows="7"
                                      placeholder={this.props.state.messages[this.props.state.currentLocal].message}
                                      onChange={this.currentMessage}
                                     />
                        </div>
                        <div className={styles.button} onClick={(e) => this.formSubmit(e)}>
                            <Button type='submit' text={this.props.state.messages[this.props.state.currentLocal].contactMe}/>
                        </div>
                    </form>
                    {/*<div className={styles.button} onClick={this.sendMail}>*/}
                    {/*    <Button text={this.props.state.messages[this.props.state.currentLocal].contactMe}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default FeedBack;
