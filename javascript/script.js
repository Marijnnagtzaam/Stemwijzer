const intro = document.getElementById("intro");
const statements = document.getElementById("statements");
const result = document.getElementById("result");
const title = document.getElementById("title");
const statement = document.getElementById("statement");
const valueState = document.getElementById("statementValue");
const listSubjects = document.getElementById("listSubjects");

var counter = 0;

var answers = [];
const buttonDiv = document.getElementById("buttonDiv");
var allButtons = buttonDiv.getElementsByClassName("btn");

var resultImg = document.getElementById("resultImg1")
var resultImg = document.getElementById("resultImg2")
var resultImg = document.getElementById("resultImg3")
var first = document.getElementById("first")
var second = document.getElementById("second")
var thirth = document.getElementById("thirth")

for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
        answer(event.currentTarget.getAttribute("data-position"))
    });
}


function main() {
    intro.style.display = "block";
    statements.style.display = "none";

}

function getStatement() {
    intro.style.display = "none";
    statements.style.display = "block";
    title.innerHTML = subjects[counter].title;
    statement.innerHTML = subjects[counter].statement;
}

function answer(value) {
    switch (value) {
        case "agree":
            answers[counter] = "pro";
            break;
        case "disagree":
            answers[counter] = "contra";
            break;
        case "none":
            answers[counter] = "none";
            break;
        case "skip":
            answers[counter] = "skip";
    }

    if (counter == subjects.length - 1) {
        heavierValue();
    } else {
        counter++
        getStatement();
    }
}

function back() {
    counter--
    getStatement();
}

function heavierValue() {
    statements.style.display = "none";
    valueState.style.display = "block";

    subjects.forEach(function(subject, index) {
        var div = document.createElement("div");  
        div.innerHTML = '<input class="form-check-input" onclick="addValue('+index+')" type="checkbox" value="index" id="defaultCheck' + index + '">'+'<label class="form-check-label" for="defaultCheck1">'
        + subject.title +
      '</label>'
        listSubjects.appendChild(div);
    });
}


function addValue(index) {
    if ("heavy" in subjects[index]) {
        delete subjects[index].heavy;
    } else {
        subjects[index].heavy = true;
    }
    console.log(subjects[index]);
}
 
const filterSecular = document.getElementById("filterSecular");
function secularParties() {
    if (filterSecular.checked) {
        parties = parties.filter(function(parties) {
            return parties.secular == true;
        });
    }
}

const filterLargerParties = document.getElementById("filterLargerParties");
function largerParties() {
    if (filterLargerParties.checked) {
        parties = parties.filter(function(parties) {
            return parties.size > 0;
        });
    }
}


function getResult() {
    statements.style.display = "none";
    valueState.style.display = "none";
    result.style.display = "block";
    for (var i = 0; i < parties.length; i++) {
        parties[i].count = 0;
        let totalcount = 0;
        for (let a = 0; a < answers.length; a++) {
            if (answers[a] === subjects[a].parties[i].position){
                if("heavy" in subjects[a]){
                    parties[i].count++
                    totalcount++;
                }
                parties[i].count++;
                totalcount++;
            } else {
                totalcount++;
            }
        }
        parties[i].procent = Math.round(100 / totalcount * parties[i].count);
    }

    parties.sort(function (a, b) {
        return b.procent - a.procent;
    })
    first.innerHTML = parties[0].procent;
    second.innerHTML = parties[1].procent;
    thirth.innerHTML = parties[2].procent;

    resultImg1.src = "resultLogos/" + parties[0].name.toLowerCase() + ".png";
    resultImg2.src = "resultLogos/" + parties[1].name.toLowerCase() + ".png";
    resultImg3.src = "resultLogos/" + parties[2].name.toLowerCase() + ".png";
}

