var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeCounter = {};

var gradeOutput = function(score) {
	if(score <= 60) {
		return "F";
	} else if (score >= 61 && score <= 70) {
		return "D";
	} else if (score >= 71 && score <= 80) {
		return "C";
	} else if (score >= 81 && score <= 90) {
		return "B";
	} else {
		return "A";
	};
		
}
var scoresAsGrades = scores.map(gradeOutput);

console.log(scoresAsGrades);

function howManyOfEachGrade () {
	for (var i = 0, x = scores.length; i < x; i++) {
		if (scoresAsGrades[i] === "F") {
			!gradeCounter["F"] ? gradeCounter["F"] = 1 : gradeCounter["F"]++;
		} else if (scoresAsGrades[i] === "D") {
			!gradeCounter["D"] ? gradeCounter["D"] = 1 : gradeCounter["D"]++;
		} else if (scoresAsGrades[i] === "C") {
			!gradeCounter["C"] ? gradeCounter["C"] = 1 : gradeCounter["C"]++;
		} else if (scoresAsGrades[i] === "B") {
			!gradeCounter["B"] ? gradeCounter["B"] = 1 : gradeCounter["B"]++;
		} else if (scoresAsGrades[i] === "A") {
			!gradeCounter["A"] ? gradeCounter["A"] = 1 : gradeCounter["A"]++;
		}
	}
	console.log("There are " + gradeCounter["A"] + " A(s),\n" + gradeCounter["B"] + " B(s),\n" 
		+ gradeCounter["C"] + " C(s),\n" + gradeCounter["D"] + " D(s),\nand " + gradeCounter["F"] + " F(s).");
};

howManyOfEachGrade();

console.log(gradeCounter);

function lowestAndHighestScore() {
	var highestScore = 0;
	var lowestScore = 0;
	for (var i = 0, x = scores.length; i < x; i++) {
		if (scores[i] > highestScore) {
			highestScore = scores[i];
		}
		if (scores[i] < lowestScore || lowestScore === 0) {
			lowestScore = scores[i];
		}
	}
	console.log("The lowest grade in the class is a(n) " + gradeOutput(lowestScore) + " with a(n) " + lowestScore);
	console.log("The highest grade in the class is a(n) " + gradeOutput(highestScore) + " with a(n) " + highestScore);
}

lowestAndHighestScore();