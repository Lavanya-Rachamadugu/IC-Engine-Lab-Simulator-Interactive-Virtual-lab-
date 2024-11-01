
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
      question: "Which term represents the power developed in the engine's cylinders during the combustion process?",
      answers: {
        a: "Brake Power",
        b: "Indicated Power",
        c: "Mechanical Efficiency",
        d: "Indicator Efficiency"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the primary measure of the engine's ability to produce useful work?",
      answers: {
        a: "Brake Power",
        b: "Indicated Power",
        c: "Mechanical Efficiency",
        d: "Indicator Efficiency"
        
      },
      correctAnswer: "a"
    },
    {
      question: "If a single-cylinder diesel engine has a Brake Power of 30 kW and an Indicated Power of 32 kW, what is its Mechanical Efficiency?",
      answers: {
        a: "90.62%",
        b: "93.75%",
        c: "87.5%",
        d: "96.87%"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the Brake Specific Fuel Consumption (BSFC) of an engine that consumes fuel at a rate of 0.3 kg/h and produces a Brake Power of 25 kW?",
      answers: {
        a: "0.012 kg/kWh",
        b: "0.014 kg/kWh",
        c: "0.016 kg/kWh",
        d: "0.018 kg/kWh"
      },
      correctAnswer: "a"
    },
    {
      question: " In a single-cylinder diesel engine, the difference between Indicated Power and Brake Power is primarily due to:",
      answers: {
        a: "Mechanical losses in the engine",
        b: "Cylinder compression ratio.",
        c: "Ignition timing adjustments",
        d: "Exhaust gas recirculation."
      },
      correctAnswer: "a"
    } //Dont add comma here
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
