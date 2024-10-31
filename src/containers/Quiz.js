import React, {Component} from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../components/ActiveQuiz/ActiveQuiz";
import FinalScreen from "../hoc/FinalScreen/FinalScreen";

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        correctAnswers: 0,
        isFinished: false,
        quiz: [
            {
                question: '🧊🧊🚢💔',
                rightAnswerId: 4,
                id: 1,
                answers: [
                    {text: 'Холодное сердце', id: 1},
                    {text: 'Глубокое синее море', id: 2},
                    {text: 'Кораблекрушение', id: 3},
                    {text: 'Титаник', id: 4},
                ]
            },
            {
                question: '👨‍🦱🦸‍♂️🔴🟡💰',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    {text: 'Мстители', id: 1},
                    {text: 'Железный человек', id: 2},
                    {text: 'Человек-паук', id: 3},
                    {text: 'Бэтмен', id: 4},
                ]
            },
            {
                question: '🕶️🕶️💊💊💻',
                rightAnswerId: 4,
                id: 3,
                answers: [
                    {text: 'Терминатор', id: 1},
                    {text: 'Начало', id: 2},
                    {text: 'Хакер', id: 3},
                    {text: 'Матрица', id: 4},
                ]
            },
            {
                question: '🦖🦕🏞️⚠️',
                rightAnswerId: 1,
                id: 4,
                answers: [
                    {text: 'Парк Юрского периода', id: 1},
                    {text: 'Годзилла', id: 2},
                    {text: 'Кинг Конг', id: 3},
                    {text: 'Мир животных', id: 4},
                ]
            },
            {
                question: '🐟🐠🚤🏊‍♂️',
                rightAnswerId: 4,
                id: 5,
                answers: [
                    {text: 'В поисках Немо', id: 1},
                    {text: 'Акулы', id: 2},
                    {text: 'В поисках Дори', id: 3},
                    {text: 'Челюсти', id: 4},
                ]
            },
            {
                question: '🧙‍♂️💍🔥🏔️',
                rightAnswerId: 3,
                id: 6,
                answers: [
                    {text: 'Гарри Поттер', id: 1},
                    {text: 'Хоббит', id: 2},
                    {text: 'Властелин колец', id: 3},
                    {text: 'Принц Каспиан', id: 4},
                ]
            },
            {
                question: '🚗🚗💨💥🏎️',
                rightAnswerId: 2,
                id: 7,
                answers: [
                    {text: 'Такси', id: 1},
                    {text: 'Форсаж', id: 2},
                    {text: 'Драйв', id: 3},
                    {text: 'Угнать за 60 секунд', id: 4},
                ]
            },
            {
                question: '🐼🥋🐉',
                rightAnswerId: 4,
                id: 8,
                answers: [
                    {text: 'Панда', id: 1},
                    {text: 'Кунг-фу Бой', id: 2},
                    {text: 'Дракон и Панда', id: 3},
                    {text: 'Кунг-фу Панда', id: 4},
                ]
            },
            {
                question: '👴👦👨‍🚀🌕',
                rightAnswerId: 2,
                id: 9,
                answers: [
                    {text: 'Космос', id: 1},
                    {text: 'Интерстеллар', id: 2},
                    {text: 'Гравитация', id: 3},
                    {text: 'Армагеддон', id: 4},
                ]
            },
            {
                question: '🎩🐰✨',
                rightAnswerId: 4,
                id: 10,
                answers: [
                    {text: 'Гарри Поттер', id: 1},
                    {text: 'Иллюзионист', id: 2},
                    {text: 'Фокусник', id: 3},
                    {text: 'Иллюзия обмана', id: 4},
                ]
            }
        ],
        answerState: null
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
                return
            
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'},
                correctAnswers: this.state.correctAnswers + 1
            })
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }

        const timeout = window.setTimeout(() => {
            if (this.isQuizFinished()) {
                this.setState({isFinished: true})
            } else {
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    answerState: null
                })
            }
            window.clearTimeout(timeout)
        }, 1000)
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        if (this.state.isFinished) {
            return <FinalScreen correctAnswers={this.state.correctAnswers} />
        }
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Что за фильм тут загадан?</h1>
                    <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers} 
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState} />
                </div>
            </div>
        )
    }
}

export default Quiz