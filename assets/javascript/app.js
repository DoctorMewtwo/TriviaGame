var q1 = {
    question: "What Year did the Doctor Who reboot Start?",
    Answers: ["2004", "2005", "2006", "2007"],
    correct: "2005",
    wrongImage: "../images/Wrong.png",
    rightImage: "../images/Correct.png"
}

var q2 = {
    question: "Who was the First Actor to play the Doctor?",
    Answers: ["William Hartnell", "Christopher Eccleston", "David Tennant", "Tom Baker"],
    correct: "William Hartnell",
    wrongImage: "../images/Wrong.png",
    rightImage: "../images/Correct.png"
}

var q3 = {
    question: "Who was the First Companions?",
    Answers: ["Rory and Amy", "Susan, Ian, and Barbara", "Rose Tyler", "River Song"],
    correct: "Susan, Ian, and Barbara",
    wrongImage: "../images/Wrong.png",
    rightImage: "../images/Correct.png"
}

var q4 = {
    question: "What Year did Doctor Who actually start?",
    Answers: ["1970", "1954", "1963", "1969"],
    correct: "1963",
    wrongImage: "../images/Wrong.png",
    rightImage: "../images/Correct.png"
}

var q5 = {
    question: "What Planet is the Doctor from?",
    Answers: ["Skaaro", "Raxiciricalfalipatorius", "Sontar", "Gallifrey"],
    correct: "Gallifrey",
    wrongImage: "../images/Wrong.png",
    rightImage: "../images/Correct.png"
}

var q5 = {
    question: "What Planet is the Doctor from?",
    Answers: ["Skaaro", "Raxiciricalfalipatorius", "Sontar", "Gallifrey"],
    correct: "Gallifrey",
    wrongImage: "../images/Wrong.png",
    rightImage: "../images/Correct.png"
}

var q6 = {
    question: "Who are the Doctors most iconic villains?",
    Answers: ["Daleks", "Cybermen", "Zygons", "Weeping Angels"],
    correct: "Daleks",
    wrongImage: "../images/Wrong.png",
    rightImage: "../images/Correct.png"
}

var q7 = {
    question: "What Doctor Who episode of Doctor Who is the Highest Rated?",
    Answers: ["Blink", "Heaven Sent", "Midnight", "The Doctor Falls"],
    correct: "Heaven Sent",
    wrongImage: "../images/Wrong.png",
    rightImage: "../images/Correct.png"
}


var Questions = [q1, q2, q3 , q4 , q5 , q6 , q7];
var intervalID;
//var lQuestion = Questions[1];
var cQuestion;
var count = 15;
var index = 0;
var wrong = 0;
var right = 0;
var unanswered = 0;



// function nextQuestion()
// {
//     clearInterval(intervalID);
//     var rand = Math.floor(Math.random() * Questions.length);
//     cQuestion = Questions[rand];
//     if(cQuestion === lQuestion)
//     {
//         nextQuestion();
//     }
//     else
//     {
//         $("#Question").text(cQuestion.question);;
//     for(var i = 0 ; i <= cQuestion.Answers.length; i++)
//     {
//         $("#Answer" + i).text(cQuestion.Answers[i]);
//     }
//     count = 15;
//     $("#Timer").text(" Time Remaining : " + count);
//     intervalID  = setInterval("countDown()" , 1000);
//     }
// }

function nextQ() {
    clearInterval(intervalID);
    $("#Image").hide();
        if(index < Questions.length) {
        count = 15;
        $("#Timer").text(" Time Remaining : " + count);
        intervalID = setInterval("countDown()", 1000);
        cQuestion = Questions[index];
        $("#Question").text(cQuestion.question);
        for (var i = 0; i <= cQuestion.Answers.length; i++) {
            $("#Answer" + i).text(cQuestion.Answers[i]);
        }
        index++;
    }
    else {
        //What happens after the last question
        $("#Answer0").text("You got " + right + " Right");
        $("#Answer1").text("You got " + wrong + " Wrong");
        $("#Answer2").text("You got " + unanswered + " Unanswered");
        $("#Start").show();
    }

}

function hiddenCountDown() {
    count--;
    if (count <= 0) {
        nextQ();
        console.log("run");
    }
}

function Right() {
    count = 3;
    clearInterval(intervalID);
    intervalID = setInterval("hiddenCountDown()", 1000);
    $("#Image").show();
    $("#Image").attr("src", cQuestion.rightImage);
    $("#Question").text("Congrats you were Right");
    for (var i = 0; i <= cQuestion.Answers.length; i++) {
        $("#Answer" + i).text("");
    }


}

function Wrong() {
    count = 3;
    clearInterval(intervalID);
    intervalID = setInterval("hiddenCountDown()", 1000);
    $("#Image").show();
    $("#Image").attr("src", cQuestion.wrongImage);
    $("#Question").text("Sorry you were wrong");
    for (var i = 0; i <= cQuestion.Answers.length; i++) {
        $("#Answer" + i).text("");
    }
}




function countDown() {
    count--;
    $("#Timer").text(" Time Remaining : " + count);
    if (count <= 0) {
        unanswered++;
        Wrong();
        //what to do if unanswered
        //lQuestion = cQuestion;
        //nextQuestion();
    }
}

$(".Answer").on("click", function () {
    var ans = $(this).text();
    if (ans === cQuestion.correct) {
        right++;
        Right();
        //what to do if they get it right
        //lQuestion = cQuestion;
        //nextQuestion();

    }
    else {
        wrong++;
        Wrong();

        //what to do if they get it wrong
        //lQuestion = cQuestion;
        //nextQuestion();
    }

})

$("#Start").on("click", function () {

    $(this).hide();
    index = 0;
    wrong = 0;
    right = 0;
    unanswered = 0
    nextQ();
})

$(document).ready(function () {
    $("#Start").show();
})


