const quiz = [
    {
        question : "Who is the father of HTML?",
        ans1text:"Resmus Lerdrof",
        ans2text:"Tim Berners-Lee",
        ans3text:"Berden -Eich",
        ans4text:"Sergey Brin ",
        answer: "b",
    },
    {
        question : "What  does  HTML  stand  for?",
        ans1text:"Hypertext   Markup  Language",
        ans2text:"Hypertext Markdown  Language",
        ans3text:"Hyperloop  Markup  Language",
        ans4text:"Helicopters Terminals  Motorboats Laborginis ",
        answer: "a",
    },
    {
        question : "What  does  CSS  stand  for?",
        ans1text:"Centeral Style  Sheets",
        ans2text:"Cascading Style  Sheets",
        ans3text:"Cascading Simple  Sheets",
        ans4text:"None Of The Above ",
        answer: "b",
    },
    {
        question : "What  year was Javascript launched?",
        ans1text:"1995",
        ans2text:"1996",
        ans3text:"1997",
        ans4text:"5000 ",
        answer: "a",
    },
];
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent);
const  option_a =document.getElementById("text_option_a");
const  option_b =document.getElementById("text_option_b");
const  option_c =document.getElementById("text_option_c");
const  option_d =document.getElementById("text_option_d");
const answerElement  = document.querySelectorAll(".answer")
console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent)
console.log(option_d.textContent);
const submit =document.getElementById("submit");

let currentQuestion =  0;
let score  = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);
console.log(quiz[currentQuestion].question);

question.textContent = quiz[currentQuestion].question;
option_a.textContent=(quiz[currentQuestion]).ans1text;
option_b.textContent=(quiz[currentQuestion]).ans2text;
option_c.textContent=(quiz[currentQuestion]).ans3text;
option_d.textContent= (quiz[currentQuestion]).ans4text;
console.log ("answer element",answerElement);
    
submit.addEventListener("click",()=>{
   const checkedAns= document.querySelector('input[type="radio"]:checked');
   console.log(checkedAns);
   if (checkedAns === null) {
    alert("please select an answer");
   }else{
    if (checkedAns.nextElementSibling.textContent===quiz[currentQuestion].question) {
        score++;


    }
    currentQuestion++;
    if(currentQuestion<quiz.length){
        
question.textContent = quiz[currentQuestion].question;
option_a.textContent=(quiz[currentQuestion]).ans1text;
option_b.textContent=(quiz[currentQuestion]).ans2text;
option_c.textContent=(quiz[currentQuestion]).ans3text;
option_d.textContent= (quiz[currentQuestion]).ans4text;
checkedAns.checked = false;

    }else{

        alert("your  score is  "+ score + "out if"+ quiz.length)
        location.reload();
    }
   }  
})


