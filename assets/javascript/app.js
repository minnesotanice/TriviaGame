// click start to 
//  //hide start section,  
//  //show question section and 
//  //start timer

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


$("#jsStartButton").click(function () {

    hideStartSection();
    showQuestionSection();

    setTimeout(function () {
        hideQuestionSection();
        showResultSection();
      }, 5000);

});




// make question section hidden and show results after 5 seconds



// when timer reaches zero, hide questions section & show result section

// not sure how to tally these results but is what is tracked
//   // correct
//   // incorrrct
//  // unanswered