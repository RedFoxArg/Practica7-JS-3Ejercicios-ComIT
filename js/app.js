/* SELECCIÓN DE PRÁCTICA EN MENÚ/NAVBAR */
const loadScrean = function (choosen){
    console.log("choosen:" + choosen);
    let mssg = document.getElementById("mainMessage");
    let num = document.getElementById("numbersPractice");
    let str = document.getElementById("stringsPractice");
    let acc = document.getElementById("accumulatorPractice");

    switch(choosen){
        case "numbers": 
            console.log("visto numbers");
            mssg.style.display = "none";
            str.style.display = "none";
            acc.style.display = "none";
            num.style.display = "flex";
            break;
        case "strings":
            console.log("visto strings");
            mssg.style.display = "none";
            num.style.display = "none";
            acc.style.display = "none";
            str.style.display = "flex";
            break;
        case "accum":
            console.log("visto accum");
            mssg.style.display = "none";
            num.style.display = "none";
            str.style.display = "none";
            acc.style.display = "flex";
            break;
    }
}

/* PRÁCTICA NÚMEROS */
const calculate = function () {

    let stNum = parseInt(document.getElementById("num1").value);
    console.log(stNum);
    let sign = document.getElementById("inputSelectOperation").value;
    console.log(sign);
    let ndNum = parseInt(document.getElementById("num2").value);
    console.log(ndNum);
    let result = document.getElementById("result");
    console.log(result.value);
    if( stNum != isNaN && ndNum != isNaN){
        switch (sign) {
            case "+":
                result.value = stNum + ndNum;
                console.log(result.value);
                break;
            case "-":
                result.value = stNum - ndNum;
                console.log(result.value);
                break;
            case "*":
                result.value = stNum * ndNum;
                console.log(result.value);
                break;
            case "/":
                result.value = stNum / ndNum;
                console.log(result.value);
                break;
        
            default:
                break;
        }
    }else{
        /* no funciona el alert */
        alert("Debe ingresar números enteros");
    }

}

/* PRÁCTICA STRINGS */
const concatenate = function () {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let fullName = document.getElementById("fullName");

    fullName.value = name + " " + lastName;
}

/* PRÁCTICA ACUMULADOR */
const accumulate = function () {
    let input = document.getElementById("accum");
    input.value++;
}