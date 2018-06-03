import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './Score'
import Game from './Game'

const numQuestions = 0;
const numCorrect = 0;

class App extends Component {

  // Use ES6 object literal shorthand.
	state = {numQuestions, numCorrect};

	handleAnswer = answerWasCorrect => {
    if (answerWasCorrect) {
      this.setState(currState => ({
        correctAnswer: currState.correctAnswer + 1,
      }));
    }
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
					<Game handleAnswer={this.handleAnswer} />
					<Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
