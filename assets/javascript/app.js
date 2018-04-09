// click start to 
//  //hide start section,  
//  //show question section and 
//  //start timer

var correctAnswers = ["up", "4", "true"];
var myAnswers = [];

/* Count of correct answers*/
var count = 0;
/* Used to index through both arrays, correct answers and user answers*/
var progress = 0;

var startSection = $("#jsStartSection");
var questionSection = $("#jsQuestionSection");
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

var jsQuestion = $(".jsQuestion");

// var consoleChecked = function () {
//     for (var i = 0; i < jsQuestion.length; i++) {

//         var selector = "input[type=radio][name=radio" + i + "]:checked";
//         var checkedInputSelector = $(selector).val();
//         console.log(checkedInputSelector);

//     }
// }

var makeMyAnswersArray = function () {
    for (var i = 0; i < jsQuestion.length; i++) {

        var selector = "input[type=radio][name=radio" + i + "]:checked";
        var checkedInputSelector = $(selector).val();

        myAnswers.push(checkedInputSelector);

    }
}


// click to start
$("#jsStartButton").click(function () {

    hideStartSection();
    showQuestionSection();

    setTimeout(function () {
        hideQuestionSection();
        makeMyAnswersArray();
        showResultSection();

        // show array of myAnswers
        console.log(myAnswers);

        // NEED TO COMPARE ARRAYS TO CHECK FOR CORRECT ANSWERS


    }, 5000);

});




// questions and radio buttons
// var addAnswerToArray = function() {

//     // loop 
//     for () {

//     }

// }




// when timer reaches zero OR when submit button is clicked
//  // answers are compiled into myAnswers array.... use .push()
//  //  // function goes down page and looks for jsQuestion class (each question div wraps around)
//  //  //  // look for 'checked' for an input tag within div
//  //  //  //  // if none add null to array
//  //  //  //  // otherwise, add 'value' to array


//  // myAnswers array compared with correctAnswers array


// display results


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////