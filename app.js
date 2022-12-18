var questions = [
  {
    numb: 1,
    question: "Q 1 - Which snippet of CSS is commonly used to center a website horizontally?",
    answer: "margin: auto 0;",
    options: [
      "site-align: center",
      "margin: center",
      "margin: auto 0",
      "margin: 0 auto",
    ],
  },
  {
    numb: 2,
    question: "Q 2 - What is the correct CSS syntax for making all the elements bold?",
    answer: "span {font-weight: bold}",
    options: [
      "span {text-size: bold}",
      "span {font-weight: bold}",
      "span(text-size: bold);",
      "span(font-size: bold);",
    ],
  },
  {
    numb: 3,
    question: "Q 3 - How do you add a comment in a CSS file?",
    answer: "/* this is a comment */",
    options: [
      " /* this is a comment */",
      "// this is a comment //",
      " // this is a comment",
      "this is a comment //",
    ],
  },
  {
    numb: 4,
    question: "Q 4 - What property is used to change the text color of an element?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    numb: 5,
    question: "Q 5 - The # symbol specifies that the selector is?",
    answer: "id",
    options: [
      "class",
      "tag",
      "first",
      "id",
    ],
  },
];

var allquestion = document.getElementById("question");
var questionNumber = document.getElementById("questionNumber");
var mainId = document.getElementById("mainId");
var indexNum = 0;
var marks = 0;

function allQuestion() {
  allquestion.innerHTML = questions[indexNum].question;
  questionNumber.innerHTML = " Question # " + (indexNum + 1) + " / " + questions.length;
  mainId.innerHTML = "";
  for (i = 0; i < questions[indexNum].options.length; i++) {
    mainId.innerHTML += `<div>
          <button onclick= "checking('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn-div">
          ${questions[indexNum].options[i]}
          </button>
          </div>`
  }
}
allQuestion();

function btnQuestion() {
  indexNum++;
  allQuestion();
}

function checking(a, b) {
  if (a == b) {
    marks++;
    console.log(marks);
  }
  if (indexNum + 1 == questions.length) {
    alert("total" + " " + marks)
  }else {
    btnQuestion();
  }
}

