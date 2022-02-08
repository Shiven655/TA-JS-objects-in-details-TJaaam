// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)

//prototypal function
let quizMethods = {
    isAnswerCorrect: function (index) {
      return index == this.isAnswerCorrect[index];
    },
    getCorrectAnswer: function () {
      return index == this.isAnswerCorrect[index];
    },
  };
  function Question(title, options, correctAnswerIndex) {
    let quiz = Object.create(quizMethods);
    quiz.title = title;
    quiz.options = options;
    quiz.correctAnswerIndex = correctAnswerIndex;
    return quiz;
  }
  // - Methods:
  //   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  //   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)
  
  //Pseudoclassical Pattern
  
  function Question(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = index;
  }
  Question.prototype = {
    isAnswerCorrect: function () {
      return index == this.isAnswerCorrect[index];
    },
    getCorrectAnswer: function () {
      return index == this.isAnswerCorrect[index];
    },
  };
  
  //class
  class Question {
    constructor(title, options, correctAnswerIndex) {
      this.title = title;
      this.options = options;
      this.correctAnswerIndex = index;
    }
  
    isAnswerCorrect(index) {
      return index == this.isAnswerCorrect[index];
    }
    getCorrectAnswer() {
      return index == this.isAnswerCorrect[index];
    }
  }