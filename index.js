// 2nd method
// const num1 = Math.ceil(Math.random()*10);
// const num2 = Math.ceil(Math.random()*10);

// const questionEl = document.getElementById('question');
// const formEL = document.getElementById('form');
// const inupEl = document.getElementById('inp');
// const getScore = document.getElementById('score');

// let score = JSON.parse(localStorage.getItem("score"));

// if (!score) {
//     score = 0;
// }
// questionEl.innerHTML = `multiplication of ${num1} and ${num2} is??`

// const correctAns = num1 * num2;

// formEL.addEventListener('submit', () => {
//     const userAns = +inupEl.value;
//     // console.log(userAns, typeof(userAns));
//     if (userAns === correctAns) {
//         score++;
//         // console.log(score);
//         updateLocalStorage();
//     } else {
//         score--;
//         // console.log(score);
//         updateLocalStorage();
//     }
// });

// function updateLocalStorage() {
//     localStorage.setItem("score", JSON.stringify(score))
// }

// getScore.innerHTML = `score: ${score}`;


const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

// console.log(num1+num2);

const questionEl = document.getElementById('question');
const formEl = document.getElementById('form');
const btn = document.getElementById('btn');
const inpEl = document.getElementById('inp'); 
const scoreEl = document.getElementById("score");

questionEl.innerText = `What is ${num1} multiplied by ${num2}`;

let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = 0;
}

const realAns = num1 * num2;

formEl.addEventListener('submit', () => {
    const userAns = +inpEl.value;

    if (userAns === realAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

const updateLocalStorage = () => {
    localStorage.setItem('score', JSON.stringify(score));
}

scoreEl.innerHTML = `Score: ${score}`;
