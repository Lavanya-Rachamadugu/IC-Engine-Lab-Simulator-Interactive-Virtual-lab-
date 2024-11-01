
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "What type of combustion process occurs in a diesel engine?",
      answers: {
        a: "Homogeneous combustion",
        b: "Spark ignition combustion",
        c: "Premixed combustion",
        d: "Compression ignition combustion"
      },
      correctAnswer: "d"
    },
    {
      question: "In a single-cylinder four-stroke diesel engine, which stroke is responsible for intake of air into the cylinder?",
      answers: {
        a: "Compression stroke",
        b: "Power stroke",
        c: "Exhaust Stroke",
        d: "Intake Stroke"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the primary advantage of a four-stroke diesel engine over a two-stroke diesel engine?",
      answers: {
        a: " Higher power output",
        b: "Lower fuel consumption",
        c: "Simplicity in design",
        d: "better emissions performance"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the purpose of the fuel injector in a diesel engine?",
      answers: {
        a: "To compress the air-fuel mixture",
        b: "To provide the spark for ignition",
        c: "To mix fuel with air",
        d: "To inject fuel into the cylinder at high pressure"
      },
      correctAnswer: "d"
    },
    {
      question: "The term 'diesel knock' refers to:",
      answers: {
        a: "Unusual knocking noise during the exhaust stroke",
        b: "An undesirable vibration during the intake stroke",
        c: "A knocking noise caused by improper combustion timing",
        d: "A normal sound produced during the power stroke"
      },
      correctAnswer: "c"
    } //Dont add comma here
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
