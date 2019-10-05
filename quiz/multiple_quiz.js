console.log('js loaded');

data= [
    {
        title: 'abc',
        image:'https://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-03.jpg',
        choices:[
            'abc',
            'cde',
            'egf',
            'hjk'
        ],
        answer:'',
    },
    {

    },

]

let quizContent = document.getElementById("quiz-content");
let subQuiz = data;
let quizIndex = 0;

subQuiz[quizIndex] 







function choiceOnClick(event, index){
   let choise = event.currentTarget;
   let current = quizContent.getElementsByClassName('active');

   if (current.length > 0 ){
       current[0].className = current[0].className.replace(" active", "");
       choise.classList.add("active");
   }else{
       choise.classList.add("active");
   }
   
}

function genQuiz(quiz){
    quizContainer = document.getElementById('quiz-container');
    quizContainer.insertAdjacentHTML("beforeend", `
        <h1 id='title'>${quiz.title}</h1>
        <div id='quiz-content' class="quiz-content">
            <img id='quiz-image'
                src=${quiz.image}
                alt="">
            <div class="quiz-choice" onclick="choiceOnClick(event)">
                <h3 class="option">A</h3>
                <p class='content'>${quiz.choices[0]}</p>
            </div>
            <div class="quiz-choice" onclick="choiceOnClick(event)">
                <h3 class="option" style="padding: 5px 9.6px;">B</h3>
                <p class='content'>${quiz.choices[1]}</p>
            </div>
            <div class="quiz-choice" onclick="choiceOnClick(event)">
                <h3 class="option">C</h3>
                <p class='content'>${quiz.choices[2]}</p>
            </div>
            <div class="quiz-choice" onclick="choiceOnClick(event)">
                <h3 class="option">D</h3>
                <p class='content'>${quiz.choices[3]}</p>
            </div>
        </div>
    `);
}

