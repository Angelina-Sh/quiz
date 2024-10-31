import React, {Component} from "react";
import classes from './StartScreen.module.css'

class StartScreen extends Component {
    handleStartClick = () => {
        setTimeout(() => {
            this.props.onStartQuiz()
        }, 300)
    }
    render() {
        return <div className={classes.StartScreen}>
            <div>
                <h1>Привет!👋</h1>
                <p>✨ Приветствуем тебя в викторине для мастеров эмодзи-пазлов! 🕹️ Смогут ли твои догадки превзойти хитроумные комбинации?</p>
                <button onClick={this.handleStartClick}>Начнем! 🧐</button>
            </div>
        </div>
    }
}

export default StartScreen