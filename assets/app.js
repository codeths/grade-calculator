let q1 = document.getElementById("Quarter1Grade")
if(q1.value > 100){
    q1.value = 100
}
let q2 = document.getElementById("Quarter2Grade")
if(q2.value > 100){
    q2.value = 100
}
let output = document.getElementById("output")
let input_box = document.getElementById("custom_input")

let table_rows = [65, 70, 75, 80, 85, 90, 95, 100]

function calculateGrade(final_grade){
    let grade = q1.value * .45 + q2.value * .45 + final_grade * .1;
    return Math.round(grade*100)/100
}

function calculateLetterGrade(semester_grade){
    if(semester_grade >= 92.5){
        return "A"
    }
    else if(semester_grade >= 89.5){
        return "A-"
    }
    else if(semester_grade >= 86.5){
        return "B+"
    }
    else if(semester_grade >= 82.5){
        return "B"
    }
    else if(semester_grade >= 79.5){
        return "B-"
    }
    else if(semester_grade >= 76.5){
        return "C+"
    }
    else if(semester_grade >= 72.5){
        return "C"
    }
    else if(semester_grade >= 69.5){
        return "C-"
    }
    else if(semester_grade >= 66.5){
        return "D+"
    }
    else if(semester_grade >= 59.5){
        return "D"
    }
    return "F"
}

function generateString(final_grade){
    const semester_grade = calculateGrade(final_grade)
    return `${calculateLetterGrade(semester_grade)} (${semester_grade}%)`
}

function onChange(){
    table_rows.forEach(final_grade => {
        let table_row = document.getElementById(final_grade.toString())
        table_row.innerHTML = generateString(final_grade) 
    });
    let table_row = document.getElementById("custom_result")
    table_row.innerHTML = generateString(input_box.value)
}