let q1 = document.getElementById("Quarter1Grade")
let q2 = document.getElementById("Quarter2Grade")
let output = document.getElementById("output")
let input_box = document.getElementById("custom_input")

let table_rows = [50, 60, 70, 80, 90, 100]

function calculateGrade(final_grade){
    return q1.value * .45 + q2.value * .45 + final_grade * .1;
}

function onChange(){
    table_rows.forEach(final_grade => {
        let table_row = document.getElementById(final_grade.toString())
        table_row.innerHTML = calculateGrade(final_grade) 
    });
    let table_row = document.getElementById("custom_result")
    table_row.innerHTML = calculateGrade(input_box.value)
}