const questions = [
    {
        question : 'what is capital of france',
        options : ['A) Berlin', 'B) Madrid', 'C) Paris', 'D) Lisbon'],
        answer : "C"
    },{
        question : "who wrote 'to be , or not be'",
        options : ['A) charles dickens', 'B)mark twain', 'C) wiliam s', 'D) jane'],
        answer : "C"
    },
    {
        question : 'what is largest planet insolar system ',
        options : ['A) earth', 'B) venus', 'C) saturn', 'D) jupiter'],
        answer : "D"
    },
    {
        question : 'which language is used for web developemnt',
        options : ['A) java', 'B) python', 'C) javscript', 'D) c++'],
        answer : "C"
    },{
        question : "what is 2 + 2?",
        options : ['A) 3', 'B)5', 'C) 6', 'D) 4'],
        answer : "D"
    }
]

let score = 0;

function startQuiz(){
    console.log('welcome to the quiz game');
    console.log("Answer each question by typing the correct option letter (A,B,C,D)");
    console.log("Good luck \n");

    //loop through each question

    questions.forEach((q,index) => {
        console.log(`question ${index+ 1}: ${q.question}`);
        q.options.forEach(option => console.log(option));

        const userAnswer = prompt("enter your answer")?.toUpperCase();
        if(userAnswer === q.answer){
            console.log("correct answer\n");
            score++;
        }else{
            console.log('wrong \n')
        }

        
    })

    console.log(`quiz is over ! your final score is ${score}`);
}


startQuiz();