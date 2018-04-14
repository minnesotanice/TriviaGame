var correctAnswers = ["Greetings from Asbury Park, N.J.", "Twenty years", "1975", "Darlington County", "2009", "Barack Obama", "Clarence Clemons", "Barbra Streisand"];
var myAnswers = [];

var unanswered = 0;
var correct = 0;
var incorrect = 0;

/* Count of correct answers*/
var count = 0;
/* Used to index through both arrays, correct answers and user answers*/
var progress = 0;

var startSection = $("#jsStartSection");
var questionSection = $(".jsQuestionSection");
var resultSection = $("#jsResultSection");

var hideStartSection = function () {
    startSection.addClass("hidden");
};

var showQuestionSection = function () {
    questionSection.removeClass("hidden");
};

var hideQuestionSection = function () {
    questionSection.addClass("hidden");
};

var showResultSection = function () {
    resultSection.removeClass("hidden");
};

var showStartSection = function () {
    startSection.removeClass("hidden");
};
var hideResultSection = function () {
    resultSection.addClass("hidden");
};
var jsQuestion = $(".jsQuestion");

var makeMyAnswersArray = function () {
    for (var i = 0; i < jsQuestion.length; i++) {

        var selector = "input[type=radio][name=radio" + i + "]:checked";
        var checkedInputSelector = $(selector).val();

        myAnswers.push(checkedInputSelector);

    }
}

//////////////////////////////////////////////////
// TIMER
//////////////////////////////////////////////////
var timer;

function myTimer() {
    var presentTime = document.getElementById('timer').innerHTML;

    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) {
        m = m - 1
    }

    // CHECK TO SEE IF TIMER HAS REACHED ZERO
    if (m == 0 && s == 0) {

        // DISPLAY 0:00
        document.getElementById('timer').innerHTML = m + ":" + s;

        // DO OTHER FUNCTIONS I'VE ALREADY CREATED
        hideQuestionSection();
        makeMyAnswersArray();
        showResultSection();

        // show array of myAnswers
        // console.log(myAnswers);

        // NEED TO COMPARE ARRAYS TO CHECK FOR CORRECT ANSWERS
        checkAnswers();

    } else {
        // DISPLAY CURRENT TIME
        document.getElementById('timer').innerHTML = m + ":" + s;

        // DECREMENT BY ONE SECOND
        // setTimeout(startTimer, 1000);

    }
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
        sec = "0" + sec
    }; // add zero in front of numbers < 10
    if (sec < 0) {
        sec = "59"
    };
    return sec;
}

function startTimer() {

    timer = setInterval(function () {
        myTimer()
    }, 1000);

}

function myStopFunction() {
    clearInterval(timer);
}
////////////////////////////////////////////////



// COMPARE ARRAYS correctAnswers AND myAnswers
var checkAnswers = function () {

    for (var i = 0; i < correctAnswers.length; i++) {

        // check for unanswered
        if (myAnswers[i] === undefined) {

            unanswered++;

        } else {
            // check if correct or incorrect
            if (myAnswers[i] === correctAnswers[i]) {
                correct++;
            } else {
                incorrect++;
            }
        }

    }

    $("#jsCorrect").text(correct);
    $("#jsIncorrect").text(incorrect);
    $("#jsUnanswered").text(unanswered);
}

// CLICK TO START
$("#jsStartButton").click(function () {

    hideStartSection();
    showQuestionSection();

    document.getElementById('timer').innerHTML = 08 + ":" + 00;
    startTimer();

});

// CLICK TO SUBMIT
$("#jsSubmitButton").click(function () {

    hideQuestionSection();
    makeMyAnswersArray();
    showResultSection();

    // COMPARE ARRAYS TO CHECK ANSWERS
    checkAnswers();
});


// CLICK TO RESTART
$("#jsRestartButton").click(function () {

    // reset variables
    myAnswers = [];
    unanswered = 0;
    correct = 0;
    incorrect = 0;

    // hide results section
    hideResultSection();

    // stops timer
    myStopFunction();

    // show start section
    showStartSection();

});