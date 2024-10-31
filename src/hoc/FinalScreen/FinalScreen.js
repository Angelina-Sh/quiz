import React, {Component} from "react";
import classes from './FinalScreen.module.css'

class FinalScreen extends Component {
    render() {
        return <div className={classes.FinalScreen}>
            <div>
                <h1>Спасибо, что прошли мою викторину!!!</h1>
                <p>Вы правильно ответили на {this.props.correctAnswers} {this.props.correctAnswers === 1 ? 'вопрос' : this.props.correctAnswers < 5 ? 'вопроса' : 'вопросов'} из 10</p>
                <button onClick={() => window.location.reload()}>Может еще раз?👉👈</button>
            </div>
        </div>
    }
}

export default FinalScreen