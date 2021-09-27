
var readlineSync = require('readline-sync');
const chalk = require('chalk');
const inst = chalk.black.bgYellowBright.bold
const correct = chalk.greenBright
const wrong = chalk.redBright
const intromsg = chalk.cyanBright

var userName = readlineSync.question("What is your name? ");
console.log(intromsg("Welcome " + userName + " to 'Oh! Shinchan 😎' Quiz"));
console.log("*==========================*");

console.log(`Instructions:
1.The quiz will ask you some simple questions about Shinchan- a cartoon character.
2.The quiz has 2 levels.
3.Each level has 5 set of questions if you answer all questions correct, only then you make it to next level.
4.For every correct answer you will get 1 point and for wrong answer 0 point.
You need to know all answers to make it Top.So, Give your Best 👍`);
console.log("*==========================*");

var score = 0

var qna1 = [
  {
    question: `What is shinchan's surname? `,
    answer: "Nohara"
  },
  {
    question: `What is shinchan's mother name? `,
    answer: "Misae"
  },
  {
    question: `Who is shinchan's Best friend ? `,
    answer: "Kazama"
  },
  {
    question: `Where did shinchan live? `,
    answer: "Kasukabae"
  },
  {
    question: `Who are shinchan's neighbours? `,
    answer: "Micchi & Yoshirin"
  }]

  var opt = [
      {option: ["Nohara","Nohari","Nahora","Mohara"]},
      {option: ["Misae","Masae","Mutsi","Mitsi"]},
      {option: ["Masao","Nene","Kazama","Bo"]},
      {option: ["Tokyo","Kasukabae","Japan","China"]},
      {option:["Robert","Kazama","Nanako","Micchi & Yoshirin"]}

    ];

  var qna2 = [
  {
    question: "What is shinchan's pet name? ",
    answer: "shiro"
  },
  {
    question: "What is Shinchan's mausi(mother's sister) profession? ",
    answer: "photographer"
  },
  {
    question: "Did shichan has a brother? ",
    answer: 'false'
  },
  {
    question: "Did shinchan has done time travel? ",
    answer: 'true'
  },
  {
    question: "What is shinchan's sister name? ",
    answer: "himawari"
  }]


function checkanswer(que, answers) {
  if (que === answers) {
    console.log(correct("You are right!!"));
    score = score + 1;
  }
  else {
    console.log(wrong("You are wrong!!"));
  }
}

for (var i = 0; i < qna1.length; i++) {
    var uttar = readlineSync.keyInSelect(opt[i].option,qna1[i].question);
    checkanswer(opt[i].option[uttar], qna1[i].answer);
    console.log("------------------------");
  }
  
if (score > 4) {
  console.log(intromsg("Level one cleared!!"));
  console.clear()
  console.log("*==========================*");
  console.log(inst("Yo! you made it to Level Two!!"));
  console.log("*==========================*");

  for (var i = 0; i < qna2.length; i++) {
    if (i==2 || i==3){
      var uttar2=readlineSync.keyInYN(qna2[i].question);
      checkanswer(uttar2.toString(), qna2[i].answer);
    }
    else{
      checkanswer(readlineSync.question(qna2[i].question).toLowerCase(), qna2[i].answer); 
    }
    console.log("------------------------");
  }
}
else{
  console.log(wrong("Oopsie! you didn't made it to Level Two.Better Luck next Time!!"));
}

console.log(inst("Quiz over!!"));
console.log(chalk.blue.underline("Your score is : " + score));
console.log("*==========================*");

console.log(chalk.black.bgWhite("Top scorers are:"));

var toppers =[
  {
    name: "Neha",
    topscore: 10
  },
  {
    name: "Anusha",
    topscore: 9
  },
]

console.log("*---------------*");
for (var i = 0; i < toppers.length; i++) {
  console.log("Name: ",toppers[i].name,"\r\nScore: ",toppers[i].topscore);
   console.log("---------------");
}
console.log("*---------------*");

console.log("If you scored highest points then send me a screenshot and then I'll update it in top scorers list.");

console.log("Thank you !! 😊");
