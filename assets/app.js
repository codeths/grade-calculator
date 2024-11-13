let q1 = document.getElementById("Quarter1Grade")
let q2 = document.getElementById("Quarter2Grade")

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
    let quarter1 = parseInt(q1.value)
    let quarter2 = parseInt(q2.value)
    let final = parseInt(input_box.value)
    if(quarter1 < 50){
        q1.value = 50
    }
    else if(quarter1 > 100){
        q1.value = 100
    }
    if(quarter2 < 50){
        q2.value = 50
    }
    else if(quarter2 > 100){
        q2.value = 100
    }
    if(final < 0){
        input_box.value = 0
    }
    else if(final > 100){
        input_box.value = 100
    }
    numberValidation({key: ""})
    table_rows.forEach(final_grade => {
        let table_row = document.getElementById(final_grade.toString())
        table_row.innerHTML = generateString(final_grade) 
    });
    let table_row = document.getElementById("custom_result")
    table_row.innerHTML = generateString(input_box.value)
}

function addBorder(element){
    if(element.value.length <= 0){
        element.classList.add("border", "border-danger")
    }
    else{
        element.classList.remove("border-danger", "border")
    }
}

function numberValidation(event){
    addBorder(q1)
    addBorder(q2)
    addBorder(input_box)
    return (event.key == "." || !isNaN(event.key));
}