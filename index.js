console.log("Welcome to this quiz");
var readlineSync=require('readline-sync');
const chalk = require('chalk');
var userinput=readlineSync.question("Press e to quit,otherwise press any other key to play this quiz");
var uscore=0;
var username=readlineSync.question("Enter your name");
if(userinput.toLowerCase()=='e')
{
  console.log("You choose to quit");
  process.exit(0);
}
console.log("So you have decided to play the quiz.\nLet's see how much you know Niki");
var questions=[
  {
    "ques":"Which colour she likes the most?\na:Blue\nb:Pink\nc:Purple\n",
    "ans":"c"
  },
  {
    "ques":"What is her dream?\na:Eat at fancy restaurants\nb:Travel the world\nc:Become famous\n",
    "ans":"b"
  },
  {
    "ques":"Whom does she admire the most?\na:Jeff Bezos\nb:Sundar Pichai\nc:Elon Musk\n",
    "ans":"c"
  },
  {
    "ques":"What would she do in her free time?\na:Watch sunset\nb:Go for shopping\nc:watch movie\n",
    "ans":"a"
  },
  {
    "ques":"Which is her favourite dish?\na:Biryani\nb:Burger\nc:Pizza\n",
    "ans":"a"
  }
]

var highscores=[
    {
      "name":"Rick",
      "score":"5"
    },
    {
      "name":"Nick",
      "score":"4"
    },
]
function playquiz(question)
{
  var useranswer=readlineSync.question(question.ques);
  if(useranswer.toLowerCase()==question.ans)
  {
    console.log(chalk.green("You are right"));
    console.log(++uscore);
  }
  else
  {
    console.log(chalk.red("You are wrong"));
    console.log(--uscore);
  }
}
for(var i=0;i<questions.length;i++)
{
  playquiz(questions[i]);
}
console.log(chalk.bgRed("Your final score is "+uscore));
if(uscore==5)
console.log(chalk.green("You have beaten the highest score"));
else
console.log(chalk.red("You have not beaten the highest score"));
var newplayer={
      "name":username,
      "score":uscore
    }

highscores.push(newplayer);

var temp;
for(var j=0;j<highscores.length-1;j++)
{
  for(var n=0;n<highscores.length-j-1;n++)
  {
    if(highscores[n].score<highscores[n+1].score)
    {
      temp=highscores[n];
      highscores[n]=highscores[n+1];
      highscores[n+1]=temp;
    }
  }
}
console.log("Name"+"\t\t"+"Scores");
for(var j=0;j<highscores.length;j++)
{
  console.log(highscores[j].name+"\t\t\t"+highscores[j].score);
}

