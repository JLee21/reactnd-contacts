import React, { Component } from "react";

class Game extends Component {

	constructor(props){
		// We need to give this component access to the passed in props.
		super(props);

		const valuesArray = this.makeNewQuestion();
		this.state = {
			value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
      answerWasCorrect: false,
		}
	}

	makeNewQuestion = () => {
		// Just create random numbers and return them.
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
		const answerWasCorrect = false;
		return [value1, value2, value3, proposedAnswer, answerWasCorrect];
	}

	updateState = newValuesArray => {
		this.setState(currState => ({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3],
    }));
	}

	handleAnswer = event => {
		const newValuesArray = this.makeNewQuestion();
		this.updateState(newValuesArray);
		// This is immediately called when a user clicks a button.
		// Grap the name of the button and evaluate the user's answer.
		const answerWasCorrect = this.evaluateAnswer(event.target.name);
		this.props.handleAnswer(answerWasCorrect);
	}

	evaluateAnswer(givenAnswer) {
		// Take the event of handleAnswer and return bool based on the answer.
		const {value1, value2, value3, proposedAnswer} = this.state;
		const corrAnswer = value1 + value2 + value3;

		return (
			(corrAnswer === proposedAnswer && givenAnswer === 'true') ||
			(corrAnswer !== proposedAnswer && givenAnswer === 'false')
		);
	}

	/*
  The render method gets called automatically every time the state inside
  of the component changes and anytime the component's props change
  (more accurately, anytime React perceives that those props have changed,
  regardless of whether they are actually different (e.g. binding `this` inside
  of the render method causes React to think that the props are different).
  */
	render() {
		const {value1, value2, value3, proposedAnswer} = this.state;
		return (
			<div>
			  <div className="equation">
				  <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
				</div>
				<button name="true" onClick={this.handleAnswer}>
          True
        </button>
        <button name="false" onClick={this.handleAnswer}>
          False
        </button>
			</div>
		);
	}
}

export default Game
