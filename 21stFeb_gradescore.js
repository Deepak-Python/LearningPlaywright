
//Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

let score = 82.869897;


if (!Number.isInteger(score)) {
    score = Number.parseInt(score);
    console.log("new value of score is : " + score);
}


if (typeof score === "number") {

    if (score >= 0 && score <= 100) {

        if (score >= 90 && score <= 100) {
            console.log("Grade A")
        }
        else if (score >= 80 && score < 90) {
            console.log("Grade B")
        }
        else if (score >= 70 && score < 80) {
            console.log("Grade C")
        }
        else if (score >= 60 && score < 70) {
            console.log("Grade D")
        }
        else if (score >= 0 && score < 60) {
            console.log("Grade F")
        }

    }
    else {
        console.log("Invalid score")
    }
} else {
    console.log("Enter valid score in numeric format")
}
