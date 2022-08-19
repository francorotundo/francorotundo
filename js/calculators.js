
const calc = document.querySelector('.calc');
const calculators = document.querySelector(".calculators");
const calculatorsExit = document.querySelector(".calculators-exit");

function renderCalc() {
    calculators.classList.remove("inactive");
    containerWWP.classList.add("inactive");  
}

function removeCalc() {
    calculators.classList.add("inactive");
}

calc.addEventListener("click", renderCalc);
calculatorsExit.addEventListener("click", removeCalc);



//LAYOUT OF WEIGHT BY WEIGHT PERCENTAGE CALCULATOR
const p1 = document.querySelector(".p1");
const containerWWP = document.querySelector('.WWP');



function calcPPP() {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("calculadoraPP");

    const mainContainerCalculator = document.createElement("div");
    mainContainer.classList.add("container-calculadoraPP");
    
    const containerExit= document.createElement("div");
    containerExit.classList.add("containerExit");

    const returnWWP = document.createElement("i");
    returnWWP.classList.add("fa-solid");
    returnWWP.classList.add("fa-arrow-right-from-bracket");
    returnWWP.classList.add("returnWWP");


    const exitWWP = document.createElement("i");
    exitWWP.classList.add("fa-solid");
    exitWWP.classList.add("fa-xmark");
    exitWWP.classList.add("exit-WWP");

    containerExit.append(returnWWP, exitWWP);

    const title = document.createElement("h3");
    title.innerText = "Calculator\n% weight/weight";
        
    const form = document.createElement("form");

    const label1 = document.createElement("label");
    label1.innerText = 'Mass of solute (grams)';
    const input1 = document.createElement('input');
    input1.classList.add('sto');
    input1.setAttribute('type','number');

    const label2 = document.createElement("label");
    label2.innerText = 'Mass of solvent (grams)';
    const input2 = document.createElement('input');
    input2.classList.add('solvente');
    input2.setAttribute('type','number');

    const label3 = document.createElement("label");
    label3.innerText = 'Mass of solution (grams)';
    const input3 = document.createElement('input');
    input3.classList.add('solucion');
    input3.setAttribute('type','number');

    const label4 = document.createElement("label");
    label4.innerText = '%w/w solute';
    const input4 = document.createElement('input');
    input4.classList.add('porcentajeSoluto');
    input4.setAttribute('type','number');

    const label5 = document.createElement("label");
    label5.innerText = '%w/w solvent';
    const input5 = document.createElement('input');
    input5.classList.add('porcentajeSolvente');
    input5.setAttribute('type','number');    

    const btnContainer = document.createElement('div');
    btnContainer.classList.add("btncontainer");

    const btnCalc = document.createElement('button');
    btnCalc.innerText = 'Calculate';
    btnCalc.classList.add('calcular');
    btnCalc.setAttribute('type', 'button');

    const btnClear = document.createElement('button');
    btnClear.innerText = 'Clear';
    btnClear.classList.add('clear');
    btnClear.setAttribute('type', 'button');

    btnContainer.append(btnCalc, btnClear);
    form.append(label1, input1, label2, input2, label3, input3, label4, input4, label5, input5, btnContainer);
    mainContainerCalculator.append(title, form);
    mainContainer.append(containerExit, mainContainerCalculator);

    containerWWP.appendChild(mainContainer);
}

calcPPP()

function renderCalcWWP() {
    containerWWP.classList.remove("inactive");
    calculators.classList.add("inactive");
}

p1.addEventListener('click', renderCalcWWP);

const returnWWP = document.querySelector(".returnWWP");
const exitWWP = document.querySelector(".exit-WWP");

function removeCalcWWP() {
    containerWWP.classList.add("inactive");
}

returnWWP.addEventListener("click", renderCalc);
exitWWP.addEventListener("click", removeCalcWWP);


//---------------Calculation logic------------------

const btn = document.querySelector(".calcular");

btn.addEventListener("click", calculoPorcentajePP);

function calculoPorcentajePP(){
    let gramoSoluto = document.querySelector(".sto");
    let gramoSolvente = document.querySelector(".solvente");
    let gramoSolucion = document.querySelector(".solucion");
    let porcentajePPSoluto = document.querySelector(".porcentajeSoluto");
    let porcentajePPSolvente = document.querySelector(".porcentajeSolvente");

    if (porcentajePPSoluto.value == "" && porcentajePPSolvente != "") {
        porcentajePPSoluto.value = 100 - parseFloat(porcentajePPSolvente.value);
    }

    if (gramoSolucion.value == "" && gramoSoluto.value != "" && gramoSolvente.value != "") {
        gramoSolucion.value = (parseFloat(gramoSolvente.value) + parseFloat(gramoSoluto.value))
    }

    if (gramoSoluto.value == "" && gramoSolvente.value == "") {
        gramoSoluto.value = (parseFloat(gramoSolucion.value)*parseFloat(porcentajePPSoluto.value))/100; 
        gramoSolvente.value = (parseFloat(gramoSolucion.value) - parseFloat(gramoSoluto.value));
    }

    if (gramoSoluto.value == "") {
        gramoSoluto.value = (parseFloat(porcentajePPSoluto.value)*parseFloat(gramoSolvente.value))/(100 - parseFloat(porcentajePPSoluto.value)); 
    }

    if (gramoSolvente.value == "") {
        gramoSolvente.value = (parseFloat(gramoSoluto.value)*(100/porcentajePPSoluto.value))-parseFloat(gramoSoluto.value); 
    }

    if (gramoSolucion.value == "") {
        gramoSolucion.value = (parseFloat(gramoSoluto.value)*100)/parseFloat(porcentajePPSoluto.value); 
    }
    
    if (porcentajePPSoluto.value == "") {
        porcentajePPSoluto.value = (parseFloat(gramoSoluto.value)*100)/parseFloat(gramoSolucion.value);
    }

    if (porcentajePPSolvente.value == "") {
        porcentajePPSolvente.value = 100 - parseFloat(porcentajePPSoluto.value);
    }
}

const btn2 = document.querySelector(".clear");

btn2.addEventListener("click", clear);
function clear() {
    let gramoSoluto = document.querySelector(".sto");
    let gramoSolucion = document.querySelector(".solucion");
    let gramoSolvente = document.querySelector(".solvente");
    let porcentajePPSoluto = document.querySelector(".porcentajeSoluto");
    let porcentajePPSolvente = document.querySelector(".porcentajeSolvente");

    gramoSoluto.value = "";
    gramoSolvente.value = "";
    gramoSolucion.value = "";
    porcentajePPSoluto.value = "";
    porcentajePPSolvente.value = ""; 
}
