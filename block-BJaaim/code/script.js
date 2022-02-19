// DATA:

// - Title of the question
// - Options of the question
// - Correct answer

// METHODS:

// - isCorrect(answer)

// Check if the given answer is correct or not. It will accept one answer and return `true` is the answer is correct otherwise false.

// - getCorrectAnswer()
//   This method will return the correct answer of the question.

// - createUI (this will create the layout of a single question)

// This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.

class question {
    constructor(title, option, correctAns) {
      this.title = title;
      this.option = option;
      this.correctAns = correctAns;
    }
    isCorrect(answer) {
      return this.correctAns == answer;
    }
    getCorrectAnswer() {
      return this.correctAns;
    }
  }