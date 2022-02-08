
  
// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// - Without Object
// - Organize using object
// - Use a function to create object
// - Convert the function to use `this` keyword
// - Write test by creating two objects also test both methods.

let title = "Where is the capital of Jordan";
let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
let correctAnswerIndex = 1;

function isAnswerCorrect(index) {
  return index == correctAnswerIndex;
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

let question = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
  isAnswerCorrect(index) {
    return index == correctAnswerIndex;
  },
  getCorrectAnswer() {
    return options[correctAnswerIndex];
  },
};

function createQuestion(title, options, correctAnserIndex) {
  let questions = {};
  questions.title = title;
  questions.options = options;
  questions.correctAnswerIndex = correctAnserIndex;
  questions.isAnswerCorrect = function (index) {
    return index == this.correctAnswerIndex;
  };
  questions.getCorrectAnswer = () => {
    return this.options[this.correctAnswerIndex];
  };
  return questions;
}