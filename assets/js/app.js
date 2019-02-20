const title = document.getElementById("title");
const questionDescription = document.getElementById("question-description");
const hideIntro = document.getElementById("hide-onclick");
const showOptions = document.getElementById("options");
const answerButtons = document.getElementsByClassName('answer-buttons');
let subjectCount = 0;

document.getElementById("start-button").addEventListener("click", loadQuestions);
document.getElementById("prev-button").addEventListener("click", getPrevQuestion);

for(let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].onclick = function () {
        const answer = answerButtons[i].dataset.answer;

        if (answer == "skip") {
            delete subjects[subjectCount - 1].answer;
        } else {
            subjects[subjectCount - 1].answer = answer;
        }

        loadQuestions();
    };
}

function loadQuestions () 
{
    if (subjectCount == subjects.length) {
        title.innerHTML = "Einde van de vragenlijst"
        hideIntro.style.display = "none"
        showOptions.style.display = "block"
        questionDescription.style.display = "none"
    } else {
        showOptions.style.display = "block"
        title.innerHTML = subjectCount + 1 + ". " + subjects[subjectCount].title
        questionDescription.innerHTML = subjects[subjectCount].statement
        hideIntro.style.display = "none"
        subjectCount++;
    }
}

function getPrevQuestion () 
{

}

function extraWeightQuestion () 
{

}

function getResults () 
{

}


